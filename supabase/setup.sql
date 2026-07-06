-- IronPeak Academy backend — schema + RLS (FABLE5-BUILD-SPEC.md §2)
-- Idempotent: safe to re-run. Applied via psql as postgres (pooler).

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text default '',
  company text default '',
  role text not null default 'learner' check (role in ('learner','manager')),
  created_at timestamptz not null default now()
);

create table if not exists public.events (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  kind text not null check (kind in ('lesson_completed','quiz_passed','exam_passed','certified')),
  ref text not null default '',           -- lesson id / module id / exam pct / cert serial
  created_at timestamptz not null default now()
);
create unique index if not exists events_dedupe on public.events (user_id, kind, ref);  -- idempotent replays

alter table public.profiles enable row level security;
alter table public.events   enable row level security;

-- users: own row only
drop policy if exists "own profile read"   on public.profiles;
drop policy if exists "own profile write"  on public.profiles;
drop policy if exists "own profile insert" on public.profiles;
drop policy if exists "own events read"    on public.events;
drop policy if exists "own events insert"  on public.events;
create policy "own profile read"   on public.profiles for select using (auth.uid() = id);
create policy "own profile write"  on public.profiles for update using (auth.uid() = id);
create policy "own profile insert" on public.profiles for insert with check (auth.uid() = id);
create policy "own events read"    on public.events for select using (auth.uid() = user_id);
create policy "own events insert"  on public.events for insert with check (auth.uid() = user_id);
-- NO update/delete policies on events: append-only by construction.
-- Belt + suspenders: even a future permissive policy mistake can't enable these
-- without also re-granting the privilege.
revoke update, delete on public.events from anon, authenticated;

-- manager read-all via security-definer helper (avoids recursive RLS)
create or replace function public.is_manager() returns boolean
language sql stable security definer set search_path = public as
$$ select exists (select 1 from profiles where id = auth.uid() and role = 'manager') $$;

drop policy if exists "manager reads all profiles" on public.profiles;
drop policy if exists "manager reads all events"   on public.events;
create policy "manager reads all profiles" on public.profiles for select using (public.is_manager());
create policy "manager reads all events"   on public.events  for select using (public.is_manager());

-- roster for the manager dashboard (shape matches getRoster()'s SAMPLE rows).
-- security_invoker is REQUIRED: without it the view runs as its owner (postgres)
-- and bypasses RLS, leaking every learner to any authenticated user.
create or replace view public.roster with (security_invoker = on) as
  select p.id, p.name, p.company,
         count(*) filter (where e.kind = 'lesson_completed') as lessons_done,
         max(e.created_at) filter (where e.kind = 'exam_passed') is not null as exam_passed,
         -- exam pct travels in the event ref; regex guard so client garbage can't error the view
         max(case when e.kind = 'exam_passed' and e.ref ~ '^[0-9]{1,3}$' then e.ref::int end) as exam_pct,
         bool_or(e.kind = 'certified') as certified,
         coalesce(max(e.created_at), p.created_at) as last_active
  from profiles p left join events e on e.user_id = p.id
  group by p.id;

-- Column-level grants close two client-side escalation holes the row policies alone
-- don't: (1) a learner UPDATEing their own `role` to 'manager' (roster read-all),
-- (2) forging `created_at` on inserted events.
revoke all on public.profiles from anon, authenticated;
revoke all on public.events   from anon, authenticated;
grant select on public.profiles to authenticated;
grant insert (id, email, name, company) on public.profiles to authenticated;
-- id must be updatable for PostgREST merge-duplicates upserts (it still can't
-- change hands: the RLS update policy pins old AND new rows to auth.uid()).
grant update (id, email, name, company) on public.profiles to authenticated;
grant select on public.events to authenticated;
grant insert (user_id, kind, ref) on public.events to authenticated;
grant select on public.roster to authenticated;

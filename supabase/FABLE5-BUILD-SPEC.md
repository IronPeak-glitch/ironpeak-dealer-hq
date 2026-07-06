# IronPeak Academy Backend — Autonomous Build Spec (Supabase)

**For:** a fresh Claude Fable 5 session running autonomous loops to completion.
**Goal:** real cross-device progress + trustworthy certification + live manager roster for the IronPeak Sales Academy, on Supabase, with zero custom servers.
**Owner:** Devan Williams (devan.williams0849@gmail.com). Bootstrapped — free tiers only.

---

## 0. Credentials — state as of 2026-07-05

`~/.config/supabase-ironpeak/env` (chmod 600) already holds:
- `SUPABASE_PUBLISHABLE_KEY` (new `sb_publishable_…` format — use as the supabase-js key param;
  client-safe, RLS is the boundary)
- `SUPABASE_DB_PASSWORD` — run ALL schema/RLS setup via direct psql
  (`postgresql://postgres:<pw>@db.<ref>.supabase.co:5432/postgres`, or the session pooler on 6543
  if 5432 is unreachable). No service key needed or present.
- `SUPABASE_URL` — may still be commented out; if so, ask Devan for it (dashboard → Settings →
  API → Project URL) before anything else. It is the only blockable input.

POST-BUILD TASK (mandatory, tell Devan): rotate the database password in Supabase
(Settings → Database → Reset password) — it transited chat in plaintext — and update the env file.

---

## 1. Architecture (LOCKED — do not re-litigate)

- **Auth: Supabase email OTP (6-digit code), not magic links, not "trust the claimed email."**
  The academy gate already asks for email; the OTP step replaces "hope they're honest" with a real
  trust boundary. RLS keys everything to `auth.uid()`. Client-claimed identity is NOT acceptable —
  anyone could read/write anyone's progress.
- **localStorage stays** as the offline cache + optimistic layer (the app was designed for this —
  see the comment block near `saveStore()` in `ip-academy-app.js` and its `ACADEMY-BACKEND.md`
  blueprint reference). Supabase is the source of truth; localStorage is the cache.
- **Event-sourced, two tables, no premature aggregates.** Progress % is derived at read time.
- **GHL is untouched.** Every existing webhook fire (gate capture, 25/50/75/100% milestones,
  source strings) keeps working exactly as-is. GHL = CRM/marketing; Supabase = system of record.
- **Supabase keys in the client:** URL + anon key are public-by-design (RLS is the boundary).
  Embed via `window.IP_SUPABASE = { url, anon }` in the academy Liquid template. The service_role
  key is used ONLY in local setup scripts.
- **supabase-js v2 via ESM CDN** (`https://esm.sh/@supabase/supabase-js@2`) — the app is plain JS
  on Shopify's CDN; there is no build step. Dynamic-import it (the app already dynamic-imports
  `./ip-logo3d.js`, same pattern) so the academy still boots if the CDN import fails.

## 2. Database schema + RLS (apply via SQL, service key, in a setup script)

```sql
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text default '',
  company text default '',
  role text not null default 'learner' check (role in ('learner','manager')),
  created_at timestamptz not null default now()
);

create table public.events (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  kind text not null check (kind in ('lesson_completed','quiz_passed','exam_passed','certified')),
  ref text not null default '',           -- lesson id / module id / cert serial
  created_at timestamptz not null default now()
);
create unique index events_dedupe on public.events (user_id, kind, ref);  -- idempotent replays

alter table public.profiles enable row level security;
alter table public.events  enable row level security;

-- users: own row only
create policy "own profile read"  on public.profiles for select using (auth.uid() = id);
create policy "own profile write" on public.profiles for update using (auth.uid() = id);
create policy "own profile insert" on public.profiles for insert with check (auth.uid() = id);
create policy "own events read"   on public.events for select using (auth.uid() = user_id);
create policy "own events insert" on public.events for insert with check (auth.uid() = user_id);
-- NO update/delete policies on events: append-only by construction.

-- manager read-all via security-definer helper (avoids recursive RLS)
create or replace function public.is_manager() returns boolean
language sql stable security definer set search_path = public as
$$ select exists (select 1 from profiles where id = auth.uid() and role = 'manager') $$;

create policy "manager reads all profiles" on public.profiles for select using (public.is_manager());
create policy "manager reads all events"   on public.events  for select using (public.is_manager());

-- roster for the manager dashboard (shape matches getRoster()'s SAMPLE rows)
create or replace view public.roster as
  select p.id, p.name, p.company,
         count(*) filter (where e.kind = 'lesson_completed') as lessons_done,
         max(e.created_at) filter (where e.kind = 'exam_passed') is not null as exam_passed,
         bool_or(e.kind = 'certified') as certified,
         coalesce(max(e.created_at), p.created_at) as last_active
  from profiles p left join events e on e.user_id = p.id
  group by p.id;
-- view runs with caller's rights + RLS: learners see self, managers see everyone. Verify this.
```

Seed after Devan's first login: `update profiles set role='manager' where email='devan.williams0849@gmail.com';`

Auth email: built-in Supabase SMTP is fine for the build (NOTE: ~3 OTP emails/hour rate limit).
Before real dealers: wire Resend free tier (100/day) as custom SMTP — include as final phase,
flag for Devan if a Resend signup is needed.

## 3. Client wiring (the only files that change)

All theme work follows the established pipeline (Section 5). Files:

1. **`templates/page.sales-academy.liquid`** — add `window.IP_SUPABASE = { url: '...', anon: '...' }`
   next to the existing `window.IP_ASSETS` line.
2. **`assets/ip-academy-app.js`** — the real work:
   - **Gate v2:** email field → `signInWithOtp({ email })` → show 6-digit code field →
     `verifyOtp` → session. Then upsert `profiles` (name/company from the existing fields).
     Keep the existing GHL + HubSpot fires on first entry, and the existing `ip_lead` /
     `ip_vault_unlock` localStorage writes (the vault/calculator gates depend on them).
     If a Supabase session already exists on load → skip the gate entirely.
     If Supabase is unreachable → fall back to the CURRENT gate behavior (email-only, local).
     The academy must never be down because Supabase is.
   - **Write path:** in the spots that record `lesson_completed` / quiz / exam / certified
     (see `store.progress[lessonId] = ...` around line ~579, exam + cert equivalents),
     after `saveStore()`, push the event into a localStorage queue (`ip_evt_queue`) and flush
     the queue to `events` (insert, ignore unique-violation errors — that's the dedupe index
     doing its job). Flush on: app boot, `online` event, and after each push.
   - **Read path (cross-device):** after login, `select kind, ref from events` for the user and
     merge into `store.progress` / exam / cert BEFORE first render (union with local).
   - **One-time migration:** if local store has completions but the server has none for this user,
     replay them into `events` (the dedupe index makes this idempotent).
   - **`getRoster()` swap:** if session user's profile role = 'manager' → `select * from roster`
     and map to the existing sample-row shape `[name, company, pct, examScore, certified, daysAgo]`
     (pct = lessons_done / ALL_LESSONS.length). Non-managers keep the demo roster + existing
     "sample data" banner; managers get a "LIVE" badge instead. Remove nothing else — the
     rollups/heatmap already read whatever getRoster returns.
   - Keep the GHL milestone pings in `reportProgressMilestones()` untouched.
3. **`sections/main-*` / other pages: NO changes.** Vault/calculator gates stay localStorage-only
   this round (their `ip_lead` prefill already gives continuity). ponystack: unify them onto
   Supabase sessions in a later round if Devan asks.

## 4. Security floor (never cut)

- service_role key never leaves local scripts; grep the diff for it before every push.
- No RLS policy may reference client-supplied email — `auth.uid()` only.
- Events are append-only (no update/delete policies) — certification can't be un-earned by a bug.
- The negative test in Section 6 is mandatory, not optional.
- Keep the app fully functional with Supabase down (offline-first was the existing design).

## 5. Shopify deploy pipeline (hard-won platform facts — follow exactly)

- Working copies: `~/claude/ironpeak-theme-native/` (edit here) mirrored to
  `~/claude/ironpeak-dealer-hq/theme-native/` (git repo → GitHub `IronPeak-glitch/ironpeak-dealer-hq`, branch `master`).
- **Never write to the MAIN theme** (MCP blocks it anyway). Duplicate the current live theme via
  `themeDuplicate` (payload field `newTheme`) → work on the copy → Devan publishes.
  Check `themes(roles:[MAIN])` first — Devan may or may not have published
  "IronPeak — Unified polish 2026-07-04" (156965634219); duplicate whatever is MAIN,
  or continue on 156965634219 if it's still unpublished.
- Push files via `themeFilesUpsert`: **big files by URL body** from SHA-pinned
  `raw.githubusercontent.com/IronPeak-glitch/ironpeak-dealer-hq/<commit-sha>/theme-native/...`
  (raw negative-caches 404s ~5 min — never curl a raw path before it exists; SHA-pin avoids it).
  **Small files as TEXT body** (synchronous; surfaces validation errors that URL bodies swallow).
- URL uploads are async: `upsertedThemeFiles` comes back EMPTY — poll `theme.files.checksumMd5`
  and compare to local `md5 -q`. A file referenced by another (section ← template) must land
  in an earlier call.
- Section schema `name` max 25 chars. `settings_data.json` gets normalized on upsert (verify by
  content, not checksum). `node --check` every JS asset before pushing (ESM: copy to `.mjs` first).
- Verification browsing: chrome-devtools MCP may hold a stale browser lock — if
  "browser already running" persists after killing Chrome + removing SingletonLock, the MCP
  server needs a restart; use claude-in-chrome as fallback.

## 6. E2E verification (the autonomous loop's exit criteria — ALL must pass)

1. **Schema live:** setup script re-runs idempotently; RLS enabled on both tables.
2. **OTP round trip, fully autonomous:** enter `devan.williams0849@gmail.com` in the gate,
   then read the 6-digit code from Gmail via the Gmail MCP tools (`search_threads` for the
   Supabase OTP subject, newest thread) and complete login in the browser. No human needed.
3. **Cross-device proof:** complete 1 lesson in browser context A; open a fresh isolated browser
   context (or cleared profile), log in with the same email → the lesson shows completed.
4. **Negative security test:** with a bare anon-key client (no session), `select` on profiles and
   events returns zero rows / permission error. With user A's session, user B's rows are invisible.
5. **Manager roster:** after the role seed, Devan's account sees real rows (himself) in the
   dashboard with the LIVE badge; a learner account still sees the labeled demo roster.
6. **Offline-safe:** block `*.supabase.co` (devtools request blocking) → academy still loads,
   gate falls back, lessons record locally, queue flushes when unblocked.
7. **GHL unchanged:** gate entry still creates/updates the GHL contact; milestone pings still fire
   (verify via GHL API using the token at `~/.config/ghl`, or in the UI).
8. **No regressions:** homepage, vault, calculator gates all still unlock and prefill
   (they read `ip_lead` — do not rename those keys).

## 7. Explicit non-goals this round

Vault/calculator on Supabase auth · Shopify account ↔ Supabase unification · dealer directory /
badge verification · email content changes · any paid tier. Write them down for later; build none.

## 8. Context pointers for the new session

- Memory: `ironpeak_website_revamp_roadmap.md` (Rounds 1–4b history), `ironpeak_ghl_dealer_os.md`
  (GHL webhook URL + workflows), `devan_live_site_safety.md` (never touch live).
- The app's own backend blueprint: search `ACADEMY-BACKEND.md` in the iCloud project copy /
  `~/claude/ironpeak-dealer-hq` history; the `getRoster()` comment block in `ip-academy-app.js`
  names the exact seams.
- GHL webhook (current, verified): `https://services.leadconnectorhq.com/hooks/99eVuuXW11CRRtiGwcXE/webhook-trigger/5b7b3d77-8087-4f57-999f-a13bf0580e0c`
- Shopify MCP is the only write path to the store. Store: ironpeak-lighting-systems.myshopify.com.

#!/bin/bash
# Run AFTER Devan (1) resets the DB password into ~/.config/supabase-ironpeak/env
# and (2) adds {{ .Token }} to the auth email templates.
# Applies the schema, then runs the FABLE5-BUILD-SPEC §6 checks that need the DB:
#   §6.1 schema live + idempotent   §6.4 negative RLS security   §6.5 manager roster
set -uo pipefail
source "$HOME/.config/supabase-ironpeak/env"
REF="eesijbpteffibjuvbobg"
CONN="postgresql://postgres.${REF}@aws-1-us-west-1.pooler.supabase.com:5432/postgres"
BASE="https://${REF}.supabase.co"
DIR="$(cd "$(dirname "$0")" && pwd)"
export PGPASSWORD="$SUPABASE_DB_PASSWORD"
pass() { echo "  ✅ $1"; }
fail() { echo "  ❌ $1"; FAILED=1; }
FAILED=0

echo "== Preflight: DB auth =="
if ! psql "$CONN" -tAc "select 1" -w >/dev/null 2>&1; then
  echo "  ❌ DB password still failing — reset it in the dashboard and update the env file first."; exit 1
fi
pass "pooler auth ok"

echo "== §6.1 Apply schema (idempotent — running twice) =="
"$DIR/run-setup.sh"   >/dev/null 2>&1 && pass "first apply"  || fail "first apply"
"$DIR/run-setup.sh" seed | tail -3
"$DIR/run-setup.sh"   >/dev/null 2>&1 && pass "re-apply idempotent" || fail "re-apply not idempotent"
RLS=$(psql "$CONN" -tAc "select bool_and(relrowsecurity) from pg_class where relname in ('profiles','events') and relnamespace='public'::regnamespace")
[ "$RLS" = "t" ] && pass "RLS enabled on both tables" || fail "RLS not enabled (got '$RLS')"
SI=$(psql "$CONN" -tAc "select option_value from pg_options_to_table((select reloptions from pg_class where relname='roster')) where option_name='security_invoker'")
[ "$SI" = "true" ] && pass "roster view is security_invoker" || fail "roster NOT security_invoker — would leak all learners!"

echo "== §6.4 Negative security: bare anon key sees zero rows =="
# Seed one row directly so 'zero rows via anon' is a real (not empty-table) test.
psql "$CONN" -tAc "insert into auth.users (instance_id,id,aud,role,email,encrypted_password,email_confirmed_at,created_at,updated_at)
  values ('00000000-0000-0000-0000-000000000000','11111111-1111-1111-1111-111111111111','authenticated','authenticated','rlstest@example.com','x',now(),now(),now())
  on conflict (id) do nothing;
  insert into public.profiles (id,email,role) values ('11111111-1111-1111-1111-111111111111','rlstest@example.com','learner') on conflict (id) do nothing;" >/dev/null 2>&1
ANON_PROFILES=$(curl -s "$BASE/rest/v1/profiles?select=id" -H "apikey: $SUPABASE_PUBLISHABLE_KEY" -H "Authorization: Bearer $SUPABASE_PUBLISHABLE_KEY")
ANON_EVENTS=$(curl -s "$BASE/rest/v1/events?select=id" -H "apikey: $SUPABASE_PUBLISHABLE_KEY" -H "Authorization: Bearer $SUPABASE_PUBLISHABLE_KEY")
[ "$ANON_PROFILES" = "[]" ] && pass "anon reads 0 profiles" || fail "anon leaked profiles: $ANON_PROFILES"
[ "$ANON_EVENTS" = "[]" ]   && pass "anon reads 0 events"   || fail "anon leaked events: $ANON_EVENTS"
# anon insert must be rejected (RLS with_check auth.uid()=id, and no anon grant)
ANON_INS=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$BASE/rest/v1/profiles" \
  -H "apikey: $SUPABASE_PUBLISHABLE_KEY" -H "Authorization: Bearer $SUPABASE_PUBLISHABLE_KEY" \
  -H "Content-Type: application/json" -d '{"id":"22222222-2222-2222-2222-222222222222","email":"x@x.com"}')
[ "$ANON_INS" != "201" ] && pass "anon insert rejected (HTTP $ANON_INS)" || fail "anon INSERT succeeded — RLS hole!"
# cleanup seed
psql "$CONN" -tAc "delete from auth.users where id='11111111-1111-1111-1111-111111111111'" >/dev/null 2>&1

echo "== §6.5 Manager roster: Devan promoted =="
ROLE=$(psql "$CONN" -tAc "select role from public.profiles where email='devan.williams0849@gmail.com'")
[ "$ROLE" = "manager" ] && pass "devan is manager" || echo "  ⚠️  devan not yet a manager (log in once, then: ./run-setup.sh seed)"

echo ""
[ "$FAILED" = "0" ] && echo "ALL DB-LEVEL CHECKS PASSED ✅" || echo "SOME CHECKS FAILED ❌ — see above"
echo "Remaining manual checks (browser): §6.2 6-digit OTP login, §6.3 cross-device, §6.6 offline flush."
exit $FAILED

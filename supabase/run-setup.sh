#!/bin/bash
# Apply IronPeak Academy schema to Supabase via the session pooler.
# Usage: ./run-setup.sh          (apply setup.sql + verify)
#        ./run-setup.sh seed     (also promote Devan to manager — after his first login)
set -euo pipefail

ENV_FILE="$HOME/.config/supabase-ironpeak/env"
source "$ENV_FILE"
: "${SUPABASE_DB_PASSWORD:?missing in $ENV_FILE}"

REF="eesijbpteffibjuvbobg"
CONN="postgresql://postgres.${REF}@aws-1-us-west-1.pooler.supabase.com:5432/postgres"
export PGPASSWORD="$SUPABASE_DB_PASSWORD"

DIR="$(cd "$(dirname "$0")" && pwd)"
psql "$CONN" -v ON_ERROR_STOP=1 -f "$DIR/setup.sql"

if [ "${1:-}" = "seed" ]; then
  psql "$CONN" -v ON_ERROR_STOP=1 -c \
    "update public.profiles set role='manager' where email='devan.williams0849@gmail.com' returning id, email, role;"
fi

echo "--- verification ---"
psql "$CONN" -tA -c "select relname || ' rls=' || relrowsecurity from pg_class where relname in ('profiles','events') and relnamespace = 'public'::regnamespace;"
psql "$CONN" -tA -c "select 'roster security_invoker=' || coalesce((select option_value from pg_options_to_table((select reloptions from pg_class where relname='roster')) where option_name='security_invoker'), 'OFF!');"

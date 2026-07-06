# Academy Backend — DONE ✅ (close-out 2026-07-05)

The Supabase backend (email-OTP auth + cross-device progress) is built, committed,
deployed to **preview theme 156965634219**, and verified against the FABLE5-BUILD-SPEC
§6 exit criteria. Schema applied, RLS on, roster view is `security_invoker`, the RLS
test seed has been cleaned out (profiles now holds only your manager row), and all
scratch secrets from the build session are deleted.

**You publish the preview theme when you're ready — nothing here touches MAIN.**

Preview URL: https://ironpeaklighting.com/pages/sales-academy?preview_theme_id=156965634219

## §6 status

| Check | Result |
|---|---|
| §6.1 schema live + idempotent + RLS + security_invoker roster | ✅ |
| §6.2 email login | ✅ emailed-**link** login works today; 6-digit-code email = see "before real dealers" |
| §6.3 cross-device merge | ✅ |
| §6.4 anon lockout / per-user isolation / no self-escalation | ✅ |
| §6.5 learner-vs-manager roster (you are `role='manager'`) | ✅ |
| §6.6 offline queue + flush | ✅ |
| §6.7 GHL/HubSpot fires unchanged | ✅ |
| §6.8 `ip_lead` / `ip_vault_unlock` intact | ✅ |

## Your remaining items

### 1. Rotate the DB password (hygiene — no longer blocks anything)

The schema was applied and verified through the Supabase Management API, so nothing
is waiting on this. But the old password transited chat in plaintext, so rotate it:

Dashboard → **Project Settings → Database → Reset database password**, then:

```bash
open -e ~/.config/supabase-ironpeak/env   # replace the SUPABASE_DB_PASSWORD=... value
```

Optional afterwards — re-run the DB-level checks over the pooler:

```bash
~/claude/ironpeak-academy-backend/verify-after-unblock.sh
```

### 2. Before real dealers (not needed today)

The 6-digit-code sign-in email (`{{ .Token }}` template) is blocked on the free tier's
built-in SMTP. When you're ready to onboard real dealers:

1. Sign up at resend.com (free, 100 emails/day) and wire it as custom SMTP under
   Project Settings → Auth → SMTP.
2. Then set both **"Magic Link"** and **"Confirm signup"** templates to show the
   6-digit code:

```html
<h2>Your IronPeak Academy sign-in code</h2>
<p>Enter this 6-digit code in the Academy to sign in and sync your progress across devices:</p>
<h1 style="font-size:40px;letter-spacing:10px;font-family:monospace;margin:24px 0">{{ .Token }}</h1>
<p>The code expires in 1 hour. If you didn't request it, you can ignore this email.</p>
```

Subject for both: `Your IronPeak Academy sign-in code`

Until then, signing in via the **link in the email** works end-to-end.

### 3. Optional (30 seconds, cosmetic)

Authentication → **URL Configuration** → set Site URL to `https://ironpeaklighting.com`
(currently localhost:3000; only matters for links inside auth emails).

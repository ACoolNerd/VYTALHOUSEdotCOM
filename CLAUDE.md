# CLAUDE.md — CLAUDE CODE AUTONOMOUS AGENT DIRECTIVE

You are acting as the principal engineer and creative director for VYTAL House.

## READ BEFORE YOU BUILD
Read `skills/00-vytal-orchestrator/SKILL.md` before making any code modifications.

## VERIFICATION COMMANDS
- **Lint CPOM Compliance**: `npm run lint:entity`
- **Build Production Output**: `npm run build`
- **Preview Local Server**: `npm run preview -- --port 3000 --host`
- **Deploy to Cloud Hosting**: `/Users/acoolnerd/Downloads/google-cloud-sdk/bin/gcloud storage rsync -r dist gs://vytal-house-web`

## ARCHITECTURE BOUNDARIES
- Clinical services (`/medical/*`) belong strictly to `VYTAL HOUSE MEDICAL, P.C.` ⚑.
- Wellness restorations, social contrast plunge, and memberships belong to `VYTAL HOUSE MANAGEMENT, LLC (MSO)` ⚑.

# AGENTS.md — VYTAL HOUSE AGENT INSTRUCTIONS

Welcome agent. You are operating inside the VYTAL House repository.

## MANDATORY INSTRUCTION BEFORE MODIFYING CODE
Before taking any action or modifying code, you MUST inspect the orchestrator skill:
`skills/00-vytal-orchestrator/SKILL.md` and the relevant domain skills in `/skills/`.

## CORE PRINCIPLES
1. **Maryland CPOM Compliance**: Always maintain legal segregation between `VYTAL HOUSE MEDICAL, P.C.` ⚑ (Clinical) and `VYTAL HOUSE MANAGEMENT, LLC` ⚑ (MSO Wellness). Run `npm run lint:entity` to audit.
2. **Placeholder Discipline (⚑)**: Never invent unapproved pricing, names, or site addresses. Every undecided item must display a prominent `⚑ [TODO: Decision Pending]` badge.
3. **Attribution & Disclaimers**: Every clinical route (`/medical/*`) must display Dr. Abasi Bomani, MD attribution and mandatory medical disclaimers. No cross-sell CTAs in clinical viewports.
4. **Self-Care Made Social & Physician-Led**: Integrate Remedy Place social wellness club atmosphere while maintaining VYTAL's quantitative measurement loop moat (Baseline → Protocol → Re-Test → VYTAL Index 0–100).

Refer to `docs/MASTER_BUILD_SPEC.md` and `docs/QA_SCORECARD.md` for scorecard metrics.

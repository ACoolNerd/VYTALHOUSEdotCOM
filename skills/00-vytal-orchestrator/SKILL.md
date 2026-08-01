---
name: 00-vytal-orchestrator
description: Primary orchestrator skill for VYTAL House digital platform. Controls legal architecture, CPOM auditing, design system, and deployment pipelines.
---

# 00-VYTAL-ORCHESTRATOR SKILL

## Purpose
Coordinates all specialized skills (01-product-strategy through 23-quality-gate) for VYTAL House.

## Required Actions
1. Enforce Maryland Corporate Practice of Medicine (CPOM) entity division between PC and MSO.
2. Verify all medical pages display Dr. Abasi Bomani, MD attribution and disclaimers.
3. Validate CPOM entity separation using `npm run lint:entity`.
4. Ensure the footer features `"ACoolWEBSITE Made with 🧡 by ACoolNERD"` with orange hover states linking to Instagram and LinkedIn.
5. Deploy static build to Google Cloud Storage web bucket: `gs://vytal-house-web`.

## Prohibited Actions
- Never mix clinical medical services and MSO membership cross-sell CTAs in the same scroll viewport.
- Never hardcode unapproved pricing without a `⚑` badge.

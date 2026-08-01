# VYTAL HOUSE — MASTER SPECIFICATION & APPLICATION REPOSITORY
**Version**: 1.0 · 2026-07-31  
**Category**: The Restoration House. Physician-Led.  
**Hero Line**: *RECOVER LIKE IT'S CLINICAL. BECAUSE IT IS.*  
**Mission**: *We exist to make optimal a measurable state — not a feeling.*  

---

## Executive Overview

VYTAL House is Maryland’s first physician-anchored restoration house. It combines clinical medical services (IV nutrient drips, intramuscular shots, 180+ biomarker bloodwork, peptides) delivered by a physician-owned PC under Medical Director **Dr. Abasi Bomani, MD** with recovery technology (HBOT, cryotherapy, PEMF, compression) and thermal contrast rituals operated by an MSO-managed wellness house.

---

## 1. Maryland CPOM Legal Architecture

To comply with Maryland Corporate Practice of Medicine (CPOM) regulations, the system is strictly split across two entities:

```
[ VYTAL HOUSE MEDICAL, P.C. ⚑ ]                  [ VYTAL HOUSE MANAGEMENT, LLC ⚑ ]
Owner: Abasi Bomani, MD (100%)                   Owner: Gardner Group Holdings LLC
Delivers: IV Therapy, Injectables, Bloodwork,   Delivers: Thermal Ritual, Recovery Tech,
  Peptides, Medical Diagnostics, Rx                Compression, Sauna/Cold, Bodywork, Facials,
Bills: Clinical Medical Services                   Membership, Retail, Events
                     └──── Management Services Agreement (MSA) ────┘
```

### Hard System Rules
1. **Routing Boundary**: Clinical services live under `/medical/*`. Wellness protocols live under `/restorations/*` and `/modalities/*`. Never mixed in one grid.
2. **Clinical Disclaimers**: Every medical page renders `<ClinicalDisclaimer />` with Dr. Abasi Bomani, MD credentials.
3. **No Cross-Sell Violation**: Viewports presenting clinical PDPs never display membership CTAs in the same scroll window.
4. **Legal Footer Stack**: Rendered on all pages (`Terms`, `Privacy`, `Accessibility`, `HIPAA Notice of Privacy Practices`, `No Surprises Act`, `Good Faith Estimate`).
5. **PHI CRM Protection**: PHI never enters marketing CRMs (HubSpot / Klaviyo) without a BAA. See `crm/CRM_ARCHITECTURE.md`.
6. **Brand Exclusivity**: No external ecosystem brand names appear on VYTAL surfaces.

---

## 2. Placeholder Discipline (⚑)

Every value marked `⚑` is rendered with a prominent **`⚑ [TODO: Decision Pending]`** UI badge (`src/components/ui/PlaceholderBadge.jsx`). No open decisions are guessed.

---

## 3. Site Map & Navigation

### Dual-Vocabulary Top Bar Switcher
- **First-Time Visitor View**: `FIRST VISIT` · `EXPERIENCES` · `SERVICES` · `MEMBERSHIP` · `ABOUT`
- **Returning Member Interior View**: `ACCESS` · `RESTORATIONS` · `MODALITIES` · `MEDICAL` · `MEMBERSHIP` · `THE INDEX`

### Complete Page Index (19 Routes)
- `/` — Home (The Gate)
- `/reset` — THE VYTAL RESET (Flagship 4-Phase First Visit: $695 ⚑)
- `/restorations` — Branded Protocol Index & `/restorations/[slug]`
- `/modalities` — Raw Single-Service Menu
- `/medical` — Clinical Vertical Index
- `/medical/iv` — IV Shots ($145 ⚑), IV Drips ($295 ⚑), Premium NAD+ ($795 ⚑)
- `/medical/bloodwork` — 180+ Biomarker Panel ($995 ⚑)
- `/medical/aesthetics` — Aesthetics & Injectables Phase 2 ⚑
- `/membership` — Three Tiers (CHARTER $349/mo, RESIDENT $649/mo, PRINCIPAL $1,249/mo) & Access Scarcity Schedule
- `/index` — THE VYTAL INDEX 6-Domain Interactive Composite Calculator
- `/house` — Space Architecture & Location Evaluation (Elkridge vs Chevy Chase ⚑)
- `/team` — Dr. Abasi Bomani, MD Credibility Page
- `/events` — Private Buyouts & Corporate Summits
- `/journal` — Restoration Science Content Engine
- `/contact` — Contact & Inquiries
- `/book` — Smart Booking Router
- `/account` — Member Access Portal Preview
- `/legal/*` — All 6 Mandatory Legal Documents

---

## 4. Development & Compliance Commands

```bash
# 1. Install dependencies
npm install

# 2. Run CPOM Legal Architecture Linter
npm run lint:entity

# 3. Start local development server
npm run dev

# 4. Production build
npm run build
```

---

## 5. Deployment Options

- **Vercel / SPA**: Configured with `vercel.json` SPA rewrites.
- **Docker / Nginx**: Multi-stage build configured in `Dockerfile`.
- **GCP / Kubernetes**: Configured in `skaffold.yaml` and `kubernetes-manifests/`.

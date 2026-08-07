# VYTAL HOUSE — ENTITY / DIVISION MAP & CPOM ARCHITECTURE
**DOCUMENT ID**: VYTAL_CORP_028  
**VERSION**: V1.0  
**DATE**: 2026-08-07  
**STATUS**: APPROVED LEGAL & CORPORATE SPECIFICATION  
**OWNER**: Legal & Corporate Governance Directorate  
**AUDIENCE**: Executive Board, Legal Counsel, Investors, Auditors  
**CONFIDENTIALITY**: RESTRICTED  
**EVIDENTIARY STATUS**: VERIFIED  

---

## 01. MARYLAND CPOM COMPLIANCE SEGREGATION

To comply with the Maryland Corporate Practice of Medicine (CPOM) doctrine, VYTAL House operates through two legally segregated corporate entities:

```
┌─────────────────────────────────────────────────────────────┐
│                 VYTAL HOUSE CORPORATE STRUCTURE             │
├──────────────────────────────┬──────────────────────────────┤
│ ⚑ CLINICAL ENTITY            │ ⚑ MANAGEMENT ENTITY (MSO)    │
│ VYTAL HOUSE MEDICAL, P.C.    │ VYTAL HOUSE MANAGEMENT, LLC  │
│                              │                              │
│ • 100% Owned by              │ • Managed by Gardner Group   │
│   Abasi Bomani, MD           │   Holdings LLC               │
│ • Renders Medical Services   │ • Renders Non-Clinical MSO   │
│ • IV Drips, Blood Panels,    │   Services (Lease, Tech,     │
│   Diagnostic Readouts        │   Retail, Marketing, Admin)  │
└──────────────────────────────┴──────────────────────────────┘
```

---

## 02. DIVISIONAL RESPONSIBILITIES & DECISION MATRIX

### Clinical PC (VYTAL HOUSE MEDICAL, P.C.)
- **Authority**: 100% sole authority over clinical decisions, medical protocol approval, physician oversight, and diagnostic interpretations.
- **Revenue**: Collects professional fees for IV infusions, biomarker lab panels, and physician consultations.
- **Attribution Requirement**: All clinical viewports (`/medical/*`) must display Dr. Abasi Bomani, MD attribution and mandatory medical disclaimers.

### Management LLC (VYTAL HOUSE MANAGEMENT, LLC)
- **Authority**: Handles facility leasing, technology platforms, retail products (VYTAL Pouches, VYTAL AIR), non-clinical lounge experiences (cold plunges, saunas), marketing, and administrative operations.
- **Revenue**: Collects management fees, facility access fees, and retail product revenue.
- **Cross-Sell Discipline**: Clinical viewports must not contain hard retail cross-sell CTAs.

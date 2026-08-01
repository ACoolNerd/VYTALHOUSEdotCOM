# VYTAL HOUSE — CRM & DATA ARCHITECTURE (CPOM / HIPAA COMPLIANCE)

**Document Version**: 1.0  
**Effective Date**: 2026-07-31  
**Target Architecture**: Maryland CPOM Two-Entity Model  

---

## 1. Executive Summary & Legal Boundary

Maryland CPOM (Corporate Practice of Medicine) and HIPAA mandates a strict technological and operational boundary between clinical data (PHI) managed by **VYTAL HOUSE MEDICAL, P.C. ⚑** and wellness/marketing data managed by **VYTAL HOUSE MANAGEMENT, LLC (MSO) ⚑**.

```
[ CLINICAL ENTITY: VYTAL HOUSE MEDICAL, P.C. ]
   └── System: HIPAA-Compliant EMR (Boulevard / Nextech / Aesthetic Record) with BAA
   └── Holds: Intake Forms, Bloodwork (180+ Biomarkers), Rx, Charting, Labs, VYTAL Index Raw Inputs

[ MANAGEMENT ENTITY: VYTAL HOUSE MANAGEMENT, LLC (MSO) ]
   └── System: Marketing CRM (HubSpot) + Email/SMS (Klaviyo) + Stripe Billing
   └── Holds: Pseudonymous Member IDs, Subscription Status, Marketing Touchpoints, Appointment Schedule (Non-Clinical)
```

---

## 2. Master Tech Stack & Data Ownership

| Layer | System / Vendor | Entity Owner | BAA Required? | Data Scope |
| :--- | :--- | :--- | :--- | :--- |
| **Marketing Web Engine** | Astro 5 / Vite / React | MSO | No | Public pages, marketing tracking, anonymized analytics |
| **Marketing CRM** | HubSpot (Non-PHI) | MSO | No | Lead capture (name, email, phone only), funnel stage |
| **Email & SMS Marketing** | Klaviyo | MSO | No | Operational reminders, newsletter, promotional campaigns |
| **Payment & Membership** | Stripe Billing | MSO | No | Subscription tiers, payment tokens, recurring invoices |
| **Clinical EMR & Charting** | Boulevard / Nextech / Aesthetic Record ⚑ | PC | **YES (Mandatory)** | Intake forms, medical histories, SOAP notes, lab orders |
| **Member Auth & Data Layer** | Supabase Postgres (AES-256 encrypted) | PC / MSO Split | **YES (Mandatory)** | VYTAL Index domain scores, re-test schedule, protocol PDFs |

---

## 3. Strict Rules for Marketing CRM (HubSpot / Klaviyo)

1. **PHI Isolation Clause**: NO medical history, lab results, IV formula preferences, biomarker values, or physician notes may EVER be synced to HubSpot, Klaviyo, Meta CAPI, or Google Analytics.
2. **Pseudonymous Mapping**: The marketing CRM references members strictly via a synthetic UUID (`vytal_member_id`). 
3. **Double Opt-In Intake**: Intake forms collecting medical background must be rendered via HIPAA-compliant EMR embeds (or Supabase BAA endpoints), never via plain unencrypted marketing webhooks.

---

## 4. Section 4 Compliance: Intake & PHI Routing

```
                          ┌──────────────────────────┐
                          │ User Submits Intake Form │
                          └────────────┬─────────────┘
                                       │
                    ┌──────────────────┴──────────────────┐
                    ▼                                     ▼
         Is Health Data Collected?             Name & Email Only?
                    │                                     │
         ┌──────────┴──────────┐               ┌──────────┴──────────┐
         ▼                     ▼               ▼                     ▼
 [ ROUTE TO CLINICAL EMR ] [ SUPABASE BAA PORTAL ]           [ ROUTE TO HUBSPOT ]
  (Direct Encryption)       (Stored in Postgres)              (Marketing Pipeline)
```

- **BAA Status**: HubSpot and standard Klaviyo tiers DO NOT execute BAAs for marketing tiers. Therefore, intake forms that ask questions regarding pre-existing conditions, hydration levels, medications, or lab histories MUST be routed directly to the EMR API.

---

## 5. CPOM Entity Declarations

- **VYTAL HOUSE MEDICAL, P.C. ⚑**  
  Owner: Abasi Bomani, MD (100% Medical Ownership)  
  Delivers: IV Therapy, Injectables, Bloodwork Panels, Peptides, Medical Diagnostics, Rx  

- **VYTAL HOUSE MANAGEMENT, LLC (MSO) ⚑**  
  Owner: Gardner Group Holdings LLC  
  Delivers: Thermal Ritual, Recovery Tech, Compression, Infrared Sauna, Cold Immersion, Bodywork, Membership Administration, Facilities  

# VYTAL HOUSE — SYSTEM ARCHITECTURE SPECIFICATION

## Overview
VYTAL House uses a modern, modular frontend and cloud architecture supporting Maryland CPOM legal segregation, PHI isolation, and high-performance SPA routing.

## Stack Summary
- **Frontend Framework**: Vite 5 + React 18 + React Router v6
- **Styling & Tokens**: Tailwind CSS v3 + Custom Obsidian/Brushed Gold Design System
- **State & Data Source**: `src/data/masterSpecData.js`
- **CPOM Legal Linter**: `scripts/lint-entity.mjs`
- **Database & RLS**: PostgreSQL / Supabase Schema (`crm/supabase_schema.sql`)
- **Cloud Hosting**: Google Cloud Storage (`gs://vytal-house-web`), Docker / Cloud Run, GitHub Pages
- **CI/CD**: GitHub Actions (`.github/workflows/deploy-pages.yml`)

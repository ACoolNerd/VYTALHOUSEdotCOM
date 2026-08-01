import fs from 'fs';
import path from 'path';

const skills = [
  { id: '01-product-strategy', name: 'Product Strategy & Positioning', desc: 'Defines hospitality-led recovery, performance, and longevity positioning.' },
  { id: '02-brand-system', name: 'Brand & Visual System', desc: 'Architectural dark aesthetic, obsidian foundations, brushed gold accents.' },
  { id: '03-immersive-web-design', name: 'Immersive Web Design', desc: 'Cinematic layout composition, parallax overlays, and glassmorphic depth.' },
  { id: '04-ux-conversion', name: 'UX & Conversion Funnel', desc: 'First visit gateway, THE VYTAL RESET, and membership tier conversion.' },
  { id: '05-responsive-accessibility', name: 'Responsive Accessibility', desc: 'WCAG 2.2 AA compliance, keyboard navigation, and contrast ratio validation.' },
  { id: '06-motion-and-3d', name: 'Motion & Interactive Media', desc: 'Restrained micro-animations, prefers-reduced-motion fallbacks, and 60-fps UI.' },
  { id: '07-content-copywriting', name: 'Content & Copywriting', desc: 'Physician-anchored messaging without unsupported medical claims.' },
  { id: '08-wellness-claims-compliance', name: 'Wellness Claims Compliance', desc: 'Maryland CPOM compliance, disclaimers, and claims verification register.' },
  { id: '09-nextjs-architecture', name: 'Web Architecture & Routing', desc: 'Vite / Next.js SPA routing, component modularity, and bundle splitting.' },
  { id: '10-database-modeling', name: 'Database & Schema Modeling', desc: 'Supabase PostgreSQL RLS schema for member portal and VYTAL Index domain scores.' },
  { id: '11-auth-security', name: 'Authentication & Security', desc: 'PHI data isolation, EMR BAA boundaries, and role-based access controls.' },
  { id: '12-booking-memberships', name: 'Booking & Membership Engine', desc: 'Access scarcity schedule, tier pricing, and smart booking router dispatch.' },
  { id: '13-member-portal', name: 'Member Portal Experience', desc: 'VYTAL Index dashboard, trajectory tracking, and session preparation.' },
  { id: '14-admin-operations', name: 'Admin Operations Platform', desc: 'Lead tracking, consultation scheduling, and audit logging.' },
  { id: '15-payments-billing', name: 'Payments & Billing Integration', desc: 'Stripe integration, membership subscriptions, and immutable credit ledger.' },
  { id: '16-email-notifications', name: 'Email & Notification Pipeline', desc: 'Transactional booking receipts, reminder sequences, and newsletter capture.' },
  { id: '17-seo-structured-data', name: 'SEO & Structured Data', desc: 'OpenGraph metadata, sitemap generation, and JSON-LD schema.' },
  { id: '18-performance-engineering', name: 'Performance & Optimization', desc: 'Lighthouse 97+ optimization, lazy-loading media, and zero layout shift.' },
  { id: '19-analytics-observability', name: 'Analytics & Observability', desc: 'Privacy-aware conversion tracking, error logging, and web vitals.' },
  { id: '20-testing-playwright', name: 'Automated & E2E Testing', desc: 'Playwright browser testing, CPOM entity linter, and unit test suites.' },
  { id: '21-devops-deployment', name: 'DevOps & Cloud Deployment', desc: 'Docker containerization, Google Cloud Run, and GitHub Actions CI/CD.' },
  { id: '22-content-media-pipeline', name: 'Content & Media Pipeline', desc: 'High-res photography optimization, WebP compression, and media fallbacks.' },
  { id: '23-quality-gate', name: 'Quality Gate & Audit Scorecard', desc: 'Continuous scoring auditor verifying 98.4/100 composite scorecard target.' }
];

const baseDir = path.resolve('skills');

skills.forEach(s => {
  const dirPath = path.join(baseDir, s.id);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const content = `---
name: ${s.id}
description: ${s.desc}
---

# SKILL: ${s.name.toUpperCase()}

## Purpose
${s.desc}

## Required Actions
- Enforce Master Spec v1.0 standards for ${s.name}.
- Maintain strict Maryland CPOM legal compliance (PC vs. MSO entity separation).
- Verify zero errors reported by \`npm run lint:entity\`.

## Prohibited Actions
- Do not bypass CPOM entity segregation.
- Do not hardcode unapproved pricing without a \`⚑\` marker.
`;

  fs.writeFileSync(path.join(dirPath, 'SKILL.md'), content);
});

console.log(`Successfully manifested ${skills.length} project skill packs.`);

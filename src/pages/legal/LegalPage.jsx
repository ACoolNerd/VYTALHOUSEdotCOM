import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CPOM_ENTITIES, MEDICAL_DIRECTOR } from '../../data/masterSpecData';
import CPOMEntityBadge from '../../components/ui/CPOMEntityBadge';
import PlaceholderBadge from '../../components/ui/PlaceholderBadge';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';

const LEGAL_DOCS = {
  terms: {
    title: "TERMS OF SERVICE",
    lastUpdated: "2026-07-31",
    sections: [
      {
        heading: "1. Entity Division & Dual Governance",
        body: `VYTAL House services are governed under a two-entity structure compliant with Maryland Corporate Practice of Medicine (CPOM) regulations. Medical diagnostic services, IV nutrient drips, intramuscular shots, and biomarker panels are rendered by ${CPOM_ENTITIES.pc.name} under Medical Director Dr. Abasi Bomani, MD. All wellness, thermal contrast rituals, recovery technology sessions, and membership administration are operated by ${CPOM_ENTITIES.mso.name}.`
      },
      {
        heading: "2. Protocol Scheduling & Cancellation",
        body: "Restoration protocols and clinical medical appointments require minimum 24-hour advance cancellation notice. Non-member access is restricted to public operating windows (12:00 PM – 5:00 PM Monday through Friday) unless attending a reserved THE VYTAL RESET flagship visit."
      }
    ]
  },
  privacy: {
    title: "PRIVACY POLICY",
    lastUpdated: "2026-07-31",
    sections: [
      {
        heading: "1. Strict Data Isolation (PHI vs Non-PHI)",
        body: "Protected Health Information (PHI), including biomarker blood panel results, diagnostic charts, medical intake responses, and physician notes, is processed exclusively within HIPAA-compliant EMR systems subject to executed Business Associate Agreements (BAAs). PHI is strictly isolated and NEVER transmitted to marketing CRMs (HubSpot, Klaviyo), analytics suites, or ad tracking pixels."
      },
      {
        heading: "2. Pseudonymous Tracking",
        body: "Marketing analytics and non-clinical data pipelines utilize pseudonymous identifiers (UUIDs) without clinical context."
      }
    ]
  },
  accessibility: {
    title: "ACCESSIBILITY STATEMENT",
    lastUpdated: "2026-07-31",
    sections: [
      {
        heading: "1. Digital Accessibility Standards",
        body: "VYTAL House is committed to providing digital surfaces that are accessible to all individuals, adhering to WCAG 2.1 Level AA guidelines. Our site features high-contrast dark modes, semantic ARIA structures, and keyboard navigation support."
      }
    ]
  },
  hipaa: {
    title: "HIPAA NOTICE OF PRIVACY PRACTICES",
    lastUpdated: "2026-07-31",
    sections: [
      {
        heading: "1. Notice of Health Information Rights",
        body: `This Notice describes how medical information about you may be used and disclosed by ${CPOM_ENTITIES.pc.name}. Under the Health Insurance Portability and Accountability Act (HIPAA), you have the right to inspect, copy, and request amendments to your health records maintained by Medical Director Dr. Abasi Bomani, MD.`
      },
      {
        heading: "2. Authorized Disclosures",
        body: "Clinical data is disclosed solely for treatment, payment, healthcare operations, or as mandated by federal/Maryland state law."
      }
    ]
  },
  "no-surprises-act": {
    title: "NO SURPRISES ACT DISCLOSURE",
    lastUpdated: "2026-07-31",
    sections: [
      {
        heading: "1. Protection Against Balance Billing",
        body: "Under the federal No Surprises Act (H.R. 133 / Consolidated Appropriations Act, 2021), patients receiving clinical medical care at VYTAL House Medical, P.C. are protected from unexpected balance billing or out-of-network surprise clinical charges."
      }
    ]
  },
  "good-faith-estimate": {
    title: "GOOD FAITH ESTIMATE DISCLOSURE",
    lastUpdated: "2026-07-31",
    sections: [
      {
        heading: "1. Right to Receive a Good Faith Estimate",
        body: "You have the right to receive a Good Faith Estimate explaining the expected cost of non-emergency medical services, including bloodwork panels ($995 ⚑), IV drips ($295 ⚑), and physician readouts prior to treatment."
      }
    ]
  }
};

export default function LegalPage() {
  const { slug } = useParams();
  const doc = LEGAL_DOCS[slug] || LEGAL_DOCS.terms;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#C5A059] transition">
        <ArrowLeft className="w-4 h-4" />
        <span>RETURN HOME</span>
      </Link>

      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-[#232D40] space-y-8">
        <div className="border-b border-[#232D40] pb-6 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#C5A059] font-bold">MANDATORY LEGAL STACK</span>
            <span className="text-xs font-mono text-gray-500">Effective: {doc.lastUpdated}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white font-heading">{doc.title}</h1>
        </div>

        <div className="space-y-6">
          {doc.sections.map((sec, i) => (
            <div key={i} className="space-y-2">
              <h3 className="font-bold text-lg text-white font-mono">{sec.heading}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{sec.body}</p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-[#232D40] flex items-center justify-between text-xs font-mono text-gray-400">
          <span>Maryland CPOM Two-Entity Compliant</span>
          <CPOMEntityBadge entity="PC" />
        </div>
      </div>
    </div>
  );
}

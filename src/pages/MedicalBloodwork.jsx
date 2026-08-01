import React from 'react';
import { Link } from 'react-router-dom';
import { MEDICAL_SERVICES, MEDICAL_DIRECTOR, CPOM_ENTITIES } from '../data/masterSpecData';
import ClinicalDisclaimer from '../components/ui/ClinicalDisclaimer';
import CPOMEntityBadge from '../components/ui/CPOMEntityBadge';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { TestTube, ShieldCheck, ArrowRight, CheckCircle2, FileText, UserCheck } from 'lucide-react';

export default function MedicalBloodwork() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300">
          <TestTube className="w-3.5 h-3.5" />
          <span>DIAGNOSTIC CLINICAL BLOODWORK</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          180+ BIOMARKER DIAGNOSTIC PANEL
        </h1>
        <p className="text-sm text-gray-300">
          Biological age estimation, deep metabolic and hormonal profiling, and direct physician readout with Dr. Abasi Bomani, MD.
        </p>
      </div>

      <ClinicalDisclaimer />

      {/* Main Panel Feature Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-sky-950/30 to-[#0B0F17] border border-sky-500/40 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-sky-900/50">
          <div>
            <CPOMEntityBadge entity="PC" />
            <h2 className="text-3xl font-extrabold text-white font-heading mt-2">
              {MEDICAL_SERVICES.bloodwork.name}
            </h2>
            <p className="text-xs font-mono text-sky-300 mt-1">Full Diagnostic Trajectory Baseline</p>
          </div>

          <div className="text-right">
            <div className="text-4xl font-extrabold font-mono text-sky-300">
              ${MEDICAL_SERVICES.bloodwork.price} <PlaceholderBadge text="⚑" />
            </div>
            <span className="text-xs font-mono text-gray-400">Includes Physician Readout</span>
          </div>
        </div>

        <p className="text-sm text-gray-200 leading-relaxed">
          {MEDICAL_SERVICES.bloodwork.details}
        </p>

        {/* Biomarker Domains Included */}
        <div className="space-y-4 pt-4 border-t border-sky-900/40">
          <h3 className="font-mono text-xs font-bold text-sky-400 uppercase tracking-widest">
            PANEL DOMAINS COVERED IN 180+ BIOMARKERS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 space-y-1">
              <span className="font-bold text-white block">Metabolic & Lipids</span>
              <span className="text-gray-400 block">Fasting insulin, HbA1c, ApoB, Lp(a), NMR lipoprofile</span>
            </div>
            <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 space-y-1">
              <span className="font-bold text-white block">Hormonal Profile</span>
              <span className="text-gray-400 block">Free/Total T, Estradiol, DHEA-S, Full Thyroid, Cortisol</span>
            </div>
            <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 space-y-1">
              <span className="font-bold text-white block">Inflammatory Markers</span>
              <span className="text-gray-400 block">hs-CRP, Homocysteine, Ferritin, ESR, IL-6 proxy</span>
            </div>
            <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 space-y-1">
              <span className="font-bold text-white block">Biological Age Marker</span>
              <span className="text-gray-400 block">Epigenetic clock estimations & longevity indexing</span>
            </div>
            <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 space-y-1">
              <span className="font-bold text-white block">Micronutrient Matrix</span>
              <span className="text-gray-400 block">Vitamin D3, B12, RBC Magnesium, Omega-3 index</span>
            </div>
            <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 space-y-1">
              <span className="font-bold text-white block">Physician Consultation</span>
              <span className="text-gray-400 block">45-min consultation with Dr. Bomani + 30-day plan</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6 border-t border-sky-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-gray-400">
            Intake forms are PHI. Handled via HIPAA-compliant EMR (BAA protected).
          </span>
          <Link
            to="/book?service=bloodwork"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-mono font-bold text-xs uppercase bg-sky-500 text-black hover:bg-sky-400 transition shadow-clinical-glow"
          >
            <span>ORDER 180+ BIOMARKER PANEL ($995 ⚑)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

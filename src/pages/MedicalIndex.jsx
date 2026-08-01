import React from 'react';
import { Link } from 'react-router-dom';
import { MEDICAL_SERVICES, MEDICAL_DIRECTOR, CPOM_ENTITIES } from '../data/masterSpecData';
import ClinicalDisclaimer from '../components/ui/ClinicalDisclaimer';
import CPOMEntityBadge from '../components/ui/CPOMEntityBadge';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { Stethoscope, Activity, ArrowRight, ShieldCheck, TestTube, Syringe } from 'lucide-react';

export default function MedicalIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300">
          <Stethoscope className="w-3.5 h-3.5" />
          <span>PHYSICIAN-OWNED CLINICAL MEDICAL VERTICAL</span>
        </div>
        <h1 className="text-4xl font-extrabold text-white">VYTAL CLINICAL MEDICAL</h1>
        <p className="text-sm text-gray-300">
          All clinical diagnostic panels, IV therapies, and physician readouts are owned and operated by <strong>{CPOM_ENTITIES.pc.name}</strong> under Medical Director <strong>{MEDICAL_DIRECTOR.name}</strong>.
        </p>
      </div>

      <ClinicalDisclaimer />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* IV Therapy Box */}
        <div className="p-8 rounded-2xl bg-sky-950/20 border border-sky-500/30 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <CPOMEntityBadge entity="PC" />
              <span className="font-mono text-xs text-sky-400 font-bold">$145 – $795 ⚑</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400">
                <Syringe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">IV DRIPS & SHOTS</h3>
                <p className="text-xs font-mono text-sky-300">Nutrient & NAD+ Infusions</p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Targeted cellular hydration, vitamin re-fortification, and high-dose NAD+ longevity infusions administered by licensed medical personnel.
            </p>

            <ul className="space-y-2 text-xs text-gray-300 font-mono pt-2">
              <li>• IV Shots ($145 ⚑): Immunity, Focus, Recovery</li>
              <li>• IV Drips ($295 ⚑): Rehydrate, Radiate, Rebuild</li>
              <li>• Premium NAD+ ($795 ⚑): 500mg / 750mg Cellular NAD+</li>
            </ul>
          </div>

          <Link
            to="/medical/iv"
            className="w-full py-3 rounded-xl bg-sky-500 text-black hover:bg-sky-400 font-mono font-bold text-xs uppercase text-center transition flex items-center justify-center gap-2"
          >
            <span>EXPLORE IV PROTOCOLS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 180+ Biomarker Panel Box */}
        <div className="p-8 rounded-2xl bg-sky-950/20 border border-sky-500/30 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <CPOMEntityBadge entity="PC" />
              <span className="font-mono text-xs text-sky-400 font-bold">$995 ⚑</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400">
                <TestTube className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">180+ BIOMARKER PANEL</h3>
                <p className="text-xs font-mono text-sky-300">Diagnostic Bloodwork & Readout</p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Comprehensive blood panel analyzing metabolic health, systemic inflammation, hormone profiles, and biological age markers followed by a 45-min Dr. Bomani consultation.
            </p>

            <ul className="space-y-2 text-xs text-gray-300 font-mono pt-2">
              <li>• 180+ Individual Biomarkers Analyzed</li>
              <li>• Biological Age Assessment Report</li>
              <li>• Direct Physician Readout & Protocol</li>
            </ul>
          </div>

          <Link
            to="/medical/bloodwork"
            className="w-full py-3 rounded-xl bg-sky-500 text-black hover:bg-sky-400 font-mono font-bold text-xs uppercase text-center transition flex items-center justify-center gap-2"
          >
            <span>EXPLORE BIOMARKER PANEL</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Aesthetics Box */}
        <div className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <CPOMEntityBadge entity="PC" />
              <PlaceholderBadge text="Phase 2 ⚑" />
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-gray-800 text-gray-400">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">AESTHETICS & INJECTABLES</h3>
                <p className="text-xs font-mono text-gray-400">Neuromodulators & Fillers</p>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Phase 2 medical aesthetic treatments delivered directly under physician care. (Day-1 vs Phase 2 deployment decision pending).
            </p>

            <ul className="space-y-2 text-xs text-gray-400 font-mono pt-2">
              <li>• Neuromodulators (Per Unit ⚑)</li>
              <li>• Dermal Fillers (Per Syringe ⚑)</li>
              <li>• Physician-Administered</li>
            </ul>
          </div>

          <Link
            to="/medical/aesthetics"
            className="w-full py-3 rounded-xl bg-gray-800 text-gray-300 hover:bg-gray-700 font-mono font-bold text-xs uppercase text-center transition flex items-center justify-center gap-2"
          >
            <span>PREVIEW PHASE 2 ROADMAP</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

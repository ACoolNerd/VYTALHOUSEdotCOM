import React from 'react';
import VytalIndexCalculator from '../components/ui/VytalIndexCalculator';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { Activity, FileText, CheckCircle2, ShieldCheck, Stethoscope, ArrowRight } from 'lucide-react';
import { MEDICAL_DIRECTOR, CPOM_ENTITIES } from '../data/masterSpecData';

export default function VytalIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-xs font-mono text-[#C5A059]">
          <Activity className="w-3.5 h-3.5" />
          <span>VYTAL DIFFERENTIATOR ENGINE</span>
          <span className="text-gray-600">•</span>
          <PlaceholderBadge text="Formula Sign-off Pending ⚑" />
        </div>
        <h1 className="text-4xl font-extrabold text-white">THE VYTAL INDEX</h1>
        <p className="text-sm text-gray-300">
          The retention engine Reecess doesn't have. A single 0–100 weighted composite score tracking physiological trajectory across 6 weighted clinical and recovery domains.
        </p>
      </div>

      {/* Interactive Calculator Section */}
      <VytalIndexCalculator />

      {/* Rules & Physician Oversight Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl glass-panel border border-[#232D40] space-y-3">
          <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-white">DIRECTIONAL TRAJECTORY</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            The VYTAL Index is directional, not diagnostic. It measures progress relative to your baseline. Baseline → Protocol → Re-test.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-[#232D40] space-y-3">
          <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 w-fit">
            <Stethoscope className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-white">PHYSICIAN-ONLY DOMAINS</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Only a physician-reviewed blood panel ({MEDICAL_DIRECTOR.name}) can shift the <strong>Hormonal (15%)</strong> and <strong>Inflammatory (15%)</strong> domains.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-[#232D40] space-y-3">
          <div className="p-3 rounded-lg bg-[#C5A059]/10 text-[#C5A059] w-fit">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-white">DELIVERABLE ARTIFACT</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Members receive a standardized one-page PDF report + real-time portal trajectory view after every diagnostic readout session.
          </p>
        </div>
      </div>
    </div>
  );
}

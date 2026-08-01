import React from 'react';
import { Stethoscope, ShieldCheck, AlertCircle } from 'lucide-react';
import { MEDICAL_DIRECTOR, CPOM_ENTITIES } from '../../data/masterSpecData';

export default function ClinicalDisclaimer({ compact = false }) {
  return (
    <div className="glass-clinical-panel rounded-xl p-5 border border-sky-500/20 bg-sky-950/20 my-6">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/30 shrink-0 text-sky-400">
          <Stethoscope className="w-6 h-6" />
        </div>
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-heading font-bold text-sky-300 tracking-wider text-xs">
              CLINICAL MEDICAL AUTHORITY
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-sky-900/60 text-sky-200 border border-sky-600/30">
              {CPOM_ENTITIES.pc.name}
            </span>
          </div>
          
          <p className="text-gray-200 font-medium">
            Medical Director: <span className="text-white font-bold">{MEDICAL_DIRECTOR.name}</span> ({MEDICAL_DIRECTOR.credentials})
          </p>

          {!compact && (
            <p className="text-xs text-gray-400 leading-relaxed">
              All clinical services (including IV nutrient drips, intramuscular injections, 180+ biomarker blood panels, and physician diagnostics) are owned and rendered exclusively by <strong>{CPOM_ENTITIES.pc.name}</strong> under the direct supervision of Dr. Abasi Bomani, MD. Medical statements herein do not promise outcomes and serve solely diagnostic and therapeutic optimization under physician care.
            </p>
          )}

          <div className="flex items-center gap-1.5 text-xs text-sky-400/90 pt-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Maryland CPOM Compliant • Physician-Led Protocols • Measured Longevity</span>
          </div>
        </div>
      </div>
    </div>
  );
}

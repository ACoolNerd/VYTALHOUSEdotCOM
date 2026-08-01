import React from 'react';
import { Link } from 'react-router-dom';
import { MEDICAL_SERVICES, MEDICAL_DIRECTOR, CPOM_ENTITIES } from '../data/masterSpecData';
import ClinicalDisclaimer from '../components/ui/ClinicalDisclaimer';
import CPOMEntityBadge from '../components/ui/CPOMEntityBadge';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { Sparkles, ShieldCheck, ArrowRight, Clock } from 'lucide-react';

export default function MedicalAesthetics() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
          <Clock className="w-3.5 h-3.5" />
          <span>PHASE 2 ROADMAP • DECISION PENDING</span>
        </div>
        <h1 className="text-4xl font-extrabold text-white">CLINICAL MEDICAL AESTHETICS</h1>
        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          Physician-administered dermal longevity protocols, neuromodulators, and structural fillers.
        </p>
      </div>

      <ClinicalDisclaimer />

      {/* Decision Status Banner */}
      <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-3 text-xs font-mono text-amber-300">
        <div className="flex items-center justify-between">
          <span className="font-bold uppercase">⚑ OPEN KEITH DECISION: LAUNCH TIMELINE</span>
          <PlaceholderBadge text="Day-1 vs Phase 2 ⚑" />
        </div>
        <p className="text-gray-300">
          Medical aesthetics (neuromodulators per unit ⚑ / dermal fillers per syringe ⚑) are scheduled for Phase 2 integration under <strong>{CPOM_ENTITIES.pc.name}</strong>. Final launch timing depends on EMR setup and licensing sign-off.
        </p>
      </div>

      {/* Planned Services List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white font-mono uppercase">PLANNED CLINICAL AESTHETIC PROTOCOLS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {MEDICAL_SERVICES.aesthetics.items.map((item) => (
            <div key={item.name} className="p-6 rounded-xl glass-panel border border-gray-800 space-y-3">
              <div className="flex items-center justify-between">
                <CPOMEntityBadge entity="PC" />
                <PlaceholderBadge text={item.priceLabel} />
              </div>
              <h3 className="font-bold text-lg text-white">{item.name}</h3>
              <p className="text-xs text-gray-400">
                Administered by: <strong>{item.provider}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pt-6">
        <Link
          to="/medical"
          className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 hover:underline"
        >
          <span>RETURN TO CLINICAL MEDICAL VERTICAL</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

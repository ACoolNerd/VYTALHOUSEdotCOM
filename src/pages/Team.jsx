import React from 'react';
import { MEDICAL_DIRECTOR, CPOM_ENTITIES } from '../data/masterSpecData';
import ClinicalDisclaimer from '../components/ui/ClinicalDisclaimer';
import CPOMEntityBadge from '../components/ui/CPOMEntityBadge';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { Stethoscope, ShieldCheck, Award, UserCheck } from 'lucide-react';

export default function Team() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">
          PHYSICIAN-LED GOVERNANCE & AUTHORITY
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase">
          CLINICAL LEADERSHIP
        </h1>
        <p className="text-sm text-gray-300">
          The structural difference: VYTAL House operates every protocol under a named medical director.
        </p>
      </div>

      <ClinicalDisclaimer />

      {/* Dr. Abasi Bomani MD Feature Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-sky-950/40 via-[#131A26] to-[#0B0F17] border border-sky-500/30 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-sky-900/50">
          <div className="space-y-1">
            <CPOMEntityBadge entity="PC" />
            <h2 className="text-3xl font-extrabold text-white font-heading mt-2">
              {MEDICAL_DIRECTOR.name}
            </h2>
            <p className="text-sm font-mono text-sky-300 font-bold">{MEDICAL_DIRECTOR.title}</p>
          </div>
          <PlaceholderBadge text="MD Equity Structure ⚑" />
        </div>

        <p className="text-sm text-gray-200 leading-relaxed">
          {MEDICAL_DIRECTOR.bio}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs pt-4">
          <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 space-y-1">
            <span className="font-bold text-white block">Medical PC Owner</span>
            <span className="text-gray-400 block">100% Owner of {CPOM_ENTITIES.pc.name}</span>
          </div>
          <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 space-y-1">
            <span className="font-bold text-white block">Diagnostic Readouts</span>
            <span className="text-gray-400 block">180+ Biomarker Review & Sign-off</span>
          </div>
          <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 space-y-1">
            <span className="font-bold text-white block">Protocol Authority</span>
            <span className="text-gray-400 block">30-Day Written Member Trajectory</span>
          </div>
        </div>
      </div>
    </div>
  );
}

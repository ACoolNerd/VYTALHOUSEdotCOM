import React from 'react';
import { Link } from 'react-router-dom';
import { VYTAL_RESET_FLAGSHIP, MEDICAL_DIRECTOR, CPOM_ENTITIES } from '../data/masterSpecData';
import { CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck, UserCheck, Stethoscope } from 'lucide-react';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import ClinicalDisclaimer from '../components/ui/ClinicalDisclaimer';

export default function Reset() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-xs font-mono text-[#C5A059]">
          <span>THE SINGLE MANDATORY FRONT DOOR</span>
          <span className="text-gray-600">•</span>
          <PlaceholderBadge text="$695 Pricing ⚑" />
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight">
          THE VYTAL RESET
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          {VYTAL_RESET_FLAGSHIP.accessType} {VYTAL_RESET_FLAGSHIP.duration}.
        </p>

        <div className="pt-2">
          <Link
            to="/book?service=vytal-reset"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-mono font-bold text-sm uppercase bg-[#C5A059] text-black hover:bg-[#E6C687] transition shadow-gold-glow"
          >
            <span>RESERVE RESET APPOINTMENT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* CPOM & Physician Banner */}
      <div className="glass-clinical-panel p-6 rounded-2xl border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold">
            <Stethoscope className="w-4 h-4" />
            <span>PHYSICIAN-ANCHORED READOUT INCLUDED</span>
          </div>
          <p className="text-sm font-bold text-white">
            Medical Director: {MEDICAL_DIRECTOR.name}
          </p>
          <p className="text-xs text-gray-400">
            Phase 04 is delivered directly under Dr. Bomani's clinical authority ({CPOM_ENTITIES.pc.name}). You leave with your VYTAL Index and a 30-day written protocol.
          </p>
        </div>
        <PlaceholderBadge text="Doctor Fee Structure ⚑" />
      </div>

      {/* 4 Detailed Phases */}
      <div className="space-y-8">
        <div className="border-b border-[#232D40] pb-3 flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-white font-mono uppercase">
            THE FOUR PHASES OF THE RESET
          </h2>
          <span className="text-xs font-mono text-gray-400">Phase 04 is the non-negotiable difference</span>
        </div>

        <div className="space-y-6">
          {VYTAL_RESET_FLAGSHIP.phases.map((phase) => (
            <div key={phase.phase} className="p-6 rounded-2xl glass-panel border border-[#232D40] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <span className="font-mono text-3xl font-extrabold text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-lg border border-[#C5A059]/30">
                  {phase.phase}
                </span>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-xl text-white">{phase.name}</h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-gray-800 text-gray-300">
                      Delivered by: {phase.provider}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{phase.details}</p>
                </div>
              </div>

              {phase.phase === '04' && (
                <div className="shrink-0 px-3 py-1.5 rounded-lg bg-sky-950/60 border border-sky-500/40 text-xs font-mono text-sky-300 font-bold">
                  ★ PHYSICIAN CLINICAL READOUT
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Outcome List Verbatim */}
      <div className="p-8 rounded-2xl glass-gold-panel border border-[#C5A059]/40 space-y-6">
        <h3 className="font-mono font-bold text-sm text-[#C5A059] uppercase tracking-wider">
          MEASURED & FELT OUTCOMES (VERBATIM FROM MASTER SPEC)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {VYTAL_RESET_FLAGSHIP.outcomes.map((outcome) => (
            <div key={outcome} className="p-3 rounded-lg bg-[#0B0F17]/80 border border-[#232D40] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-sm font-semibold text-gray-200">{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Disclaimer */}
      <ClinicalDisclaimer />

      {/* Bottom CTA */}
      <div className="text-center p-8 rounded-2xl bg-[#131A26] border border-[#232D40] space-y-4">
        <h3 className="text-2xl font-bold text-white">READY TO ESTABLISH YOUR BASELINE?</h3>
        <p className="text-sm text-gray-400 max-w-lg mx-auto">
          The RESET is by appointment only and available to both non-members and founding members.
        </p>
        <Link
          to="/book?service=vytal-reset"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono font-bold text-xs uppercase bg-[#C5A059] text-black hover:bg-[#E6C687] transition shadow-gold-glow"
        >
          <span>BOOK THE VYTAL RESET ($695 ⚑)</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}

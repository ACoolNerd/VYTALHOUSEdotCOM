import React from 'react';
import { Link } from 'react-router-dom';
import { MEDICAL_SERVICES, MEDICAL_DIRECTOR, CPOM_ENTITIES } from '../data/masterSpecData';
import ClinicalDisclaimer from '../components/ui/ClinicalDisclaimer';
import CPOMEntityBadge from '../components/ui/CPOMEntityBadge';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { Syringe, ShieldCheck, ArrowRight, Zap, Droplet } from 'lucide-react';

export default function MedicalIV() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">
          PHYSICIAN-DELIVERED CLINICAL PROTOCOLS
        </span>
        <h1 className="text-4xl font-extrabold text-white">IV DRIPS, SHOTS & PREMIUM NAD+</h1>
        <p className="text-sm text-gray-300">
          Formulated under direct physician supervision. Pure bioavailability to optimize cellular hydration and cellular energy.
        </p>
      </div>

      <ClinicalDisclaimer />

      {/* Pricing Comparison Note */}
      <div className="p-4 rounded-xl bg-[#131A26] border border-gray-800 text-xs font-mono text-gray-400 flex items-center justify-between">
        <span>Pricing Comps Benchmark: $145 Shots / $295 Drips / $795 NAD+</span>
        <PlaceholderBadge text="Comps Sign-off Pending ⚑" />
      </div>

      {/* SECTION 1: INTRAMUSCULAR SHOTS */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-800 pb-3">
          <div>
            <h2 className="text-2xl font-bold text-white">INTRAMUSCULAR IV SHOTS</h2>
            <p className="text-xs text-sky-400 font-mono">Targeted Micronutrient Boosters • $145 ⚑</p>
          </div>
          <CPOMEntityBadge entity="PC" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEDICAL_SERVICES.ivShots.map((shot) => (
            <div key={shot.name} className="p-6 rounded-xl bg-sky-950/20 border border-sky-500/20 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white">{shot.name}</h3>
                  <span className="font-mono text-sm font-bold text-sky-300">${shot.price} ⚑</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{shot.details}</p>
              </div>

              <Link
                to={`/book?service=shot-${shot.name.toLowerCase()}`}
                className="w-full py-2 rounded-lg bg-sky-950 border border-sky-500/30 text-sky-300 hover:bg-sky-500 hover:text-black transition font-mono font-bold text-xs text-center block"
              >
                SCHEDULE SHOT
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: IV INFUSION DRIPS */}
      <div className="space-y-6 pt-6">
        <div className="flex items-center justify-between border-b border-gray-800 pb-3">
          <div>
            <h2 className="text-2xl font-bold text-white">CLINICAL IV INFUSION DRIPS</h2>
            <p className="text-xs text-sky-400 font-mono">1000ml Full-Volume Bioavailable Matrix • $295 ⚑</p>
          </div>
          <CPOMEntityBadge entity="PC" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MEDICAL_SERVICES.ivDrips.map((drip) => (
            <div key={drip.name} className="p-6 rounded-xl bg-sky-950/20 border border-sky-500/30 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-white">{drip.name}</h3>
                  <span className="font-mono text-lg font-bold text-sky-300">${drip.price} ⚑</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{drip.details}</p>
              </div>

              <Link
                to={`/book?service=drip-${drip.name.toLowerCase()}`}
                className="w-full py-2.5 rounded-lg bg-sky-500 text-black hover:bg-sky-400 transition font-mono font-bold text-xs text-center block uppercase"
              >
                BOOK IV INFUSION DRIP
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: PREMIUM NAD+ CELLULAR PROTOCOLS */}
      <div className="space-y-6 pt-6">
        <div className="flex items-center justify-between border-b border-gray-800 pb-3">
          <div>
            <h2 className="text-2xl font-bold text-white">PREMIUM NAD+ LONGEVITY PROTOCOLS</h2>
            <p className="text-xs text-sky-400 font-mono">Physician-Monitored High-Dose NAD+ • $795 ⚑</p>
          </div>
          <CPOMEntityBadge entity="PC" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MEDICAL_SERVICES.premiumIv.map((nad) => (
            <div key={nad.name} className="p-8 rounded-2xl bg-gradient-to-br from-sky-950/40 to-[#0B0F17] border border-sky-500/40 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-2xl text-white">{nad.name}</h3>
                  <span className="font-mono text-xl font-bold text-sky-300">${nad.price} ⚑</span>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed">{nad.details}</p>
              </div>

              <Link
                to={`/book?service=nad-${nad.name.toLowerCase()}`}
                className="w-full py-3 rounded-xl bg-sky-500 text-black hover:bg-sky-400 transition font-mono font-bold text-xs text-center block uppercase shadow-clinical-glow"
              >
                BOOK NAD+ INFUSION SESSION
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

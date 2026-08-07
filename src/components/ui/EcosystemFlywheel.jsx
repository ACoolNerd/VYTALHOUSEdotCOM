import React, { useState } from 'react';
import { Sparkles, ShieldCheck, RefreshCw, BarChart3, Box, Layers, ArrowRight } from 'lucide-react';
import { FLYWHEEL_STEPS, PRISM_ASSETS, BRAND_MOAT_QUOTE } from '../../data/masterSpecData';

const iconMap = {
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  RefreshCw: RefreshCw,
  BarChart3: BarChart3,
  Box: Box,
  Layers: Layers
};

export default function EcosystemFlywheel() {
  const [activeStep, setActiveStep] = useState(FLYWHEEL_STEPS[0]);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0B0F17] via-[#0D131F] to-[#0B0F17] border-y border-[#232D40] relative overflow-hidden">
      {/* Radiant Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00F0FF]/5 blur-[120px] pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#232D40] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-[#CCFF00]/10 border border-[#CCFF00]/40 text-[#CCFF00]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>08 / 10 • PRISM SILVER ECOSYSTEM</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
              ECOSYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#00F0FF]">FLYWHEEL</span>
            </h2>
            <p className="text-gray-300 text-sm font-sans leading-relaxed">
              A closed-loop ecosystem built on ritual, membership, data, and continuous innovation. Each cycle strengthens the next, compounding value for our members and the mission.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#131A26] border border-[#00F0FF]/30 text-right">
            <span className="font-mono text-[10px] tracking-widest text-[#00F0FF] uppercase block font-bold">
              THE VYTAL MOAT
            </span>
            <span className="font-heading font-bold text-lg text-white block">
              ONE ECOSYSTEM. ENDLESS MOMENTUM.
            </span>
          </div>
        </div>

        {/* Flywheel Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Center Node Selector Buttons */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FLYWHEEL_STEPS.map((step, idx) => {
              const IconComponent = iconMap[step.icon] || Sparkles;
              const isSelected = activeStep.id === step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 relative group flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-[#CCFF00] shadow-lg shadow-[#CCFF00]/10 scale-[1.02]'
                      : 'bg-[#111827]/80 border-[#232D40] hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">
                      STEP 0{idx + 1} • {step.category}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center border transition ${
                        isSelected ? 'bg-[#CCFF00] text-black border-[#CCFF00]' : 'bg-[#1A2234] text-gray-300 border-gray-700'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className={`font-heading font-bold text-base transition ${isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-sans mt-1 line-clamp-2">
                      {step.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Flywheel Interactive Detail & Visual Sheet */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#131A26] to-[#0B0F17] border border-[#00F0FF]/40 shadow-2xl space-y-6 relative">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#00F0FF] uppercase block">
                  SELECTED FLYWHEEL NODE
                </span>
                <h3 className="font-heading font-black text-2xl text-white">
                  {activeStep.title}
                </h3>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {activeStep.desc}
                </p>
              </div>

              {/* Flywheel Image Reference */}
              <div className="rounded-2xl overflow-hidden border border-gray-800 bg-black group relative">
                <img
                  src={PRISM_ASSETS.ecosystemFlywheel}
                  alt="VYTAL Ecosystem Flywheel Diagram"
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="font-mono text-[10px] text-gray-300 font-bold tracking-wider">
                    PRISM SILVER EDITION • DIAGRAM 08/10
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0F17] border border-[#CCFF00]/30 text-xs font-mono text-gray-300 flex items-center justify-between">
                <span>COMPOUNDING BY DESIGN</span>
                <span className="text-[#CCFF00] font-bold">EVERGREEN MOMENTUM</span>
              </div>
            </div>

            {/* Brand Legacy Quote Callout */}
            <div className="p-4 rounded-2xl bg-[#0B0F17] border border-[#232D40] text-center">
              <p className="text-xs font-mono font-bold tracking-widest text-[#CCFF00]">
                "{BRAND_MOAT_QUOTE}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

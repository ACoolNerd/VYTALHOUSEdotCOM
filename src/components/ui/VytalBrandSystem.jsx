import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Layers, Box, Check, Copy } from 'lucide-react';
import { MASTER_BRAND_OS_V1, PRISM_ASSETS } from '../../data/masterSpecData';

export default function VytalBrandSystem() {
  const [activeTab, setActiveTab] = useState('logos');
  const [copiedColor, setCopiedColor] = useState(null);

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section className="py-20 bg-[#0B0C0E] border-y border-[#B7BDC6]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-800 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-[#C6FC06]/10 border border-[#C6FC06]/40 text-[#C6FC06]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VYTAL MASTER BRAND OS • VERSION {MASTER_BRAND_OS_V1.version}</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
              BRAND GOVERNANCE <span className="text-[#B7BDC6]">& SYSTEM</span>
            </h2>
            <p className="text-gray-400 text-sm font-sans max-w-2xl leading-relaxed">
              An integrated premium brand system — operating at the intersection of science, precision, discipline, recovery, longevity, and premium hospitality.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#12161F] border border-[#B7BDC6]/30 text-right font-mono text-xs">
            <span className="text-[#C6FC06] font-bold block uppercase">{MASTER_BRAND_OS_V1.status}</span>
            <span className="text-gray-400">11 Official Logo Configurations</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#12161F] border border-gray-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab('logos')}
            className={`px-4 py-2 rounded-xl transition font-bold ${
              activeTab === 'logos' ? 'bg-[#C6FC06] text-black shadow' : 'text-gray-400 hover:text-white'
            }`}
          >
            11 LOGO CONFIGURATIONS
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={`px-4 py-2 rounded-xl transition font-bold ${
              activeTab === 'colors' ? 'bg-[#C6FC06] text-black shadow' : 'text-gray-400 hover:text-white'
            }`}
          >
            COLOR HIERARCHY
          </button>
          <button
            onClick={() => setActiveTab('materials')}
            className={`px-4 py-2 rounded-xl transition font-bold ${
              activeTab === 'materials' ? 'bg-[#C6FC06] text-black shadow' : 'text-gray-400 hover:text-white'
            }`}
          >
            MATERIAL SYSTEM
          </button>
        </div>

        {/* Tab 1: 11 Logo Configurations */}
        {activeTab === 'logos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MASTER_BRAND_OS_V1.logoConfigurations.map((logo) => (
              <div
                key={logo.id}
                className="p-6 rounded-2xl bg-[#12161F] border border-gray-800 space-y-4 hover:border-[#C6FC06]/40 transition group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#C6FC06] bg-[#C6FC06]/10 px-2.5 py-1 rounded-md border border-[#C6FC06]/30">
                    CONFIG {logo.id}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500">OFFICIAL SPEC</span>
                </div>

                <div className="py-6 px-4 rounded-xl bg-[#0B0C0E] border border-gray-900 flex items-center justify-center min-h-[100px]">
                  {logo.id === '01' || logo.id === '06' || logo.id === '08' || logo.id === '10' ? (
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white via-slate-200 to-slate-400 p-[1px] shadow-lg shadow-[#CDB8FF]/10">
                      <div className="w-full h-full rounded-[11px] bg-[#0F172A] flex items-center justify-center">
                        <span className="font-heading font-black text-lg text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E2E8F0] to-[#CDB8FF]">
                          V
                        </span>
                      </div>
                    </div>
                  ) : logo.id === '11' ? (
                    <div className="w-full vytal-heartbeat-line my-4" />
                  ) : (
                    <div className="text-center space-y-1">
                      <span className="font-heading font-extrabold text-xl tracking-widest text-white block">
                        VYTAL<span className="text-[#C6FC06]">.</span>HOUSE
                      </span>
                      <span className="text-[9px] font-mono tracking-widest text-[#B7BDC6] block uppercase">
                        {MASTER_BRAND_OS_V1.primaryTagline}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-white group-hover:text-[#C6FC06] transition">
                    {logo.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    {logo.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Color Hierarchy */}
        {activeTab === 'colors' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-6 rounded-2xl bg-[#0B0C0E] border border-gray-800 space-y-4">
              <div className="h-24 rounded-xl bg-[#0B0C0E] border border-gray-700 flex items-end p-3">
                <span className="text-white font-bold">#0B0C0E</span>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">VYTAL OBSIDIAN</h4>
                <p className="text-gray-400 text-[11px] font-sans mt-1">Primary environment and dark backdrop.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#12161F] border border-gray-800 space-y-4">
              <div className="h-24 rounded-xl bg-[#12161F] border border-gray-700 flex items-end p-3">
                <span className="text-white font-bold">#12161F</span>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">VYTAL GRAPHITE</h4>
                <p className="text-gray-400 text-[11px] font-sans mt-1">Near-black charcoal secondary surfaces and cards.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#12161F] border border-gray-800 space-y-4">
              <div className="h-24 rounded-xl bg-[#B7BDC6] flex items-end p-3 text-black">
                <span className="font-bold">#B7BDC6</span>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">TITANIUM SILVER</h4>
                <p className="text-gray-400 text-[11px] font-sans mt-1">Typography, interface hairline borders, and structural detailing.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#12161F] border border-gray-800 space-y-4">
              <div className="h-24 rounded-xl bg-[#C6FC06] flex items-end p-3 text-black shadow-lg shadow-[#C6FC06]/20">
                <span className="font-bold">#C6FC06</span>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-sm">ACID LIME</h4>
                  <span className="text-[10px] bg-[#C6FC06]/20 text-[#C6FC06] px-2 py-0.5 rounded border border-[#C6FC06]/40 font-bold">SIGNAL ONLY</span>
                </div>
                <p className="text-gray-400 text-[11px] font-sans mt-1">Micro accents, active states, CTA borders, indicators, and dividers.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#12161F] border border-gray-800 space-y-4">
              <div className="h-24 rounded-xl bg-[#CDB8FF] flex items-end p-3 text-black">
                <span className="font-bold">#CDB8FF</span>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">PEARL LILAC</h4>
                <p className="text-gray-400 text-[11px] font-sans mt-1">Ambient reflection and supporting highlight only.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Material System */}
        {activeTab === 'materials' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            {MASTER_BRAND_OS_V1.materials.map((mat, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#12161F] border border-gray-800 space-y-2 text-center">
                <Box className="w-5 h-5 text-[#B7BDC6] mx-auto" />
                <span className="text-white font-bold block">{mat}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

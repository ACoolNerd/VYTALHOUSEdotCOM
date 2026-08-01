import React from 'react';
import { User, Activity, FileText, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { MEDICAL_DIRECTOR } from '../data/masterSpecData';

export default function AccountPortal() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#232D40]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#C5A059] font-bold">MEMBER ACCESS PORTAL</span>
            <PlaceholderBadge text="Phase 3 Integration ⚑" />
          </div>
          <h1 className="text-3xl font-extrabold text-white font-heading mt-1">FOUNDING MEMBER DASHBOARD</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1A2234] border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-bold">
            JD
          </div>
          <div className="text-xs font-mono">
            <span className="text-white font-bold block">John Doe</span>
            <span className="text-[#C5A059] block">RESIDENT TIER ($649/mo)</span>
          </div>
        </div>
      </div>

      {/* VYTAL INDEX SCORE TRAJECTORY CARD */}
      <div className="p-8 rounded-3xl glass-gold-panel border border-[#C5A059]/40 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#C5A059]" />
            <h2 className="font-mono text-xl font-bold text-white uppercase">YOUR VYTAL INDEX TRAJECTORY</h2>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Re-test Cadence: 34 Days Remaining
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-center">
          <div className="p-6 rounded-2xl bg-[#0B0F17]/90 border border-gray-800 space-y-1">
            <span className="text-gray-400 text-xs uppercase block">BASELINE SCORE</span>
            <span className="text-4xl font-extrabold text-gray-300">68</span>
            <span className="text-[10px] text-gray-500 block">Recorded 2026-06-01</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B0F17]/90 border border-[#C5A059]/50 space-y-1 shadow-gold-glow">
            <span className="text-[#C5A059] text-xs uppercase font-bold block">CURRENT INDEX</span>
            <span className="text-5xl font-extrabold text-white">76</span>
            <span className="text-[10px] text-emerald-400 block font-bold">+8 PTS TRAJECTORY</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B0F17]/90 border border-gray-800 space-y-1">
            <span className="text-sky-400 text-xs uppercase block">PHYSICIAN READOUT</span>
            <span className="text-sm font-bold text-white block mt-2">Dr. Abasi Bomani, MD</span>
            <span className="text-[10px] text-gray-400 block">Signed Off 2026-07-15</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center justify-between text-xs font-mono">
          <span className="text-gray-300">Active 30-Day Protocol: <strong>ORIGIN + 2x WEEKLY FLUSH</strong></span>
          <button className="text-[#C5A059] hover:underline font-bold">DOWNLOAD PROTOCOL PDF (1-PAGE)</button>
        </div>
      </div>
    </div>
  );
}

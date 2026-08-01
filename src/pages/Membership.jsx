import React from 'react';
import { Link } from 'react-router-dom';
import { MEMBERSHIP_TIERS, ACCESS_SCHEDULE, OPEN_DECISIONS } from '../data/masterSpecData';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { CheckCircle2, Clock, ShieldCheck, ArrowRight, Lock, Key } from 'lucide-react';

export default function Membership() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
          REECESS RULE #7 • ACCESS SCARCITY IS THE PRODUCT
        </span>
        <h1 className="text-4xl font-extrabold text-white">MEMBERSHIP TIERS</h1>
        <p className="text-sm text-gray-300">
          Members don't buy single sessions; they buy a measured trajectory. Access is strictly controlled to preserve house intimacy and protocol availability.
        </p>
      </div>

      {/* ACCESS SCARCITY SCHEDULE CARD */}
      <div className="p-8 rounded-2xl glass-gold-panel border border-[#C5A059]/40 grid grid-cols-1 md:grid-cols-3 gap-6 items-center shadow-gold-glow">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] font-bold">
            <Lock className="w-4 h-4" />
            <span>ACCESS HOURS POLICY</span>
          </div>
          <h3 className="font-bold text-xl text-white">LIMITED WINDOW ACCESS</h3>
        </div>

        <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-[#232D40] space-y-1">
          <span className="text-xs font-mono text-[#C5A059] font-bold block">MEMBERS ONLY:</span>
          <span className="text-sm text-white font-mono font-bold">{ACCESS_SCHEDULE.members}</span>
        </div>

        <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-[#232D40] space-y-1">
          <span className="text-xs font-mono text-gray-400 font-bold block">NON-MEMBERS PUBLIC:</span>
          <span className="text-sm text-gray-300 font-mono">{ACCESS_SCHEDULE.nonMembers}</span>
          <span className="text-[10px] text-amber-400 block pt-1 font-mono">
            ★ RESET is the ONLY way outside public hours.
          </span>
        </div>
      </div>

      {/* THREE MEMBERSHIP TIERS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MEMBERSHIP_TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`p-8 rounded-2xl space-y-6 flex flex-col justify-between ${
              tier.isPopular
                ? 'glass-gold-panel border-2 border-[#C5A059] shadow-gold-glow relative'
                : 'glass-panel border border-[#232D40]'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                {tier.isPopular ? (
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#C5A059] text-black">
                    RECOMMENDED TIER
                  </span>
                ) : <span />}
                <PlaceholderBadge text="Tier Price ⚑" />
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-white font-heading">{tier.name}</h3>
                <div className="font-mono mt-2">
                  <span className="text-4xl font-extrabold text-white">${tier.price}</span>
                  <span className="text-xs text-gray-400"> / {tier.cadence}</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-gray-200 pt-4 border-t border border-gray-800/80">
                {tier.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to={`/book?membership=${tier.name.toLowerCase()}`}
              className={`w-full py-3.5 rounded-xl text-center font-mono font-bold text-xs uppercase tracking-wider transition ${
                tier.isPopular
                  ? 'bg-[#C5A059] text-black hover:bg-[#E6C687] shadow-gold-glow'
                  : 'bg-[#1A2234] text-white hover:bg-[#232D40] border border-gray-700'
              }`}
            >
              APPLY FOR {tier.name} MEMBERSHIP
            </Link>
          </div>
        ))}
      </div>

      {/* MASTER PRICE GRID RULE VERIFICATION TABLE */}
      <div className="p-8 rounded-2xl glass-panel border border-[#232D40] space-y-6">
        <div className="flex items-center justify-between border-b border-[#232D40] pb-4">
          <div>
            <h3 className="text-xl font-bold text-white font-mono uppercase">VYTAL MASTER PRICING GRID</h3>
            <p className="text-xs text-gray-400">Master Spec Discipline: Every single price point ends in 5.</p>
          </div>
          <PlaceholderBadge text="Pricing Comps Benchmark ⚑" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 font-mono text-xs">
          <div className="p-3 rounded-lg bg-gray-900/60 border border-gray-800">
            <span className="text-gray-400 block">$145</span>
            <span className="text-white font-bold">IV Shot</span>
          </div>
          <div className="p-3 rounded-lg bg-gray-900/60 border border-gray-800">
            <span className="text-gray-400 block">$220</span>
            <span className="text-white font-bold">The Ritual</span>
          </div>
          <div className="p-3 rounded-lg bg-gray-900/60 border border-gray-800">
            <span className="text-gray-400 block">$295</span>
            <span className="text-white font-bold">IV Drip</span>
          </div>
          <div className="p-3 rounded-lg bg-gray-900/60 border border-gray-800">
            <span className="text-gray-400 block">$395</span>
            <span className="text-white font-bold">25-30 Min Tech</span>
          </div>
          <div className="p-3 rounded-lg bg-gray-900/60 border border-gray-800">
            <span className="text-gray-400 block">$495</span>
            <span className="text-white font-bold">50 Min / Facial / Forge</span>
          </div>
          <div className="p-3 rounded-lg bg-gray-900/60 border border-gray-800">
            <span className="text-gray-400 block">$595</span>
            <span className="text-white font-bold">80 Min / Diagnostics</span>
          </div>
          <div className="p-3 rounded-lg bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059]">
            <span className="block">$695 ★</span>
            <span className="font-bold">Flagship Reset</span>
          </div>
          <div className="p-3 rounded-lg bg-gray-900/60 border border-gray-800">
            <span className="text-gray-400 block">$795</span>
            <span className="text-white font-bold">Premium NAD+</span>
          </div>
          <div className="p-3 rounded-lg bg-gray-900/60 border border-gray-800">
            <span className="text-gray-400 block">$995</span>
            <span className="text-white font-bold">180+ Bloodwork</span>
          </div>
          <div className="p-3 rounded-lg bg-gray-900/60 border border-gray-800">
            <span className="text-gray-400 block">$349 / $649 / $1,249</span>
            <span className="text-white font-bold">Membership Tiers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { VYTAL_INDEX_DOMAINS } from '../../data/masterSpecData';
import { Activity, Sparkles, AlertCircle, RefreshCw, FileText, CheckCircle2 } from 'lucide-react';
import PlaceholderBadge from './PlaceholderBadge';

export default function VytalIndexCalculator() {
  // Default score values for demonstration
  const [domainScores, setDomainScores] = useState({
    Metabolic: 78,
    Cardiovascular: 82,
    Inflammatory: 65,
    Recovery: 72,
    Hormonal: 70,
    Nutritional: 80,
  });

  const [activeDomain, setActiveDomain] = useState(null);

  // Compute weighted index score
  const compositeScore = Math.round(
    VYTAL_INDEX_DOMAINS.reduce((acc, domain) => {
      const score = domainScores[domain.name] || 0;
      return acc + (score * (domain.weight / 100));
    }, 0)
  );

  const handleSliderChange = (name, value) => {
    setDomainScores(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  const resetScores = () => {
    setDomainScores({
      Metabolic: 78,
      Cardiovascular: 82,
      Inflammatory: 65,
      Recovery: 72,
      Hormonal: 70,
      Nutritional: 80,
    });
  };

  const getScoreTier = (score) => {
    if (score >= 85) return { label: "OPTIMAL STATE", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" };
    if (score >= 70) return { label: "HIGH RESILIENCE", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" };
    if (score >= 55) return { label: "MODERATE ADAPTATION", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/30" };
    return { label: "RESTORATION REQUIRED", color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/30" };
  };

  const tier = getScoreTier(compositeScore);

  return (
    <div className="glass-gold-panel rounded-2xl p-6 lg:p-8 border border-[#C5A059]/30 shadow-gold-glow">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#232D40]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
              RECKONING THE COMPOSITE METRIC
            </span>
            <PlaceholderBadge text="Formula Sign-off Pending" />
          </div>
          <h3 className="text-2xl font-bold text-white mt-1">THE VYTAL INDEX SIMULATOR</h3>
          <p className="text-sm text-gray-400">
            A single 0–100 weighted score synthesizing 6 physiological domains. Baseline → Protocol → Re-test.
          </p>
        </div>

        <button
          onClick={resetScores}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-gray-300 bg-gray-800/80 hover:bg-gray-700 border border-gray-700 transition"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Reset Baseline
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Left column: Composite Score Gauge */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-[#0B0F17]/80 border border-[#232D40] text-center">
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* SVG Ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50" cy="50" r="42"
                stroke="currentColor" strokeWidth="8"
                className="text-gray-800" fill="transparent"
              />
              <circle
                cx="50" cy="50" r="42"
                stroke="url(#goldGradient)" strokeWidth="8"
                strokeDasharray={264}
                strokeDashoffset={264 - (264 * compositeScore) / 100}
                strokeLinecap="round"
                className="transition-all duration-500 ease-out" fill="transparent"
              />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C5A059" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-extrabold text-white font-mono tracking-tight">
                {compositeScore}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase mt-1">
                VYTAL INDEX
              </span>
            </div>
          </div>

          <div className={`mt-4 px-4 py-1.5 rounded-full border text-xs font-mono font-bold tracking-wider ${tier.bg} ${tier.color}`}>
            {tier.label}
          </div>

          <div className="mt-6 text-left space-y-2 text-xs text-gray-400 bg-gray-900/60 p-4 rounded-lg border border-gray-800/80 w-full">
            <div className="flex items-center gap-1.5 font-bold text-gray-200">
              <AlertCircle className="w-4 h-4 text-[#C5A059]" />
              <span>Physician Sign-Off Rule</span>
            </div>
            <p className="leading-relaxed">
              Score is directional, not diagnostic. Only a physician-reviewed blood panel (Dr. Bomani) can shift the <strong>Hormonal (15%)</strong> and <strong>Inflammatory (15%)</strong> domains.
            </p>
          </div>
        </div>

        {/* Right column: 6 Domain Sliders */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400 pb-2 border-b border-gray-800">
            <span>DOMAIN & INPUT BIOMARKERS</span>
            <span>WEIGHT & VALUE</span>
          </div>

          {VYTAL_INDEX_DOMAINS.map((domain) => {
            const val = domainScores[domain.name] || 0;
            return (
              <div 
                key={domain.name}
                className={`p-3.5 rounded-xl border transition ${
                  activeDomain === domain.name 
                    ? 'bg-[#1A2234] border-[#C5A059]' 
                    : 'bg-[#131A26]/80 border-[#232D40] hover:border-gray-700'
                }`}
                onMouseEnter={() => setActiveDomain(domain.name)}
                onMouseLeave={() => setActiveDomain(null)}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full" 
                      style={{ backgroundColor: domain.color }} 
                    />
                    <span className="font-bold text-sm text-white">{domain.name}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">
                      {domain.weight}% Weight
                    </span>
                  </div>

                  <span className="font-mono font-bold text-sm text-gray-200">
                    {val} <span className="text-gray-500 text-xs">/ 100</span>
                  </span>
                </div>

                <p className="text-xs text-gray-400 mb-2 truncate">
                  <strong className="text-gray-300">Inputs:</strong> {domain.inputs}
                </p>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={val}
                  onChange={(e) => handleSliderChange(domain.name, e.target.value)}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[#232D40] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Deliverable: One-page PDF + Member Portal interactive view.</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[#C5A059]">
          <FileText className="w-4 h-4" />
          <span>Re-test Cadence: Quarterly (RESIDENT) • Monthly Review (PRINCIPAL)</span>
        </div>
      </div>
    </div>
  );
}

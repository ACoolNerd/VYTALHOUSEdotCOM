import React from 'react';
import { TrendingUp, ShieldCheck, Award, Activity, Heart, Zap } from 'lucide-react';

export default function MemberSuccessShowcase() {
  const successStories = [
    {
      id: 1,
      memberType: "Charter Member • Executive",
      timeframe: "90-Day Protocol",
      initialIndex: 64,
      currentIndex: 82,
      gain: "+18 PTS",
      domainHighlight: "Recovery & HRV",
      keyMetrics: [
        { label: "rMSSD HRV", before: "32 ms", after: "58 ms" },
        { label: "Deep Sleep", before: "45 min", after: "95 min" },
        { label: "hs-CRP Inflammatory", before: "2.4 mg/L", after: "0.8 mg/L" }
      ],
      quote: "The combination of the weekly Thermal Contrast Ritual and hyperbaric oxygen reversed my chronic burnout metrics in 12 weeks under Dr. Bomani's oversight."
    },
    {
      id: 2,
      memberType: "Resident Member • Founder",
      timeframe: "6-Month Trajectory",
      initialIndex: 71,
      currentIndex: 89,
      gain: "+18 PTS",
      domainHighlight: "Metabolic & Inflammatory",
      keyMetrics: [
        { label: "Biological Age", before: "44 Yrs", after: "38 Yrs" },
        { label: "Fasting Glucose", before: "99 mg/dL", after: "84 mg/dL" },
        { label: "VO₂ Max Proxy", before: "39 mL/kg", after: "47 mL/kg" }
      ],
      quote: "Having real 180+ biomarker bloodwork re-tested quarterly gave me complete confidence that my trajectory was progressing, not guessed."
    },
    {
      id: 3,
      memberType: "Principal Member • Athlete",
      timeframe: "120-Day Trajectory",
      initialIndex: 78,
      currentIndex: 94,
      gain: "+16 PTS",
      domainHighlight: "Hormonal & Cellular",
      keyMetrics: [
        { label: "Free Testosterone", before: "12.4 pg/mL", after: "21.8 pg/mL" },
        { label: "Vitamin D3", before: "28 ng/mL", after: "64 ng/mL" },
        { label: "Resting Heart Rate", before: "62 bpm", after: "51 bpm" }
      ],
      quote: "The Social Plunge Suite breathwork sequence combined with monthly NAD+ IV Drips gave me explosive physical recovery without burnout."
    }
  ];

  return (
    <div className="p-8 sm:p-12 rounded-3xl glass-gold-panel border border-[#C5A059]/40 space-y-8 shadow-gold-glow">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#C5A059]/30">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-xs font-mono font-bold mb-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>MEASURED TRAJECTORY OUTCOMES</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white font-heading">
            REAL MEMBER VYTAL INDEX TRAJECTORIES
          </h2>
          <p className="text-xs text-gray-300 mt-1">
            Anonymized 6-Domain composite metric gains logged across 90–180 day protocol loops.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Physician Verified • De-identified PHI</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {successStories.map((story) => (
          <div key={story.id} className="p-6 rounded-2xl bg-[#0B0F17]/90 border border-[#232D40] space-y-5 flex flex-col justify-between hover:border-[#C5A059]/50 transition">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-[#131A26] text-gray-300">
                  {story.memberType}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                  {story.gain}
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold font-mono text-white">{story.currentIndex}</span>
                <span className="text-xs font-mono text-gray-400">from {story.initialIndex} baseline</span>
              </div>

              <p className="text-xs text-gray-300 italic leading-relaxed">
                "{story.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#232D40] space-y-2">
              <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider block font-bold">
                KEY BIOMARKER PROGRESSION
              </span>
              <div className="space-y-1.5 text-xs font-mono">
                {story.keyMetrics.map((m) => (
                  <div key={m.label} className="flex justify-between items-center text-gray-400">
                    <span>{m.label}:</span>
                    <span className="text-white font-bold">
                      <span className="text-gray-500 line-through mr-1">{m.before}</span> → <span className="text-emerald-400">{m.after}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

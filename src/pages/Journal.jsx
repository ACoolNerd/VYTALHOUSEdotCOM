import React from 'react';
import { BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Journal() {
  const articles = [
    { title: "THE MEASUREMENT LOOP: WHY GUESSED RECOVERY FAILS", category: "RESTORATION SCIENCE", date: "2026-07-28" },
    { title: "UNDERSTANDING YOUR VYTAL INDEX: 6 PHYSIOLOGICAL DOMAINS", category: "DIAGNOSTIC PROTOCOLS", date: "2026-07-20" },
    { title: "THERMAL CONTRAST vs MITOCHONDRIAL ADAPTATION", category: "RECOVERY TECH", date: "2026-07-15" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
          RESTORATION SCIENCE JOURNAL
        </span>
        <h1 className="text-4xl font-extrabold text-white">THE JOURNAL</h1>
        <p className="text-sm text-gray-300">
          Peer-reviewed principles, clinical diagnostic frameworks, and restoration science.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art) => (
          <div key={art.title} className="p-6 rounded-2xl glass-panel border border-[#232D40] space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#C5A059] font-bold block">{art.category}</span>
              <h3 className="font-bold text-lg text-white leading-snug">{art.title}</h3>
              <span className="text-[11px] font-mono text-gray-500 block">{art.date}</span>
            </div>
            <Link to="#" className="text-xs font-mono text-gray-400 hover:text-white flex items-center gap-1 font-bold">
              READ ARTICLE →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

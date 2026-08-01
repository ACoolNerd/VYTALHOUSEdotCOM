import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { RESTORATIONS_LIST } from '../data/masterSpecData';
import CPOMEntityBadge from '../components/ui/CPOMEntityBadge';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { ArrowLeft, ArrowRight, Clock, ShieldCheck, Zap } from 'lucide-react';

export default function RestorationDetail() {
  const { slug } = useParams();
  const protocol = RESTORATIONS_LIST.find(p => p.slug === slug) || RESTORATIONS_LIST[1];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      <Link to="/restorations" className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#C5A059] transition">
        <ArrowLeft className="w-4 h-4" />
        <span>BACK TO RESTORATIONS INDEX</span>
      </Link>

      <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-[#C5A059]/40 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#232D40]">
          <div>
            <CPOMEntityBadge entity={protocol.entity === 'PC' ? 'PC' : 'MSO'} />
            <h1 className="text-4xl font-extrabold text-white font-heading mt-2">{protocol.name}</h1>
            <p className="text-sm font-mono text-[#C5A059] mt-1">{protocol.subtitle}</p>
          </div>

          <div className="text-right">
            <div className="text-3xl font-extrabold font-mono text-white">
              ${protocol.price} <PlaceholderBadge text="⚑" />
            </div>
            <span className="text-xs font-mono text-gray-400">Duration variant pricing</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-mono font-bold text-gray-400 uppercase">PROTOCOL DESCRIPTION</h3>
          <p className="text-base text-gray-200 leading-relaxed">{protocol.description}</p>
        </div>

        {/* Variants Selection if applicable */}
        {protocol.durationVariants && (
          <div className="p-6 rounded-xl bg-gray-900/80 border border-gray-800 space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#C5A059] uppercase">AVAILABLE DURATION VARIANTS</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {protocol.durationVariants.map((dur, i) => (
                <div key={dur} className="p-3 rounded-lg bg-[#0B0F17] border border-gray-800 flex items-center justify-between font-mono text-xs">
                  <span className="text-gray-300">{dur}</span>
                  <span className="text-[#C5A059] font-bold">${protocol.priceVariants[i]} ⚑</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="p-6 rounded-xl bg-[#0B0F17] border border-[#232D40] space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <Zap className="w-4 h-4 text-[#C5A059]" />
            <span>TECHNOLOGY ENGINE</span>
          </div>
          <p className="font-bold text-white text-base">{protocol.engine}</p>
        </div>

        <div className="pt-6 border-t border-[#232D40] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-gray-400">
            MSO Delivered • No clinical prescription needed
          </span>
          <Link
            to={`/book?service=${protocol.slug || 'restoration'}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-mono font-bold text-xs uppercase bg-[#C5A059] text-black hover:bg-[#E6C687] transition shadow-gold-glow"
          >
            <span>BOOK PROTOCOL SESSION</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

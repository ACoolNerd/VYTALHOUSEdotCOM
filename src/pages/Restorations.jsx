import React from 'react';
import { Link } from 'react-router-dom';
import { RESTORATIONS_LIST } from '../data/masterSpecData';
import CPOMEntityBadge from '../components/ui/CPOMEntityBadge';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { ArrowRight, Clock, Shield } from 'lucide-react';

export default function Restorations() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
          BRANDED PROTOCOL INDEX (MSO OPERATED)
        </span>
        <h1 className="text-4xl font-extrabold text-white">THE RESTORATIONS</h1>
        <p className="text-sm text-gray-400">
          One-word names. Emotional. Bundled. Duration is the only variant. Designed to drive targeted physiological adaptation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESTORATIONS_LIST.map((item) => (
          <div
            key={item.slug || item.name}
            className="p-8 rounded-2xl glass-panel border border-[#232D40] hover:border-[#C5A059]/50 transition flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <CPOMEntityBadge entity={item.entity === 'PC' ? 'PC' : 'MSO'} />
                <div className="flex items-center gap-1 font-mono text-lg font-bold text-white">
                  <span>${item.price}</span>
                  {item.isPricePlaceholder && <PlaceholderBadge text="⚑" />}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-heading tracking-wide">
                  {item.name}
                </h3>
                <p className="text-xs font-mono text-[#C5A059] mt-1">{item.subtitle}</p>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                {item.description}
              </p>

              <div className="p-3 rounded-lg bg-gray-900/60 border border-gray-800 space-y-1 text-xs font-mono">
                <span className="text-gray-400 block">Technology Engine:</span>
                <span className="text-gray-200 font-bold block">{item.engine}</span>
              </div>
            </div>

            <div className="pt-4 border-t border border-gray-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{item.duration || item.durationVariants?.join(' / ')}</span>
              </span>

              <Link
                to={item.slug ? `/restorations/${item.slug}` : '/reset'}
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-white hover:text-[#C5A059] transition"
              >
                <span>VIEW PROTOCOL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

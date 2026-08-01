import React from 'react';
import { Link } from 'react-router-dom';
import { RAW_MODALITIES } from '../data/masterSpecData';
import CPOMEntityBadge from '../components/ui/CPOMEntityBadge';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { ArrowRight, Sliders, Calendar } from 'lucide-react';

export default function Modalities() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
          RAW SINGLE-SERVICE MENU (MSO OPERATED)
        </span>
        <h1 className="text-4xl font-extrabold text-white">THE MODALITIES</h1>
        <p className="text-sm text-gray-400">
          À la carte technology access for repeat, routine, or utility buyers. Straight to deep-link booking.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {RAW_MODALITIES.map((modality) => (
          <div
            key={modality.name}
            className="p-6 rounded-2xl glass-panel border border-[#232D40] hover:border-[#C5A059]/40 transition space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <CPOMEntityBadge entity={modality.entity} />
                <PlaceholderBadge text="Price Grid ⚑" />
              </div>

              <h3 className="font-bold text-lg text-white">{modality.name}</h3>
              <p className="text-xs font-mono text-gray-400">{modality.category}</p>
            </div>

            <Link
              to={`/book?modality=${encodeURIComponent(modality.name)}`}
              className="w-full py-2.5 rounded-lg bg-[#1A2234] hover:bg-[#C5A059] hover:text-black border border-gray-700 transition flex items-center justify-center gap-2 text-xs font-mono font-bold text-gray-200"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>DIRECT BOOKING</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

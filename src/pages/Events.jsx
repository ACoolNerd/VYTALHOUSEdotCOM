import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Building, ArrowRight } from 'lucide-react';
import CPOMEntityBadge from '../components/ui/CPOMEntityBadge';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';

export default function Events() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
          PRIVATE BUYOUTS & EXECUTIVE PROTOCOLS
        </span>
        <h1 className="text-4xl font-extrabold text-white">EVENTS & HOUSE BUYOUTS</h1>
        <p className="text-sm text-gray-300">
          Private facility buyouts for executive teams, corporate restoration summits, and private group contrast rituals.
        </p>
      </div>

      <div className="p-8 rounded-2xl glass-panel border border-[#232D40] space-y-6">
        <div className="flex items-center justify-between border-b border-[#232D40] pb-4">
          <CPOMEntityBadge entity="MSO" />
          <PlaceholderBadge text="Buyout Pricing ⚑" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="p-6 rounded-xl bg-[#0B0F17] border border-gray-800 space-y-2">
            <h3 className="font-bold text-white text-lg">FULL HOUSE BUYOUT</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Exclusive access to all thermal contrast suites, sauna/cold plunges, recovery tech, and lounge spaces for up to 4 hours.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#0B0F17] border border-gray-800 space-y-2">
            <h3 className="font-bold text-white text-lg">EXECUTIVE CLINICAL SUMMIT</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Includes baseline body composition, guided thermal contrast ritual, elevate recovery tech, and optional physician readout.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            to="/contact?inquiry=events"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-mono font-bold text-xs uppercase bg-[#C5A059] text-black hover:bg-[#E6C687] transition shadow-gold-glow"
          >
            <span>INQUIRE ABOUT PRIVATE BUYOUT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

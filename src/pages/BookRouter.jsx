import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import CPOMEntityBadge from '../components/ui/CPOMEntityBadge';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { Calendar, ShieldCheck, Stethoscope, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CPOM_ENTITIES } from '../data/masterSpecData';

export default function BookRouter() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || searchParams.get('modality') || 'vytal-reset';
  const [selectedService, setSelectedService] = useState(initialService);
  const [bookedState, setBookedState] = useState(false);

  const isMedicalService = selectedService.includes('iv') || selectedService.includes('shot') || selectedService.includes('drip') || selectedService.includes('bloodwork') || selectedService.includes('nad');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
          INTEGRATED BOOKING ROUTER (BOULEVARD / ZENOTI)
        </span>
        <h1 className="text-4xl font-extrabold text-white">RESERVE PROTOCOL SESSION</h1>
        <p className="text-sm text-gray-300">
          Smart entity router segregating clinical PC bookings from MSO wellness sessions.
        </p>
      </div>

      {/* CPOM ROUTING BADGE */}
      <div className="p-6 rounded-2xl glass-panel border border-[#232D40] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-mono text-gray-400 block">SELECTED SERVICE ROUTING ENTITY:</span>
          <CPOMEntityBadge entity={isMedicalService ? 'PC' : 'MSO'} />
        </div>
        <PlaceholderBadge text="EMR Integration Pending ⚑" />
      </div>

      {bookedState ? (
        <div className="p-10 rounded-3xl glass-gold-panel border border-[#C5A059] text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-[#C5A059] mx-auto animate-bounce" />
          <h2 className="text-2xl font-bold text-white font-heading">RESERVATION CONFIRMED</h2>
          <p className="text-sm text-gray-300 max-w-md mx-auto">
            Your appointment request has been routed to the appropriate entity ({isMedicalService ? CPOM_ENTITIES.pc.name : CPOM_ENTITIES.mso.name}). A confirmation notification has been dispatched.
          </p>
          <Link to="/" className="inline-block mt-4 text-xs font-mono text-[#C5A059] underline">
            RETURN TO HOME
          </Link>
        </div>
      ) : (
        <div className="p-8 rounded-2xl glass-panel border border-[#232D40] space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-mono text-gray-400 uppercase">SELECT PROTOCOL OR MODALITY</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#0B0F17] border border-gray-800 text-white font-mono text-sm focus:border-[#C5A059] outline-none"
            >
              <optgroup label="FLAGSHIP PROTOCOL">
                <option value="vytal-reset">THE VYTAL RESET ($695 ⚑ — 3 Hours)</option>
              </optgroup>
              <optgroup label="RESTORATION PROTOCOLS (MSO)">
                <option value="origin">ORIGIN — Full Diagnostics ($595 ⚑)</option>
                <option value="charge">CHARGE — Hyperbaric Oxygen ($395+ ⚑)</option>
                <option value="flow">FLOW — Medical Compression ($395+ ⚑)</option>
                <option value="resonance">RESONANCE — PEMF & Vibroacoustic ($395+ ⚑)</option>
                <option value="ground">GROUND — Contrast + Bodywork ($495+ ⚑)</option>
                <option value="forge">FORGE — Cryo + Plunge ($495 ⚑)</option>
                <option value="glow">GLOW — Medical Facial ($495 ⚑)</option>
                <option value="ritual">THE RITUAL — Sauna + Cold Plunge ($220 ⚑)</option>
              </optgroup>
              <optgroup label="CLINICAL MEDICAL SERVICES (PC)">
                <option value="iv-shot">IV Shot ($145 ⚑)</option>
                <option value="iv-drip">IV Drip Infusion ($295 ⚑)</option>
                <option value="nad-recharge">Premium NAD+ Recharge ($795 ⚑)</option>
                <option value="bloodwork">180+ Biomarker Blood Panel ($995 ⚑)</option>
              </optgroup>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#0B0F17] border border-gray-800 space-y-1">
              <span className="text-gray-400 block">APPOINTMENT DATE:</span>
              <input type="date" className="w-full bg-transparent text-white font-bold outline-none" defaultValue="2026-08-15" />
            </div>
            <div className="p-4 rounded-xl bg-[#0B0F17] border border-gray-800 space-y-1">
              <span className="text-gray-400 block">TIME SLOT:</span>
              <select className="w-full bg-transparent text-white font-bold outline-none">
                <option>09:00 AM (Member Hours)</option>
                <option>01:00 PM (Public Non-Member Window)</option>
                <option>04:00 PM (Public Non-Member Window)</option>
                <option>06:30 PM (Member Hours)</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => setBookedState(true)}
            className="w-full py-4 rounded-xl font-mono font-bold text-xs uppercase bg-[#C5A059] text-black hover:bg-[#E6C687] transition shadow-gold-glow flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>CONFIRM PROTOCOL BOOKING</span>
          </button>
        </div>
      )}
    </div>
  );
}

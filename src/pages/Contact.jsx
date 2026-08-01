import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { ACCESS_SCHEDULE } from '../data/masterSpecData';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
          CONNECT WITH VYTAL HOUSE
        </span>
        <h1 className="text-4xl font-extrabold text-white">CONTACT & LOCATION</h1>
        <p className="text-sm text-gray-300">
          Inquiries for founding membership, flagship RESET appointments, or corporate buyouts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl glass-panel border border-[#232D40] space-y-6">
          <h2 className="font-mono text-xl font-bold text-white uppercase">HOUSE INFORMATION</h2>
          
          <div className="space-y-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#0B0F17] border border-gray-800 space-y-1">
              <span className="text-gray-400 block">LOCATION STATUS:</span>
              <span className="text-white font-bold block">Elkridge vs Chevy Chase, MD</span>
              <PlaceholderBadge text="Address Decision Pending ⚑" />
            </div>

            <div className="p-4 rounded-xl bg-[#0B0F17] border border-gray-800 space-y-1">
              <span className="text-[#C5A059] font-bold block">MEMBER HOURS:</span>
              <span className="text-white block">{ACCESS_SCHEDULE.members}</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0F17] border border-gray-800 space-y-1">
              <span className="text-gray-400 block">PUBLIC NON-MEMBER HOURS:</span>
              <span className="text-gray-300 block">{ACCESS_SCHEDULE.nonMembers}</span>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="p-8 rounded-2xl glass-panel border border-[#232D40] space-y-4 text-xs">
          <h2 className="font-mono text-xl font-bold text-white uppercase mb-4">INQUIRY FORM</h2>
          
          <div>
            <label className="block text-gray-400 font-mono mb-1">FULL NAME</label>
            <input type="text" className="w-full p-3 rounded-lg bg-[#0B0F17] border border-gray-800 text-white focus:border-[#C5A059] outline-none" placeholder="First & Last Name" />
          </div>

          <div>
            <label className="block text-gray-400 font-mono mb-1">EMAIL ADDRESS</label>
            <input type="email" className="w-full p-3 rounded-lg bg-[#0B0F17] border border-gray-800 text-white focus:border-[#C5A059] outline-none" placeholder="name@domain.com" />
          </div>

          <div>
            <label className="block text-gray-400 font-mono mb-1">INQUIRY TYPE</label>
            <select className="w-full p-3 rounded-lg bg-[#0B0F17] border border-gray-800 text-white focus:border-[#C5A059] outline-none font-mono">
              <option>Founding Membership Application</option>
              <option>The VYTAL Reset Flagship Inquiry</option>
              <option>Private Buyout / Corporate Event</option>
              <option>General Information</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-400 font-mono mb-1">MESSAGE</label>
            <textarea rows="4" className="w-full p-3 rounded-lg bg-[#0B0F17] border border-gray-800 text-white focus:border-[#C5A059] outline-none" placeholder="How can we assist your restoration trajectory?" />
          </div>

          <button type="submit" className="w-full py-3 rounded-xl font-mono font-bold text-xs uppercase bg-[#C5A059] text-black hover:bg-[#E6C687] transition flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            <span>SUBMIT INQUIRY</span>
          </button>
        </form>
      </div>
    </div>
  );
}

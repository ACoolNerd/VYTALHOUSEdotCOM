import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, FileText, Lock, HeartHandshake, ExternalLink } from 'lucide-react';
import { CPOM_ENTITIES, MEDICAL_DIRECTOR } from '../../data/masterSpecData';
import PlaceholderBadge from '../ui/PlaceholderBadge';

export default function Footer() {
  const legalLinks = [
    { label: 'Terms of Service', path: '/legal/terms' },
    { label: 'Privacy Policy', path: '/legal/privacy' },
    { label: 'Accessibility Statement', path: '/legal/accessibility' },
    { label: 'HIPAA Notice of Privacy Practices', path: '/legal/hipaa' },
    { label: 'No Surprises Act', path: '/legal/no-surprises-act' },
    { label: 'Good Faith Estimate', path: '/legal/good-faith-estimate' },
  ];

  return (
    <footer className="bg-[#080B11] border-t border-[#232D40] text-gray-400 font-sans text-xs pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CPOM Two-Entity Declaration Box */}
        <div className="p-6 rounded-2xl bg-[#0F1522] border border-[#232D40] mb-12">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <h4 className="font-heading font-bold text-white text-sm tracking-wider">
              MARYLAND CPOM LEGAL STRUCTURE & CORPORATE GOVERNANCE
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Clinical PC Box */}
            <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-sky-400 uppercase">CLINICAL ENTITY</span>
                <PlaceholderBadge text="PC Name TBD" />
              </div>
              <p className="font-bold text-white text-sm">{CPOM_ENTITIES.pc.name}</p>
              <p className="text-gray-300">
                <strong>Medical Director:</strong> {MEDICAL_DIRECTOR.name} ({CPOM_ENTITIES.pc.owner})
              </p>
              <p className="text-gray-400 leading-relaxed">
                Renders all medical services: IV nutrient drips, intramuscular shots, 180+ biomarker blood panels, diagnostic evaluations, and physician readouts. Billed as clinical services.
              </p>
            </div>

            {/* MSO Management Box */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-amber-400 uppercase">MANAGEMENT ENTITY</span>
                <PlaceholderBadge text="MSO Name TBD" />
              </div>
              <p className="font-bold text-white text-sm">{CPOM_ENTITIES.mso.name}</p>
              <p className="text-gray-300">
                <strong>Owner:</strong> {CPOM_ENTITIES.mso.owner}
              </p>
              <p className="text-gray-400 leading-relaxed">
                Operates wellness facilities, thermal contrast rituals, recovery technology (HBOT, PEMF, compression), bodywork, facials, membership administration, and retail.
              </p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Brief */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] border border-[#C5A059] flex items-center justify-center shadow-gold-glow">
                <span className="font-heading font-black text-xs text-[#C5A059] tracking-tighter">VH</span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg tracking-widest text-white block leading-none">
                  VYTAL<span className="text-[#C5A059]">.</span>HOUSE
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#C5A059] font-bold block uppercase mt-0.5">
                  RENEW • RESTORE • RECHARGE
                </span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-xs">
              The first physician-anchored restoration house in Maryland. Making optimal a measurable state — not a feeling.
            </p>

            <div className="p-2.5 rounded-xl bg-[#0F1522] border border-[#C5A059]/30 inline-flex items-center gap-2 text-[10px] font-mono text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping"></span>
              <span>OFFICIAL BRAND DESIGN SYSTEM 2026</span>
            </div>

            <p className="font-mono text-gray-500 text-[11px]">
              © 2026 VYTAL House. All Rights Reserved.
            </p>
          </div>

          {/* Restorations & Services */}
          <div className="space-y-3">
            <h5 className="font-heading font-bold text-white tracking-wider text-xs">RESTORATIONS & PRODUCTS (MSO)</h5>
            <ul className="space-y-2 font-mono">
              <li><Link to="/reset" className="hover:text-[#C5A059] transition">THE VYTAL RESET ($695)</Link></li>
              <li><Link to="/restorations/origin" className="hover:text-[#C5A059] transition">ORIGIN ($595)</Link></li>
              <li><Link to="/products/pouches" className="hover:text-[#C5A059] text-[#C5A059] font-bold transition">VYTAL POUCHES (PILOT)</Link></li>
              <li><Link to="/products/vytal-air" className="hover:text-[#C5A059] text-sky-400 font-bold transition">VYTAL AIR (DPI PLATFORM)</Link></li>
              <li><Link to="/modalities" className="hover:text-[#C5A059] transition">RAW MODALITIES MENU</Link></li>
            </ul>
          </div>

          {/* Medical Clinical Vertical */}
          <div className="space-y-3">
            <h5 className="font-heading font-bold text-sky-400 tracking-wider text-xs">MEDICAL CLINICAL (PC)</h5>
            <ul className="space-y-2 font-mono">
              <li><Link to="/medical/iv" className="hover:text-sky-300 transition">IV Shots ($145)</Link></li>
              <li><Link to="/medical/iv" className="hover:text-sky-300 transition">IV Drips ($295)</Link></li>
              <li><Link to="/medical/iv" className="hover:text-sky-300 transition">Premium NAD+ ($795)</Link></li>
              <li><Link to="/medical/bloodwork" className="hover:text-sky-300 transition">180+ Biomarker Panel ($995)</Link></li>
              <li><Link to="/medical/aesthetics" className="hover:text-sky-300 transition">Aesthetics Phase 2 ⚑</Link></li>
            </ul>
          </div>

          {/* Core Navigation */}
          <div className="space-y-3">
            <h5 className="font-heading font-bold text-white tracking-wider text-xs">NAVIGATION</h5>
            <ul className="space-y-2 font-mono">
              <li><Link to="/membership" className="hover:text-[#C5A059] transition">Membership Tiers</Link></li>
              <li><Link to="/index" className="hover:text-[#C5A059] transition">The VYTAL Index</Link></li>
              <li><Link to="/house" className="hover:text-[#C5A059] transition">The House & Tech</Link></li>
              <li><Link to="/team" className="hover:text-[#C5A059] transition">Medical Team</Link></li>
              <li><Link to="/events" className="hover:text-[#C5A059] transition">Private Events</Link></li>
              <li><Link to="/journal" className="hover:text-[#C5A059] transition">Journal & Science</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Legal Stack */}
        <div className="pt-8 border-t border-[#232D40] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-400">
            {legalLinks.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-[#C5A059] transition">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="text-gray-500 text-[11px] text-center md:text-right">
            Maryland CPOM MSA Protected • No Unregistered Clinical Claims
          </div>
        </div>

        {/* Custom ACoolNERD & ACoolWEBSITE Signature Credit Line */}
        <div className="mt-8 pt-6 border-t border-[#1C2536] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-1.5">
            <a 
              href="https://instagram.com/acoolnerd" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-300 font-bold hover:text-orange-500 transition-colors duration-200 inline-flex items-center gap-1 group"
              title="Visit ACoolWEBSITE on Instagram"
            >
              <span>ACoolWEBSITE</span>
              <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-orange-500 transition-colors" />
            </a>
            <span className="text-gray-600">|</span>
            <span>Made with 🧡 by</span>
            <a 
              href="https://linkedin.com/in/acoolnerd" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-300 font-bold hover:text-orange-500 transition-colors duration-200 inline-flex items-center gap-1 group ml-0.5"
              title="Connect with ACoolNERD on LinkedIn"
            >
              <span>ACoolNERD</span>
              <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-orange-500 transition-colors" />
            </a>
          </div>

          <div className="text-[11px] text-gray-500">
            Architected & Manifested for Keith McPherson • VYTAL House Master Spec v1.0
          </div>
        </div>

      </div>
    </footer>
  );
}

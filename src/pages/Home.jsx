import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, ArrowRight, CheckCircle, Flame, Clock, Award, Sparkles, UserCheck, Stethoscope, Users, Coffee, HeartPulse } from 'lucide-react';
import { BRAND_HERO, BRAND_MISSION, VYTAL_RESET_FLAGSHIP, RESTORATIONS_LIST, MEMBERSHIP_TIERS, ACCESS_SCHEDULE, MEDICAL_DIRECTOR, OPEN_DECISIONS } from '../data/masterSpecData';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import VytalIndexCalculator from '../components/ui/VytalIndexCalculator';
import CPOMEntityBadge from '../components/ui/CPOMEntityBadge';
import FacilityPhotoGallery from '../components/ui/FacilityPhotoGallery';
import MemberSuccessShowcase from '../components/ui/MemberSuccessShowcase';

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      
      {/* IMMERSIVE HERO SECTION WITH REECESS-INSPIRED AMBIENT HERO IMAGE */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-16 pb-12 overflow-hidden border-b border-[#232D40]">
        
        {/* Full-bleed Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/imgi_28_5a62c57a6a6418c9a87b77167658eaa53a242c62.png" 
            alt="VYTAL House Interior Biohouse" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110 saturate-[0.85] transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/75 to-[#0B0F17]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/95 via-transparent to-[#0B0F17]/95" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C5A059]/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8 relative z-10 my-auto pt-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#C5A059]/40 text-xs font-mono text-[#C5A059] shadow-gold-glow">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>THE RESTORATION HOUSE • PHYSICIAN-LED & SOCIAL LONGEVITY</span>
            <span className="text-gray-500">|</span>
            <PlaceholderBadge text="MARYLAND" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] uppercase font-heading drop-shadow-2xl">
            RECOVER LIKE IT'S CLINICAL.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#E6C687] to-amber-200">
              BECAUSE IT IS.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            {BRAND_MISSION} Every protocol runs under a named medical director — not a liability waiver.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reset"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-mono font-bold text-sm uppercase tracking-wider bg-[#C5A059] text-black hover:bg-[#E6C687] transition shadow-gold-glow"
            >
              <span>START WITH A BASELINE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/membership"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-mono font-bold text-sm uppercase tracking-wider bg-[#131A26]/90 text-white hover:bg-[#1B2434] border border-[#232D40] backdrop-blur-md transition"
            >
              <span>EXPLORE MEMBERSHIP TIER</span>
            </Link>
          </div>

        </div>

        {/* Hero Bottom Floating Stat Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-xl glass-panel border border-[#C5A059]/30 bg-[#0B0F17]/80 backdrop-blur-md">
              <span className="block text-2xl font-bold font-mono text-[#C5A059]">01</span>
              <span className="text-xs font-mono font-semibold text-gray-200 uppercase block mt-1">Physician Director</span>
              <span className="text-[11px] text-gray-400 block">{MEDICAL_DIRECTOR.name}</span>
            </div>
            <div className="p-4 rounded-xl glass-panel border border-sky-500/30 bg-[#0B0F17]/80 backdrop-blur-md">
              <span className="block text-2xl font-bold font-mono text-sky-400">180+</span>
              <span className="text-xs font-mono font-semibold text-gray-200 uppercase block mt-1">Biomarker Panel</span>
              <span className="text-[11px] text-gray-400 block">Real Bloodwork & Lab Analysis</span>
            </div>
            <div className="p-4 rounded-xl glass-panel border border-emerald-500/30 bg-[#0B0F17]/80 backdrop-blur-md">
              <span className="block text-2xl font-bold font-mono text-emerald-400">6</span>
              <span className="text-xs font-mono font-semibold text-gray-200 uppercase block mt-1">VYTAL Domains</span>
              <span className="text-[11px] text-gray-400 block">Directional Trajectory Loop</span>
            </div>
            <div className="p-4 rounded-xl glass-panel border border-amber-500/30 bg-[#0B0F17]/80 backdrop-blur-md">
              <span className="block text-2xl font-bold font-mono text-amber-400">CPOM</span>
              <span className="text-xs font-mono font-semibold text-gray-200 uppercase block mt-1">Two-Entity Structure</span>
              <span className="text-[11px] text-gray-400 block">Maryland PC / MSO Segregated</span>
            </div>
          </div>
        </div>

      </section>

      {/* REMEDY PLACE INSPIRED: SELF-CARE MADE SOCIAL & PHYSICIAN-LED SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-gold-panel border border-[#C5A059]/40 relative overflow-hidden space-y-8 shadow-gold-glow">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#C5A059]/30">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
                SOCIAL WELLNESS & PHYSICIAN LONGEVITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                SELF-CARE MADE SOCIAL. PHYSICIAN ANCHORED.
              </h2>
              <p className="text-sm text-gray-300 max-w-2xl">
                Living a high-performance, healthy lifestyle should never mean being isolated. VYTAL House blends clinical alternative medicine, thermal contrast, and elevated hospitality inside a physician-led social lounge.
              </p>
            </div>

            <Link
              to="/house"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono font-bold text-xs uppercase bg-[#C5A059] text-black hover:bg-[#E6C687] transition shrink-0"
            >
              <span>EXPLORE THE SOCIAL LOUNGE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#0B0F17]/90 border border-[#232D40] space-y-3">
              <div className="p-3 rounded-lg bg-[#C5A059]/10 text-[#C5A059] w-fit">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">SOCIAL CONTRAST SUITES</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Guided group ice baths, sub-45°F plunges, and breathwork sequences designed to build resilience with your circle.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0B0F17]/90 border border-[#232D40] space-y-3">
              <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 w-fit">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">ADAPTOGENIC TONIC BAR</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Non-alcoholic adaptogenic elixirs, hydration matrices, and longevity tea blends served in our executive member lounge.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0B0F17]/90 border border-[#232D40] space-y-3">
              <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 w-fit">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">EVIDENCE-BASED REMEDIES</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                From IV nutrient drips and NAD+ cellular therapy to hyperbaric oxygen and 180+ biomarker bloodwork — backed by clinical evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ARCHITECTURAL PHOTOGRAPHY GALLERY SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FacilityPhotoGallery />
      </section>

      {/* THE STRUCTURAL DIFFERENCE (Reecess vs VYTAL House) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">WHY THIS ISN'T A STANDARD WELLNESS CLONE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">THE STRUCTURAL DIFFERENCE</h2>
          <p className="text-sm text-gray-400">
            VYTAL's moat is the measurement loop, not the equipment. Anyone can buy a cryo chamber. Nobody in the market is closing the loop under a physician.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Reecess / Generic Column */}
          <div className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-800">
              <h3 className="font-mono text-lg font-bold text-gray-400 uppercase">GENERIC RECOVERY SPA</h3>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-gray-800 text-gray-400">Standard Model</span>
            </div>

            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex justify-between py-2 border-b border-gray-800/60">
                <span className="text-gray-500">Clinical Authority:</span>
                <span className="text-gray-300 font-mono">None Named / Waiver Only</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-800/60">
                <span className="text-gray-500">Diagnostics:</span>
                <span className="text-gray-300 font-mono">"Non-medical" by necessity</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-800/60">
                <span className="text-gray-500">Baseline:</span>
                <span className="text-gray-300 font-mono">Measured once (or never)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-800/60">
                <span className="text-gray-500">Data Feedback:</span>
                <span className="text-gray-300 font-mono">None returned to member</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-500">Retention Driver:</span>
                <span className="text-gray-300 font-mono">Access Scarcity alone</span>
              </div>
            </div>
          </div>

          {/* VYTAL House Column */}
          <div className="p-8 rounded-2xl glass-gold-panel border border-[#C5A059]/40 space-y-6 shadow-gold-glow">
            <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/30">
              <h3 className="font-mono text-lg font-bold text-[#C5A059] uppercase">VYTAL HOUSE</h3>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#C5A059]/20 text-[#C5A059] font-bold">PHYSICIAN-LED MOAT</span>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between py-2 border-b border-[#232D40]">
                <span className="text-gray-400">Clinical Authority:</span>
                <span className="text-white font-mono font-bold">{MEDICAL_DIRECTOR.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#232D40]">
                <span className="text-gray-400">Diagnostics:</span>
                <span className="text-sky-400 font-mono font-bold">Real Bloodwork (180+ Biomarkers)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#232D40]">
                <span className="text-gray-400">Baseline Loop:</span>
                <span className="text-emerald-400 font-mono font-bold">Baseline → Protocol → Re-Test</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#232D40]">
                <span className="text-gray-400">Data & Trend:</span>
                <span className="text-[#C5A059] font-mono font-bold">VYTAL Index Score (0–100)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-400">Entity Governance:</span>
                <span className="text-amber-300 font-mono font-bold">Maryland CPOM PC / MSO Split</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBER SUCCESS TRAJECTORIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MemberSuccessShowcase />
      </section>

      {/* THE FLAGSHIP FEATURE: THE VYTAL RESET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#131A26] to-[#0B0F17] border border-[#C5A059]/40 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-[#232D40]">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded font-mono text-xs font-bold bg-[#C5A059] text-black">
                  FLAGSHIP FIRST VISIT
                </span>
                <PlaceholderBadge text="$695 Pricing ⚑" />
                <span className="text-xs font-mono text-gray-400">• Allow Approx. 3 Hours</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {VYTAL_RESET_FLAGSHIP.name}
              </h2>

              <p className="text-base text-gray-300 max-w-2xl">
                {VYTAL_RESET_FLAGSHIP.description}
              </p>
            </div>

            <Link
              to="/reset"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-mono font-bold text-sm uppercase bg-[#C5A059] text-black hover:bg-[#E6C687] transition shrink-0"
            >
              <span>BOOK RESET GATEWAY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Phases Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {VYTAL_RESET_FLAGSHIP.phases.map((phase) => (
              <div key={phase.phase} className="p-6 rounded-xl bg-[#0B0F17]/90 border border-[#232D40] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-[#C5A059]">{phase.phase}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-800 text-gray-300">
                    {phase.provider}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-white">{phase.name}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{phase.details}</p>
              </div>
            ))}
          </div>

          {/* Outcome list verbatim */}
          <div className="mt-10 pt-8 border-t border-[#232D40]">
            <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              MEASURED & FELT OUTCOMES (VERBATIM)
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {VYTAL_RESET_FLAGSHIP.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-2 text-xs font-medium text-gray-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE DEMO: THE VYTAL INDEX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VytalIndexCalculator />
      </section>

      {/* RESTORATIONS PROTOCOLS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
              BRANDED PROTOCOL INDEX (MSO)
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">THE RESTORATIONS</h2>
          </div>
          <Link to="/restorations" className="text-xs font-mono text-[#C5A059] hover:underline">
            VIEW ALL PROTOCOLS →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESTORATIONS_LIST.slice(1, 7).map((item) => (
            <div key={item.slug} className="p-6 rounded-xl glass-panel border border-[#232D40] hover:border-[#C5A059]/50 transition space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <CPOMEntityBadge entity={item.entity === 'PC' ? 'PC' : 'MSO'} />
                  <span className="font-mono text-sm font-bold text-white">${item.price} ⚑</span>
                </div>
                <h3 className="font-bold text-xl text-white">{item.name}</h3>
                <p className="text-xs font-mono text-[#C5A059] mb-2">{item.subtitle}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-4 border-t border border-gray-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500">Duration: {item.duration || item.durationVariants?.[0]}</span>
                <Link to={`/restorations/${item.slug}`} className="text-white hover:text-[#C5A059] font-bold">
                  DETAILS →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLINICAL MEDICAL VERTICAL SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl glass-clinical-panel border border-sky-500/30 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-sky-900/50">
            <div>
              <div className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-sky-400" />
                <span className="text-xs font-mono font-bold text-sky-400 tracking-widest uppercase">
                  CLINICAL VERTICAL INDEX (PHYSICIAN-DELIVERED)
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-white mt-1">VYTAL MEDICAL SERVICES</h2>
              <p className="text-xs text-gray-300 mt-1">
                Delivered under the medical authority of <strong>{MEDICAL_DIRECTOR.name}</strong> ({MEDICAL_DIRECTOR.credentials}).
              </p>
            </div>

            <Link
              to="/medical"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-bold bg-sky-500 text-black hover:bg-sky-400 transition"
            >
              <span>EXPLORE CLINICAL SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-sky-950/40 border border-sky-800/40 space-y-3">
              <h3 className="font-bold text-lg text-white">IV DRIPS & SHOTS</h3>
              <p className="text-xs text-gray-300">Immunity, Metabolism, NAD+ Cellular Recharge, and Hydration.</p>
              <div className="text-xs font-mono text-sky-400 pt-2 font-bold">$145 – $795 ⚑</div>
            </div>

            <div className="p-6 rounded-xl bg-sky-950/40 border border-sky-800/40 space-y-3">
              <h3 className="font-bold text-lg text-white">180+ BIOMARKER BLOODWORK</h3>
              <p className="text-xs text-gray-300">Comprehensive metabolic, hormonal, and biological age readout.</p>
              <div className="text-xs font-mono text-sky-400 pt-2 font-bold">$995 ⚑</div>
            </div>

            <div className="p-6 rounded-xl bg-sky-950/40 border border-sky-800/40 space-y-3">
              <h3 className="font-bold text-lg text-white">AESTHETICS & INJECTABLES</h3>
              <p className="text-xs text-gray-300">Neuromodulators and dermal longevity protocols (Phase 2 ⚑).</p>
              <div className="text-xs font-mono text-amber-400 pt-2 font-bold">Phase 2 ⚑</div>
            </div>
          </div>
        </div>
      </section>

      {/* VYTAL INNOVATIONS & RETAIL SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#111827] via-[#0F1522] to-[#111827] border border-[#C5A059]/40 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#232D40] pb-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
                MSO RETAIL, BRAND & HARDWARE INNOVATIONS
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">VYTAL Brand & Product System</h2>
            </div>
            <PlaceholderBadge text="MSO RETAIL LINE" />
          </div>

          {/* Brand System Sheet Showcase */}
          <div className="p-6 rounded-2xl bg-[#0B0F17] border border-[#C5A059]/40 flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 space-y-3">
              <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30">
                OFFICIAL BRAND DESIGN SYSTEM
              </span>
              <h3 className="text-2xl font-bold text-white">Interlocking Monogram & Hardware Line</h3>
              <p className="text-xs text-gray-300 font-sans leading-relaxed">
                The official architectural 3D chrome <strong>VH</strong> monogram emblem, circular seal lockup (<em>Renew • Restore • Recharge</em>), matte-black canisters with neon-gold accent rings, and icon system.
              </p>
              <div className="pt-2">
                <Link
                  to="/products/pouches"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#C5A059] font-bold hover:underline"
                >
                  <span>VIEW POUCH HARDWARE IMPLEMENTATION</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 overflow-hidden rounded-xl border border-gray-800 bg-black">
              <img
                src="/assets/brand/vytal-design-system.png"
                alt="VYTAL House Brand Design System"
                className="w-full h-auto object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* VYTAL Pouches Card */}
            <div className="p-6 rounded-2xl bg-[#0B0F17] border border-[#C5A059]/30 hover:border-[#C5A059] transition space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    SUBLINGUAL POUCHES
                  </span>
                  <span className="text-xs font-mono text-gray-400">3 Formulations</span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#C5A059] transition">VYTAL Pouches</h3>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  Sublingual functional pouches engineered in three targeted flavors: <strong>Energy</strong> (Soursop Lime), <strong>Tidal</strong> (Sea Moss Cucumber Lime), and <strong>NAD Support</strong> (Blue Soursop Yuzu).
                </p>

                <div className="p-3 rounded-xl bg-gray-900 border border-gray-800 flex justify-center items-center gap-4">
                  <img src="/assets/pouches/vytal-tidal-tin.png" alt="VYTAL Tidal Pouch Tin" className="h-28 w-auto object-contain transition transform group-hover:scale-105" />
                  <img src="/assets/pouches/vytal-nad-support-tin.png" alt="VYTAL NAD Support Pouch Tin" className="h-28 w-auto object-contain transition transform group-hover:scale-105" />
                </div>
              </div>

              <Link
                to="/products/pouches"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-mono text-xs font-bold uppercase bg-[#C5A059] text-black hover:bg-[#E6C687] transition shadow-gold-glow"
              >
                <span>EXPLORE VYTAL POUCHES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* VYTAL AIR Card */}
            <div className="p-6 rounded-2xl bg-[#0B0F17] border border-sky-500/30 hover:border-sky-400 transition space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    DRY-POWDER DPI PLATFORM
                  </span>
                  <span className="text-xs font-mono text-gray-400">Development Stage</span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition">VYTAL AIR</h3>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  Capsule-based dry-powder inhalation (DPI) platform under intellectual property, engineering, pulmonary safety, and regulatory development.
                </p>

                <div className="p-3 rounded-xl bg-gray-900 border border-gray-800 flex justify-center items-center h-36">
                  <img src="/assets/vytal-air/vytalair-1.png" alt="VYTAL AIR Device" className="h-32 w-auto object-cover rounded-lg transition transform group-hover:scale-105" />
                </div>
              </div>

              <Link
                to="/products/vytal-air"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-mono text-xs font-bold uppercase bg-sky-500/20 text-sky-300 hover:bg-sky-500 hover:text-black border border-sky-500/40 transition"
              >
                <span>EXPLORE VYTAL AIR PLATFORM</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TIERS SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
            ACCESS SCARCITY IS THE PRODUCT
          </span>
          <h2 className="text-3xl font-extrabold text-white">MEMBERSHIP TIERS</h2>
          <p className="text-xs font-mono text-gray-400">
            Member Hours: {ACCESS_SCHEDULE.members} • Non-Member Hours: {ACCESS_SCHEDULE.nonMembers}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 rounded-2xl space-y-6 flex flex-col justify-between ${
                tier.isPopular
                  ? 'glass-gold-panel border-2 border-[#C5A059] shadow-gold-glow'
                  : 'glass-panel border border-[#232D40]'
              }`}
            >
              <div className="space-y-4">
                {tier.isPopular && (
                  <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#C5A059] text-black">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-bold text-2xl text-white">{tier.name}</h3>
                <div className="font-mono">
                  <span className="text-4xl font-extrabold text-white">${tier.price}</span>
                  <span className="text-xs text-gray-400"> / {tier.cadence} ⚑</span>
                </div>

                <ul className="space-y-3 pt-4 border-t border-gray-800 text-xs text-gray-300">
                  {tier.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/membership"
                className={`w-full py-3 rounded-lg text-center font-mono font-bold text-xs uppercase tracking-wider transition ${
                  tier.isPopular
                    ? 'bg-[#C5A059] text-black hover:bg-[#E6C687]'
                    : 'bg-[#1A2234] text-white hover:bg-[#232D40] border border-gray-700'
                }`}
              >
                APPLY FOR {tier.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN DECISIONS ⚑ TRACKER FOOTNOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] font-bold">⚑</span>
            <h3 className="font-mono font-bold text-sm text-amber-300 uppercase">
              PLACEHOLDER DISCIPLINE — OPEN KEITH DECISIONS STATUS
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            {OPEN_DECISIONS.slice(0, 6).map((dec) => (
              <div key={dec.id} className="p-3 rounded-lg bg-gray-900/80 border border-gray-800 space-y-1">
                <span className="font-bold text-gray-200 block">{dec.title}</span>
                <span className="text-[11px] text-gray-400 block">{dec.value}</span>
                <PlaceholderBadge text={dec.status} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

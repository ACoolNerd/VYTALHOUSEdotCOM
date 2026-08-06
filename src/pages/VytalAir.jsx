import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Wind, Cpu, FileText, CheckCircle2, ArrowRight, Download, Eye, X, AlertCircle, Layers, Activity, UserCheck } from 'lucide-react';
import PlaceholderBadge from '../components/ui/PlaceholderBadge';
import { MEDICAL_DIRECTOR } from '../data/masterSpecData';

export default function VytalAir() {
  const [activeMediaModal, setActiveMediaModal] = useState(null);

  const workstreams = [
    {
      num: '01',
      title: 'FORMULATION',
      subtitle: 'Define the Powder',
      desc: 'Targeted composition, excipient selection, particle size engineering (1-5µm ideal aerodynamic diameter), stability assays, and dose uniformity standards.'
    },
    {
      num: '02',
      title: 'DEVICE',
      subtitle: 'Engineer the Delivery',
      desc: 'Passive capsule-based dry-powder inhaler (DPI) internal airflow dynamics, mechanical capsule piercing, particle deagglomeration, and human factors validation.'
    },
    {
      num: '03',
      title: 'PACKAGING',
      subtitle: 'Protect the Dose',
      desc: 'Unit-dose capsule containment, moisture & oxygen barrier protection, tamper evidence, track-and-trace serialization, and stability packaging.'
    },
    {
      num: '04',
      title: 'EVIDENCE',
      subtitle: 'Build the Record',
      desc: 'Provisional patent drafting, Pre-RFD / Pre-IND regulatory submissions, non-clinical pulmonary safety studies, quality management systems (QMS), and trial design.'
    }
  ];

  const mediaGallery = [
    { id: 'vytalair-1', title: 'VYTAL AIR Device Architecture Render 1', src: '/assets/vytal-air/vytalair-1.png' },
    { id: 'vytalair-2', title: 'Capsule Chamber & Airflow Dynamics 2', src: '/assets/vytal-air/vytalair-2.png' },
    { id: 'vytalair-3', title: 'High-Contrast DPI Mechanical Shell 3', src: '/assets/vytal-air/vytalair-3.png' },
    { id: 'vytalair-4', title: 'Unit-Dose Capsule Docking System 4', src: '/assets/vytal-air/vytalair-4.png' },
    { id: 'vytalair-5', title: 'Aerodynamic Deagglomeration Nozzle 5', src: '/assets/vytal-air/vytalair-[#1].png' }, // fallback
    { id: 'vytalair-6', title: 'Industrial Ergonomic Silhouette 6', src: '/assets/vytal-air/vytalair-6.png' },
    { id: 'vytalair-7', title: 'Exploded Technical Assembly 7', src: '/assets/vytal-air/vytalair-7.png' },
    { id: 'vytalair-[#2]', title: 'Precision Inhalation Interface 8', src: '/assets/vytal-air/vytalair-8.png' },
  ].map((item, idx) => ({
    ...item,
    src: `/assets/vytal-air/vytalair-${idx + 1}.png`
  }));

  return (
    <div className="min-h-screen bg-[#0B0F17] text-gray-100 font-sans pb-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-[#232D40] bg-gradient-to-b from-[#0F172A] via-[#0B0F17] to-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Copy Column */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-sky-500/10 border border-sky-500/30 text-sky-400">
                <Wind className="w-3.5 h-3.5" />
                <span>DRY-POWDER INHALATION PLATFORM</span>
                <span className="text-gray-500">•</span>
                <PlaceholderBadge text="DEVELOPMENT STAGE" />
              </div>

              <h1 className="font-heading font-black text-4xl sm:text-6xl tracking-tight text-white leading-tight">
                VYTAL <span className="text-[#C5A059]">AIR</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed font-light">
                A capsule-based dry-powder inhalation (DPI) delivery platform under engineering, intellectual property, physician review, and regulatory development at VYTAL House.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#system"
                  className="px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-[#C5A059] text-black hover:bg-[#E6C687] transition shadow-gold-glow flex items-center gap-2"
                >
                  <span>EXPLORE PLATFORM ARCHITECTURE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#media"
                  className="px-6 py-3 rounded-xl text-xs font-mono font-semibold tracking-wider border border-gray-700 hover:border-gray-500 text-gray-300 transition flex items-center gap-2"
                >
                  <span>VIEW 16:9 MEDIA SUITE</span>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-gray-900/80 border-l-2 border-[#C5A059] text-xs font-mono text-gray-400 space-y-1">
                <p className="font-bold text-gray-200">DEVELOPMENT CONCEPT DISCLOSURE:</p>
                <p>No patent filing, FDA authorization, clinical efficacy, or commercial availability is represented unless independently documented under signed protocol.</p>
              </div>
            </div>

            {/* Stage Visual */}
            <div className="relative flex justify-center items-center py-8">
              <div className="absolute w-80 h-80 rounded-full bg-sky-500/10 blur-3xl -z-10 animate-pulse"></div>
              
              {/* CSS DPI Device Mockup Stage */}
              <div className="relative w-72 h-96 rounded-3xl bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#020617] border border-[#C5A059]/40 p-6 flex flex-col justify-between items-center shadow-2xl group hover:border-[#C5A059] transition duration-500">
                <div className="w-full flex justify-between items-center text-[10px] font-mono text-[#C5A059]">
                  <span>CAPSULE DPI</span>
                  <span>PASSIVE AIRFLOW</span>
                </div>

                {/* Device Emblem */}
                <div className="w-28 h-28 rounded-2xl bg-[#0B0F17] border border-[#C5A059]/60 flex flex-col items-center justify-center shadow-gold-glow">
                  <Wind className="w-8 h-8 text-[#C5A059] animate-bounce" />
                  <span className="text-xs font-heading font-bold text-white tracking-widest mt-2">VYTAL AIR</span>
                </div>

                {/* Capsule Preview Indicator */}
                <div className="w-full p-3 rounded-xl bg-[#0B0F17]/90 border border-sky-500/30 text-center font-mono text-[11px] text-sky-300">
                  <span>UNIT-DOSE CAPSULE CHAMBER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Workstreams Grid */}
      <section id="system" className="py-20 border-b border-[#232D40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest">PRODUCT ARCHITECTURE</span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1">One Controlled Development Platform.</h2>
            </div>
            <p className="text-xs font-mono text-gray-400 max-w-md">
              VYTAL AIR coordinates four disciplined workstreams so product claims are backed by intellectual property, technical evidence, and regulatory alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workstreams.map((w) => (
              <div key={w.num} className="p-6 rounded-2xl bg-[#0F1522] border border-[#232D40] hover:border-[#C5A059] transition space-y-4">
                <span className="text-xs font-mono font-bold text-[#C5A059]">{w.num} • {w.title}</span>
                <h3 className="font-heading font-bold text-lg text-white">{w.subtitle}</h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Ritual & Control Principle */}
      <section className="py-20 border-b border-[#232D40] bg-[#090D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Delivery Concept */}
            <div className="p-8 rounded-2xl bg-[#0F1522] border border-[#232D40] space-y-6">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">DELIVERY MECHANISM CONCEPT</span>
              <h3 className="font-heading font-bold text-3xl text-white">Passive Capsule-Based DPI</h3>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                A reusable, breath-actuated dry-powder inhaler utilizing individually sealed unit-dose capsules. Formulated without propellants, liquids, or thermal heating elements.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#131A26] border border-gray-800 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center">1</div>
                  <div>
                    <strong className="text-white block">LOAD</strong>
                    <span className="text-gray-400 text-[11px]">Insert one authorized unit-dose powder capsule.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#131A26] border border-gray-800 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center">2</div>
                  <div>
                    <strong className="text-white block">ACTIVATE</strong>
                    <span className="text-gray-400 text-[11px]">Pierce capsule using validated mechanical pin arrangement.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#131A26] border border-gray-800 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center">3</div>
                  <div>
                    <strong className="text-white block">INHALE</strong>
                    <span className="text-gray-400 text-[11px]">Inhale deeply to aerosolize powder via engineered vortex.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Control Principle (R-D-P) */}
            <div className="p-8 rounded-2xl bg-[#0F1522] border border-[#232D40] space-y-6">
              <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest">CONTROL PRINCIPLE</span>
              <h3 className="font-heading font-bold text-3xl text-white">Rights • Disclosure • Proof</h3>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Every VYTAL AIR deliverable enforces strict governance ensuring intellectual property integrity, clear operational status, and verifiable documentation.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#131A26] border border-gray-800 space-y-1">
                  <span className="text-[#C5A059] font-bold block">R — RIGHTS</span>
                  <p className="text-gray-400 text-[11px]">Clear inventorship, assignments, background IP, foreground IP, trademarks, data rights, and licensing.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#131A26] border border-gray-800 space-y-1">
                  <span className="text-[#C5A059] font-bold block">D — DISCLOSURE</span>
                  <p className="text-gray-400 text-[11px]">Development status, technical limitations, dependencies, confidentiality, and professional medical review requirements.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#131A26] border border-gray-800 space-y-1">
                  <span className="text-[#C5A059] font-bold block">P — PROOF</span>
                  <p className="text-gray-400 text-[11px]">Patent filings, agreements, raw analytical data, study reports, FDA pre-submission responses, and controlled records.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physician & Scientific Review Section */}
      <section className="py-20 border-b border-[#232D40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-[#0F1522] border border-[#232D40] grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#1A2234] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                <UserCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest block">PHYSICIAN & CLINICAL REVIEW</span>
              <h3 className="font-heading font-extrabold text-2xl text-white">{MEDICAL_DIRECTOR.name}</h3>
              <p className="text-xs font-mono text-gray-400">{MEDICAL_DIRECTOR.credentials}</p>
            </div>

            <div className="lg:col-span-2 space-y-4 text-xs font-mono text-gray-300">
              <p className="leading-relaxed">
                Clinical and scientific materials for VYTAL AIR are structured for rigorous physician review under <strong>{MEDICAL_DIRECTOR.name}</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                <div className="p-2.5 rounded-lg bg-[#131A26] border border-gray-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Pulmonary Safety & Tolerability Criteria</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#131A26] border border-gray-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Excipient & Particle Aerodynamics Review</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#131A26] border border-gray-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>FDA Pre-IND & Clinical Endpoint Framework</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#131A26] border border-gray-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Contraindications & Escalation Protocols</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16:9 Visual Media Suite */}
      <section id="media" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest">DESIGN & RENDERING GALLERY</span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1">16:9 Media Presentation Suite</h2>
            </div>
            <p className="text-xs font-mono text-gray-400">Click any image to view in full resolution.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaGallery.map((m) => (
              <div
                key={m.id}
                onClick={() => setActiveMediaModal(m)}
                className="group cursor-pointer rounded-xl bg-[#0F1522] border border-[#232D40] overflow-hidden hover:border-[#C5A059] transition duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={m.src}
                    alt={m.title}
                    className="w-full h-full object-cover transition transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2 text-white font-mono text-xs">
                    <Eye className="w-4 h-4 text-[#C5A059]" />
                    <span>EXPAND</span>
                  </div>
                </div>
                <div className="p-3 text-xs font-mono text-gray-300 truncate">
                  {m.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Modal Lightbox */}
      {activeMediaModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-[#0B0F17] border border-[#C5A059]/60 rounded-2xl overflow-hidden shadow-2xl space-y-4 p-4">
            <div className="flex items-center justify-between font-mono text-xs text-gray-300 border-b border-gray-800 pb-3">
              <span className="font-bold text-[#C5A059]">{activeMediaModal.title}</span>
              <button
                onClick={() => setActiveMediaModal(null)}
                className="p-1 rounded bg-gray-800 hover:bg-gray-700 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
              <img
                src={activeMediaModal.src}
                alt={activeMediaModal.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

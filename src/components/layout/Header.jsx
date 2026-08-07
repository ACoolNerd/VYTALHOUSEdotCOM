import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, ShieldAlert, ArrowRight, Menu, X, ToggleLeft, ToggleRight, Sparkles } from 'lucide-react';
import PlaceholderBadge from '../ui/PlaceholderBadge';

export default function Header() {
  const [navMode, setNavMode] = useState('visitor'); // 'visitor' vs 'member'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isVisitor = navMode === 'visitor';

  // Master Spec Nav Vocabularies
  const visitorNav = [
    { label: 'FIRST VISIT', path: '/reset', highlight: true },
    { label: 'EXPERIENCES', path: '/restorations' },
    { label: 'SERVICES', path: '/modalities' },
    { label: 'MEDICAL', path: '/medical' },
    { label: 'POUCHES', path: '/products/pouches', gold: true },
    { label: 'VYTAL AIR', path: '/products/vytal-air' },
    { label: 'MEMBERSHIP', path: '/membership' },
    { label: 'ABOUT', path: '/team' },
  ];

  const memberNav = [
    { label: 'ACCESS', path: '/account' },
    { label: 'RESTORATIONS', path: '/restorations' },
    { label: 'MODALITIES', path: '/modalities' },
    { label: 'MEDICAL', path: '/medical' },
    { label: 'POUCHES', path: '/products/pouches', gold: true },
    { label: 'VYTAL AIR', path: '/products/vytal-air' },
    { label: 'MEMBERSHIP', path: '/membership' },
    { label: 'THE INDEX', path: '/index', gold: true },
  ];

  const currentNav = isVisitor ? visitorNav : memberNav;

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F17]/90 backdrop-blur-md border-b border-[#232D40]">
      {/* Announcement Bar */}
      <div className="bg-[#131A26] border-b border-[#232D40] py-2 px-4 text-center text-xs font-mono text-gray-300 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
        <span className="font-semibold text-white tracking-widest uppercase">
          NOW ACCEPTING FOUNDING MEMBERS
        </span>
        <span className="text-gray-500">•</span>
        <PlaceholderBadge text="CITY, MD" />
        <span className="hidden md:inline text-gray-400">
          — Physician-Anchored Longevity & Restoration
        </span>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white via-slate-200 to-[#CDB8FF] p-[1px] shadow-lg shadow-[#CDB8FF]/10 group-hover:shadow-[#CDB8FF]/30 transition duration-300">
            <div className="w-full h-full rounded-[11px] bg-[#0B0C0E] flex items-center justify-center">
              <span className="font-heading font-black text-sm tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E2E8F0] to-[#CDB8FF] group-hover:scale-110 transition duration-300">
                V
              </span>
            </div>
          </div>
          <div>
            <span className="font-heading font-extrabold text-xl tracking-widest text-white block leading-none">
              VYTAL<span className="text-[#C6FC06]">.</span>HOUSE
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#B7BDC6] block uppercase mt-0.5 font-bold">
              Renew • Restore • Recharge
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {currentNav.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path + item.label}
                to={item.path}
                className={`text-xs font-mono font-semibold tracking-wider transition-colors relative py-1 ${
                  isActive ? 'text-[#C6FC06]' : 'text-[#B7BDC6] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C6FC06] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Dual Vocabulary Switcher Toggle */}
          <button
            onClick={() => setNavMode(isVisitor ? 'member' : 'visitor')}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-mono border border-gray-800 bg-[#12161F] text-[#B7BDC6] hover:border-gray-700 transition"
            title="Switch between First-Time Visitor view and Returning Member interior view per Master Spec #10."
          >
            {isVisitor ? (
              <>
                <ToggleLeft className="w-4 h-4 text-[#B7BDC6]" />
                <span className="text-gray-400">Nav: <strong className="text-[#B7BDC6]">First-Time</strong></span>
              </>
            ) : (
              <>
                <ToggleRight className="w-4 h-4 text-[#C6FC06]" />
                <span className="text-gray-400">Nav: <strong className="text-[#C6FC06]">Member</strong></span>
              </>
            )}
          </button>

          {/* Book / Reset Primary CTA (Acid Lime Signal) */}
          <Link
            to="/reset"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-[#C6FC06] text-black hover:bg-[#b8e600] transition shadow-lg shadow-[#C6FC06]/20 border border-[#C6FC06]"
          >
            <span>START WITH A BASELINE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F17] border-b border-[#232D40] px-4 py-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <span className="text-xs font-mono text-gray-400">Navigation Vocabulary</span>
            <button
              onClick={() => setNavMode(isVisitor ? 'member' : 'visitor')}
              className="text-xs font-mono text-[#C5A059] font-bold"
            >
              Switch to {isVisitor ? 'Member View' : 'First-Time View'}
            </button>
          </div>

          <div className="flex flex-col space-y-3">
            {currentNav.map((item) => (
              <Link
                key={item.path + item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono font-bold tracking-wider text-gray-200 hover:text-[#C5A059]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-800 flex flex-col gap-2">
            <Link
              to="/reset"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-xs font-mono font-bold uppercase bg-[#C5A059] text-black"
            >
              START WITH A BASELINE
            </Link>
            <Link
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-xs font-mono text-gray-300 border border-gray-700"
            >
              BOOK MODALITY ROUTER
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

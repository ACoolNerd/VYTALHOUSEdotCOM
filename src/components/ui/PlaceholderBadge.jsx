import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function PlaceholderBadge({ text = "Decision Pending", className = "" }) {
  return (
    <span 
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 tracking-wide ${className}`}
      title="Placeholder Discipline: Decision pending sign-off by Keith / Dr. Bomani."
    >
      <span className="text-amber-400 font-bold">⚑</span>
      <span>{text}</span>
    </span>
  );
}

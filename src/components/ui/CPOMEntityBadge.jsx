import React from 'react';
import { Shield, Activity } from 'lucide-react';
import { CPOM_ENTITIES } from '../../data/masterSpecData';

export default function CPOMEntityBadge({ entity = "MSO" }) {
  const isPC = entity === "PC";
  const entityData = isPC ? CPOM_ENTITIES.pc : CPOM_ENTITIES.mso;

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono border ${
      isPC 
        ? 'bg-sky-950/40 text-sky-300 border-sky-500/30' 
        : 'bg-amber-950/30 text-amber-300 border-amber-500/30'
    }`}>
      {isPC ? <Activity className="w-3.5 h-3.5 text-sky-400" /> : <Shield className="w-3.5 h-3.5 text-amber-400" />}
      <span className="font-semibold">{entityData.name}</span>
      <span className="opacity-60">• {isPC ? 'Clinical Entity' : 'Management Entity'}</span>
    </div>
  );
}

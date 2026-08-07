import React from 'react';

export default function HeartbeatDivider({ className = "" }) {
  return (
    <div className={`my-12 relative flex items-center justify-center ${className}`}>
      <div className="vytal-heartbeat-line" />
    </div>
  );
}

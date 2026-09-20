'use client';

import React, { useState, useEffect } from 'react';

interface PageLoaderProps {
  color?: string;
  coreColor?: string;
  glowColor?: string;
}

export default function PageLoader({
  color = '#3b76b3',
  coreColor = '#bbdefb',
  glowColor = 'rgba(59, 118, 179, 0.5)',
}: PageLoaderProps) {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Ultra-smooth instant dismiss when DOM is interactive
    const dismissTimer = setTimeout(() => {
      setMounted(false);
    }, 450);

    return () => clearTimeout(dismissTimer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      id="cgl-preloader"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#FBF9F5]/90 dark:bg-black/85 backdrop-blur-xl pointer-events-none select-none transition-opacity duration-300"
    >
      <div className="relative flex flex-col items-center justify-center gap-3">
        {/* Soft atmospheric ambient glow */}
        <div
          className="absolute w-24 h-24 rounded-full blur-2xl opacity-35 pointer-events-none"
          style={{ backgroundColor: color }}
        />

        {/* Instant Hardware-Accelerated 360 SVG Dual-Orbiter (Runs immediately at 0ms via GPU CSS) */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <svg
            className="w-16 h-16 cgl-instant-spinner"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="loaderOrbGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor={coreColor} />
                <stop offset="45%" stopColor={color} />
                <stop offset="100%" stopColor={color} stopOpacity="0.85" />
              </radialGradient>
            </defs>

            {/* Orbit Circle Path */}
            <circle
              cx="50"
              cy="50"
              r="24"
              stroke={color}
              strokeWidth="1.5"
              strokeDasharray="6 4"
              className="opacity-30"
            />

            {/* Leading Orb */}
            <circle
              cx="50"
              cy="26"
              r="7"
              fill="url(#loaderOrbGrad)"
              className="drop-shadow-[0_0_8px_rgba(59,118,179,0.8)]"
            />

            {/* Counter Orb */}
            <circle
              cx="50"
              cy="74"
              r="7"
              fill="url(#loaderOrbGrad)"
              className="drop-shadow-[0_0_8px_rgba(59,118,179,0.8)]"
            />

            {/* Micro Center Node */}
            <circle
              cx="50"
              cy="50"
              r="3.5"
              fill={color}
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Professional Minimal Engineering Tag */}
        <div className="cgl-loader-pill flex items-center gap-1.5 text-[11px] font-mono font-medium tracking-wider text-[#0F172A] dark:text-stone-300 bg-white/90 dark:bg-[#111111]/90 px-3 py-1 rounded-full border border-[#E6DFD3] dark:border-[#1f1f1f] shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: color }} />
          <span className="cgl-loader-text">CGL • LABS</span>
        </div>
      </div>
    </div>
  );
}

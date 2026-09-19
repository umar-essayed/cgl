'use client';

import React, { useState } from 'react';
import { Layers, MapPin, Navigation, Maximize2 } from 'lucide-react';

interface DarkLocationMapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  lang?: 'ar' | 'en';
}

export default function DarkLocationMap({
  lat = 21.5231047,
  lng = 39.177774,
  zoom = 15,
  lang = 'ar',
}: DarkLocationMapProps) {
  const [mapMode, setMapMode] = useState<'themed' | 'satellite' | 'standard'>('themed');

  const isRtl = lang === 'ar';
  const queryParam = `${lat},${lng}`;
  const embedUrl = mapMode === 'satellite'
    ? `https://maps.google.com/maps?q=${queryParam}&t=k&z=${zoom}&ie=UTF8&iwloc=&output=embed&hl=${lang}`
    : `https://maps.google.com/maps?q=${queryParam}&t=m&z=${zoom}&ie=UTF8&iwloc=&output=embed&hl=${lang}`;

  return (
    <div className="relative w-full h-full bg-[#000000] overflow-hidden select-none">
      {/* Google Maps Iframe with Website Theme Filter */}
      <iframe
        title="CGL Headquarters Location Map"
        src={embedUrl}
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className={`w-full h-full border-0 transition-all duration-500 ${
          mapMode === 'themed'
            ? 'filter invert-[92%] hue-rotate-[195deg] contrast-[1.05] brightness-[0.92] saturate-[0.85]'
            : mapMode === 'satellite'
            ? 'filter contrast-[1.1] brightness-[0.9]'
            : 'filter contrast-[1.02]'
        }`}
      />

      {/* Pulsing CGL Core Pin Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-12 h-12 rounded-full bg-[#3b76b3]/35 animate-ping" />
          <div className="absolute w-8 h-8 rounded-full bg-[#3b76b3]/50 animate-pulse" />
          <div className="w-5 h-5 rounded-full bg-[#3b76b3] border-2 border-white shadow-[0_0_14px_#3b76b3] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
        </div>
      </div>

      {/* Layer Mode Switcher Controls */}
      <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20 flex items-center gap-1.5 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-xl p-1 shadow-2xl">
        <button
          type="button"
          onClick={() => setMapMode('themed')}
          className={`px-2.5 py-1 rounded-lg text-[11px] font-sans font-medium transition-all ${
            mapMode === 'themed'
              ? 'bg-[#3b76b3] text-white font-bold shadow-md'
              : 'text-stone-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {isRtl ? 'النمط الهندسي' : 'Engineered Dark'}
        </button>

        <button
          type="button"
          onClick={() => setMapMode('satellite')}
          className={`px-2.5 py-1 rounded-lg text-[11px] font-sans font-medium transition-all ${
            mapMode === 'satellite'
              ? 'bg-[#3b76b3] text-white font-bold shadow-md'
              : 'text-stone-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {isRtl ? 'قمر صناعي' : 'Satellite'}
        </button>

        <button
          type="button"
          onClick={() => setMapMode('standard')}
          className={`px-2.5 py-1 rounded-lg text-[11px] font-sans font-medium transition-all ${
            mapMode === 'standard'
              ? 'bg-[#3b76b3] text-white font-bold shadow-md'
              : 'text-stone-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {isRtl ? 'خرائط جوجل' : 'Google Maps'}
        </button>
      </div>

      {/* Quick Location Badge */}
      <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 text-xs font-mono text-stone-300 shadow-xl">
        <MapPin className="w-3.5 h-3.5 text-[#3b76b3]" />
        <span>Jeddah • 21.5231° N, 39.1778° E</span>
      </div>
    </div>
  );
}

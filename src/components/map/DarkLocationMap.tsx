'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

interface DarkLocationMapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  lang?: 'ar' | 'en';
}

export default function DarkLocationMap({
  lat = 21.5231047,
  lng = 39.177774,
  zoom = 17,
  lang = 'ar',
}: DarkLocationMapProps) {
  const queryParam = `${lat},${lng}`;
  const embedUrl = `https://maps.google.com/maps?q=${queryParam}&t=m&z=${zoom}&ie=UTF8&iwloc=&output=embed&hl=${lang}`;

  return (
    <div className="relative w-full h-full bg-white dark:bg-[#000000] overflow-hidden select-none">
      {/* Google Maps Iframe with Website Theme Filter */}
      <iframe
        title="CGL Headquarters Location Map"
        src={embedUrl}
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0 filter contrast-[1.02] dark:invert-[92%] dark:hue-rotate-[195deg] dark:contrast-[1.05] dark:brightness-[0.92] dark:saturate-[0.85]"
      />

      {/* Quick Location Badge */}
      <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#0a0a0a]/90 backdrop-blur-md border border-[#E6DFD3] dark:border-white/10 text-xs font-mono text-[#18181B] dark:text-stone-300 shadow-md dark:shadow-xl">
        <MapPin className="w-3.5 h-3.5 text-[#3b76b3]" />
        <span>Jeddah • 21.5231° N, 39.1778° E</span>
      </div>
    </div>
  );
}


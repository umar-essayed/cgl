'use client';

import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

export default function DarkLocationMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    let isMounted = true;

    // Dynamically import Leaflet on client side
    import('leaflet').then((L) => {
      if (!isMounted || !mapContainerRef.current || mapInstanceRef.current) return;

      const lat = 21.5231047;
      const lng = 39.177774;

      // Initialize map with CartoDB Dark Matter matching website's dark graphite palette
      const map = L.map(mapContainerRef.current, {
        center: [lat, lng],
        zoom: 14,
        zoomControl: false,
        scrollWheelZoom: false,
        // Disable single-finger drag on mobile so user doesn't get trapped while scrolling the page!
        dragging: !L.Browser.mobile,
      });

      mapInstanceRef.current = map;

      // CartoDB Dark Matter tiles (Pure dark theme matching #000000)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CartoDB &copy; OpenStreetMap',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      // Custom CGL Pin with brand green pulse
      const customPin = L.divIcon({
        className: 'cgl-custom-marker',
        html: `
          <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 42px; height: 42px;">
            <div style="position: absolute; width: 38px; height: 38px; border-radius: 50%; background: rgba(139, 195, 74, 0.35); animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: #8bc34a; border: 3px solid #000000; box-shadow: 0 0 16px #8bc34a; display: flex; align-items: center; justify-content: center;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background: #000000;"></div>
            </div>
          </div>
        `,
        iconSize: [42, 42],
        iconAnchor: [21, 21],
      });

      L.marker([lat, lng], { icon: customPin }).addTo(map);
    });

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapContainerRef} className="w-full h-full bg-[#000000] isolate z-0" />;
}

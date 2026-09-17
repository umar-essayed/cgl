'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';
import 'leaflet/dist/leaflet.css';

export default function DarkLocationMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const tileLayerRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  // Initialize Map Once
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    let isMounted = true;

    // Dynamically import Leaflet on client side
    import('leaflet').then((L) => {
      if (!isMounted || !mapContainerRef.current || mapInstanceRef.current) return;

      const lat = 21.5231047;
      const lng = 39.177774;

      // Initialize map
      const map = L.map(mapContainerRef.current, {
        center: [lat, lng],
        zoom: 14,
        zoomControl: false,
        scrollWheelZoom: false,
        // Disable single-finger drag on mobile so user doesn't get trapped while scrolling the page!
        dragging: !L.Browser.mobile,
      });

      mapInstanceRef.current = map;

      // CartoDB Positron for Light, Dark Matter for Dark
      const tileUrl = isDark
        ? 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}.png';

      const tileLayer = L.tileLayer(tileUrl, {
        attribution: '&copy; CartoDB &copy; OpenStreetMap',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      tileLayerRef.current = tileLayer;

      // Custom CGL Pin with brand green pulse
      const pinHtml = `
        <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 42px; height: 42px;">
          <div style="position: absolute; width: 38px; height: 38px; border-radius: 50%; background: rgba(139, 195, 74, 0.35); animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
          <div style="width: 24px; height: 24px; border-radius: 50%; background: #8bc34a; border: 3px solid ${isDark ? '#000000' : '#ffffff'}; box-shadow: 0 0 16px rgba(139, 195, 74, 0.85); display: flex; align-items: center; justify-content: center;">
            <div style="width: 8px; height: 8px; border-radius: 50%; background: ${isDark ? '#000000' : '#0f172a'};"></div>
          </div>
        </div>
      `;

      const customPin = L.divIcon({
        className: 'cgl-custom-marker',
        html: pinHtml,
        iconSize: [42, 42],
        iconAnchor: [21, 21],
      });

      const marker = L.marker([lat, lng], { icon: customPin }).addTo(map);
      markerRef.current = marker;
    });

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        tileLayerRef.current = null;
        markerRef.current = null;
      }
    };
  }, []);

  // Dynamically update tile layer and marker pin when theme changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    import('leaflet').then((L) => {
      const map = mapInstanceRef.current;
      if (!map) return;

      if (tileLayerRef.current) {
        map.removeLayer(tileLayerRef.current);
      }

      const tileUrl = isDark
        ? 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}.png';

      const newLayer = L.tileLayer(tileUrl, {
        attribution: '&copy; CartoDB &copy; OpenStreetMap',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      tileLayerRef.current = newLayer;

      if (markerRef.current) {
        const pinHtml = `
          <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 42px; height: 42px;">
            <div style="position: absolute; width: 38px; height: 38px; border-radius: 50%; background: rgba(139, 195, 74, 0.35); animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: #8bc34a; border: 3px solid ${isDark ? '#000000' : '#ffffff'}; box-shadow: 0 0 16px rgba(139, 195, 74, 0.85); display: flex; align-items: center; justify-content: center;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background: ${isDark ? '#000000' : '#0f172a'};"></div>
            </div>
          </div>
        `;
        const updatedPin = L.divIcon({
          className: 'cgl-custom-marker',
          html: pinHtml,
          iconSize: [42, 42],
          iconAnchor: [21, 21],
        });
        markerRef.current.setIcon(updatedPin);
      }
    });
  }, [isDark]);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full bg-slate-100 dark:bg-[#000000] isolate z-0 transition-colors"
    />
  );
}

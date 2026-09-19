'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Ultra-fast intro: smooth 500ms presentation, then dissolves
    const timer = setTimeout(() => {
      setVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cgl-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 backdrop-blur-xl pointer-events-none select-none"
        >
          <div className="relative flex items-center justify-center">
            {/* Subtle atmospheric ambient glow */}
            <div
              className="absolute w-24 h-24 rounded-full blur-2xl opacity-30 pointer-events-none"
              style={{ backgroundColor: color }}
            />

            {/* Precision Vector Orbiter */}
            <svg
              className="w-20 h-20"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Luminous Orb Gradient */}
                <radialGradient id="orbGrad" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor={coreColor} />
                  <stop offset="45%" stopColor={color} />
                  <stop offset="100%" stopColor={color} stopOpacity="0.8" />
                </radialGradient>

                {/* Soft glow filter */}
                <filter id="orbGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 360 Continuous Orbital Spinner */}
              <g className="cgl-orbit-group">
                {/* Top Ball */}
                <circle
                  className="cgl-orb-top"
                  cx="50"
                  cy="28"
                  r="7.5"
                  fill="url(#orbGrad)"
                  filter="url(#orbGlow)"
                />

                {/* Bottom Ball */}
                <circle
                  className="cgl-orb-bottom"
                  cx="50"
                  cy="72"
                  r="7.5"
                  fill="url(#orbGrad)"
                  filter="url(#orbGlow)"
                />

                {/* Micro collision spark at center */}
                <circle
                  className="cgl-impact-spark"
                  cx="50"
                  cy="50"
                  r="2.5"
                  fill={coreColor}
                />
              </g>
            </svg>
          </div>

          <style jsx>{`
            /* 360-degree rotational spin */
            .cgl-orbit-group {
              transform-origin: 50px 50px;
              animation: cglSpin 1.15s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }

            @keyframes cglSpin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            /* Top ball oscillates down towards center, impacts, bounces back */
            .cgl-orb-top {
              transform-origin: 50px 50px;
              animation: cglBounceTop 0.58s ease-in-out infinite alternate;
            }

            @keyframes cglBounceTop {
              0% {
                transform: translateY(0);
              }
              75% {
                transform: translateY(13px) scale(0.95, 1.05);
              }
              100% {
                transform: translateY(14.5px) scale(1.22, 0.78); /* Elastic impact contact */
              }
            }

            /* Bottom ball oscillates up towards center, impacts, bounces back */
            .cgl-orb-bottom {
              transform-origin: 50px 50px;
              animation: cglBounceBottom 0.58s ease-in-out infinite alternate;
            }

            @keyframes cglBounceBottom {
              0% {
                transform: translateY(0);
              }
              75% {
                transform: translateY(-13px) scale(0.95, 1.05);
              }
              100% {
                transform: translateY(-14.5px) scale(1.22, 0.78); /* Elastic impact contact */
              }
            }

            /* Subtle central spark pulse upon collision */
            .cgl-impact-spark {
              transform-origin: 50px 50px;
              animation: cglSpark 0.58s ease-in-out infinite alternate;
            }

            @keyframes cglSpark {
              0%, 75% {
                opacity: 0;
                transform: scale(0.3);
              }
              100% {
                opacity: 0.85;
                transform: scale(2.2);
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

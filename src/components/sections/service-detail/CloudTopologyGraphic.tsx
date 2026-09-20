'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CloudTopologyGraphicProps {
  activeBadgeText?: string;
}

export const CloudTopologyGraphic: React.FC<CloudTopologyGraphicProps> = ({
  activeBadgeText = '05 — CLOUD SOLUTIONS',
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-5 select-none overflow-hidden bg-brand-navy">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[var(--color-brand-teal-hover)]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-[200px] h-[200px] bg-sky-600/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] bg-teal-700/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(color-mix(in srgb, var(--color-brand-teal-hover) 40%, transparent) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Top Header Telemetry Bar */}
      <div className="relative z-10 flex items-center justify-between px-3.5 py-2 rounded-xl bg-brand-navy/80 border border-[var(--color-brand-teal-hover)]/30 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 font-mono text-[10px] font-semibold tracking-wider text-slate-400">
            CLOUD MESH // AWS • AZURE • GCP
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-teal-hover)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-teal-hover)]" />
          </span>
          <span className="font-mono text-[10px] font-bold text-[var(--color-brand-teal-hover)]">
            48.2k req/s
          </span>
        </div>
      </div>

      {/* Center Interactive SVG Network Architecture */}
      <div className="relative z-10 flex-1 my-2 flex items-center justify-center">
        <svg
          viewBox="0 0 440 280"
          className="w-full h-full max-h-[300px] overflow-visible"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="cloudPulseTeal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-brand-teal-hover)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--color-sky-500)" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="cloudNodeBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-brand-navy)" />
              <stop offset="100%" stopColor="var(--color-brand-navy)" />
            </linearGradient>
            <radialGradient id="centerGlow">
              <stop offset="0%" stopColor="var(--color-brand-teal-hover)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--color-brand-teal-hover)" stopOpacity="0" />
            </radialGradient>
            {/* Glow Filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Cross Connection Curves */}
          <path
            d="M 80 55 C 160 20 280 20 360 55"
            fill="none"
            stroke="var(--color-brand-teal-hover)"
            strokeWidth="1"
            strokeOpacity="0.2"
            strokeDasharray="4 4"
          />
          <path
            d="M 80 225 C 160 260 280 260 360 225"
            fill="none"
            stroke="var(--color-brand-teal-hover)"
            strokeWidth="1"
            strokeOpacity="0.2"
            strokeDasharray="4 4"
          />

          {/* Primary Connection Paths */}
          {/* Path 1: CDN to K8s Center */}
          <motion.path
            d="M 80 55 Q 150 70 220 140"
            fill="none"
            stroke="url(#cloudPulseTeal)"
            strokeWidth="1.75"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, -48] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
          />

          {/* Path 2: Center K8s to Security Vault */}
          <motion.path
            d="M 220 140 Q 290 70 360 55"
            fill="none"
            stroke="url(#cloudPulseTeal)"
            strokeWidth="1.75"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, -48] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
          />

          {/* Path 3: Center K8s to Aurora DB */}
          <motion.path
            d="M 220 140 Q 150 210 80 225"
            fill="none"
            stroke="url(#cloudPulseTeal)"
            strokeWidth="1.75"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, 48] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'linear' }}
          />

          {/* Path 4: Center K8s to SRE Observability */}
          <motion.path
            d="M 220 140 Q 290 210 360 225"
            fill="none"
            stroke="url(#cloudPulseTeal)"
            strokeWidth="1.75"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, 48] }}
            transition={{ repeat: Infinity, duration: 2.3, ease: 'linear' }}
          />

          {/* Animated Flowing Packet Particles */}
          <motion.circle
            r="3"
            fill="var(--color-sky-400)"
            filter="url(#glow)"
            animate={{
              cx: [80, 150, 220],
              cy: [55, 70, 140],
              opacity: [0, 1, 0],
            }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          />
          <motion.circle
            r="3"
            fill="var(--color-brand-teal-hover)"
            filter="url(#glow)"
            animate={{
              cx: [220, 290, 360],
              cy: [140, 70, 55],
              opacity: [0, 1, 0],
            }}
            transition={{ repeat: Infinity, duration: 2.5, delay: 0.7, ease: 'easeInOut' }}
          />
          <motion.circle
            r="3"
            fill="var(--color-brand-teal-hover)"
            filter="url(#glow)"
            animate={{
              cx: [220, 150, 80],
              cy: [140, 210, 225],
              opacity: [0, 1, 0],
            }}
            transition={{ repeat: Infinity, duration: 2.4, delay: 0.3, ease: 'easeInOut' }}
          />
          <motion.circle
            r="3"
            fill="var(--color-sky-400)"
            filter="url(#glow)"
            animate={{
              cx: [220, 290, 360],
              cy: [140, 210, 225],
              opacity: [0, 1, 0],
            }}
            transition={{ repeat: Infinity, duration: 2.3, delay: 1.1, ease: 'easeInOut' }}
          />

          {/* Node 1: Top-Left - Edge Anycast CDN */}
          <g transform="translate(80, 55)">
            <circle r="25" fill="var(--color-brand-teal-hover)" fillOpacity="0.1" />
            <circle
              r="22"
              fill="url(#cloudNodeBg)"
              stroke="var(--color-brand-teal-hover)"
              strokeWidth="1.5"
              strokeOpacity="0.8"
            />
            {/* Globe / Network Icon */}
            <path
              d="M -7 0 A 7 7 0 1 0 7 0 A 7 7 0 1 0 -7 0 M 0 -7 L 0 7 M -7 0 L 7 0"
              fill="none"
              stroke="var(--color-brand-teal-hover)"
              strokeWidth="1.5"
            />
            <text
              x="0"
              y="-28"
              textAnchor="middle"
              className="font-mono text-[9px] font-bold fill-slate-200"
            >
              EDGE ANYCAST
            </text>
            <text
              x="0"
              y="33"
              textAnchor="middle"
              className="font-mono text-[8px] font-medium fill-[var(--color-brand-teal-hover)]"
            >
              P99: 4.2ms
            </text>
          </g>

          {/* Node 2: Top-Right - Zero-Trust Vault */}
          <g transform="translate(360, 55)">
            <circle r="25" fill="var(--color-brand-teal-hover)" fillOpacity="0.1" />
            <circle
              r="22"
              fill="url(#cloudNodeBg)"
              stroke="var(--color-brand-teal-hover)"
              strokeWidth="1.5"
              strokeOpacity="0.8"
            />
            {/* Shield / Vault Lock Icon */}
            <path
              d="M 0 -7 L 6 -4 L 6 1 C 6 5 0 8 0 8 C 0 8 -6 5 -6 1 L -6 -4 Z"
              fill="none"
              stroke="var(--color-brand-teal-hover)"
              strokeWidth="1.5"
            />
            <text
              x="0"
              y="-28"
              textAnchor="middle"
              className="font-mono text-[9px] font-bold fill-slate-200"
            >
              ZERO-TRUST VAULT
            </text>
            <text
              x="0"
              y="33"
              textAnchor="middle"
              className="font-mono text-[8px] font-medium fill-sky-400"
            >
              mTLS & KMS
            </text>
          </g>

          {/* Node 3: Center Core - Kubernetes Control Plane */}
          <g transform="translate(220, 140)">
            {/* Pulsing Radar Ring */}
            <motion.circle
              r="44"
              fill="none"
              stroke="var(--color-brand-teal-hover)"
              strokeWidth="1"
              strokeOpacity="0.4"
              animate={{ r: [36, 48, 36], strokeOpacity: [0.5, 0.1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            />
            <circle r="40" fill="url(#centerGlow)" />
            <circle
              r="30"
              fill="var(--color-brand-navy)"
              stroke="var(--color-brand-teal-hover)"
              strokeWidth="2"
              filter="url(#glow)"
            />
            {/* Hexagon K8s Geometry */}
            <polygon
              points="0,-12 10,-6 10,6 0,12 -10,6 -10,-6"
              fill="none"
              stroke="var(--color-brand-teal-hover)"
              strokeWidth="1.5"
            />
            <circle r="3" fill="var(--color-sky-400)" />
            <text
              x="0"
              y="-36"
              textAnchor="middle"
              className="font-mono text-[10px] font-bold fill-white"
            >
              K8S CONTROL PLANE
            </text>
            <text
              x="0"
              y="44"
              textAnchor="middle"
              className="font-mono text-[8px] font-bold fill-[var(--color-brand-teal-hover)]"
            >
              AUTO-SCALE (48 PODS)
            </text>
          </g>

          {/* Node 4: Bottom-Left - Distributed Aurora DB */}
          <g transform="translate(80, 225)">
            <circle r="25" fill="var(--color-brand-teal-hover)" fillOpacity="0.1" />
            <circle
              r="22"
              fill="url(#cloudNodeBg)"
              stroke="var(--color-brand-teal-hover)"
              strokeWidth="1.5"
              strokeOpacity="0.8"
            />
            {/* Database Stacks Icon */}
            <path
              d="M -6 -5 C -6 -7 6 -7 6 -5 C 6 -3 -6 -3 -6 -5 Z M -6 -5 L -6 4 C -6 6 6 6 6 4 L 6 -5 M -6 -1 C -6 1 6 1 6 -1"
              fill="none"
              stroke="var(--color-brand-teal-hover)"
              strokeWidth="1.5"
            />
            <text
              x="0"
              y="-28"
              textAnchor="middle"
              className="font-mono text-[9px] font-bold fill-slate-200"
            >
              AURORA MULTI-AZ
            </text>
            <text
              x="0"
              y="33"
              textAnchor="middle"
              className="font-mono text-[8px] font-medium fill-emerald-500"
            >
              99.999% REPL
            </text>
          </g>

          {/* Node 5: Bottom-Right - SRE Observability */}
          <g transform="translate(360, 225)">
            <circle r="25" fill="var(--color-brand-teal-hover)" fillOpacity="0.1" />
            <circle
              r="22"
              fill="url(#cloudNodeBg)"
              stroke="var(--color-brand-teal-hover)"
              strokeWidth="1.5"
              strokeOpacity="0.8"
            />
            {/* Activity Chart Wave Icon */}
            <path
              d="M -7 1 L -4 1 L -2 -5 L 1 6 L 4 -2 L 7 1"
              fill="none"
              stroke="var(--color-brand-teal-hover)"
              strokeWidth="1.5"
            />
            <text
              x="0"
              y="-28"
              textAnchor="middle"
              className="font-mono text-[9px] font-bold fill-slate-200"
            >
              OBSERVABILITY
            </text>
            <text
              x="0"
              y="33"
              textAnchor="middle"
              className="font-mono text-[8px] font-medium fill-sky-400"
            >
              DATADOG / APM
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Telemetry & SLA Glass Bar */}
      <div className="relative z-10 pt-2 border-t border-[var(--color-brand-teal-hover)]/20">
        <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-brand-navy/90 border border-[var(--color-brand-teal-hover)]/30 backdrop-blur-md">
          <div className="text-center">
            <span className="block font-mono text-[8px] uppercase tracking-wider text-slate-400">
              P99 Latency
            </span>
            <span className="font-mono text-[12px] font-bold text-[var(--color-brand-teal-hover)]">
              11.4ms
            </span>
          </div>
          <div className="text-center border-x border-[var(--color-brand-teal-hover)]/20">
            <span className="block font-mono text-[8px] uppercase tracking-wider text-slate-400">
              Uptime SLA
            </span>
            <span className="font-mono text-[12px] font-bold text-emerald-500">
              99.995%
            </span>
          </div>
          <div className="text-center">
            <span className="block font-mono text-[8px] uppercase tracking-wider text-slate-400">
              Infra TCO
            </span>
            <span className="font-mono text-[12px] font-bold text-sky-400">
              -38%
            </span>
          </div>
        </div>

        {/* System Active Badge */}
        {activeBadgeText && (
          <div className="mt-2.5 flex justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-navy/90 border border-[var(--color-brand-teal-hover)]/50 backdrop-blur-md shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-teal-hover)] animate-pulse" />
              <span className="font-jakarta font-bold text-[10px] uppercase tracking-wider text-[var(--color-brand-teal-hover)]">
                {activeBadgeText}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CloudTopologyGraphic;

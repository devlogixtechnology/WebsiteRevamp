"use client";

import { motion } from "framer-motion";

// Consolidation note: this previously referenced /images/services/hero-graphic.png, which
// doesn't exist anywhere under public/ — a broken image. None of the newly-provided service
// photography (all topic-specific product shots) fits this abstract HUD/scanline treatment, so
// the center frame is now a pure gradient + grid pattern instead of depending on a photo.
export default function AnimatedHeroVisual() {
  return (
    <div className="relative w-full h-[460px] flex items-center justify-center select-none">
      {/* 1. Ambient Background Glows */}
      <div className="absolute w-[320px] h-[320px] bg-brand-teal-hover/20 blur-[90px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-[240px] h-[240px] bg-accent-blue/20 blur-[80px] rounded-full pointer-events-none" />

      {/* 2. Outer Rotating Dashed Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-brand-teal-hover/30 pointer-events-none"
      />

      {/* 3. Reverse Rotating Inner Geometric Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[290px] h-[290px] rounded-full border border-brand-teal-hover/20 pointer-events-none"
      >
        <div className="w-3 h-3 bg-brand-teal-hover rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_12px_var(--color-brand-teal-hover)]" />
        <div className="w-2.5 h-2.5 bg-accent-blue rounded-full absolute -bottom-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_10px_var(--color-accent-blue)]" />
      </motion.div>

      {/* 4. Center Framed Base Visual with Subtle Floating Motion */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[360px] h-[360px] rounded-2xl p-[1px] bg-gradient-to-br from-brand-teal-hover/60 via-slate-700/40 to-transparent shadow-glow-lg"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-brand-navy/90 backdrop-blur-md">
          {/* Abstract gradient center graphic — see note above on why this isn't a photo */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,color-mix(in_srgb,var(--color-brand-teal-hover)_35%,transparent),transparent_60%),radial-gradient(circle_at_75%_75%,color-mix(in_srgb,var(--color-accent-blue)_25%,transparent),transparent_55%)] transition-transform duration-700 hover:scale-105"
          />

          {/* Cyan Grid Scanline Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-teal-hover)_3%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-brand-teal-hover)_3%,transparent)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Gradient Edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-70" />
        </div>
      </motion.div>

      {/* 5. Floating Modern Glass HUD Badges */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-4 bottom-14 z-20 bg-brand-card/90 border border-brand-teal-hover/40 px-4 py-2.5 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-3"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-brand-teal-hover animate-ping" />
        <span className="text-[12px] font-semibold tracking-wider text-slate-200 uppercase font-jakarta">
          Sovereign AI Ready
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-4 top-12 z-20 bg-brand-card/90 border border-slate-700/80 px-4 py-2 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-2.5"
      >
        <div className="w-2 h-2 rounded-full bg-accent-blue" />
        <span className="text-[12px] font-medium text-slate-300">
          Latency: &lt;14ms
        </span>
      </motion.div>
    </div>
  );
}
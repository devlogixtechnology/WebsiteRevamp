'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { processRoadmapData } from '@/data/servicesPageData';

// Chunkier ("mote mote se") floating dots positioned both higher up ("thore opr bh") and around the line
const floatingDots = [
  // Between 01 and 02
  { id: 'dot-1', left: '17%', top: '22%', size: 7.5, color: 'var(--color-blue-500)', duration: 6.5, delay: 0 },
  { id: 'dot-2', left: '20%', top: '65%', size: 5, color: 'var(--color-brand-teal-hover)', duration: 7.2, delay: 1 },
  { id: 'dot-3', left: '26%', top: '12%', size: 6, color: 'var(--color-blue-400)', duration: 6.8, delay: 0.9 },
  { id: 'dot-4', left: '34%', top: '28%', size: 5.5, color: 'var(--color-sky-400)', duration: 5.6, delay: 0.5 },
  { id: 'dot-5', left: '37%', top: '72%', size: 4.5, color: 'var(--color-teal-400)', duration: 6.2, delay: 2 },

  // Between 02 and 03
  { id: 'dot-6', left: '59%', top: '24%', size: 6.5, color: 'var(--color-brand-teal-hover)', duration: 7.8, delay: 1.2 },
  { id: 'dot-7', left: '62%', top: '68%', size: 8, color: 'var(--color-blue-500)', duration: 6.8, delay: 0.7 },
  { id: 'dot-8', left: '68%', top: '14%', size: 5.5, color: 'var(--color-brand-teal-hover)', duration: 7.4, delay: 1.4 },
  { id: 'dot-9', left: '72%', top: '74%', size: 5, color: 'var(--color-blue-400)', duration: 5.8, delay: 1.8 },
  { id: 'dot-10', left: '74%', top: '26%', size: 6, color: 'var(--color-sky-400)', duration: 7.0, delay: 0.3 },

  // Between 03 and 04
  { id: 'dot-11', left: '88%', top: '15%', size: 5, color: 'var(--color-blue-400)', duration: 6.0, delay: 0.4 },
  { id: 'dot-12', left: '92%', top: '26%', size: 7.5, color: 'var(--color-blue-500)', duration: 6.2, delay: 1.5 },
  { id: 'dot-13', left: '95%', top: '64%', size: 5.5, color: 'var(--color-brand-teal-hover)', duration: 7.5, delay: 2.3 },
];

export const ProcessRoadmapSection: React.FC = () => {
  return (
    <section className="relative w-full bg-brand-card py-20 lg:py-[100px] px-6 sm:px-8 lg:px-12 overflow-hidden select-none">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-brand-teal-hover/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto relative z-10">
        {/* Title & Subtitle */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-bold text-4xl sm:text-5xl lg:text-[52px] leading-tight text-white tracking-tight mb-4"
          >
            The DevLogix Way
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[16px] lg:text-[18px] leading-[28px] text-slate-400"
          >
            A structured approach to chaos. We build, you scale.
          </motion.p>

          {/* Top Decorative Accent Dash from Figma */}
          <div className="w-5 h-[3px] bg-gradient-to-r from-accent-blue to-brand-teal-hover rounded-full mx-auto mt-6 opacity-75 shadow-glow-sm" />
        </div>

        {/* 4 Process Nodes with Chunky Animated Floating Micro-Dots */}
        <div className="relative pt-6 pb-4">
          {/* Connecting Line passing through node centers */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-teal-hover/20 via-brand-teal-hover/60 to-brand-teal-hover/20 z-0" />

          {/* Floating Dots Canvas Area (spans above and below the line) */}
          <div className="hidden lg:block absolute top-[-30px] bottom-[60px] left-[10%] right-[10%] pointer-events-none z-0">
            {floatingDots.map((dot) => (
              <motion.span
                key={dot.id}
                animate={{
                  y: [-8, 8, -8],
                  x: [-4, 4, -4],
                  opacity: [0.55, 1, 0.55],
                  scale: [0.95, 1.2, 0.95],
                }}
                transition={{
                  duration: dot.duration,
                  delay: dot.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  left: dot.left,
                  top: dot.top,
                  width: `${dot.size}px`,
                  height: `${dot.size}px`,
                  backgroundColor: dot.color,
                  boxShadow: `0 0 10px 2px color-mix(in srgb, ${dot.color} 85%, transparent)`,
                }}
                className="absolute rounded-full pointer-events-none"
              />
            ))}
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {processRoadmapData.map((step, index) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                {/* 110x110px Circular Gradient Node: linear-gradient(225deg, brand-teal 25%, brand-card 75%) */}
                <div className="relative mb-8">
                  {/* Outer subtle halo glow */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-brand-teal-hover/35 to-transparent blur-md group-hover:blur-lg transition-all duration-300 pointer-events-none" />

                  <div
                    className="relative w-[110px] h-[110px] rounded-full border border-brand-teal-hover/30 flex items-center justify-center shadow-[0_16px_36px_rgba(0,0,0,0.65)] group-hover:scale-105 transition-transform duration-300"
                    style={{
                      background:
                        'linear-gradient(225deg, var(--color-brand-teal) 25%, var(--color-brand-card) 75%)',
                    }}
                  >
                    {/* Inner 3D Highlight & Shadow */}
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.28)_0%,transparent_60%)] pointer-events-none" />

                    <span className="font-jakarta font-extrabold text-[34px] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                      {step.stepNumber}
                    </span>
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-semibold text-[22px] leading-[32px] text-white mb-3 group-hover:text-brand-teal-hover transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="font-normal text-[14px] leading-[22px] text-slate-400 max-w-[240px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Decorative Accent Dash from Figma */}
          <div className="w-5 h-[2.5px] bg-brand-teal-hover/70 rounded-full mx-auto mt-16 shadow-glow-sm" />
        </div>
      </div>
    </section>
  );
};

export default ProcessRoadmapSection;

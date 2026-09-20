'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-brand-card overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-brand-teal-hover/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-accent-blue/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto min-h-[640px] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 lg:px-12 pt-[100px] pb-16 lg:pt-[110px] lg:pb-14">
        {/* Left Side: Headline stack (625px container) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full lg:max-w-[628px] flex flex-col items-start gap-8 z-20"
        >
          {/* Personal instruction (standing sitewide rule): every non-homepage hero has its
              precursor element — kicker/tag/breadcrumb — removed entirely. This hero previously
              had both a "Home > Services" breadcrumb and an "OUR SERVICES" eyebrow above the h1. */}
          <div className="flex flex-col items-start gap-5">
            <h1 className="text-slate-50 font-semibold text-4xl sm:text-5xl lg:text-[52px] leading-[1.15] lg:leading-[60px] tracking-tight">
              Technology That Drives Results
            </h1>
            <p className="text-slate-400 text-[17px] leading-[28px] font-normal max-w-[570px]">
              We don&apos;t just build software; we build the future of your business. Our services
              are designed to bridge the gap between your current state and your vision for
              tomorrow.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4 pt-1">
            <Link
              href="/contact"
              className="h-[41px] px-6 bg-brand-teal-dark hover:bg-brand-teal-fill text-white rounded-[20px] text-[14px] font-semibold flex items-center justify-center transition-all duration-200 shadow-lg shadow-brand-teal-dark/30 hover:scale-[1.02]"
            >
              Get a Free Consultation
            </Link>
          </div>
        </motion.div>

        {/* Right Side: High-Fidelity Figma Graphic Container with Blueprint Grid & Radar Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="w-full lg:w-[680px] relative mt-12 lg:mt-0 z-10 flex items-center justify-center lg:justify-end"
        >
          {/* Main Visual Container */}
          <div className="relative w-full max-w-[680px] h-[400px] sm:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden bg-brand-navy shadow-2xl shadow-black/80 group">
            {/* Top-Left Blueprint Perspective Grid (from Image 1 selection box) */}
            <div
              className="absolute -top-10 -left-20 w-[420px] h-[360px] opacity-25 pointer-events-none z-10"
              style={{
                backgroundImage: `
                  linear-gradient(to right, color-mix(in srgb, var(--color-brand-teal-hover) 25%, transparent) 1px, transparent 1px),
                  linear-gradient(to bottom, color-mix(in srgb, var(--color-brand-teal-hover) 25%, transparent) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
                maskImage: 'radial-gradient(ellipse at 40% 40%, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at 40% 40%, black 40%, transparent 80%)',
              }}
            />

            {/* Large Concentric Circle Arc sweeping to the left (matching Image 1) */}
            <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-brand-teal-hover/20 pointer-events-none z-10" />
            <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-brand-teal-hover/15 pointer-events-none z-10" />

            {/* Dashed Cyan Guide Lines (matching Image 1) */}
            <div className="absolute top-[65px] left-0 right-0 h-[1px] border-b border-dashed border-brand-teal-hover/30 pointer-events-none z-10" />
            <div className="absolute bottom-[140px] left-0 right-0 h-[1px] border-b border-dashed border-brand-teal-hover/25 pointer-events-none z-10" />
            <div className="absolute top-0 bottom-0 right-[150px] w-[1px] border-r border-dashed border-brand-teal-hover/30 pointer-events-none z-10" />

            {/* Left Edge Smooth Gradient Dissolve into brand-card background */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-card via-brand-card/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-card/80 via-transparent to-transparent z-10 pointer-events-none" />

            {/* Boardroom Futuristic Network Image */}
            <Image
              src="/images/services/hero-right.png"
              alt="Global Tech Solutions"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />

            {/* Glowing Holographic Text: GLOBAL TECH SOLUTIONS */}
            <div className="absolute top-1/2 right-8 sm:right-14 -translate-y-1/2 z-20 pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-teal-fill animate-pulse shadow-[0_0_10px_var(--color-brand-teal-hover)]" />
                <span className="font-jakarta font-bold text-sm sm:text-base lg:text-lg tracking-[0.14em] text-brand-teal-hover uppercase drop-shadow-glow">
                  GLOBAL TECH SOLUTIONS
                </span>
              </div>
            </div>

            {/* 120 x 120 Radar Target Widget (Exact Figma element from Image 1 bottom-right selection box) */}
            <div className="absolute bottom-5 right-6 sm:bottom-7 sm:right-8 z-20 w-[120px] h-[120px] pointer-events-none">
              <div className="relative w-full h-full rounded-lg border border-brand-teal-hover/30 bg-brand-card/60 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                {/* Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[1px] bg-brand-teal-hover/40" />
                  <div className="absolute h-full w-[1px] bg-brand-teal-hover/40" />
                </div>

                {/* Outer Ring */}
                <div className="w-[104px] h-[104px] rounded-full border border-brand-teal-hover/40" />

                {/* Mid Ring */}
                <div className="absolute w-[72px] h-[72px] rounded-full border border-brand-teal-hover/35" />

                {/* Inner Filled Radar Core */}
                <div className="absolute w-[40px] h-[40px] rounded-full bg-brand-teal-hover/25 border border-brand-teal-hover/60 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-brand-teal-fill animate-ping" />
                </div>

                {/* Rotating Sweeping Radar Beam */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, color-mix(in srgb, var(--color-brand-teal-hover) 40%, transparent) 0deg, transparent 60deg, transparent 360deg)',
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

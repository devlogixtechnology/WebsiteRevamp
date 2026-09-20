'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { ServiceHeroData } from '@/data/servicesData';
import { CloudTopologyGraphic } from './CloudTopologyGraphic';

export interface AiHeroSectionProps {
  data?: Partial<ServiceHeroData>;
}

export const AiHeroSection: React.FC<AiHeroSectionProps> = ({ data }) => {
  const badge = data?.badge || 'ARTIFICIAL INTELLIGENCE';
  const heading = data?.heading || 'AI That Ships to Production, Not Just to Slides.';
  const subtitle =
    data?.subtitle ||
    'Unlock true competitive advantage. We pair production-ready agentic workflows with bulletproof data foundations to deliver tangible business outcomes.';
  const ctaText = data?.ctaText || 'Explore AI Transformation';
  const ctaHref = data?.ctaHref || '#what-we-deliver';
  const activeBadgeText = data?.activeBadgeText;
  const hasGridBg = data?.hasGridBg || false;

  // This component is mounted once per page (data is a static per-page prop, not changed after
  // mount in practice — Next.js remounts on route change), so a plain lazy initializer covers
  // it; no effect syncing prop -> state is needed (that pattern trips the
  // react-hooks/set-state-in-effect cascading-render lint rule). The state itself is still
  // needed, independent of the prop, so the onError handlers below can fall back locally.
  const [bgSrc, setBgSrc] = useState(() => data?.bgSrc || '/images/services/hero-section-AI.png');
  const [rightSrc, setRightSrc] = useState(
    () => data?.imageSrc || '/images/services/hero-right-AI.png'
  );

  return (
    <section className="relative w-full min-h-[680px] bg-brand-card overflow-hidden flex items-center justify-center pt-[110px] pb-16 lg:pt-[124px] lg:pb-16">
      {/* Background: Image or Ambient Dark Grid Background */}
      {hasGridBg ? (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-teal-hover/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgSrc}
            alt="Hero Background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
            onError={() => {
              if (bgSrc !== '/images/services/ai/hero-ai.jpg') {
                setBgSrc('/images/services/ai/hero-ai.jpg');
              }
            }}
          />
          {/* Subtle dark tint */}
          <div className="absolute inset-0 bg-black/20 z-0" />
        </div>
      )}

      <div className="relative w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-16">
          {/* Hero Left (w-full lg:max-w-[58%] xl:max-w-[62%]) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full lg:max-w-[58%] xl:max-w-[62%] flex flex-col items-start z-10"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-brand-teal-hover/10 border border-brand-teal-hover/40 px-3.5 py-1 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-fill animate-pulse" />
              <span className="font-jakarta font-bold text-[11px] uppercase tracking-[1px] text-brand-teal-hover">
                {badge}
              </span>
            </div>

            {/* Heading: (Poppins 700, 52px, line-height 60px, #FFFFFF) — font-sans (Poppins) is
                already the site default from layout.tsx, no need to redeclare it here */}
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-[52px] leading-[1.15] lg:leading-[60px] text-white tracking-tight mb-6">
              {heading}
            </h1>

            {/* Paragraph: (Poppins 400, 18px, line-height 28px) — text-slate-300 is CLAUDE.md's
                documented "Muted" text-on-dark token, closest match to the handoff's #BEC9D7 */}
            <p className="font-normal text-[16px] lg:text-[18px] leading-[28px] text-slate-300 mb-9 w-full max-w-2xl">
              {subtitle}
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center bg-brand-teal-fill hover:bg-brand-teal text-white font-semibold text-[14px] px-[24px] py-[12px] rounded-[24px] transition-all duration-200 shadow-lg shadow-[var(--color-brand-teal-hover)]/30 hover:scale-[1.02]"
              >
                {ctaText}
              </Link>
            </div>
          </motion.div>

          {/* Hero Right: w-full max-w-[440px] lg:max-w-[480px] xl:max-w-[520px] 2xl:max-w-[540px] aspect-square */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="w-full max-w-[440px] lg:max-w-[480px] xl:max-w-[520px] 2xl:max-w-[540px] aspect-square flex justify-center lg:justify-end z-10 shrink-0"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-brand-teal-hover/40 bg-brand-navy shadow-glow-lg group">
              {/* Graphic Visual */}
              {data?.heroGraphicType === 'cloud-topology' ? (
                <CloudTopologyGraphic activeBadgeText={activeBadgeText} />
              ) : (
                <>
                  <Image
                    src={rightSrc}
                    alt={heading}
                    fill
                    sizes="(max-width: 1024px) 100vw, 540px"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={() => {
                      if (data?.fallbackSrc && rightSrc !== data.fallbackSrc) {
                        setRightSrc(data.fallbackSrc);
                      } else if (rightSrc !== '/images/services/ai/hero-ai.jpg') {
                        setRightSrc('/images/services/ai/hero-ai.jpg');
                      }
                    }}
                  />
                  {/* System Active Badge (Optional) */}
                  {activeBadgeText && (
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/80 border border-brand-teal-hover/60 backdrop-blur-md shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-fill animate-pulse" />
                        <span className="font-jakarta font-bold text-[11px] uppercase tracking-wider text-brand-teal-hover">
                          {activeBadgeText}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiHeroSection;

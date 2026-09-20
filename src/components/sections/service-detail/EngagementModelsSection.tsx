'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { engagementModelsData, EngagementModel } from '@/data/serviceAiData';

export interface EngagementModelsSectionProps {
  eyebrow?: string;
  title?: string;
  cards?: EngagementModel[];
  ctaText?: string;
}

export const EngagementModelsSection: React.FC<EngagementModelsSectionProps> = ({
  eyebrow = 'ENGAGEMENT MODELS',
  title = 'Three ways to bring us in',
  cards = engagementModelsData,
  ctaText = "Let's Talk",
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-[100px] px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1240px] xl:max-w-[1280px] mx-auto">
        {/* Header Row: Title & Right-Aligned Let's Talk Button with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14"
        >
          <div>
            <span className="font-semibold text-[13px] uppercase tracking-[1.5px] text-brand-teal-hover block mb-2">
              {eyebrow}
            </span>
            <h2 className="font-bold text-3xl sm:text-[36px] lg:text-[40px] leading-tight text-brand-card">
              {title}
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-brand-teal-fill hover:bg-brand-teal text-white font-semibold text-[14px] px-8 py-3 rounded-full transition-all duration-200 shadow-md shadow-[var(--color-brand-teal-hover)]/20 self-start sm:self-auto shrink-0 hover:scale-[1.02]"
          >
            {ctaText}
          </Link>
        </motion.div>

        {/* 3 Cards Grid: Responsive across Mobile, Tablet, and Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full justify-items-center sm:justify-items-stretch">
          {cards.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
              className={`w-full min-w-0 bg-white border border-slate-200 rounded-[16px] p-6 sm:p-7 xl:p-8 flex flex-col justify-between shadow-card hover:shadow-xl hover:-translate-y-1 hover:border-brand-teal-hover/40 transition-all duration-300 group min-h-[300px] sm:min-h-[320px] lg:min-h-[340px] ${
                index === 2 ? 'md:col-span-2 md:max-w-[420px] md:mx-auto lg:col-span-1 lg:max-w-none' : ''
              }`}
            >
              <div>
                {/* Top Row: Index & Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="font-jakarta font-bold text-[24px] sm:text-[28px] text-brand-card leading-none">
                    0{index + 1}
                  </span>
                  <span className="shrink-0 whitespace-nowrap font-jakarta font-bold text-[11px] uppercase tracking-wider text-white bg-brand-teal-fill px-3.5 py-1 rounded-[16px]">
                    {model.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-[20px] sm:text-[22px] leading-snug text-brand-card mb-3">
                  {model.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[22px] sm:leading-[24px] text-slate-500 mb-6">
                  {model.description}
                </p>
              </div>

              {/* Best For Section */}
              <div className="pt-4 border-t border-slate-100 sm:border-0 flex flex-col gap-1 mt-auto">
                <span className="text-[12px] font-bold uppercase text-brand-teal-hover tracking-[1px]">
                  BEST FOR:
                </span>
                <p className="text-[13px] sm:text-[14px] leading-[20px] font-medium text-brand-card">
                  {model.bestFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModelsSection;

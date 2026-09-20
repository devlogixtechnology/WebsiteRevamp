'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { keyChallengesData, ChallengeItem } from '@/data/serviceAiData';

export interface KeyChallengesSectionProps {
  eyebrow?: string;
  title?: string;
  items?: ChallengeItem[];
}

export const KeyChallengesSection: React.FC<KeyChallengesSectionProps> = ({
  eyebrow = 'KEY CHALLENGES',
  title = 'Where AI & Data Initiatives Stall Before They Scale',
  items = keyChallengesData,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-20 lg:py-[100px] px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        {/* Section Header: Left-Aligned with smooth scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14 lg:mb-16 max-w-[850px]"
        >
          <span className="font-semibold text-[14px] uppercase tracking-[1.5px] text-brand-teal-hover block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-semibold text-3xl sm:text-[40px] leading-tight sm:leading-[52px] text-brand-card">
            {title}
          </h2>
        </motion.div>

        {/* 4 Cards Grid (Fluid 4-column responsive layout with min-w-0) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 w-full">
          {items.map((card, index) => {
            const isOrange = card.badgeColor === 'orange';
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="w-full min-w-0 h-full min-h-[285px] bg-white border border-slate-200 rounded-[16px] p-6 sm:p-7 xl:p-8 flex flex-col justify-between shadow-card hover:shadow-xl hover:-translate-y-1 hover:border-brand-teal-hover/40 transition-all duration-300 group"
              >
                <div>
                  {/* Alert/Accent Badges: orange-50/400/200 and rose-50/500/200 exactly match the
                      handoff's #FFF7ED/#FB923C/#FED7AA and #FFF1F2/#F43F5E/#FECDD3 spec — using
                      the built-in Tailwind scale instead of repeating them as arbitrary hex. */}
                  <div className="mb-6">
                    <span
                      className={`inline-block font-jakarta font-bold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-[6px] ${
                        isOrange
                          ? 'bg-orange-50 text-orange-400 border border-orange-200'
                          : 'bg-rose-50 text-rose-500 border border-rose-200'
                      }`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-[18px] leading-[26px] text-brand-card mb-3 group-hover:text-brand-teal-hover transition-colors">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[13px] leading-[21px] text-slate-600 mt-auto">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyChallengesSection;

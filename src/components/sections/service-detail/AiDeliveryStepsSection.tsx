'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { deliveryStepsData, DeliveryStep } from '@/data/serviceAiData';

export interface AiDeliveryStepsSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps?: DeliveryStep[];
}

export const AiDeliveryStepsSection: React.FC<AiDeliveryStepsSectionProps> = ({
  eyebrow = 'PROCESS',
  title = 'Our AI Delivery Steps',
  subtitle = 'We eliminate guesswork through structured milestones that validate technical and business feasibility.',
  steps = deliveryStepsData,
}) => {
  // Default to step 2 (index 1) to match Figma
  const [activeStepIndex, setActiveStepIndex] = useState<number>(1);

  // Exact 4-dot alignment in a 4-column grid (centers are 12.5%, 37.5%, 62.5%, 87.5%)
  const dotPositions = ['12.5%', '37.5%', '62.5%', '87.5%'];
  // Active progress fill width from Dot 1 (12.5%) to Dot (index)
  const activeWidthPercent = (activeStepIndex / 3) * 75;

  return (
    <section className="relative w-full overflow-hidden bg-brand-navy py-20 lg:py-[100px] px-6 sm:px-8 lg:px-12 text-white">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        {/* Section Header with smooth scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14 lg:mb-16 max-w-[800px]"
        >
          <span className="font-semibold text-[14px] uppercase tracking-wider text-brand-teal-hover block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-semibold text-3xl sm:text-[40px] leading-tight sm:leading-[52px] text-white mb-4">
            {title}
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-[26px] text-slate-400">
            {subtitle}
          </p>
        </motion.div>

        {/* Dynamic 4-Point Horizontal Progress Line (Matching 4-column desktop layout) */}
        <div className="relative w-full mb-12 hidden lg:block select-none">
          {/* Base Inactive Gray Track from 12.5% (Card 1 center) to 87.5% (Card 4 center) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[12.5%] right-[12.5%] h-[2px] bg-white/20 z-0" />

          {/* Animated Active Teal Fill Line from Dot 1 to Active Dot */}
          <motion.div
            initial={false}
            animate={{ width: `${activeWidthPercent}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute top-1/2 -translate-y-1/2 left-[12.5%] h-[2.5px] bg-brand-teal-fill shadow-[0_0_10px_var(--color-brand-teal-hover)] z-10"
          />

          {/* Exactly 4 Node Dots directly above each of the 4 cards */}
          <div className="relative w-full h-6 flex items-center z-20 pointer-events-none">
            {dotPositions.map((pos, idx) => {
              const isPastOrActive = idx <= activeStepIndex;
              const isCurrent = idx === activeStepIndex;
              return (
                <div
                  key={idx}
                  style={{ left: pos }}
                  className="absolute -translate-x-1/2 flex items-center justify-center"
                >
                  <motion.div
                    // framer-motion's animate prop needs literal, interpolatable color values —
                    // not CSS vars — so these stay hex; #14B8A6/#1E293B are the exact
                    // brand-teal-hover / slate-800 token values.
                    animate={{
                      scale: isCurrent ? 1.3 : isPastOrActive ? 1.15 : 1,
                      backgroundColor: isPastOrActive ? '#14B8A6' : '#1E293B',
                      borderColor: isPastOrActive ? '#14B8A6' : 'rgba(255, 255, 255, 0.3)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-3.5 h-3.5 rounded-full border-2 border-brand-teal-hover shadow-sm flex items-center justify-center"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Delivery Cards with min-w-0 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 w-full">
          {steps.map((step, index) => {
            const isActive = index === activeStepIndex;
            return (
              <motion.div
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(index)}
                onMouseEnter={() => setActiveStepIndex(index)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className={`w-full min-w-0 h-full min-h-[285px] bg-brand-navy rounded-[16px] p-6 sm:p-7 xl:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'border-brand-teal-hover/80 shadow-glow-md -translate-y-1'
                    : 'border-white/10 hover:border-white/25 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* 01, 02, 03, 04 in Teal var(--color-brand-teal-hover) */}
                  <span className="font-jakarta font-extrabold text-[28px] text-brand-teal-hover block mb-6">
                    {step.stepNumber}
                  </span>

                  {/* Step Title */}
                  <h3 className="font-semibold text-[20px] leading-[28px] text-white mb-3">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-normal text-[14px] leading-[22px] text-slate-400 mt-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AiDeliveryStepsSection;

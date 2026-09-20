'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { industriesData, IndustryCard } from '@/data/serviceAiData';

const IndustryCardItem: React.FC<{ item: IndustryCard; index: number }> = ({ item, index }) => {
  const [imgSrc, setImgSrc] = useState<string>(item.imageSrc);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full min-w-0 h-[400px] lg:h-[420px] rounded-[16px] overflow-hidden group shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Background Image with Fallback */}
      <Image
        src={imgSrc}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        onError={() => {
          if (imgSrc !== item.fallbackSrc) {
            setImgSrc(item.fallbackSrc);
          }
        }}
      />

      {/* Light Clean Gradient Overlay matching Image 1: transparent top 45%, dark only at bottom behind text */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, transparent 45%, color-mix(in srgb, var(--color-brand-navy) 75%, transparent) 75%, color-mix(in srgb, var(--color-brand-navy) 95%, transparent) 100%)',
        }}
      />

      {/* Content Container (Title + Description, exact match to Image 1) */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10 pointer-events-none">
        <h3 className="font-bold text-[20px] leading-[26px] mb-2 group-hover:text-brand-teal-hover transition-colors">
          {item.title}
        </h3>
        <p className="font-normal text-[13px] leading-[20px] text-slate-200">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export interface IndustriesWeServeSectionProps {
  eyebrow?: string;
  title?: string;
  cards?: IndustryCard[];
}

export const IndustriesWeServeSection: React.FC<IndustriesWeServeSectionProps> = ({
  eyebrow = 'INDUSTRIES WE SERVE',
  title = 'Helping every industry put AI to work',
  cards = industriesData,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-20 lg:py-[100px] px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        {/* Header Row: Title & Right-Aligned Explore More Button with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="font-semibold text-[13px] uppercase tracking-wider text-brand-teal-hover block mb-2">
              {eyebrow}
            </span>
            <h2 className="font-semibold text-3xl sm:text-[36px] lg:text-[40px] leading-tight text-brand-card max-w-[700px]">
              {title}
            </h2>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center justify-center border border-brand-teal-hover text-brand-teal-hover hover:bg-brand-teal-fill hover:text-white font-semibold text-[14px] px-6 py-2 rounded-full transition-all duration-200 self-start sm:self-auto shrink-0"
          >
            Explore More
          </Link>
        </motion.div>

        {/* 4 Image Cards Grid (Fluid responsive 4-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 w-full">
          {cards.map((item, index) => (
            <IndustryCardItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServeSection;

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

// Naming standardized to match the canonical taxonomy used on /industries (the export used
// three different, inconsistent industry-name variants across the site — see
// content-industries.md flag #1). This is a curated highlight subset, not the full list.
const INDUSTRIES = [
  "Hospitality",
  "Communications",
  "Banking & Financial Services",
  "Healthcare & Life Sciences",
  "Retail & CPG",
  "Public Sector",
];

// Keyed by the industry name above. Same pattern as ServicesCarousel's IMAGES map.
// "Hospitality" is absent on purpose — no hospitality photo has been supplied yet, so that
// tab keeps the gradient frame rather than showing an unrelated stock image.
const IMAGES: Record<string, { src: string; alt: string }> = {
  Communications: {
    src: "/images/industries/telecom.jpg",
    alt: "Telecom network infrastructure",
  },
  "Banking & Financial Services": {
    src: "/images/industries/fintech.jpg",
    alt: "Financial market data on a trading screen",
  },
  "Healthcare & Life Sciences": {
    src: "/images/industries/healthcare.jpg",
    alt: "Clinician reviewing digital patient data",
  },
  "Retail & CPG": {
    src: "/images/industries/retail.jpg",
    alt: "Retail store interior",
  },
  "Public Sector": {
    src: "/images/industries/govtech.jpg",
    alt: "Government building exterior",
  },
};

export default function IndustriesServed() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-50 py-20">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Industries We Have Served
          </h2>
          <p className="max-w-xl text-lg font-light text-slate-500">
            We partner with enterprises across industries to solve complex challenges,
            delivering scalable technology services aligned with their goals to help them adapt,
            grow, and lead.
          </p>

          <div role="tablist" aria-label="Industries we serve" className="mt-2 flex flex-col">
            {INDUSTRIES.map((industry, i) => (
              <button
                key={industry}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`flex items-center justify-between border-b border-slate-200 px-4 py-4 text-left text-base font-medium transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
                  i === active
                    ? "border-l-4 border-l-brand-teal bg-white pl-3.5 font-semibold text-slate-900"
                    : "text-slate-500 hover:bg-white/60 hover:text-slate-900"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          <Link
            href="/industries"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded border border-brand-teal-dark px-8 py-3.5 text-sm font-semibold text-brand-teal-dark transition-colors duration-300 hover:bg-brand-teal-dark hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Learn More
          </Link>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-linear-to-br from-brand-navy via-brand-card to-brand-teal-dark"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,color-mix(in_srgb,var(--color-brand-teal-hover)_30%,transparent),transparent_60%)]"
          />
          {IMAGES[INDUSTRIES[active]] ? (
            <Image
              // key forces a fresh element per tab so the browser doesn't hold the previous
              // industry's photo on screen while the next one decodes.
              key={INDUSTRIES[active]}
              src={IMAGES[INDUSTRIES[active]].src}
              alt={IMAGES[INDUSTRIES[active]].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-10 text-center text-sm font-medium text-white/70">
              {INDUSTRIES[active]} &mdash; photo placeholder, source the real asset for this frame.
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

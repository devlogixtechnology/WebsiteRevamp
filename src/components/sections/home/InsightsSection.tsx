import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function InsightsSection() {
  return (
    <section id="insights" className="relative w-full bg-slate-50 py-20 sm:py-28 overflow-hidden text-slate-900 border-y border-slate-200/80">
      {/* Fluid width container */}
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="block text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-3">
              Intelligence Stream
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Latest <span className="text-[#0d938c]">Insights & Articles.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our latest thinking, technical deep-dives, and industry insights on custom software development, AI, and digital transformation.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 bg-white hover:border-[#0d938c] text-sm font-semibold text-slate-700 hover:text-[#0d938c] transition-all duration-300 shadow-xs"
            >
              <span>View All Insights</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0d938c] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1: Large Featured Card (Spans 2 cols x 2 rows) */}
          <Link
            href="/blog/why-most-digital-transformations-fail"
            className="group relative md:col-span-2 md:row-span-2 min-h-[440px] md:min-h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#0d938c]/60 hover:shadow-2xl"
          >
            {/* Background Image */}
            <Image
              src="/images/home-insight/digital-transformation.jpg"
              alt="Why Most Digital Transformations Fail (and How Sovereign Engineering Saves Them)"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark linear gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            {/* Top Bar: Badge & Diagonal Arrow */}
            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-teal-300">
                <span>FEATURED INTEL</span>
                <span className="text-white/40">|</span>
                <span className="text-slate-300 font-medium">MARCH 10, 2026</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-black/50 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-[#0d938c] group-hover:text-white group-hover:border-[#0d938c] transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto pt-16">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug transition-colors duration-300 group-hover:text-[#0d938c] group-hover:drop-shadow-[0_0_15px_rgba(13,147,140,0.45)]">
                Why Most Digital Transformations Fail (and How Sovereign Engineering Saves Them)
              </h3>
              <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 group-hover:text-teal-200 transition-colors">
                <span>Read Transmission &rarr;</span>
              </div>
            </div>
          </Link>

          {/* Card 2: Top Right Card 1 (Col 3, Row 1) */}
          <Link
            href="/blog/on-premise-llm-latency"
            className="group relative md:col-span-1 md:row-span-1 min-h-[260px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-950 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#0d938c]/60 hover:shadow-xl"
          >
            <Image
              src="/images/home-insight/on-premise-ai-server.jpg"
              alt="A Review of On-Premise LLM Latency on Custom Hardware"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-teal-300">
                <span>SOVEREIGN AI</span>
                <span className="text-white/40">|</span>
                <span className="text-slate-300 font-medium">MARCH 2026</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-black/50 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-[#0d938c] group-hover:text-white group-hover:border-[#0d938c] transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            <div className="relative z-10 mt-auto pt-8">
              <h4 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-[#0d938c] group-hover:drop-shadow-[0_0_12px_rgba(13,147,140,0.4)]">
                A Review of On-Premise LLM Latency on Custom Hardware
              </h4>
              <p className="mt-2 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                Benchmarking token inference throughput and real-time response speeds on localized hardware.
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-300 group-hover:text-teal-200 transition-colors">
                <span>Read More &rarr;</span>
              </div>
            </div>
          </Link>

          {/* Card 3: Top Right Card 2 (Col 4, Row 1) */}
          <Link
            href="/blog/securing-edge-node-deployments"
            className="group relative md:col-span-1 md:row-span-1 min-h-[260px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-950 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#0d938c]/60 hover:shadow-xl"
          >
            <Image
              src="/images/home-insight/cyber-shield-edge.jpg"
              alt="Securing Edge Node Deployments Against Physical Intrusions"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-teal-300">
                <span>CYBERNETICS</span>
                <span className="text-white/40">|</span>
                <span className="text-slate-300 font-medium">MARCH 2026</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-black/50 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-[#0d938c] group-hover:text-white group-hover:border-[#0d938c] transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            <div className="relative z-10 mt-auto pt-8">
              <h4 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-[#0d938c] group-hover:drop-shadow-[0_0_12px_rgba(13,147,140,0.4)]">
                Securing Edge Node Deployments Against Physical Intrusions
              </h4>
              <p className="mt-2 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                Zero-trust cryptographic protocols to safeguard distributed edge hardware from physical tampering.
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-300 group-hover:text-teal-200 transition-colors">
                <span>Read More &rarr;</span>
              </div>
            </div>
          </Link>

          {/* Card 4: Bottom Right Wide Card (Spans 2 cols x 1 row) */}
          <Link
            href="/blog/hidden-cost-cloud-native"
            className="group relative md:col-span-2 md:row-span-1 min-h-[260px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-950 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#0d938c]/60 hover:shadow-xl"
          >
            <Image
              src="/images/home-insight/cloud-native-costs.jpg"
              alt="The Hidden Cost of Cloud-Native Rent-Seeking Frameworks"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            {/* Top Bar: Badge & Diagonal Arrow */}
            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-teal-300">
                <span>RESTRUCTURING</span>
                <span className="text-white/40">|</span>
                <span className="text-slate-300 font-medium">MARCH 2026</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-black/50 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-[#0d938c] group-hover:text-white group-hover:border-[#0d938c] transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto pt-8">
              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-[#0d938c] group-hover:drop-shadow-[0_0_12px_rgba(13,147,140,0.4)]">
                The Hidden Cost of Cloud-Native Rent-Seeking Frameworks
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                Uncovering vendor lock-in traps and hidden egress fees in modern distributed systems.
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-300 group-hover:text-teal-200 transition-colors">
                <span>Read More &rarr;</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default InsightsSection;

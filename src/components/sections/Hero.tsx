"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Kicker from "../ui/Kicker";
import AmbientGlow from "../ui/AmbientGlow";
import Typewriter from "../ui/Typewriter";
import AnimatedHeroVisual from "./AnimatedHeroVisual";

const CYCLING_WORDS = ["Forward", "Faster", "Better", "Smarter"];
const AUTO_ADVANCE_MS = 8000;

function HeroCopy() {
  return (
    <div className="flex max-w-3xl flex-col items-start gap-6">
      <Kicker tone="dark">Engineering Digital Solutions Since 2015</Kicker>

      <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
        Building Digital Solutions
        <br />
        That Move Your Business{" "}
        <span className="text-brand-teal-hover">
          <Typewriter words={CYCLING_WORDS} />
        </span>
      </h1>

      <p className="max-w-2xl text-lg font-light text-slate-300 md:text-xl">
        DevLogix is a software and AI development company focused on building scalable,
        innovative, and business-driven digital solutions for the modern enterprise.
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button
          href="/contact"
          variant="glass"
          size="lg"
          premium
          className="hover:!border-brand-teal-fill hover:!bg-brand-teal-fill hover:shadow-[0_0_40px_color-mix(in_srgb,var(--color-brand-teal-fill)_35%,transparent)]"
        >
          Partner with us
        </Button>
        <Button href="/services" variant="outlineLight" size="lg">
          Explore Services
        </Button>
      </div>
    </div>
  );
}

// Design review (2026-09-16): the previous 5-dot indicator only ever shifted a decorative
// ambient-glow position — it wasn't a real content variant. Replaced with two actual hero
// compositions, switched by a two-segment cycling progress line (the alternative the review
// explicitly suggested to a plain dot indicator).
function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

export default function Hero() {
  const [variant, setVariant] = useState<0 | 1>(0);
  const [cycleKey, setCycleKey] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(() => {
      setVariant((v) => (v === 0 ? 1 : 0));
      setCycleKey((k) => k + 1);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [variant, cycleKey, reduced]);

  const selectVariant = (v: 0 | 1) => {
    setVariant(v);
    setCycleKey((k) => k + 1);
  };

  return (
    <section className="relative overflow-hidden bg-brand-navy">
      {variant === 0 ? (
        <>
          <AmbientGlow className="h-72 w-72 -translate-x-1/3 -translate-y-1/3 top-0 left-0" />
          <AmbientGlow className="h-64 w-64 translate-x-1/4 top-1/3 right-0" />
          <Container className="relative flex flex-col gap-10 pt-20 pb-14 md:pt-24 md:pb-16">
            <HeroCopy />
          </Container>
        </>
      ) : (
        <Container className="relative grid grid-cols-1 items-center gap-10 pt-20 pb-14 md:pt-24 md:pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <HeroCopy />
          {/* AnimatedHeroVisual uses fixed pixel-width rings wider than a 375px viewport —
              scaled down and clipped so it never forces horizontal overflow on mobile. */}
          <div className="origin-center overflow-hidden scale-75 sm:scale-90 lg:scale-100">
            <AnimatedHeroVisual />
          </div>
        </Container>
      )}

      <Container className="relative pb-10">
        <div className="flex items-center gap-3" role="tablist" aria-label="Hero layout">
          {([0, 1] as const).map((i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={variant === i}
              aria-label={`Show hero layout ${i + 1} of 2`}
              onClick={() => selectVariant(i)}
              className="relative h-1 w-14 overflow-hidden rounded-full bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
            >
              {variant === i && (
                <span
                  key={cycleKey}
                  aria-hidden
                  className={`absolute inset-y-0 left-0 rounded-full bg-brand-teal-hover ${
                    reduced ? "w-full" : "w-0 animate-[fill-progress_8s_linear_forwards]"
                  }`}
                />
              )}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}

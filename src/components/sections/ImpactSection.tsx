import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Kicker from "../ui/Kicker";

export type ImpactSectionProps = {
  kicker: string;
  heading: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
  statValue: string;
  statLabel: string;
  statKicker: string;
};

export default function ImpactSection({
  kicker,
  heading,
  body,
  linkLabel,
  linkHref,
  statValue,
  statLabel,
  statKicker,
}: ImpactSectionProps) {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-5">
          <Kicker tone="light">{kicker}</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {heading}
          </h2>
          <p className="max-w-lg text-lg font-light text-slate-500 md:text-xl">{body}</p>
          {linkHref && linkLabel && (
            <Link
              href={linkHref}
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              {linkLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
        </Reveal>

        <Reveal delay={0.1} className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-linear-to-br from-brand-navy to-brand-teal-dark">
          <Image
            src="/images/about/sustainability-impact.jpg"
            alt="Sustainable technology powering a greener data centre"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Scrim keeps the stat card readable over whatever the photo's lower half contains. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-brand-navy/80 via-transparent to-transparent"
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-brand-navy/90 p-4 backdrop-blur-[10px] sm:right-auto sm:w-56">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-teal-hover uppercase">
              {statKicker}
            </p>
            <p className="mt-1 text-3xl font-bold text-white">{statValue}</p>
            <p className="mt-1 text-xs text-slate-400">{statLabel}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

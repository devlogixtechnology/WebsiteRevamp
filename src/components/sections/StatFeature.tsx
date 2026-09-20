import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Kicker from "../ui/Kicker";
import StatCard from "../cards/StatCard";

export type StatFeatureProps = {
  kicker: string;
  heading: string;
  body: string;
  statValue: string;
  statLabel: string;
  reverse?: boolean;
  /** Subtle teal/green ambient gradient behind the section — used for Mission/Vision on About. */
  gradient?: boolean;
};

export default function StatFeature({
  kicker,
  heading,
  body,
  statValue,
  statLabel,
  reverse = false,
  gradient = false,
}: StatFeatureProps) {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      {gradient && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--color-brand-teal)_12%,transparent),transparent_55%),radial-gradient(circle_at_80%_80%,color-mix(in_srgb,var(--color-brand-teal-hover)_10%,transparent),transparent_50%)]"
        />
      )}

      <Container
        className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal className="flex flex-col gap-5">
          <Kicker tone="light">{kicker}</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {heading}
          </h2>
          <p className="max-w-lg text-lg font-light text-slate-600 md:text-xl">{body}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <StatCard value={statValue} label={statLabel} />
        </Reveal>
      </Container>
    </section>
  );
}

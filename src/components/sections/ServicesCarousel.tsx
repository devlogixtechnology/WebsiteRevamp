import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import ServiceCard from "../cards/ServiceCard";
import { coreServicesData } from "@/data/servicesPageData";

// Matches the same 5 services shown on /services (single source of truth — coreServicesData),
// not an invented subset — horizontal scroll because 5 cards don't fit a clean row at any
// width. No arrow/dot controls: plain touch/trackpad/keyboard scroll, per design review.
const IMAGES: Record<string, string> = {
  "artificial-intelligence": "/images/services/ai-transformation.jpg",
  "software-development": "/images/services/software-development.jpg",
  "ui-ux-design": "/images/services/ui-ux-design.jpg",
  "cloud-solutions": "/images/services/cloud-solutions.jpg",
  "digital-transformation": "/images/services/digital-engineering.jpg",
};

export default function ServicesCarousel() {
  return (
    <section id="services" className="scroll-mt-24 bg-brand-navy py-20">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Our Services
          </h2>
          <Link
            href="/services"
            className="text-xs font-semibold tracking-[0.12em] text-brand-teal-hover uppercase underline decoration-transparent underline-offset-4 transition hover:decoration-brand-teal-hover"
          >
            Discover our full capabilities &rarr;
          </Link>
        </Reveal>

        <div
          role="region"
          aria-label="Our Services"
          tabIndex={0}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
        >
          {coreServicesData.map((service) => (
            <div
              key={service.id}
              // Intentionally not an even divisor of the row (25% would let exactly 4 of the 5
              // cards fill the viewport with the 5th fully hidden, no scroll affordance) — this
              // width always leaves the next card peeking in at the edge as a scroll hint.
              className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[22%]"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
                image={IMAGES[service.slug]}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

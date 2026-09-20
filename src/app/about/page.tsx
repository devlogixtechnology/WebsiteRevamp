import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import StatFeature from "@/components/sections/StatFeature";
import ValuesGrid from "@/components/sections/ValuesGrid";
import FounderQuote from "@/components/sections/FounderQuote";
import NumberedFeatures from "@/components/sections/NumberedFeatures";
import DoctrineStatement from "@/components/sections/DoctrineStatement";
import ImpactSection from "@/components/sections/ImpactSection";
import TeamGrid from "@/components/sections/TeamGrid";
import InsightsGrid from "@/components/sections/InsightsGrid";
import Testimonials from "@/components/sections/Testimonials";
import UpdatedContactBanner from "@/components/sections/UpdatedContactBanner";
import { getIcon } from "@/lib/icons";
import {
  ABOUT_INSIGHTS,
  ABOUT_VALUES,
  DOCTRINE_VALUES,
  ENGINEERING_STANDARDS,
  LEADERSHIP,
} from "@/data/aboutData";

export const metadata: Metadata = {
  title: "About Us — Story, Mission & Leadership | DevLogix",
  description:
    "Meet the team engineering sovereign, high-performance digital platforms for the modern enterprise at DevLogix.",
};

// Data lives in src/data/aboutData.ts as plain, serializable content (icons are string keys —
// see src/lib/icons.ts) so it can later be swapped for a real CMS/API fetch without touching
// this page's structure. Resolving icon keys to components happens here, at the page boundary.
const values = ABOUT_VALUES.map((value) => ({ ...value, icon: getIcon(value.icon) }));
const doctrineValues = DOCTRINE_VALUES.map((value) => ({ ...value, icon: getIcon(value.icon) }));

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Beyond Code, We Engineer Legacies"
        subtitle="We build resilient, forward-thinking platforms, dedicated to innovation and sovereignty."
        visual={
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-linear-to-br from-brand-card via-brand-navy to-brand-teal-dark">
            <Image
              src="/images/about/herosection.jpg"
              alt="DevLogix engineering team at work"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        }
      />

      <StatFeature
        kicker="Our Mission"
        heading="To build persistent digital foundations."
        body="We deliver deterministic software architectures engineered to survive cloud vendor changes and maximize sovereign computing returns."
        statValue="100+"
        statLabel="Enterprise Projects Delivered"
        gradient
      />

      <StatFeature
        kicker="Our Vision"
        heading="A future of total architectural control."
        body="To eliminate outsourced complexity frameworks and establish in-house engineering capabilities for critical institutions."
        statValue="50+"
        statLabel="Countries Served Globally"
        reverse
        gradient
      />

      <ValuesGrid kicker="Our Values" heading="What Drives Us Forward" items={values} />

      <FounderQuote
        kicker="From the Desk of the Founder"
        quote="Technology is not just a tool. It is your sovereignty."
        body="For too long, enterprise organizations have rented their logic models from global consulting syndicates. We started DevLogix to restore absolute platform ownership to the developers who build our world."
        name="Muhammad Ali Qamar"
        title="Founder & CEO"
      />

      <NumberedFeatures
        kicker="Discover More"
        heading="DevLogix Engineering Standards"
        items={ENGINEERING_STANDARDS}
      />

      <DoctrineStatement lines={["The", "DevLogix", "Doctrine."]} values={doctrineValues} />

      <ImpactSection
        kicker="Sustainability & Impact"
        heading="Engineering for Persistent Global Balance."
        body="We architect our core monoliths to limit CPU cycles, reducing overall server carbon tax by up to 40% globally."
        statKicker="Carbon Reduction"
        statValue="-40%"
        statLabel="Optimized telemetry cycles"
      />

      <TeamGrid
        kicker="Our Leadership"
        heading="Sovereign Architects & Lead Operators"
        members={LEADERSHIP}
      />

      <InsightsGrid kicker="Resources" heading="Featured Insights" items={ABOUT_INSIGHTS} />

      <Testimonials />

      <UpdatedContactBanner />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import IntroWithStatsBar from "@/components/sections/IntroWithStatsBar";
import ValuesGrid from "@/components/sections/ValuesGrid";
import IndustrySpotlight from "@/components/sections/IndustrySpotlight";
import UpdatedContactBanner from "@/components/sections/UpdatedContactBanner";
import { getIcon } from "@/lib/icons";
import { INDUSTRIES, INDUSTRY_SPOTLIGHT, WHY_US } from "@/data/industriesData";

export const metadata: Metadata = {
  title: "Industries We Serve — Solutions by Sector | DevLogix",
  description:
    "DevLogix delivers scalable technology and AI-driven solutions across banking, healthcare, retail, hospitality, and more.",
};

// Data lives in src/data/industriesData.ts as plain, serializable content (icons are string
// keys — see src/lib/icons.ts) so it can later be swapped for a real CMS/API fetch without
// touching this page's structure. Resolving icon keys to components happens here.
const industries = INDUSTRIES.map((industry) => ({ ...industry, icon: getIcon(industry.icon) }));
const whyUs = WHY_US.map((point) => ({ ...point, icon: getIcon(point.icon) }));

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Solutions Built Around Your Industry"
        subtitle="DevLogix partners with organizations across sectors to solve complex challenges, delivering scalable technology and AI-driven solutions aligned with each industry's goals, regulations, and pace of change."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/#services" }}
        visual={
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-linear-to-br from-brand-card via-brand-navy to-brand-teal-dark">
            <Image
              src="/images/industries/industries-hero-section.jpg"
              alt="DevLogix teams delivering technology across industry sectors"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        }
      />

      <IntroWithStatsBar
        kicker="Who We Are"
        heading="We Understand Industries, Not Just Technology"
        body="DevLogix works closely with businesses across hospitality, communications, banking, healthcare, retail, and the public sector, helping each translate complex operational needs into scalable, secure digital products."
        stats={[
          { value: "8", label: "Industries Verticalized" },
          { value: "7+", label: "Regional Hubs" },
          { value: "15+", label: "Industry Experts" },
          { value: "50+", label: "Projects Delivered" },
        ]}
      />

      <ValuesGrid
        kicker="Industries We Serve"
        heading="Our Core Industries"
        body="We work alongside global enterprises across industries to navigate complex challenges with scalable, practical technology. With deep industry expertise and proven delivery, we build adaptable, resilient solutions that modernize operations, elevate customer interactions, and help businesses move forward with confidence."
        items={industries.map((industry) => ({
          ...industry,
          href: "/contact",
          linkLabel: "Explore More",
        }))}
      />

      <IndustrySpotlight
        heading="Creating Meaningful Impact Across Industries"
        body="We partner with enterprises across industries to solve complex challenges, delivering scalable technology services aligned with their goals to help them adapt, grow, and lead."
        industries={INDUSTRY_SPOTLIGHT}
        learnMoreHref="/contact"
        caseStudyHref="/contact"
      />

      <ValuesGrid
        kicker="Why Choose Us"
        heading="Why Work With DevLogix?"
        body="We partner with ambitious businesses to deliver technology that moves the needle, with the expertise, process, and commitment to back it up."
        items={whyUs}
        tone="dark"
      />

      <UpdatedContactBanner />
    </>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesCarousel from "@/components/sections/ServicesCarousel";
import StatsBand from "@/components/sections/StatsBand";
import IndustriesServed from "@/components/sections/IndustriesServed";
import Testimonials from "@/components/sections/Testimonials";
import InsightsSection from "@/components/sections/home/InsightsSection";
import ContactCta from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "DevLogix | Software & AI Development Company",
  description:
    "DevLogix engineers scalable software, AI, and digital transformation solutions for the modern enterprise. Partner with us to build what's next.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <ServicesCarousel />
      <StatsBand />
      <IndustriesServed />
      <Testimonials />
      <InsightsSection />
      <ContactCta />
    </>
  );
}

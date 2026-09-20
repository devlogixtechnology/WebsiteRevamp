import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const ITEMS = [
  {
    title: "Expert Team",
    description: "Skilled professionals with deep industry expertise and modern engineering stack.",
  },
  {
    title: "Client Focused",
    description: "We prioritize your business objectives and deliver highly measurable outcomes.",
  },
  {
    title: "Agile Approach",
    description: "Highly flexible, fully transparent, and iteratively managed product lifecycles.",
  },
  {
    title: "Quality & Security",
    description: "Maintaining the absolute highest standard in quality assurance and data protection.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Why Choose DevLogix?
          </h2>

          <ul className="flex flex-col gap-6">
            {ITEMS.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <CheckCircle2
                  aria-hidden
                  className="mt-0.5 h-6 w-6 shrink-0 rounded-full text-brand-teal-dark"
                />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Gradient stays as the backdrop so the frame still reads as designed while the
            image decodes, rather than flashing an empty white box. */}
        <Reveal delay={0.1} className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-linear-to-br from-brand-navy via-brand-card to-brand-teal-dark">
          <Image
            src="/images/home/staff-augmentation.jpg"
            alt="DevLogix engineers working together on laptops around a shared table"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}

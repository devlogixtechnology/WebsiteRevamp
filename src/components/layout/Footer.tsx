import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "../ui/SocialIcons";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Software Development", href: "/services/software-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Artificial Intelligence", href: "/services/artificial-intelligence" },
      { label: "Digital Transformation", href: "/services/digital-transformation" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Banking & Financial Services", href: "/industries" },
      { label: "Healthcare & Life Sciences", href: "/industries" },
      { label: "Retail & CPG", href: "/industries" },
      { label: "Hospitality", href: "/industries" },
      { label: "Communications", href: "/industries" },
      { label: "Public Sector", href: "/industries" },
    ],
  },
  {
    title: "Insights",
    links: [
      // HANDOFF-AMBIGUOUS: only a single /blog listing exists (no separate Case Studies/
      // Newsroom/Whitepapers sections) — all point there rather than to non-existent pages.
      { label: "Case Studies", href: "/blog" },
      { label: "Newsroom", href: "/blog" },
      { label: "Whitepapers / EBooks", href: "/blog" },
      { label: "Blogs", href: "/blog" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-navy pt-16 pb-8 text-slate-300">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded-md"
              aria-label="DevLogix Home"
            >
              <Image
                src="/images/logo/devlogix-footer.svg"
                alt="DevLogix"
                width={140}
                height={32}
                className="h-8 md:h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              We help businesses innovate, grow, and stay ahead with custom digital solutions
              and AI-powered technology.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors duration-300 hover:border-white/20 hover:text-brand-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors duration-300 hover:text-brand-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* HANDOFF-AMBIGUOUS: no /privacy or /terms page content was briefed, so no links to
            them are added here — that would otherwise violate the "no dead internal links"
            SEO requirement. Add them once that content exists. */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-slate-400 sm:text-left">
          <p>&copy; {year} DevLogix. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

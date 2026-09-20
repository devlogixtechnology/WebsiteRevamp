"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

// HANDOFF-AMBIGUOUS (design review, 2026-09-16): Services and Blog/Insights now have real pages
// (/services, /blog) — updated from last session's /#services and /#insights homepage-anchor
// placeholders. The Services dropdown's sub-links mirror the 5 real standalone service routes.
const NAV_LINKS: {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
  /** Footer row at the bottom of the dropdown panel, e.g. "Explore All Services". */
  dropdownFooter?: string;
}[] = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Artificial Intelligence", href: "/services/artificial-intelligence" },
      { label: "Software Development", href: "/services/software-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions" },
      { label: "Digital Transformation", href: "/services/digital-transformation" },
    ],
    dropdownFooter: "Explore All Services",
  },
  {
    label: "Industries",
    href: "/industries",
    // All six link to the main /industries page for now — it's a single-page spotlight with
    // a tab switcher per industry, not yet split into standalone industry routes.
    dropdown: [
      { label: "Hospitality", href: "/industries" },
      { label: "Communications", href: "/industries" },
      { label: "Banking & Financial Services", href: "/industries" },
      { label: "Healthcare & Life Sciences", href: "/industries" },
      { label: "Retail & CPG", href: "/industries" },
      { label: "Public Sector", href: "/industries" },
    ],
  },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
];

// The header CTA + closing-CTA copy consolidation from last session still stands: "Get in Touch"
// here and on every page's closing band, "Partner with us" reserved for the homepage's two
// flagship placements.
//
// Design review (2026-09-16): the search icon is removed from the header everywhere — it had no
// working search behind it on this static/content-driven site.
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // Keyed by nav label so Services and Industries (both dropdowns) expand independently.
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-xs backdrop-blur-md"
          : "border-b border-white/10 bg-brand-navy/95 backdrop-blur-[10px]"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="relative flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 rounded-md"
          aria-label="DevLogix Home"
        >
          <Image
            src="/images/logo/devlogix-white.svg"
            alt="DevLogix"
            width={140}
            height={32}
            className={`h-8 md:h-9 w-auto object-contain transition-all duration-300 ${
              isScrolled ? "opacity-0 invisible absolute" : "opacity-100 visible relative"
            }`}
            priority
          />
          <Image
            src="/images/logo/devlogix-teal-dark.svg"
            alt="DevLogix"
            width={140}
            height={32}
            className={`h-8 md:h-9 w-auto object-contain transition-all duration-300 ${
              isScrolled ? "opacity-100 visible relative" : "opacity-0 invisible absolute"
            }`}
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="group relative py-2">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
                    isScrolled
                      ? "text-slate-700 hover:text-brand-teal"
                      : "text-slate-300 hover:text-brand-teal-hover focus-visible:ring-offset-brand-navy"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    aria-hidden
                    className={`h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5 ${
                      isScrolled
                        ? "text-slate-500 group-hover:text-brand-teal"
                        : "text-slate-400 group-hover:text-brand-teal-hover"
                    }`}
                  />
                </Link>

                {/* Fix: without pointer-events-none, the invisible (opacity-0) panel still
                    intercepted hover/clicks on whatever page content sat beneath it — hovering
                    that dead zone would even trigger its own reveal via the shared .group
                    ancestor, independent of ever touching the actual nav link. */}
                <div className="absolute left-0 top-full w-64 translate-y-2 pt-2 opacity-0 pointer-events-none transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
                  <div
                    className={`rounded-xl border p-2.5 shadow-2xl backdrop-blur-xl ${
                      isScrolled
                        ? "border-slate-200 bg-white/95 text-slate-800"
                        : "border-white/10 bg-brand-card text-slate-200"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                          isScrolled
                            ? "text-slate-700 hover:bg-slate-100 hover:text-brand-teal"
                            : "text-slate-200 hover:bg-white/10 hover:text-brand-teal-hover"
                        }`}
                      >
                        <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                        {item.label}
                      </Link>
                    ))}
                    {link.dropdownFooter && (
                      <>
                        <div className={`my-1.5 border-t ${isScrolled ? "border-slate-200" : "border-white/10"}`} />
                        <Link
                          href={link.href}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-brand-teal transition-colors hover:bg-brand-teal/10"
                        >
                          {link.dropdownFooter}
                          <span aria-hidden>&rarr;</span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
                  isScrolled
                    ? "text-slate-700 hover:text-brand-teal"
                    : "text-slate-300 hover:text-brand-teal-hover focus-visible:ring-offset-brand-navy"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/careers"
            className={`text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
              isScrolled
                ? "text-slate-700 hover:text-brand-teal"
                : "text-slate-300 hover:text-brand-teal-hover focus-visible:ring-offset-brand-navy"
            }`}
          >
            Careers
          </Link>
          <Button href="/contact" size="md" premium>
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
            isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className={`border-t lg:hidden transition-colors ${
            isScrolled ? "border-slate-200 bg-white" : "border-white/10 bg-brand-navy"
          }`}
        >
          <Container className="flex flex-col gap-1 py-6">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <div className="flex items-center justify-between rounded px-2">
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex-1 py-3 text-base font-medium transition-colors ${
                        isScrolled ? "text-slate-800 hover:text-brand-teal" : "text-slate-200 hover:text-brand-teal-hover"
                      }`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`${openMobileSubmenu === link.label ? "Collapse" : "Expand"} ${link.label} submenu`}
                      aria-expanded={openMobileSubmenu === link.label}
                      onClick={() =>
                        setOpenMobileSubmenu((v) => (v === link.label ? null : link.label))
                      }
                      className={`p-3 transition-colors ${isScrolled ? "text-slate-600" : "text-slate-400"}`}
                    >
                      <ChevronDown
                        aria-hidden
                        className={`h-4 w-4 transition-transform ${openMobileSubmenu === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {openMobileSubmenu === link.label && (
                    <div
                      className={`ml-3 flex flex-col gap-1 border-l pl-3 ${
                        isScrolled ? "border-slate-200" : "border-white/10"
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`rounded px-2 py-2 text-sm transition-colors ${
                            isScrolled
                              ? "text-slate-600 hover:text-brand-teal"
                              : "text-slate-400 hover:text-brand-teal-hover"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded px-2 py-3 text-base font-medium transition-colors ${
                    isScrolled
                      ? "text-slate-800 hover:bg-slate-100 hover:text-brand-teal"
                      : "text-slate-200 hover:bg-white/5 hover:text-brand-teal-hover"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/careers"
              onClick={() => setMobileOpen(false)}
              className={`rounded px-2 py-3 text-base font-medium transition-colors ${
                isScrolled
                  ? "text-slate-800 hover:bg-slate-100 hover:text-brand-teal"
                  : "text-slate-200 hover:bg-white/5 hover:text-brand-teal-hover"
              }`}
            >
              Careers
            </Link>
            <Button href="/contact" size="md" className="mt-4 w-full">
              Get in Touch
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}

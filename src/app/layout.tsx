import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// HANDOFF-AMBIGUOUS: not in CLAUDE.md's documented type tokens (Poppins only), but 19 sites
// across 12 section components consistently reference `font-['Plus_Jakarta_Sans']` for stat
// numbers and uppercase kicker badges — a deliberate secondary display font from the Figma spec
// that was never actually loaded, so it silently fell back to the browser default everywhere it
// was used. Loading it properly (visual intent) rather than deleting the class (which would
// silently collapse 19 intentional spots to Poppins) per CLAUDE.md's handoff-wins-on-visual-
// intent rule. Exposed as the `font-jakarta` utility via --font-jakarta in globals.css.
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.devlogix.com";

// No title.template here: every page below sets its own complete "{Page Name} | DevLogix"
// string (per CLAUDE.md's title pattern) rather than a bare page name for a template to wrap —
// a template would double the " | DevLogix" suffix onto titles that already include it.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DevLogix | Software & AI Development Company",
  description:
    "DevLogix engineers scalable software, AI, and digital transformation solutions for the modern enterprise.",
  openGraph: {
    type: "website",
    siteName: "DevLogix",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1221", // mirrors --color-brand-navy — next/metadata's Viewport type requires a literal string here, can't reference a CSS custom property
};

// Baseline Organization/WebSite JSON-LD — standard technical SEO hygiene independent of the
// marketing team's schema brief (not yet in /Development Material/ as of this build; richer
// per-page schema like JobPosting/Article should wait for that brief rather than be guessed).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevLogix",
  url: siteUrl,
  description:
    "DevLogix is a software and AI development company focused on building scalable, innovative, and business-driven digital solutions for the modern enterprise.",
  sameAs: [
    "https://linkedin.com",
    "https://facebook.com",
    "https://instagram.com",
    "https://twitter.com",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${plusJakartaSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-brand-navy font-sans text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded focus:bg-brand-teal-fill focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

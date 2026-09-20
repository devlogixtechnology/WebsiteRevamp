// All blog content lives here. Pages only loop over this list.
//
// To add a post: copy one object, change the slug (must be unique — it becomes
// the URL /blog/<slug>), and fill in the text. To show a photo, drop the file in
// public/blog/ and set image: "/blog/your-file.jpg".

export type BlogAuthor = {
  name: string;
  role: string;
  avatar?: string; // e.g. "/team/devon.jpg"
};

// One block of the article body. Sections with a heading show up in the
// table of contents on the post page; the intro section has no heading.
export type BlogSection = {
  id: string; // used as the anchor: /blog/<slug>#<id>
  heading?: string;
  paragraphs: string[];
  quote?: string;
  steps?: { title: string; text: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  industry: string;
  service: string;
  date: string;
  readTime: string;
  image?: string; // e.g. "/blog/digital-transformation.jpg"
  featured?: boolean;
  author: BlogAuthor;
  sections: BlogSection[];
};

export const authors = {
  devon: {
    name: "Devon Sterling",
    role: "Principal Solutions Architect",
  },
  sarah: {
    name: "Sarah Jenkins",
    role: "Head of Platform Engineering",
  },
  omar: {
    name: "Omar Malik",
    role: "Director of Engineering",
  },
};

// Used by the filter dropdowns on the listing page.
export const blogIndustries = [
  "Banking & Financial",
  "Healthcare",
  "Communications",
  "Public Sector",
  "Retail",
];

export const blogServices = [
  "Digital Transformation",
  "Artificial Intelligence",
  "Cloud Solutions",
  "Software Development",
];

export const blogs: BlogPost[] = [
  {
    slug: "why-digital-transformations-fail",
    title:
      "Why Most Digital Transformations Fail (And How Sovereign Engineering Saves Them)",
    excerpt:
      "Most modernization projects collapse under the weight of microservice complexity, cloud vendor rent-seeking, and a lack of local sovereign ownership. In this deep systems breakdown, our CTO dissects the architectural steps to reclaim infrastructure control.",
    category: "Digital Transformation",
    industry: "Banking & Financial",
    service: "Digital Transformation",
    date: "June 15, 2025",
    readTime: "8 min read",
    featured: true,
    author: authors.devon,
    sections: [
      {
        id: "intro",
        paragraphs: [
          "In the pursuit of digital transformation, enterprise executives routinely outsource their core competencies to global systems integrators, expecting turn-key agility. The results are almost universally disastrous. By the time a three-year cloud migration roadmap concludes, the institution realizes they do not own their telemetry.",
          "They are renters of standard software models, burdened with astronomical microservice operational overhead, paying continuous tax to external consulting cartels. Sovereign engineering is the antidote. Reclaiming control over core platforms enables organizations to build long-term value, maintain architectural agility, and keep operating cost structures mathematically defensible.",
        ],
      },
      {
        id: "sovereignty",
        heading: "Sovereignty is the New Competitive Advantage",
        paragraphs: [
          "Sovereign engineering dictates that whatever constitutes your core operational logic must be conceived, implemented, and executed internally. When you depend on outsourced development pools, your systems architecture degrades into generic templates designed for billable hour maximization, not runtime execution speed.",
          "To survive in an AI-first market, institutions must own their data transformation layers and the sovereign telemetry of their enterprise software. Without this foundation, integrating advanced reasoning models or proprietary intelligence systems becomes fundamentally impossible due to third-party integration barriers.",
        ],
        quote:
          "The difference between a 'job done' and a 'legacy built' is the engineering standard. If you are ready to stop renting your future and start building systems that grow with your company, it's time for sovereign execution.",
      },
      {
        id: "deep-engineering",
        heading: "Adapting Methodologies for Deep Engineering",
        paragraphs: [
          "Modern software has been subverted by bloated buzzword architecture. Enterprise agility isn't delivered by introducing 50 microservices that pass network overhead back and forth; it is engineered through tightly consolidated modular monoliths running at high performance thresholds.",
        ],
        steps: [
          {
            title: "Zero platform dependency on consulting cartels",
            text: "Eliminate external lock-in by maintaining full source transparency and keeping key architectural knowledge natively within your permanent organization.",
          },
          {
            title: "Sub-millisecond core execution models",
            text: "Keep latency critical logic local to your hardware or tightly optimized within sovereign containers to scale user operations seamlessly.",
          },
          {
            title: "SLA standard protocols built for continuous deployment",
            text: "Develop automated testing, deployment pipelines, and telemetry systems that treat uptime as a mathematical priority.",
          },
        ],
      },
      {
        id: "legacy",
        heading: "Conclusions that Shift Your Org's Legacy",
        paragraphs: [
          "Ultimately, the transition from renter to builder requires an ideological shift. Digital transformation is not a standard software upgrade or an off-the-shelf license implementation. It is the deliberate construction of an in-house digital legacy designed to adapt for decades.",
          "When your company owns its architecture, software stops being an amortized liability and transforms back into what it was always intended to be: your primary weapon for market dominance.",
        ],
      },
    ],
  },
  {
    slug: "monoliths-winning-sovereign-economics",
    title: "Why Monoliths are Winning the War of Sovereign Economics",
    excerpt:
      "Why top enterprises are ditching microservice sprawl for unified architectures to slash cloud costs.",
    category: "Infrastructure",
    industry: "Banking & Financial",
    service: "Cloud Solutions",
    date: "March 8, 2026",
    readTime: "6 min read",
    author: authors.devon,
    sections: [
      {
        id: "intro",
        paragraphs: [
          "Sovereign deployment mandates and high cloud costs have triggered a massive resurgence of the modular monolith. The hidden network tax of microservices — serialization, retries, service discovery — is now visible on every cloud bill.",
        ],
      },
      {
        id: "cost-model",
        heading: "The Real Cost Model",
        paragraphs: [
          "A single well-structured process on dedicated hardware routinely outperforms a fleet of containers passing JSON across a virtual network. When the numbers are laid side by side, the monolith wins on latency, on cost, and on operational clarity.",
        ],
      },
    ],
  },
  {
    slug: "on-premise-llm-latency",
    title: "A Review of On-Premise LLM Latency on Custom Hardware",
    excerpt:
      "Benchmarking token inference throughput and real-time response speeds on localized hardware.",
    category: "Sovereign AI",
    industry: "Healthcare",
    service: "Artificial Intelligence",
    date: "March 5, 2026",
    readTime: "7 min read",
    author: authors.sarah,
    sections: [
      {
        id: "intro",
        paragraphs: [
          "Evaluating open weight models inside sovereign institutional data centers means measuring what actually matters: tokens per second under real concurrency, on hardware you own.",
        ],
      },
      {
        id: "results",
        heading: "Benchmark Results",
        paragraphs: [
          "Across three hardware profiles, quantized 8B-parameter models sustained interactive response times with room to spare, while 70B-class models needed batching to stay within acceptable latency budgets.",
        ],
      },
    ],
  },
  {
    slug: "securing-edge-node-deployments",
    title: "Securing Edge Node Deployments Against Physical Intrusions",
    excerpt:
      "Zero-trust cryptographic protocols to safeguard distributed edge hardware from physical tampering.",
    category: "Cybernetics",
    industry: "Communications",
    service: "Software Development",
    date: "February 28, 2026",
    readTime: "5 min read",
    author: authors.devon,
    sections: [
      {
        id: "intro",
        paragraphs: [
          "How we implemented encrypted root partitions and auto-destruct key metrics across ruggedized factory-floor computational clusters.",
        ],
      },
      {
        id: "threat-model",
        heading: "The Threat Model",
        paragraphs: [
          "An edge node is a server someone else can touch. Every control we design starts from the assumption that the box will be opened, the disk will be pulled, and the network will be hostile.",
        ],
      },
    ],
  },
  {
    slug: "hidden-cost-cloud-native-rent-seeking",
    title: "The Hidden Cost of Cloud-Native Rent-Seeking Frameworks",
    excerpt:
      "Uncovering vendor lock-in traps and hidden egress fees that drain SaaS platform margins.",
    category: "Restructuring",
    industry: "Retail",
    service: "Cloud Solutions",
    date: "March 2026",
    readTime: "6 min read",
    author: authors.omar,
    sections: [
      {
        id: "intro",
        paragraphs: [
          "Managed services promise simplicity and deliver dependency. This piece walks through the line items that quietly compound as a platform scales.",
        ],
      },
      {
        id: "egress",
        heading: "Egress is the Tell",
        paragraphs: [
          "Data goes in for free and comes out at a price. That asymmetry is the business model, and it should shape every architecture decision you make.",
        ],
      },
    ],
  },
  {
    slug: "sovereign-communications-leo-satellites",
    title: "Sovereign Communications: Redundancy in Low-Orbit Satellites",
    excerpt:
      "Building resilient failover networks with LEO satellite constellations for high availability.",
    category: "Defense Tech",
    industry: "Public Sector",
    service: "Software Development",
    date: "March 2026",
    readTime: "9 min read",
    author: authors.sarah,
    sections: [
      {
        id: "intro",
        paragraphs: [
          "When terrestrial links fail, the constellation overhead becomes the network. We look at how to design a failover path that does not depend on any single provider.",
        ],
      },
      {
        id: "failover",
        heading: "Designing the Failover Path",
        paragraphs: [
          "Multi-provider uplinks, deterministic routing tables, and aggressive health checks turn a satellite link from a last resort into a first-class member of the network.",
        ],
      },
    ],
  },
  {
    slug: "trusted-compute-regions-sla-guide",
    title: "Establishing Trusted Compute Regions: A Direct Engineering SLA Guide",
    excerpt:
      "Key latency benchmarks and compliance frameworks for managing global isolated infrastructure.",
    category: "Governance",
    industry: "Banking & Financial",
    service: "Cloud Solutions",
    date: "March 2026",
    readTime: "8 min read",
    author: authors.omar,
    sections: [
      {
        id: "intro",
        paragraphs: [
          "A trusted compute region is a promise: this data stays here, and it is served this fast. Writing that promise down as an SLA is where most programmes stall.",
        ],
      },
      {
        id: "benchmarks",
        heading: "Latency Benchmarks That Hold Up",
        paragraphs: [
          "We publish p50, p95 and p99 targets per region and treat any breach as an incident, not a metric. That discipline is what makes the SLA real.",
        ],
      },
    ],
  },
  {
    slug: "sub-millisecond-apis-financial-telemetry",
    title: "When Sub-Millisecond APIs Make or Break Financial Telemetry",
    excerpt:
      "Optimizing event-driven streaming pipelines to eliminate latency in high-frequency trading.",
    category: "AI System",
    industry: "Banking & Financial",
    service: "Artificial Intelligence",
    date: "March 2026",
    readTime: "7 min read",
    author: authors.devon,
    sections: [
      {
        id: "intro",
        paragraphs: [
          "In high-frequency environments a millisecond is a business outcome. This is a walkthrough of the pipeline choices that keep event streams inside the budget.",
        ],
      },
      {
        id: "pipeline",
        heading: "Pipeline Choices",
        paragraphs: [
          "Zero-copy serialization, pinned cores, and a ruthless refusal to add hops. Every layer you remove is latency you get back.",
        ],
      },
    ],
  },
  {
    slug: "sovereign-engineering-core-principles-2026",
    title: "Our 2026 Sovereign Engineering Core Principles and Roster Updates",
    excerpt:
      "DevLogix's updated architectural standards, security protocols, and engineering roster for 2026.",
    category: "SLA Principles",
    industry: "Communications",
    service: "Digital Transformation",
    date: "March 2026",
    readTime: "4 min read",
    author: authors.sarah,
    sections: [
      {
        id: "intro",
        paragraphs: [
          "Each year we restate what we will and will not build. This is the 2026 edition, along with the engineers who will be holding the line on it.",
        ],
      },
      {
        id: "principles",
        heading: "The Principles",
        paragraphs: [
          "Sovereign first. Precision-led coding. Good through intelligence. Nothing has been removed from last year; two clauses have been tightened.",
        ],
      },
    ],
  },
  {
    slug: "migrating-cobol-generative-extraction",
    title: "Migrating Cobol Infrastructure with Generative Extraction Pipelines",
    excerpt:
      "Accelerating legacy mainframe modernizations using AI translation tools with zero downtime.",
    category: "Legacy Core",
    industry: "Public Sector",
    service: "Artificial Intelligence",
    date: "March 2026",
    readTime: "10 min read",
    author: authors.omar,
    sections: [
      {
        id: "intro",
        paragraphs: [
          "The mainframe is not going away because it works. What can go away is the fear of touching it. Generative extraction turns forty-year-old COBOL into documented, testable modules without a big-bang cutover.",
        ],
      },
      {
        id: "approach",
        heading: "The Extraction Approach",
        paragraphs: [
          "Read, translate, verify, shadow-run, switch. Five stages, each reversible, each producing an artifact the auditors can read.",
        ],
      },
    ],
  },
];

// Small helpers so pages don't repeat the same lines.
export function getFeaturedPost() {
  return blogs.find((post) => post.featured) || blogs[0];
}

export function getPostBySlug(slug: string) {
  const direct = blogs.find((post) => post.slug === slug);
  if (direct) return direct;
  if (slug === "why-most-digital-transformations-fail") {
    return blogs.find((post) => post.slug === "why-digital-transformations-fail");
  }
  if (slug === "hidden-cost-cloud-native") {
    return blogs.find((post) => post.slug === "hidden-cost-cloud-native-rent-seeking");
  }
  return undefined;
}

export function getRelatedPosts(slug: string, count: number) {
  return blogs.filter((post) => post.slug !== slug).slice(0, count);
}

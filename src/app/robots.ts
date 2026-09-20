import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.devlogix.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The live site blocked /_next/image/ paths, hiding 94 image URLs from crawlers — do not
      // repeat that here. /preview/ is an internal component gallery, not site content.
      disallow: ["/api/", "/preview/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

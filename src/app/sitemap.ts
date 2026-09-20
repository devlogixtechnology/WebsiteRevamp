import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.devlogix.com";

const STATIC_ROUTES = [
  "",
  "/about",
  "/industries",
  "/services",
  "/services/artificial-intelligence",
  "/services/software-development",
  "/services/ui-ux-design",
  "/services/cloud-solutions",
  "/services/digital-transformation",
  "/blog",
  "/contact",
  "/careers",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}

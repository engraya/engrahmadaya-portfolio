import type { MetadataRoute } from "next";
import { projects } from "@lib/constants";
import { getSiteUrl } from "@lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  const entries: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/certificates`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  for (const project of projects) {
    entries.push({
      url: `${base}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}

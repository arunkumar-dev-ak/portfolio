import { MetadataRoute } from "next";

const DOMAIN_URL =
  process.env.NEXT_PUBLIC_DOMAIN_URL || "https://arunkumar-dev.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

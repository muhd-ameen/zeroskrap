import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    {
      userAgent: "Googlebot",
      allow: "/",
    },
  ],
  sitemap: `${SITE.url}/sitemap.xml`,
  host: SITE.url,
});

export default robots;

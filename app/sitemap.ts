import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

/** Marketing homepage plus the standalone booking page. */
const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: SITE.url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: `${SITE.url}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
];

export default sitemap;

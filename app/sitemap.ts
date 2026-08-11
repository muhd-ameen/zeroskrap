import type { MetadataRoute } from "next";
import { ASSETS } from "@/lib/assets";
import { MATERIALS } from "@/lib/data";
import {
  absoluteUrl,
  CONTENT_UPDATED_AT,
  ROUTES,
  SHARE_IMAGE,
} from "@/lib/seo";

/** Marketing routes for crawlers — keep in sync with app pages via ROUTES. */
const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date(CONTENT_UPDATED_AT);

  return ROUTES.map((route) => {
    const url = absoluteUrl(route.path);
    const entry: MetadataRoute.Sitemap[number] = {
      url,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    };

    if (route.path === "/") {
      entry.images = [SHARE_IMAGE.url, absoluteUrl(ASSETS.heroPoster)];
    }

    if (route.path === "/materials") {
      entry.images = MATERIALS.filter((m) => m.image).map((m) =>
        absoluteUrl(m.image!),
      );
    }

    return entry;
  });
};

export default sitemap;

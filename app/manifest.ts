import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const manifest = (): MetadataRoute.Manifest => ({
  name: SITE.name,
  short_name: SITE.name,
  description: SITE.description,
  start_url: "/",
  display: "standalone",
  background_color: "#f8faf9",
  theme_color: "#22c55e",
  lang: "en-MU",
  categories: ["business", "utilities"],
  icons: [
    {
      src: "/icon.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/apple-icon.png",
      sizes: "180x180",
      type: "image/png",
      purpose: "any",
    },
  ],
});

export default manifest;

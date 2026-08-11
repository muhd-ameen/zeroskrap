import type { Metadata } from "next";
import { SITE } from "./constants";

/** Absolute URL helper — always rooted on SITE.url. */
export const absoluteUrl = (path = "/"): string => {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? SITE.url : `${SITE.url}${normalized}`;
};

/** Public marketing routes included in the sitemap. */
export const ROUTES = [
  {
    path: "/",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/materials",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: "/contact",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
] as const;

/** Shared Open Graph / Twitter card — keep under ~300 KB for WhatsApp. */
export const SHARE_IMAGE = {
  path: "/og-image.jpg",
  url: absoluteUrl("/og-image.jpg"),
  width: 1200,
  height: 630,
  alt: `${SITE.name} - ${SITE.tagline}`,
  type: "image/jpeg",
} as const;

/** Bump when content meaningfully changes so sitemap lastmod stays honest. */
export const CONTENT_UPDATED_AT = "2026-08-11";

export const DEFAULT_KEYWORDS = [
  "scrap buyers Mauritius",
  "sell scrap Mauritius",
  "scrap metal Mauritius",
  "recycling Mauritius",
  "copper scrap price Mauritius",
  "e-waste collection Mauritius",
  "site clearance Mauritius",
  "free scrap pickup Mauritius",
  "cash for scrap Mauritius",
  "ZeroSkrap",
] as const;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  /** Overrides the default share title (often longer than the document title). */
  ogTitle?: string;
};

/** Builds consistent Metadata for standalone marketing pages. */
export const buildPageMetadata = ({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  ogTitle,
}: PageMetaInput): Metadata => {
  const url = absoluteUrl(path);
  const socialTitle = ogTitle ?? `${title} | ${SITE.name}`;

  return {
    title,
    description,
    keywords: [...keywords],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: socialTitle,
      description,
      images: [
        {
          url: SHARE_IMAGE.path,
          width: SHARE_IMAGE.width,
          height: SHARE_IMAGE.height,
          type: SHARE_IMAGE.type,
          alt: SHARE_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: SHARE_IMAGE.path, alt: SHARE_IMAGE.alt }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
};

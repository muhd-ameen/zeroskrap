import { ASSETS } from "./assets";
import { CONTACT, SITE } from "./constants";
import { MATERIALS } from "./data";
import { absoluteUrl, SHARE_IMAGE } from "./seo";

/**
 * JSON-LD graph for Google local + site understanding.
 * Keep fields in sync with lib/constants.ts.
 */
export const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: "en-MU",
      publisher: { "@id": `${SITE.url}/#business` },
    },
    {
      "@type": ["LocalBusiness", "RecyclingCenter"],
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      legalName: SITE.name,
      slogan: SITE.tagline,
      description: SITE.description,
      url: SITE.url,
      image: [SHARE_IMAGE.url, absoluteUrl(ASSETS.logoMark)],
      logo: absoluteUrl(ASSETS.logoMark),
      telephone: CONTACT.phonePrimary.display,
      email: CONTACT.email,
      priceRange: "$$",
      currenciesAccepted: "MUR",
      paymentAccepted: "Cash, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT.address.line1,
        addressLocality: CONTACT.address.line2,
        addressCountry: "MU",
      },
      areaServed: {
        "@type": "Country",
        name: "Mauritius",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      sameAs: [CONTACT.instagram],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: CONTACT.phonePrimary.display,
          contactType: "customer service",
          areaServed: "MU",
          availableLanguage: ["English", "French", "Creole"],
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Scrap materials we buy",
        itemListElement: MATERIALS.map((material, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: `Buy ${material.name}`,
            description: material.description,
            url: absoluteUrl("/materials"),
          },
        })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/#homepage`,
      url: SITE.url,
      name: `${SITE.name} - ${SITE.tagline} | Scrap Buyers in Mauritius`,
      description: SITE.description,
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/#business` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: SHARE_IMAGE.url,
      },
    },
  ],
} as const;

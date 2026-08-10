import { CONTACT, SITE } from "./constants";

/**
 * LocalBusiness structured data. Google uses this for the knowledge panel and
 * local results - keep it in sync with lib/constants.ts.
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  slogan: SITE.tagline,
  description: SITE.description,
  url: SITE.url,
  telephone: CONTACT.phonePrimary.display,
  email: CONTACT.email,
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
} as const;

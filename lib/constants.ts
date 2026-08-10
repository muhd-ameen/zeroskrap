/* --------------------------------------------------------------------------
   Site-wide constants.
   Business details live here so a single edit updates every section.
   -------------------------------------------------------------------------- */

export const SITE = {
  name: "ZeroSkrap",
  tagline: "From Scrap to Cash",
  positioning: "Mauritius' trusted scrap buyer and recycling partner",
  description:
    "ZeroSkrap buys scrap metal, e-waste, appliances and industrial waste across Mauritius. Free pickup, accurate digital weighing and instant payment.",
  url: "https://zeroskrap.com",
  locale: "en_MU",
} as const;

export const CONTACT = {
  phonePrimary: {
    display: "+230 5792 0756",
    href: "tel:+23057920756",
  },
  /* PLACEHOLDER number - replace with the real second line. */
  phoneSecondary: {
    display: "+230 5000 0000",
    href: "tel:+23050000000",
  },
  /* International format, digits only - used to build wa.me links. */
  whatsappNumber: "23057920756",
  /* PLACEHOLDER email. */
  email: "hello@zeroskrap.mu",
  /* Derived from the @zero.skrap handle - confirm the profile URL before launch. */
  instagramHandle: "@zero.skrap",
  instagram: "https://www.instagram.com/zero.skrap",
  address: {
    line1: "Beau Climat",
    line2: "La Flora",
    country: "Mauritius",
    full: "Beau Climat, La Flora, Mauritius",
  },
  hours: "Mon - Sat · 8:00 - 18:00",
  coverage: "Pickup across all of Mauritius",
} as const;

/**
 * Builds a WhatsApp deep link with an optional pre-filled message.
 * Works on both mobile and WhatsApp Web.
 */
export const whatsappLink = (message?: string): string => {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const WHATSAPP_MESSAGES = {
  general: `Hi ${SITE.name}, I would like to book a scrap pickup.`,
  quote: `Hi ${SITE.name}, I would like a quote for my scrap.`,
  callback: `Hi ${SITE.name}, please call me back about a scrap pickup.`,
} as const;

export type Region = {
  id: string;
  label: string;
  flag: string;
  available: boolean;
  /** Shown when the region cannot be selected (e.g. Soon / Active). */
  badge?: "Soon" | "Active";
};

/** Service regions shown in the navbar. Unavailable entries stay visible but disabled. */
export const REGIONS: readonly Region[] = [
  { id: "mauritius", label: "Mauritius", flag: "🇲🇺", available: true },
  {
    id: "kerala",
    label: "Kerala, India",
    flag: "🇮🇳",
    available: false,
    badge: "Active",
  },
  {
    id: "uae",
    label: "UAE",
    flag: "🇦🇪",
    available: false,
    badge: "Soon",
  },
] as const;

export type NavLink = {
  label: string;
  href: string;
};

/**
 * Primary navigation. Hash links are root-relative so they resolve from any
 * route (/contact, /materials). Materials and Contact are standalone pages;
 * About and Services still jump to homepage sections.
 */
export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Materials", href: "/materials" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
] as const;

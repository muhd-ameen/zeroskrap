import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { CONTACT, SITE } from "@/lib/constants";

const DESCRIPTION = `Book a scrap pickup or request a site clearance anywhere in Mauritius. Send your details and ${SITE.name} confirms a time on WhatsApp - free pickup, payment on the spot.`;

export const metadata: Metadata = {
  title: "Contact & Book a Pickup",
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: `${SITE.url}/contact`,
    siteName: SITE.name,
    title: `Contact ${SITE.name} - Book a Scrap Pickup in Mauritius`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${SITE.name} - Book a Scrap Pickup in Mauritius`,
    description: DESCRIPTION,
  },
  other: {
    "contact:phone_number": CONTACT.phonePrimary.display,
  },
};

const ContactPage = () => <Contact />;

export default ContactPage;

import { Contact } from "@/components/sections/Contact";
import { CONTACT, SITE } from "@/lib/constants";
import { DEFAULT_KEYWORDS, buildPageMetadata } from "@/lib/seo";

const DESCRIPTION = `Book a scrap pickup or request a site clearance anywhere in Mauritius. Send your details and ${SITE.name} confirms a time on WhatsApp - free pickup, payment on the spot.`;

export const metadata = {
  ...buildPageMetadata({
    title: "Contact & Book a Pickup",
    description: DESCRIPTION,
    path: "/contact",
    ogTitle: `Contact ${SITE.name} - Book a Scrap Pickup in Mauritius`,
    keywords: [
      ...DEFAULT_KEYWORDS,
      "book scrap pickup Mauritius",
      "scrap collection WhatsApp Mauritius",
    ],
  }),
  other: {
    "contact:phone_number": CONTACT.phonePrimary.display,
  },
};

const ContactPage = () => <Contact />;

export default ContactPage;

import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { Process } from "@/components/sections/Process";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Materials } from "@/components/sections/Materials";
import { Clearance } from "@/components/sections/Clearance";
import { Audiences } from "@/components/sections/Audiences";
import { Journey } from "@/components/sections/Journey";
import { Sustainability } from "@/components/sections/Sustainability";
import { SITE } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

/**
 * Section order is deliberate: prove trust, then show the offer. Booking lives
 * on /contact. Backgrounds alternate canvas / white so each block separates
 * without hard dividers.
 */
export const metadata: Metadata = {
  ...buildPageMetadata({
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
    path: "/",
    ogTitle: `${SITE.name} - ${SITE.tagline}`,
  }),
  // Bypass the root `%s | ZeroSkrap` template so the brand isn't doubled.
  title: {
    absolute: `${SITE.name} - ${SITE.tagline} | Scrap Buyers in Mauritius`,
  },
};

const HomePage = () => (
  <>
    <Hero />
    <TrustBanner />
    <Process />
    <WhyChoose />
    <Materials />
    <Clearance />
    <Audiences />
    <Journey />
    <Sustainability />
  </>
);

export default HomePage;

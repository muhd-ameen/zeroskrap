import { Hero } from "@/components/sections/Hero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { Process } from "@/components/sections/Process";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Materials } from "@/components/sections/Materials";
import { Clearance } from "@/components/sections/Clearance";
import { Audiences } from "@/components/sections/Audiences";
import { Journey } from "@/components/sections/Journey";
import { Sustainability } from "@/components/sections/Sustainability";

/**
 * Section order is deliberate: prove trust, then show the offer. Booking lives
 * on /contact. Backgrounds alternate canvas / white so each block separates
 * without hard dividers.
 */
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

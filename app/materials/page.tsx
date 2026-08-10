import type { Metadata } from "next";
import { Materials } from "@/components/sections/Materials";
import { SITE } from "@/lib/constants";

const DESCRIPTION =
  "Scrap materials ZeroSkrap buys across Mauritius - iron, steel, copper, aluminium, e-waste, appliances, plastic, paper and industrial waste. Free pickup and cash on the spot.";

export const metadata: Metadata = {
  title: "Materials We Buy",
  description: DESCRIPTION,
  alternates: { canonical: "/materials" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: `${SITE.url}/materials`,
    siteName: SITE.name,
    title: `Materials We Buy | ${SITE.name}`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `Materials We Buy | ${SITE.name}`,
    description: DESCRIPTION,
  },
};

const MaterialsPage = () => <Materials />;

export default MaterialsPage;

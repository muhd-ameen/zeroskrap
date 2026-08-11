import { Materials } from "@/components/sections/Materials";
import { MATERIALS } from "@/lib/data";
import { DEFAULT_KEYWORDS, buildPageMetadata } from "@/lib/seo";

const DESCRIPTION =
  "Scrap materials ZeroSkrap buys across Mauritius - iron, steel, copper, aluminium, e-waste, appliances, plastic, paper and industrial waste. Free pickup and cash on the spot.";

export const metadata = buildPageMetadata({
  title: "Materials We Buy",
  description: DESCRIPTION,
  path: "/materials",
  ogTitle: `Materials We Buy | ZeroSkrap`,
  keywords: [
    ...DEFAULT_KEYWORDS,
    ...MATERIALS.map((material) => `${material.name} Mauritius`),
  ],
});

const MaterialsPage = () => <Materials />;

export default MaterialsPage;

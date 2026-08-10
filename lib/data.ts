/* --------------------------------------------------------------------------
   Structured content for the homepage sections.
   Components render this data - copy changes never require touching JSX.
   `icon` values map to a Lucide component in components/ui/Icon.tsx.
   -------------------------------------------------------------------------- */

import type { IconName } from "@/components/ui/Icon";

export type Highlight = {
  label: string;
  icon: IconName;
};

export type TrustPoint = {
  title: string;
  description: string;
  icon: IconName;
};

export type ProcessStepItem = {
  step: string;
  title: string;
  description: string;
  icon: IconName;
};

export type Feature = {
  title: string;
  description: string;
  icon: IconName;
};

export type Material = {
  name: string;
  slug: string;
  description: string;
  icon: IconName;
  /**
   * Real product photo. While undefined the card renders its icon placeholder
   * at the exact same aspect ratio, so adding a path changes nothing else.
   * Example: "/images/materials/copper.webp"
   */
  image?: string;
};

export type ClearanceService = {
  title: string;
  description: string;
  icon: IconName;
};

export type Audience = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: readonly string[];
  image: string;
  imageAlt: string;
  /** Intrinsic pixel size of `image`, so the layout reserves the right box. */
  imageWidth: number;
  imageHeight: number;
};

export type JourneyStep = {
  number: string;
  title: string;
  description: string;
  icon: IconName;
};

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const HERO_HIGHLIGHTS: readonly Highlight[] = [
  { label: "Free pickup", icon: "truck" },
  { label: "Accurate digital weighing", icon: "scale" },
  { label: "Instant payment", icon: "wallet" },
  { label: "Licensed scrap yard", icon: "shield" },
] as const;

/* -------------------------------------------------------------------------- */
/* Trust banner                                                                */
/* -------------------------------------------------------------------------- */

export const TRUST_POINTS: readonly TrustPoint[] = [
  {
    title: "Accurate digital weighing",
    description: "Calibrated scales, weighed in front of you. Every time.",
    icon: "scale",
  },
  {
    title: "Licensed scrap yard",
    description: "A registered operation with proper handling and disposal.",
    icon: "shield",
  },
  {
    title: "Instant payment",
    description: "Cash or transfer on the spot, before our truck leaves.",
    icon: "wallet",
  },
  {
    title: "Best market prices",
    description: "Rates reviewed against the local market, quoted upfront.",
    icon: "trending",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Three-step pickup flow                                                      */
/* -------------------------------------------------------------------------- */

export const PROCESS_STEPS: readonly ProcessStepItem[] = [
  {
    step: "Step 1",
    title: "Book Pickup",
    description:
      "Send a WhatsApp or give us a call. Tell us what you have and where you are.",
    icon: "calendar",
  },
  {
    step: "Step 2",
    title: "We Collect & Weigh",
    description:
      "Our team arrives on time, loads everything and weighs it in front of you.",
    icon: "truck",
  },
  {
    step: "Step 3",
    title: "Get Paid Instantly",
    description:
      "You are paid on the spot - no waiting, no deductions, no surprises.",
    icon: "wallet",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Why choose ZeroSkrap                                                        */
/* -------------------------------------------------------------------------- */

export const WHY_CHOOSE: readonly Feature[] = [
  {
    title: "Best Prices",
    description: "Live local rates, quoted before we load.",
    icon: "trending",
  },
  {
    title: "Instant Payment",
    description: "Cash or bank transfer the moment we weigh.",
    icon: "wallet",
  },
  {
    title: "Digital Weighing",
    description: "Calibrated scales on site. You see the reading.",
    icon: "scale",
  },
  {
    title: "Licensed Yard",
    description: "Registered, with paperwork for every pickup.",
    icon: "shield",
  },
  {
    title: "Free Pickup",
    description: "Doorstep collection anywhere in Mauritius.",
    icon: "truck",
  },
  {
    title: "Trained Crew",
    description: "On time, careful, and tidy when we leave.",
    icon: "team",
  },
  {
    title: "Eco Recycling",
    description: "Everything sorted and put back into use.",
    icon: "recycle",
  },
  {
    title: "Safe Disposal",
    description: "Batteries, e-waste and oils handled to standard.",
    icon: "leaf",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Materials we buy                                                            */
/* -------------------------------------------------------------------------- */

export const MATERIALS: readonly Material[] = [
  {
    name: "Iron Scrap",
    slug: "iron",
    description: "Gates, grills, beams, rods",
    icon: "iron",
    image: "/images/materials/iron.webp",
  },
  {
    name: "Steel Scrap",
    slug: "steel",
    description: "Sheets, offcuts, structures",
    icon: "steel",
    image: "/images/materials/steel.webp",
  },
  {
    name: "Stainless Steel",
    slug: "stainless",
    description: "Sinks, tanks, kitchen units",
    icon: "stainless",
    image: "/images/materials/stainless.webp",
  },
  {
    name: "Aluminium",
    slug: "aluminium",
    description: "Frames, cans, radiators",
    icon: "aluminium",
    image: "/images/materials/aluminium.webp",
  },
  {
    name: "Copper",
    slug: "copper",
    description: "Pipes, coils, bare wire",
    icon: "copper",
    image: "/images/materials/copper.webp",
  },
  {
    name: "Brass",
    slug: "brass",
    description: "Taps, fittings, valves",
    icon: "brass",
    image: "/images/materials/brass.webp",
  },
  {
    name: "Electric Motors",
    slug: "electric-motors",
    description: "Pumps, compressors, fans",
    icon: "motor",
    image: "/images/materials/electric-motors.webp",
  },
  {
    name: "Car Batteries",
    slug: "car-batteries",
    description: "Lead-acid, all sizes",
    icon: "battery",
    image: "/images/materials/car-batteries.webp",
  },
  {
    name: "E-Waste",
    slug: "e-waste",
    description: "Computers, boards, phones",
    icon: "ewaste",
    image: "/images/materials/e-waste.webp",
  },
  {
    name: "Cables & Wires",
    slug: "cables-wires",
    description: "Insulated and armoured",
    icon: "cable",
    image: "/images/materials/cables-wires.webp",
  },
  {
    name: "Plastic Waste",
    slug: "plastic",
    description: "Drums, crates, bottles",
    icon: "plastic",
    image: "/images/materials/plastic.webp",
  },
  {
    name: "Paper & Cardboard",
    slug: "paper-cardboard",
    description: "Cartons, office paper",
    icon: "paper",
    image: "/images/materials/paper-cardboard.webp",
  },
  {
    name: "Industrial Waste",
    slug: "industrial-waste",
    description: "Factory and workshop scrap",
    icon: "factory",
    image: "/images/materials/industrial-waste.webp",
  },
  {
    name: "Household Appliances",
    slug: "appliances",
    description: "Fridges, washers, ovens",
    icon: "appliance",
    image: "/images/materials/appliances.webp",
  },
  {
    name: "Furniture",
    slug: "furniture",
    description: "Metal desks, cabinets, beds",
    icon: "furniture",
    image: "/images/materials/furniture.webp",
  },
  {
    name: "Construction Scrap",
    slug: "construction",
    description: "Site metal, rebar, roofing",
    icon: "site",
    image: "/images/materials/construction-scrap.webp",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Section / site clearance                                                    */
/* -------------------------------------------------------------------------- */

export const CLEARANCE_SERVICES: readonly ClearanceService[] = [
  {
    title: "Factories",
    description: "Machinery, production lines, plant scrap.",
    icon: "factory",
  },
  {
    title: "Warehouses",
    description: "Racking, pallets and surplus stock.",
    icon: "warehouse",
  },
  {
    title: "Offices",
    description: "Desks, IT gear, end-of-lease strip-outs.",
    icon: "office",
  },
  {
    title: "Sites",
    description: "Construction leftovers, formwork, debris.",
    icon: "site",
  },
  {
    title: "Households",
    description: "Garages, yards and old appliances.",
    icon: "household",
  },
  {
    title: "Shops & Hotels",
    description: "Fit-out changes, refits and closures.",
    icon: "commercial",
  },
  {
    title: "Full Sections",
    description: "Emptied, swept and handed back clean.",
    icon: "section",
  },
] as const;

export const CLEARANCE_STATEMENT =
  "Loading, labour, transport and disposal - all handled.";

/* -------------------------------------------------------------------------- */
/* Households vs businesses                                                    */
/* -------------------------------------------------------------------------- */

export const AUDIENCES: readonly Audience[] = [
  {
    id: "households",
    eyebrow: "For Households",
    title: "Clear the clutter, get paid at your door",
    description:
      "Old appliances, a garage full of metal, or a house you are emptying - we come to you and settle on the spot.",
    points: [
      "Doorstep pickup",
      "Accurate digital weighing",
      "Instant payment",
      "Safe & verified team",
      "Flexible scheduling",
    ],
    image: "/images/sections/household.webp",
    imageAlt:
      "Household scrap gathered at a doorstep for pickup - fridge, fan, aluminium pots, copper wire and a filled sack on a digital scale",
    imageWidth: 1296,
    imageHeight: 1002,
  },
  {
    id: "businesses",
    eyebrow: "For Businesses",
    title: "A recycling partner your operation can plan around",
    description:
      "Factories, warehouses, workshops and contractors get scheduled collections, proper paperwork and rates that hold.",
    points: [
      "Bulk scrap collection",
      "Formal documentation",
      "Competitive pricing",
      "Sustainability reporting support",
      "Industrial pickup scheduling",
    ],
    image: "/images/sections/business.webp",
    imageAlt:
      "Warehouse loading bay with palletised copper coils, banded steel offcuts, a stillage cage and a green skip bin ready for collection",
    imageWidth: 1296,
    imageHeight: 890,
  },
] as const;

/* -------------------------------------------------------------------------- */
/* How ZeroSkrap works - the material journey                                  */
/* -------------------------------------------------------------------------- */

export const JOURNEY_STEPS: readonly JourneyStep[] = [
  {
    number: "01",
    title: "Book a Pickup",
    description: "Tell us what you have.",
    icon: "calendar",
  },
  {
    number: "02",
    title: "We Collect & Weigh",
    description: "We load, weigh and pay you.",
    icon: "truck",
  },
  {
    number: "03",
    title: "Sorted & Processed",
    description: "Separated and graded at our yard.",
    icon: "sort",
  },
  {
    number: "04",
    title: "Back Into Industry",
    description: "Reused by manufacturers, not landfilled.",
    icon: "recycle",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Sustainability                                                              */
/* -------------------------------------------------------------------------- */

export const SUSTAINABILITY_POINTS: readonly Feature[] = [
  {
    title: "Less landfill",
    description: "Kept out of Mare Chicose.",
    icon: "leaf",
  },
  {
    title: "Circular loop",
    description: "Back to industry as raw material.",
    icon: "recycle",
  },
  {
    title: "Handled right",
    description: "Batteries and e-waste, never dumped.",
    icon: "shield",
  },
  {
    title: "Local impact",
    description: "Mauritian crews and yards.",
    icon: "globe",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Footer directories                                                          */
/* -------------------------------------------------------------------------- */

export const FOOTER_MATERIALS: readonly string[] = [
  "Iron & steel scrap",
  "Copper & brass",
  "Aluminium",
  "Cables & electric motors",
  "Car batteries",
  "E-waste & appliances",
  "Paper & cardboard",
  "Plastic waste",
] as const;

export const FOOTER_SERVICES: readonly string[] = [
  "Household scrap pickup",
  "Bulk & industrial collection",
  "Factory & warehouse clearance",
  "Office clearance",
  "Site & section clearance",
  "Old furniture removal",
] as const;

/* -------------------------------------------------------------------------- */
/* Contact form options                                                        */
/* -------------------------------------------------------------------------- */

export const MATERIAL_OPTIONS: readonly string[] = [
  ...MATERIALS.map((material) => material.name),
  "Mixed scrap / not sure",
] as const;

export const QUANTITY_OPTIONS: readonly string[] = [
  "Under 50 kg",
  "50 - 200 kg",
  "200 - 500 kg",
  "500 kg - 1 tonne",
  "Over 1 tonne",
  "Not sure yet",
] as const;

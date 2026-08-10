/* --------------------------------------------------------------------------
   Asset registry - every image path used by the site.

   To swap an asset, drop the new file into `public/` and change the path here
   only; no component or layout needs to be touched. Keep the aspect ratios
   noted next to each entry so spacing stays identical after the swap.

   Material photos are the exception: they live on each entry in
   `lib/data.ts` (`MATERIALS[].image`). Until a path is set, the card renders
   an icon placeholder at the same aspect ratio.
   -------------------------------------------------------------------------- */

export const ASSETS = {
  /** REAL ASSET - ZeroSkrap mark, transparent PNG, square 1:1. */
  logoMark: "/logo/zeroskrap-mark.png",

  /** REAL ASSET - industrial weighbridge with scrap truck, landscape ~1.12:1. */
  trustWeighing: "/images/trust/scale.webp",

  /** REAL ASSET - branded collection truck, transparent WebP, landscape ~1.73:1. */
  truck: "/images/sections/truck.webp",

  /** REAL ASSET - circular-economy diorama, transparent WebP, landscape ~1.22:1. */
  sustainability: "/images/sections/sustainability.webp",
} as const;

export type AssetKey = keyof typeof ASSETS;

import Image from "next/image";

/**
 * Decorative hero flourish: two clusters of material photos, three a side.
 * Purely ornamental - the layer is aria-hidden and only shows from xl up,
 * where there is empty canvas either side of the centred hero column.
 */

type FloatTile = {
  /** File in public/images/materials, without extension. */
  slug: string;
  /** Position and rotation inside the 15rem x 24rem cluster box. */
  position: string;
};

const LEFT_TILES: readonly FloatTile[] = [
  { slug: "copper", position: "left-[56px] top-[16px] size-[104px] -rotate-8" },
  {
    slug: "car-batteries",
    position: "left-[4px] top-[158px] size-[92px] rotate-9",
  },
  {
    slug: "cables-wires",
    position: "left-[80px] top-[266px] size-[104px] -rotate-5",
  },
];

const RIGHT_TILES: readonly FloatTile[] = [
  { slug: "brass", position: "left-[80px] top-[22px] size-[104px] rotate-7" },
  {
    slug: "e-waste",
    position: "left-[134px] top-[166px] size-[92px] -rotate-9",
  },
  { slug: "plastic", position: "left-[36px] top-[270px] size-[104px] rotate-6" },
];

const Cluster = ({
  tiles,
  blobs,
  className,
}: {
  tiles: readonly FloatTile[];
  blobs: readonly string[];
  className: string;
}) => (
  <div className={`absolute h-[384px] w-[240px] ${className}`}>
    {blobs.map((blob) => (
      <span key={blob} className={`absolute rounded-full bg-brand-100 ${blob}`} />
    ))}

    {tiles.map((tile) => (
      <span
        key={tile.slug}
        className={`absolute animate-fade-in overflow-hidden rounded-card border border-brand-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] ${tile.position}`}
      >
        <Image
          src={`/images/materials/${tile.slug}.webp`}
          alt=""
          width={208}
          height={208}
          sizes="104px"
          className="size-full object-cover"
        />
      </span>
    ))}
  </div>
);

export const HeroFloats = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block">
    <Cluster
      className="left-[1%] top-52 2xl:left-[4%]"
      tiles={LEFT_TILES}
      blobs={[
        "left-[2px] top-[14px] size-[140px] opacity-45",
        "left-[106px] top-[238px] size-[124px] opacity-35",
      ]}
    />
    <Cluster
      className="right-[1%] top-60 2xl:right-[4%]"
      tiles={RIGHT_TILES}
      blobs={[
        "left-[98px] top-[26px] size-[140px] opacity-45",
        "left-[7px] top-[238px] size-[120px] opacity-35",
      ]}
    />
  </div>
);

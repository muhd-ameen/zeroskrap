import Image from "next/image";
import { Icon, type IconName } from "./Icon";

type MaterialCardProps = {
  name: string;
  description?: string;
  icon: IconName;
  /** Real photo. Falls back to the icon placeholder while undefined. */
  image?: string;
};

/**
 * Material tile: square media area on top, name and short description below.
 * The media area keeps its ratio whether it holds a photo or the placeholder,
 * so dropping real images in never shifts the grid.
 */
export const MaterialCard = ({
  name,
  description,
  icon,
  image,
}: MaterialCardProps) => (
  <li className="group flex flex-col overflow-hidden rounded-card border border-line bg-white transition duration-300 ease-soft hover:-translate-y-1 hover:border-brand-200">
    <div className="relative aspect-square w-full bg-[linear-gradient(140deg,#f8faf9_0%,#f0fdf4_45%,#dcfce7_100%)]">
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
      ) : (
        <span className="absolute inset-0 grid place-items-center text-brand-500 transition-transform duration-300 ease-soft group-hover:scale-110">
          <Icon name={icon} className="size-14 md:size-16" strokeWidth={1.4} />
        </span>
      )}
    </div>

    <div className="flex flex-1 flex-col px-4 py-4 md:px-5 md:py-5">
      <h3 className="text-[0.9375rem] font-semibold leading-snug md:text-base">
        {name}
      </h3>
      {description && (
        <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted md:text-sm">
          {description}
        </p>
      )}
    </div>
  </li>
);

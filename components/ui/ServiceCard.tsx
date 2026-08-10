import { cn } from "@/lib/utils";
import { Card } from "./Card";
import { Icon, type IconName } from "./Icon";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: IconName;
  className?: string;
};

/**
 * Clearance service tile - flatter than FeatureCard so a grid of services
 * reads as a list of capabilities rather than a wall of highlights.
 */
export const ServiceCard = ({
  title,
  description,
  icon,
  className,
}: ServiceCardProps) => (
  <Card
    as="li"
    interactive
    className={cn(
      "group flex flex-col gap-3 p-4 sm:flex-row sm:gap-4 sm:p-5 md:p-6",
      className,
    )}
  >
    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-300 ease-soft group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500 sm:size-11">
      <Icon name={icon} className="size-5 sm:size-[1.375rem]" />
    </span>

    <div>
      <h3 className="text-sm font-semibold leading-snug sm:text-base">
        {title}
      </h3>
      <p className="mt-1.5 hidden text-pretty text-sm leading-relaxed text-muted sm:block">
        {description}
      </p>
    </div>
  </Card>
);

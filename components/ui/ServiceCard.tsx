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
    className={cn("group flex gap-4 p-5 md:p-6", className)}
  >
    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-300 ease-soft group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500">
      <Icon name={icon} className="size-[1.375rem]" />
    </span>

    <div>
      <h3 className="text-base font-semibold leading-snug">{title}</h3>
      <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted">
        {description}
      </p>
    </div>
  </Card>
);

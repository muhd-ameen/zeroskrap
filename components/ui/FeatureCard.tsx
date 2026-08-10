import { Card } from "./Card";
import { Icon, type IconName } from "./Icon";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: IconName;
};

/** Icon + title + description. Used for trust features and services. */
export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <Card as="li" interactive className="group flex flex-col p-4 sm:p-5 md:p-6">
    <span className="grid size-10 place-items-center rounded-xl bg-brand-100 text-brand-600 transition-colors duration-300 ease-soft group-hover:bg-brand-500 group-hover:text-white sm:size-11">
      <Icon name={icon} className="size-5 sm:size-[1.375rem]" />
    </span>

    <h3 className="mt-3 text-balance text-sm font-semibold leading-snug sm:mt-4 sm:text-base">
      {title}
    </h3>

    <p className="mt-1.5 hidden text-pretty text-sm leading-relaxed text-muted sm:block">
      {description}
    </p>
  </Card>
);

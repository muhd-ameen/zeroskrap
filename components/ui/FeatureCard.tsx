import { Card } from "./Card";
import { Icon, type IconName } from "./Icon";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: IconName;
};

/** Icon + title + description. Used for trust features and services. */
export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <Card as="li" interactive className="group flex flex-col p-5 md:p-6">
    <span className="grid size-11 place-items-center rounded-xl bg-brand-100 text-brand-600 transition-colors duration-300 ease-soft group-hover:bg-brand-500 group-hover:text-white">
      <Icon name={icon} className="size-[1.375rem]" />
    </span>

    <h3 className="mt-4 text-balance text-base font-semibold leading-snug">
      {title}
    </h3>

    <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted">
      {description}
    </p>
  </Card>
);

import { Icon, type IconName } from "./Icon";

type ProcessStepProps = {
  index: number;
  title: string;
  icon: IconName;
};

/**
 * Numbered process marker: index label, solid icon badge, and title.
 * Distinct from concentric-disc / soft-ring patterns used elsewhere.
 */
export const ProcessStep = ({ index, title, icon }: ProcessStepProps) => {
  const label = String(index).padStart(2, "0");

  return (
    <li className="relative flex flex-col items-center text-center">
      <span className="text-sm font-semibold tracking-[0.14em] text-brand-600">
        {label}
      </span>

      <span className="relative z-10 mt-4 grid size-16 place-items-center rounded-2xl bg-brand-500 text-white shadow-soft ring-8 ring-white md:size-[4.5rem]">
        <Icon name={icon} className="size-7 md:size-8" />
      </span>

      <h3 className="mt-6 text-xl font-semibold lg:text-2xl">{title}</h3>
    </li>
  );
};

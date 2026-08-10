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
      <span className="text-[0.6875rem] font-semibold tracking-[0.14em] text-brand-600 sm:text-sm">
        {label}
      </span>

      <span className="relative z-10 mt-3 grid size-12 place-items-center rounded-xl bg-brand-500 text-white shadow-soft ring-4 ring-white sm:mt-4 sm:size-16 sm:rounded-2xl sm:ring-8 md:size-[4.5rem]">
        <Icon name={icon} className="size-5 sm:size-7 md:size-8" />
      </span>

      <h3 className="mt-4 text-sm font-semibold leading-snug sm:mt-6 sm:text-xl lg:text-2xl">
        {title}
      </h3>
    </li>
  );
};

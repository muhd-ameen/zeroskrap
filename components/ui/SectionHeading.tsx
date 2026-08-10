import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: ReactNode;
  eyebrow?: string;
  description?: string;
  align?: "center" | "left";
  id?: string;
  className?: string;
};

export const SectionHeading = ({
  title,
  eyebrow,
  description,
  align = "center",
  id,
  className,
}: SectionHeadingProps) => (
  <header
    className={cn(
      "flex flex-col gap-4",
      align === "center" ? "items-center text-center" : "items-start text-left",
      className,
    )}
  >
    {eyebrow && (
      <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-800">
        {eyebrow}
      </span>
    )}

    <h2
      id={id}
      className="max-w-3xl text-[1.875rem] font-bold leading-[1.15] md:text-[2.5rem] lg:text-[2.75rem]"
    >
      {title}
    </h2>

    {description && (
      <p
        className={cn(
          "max-w-2xl text-base leading-relaxed text-muted md:text-lg",
          align === "center" && "mx-auto",
        )}
      >
        {description}
      </p>
    )}
  </header>
);

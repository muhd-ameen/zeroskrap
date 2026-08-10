import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Adds the lift + green border tint on hover. */
  interactive?: boolean;
  as?: "div" | "article" | "li";
};

/** White elevated surface used for materials, services, trust and rates. */
export const Card = ({
  children,
  className,
  interactive = false,
  as: Tag = "div",
}: CardProps) => (
  <Tag
    className={cn(
      "rounded-card border border-line bg-white p-6 md:p-8",
      interactive &&
        "transition duration-300 ease-soft hover:-translate-y-1 hover:border-brand-200",
      className,
    )}
  >
    {children}
  </Tag>
);

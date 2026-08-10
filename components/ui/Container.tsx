import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Horizontal rhythm for the whole site: 1200px max width with
 * 24 / 48 / 80px gutters (mobile / tablet / desktop).
 */
export const Container = ({ children, className }: ContainerProps) => (
  <div
    className={cn(
      "mx-auto w-full max-w-[1200px] px-6 md:px-12 lg:px-20",
      className,
    )}
  >
    {children}
  </div>
);

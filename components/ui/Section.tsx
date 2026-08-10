import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionSize = "sm" | "md" | "lg";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Applied to the inner Container. */
  innerClassName?: string;
  size?: SectionSize;
  /** Render children edge-to-edge, without the Container wrapper. */
  bleed?: boolean;
  "aria-labelledby"?: string;
};

const SIZES: Record<SectionSize, string> = {
  sm: "py-14 md:py-20",
  md: "py-16 md:py-24 lg:py-32",
  lg: "py-20 md:py-28 lg:py-36",
};

/** Vertical rhythm for the whole site. */
export const Section = ({
  children,
  id,
  className,
  innerClassName,
  size = "md",
  bleed = false,
  ...rest
}: SectionProps) => (
  <section id={id} className={cn(SIZES[size], className)} {...rest}>
    {bleed ? children : <Container className={innerClassName}>{children}</Container>}
  </section>
);

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "dark" | "ghost" | "light" | "inverse";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-btn font-medium leading-none transition duration-200 ease-soft active:scale-[0.98] whitespace-nowrap";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-brand-500 text-white hover:bg-brand-600",
  secondary:
    "bg-white text-ink border border-line hover:bg-brand-50 hover:border-brand-200",
  dark: "bg-ink text-white hover:bg-ink/90",
  ghost: "text-ink hover:bg-brand-50",
  light: "bg-white/10 text-white border border-white/15 hover:bg-white/20",
  /** Solid white - for use on the green sustainability band. */
  inverse: "bg-white text-brand-700 hover:bg-brand-50",
};

const SIZES: Record<Size, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-6 py-3.5 text-[0.9375rem]",
  lg: "px-8 py-4 text-base",
};

type ButtonProps = {
  children: ReactNode;
  /** Renders an anchor when set: internal (`/`, `#`) uses next/link. */
  href?: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  "aria-label"?: string;
};

export const Button = ({
  children,
  href,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  type = "button",
  onClick,
  disabled,
  ...rest
}: ButtonProps) => {
  const classes = cn(
    BASE,
    VARIANTS[variant],
    SIZES[size],
    fullWidth && "w-full",
    disabled && "pointer-events-none opacity-60",
    className,
  );

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }

    const isWebLink = href.startsWith("http");

    return (
      <a
        href={href}
        className={classes}
        target={isWebLink ? "_blank" : undefined}
        rel={isWebLink ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
};

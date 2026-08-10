type ClassValue = string | false | null | undefined;

/** Joins conditional Tailwind class strings. */
export const cn = (...classes: ClassValue[]): string =>
  classes.filter(Boolean).join(" ");

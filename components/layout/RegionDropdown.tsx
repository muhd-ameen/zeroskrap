"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { REGIONS } from "@/lib/constants";

type RegionDropdownProps = {
  /** Stretch to full width (mobile menu). */
  fullWidth?: boolean;
  className?: string;
};

export const RegionDropdown = ({
  fullWidth = false,
  className,
}: RegionDropdownProps) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const selected = REGIONS.find((region) => region.available) ?? REGIONS[0];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={cn("relative", fullWidth && "w-full", className)}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex h-11 items-center justify-between gap-2 rounded-btn border border-line bg-white px-3.5 text-[0.9375rem] font-medium text-ink transition duration-200 ease-soft hover:bg-brand-50 hover:border-brand-200",
          fullWidth ? "w-full" : "min-w-[9.5rem]",
        )}
      >
        <span className="flex min-w-0 items-center gap-2 truncate">
          <span aria-hidden className="shrink-0 text-base leading-none">
            {selected.flag}
          </span>
          <span className="truncate">{selected.label}</span>
        </span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted transition duration-200 ease-soft",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="Service region"
          className="absolute right-0 z-50 mt-2 min-w-full overflow-hidden rounded-btn border border-line bg-white py-1 shadow-[0_12px_32px_-12px_rgba(17,24,39,0.18)]"
        >
          {REGIONS.map((region) => (
            <li key={region.id} role="option" aria-selected={region.available}>
              <button
                type="button"
                disabled={!region.available}
                onClick={() => {
                  if (region.available) setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left text-[0.9375rem] transition duration-200 ease-soft",
                  region.available
                    ? "font-medium text-ink hover:bg-brand-50"
                    : "cursor-not-allowed text-muted/70",
                )}
              >
                <span className="flex items-center gap-2">
                  <span aria-hidden className="text-base leading-none">
                    {region.flag}
                  </span>
                  <span>{region.label}</span>
                </span>
                {!region.available && region.badge ? (
                  <span
                    className={cn(
                      "text-xs font-medium",
                      region.badge === "Active"
                        ? "text-brand-600"
                        : "text-muted/60",
                    )}
                  >
                    {region.badge}
                  </span>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

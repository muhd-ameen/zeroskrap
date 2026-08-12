"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const MobileNav = ({ open, onOpenChange }: MobileNavProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  const menu =
    open && mounted
      ? createPortal(
          <div className="fixed inset-0 z-[100] flex flex-col px-3 pb-3 pt-3 sm:px-5 sm:pb-4 sm:pt-4">
            <div
              className="absolute inset-0 bg-ink/60"
              onClick={() => onOpenChange(false)}
              aria-hidden
            />

            <div className="relative z-10 flex h-14 shrink-0 items-center justify-between rounded-full bg-[#eceeed] px-4 sm:h-[3.75rem] sm:px-5">
              <Logo tone="dark" size={34} className="shrink-0" />
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                aria-label="Close menu"
                className="inline-flex size-10 items-center justify-center rounded-full bg-ink text-white"
              >
                <X className="size-5" strokeWidth={2.2} />
              </button>
            </div>

            <div
              id="mobile-menu"
              className="relative z-10 mt-3 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[1.75rem] bg-[#eceeed] px-6 pb-6 pt-8 sm:rounded-[2rem] sm:px-8 sm:pb-8 sm:pt-10"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => onOpenChange(false)}
                      className="block py-2.5 text-[1.625rem] font-semibold leading-tight tracking-[-0.02em] text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-5 pt-10">
                <p className="max-w-[16rem] font-mono text-[0.75rem] leading-relaxed text-ink/55">
                  {CONTACT.address.full}
                </p>

                <a
                  href={CONTACT.phonePrimary.href}
                  className="inline-flex w-fit items-center gap-2.5 rounded-full bg-ink px-5 py-3.5 text-[0.9375rem] font-semibold text-white"
                >
                  <Phone
                    className="size-4 shrink-0"
                    strokeWidth={2.1}
                    aria-hidden
                  />
                  {CONTACT.phonePrimary.display}
                </a>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="flex items-center lg:hidden">
      <button
        type="button"
        onClick={() => onOpenChange(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition duration-200 ease-soft hover:bg-white/15"
      >
        <Menu className="size-5" />
      </button>
      {menu}
    </div>
  );
};

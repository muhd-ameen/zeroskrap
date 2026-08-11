"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { RegionDropdown } from "./RegionDropdown";
import {
  CONTACT,
  NAV_LINKS,
  WHATSAPP_MESSAGES,
  whatsappLink,
} from "@/lib/constants";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="flex items-center lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition duration-200 ease-soft hover:bg-white/15"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* Backdrop — fixed to viewport (header is fixed, not sticky) */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-40 bg-ink/40 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-3 top-[4.25rem] z-50 max-h-[calc(100dvh-5.5rem)] overflow-y-auto rounded-[1.75rem] border border-line bg-white shadow-[0_24px_60px_-20px_rgba(17,24,39,0.35)] sm:inset-x-5"
      >
        <div className="flex flex-col gap-6 px-5 py-6 sm:px-6 sm:py-7">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-btn px-3 py-3.5 text-lg font-medium text-ink transition duration-200 ease-soft hover:bg-brand-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 border-t border-line pt-6">
            <RegionDropdown fullWidth />

            <Button
              href={whatsappLink(WHATSAPP_MESSAGES.general)}
              size="lg"
              fullWidth
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon className="size-5" />
              Book Pickup on WhatsApp
            </Button>

            <Button
              href={CONTACT.phonePrimary.href}
              variant="secondary"
              size="lg"
              fullWidth
              onClick={() => setOpen(false)}
            >
              <Phone className="size-[1.125rem]" strokeWidth={1.9} />
              {CONTACT.phonePrimary.display}
            </Button>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-btn border border-line bg-white text-base font-medium text-ink transition duration-200 ease-soft hover:bg-brand-50"
            >
              <InstagramIcon className="size-5" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

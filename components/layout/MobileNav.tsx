"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
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
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-11 items-center justify-center rounded-btn border border-line bg-white text-ink transition duration-200 ease-soft hover:bg-brand-50"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/*
        Backdrop. Height is explicit rather than `bottom-0`: the sticky header
        uses backdrop-blur, which makes it the containing block for fixed
        children, so `bottom-0` would collapse against the 72px header.
      */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-x-0 top-[72px] z-40 h-[100dvh] bg-ink/25 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-[72px] z-50 max-h-[calc(100dvh-72px)] overflow-y-auto border-b border-line bg-white"
      >
        <div className="flex flex-col gap-6 px-6 py-7">
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
            <Button
              href={whatsappLink(WHATSAPP_MESSAGES.general)}
              size="lg"
              fullWidth
            >
              <WhatsAppIcon className="size-5" />
              Book Pickup on WhatsApp
            </Button>

            <Button
              href={CONTACT.phonePrimary.href}
              variant="secondary"
              size="lg"
              fullWidth
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

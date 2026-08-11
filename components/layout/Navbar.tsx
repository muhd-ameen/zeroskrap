import Link from "next/link";
import { Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "./MobileNav";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

export const Navbar = () => (
  <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 md:px-6">
    <nav
      aria-label="Main"
      className="pointer-events-auto mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-full bg-ink/90 px-3 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.55)] backdrop-blur-md sm:h-[3.75rem] sm:px-4 lg:grid lg:h-16 lg:grid-cols-[1fr_auto_1fr] lg:px-5"
    >
      {/* Desktop links */}
      <ul className="hidden items-center gap-0.5 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-flex rounded-full px-3.5 py-2 text-[0.875rem] font-medium text-white/75 transition duration-200 ease-soft hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Brand — centered on desktop, left on mobile */}
      <div className="flex min-w-0 items-center lg:justify-center">
        <Logo tone="light" size={34} priority className="shrink-0" />
      </div>

      {/* Desktop CTA — matches reference phone pill */}
      <div className="hidden items-center justify-end gap-2 lg:flex">
        <a
          href={CONTACT.phonePrimary.href}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-4 text-[0.875rem] font-semibold text-ink transition duration-200 ease-soft hover:bg-brand-50"
        >
          <Phone className="size-4 shrink-0" strokeWidth={2.1} aria-hidden />
          {CONTACT.phonePrimary.display}
        </a>
      </div>

      <MobileNav />
    </nav>
  </header>
);

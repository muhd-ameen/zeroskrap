import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "./MobileNav";
import {
  CONTACT,
  NAV_LINKS,
  WHATSAPP_MESSAGES,
  whatsappLink,
} from "@/lib/constants";

export const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur-md">
    <Container>
      <nav
        aria-label="Main"
        className="flex h-[72px] items-center justify-between gap-6 lg:h-20"
      >
        <Logo priority />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="inline-flex rounded-btn px-4 py-2.5 text-[0.9375rem] font-medium text-ink/80 transition duration-200 ease-soft hover:bg-brand-50 hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ZeroSkrap on Instagram"
            className="inline-flex size-11 items-center justify-center rounded-btn border border-line bg-white text-ink transition duration-200 ease-soft hover:bg-brand-50 hover:text-brand-600"
          >
            <InstagramIcon className="size-5" />
          </a>
          <Button href={whatsappLink(WHATSAPP_MESSAGES.general)}>
            Book Pickup
          </Button>
        </div>

        <MobileNav />
      </nav>
    </Container>
  </header>
);

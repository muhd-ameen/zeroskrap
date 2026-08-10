import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import {
  CONTACT,
  SITE,
  WHATSAPP_MESSAGES,
  whatsappLink,
} from "@/lib/constants";

const SOCIALS = [
  {
    label: "Instagram",
    href: CONTACT.instagram,
    Icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    href: whatsappLink(WHATSAPP_MESSAGES.general),
    Icon: WhatsAppIcon,
  },
] as const;

const Footer = () => (
  <footer className="bg-ink text-white">
    {/* CTA band — green → ink, matching the reference model */}
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#22c55e_0%,#16a34a_42%,#111827_100%)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Soft breathing rings */}
        <div className="absolute left-1/2 top-[-18%] size-[min(90vw,42rem)] -translate-x-1/2 animate-ring-breathe rounded-full border border-white/25 [animation-delay:0s]" />
        <div className="absolute left-1/2 top-[-8%] size-[min(70vw,30rem)] -translate-x-1/2 animate-ring-breathe rounded-full border border-white/20 [animation-delay:-3s] [animation-duration:11s]" />
        <div className="absolute left-1/2 top-[4%] size-[min(48vw,18rem)] -translate-x-1/2 animate-ring-breathe rounded-full border border-white/15 [animation-delay:-6s] [animation-duration:13s]" />

        {/* Outward ripple rings for extra motion */}
        <div className="absolute left-1/2 top-[-2%] size-[min(56vw,22rem)] -translate-x-1/2 animate-ring-ripple rounded-full border border-white/25 [animation-delay:0s]" />
        <div className="absolute left-1/2 top-[-2%] size-[min(56vw,22rem)] -translate-x-1/2 animate-ring-ripple rounded-full border border-white/20 [animation-delay:-2.3s]" />
        <div className="absolute left-1/2 top-[-2%] size-[min(56vw,22rem)] -translate-x-1/2 animate-ring-ripple rounded-full border border-white/15 [animation-delay:-4.6s]" />

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <Container className="relative py-24 text-center md:py-32 lg:py-36">
        <h2 className="mx-auto max-w-3xl text-[1.75rem] font-bold leading-[1.15] tracking-tight md:text-[2.5rem] lg:text-[2.75rem]">
          Let&apos;s keep Mauritius clean together.
        </h2>
        <p className="mt-3 text-base text-white/90 md:text-lg">
          Schedule your first pickup today
        </p>
        <a
          href={whatsappLink(WHATSAPP_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Schedule a pickup on WhatsApp"
          className="mt-8 inline-grid size-11 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/35 transition duration-200 ease-soft hover:bg-white/25 hover:ring-white/50"
        >
          <ArrowRight className="size-5" strokeWidth={2.2} />
        </a>
      </Container>
    </div>

    {/* Footer body — logo / socials left, address right */}
    <Container>
      <div className="flex flex-col gap-12 py-20 md:flex-row md:items-start md:justify-between md:gap-16 md:py-28 lg:py-32">
        <div className="max-w-sm">
          <Logo tone="light" />

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-xl bg-white/[0.06] text-white ring-1 ring-white/20 transition duration-200 hover:bg-white/10"
                >
                  <Icon className="size-[1.125rem]" />
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-white/75">
            Customer Support Available 8:00AM - 6:00PM
          </p>

          <a
            href={whatsappLink(WHATSAPP_MESSAGES.callback)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/20 transition duration-200 hover:bg-white/[0.14]"
          >
            <Phone className="size-4" strokeWidth={1.9} />
            Request a callback
          </a>
        </div>

        <div className="space-y-7 text-sm leading-relaxed text-white/80 md:max-w-xs">
          <address className="not-italic">
            <p className="font-semibold text-white">Registered Address:-</p>
            <p className="mt-1.5">
              {SITE.name}
              <br />
              {CONTACT.address.line1}
              <br />
              {CONTACT.address.line2}, {CONTACT.address.country}
            </p>
          </address>

          <address className="not-italic">
            <p className="font-semibold text-white">Yard Address:-</p>
            <p className="mt-1.5">{CONTACT.address.full}</p>
          </address>
        </div>
      </div>
    </Container>
  </footer>
);

export { Footer };

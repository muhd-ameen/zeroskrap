import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MauritiusFlag, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { PickupForm } from "./PickupForm";
import { ASSETS } from "@/lib/assets";
import { CONTACT, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/constants";
import { HERO_HIGHLIGHTS } from "@/lib/data";

export const Hero = () => (
  <section id="top" className="relative overflow-hidden bg-canvas">
    {/* PLACEHOLDER illustrations - decorative only, hidden on smaller screens. */}
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block">
      <Image
        src={ASSETS.heroFloatLeft}
        alt=""
        width={240}
        height={384}
        className="absolute left-[1%] top-52 2xl:left-[4%]"
      />
      <Image
        src={ASSETS.heroFloatRight}
        alt=""
        width={240}
        height={384}
        className="absolute right-[1%] top-60 2xl:right-[4%]"
      />
    </div>

    <Container className="relative">
      <div className="flex flex-col items-center pb-16 pt-12 text-center md:pb-20 md:pt-16 lg:pb-28 lg:pt-24">
        <span className="inline-flex animate-fade-in items-center gap-2.5 rounded-full border border-brand-200 bg-white py-1.5 pl-2 pr-4 text-[0.8125rem] font-medium text-brand-800 sm:text-sm">
          <MauritiusFlag className="h-[1.125rem] w-[1.6875rem] shrink-0 rounded-[0.3rem]" />
          {CONTACT.coverage}
        </span>

        <h1 className="mt-6 max-w-5xl animate-fade-up text-[2.25rem] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[3.25rem] lg:text-[4.5rem]">
          Turn Your Scrap <span className="text-brand-500">Into Cash</span>
        </h1>

        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[1.0625rem] text-muted md:text-[1.375rem]">
          <span>Schedule</span>
          <ArrowRight aria-hidden className="size-5 shrink-0 text-brand-500" />
          <span>We Collect</span>
          <ArrowRight aria-hidden className="size-5 shrink-0 text-brand-500" />
          <span>You Get Paid Instantly</span>
        </p>

        <PickupForm />

        <div className="mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <Button
            href={whatsappLink(WHATSAPP_MESSAGES.general)}
            size="lg"
            className="w-full sm:w-auto"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp Pickup
          </Button>

          <Button
            href={CONTACT.phonePrimary.href}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Phone className="size-[1.125rem]" strokeWidth={1.9} />
            Call Now
          </Button>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-2.5 md:mt-12 md:gap-3">
          {HERO_HIGHLIGHTS.map((highlight) => (
            <li
              key={highlight.label}
              className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 py-2 pl-2.5 pr-4 text-[0.8125rem] font-medium text-ink/75 md:text-sm"
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700 md:size-8">
                <Icon name={highlight.icon} className="size-4" />
              </span>
              {highlight.label}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </section>
);

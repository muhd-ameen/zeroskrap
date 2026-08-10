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
    <Container className="relative">
      <div className="grid items-center gap-10 pb-16 pt-12 md:pb-20 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-24 lg:pt-20">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex animate-fade-in items-center gap-2.5 rounded-full border border-brand-200 bg-white py-1.5 pl-2 pr-4 text-[0.8125rem] font-medium text-brand-800 sm:text-sm">
            <MauritiusFlag className="h-[1.125rem] w-[1.6875rem] shrink-0 rounded-[0.3rem]" />
            {CONTACT.coverage}
          </span>

          <h1 className="mt-6 max-w-2xl animate-fade-up text-[2.25rem] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem]">
            Turn Your Scrap <span className="text-brand-500">Into Cash</span>
          </h1>

          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[1.0625rem] text-muted md:text-[1.25rem] lg:justify-start">
            <span>Schedule</span>
            <ArrowRight aria-hidden className="size-5 shrink-0 text-brand-500" />
            <span>We Collect</span>
            <ArrowRight aria-hidden className="size-5 shrink-0 text-brand-500" />
            <span>You Get Paid Instantly</span>
          </p>

          <PickupForm className="lg:mx-0" />

          <div className="mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:justify-center lg:justify-start">
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

          <ul className="mt-10 flex flex-wrap justify-center gap-2.5 md:mt-12 md:gap-3 lg:justify-start">
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

        <div className="relative mx-auto grid max-w-[28rem] place-items-center lg:mx-0 lg:max-w-none">
          <div
            aria-hidden
            className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.18)_0%,transparent_70%)]"
          />
          <Image
            src={ASSETS.hero}
            alt="Digital scale weighing a bag of scrap metal beside copper wire and a green crate"
            width={917}
            height={1272}
            priority
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 85vw"
            className="relative h-auto w-full max-w-[420px] lg:max-w-[480px]"
          />
        </div>
      </div>
    </Container>
  </section>
);

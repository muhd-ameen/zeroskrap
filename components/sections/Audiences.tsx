import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/constants";
import { AUDIENCES } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Audiences = () => (
  <Section id="for-you" className="bg-white" aria-labelledby="audiences-heading">
    <SectionHeading
      id="audiences-heading"
      eyebrow="Who we work with"
      title={
        <>
          Households and businesses have different needs -{" "}
          <span className="text-brand-500">we cater to each</span>
        </>
      }
    />

    <div className="mt-14 flex flex-col gap-16 lg:mt-20 lg:gap-24">
      {AUDIENCES.map((audience, index) => {
        const reversed = index % 2 === 1;

        return (
          <article
            key={audience.id}
            className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
          >
            <div className={cn(reversed && "lg:order-2")}>
              <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-800">
                {audience.eyebrow}
              </span>

              <h3 className="mt-5 text-[1.625rem] font-bold leading-[1.2] md:text-[2rem]">
                {audience.title}
              </h3>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {audience.description}
              </p>

              <ul className="mt-7 space-y-3.5">
                {audience.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CircleCheck
                      aria-hidden
                      className="size-5 shrink-0 text-brand-500"
                      strokeWidth={1.9}
                    />
                    <span className="text-[0.9375rem] text-ink/80 md:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href={whatsappLink(WHATSAPP_MESSAGES.general)}
                variant="secondary"
                size="md"
                className="mt-8"
              >
                <WhatsAppIcon className="size-[1.125rem]" />
                Book a pickup
              </Button>
            </div>

            {/* Illustration - path and intrinsic size live on the entry in lib/data.ts. */}
            <div
              className={cn(
                "grid aspect-[6/5] place-items-center rounded-media bg-[linear-gradient(140deg,#f8faf9_0%,#f0fdf4_45%,#dcfce7_100%)] p-8 md:p-12",
                reversed && "lg:order-1",
              )}
            >
              <Image
                src={audience.image}
                alt={audience.imageAlt}
                width={audience.imageWidth}
                height={audience.imageHeight}
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 55vw, 75vw"
                className="h-auto w-full max-w-[440px]"
              />
            </div>
          </article>
        );
      })}
    </div>
  </Section>
);

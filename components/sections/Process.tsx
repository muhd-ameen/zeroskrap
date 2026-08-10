import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { ASSETS } from "@/lib/assets";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/constants";
import { PROCESS_STEPS } from "@/lib/data";

export const Process = () => (
  <Section
    id="how-it-works"
    className="bg-white"
    aria-labelledby="process-heading"
  >
    <SectionHeading
      id="process-heading"
      eyebrow="Simple process"
      title={
        <>
          Best value for your scrap in{" "}
          <span className="text-brand-500">3 simple steps</span>
        </>
      }
    />

    <ol className="relative mt-14 grid gap-12 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-10">
      {/* Connector sits behind the icon badges (white ring masks the line). */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[3.85rem] hidden h-0.5 bg-brand-200 md:block lg:top-[4.1rem]"
      />

      {PROCESS_STEPS.map((step, index) => (
        <ProcessStep
          key={step.step}
          index={index + 1}
          title={step.title}
          icon={step.icon}
        />
      ))}
    </ol>

    <div className="mt-14 overflow-hidden rounded-media bg-brand-50 px-6 py-10 ring-1 ring-brand-100 md:px-12 md:py-12 lg:mt-20 lg:px-14">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div>
          <h3 className="text-[1.5rem] font-bold leading-[1.2] md:text-[2rem]">
            Our truck comes <span className="text-brand-500">to you</span>
          </h3>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Free pickup anywhere in Mauritius. We bring the crew, the digital
            scales and your payment - you just point us to the scrap.
          </p>

          <Button
            href={whatsappLink(WHATSAPP_MESSAGES.general)}
            size="lg"
            className="mt-7 w-full sm:w-auto"
          >
            <WhatsAppIcon className="size-5" />
            Book Pickup
          </Button>
        </div>

        <Image
          src={ASSETS.truck}
          alt="ZeroSkrap collection truck"
          width={1232}
          height={711}
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 70vw, 88vw"
          className="h-auto w-full lg:justify-self-end"
        />
      </div>
    </div>
  </Section>
);

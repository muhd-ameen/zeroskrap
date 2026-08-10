import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { whatsappLink } from "@/lib/constants";
import { CLEARANCE_SERVICES, CLEARANCE_STATEMENT } from "@/lib/data";

const CLEARANCE_MESSAGE =
  "Hi ZeroSkrap, I would like to request a clearance. Here is what needs clearing:";

export const Clearance = () => (
  <Section id="services" aria-labelledby="clearance-heading">
    <SectionHeading
      id="clearance-heading"
      eyebrow="Clearance services"
      title={
        <>
          Need a whole space <span className="text-brand-500">emptied?</span>
        </>
      }
      description="We bring the crew, the trucks and the muscle. You organise nothing."
    />

    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
      {CLEARANCE_SERVICES.map((service, index) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          icon={service.icon}
          /* The last service fills the odd cell so no gaps appear at sm. */
          className={
            index === CLEARANCE_SERVICES.length - 1
              ? "sm:col-span-2 lg:col-span-1"
              : undefined
          }
        />
      ))}

      {/* Highlighted statement + CTA, sized to complete the grid. */}
      <li className="flex flex-col justify-between gap-6 rounded-card bg-[linear-gradient(135deg,#22c55e_0%,#16a34a_55%,#15803d_100%)] p-6 text-white sm:col-span-2 md:p-8 lg:col-span-2 lg:flex-row lg:items-center">
        <p className="max-w-xl text-lg font-semibold leading-snug md:text-xl">
          {CLEARANCE_STATEMENT}
        </p>

        <Button
          href={whatsappLink(CLEARANCE_MESSAGE)}
          variant="inverse"
          size="lg"
          className="shrink-0"
        >
          <WhatsAppIcon className="size-5" />
          Request a Clearance
        </Button>
      </li>
    </ul>
  </Section>
);

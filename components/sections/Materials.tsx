import { Button } from "@/components/ui/Button";
import { MaterialCard } from "@/components/ui/MaterialCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/constants";
import { MATERIALS } from "@/lib/data";

export const Materials = () => (
  <Section
    id="materials"
    className="relative overflow-hidden bg-white !pt-28 md:!pt-32"
    aria-labelledby="materials-heading"
  >
    <SectionHeading
      id="materials-heading"
      eyebrow="What we buy"
      title={
        <>
          Materials we <span className="text-brand-500">pay cash for</span>
        </>
      }
      description="Metals, e-waste, appliances, packaging and industrial leftovers - collected from homes, workshops, factories and sites across Mauritius."
    />

    <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-14 lg:grid-cols-4 lg:gap-6">
      {MATERIALS.map((material) => (
        <MaterialCard
          key={material.slug}
          name={material.name}
          description={material.description}
          icon={material.icon}
          image={material.image}
        />
      ))}
    </ul>

    <div className="mt-12 flex flex-col items-center gap-4 text-center lg:mt-14">
      <p className="text-[0.9375rem] text-muted">
        Not sure if we take what you have? Send us a photo - we will tell you
        straight away.
      </p>
      <Button href={whatsappLink(WHATSAPP_MESSAGES.quote)} size="lg">
        <WhatsAppIcon className="size-5" />
        Ask for today&apos;s rates
      </Button>
    </div>
  </Section>
);

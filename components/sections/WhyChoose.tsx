import { FeatureCard } from "@/components/ui/FeatureCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE } from "@/lib/data";

export const WhyChoose = () => (
  <Section id="why-zeroskrap" aria-labelledby="why-heading">
    <SectionHeading
      id="why-heading"
      eyebrow="Why ZeroSkrap"
      title={
        <>
          Everything you want from a{" "}
          <span className="text-brand-500">scrap buyer</span>
        </>
      }
      description="Clear prices, honest weighing and payment on the spot."
    />

    <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-12 lg:grid-cols-4 lg:gap-5">
      {WHY_CHOOSE.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </ul>
  </Section>
);

import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JOURNEY_STEPS } from "@/lib/data";

export const Journey = () => (
  <Section
    id="how-zeroskrap-works"
    className="bg-[linear-gradient(180deg,#f8faf9_0%,#f0fdf4_100%)]"
    aria-labelledby="journey-heading"
  >
    <SectionHeading
      id="journey-heading"
      eyebrow="How ZeroSkrap works"
      title={
        <>
          From your gate back into{" "}
          <span className="text-brand-500">industry</span>
        </>
      }
      description="Nothing we collect disappears."
    />

    <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
      {JOURNEY_STEPS.map((step, index) => (
        <li
          key={step.number}
          className="relative rounded-card border border-line bg-white p-5 md:p-6"
        >
          <div className="relative grid aspect-[4/3] place-items-center rounded-2xl bg-[linear-gradient(140deg,#f0fdf4_0%,#dcfce7_100%)] text-brand-600">
            <Icon name={step.icon} className="size-12" strokeWidth={1.5} />

            <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-bold tracking-wide text-brand-600">
              {step.number}
            </span>
          </div>

          <h3 className="mt-5 text-lg font-semibold leading-snug">
            {step.title}
          </h3>

          <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
            {step.description}
          </p>

          {index < JOURNEY_STEPS.length - 1 && (
            <span
              aria-hidden
              className="absolute right-0 top-20 hidden size-9 translate-x-[calc(50%+0.75rem)] place-items-center rounded-full border border-line bg-white text-brand-500 lg:grid"
            >
              <ArrowRight className="size-4" strokeWidth={2.2} />
            </span>
          )}
        </li>
      ))}
    </ol>
  </Section>
);

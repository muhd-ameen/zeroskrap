import Image from "next/image";
import { ArrowRight } from "lucide-react";
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

    <ol className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:mt-16 lg:grid-cols-4">
      {JOURNEY_STEPS.map((step, index) => (
        <li
          key={step.number}
          className="relative rounded-card border border-line bg-white p-3 sm:p-5 md:p-6"
        >
          <div className="relative grid aspect-[4/3] place-items-center bg-[linear-gradient(140deg,#f0fdf4_0%,#dcfce7_100%)]">
            <Image
              src={step.image}
              alt=""
              width={step.imageWidth}
              height={step.imageHeight}
              sizes="(min-width: 1024px) 160px, 28vw"
              className="max-h-[70%] w-auto max-w-[58%] object-contain sm:max-h-[76%] sm:max-w-[64%]"
            />

            <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-0.5 text-[0.625rem] font-bold tracking-wide text-brand-600 sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-xs">
              {step.number}
            </span>
          </div>

          <h3 className="mt-3 text-sm font-semibold leading-snug sm:mt-5 sm:text-lg">
            {step.title}
          </h3>

          <p className="mt-2 hidden text-[0.9375rem] leading-relaxed text-muted sm:block">
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

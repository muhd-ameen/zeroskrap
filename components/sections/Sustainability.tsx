import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { ASSETS } from "@/lib/assets";
import { whatsappLink } from "@/lib/constants";
import { SUSTAINABILITY_POINTS } from "@/lib/data";

const MOVEMENT_MESSAGE =
  "Hi ZeroSkrap, I want to start recycling with you. Can you tell me how to get going?";

export const Sustainability = () => (
  <Section
    id="sustainability"
    className="bg-white"
    aria-labelledby="sustainability-heading"
  >
    <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-800">
          <Icon name="sprout" className="size-4" />
          Sustainability
        </span>

        <h2
          id="sustainability-heading"
          className="mt-6 max-w-2xl text-[1.875rem] font-bold leading-[1.15] md:text-[2.5rem] lg:text-[2.75rem]"
        >
          Turning waste into{" "}
          <span className="text-brand-500">value</span>
        </h2>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Out of landfill, back into industry.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {SUSTAINABILITY_POINTS.map((point) => (
            <li key={point.title} className="flex gap-3.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Icon name={point.icon} className="size-5" />
              </span>
              <div>
                <h3 className="text-[0.9375rem] font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <Button
          href={whatsappLink(MOVEMENT_MESSAGE)}
          size="lg"
          className="mt-10"
        >
          <WhatsAppIcon className="size-5" />
          Join the Movement
        </Button>
      </div>

      {/* Illustration - swap the file path in lib/assets.ts. */}
      <div className="grid place-items-center">
        <Image
          src={ASSETS.sustainability}
          alt="Baled scrap metal turning into new aluminium ingots and copper coil beside a growing tree, circled by recycling arrows"
          width={1296}
          height={1062}
          sizes="(min-width: 1024px) 440px, 340px"
          className="h-auto w-full max-w-[440px]"
        />
      </div>
    </div>
  </Section>
);

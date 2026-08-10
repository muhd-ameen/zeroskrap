import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { ASSETS } from "@/lib/assets";
import { TRUST_POINTS } from "@/lib/data";

export const TrustBanner = () => (
  <Section id="about" size="sm" aria-labelledby="trust-heading">
    <div className="overflow-hidden rounded-media bg-[linear-gradient(135deg,#f0fdf4_0%,#dcfce7_55%,#bbf7d0_100%)] px-5 py-7 md:px-8 md:py-9 lg:px-10 lg:py-10">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <span className="inline-grid size-10 place-items-center rounded-xl bg-white text-brand-600">
            <Icon name="scale" className="size-5" />
          </span>

          <h2
            id="trust-heading"
            className="mt-4 text-[1.75rem] font-bold leading-[1.15] text-brand-900 md:text-[2.25rem]"
          >
            Weighed right.
            <br className="hidden lg:block" /> Paid on the spot.
          </h2>

          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
            Weighed in front of you, at the rate we quoted - paid before we leave.
          </p>
        </div>

        <Image
          src={ASSETS.trustWeighing}
          alt="Scrap truck on a ZeroScale weighbridge with digital weight display"
          width={1329}
          height={1183}
          sizes="(min-width: 1024px) 520px, (min-width: 640px) 70vw, 88vw"
          className="h-auto w-full rounded-media lg:justify-self-end"
        />
      </div>

      <ul className="mt-7 grid grid-cols-2 gap-4 border-t border-brand-300/60 pt-6 sm:gap-5 lg:mt-8 lg:grid-cols-4 lg:pt-7">
        {TRUST_POINTS.map((point) => (
          <li key={point.title}>
            <span className="grid size-9 place-items-center rounded-lg bg-white text-brand-600">
              <Icon name={point.icon} className="size-[1.125rem]" />
            </span>
            <h3 className="mt-2 text-sm font-semibold text-ink sm:text-base">
              {point.title}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { ASSETS } from "@/lib/assets";
import { TRUST_POINTS } from "@/lib/data";

export const TrustBanner = () => (
  <Section id="about" size="sm" aria-labelledby="trust-heading">
    <div className="overflow-hidden rounded-media bg-[linear-gradient(135deg,#f0fdf4_0%,#dcfce7_55%,#bbf7d0_100%)] px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <span className="inline-grid size-12 place-items-center rounded-2xl bg-white text-brand-600">
            <Icon name="scale" className="size-6" />
          </span>

          <h2
            id="trust-heading"
            className="mt-6 text-[1.875rem] font-bold leading-[1.15] text-brand-900 md:text-[2.5rem]"
          >
            Weighed right.
            <br className="hidden lg:block" /> Paid on the spot.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
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

      <ul className="mt-10 grid gap-8 border-t border-brand-300/60 pt-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:pt-12">
        {TRUST_POINTS.map((point) => (
          <li key={point.title}>
            <span className="grid size-11 place-items-center rounded-xl bg-white text-brand-600">
              <Icon name={point.icon} className="size-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-ink">
              {point.title}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

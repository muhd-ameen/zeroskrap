import { Button } from "@/components/ui/Button";
import { MauritiusFlag } from "@/components/ui/BrandIcons";
import { ASSETS } from "@/lib/assets";
import { SITE } from "@/lib/constants";

export const Hero = () => (
  <section
    id="top"
    className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
  >
    {/* Full-bleed video plane — poster also covers reduced-motion / load gap */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${ASSETS.heroPoster})` }}
      aria-hidden
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={ASSETS.heroPoster}
        className="h-full w-full object-cover motion-reduce:hidden"
      >
        <source src={ASSETS.heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/35 to-ink/45" />
    </div>

    {/* Bottom-left content card — brand, headline, one line, one CTA */}
    <div className="relative z-10 w-full px-4 pb-6 pt-28 sm:px-6 sm:pb-8 md:px-10 md:pb-12 lg:px-14 lg:pb-14">
      <div className="max-w-xl animate-fade-up rounded-lg bg-[#eceeed]/95 p-7 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-9 md:max-w-[34rem] md:p-10">
        <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-brand-700">
          {SITE.name}
        </p>

        <h1 className="mt-3 text-[2.35rem] font-bold italic leading-[0.95] tracking-[-0.03em] text-ink sm:text-[3.15rem] md:text-[3.5rem]">
          FROM SCRAP
          <br />
          TO CASH
        </h1>

        <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-ink/75 sm:text-base">
          <MauritiusFlag className="mr-1.5 inline-block h-[0.85em] w-auto translate-y-[-0.05em] align-baseline" />
          Mauritius&apos; trusted scrap buyer. Free pickup, digital weighing,
          and payment on the spot.
        </p>

        <Button
          href="/#how-it-works"
          variant="dark"
          size="md"
          className="mt-7 rounded-lg px-6"
        >
          See how it works
        </Button>
      </div>
    </div>
  </section>
);

import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   The mark is `public/logo/zeroskrap-mark.png` (transparent, so it sits on the
   dark footer too); the wordmark is live text so it always matches the site
   typography.

   For a full lockup image: set SHOW_WORDMARK to false, point ASSETS.logoMark
   at the lockup, then widen `width` below.
   -------------------------------------------------------------------------- */
const SHOW_WORDMARK = true;

type LogoProps = {
  tone?: "dark" | "light";
  size?: number;
  className?: string;
  priority?: boolean;
  /** Skips the surrounding link - use inside an existing anchor. */
  asLink?: boolean;
};

export const Logo = ({
  tone = "dark",
  size = 40,
  className,
  priority = false,
  asLink = true,
}: LogoProps) => {
  const content = (
    <>
      <Image
        src={ASSETS.logoMark}
        alt=""
        width={size}
        height={size}
        priority={priority}
        className="shrink-0"
      />
      {SHOW_WORDMARK && (
        <span
          className={cn(
            "text-[1.375rem] font-bold tracking-tight",
            tone === "light" ? "text-white" : "text-ink",
          )}
        >
          Zero
          <span className={tone === "light" ? "text-brand-400" : "text-brand-500"}>
            Skrap
          </span>
        </span>
      )}
    </>
  );

  if (!asLink) {
    return (
      <span className={cn("inline-flex items-center gap-2.5", className)}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href="/"
      aria-label={`${SITE.name} - home`}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-btn transition-opacity duration-200 hover:opacity-90",
        className,
      )}
    >
      {content}
    </Link>
  );
};

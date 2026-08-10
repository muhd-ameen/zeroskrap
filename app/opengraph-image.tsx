import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { CONTACT, SITE } from "@/lib/constants";

export const alt = `${SITE.name} - ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Share card, generated at build time. Replace with designed artwork by
 * dropping a 1200×630 `opengraph-image.png` into `app/` and deleting this file.
 */
const Image = async () => {
  const mark = await readFile(
    join(process.cwd(), "public/logo/zeroskrap-mark.png"),
  );
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #16a34a 0%, #15803d 55%, #14532d 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 22,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={markSrc} alt="" width={54} height={54} />
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
            {SITE.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -3,
              maxWidth: 900,
            }}
          >
            Turn Your Scrap Into Cash
          </div>
          <div style={{ fontSize: 34, opacity: 0.85 }}>
            Free pickup · Digital weighing · Instant payment
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 28, opacity: 0.75 }}>
          {`${CONTACT.coverage} · ${CONTACT.address.full}`}
        </div>
      </div>
    ),
    size,
  );
};

export default Image;

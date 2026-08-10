import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { SITE } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/schema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} - ${SITE.tagline} | Scrap Buyers in Mauritius`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "scrap buyers Mauritius",
    "sell scrap Mauritius",
    "scrap metal Mauritius",
    "recycling Mauritius",
    "copper scrap price Mauritius",
    "e-waste collection Mauritius",
    "site clearance Mauritius",
    "ZeroSkrap",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#22c55e",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={poppins.variable}>
    <body className="min-h-screen bg-canvas font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-btn focus:bg-brand-500 focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <FloatingActions />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </body>
  </html>
);

export default RootLayout;

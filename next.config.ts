import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * The Phase 1 brand assets are SVGs we author ourselves and serve from
     * /public. The CSP below sandboxes anything the optimizer returns, which
     * is the documented way to allow SVG safely.
     */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

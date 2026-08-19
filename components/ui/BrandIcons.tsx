type GlyphProps = {
  className?: string;
};

/**
 * Flag of Mauritius - four equal bands (red, blue, yellow, green).
 * Corners are rounded on the outer stripes rather than with a clipPath so the
 * glyph carries no element ids and can be rendered any number of times.
 */
export const MauritiusFlag = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 24 16" className={className} aria-hidden>
    <path d="M2.5 0h19A2.5 2.5 0 0 1 24 2.5V4H0V2.5A2.5 2.5 0 0 1 2.5 0Z" fill="#EA2839" />
    <rect y="4" width="24" height="4" fill="#1A206D" />
    <rect y="8" width="24" height="4" fill="#FFD500" />
    <path d="M0 12h24v1.5a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 0 13.5Z" fill="#00A551" />
    <rect
      x="0.5"
      y="0.5"
      width="23"
      height="15"
      rx="2"
      fill="none"
      stroke="rgb(17 24 39 / 0.14)"
    />
  </svg>
);

/** WhatsApp glyph - not part of the Lucide set, so it lives here. */
export const WhatsAppIcon = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.53.15-.17.2-.3.3-.5.1-.19.05-.37-.02-.52-.08-.14-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.34m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.42" />
  </svg>
);

/** Instagram glyph - brand icon, not in Lucide. */
export const InstagramIcon = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.12.14 4.58 1.62 4.72 4.72.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.14 3.09-1.6 4.58-4.72 4.72-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.12-.14-4.58-1.62-4.72-4.72-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.57 3.85 4.03 2.37 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
  </svg>
);

/** Facebook glyph - brand icon, not in Lucide. */
export const FacebookIcon = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
  </svg>
);

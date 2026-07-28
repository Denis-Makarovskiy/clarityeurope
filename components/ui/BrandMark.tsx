export interface BrandMarkProps {
  size?: number;
  className?: string;
  /** Set to false (and it will render a <title>) when the mark appears without the wordmark next to it. */
  decorative?: boolean;
}

/**
 * Inline abstract brand mark for Clarity Europe: a circle with an
 * off-center inner circle — an aperture/focus motif standing in for
 * "clarity". Colors are wired to the navy and gold tokens via CSS
 * variables, not hardcoded hex values, so it stays in sync with
 * app/globals.css if the palette ever changes.
 *
 * A gold ring frames the outer circle so the mark stays legible on both
 * the white header and the navy-950 footer (the same reason the sister
 * site's shield mark used a white outer ring). Geometry is simple enough
 * to hold up at 16px (favicon scale): two circles, no fine detail.
 */
export function BrandMark({ size = 40, className = "", decorative = true }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
    >
      {decorative ? null : <title>Clarity Europe</title>}

      {/* Outer disc + gold ring, visible on both white and navy-950 surfaces. */}
      <circle cx="50" cy="50" r="45" fill="var(--color-navy-900)" stroke="var(--color-gold-500)" strokeWidth="6" />

      {/* Off-center inner circle: the aperture/focus point. */}
      <circle cx="63" cy="39" r="19" fill="var(--color-gold-500)" />
    </svg>
  );
}

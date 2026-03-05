/**
 * WiseLogo
 *
 * Brand mark for the Wise dashboard.
 * A geometric "W" letterform rendered inside a rounded-square tile
 * using the brand primary colour (#0f62fe).
 *
 * Usage:
 *   <WiseLogo />           // default 28 × 28 px
 *   <WiseLogo size={40} /> // custom size
 */

interface WiseLogoProps {
  /** Width and height in pixels. Defaults to 28. */
  size?: number;
  /** Override the tile background colour. Defaults to brand blue. */
  color?: string;
}

export function WiseLogo({ size = 28, color = "#0f62fe" }: WiseLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-label="Wise logo"
      role="img"
    >
      {/* Rounded-square tile */}
      <rect width="28" height="28" rx="6" fill={color} />

      {/* "W" letterform — two V-shapes sharing a centre peak */}
      <path
        d="M5.5 8.5 L9.5 19.5 L14 13 L18.5 19.5 L22.5 8.5"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

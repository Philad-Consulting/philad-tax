import type { SVGProps } from "react";

// Drawn as SVG because Windows shows flag emoji as plain letters ("US").

type FlagProps = SVGProps<SVGSVGElement> & { title?: string };

const US_STRIPE = 480 / 13;
const US_CANTON = { width: 256, height: US_STRIPE * 7 };

/** Five-pointed star centred on (cx, cy) */
function starPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? r : r * 0.4;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    return `${(cx + radius * Math.cos(angle)).toFixed(1)},${(cy + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(" ");
}

// 50 stars: 9 rows alternating 6 and 5, on an 11 × 9 grid
const US_STARS = Array.from({ length: 9 }, (_, row) =>
  Array.from({ length: 11 }, (_, col) => ({ row, col })).filter(
    ({ row, col }) => (row + col) % 2 === 0,
  ),
)
  .flat()
  .map(({ row, col }) =>
    starPoints(((col + 1) * US_CANTON.width) / 12, ((row + 1) * US_CANTON.height) / 10, 9.5),
  );

export function UsFlag({ title = "United States", ...props }: FlagProps) {
  return (
    <svg viewBox="0 0 640 480" role="img" aria-label={title} {...props}>
      <path fill="#fff" d="M0 0h640v480H0z" />
      {Array.from({ length: 7 }, (_, i) => (
        <rect key={i} y={i * 2 * US_STRIPE} width="640" height={US_STRIPE} fill="#b22234" />
      ))}
      <rect width={US_CANTON.width} height={US_CANTON.height} fill="#3c3b6e" />
      {US_STARS.map((points) => (
        <polygon key={points} points={points} fill="#fff" />
      ))}
    </svg>
  );
}

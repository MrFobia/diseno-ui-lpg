// ─── LPG Design System Tokens ─────────────────────────────────────────────────

export const FONT = "'Inter', sans-serif";

// Dark palette (blue world)
export const B0    = "#030726";
export const B1    = "#06093A";
export const B2    = "#080D50";
export const B3    = "#0011B2";   // LPG Blue
export const B4    = "#0017D4";
export const GREEN = "#AAFFAA";   // LPG Green
export const W     = "#FFFFFF";
export const W60   = "rgba(255,255,255,0.60)";
export const W40   = "rgba(255,255,255,0.40)";
export const W18   = "rgba(255,255,255,0.18)";
export const W08   = "rgba(255,255,255,0.08)";
export const W04   = "rgba(255,255,255,0.04)";

// Light palette (white world)
export const L_BG    = "#FFFFFF";
export const L_BG2   = "#F6F7FF";   // very light blue tint
export const L_TEXT  = "#0A0A0A";
export const L_MID   = "#555566";
export const L_RULE  = "rgba(0,17,178,0.08)";
export const L_RULE2 = "rgba(0,0,0,0.08)";

// Grain SVG
const grainSvg = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'>
    <filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/></filter>
    <rect width='220' height='220' filter='url(#g)'/>
  </svg>`
);
export const GRAIN = `url("data:image/svg+xml,${grainSvg}")`;

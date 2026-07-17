import { useState } from "react";
import { FONT, B1, B3, GREEN, W, W40, W08 } from "../../tokens";

const CITIES = [
  {
    id: "cali",
    name: "Cali",
    badge: "SEDE PRINCIPAL",
    detail: "Valle del Cauca",
    cx: 62,
    cy: 239,
    anchor: "end" as const,
    offset: -16,
  },
  {
    id: "medellin",
    name: "Medellín",
    badge: "OFICINA ANTIOQUIA",
    detail: "Eje Cafetero",
    cx: 85,
    cy: 165,
    anchor: "start" as const,
    offset: 16,
  },
  {
    id: "bogota",
    name: "Bogotá",
    badge: "OFICINA CAPITAL",
    detail: "Sede de Gobierno",
    cx: 122,
    cy: 205,
    anchor: "start" as const,
    offset: 16,
  },
];

// Colombia outline — simplified clockwise path
// ViewBox 0 0 300 440; cities mapped from lat/lon to pixel coords
const COLOMBIA_PATH = `
  M 22,390
  C 14,360 8,325 8,310
  C 6,280 5,250 5,230
  C 5,205 7,178 8,155
  C 8,135 6,122 5,115
  C 4,105 10,96 18,92
  C 25,88 32,80 40,70
  C 52,58 68,50 88,44
  C 108,38 128,35 148,33
  C 165,31 180,27 192,18
  C 198,12 202,4 200,0
  C 204,8 208,14 212,18
  C 215,22 210,28 196,32
  C 210,36 228,48 244,65
  C 256,80 264,100 267,125
  C 269,150 268,175 264,200
  C 260,225 252,252 242,278
  C 230,308 216,334 200,358
  C 182,382 160,396 138,400
  C 116,404 94,400 75,394
  C 60,389 42,386 22,390
  Z
`;

export function ColombiaCitiesMap() {
  const [hov, setHov] = useState<string | null>(null);
  const hovCity = CITIES.find(c => c.id === hov);

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "stretch", gap: 0 }}>
      {/* Map SVG */}
      <div style={{ flex: 1, position: "relative" }}>
        <svg
          viewBox="0 0 300 440"
          style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto" }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="pinGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="pinGlowSm" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Subtle grid */}
          {[0, 1, 2, 3, 4, 5].map(i => (
            <line key={`h${i}`} x1="0" y1={i * 73} x2="300" y2={i * 73} stroke={W} strokeWidth="0.4" opacity="0.06" />
          ))}
          {[0, 1, 2, 3, 4].map(i => (
            <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="440" stroke={W} strokeWidth="0.4" opacity="0.06" />
          ))}

          {/* Colombia fill */}
          <path d={COLOMBIA_PATH} fill={`${B3}22`} />
          {/* Colombia border */}
          <path d={COLOMBIA_PATH} stroke={`${W}30`} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
          {/* Inner highlight on hover cities */}
          {hov && (
            <path d={COLOMBIA_PATH} stroke={`${GREEN}18`} strokeWidth="0.8" fill={`${GREEN}06`} />
          )}

          {/* City pins */}
          {CITIES.map(city => {
            const isHov = hov === city.id;
            return (
              <g
                key={city.id}
                onMouseEnter={() => setHov(city.id)}
                onMouseLeave={() => setHov(null)}
                style={{ cursor: "pointer" }}
              >
                {/* Outer pulse ring */}
                <circle cx={city.cx} cy={city.cy} r="22"
                  fill="none" stroke={GREEN} strokeWidth="0.7"
                  opacity={isHov ? 0.4 : 0.12}
                  style={{ transition: "opacity 0.2s" }}
                />
                {/* Mid ring */}
                <circle cx={city.cx} cy={city.cy} r="12"
                  fill="none" stroke={GREEN} strokeWidth="1"
                  opacity={isHov ? 0.75 : 0.28}
                  style={{ transition: "opacity 0.2s" }}
                />
                {/* Glow dot */}
                <circle cx={city.cx} cy={city.cy} r="5.5"
                  fill={isHov ? GREEN : `${GREEN}88`}
                  filter="url(#pinGlow)"
                  style={{ transition: "fill 0.2s" }}
                />
                {/* Center dot */}
                <circle cx={city.cx} cy={city.cy} r="2"
                  fill={isHov ? B3 : `${B3}CC`}
                />

                {/* City name */}
                <text
                  x={city.cx + city.offset}
                  y={city.cy - 5}
                  textAnchor={city.anchor}
                  fontFamily={FONT}
                  fontWeight="800"
                  fontSize="10.5"
                  fill={isHov ? GREEN : W}
                  opacity={isHov ? 1 : 0.85}
                  style={{ transition: "fill 0.2s" }}
                >
                  {city.name.toUpperCase()}
                </text>
                {/* Badge */}
                <text
                  x={city.cx + city.offset}
                  y={city.cy + 8}
                  textAnchor={city.anchor}
                  fontFamily={FONT}
                  fontWeight="400"
                  fontSize="7.5"
                  letterSpacing="0.12em"
                  fill={W}
                  opacity={isHov ? 0.65 : 0.3}
                  style={{ transition: "opacity 0.2s" }}
                >
                  {city.badge}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* City detail card */}
      <div style={{
        width: 200,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        flexShrink: 0,
      }}>
        {CITIES.map(city => {
          const isHov = hov === city.id;
          return (
            <div
              key={city.id}
              onMouseEnter={() => setHov(city.id)}
              onMouseLeave={() => setHov(null)}
              style={{
                padding: "20px 24px",
                backgroundColor: isHov ? `${GREEN}12` : "transparent",
                borderLeft: `2px solid ${isHov ? GREEN : W08}`,
                cursor: "pointer",
                transition: "background 0.2s, border-color 0.2s",
              }}
            >
              <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: isHov ? GREEN : W40, marginBottom: 6, transition: "color 0.2s" }}>{city.badge}</div>
              <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 18, letterSpacing: "-0.04em", color: isHov ? W : `${W}88`, lineHeight: 1.1, transition: "color 0.2s" }}>{city.name}</div>
              <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 11, color: W40, marginTop: 4, opacity: isHov ? 0.8 : 0.45, transition: "opacity 0.2s" }}>{city.detail}</div>
            </div>
          );
        })}

        <div style={{ padding: "16px 24px", borderTop: `1px solid ${W08}`, marginTop: 8 }}>
          <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 11, color: W40, lineHeight: 1.6, opacity: 0.6 }}>
            Presencia directa en los tres principales centros de poder político y económico de Colombia.
          </div>
        </div>
      </div>
    </div>
  );
}

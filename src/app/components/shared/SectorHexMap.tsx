import { useState } from "react";
import { Link } from "react-router";
import { FONT, B0, B1, B2, B3, GREEN, W, W40, W08 } from "../../tokens";

const SECTORS = [
  { id: "gremios",      num: "01", label: "Gremios y\nAsociaciones",  short: "Gremios",     icon: "◆", color: "#0D1466", link: "/sectores/gremios",      desc: "ANDI, Fenalco,\nASObancaria, Camacol" },
  { id: "finanzas",     num: "02", label: "Finanzas\ny Banca",         short: "Finanzas",    icon: "◈", color: "#0A1260", link: "/sectores/finanzas",     desc: "Bancos, Aseguradoras,\nFiduciarias" },
  { id: "publico",      num: "03", label: "Sector Público\ny Gobierno", short: "Gobierno",   icon: "◉", color: "#080F55", link: "/sectores/publico",      desc: "Ministerios,\nAlcaldías, Gobernaciones" },
  { id: "construccion", num: "04", label: "Construcción e\nInfraestructura", short: "Construcción", icon: "◇", color: "#0D1466", link: "/sectores/construccion", desc: "Constructoras,\nConcesiones, Servicios" },
  { id: "salud",        num: "05", label: "Sector\nSalud",             short: "Salud",       icon: "○", color: "#0A1260", link: "/sectores/salud",        desc: "Laboratorios, Clínicas,\nEPS, Distribuidoras" },
  { id: "tecnologia",   num: "06", label: "Tecnología",                short: "Tecnología",  icon: "◎", color: "#080F55", link: "/sectores/tecnologia",   desc: "Startups, Fintechs,\nEmpresas SaaS" },
];

// Hex dimensions
const HW = 200;  // hex width
const HH = 172;  // hex height (HW * √3/2 ≈ 0.866)
const COLS = 3;
const ROWS = 2;
const OFFSET_X = HW * 0.5;  // offset for even rows

export function SectorHexMap({ dark = true }: { dark?: boolean }) {
  const [hov, setHov] = useState<string | null>(null);

  const totalW = COLS * HW + OFFSET_X + 40;
  const totalH = ROWS * HH * 0.75 + HH * 0.25 + 40;

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Label */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 56 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GREEN, outline: `2px solid ${GREEN}55` }} />
        <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: dark ? W40 : `${B3}77` }}>
          Sectores que servimos
        </span>
      </div>

      {/* Hex grid wrapper */}
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center",
        minHeight: 460, position: "relative",
      }}>
        <div style={{ position: "relative", width: totalW, height: 480 }} className="hidden md:block">
          {SECTORS.map((s, i) => {
            const row = Math.floor(i / COLS);
            const col = i % COLS;
            const x = col * HW + (row % 2 === 1 ? OFFSET_X : 0);
            const y = row * (HH * 0.75);
            const isHov = hov === s.id;

            return (
              <Link key={s.id} to={s.link}
                onMouseEnter={() => setHov(s.id)}
                onMouseLeave={() => setHov(null)}
                style={{
                  position: "absolute", left: x, top: y,
                  width: HW, height: HH,
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  backgroundColor: isHov ? GREEN : (dark ? s.color : `${B3}14`),
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  textDecoration: "none", cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  border: "none", outline: "none",
                }}>
                {/* Inner hex border effect */}
                <div style={{
                  position: "absolute", inset: 2,
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  backgroundColor: isHov ? `${GREEN}CC` : "transparent",
                  border: `1px solid ${isHov ? GREEN : dark ? `${W}18` : `${B3}22`}`,
                  transition: "background-color 0.3s ease",
                  pointerEvents: "none",
                }} />

                {/* Content */}
                <div style={{ position: "relative", textAlign: "center", padding: "0 28px", zIndex: 1 }}>
                  <div style={{
                    fontFamily: FONT, fontSize: 20, marginBottom: 10,
                    color: isHov ? B3 : GREEN,
                    transition: "color 0.3s",
                  }}>{s.icon}</div>
                  <div style={{
                    fontFamily: FONT, fontWeight: 900, fontSize: "clamp(13px, 1.3vw, 15px)",
                    letterSpacing: "-0.02em", lineHeight: 1.2, textAlign: "center",
                    color: isHov ? B3 : W,
                    whiteSpace: "pre-line",
                    transition: "color 0.3s",
                  }}>{s.label}</div>
                  <div style={{
                    fontFamily: FONT, fontWeight: 300, fontSize: 11,
                    lineHeight: 1.5, textAlign: "center", marginTop: 8,
                    color: isHov ? `${B3}BB` : W40,
                    whiteSpace: "pre-line",
                    opacity: isHov ? 1 : 0.6,
                    transition: "color 0.3s, opacity 0.3s",
                  }}>{s.desc}</div>
                  <div style={{
                    fontFamily: FONT, fontWeight: 900, fontSize: 10,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: isHov ? `${B3}77` : W40,
                    marginTop: 6, opacity: 0.7,
                    transition: "color 0.3s",
                  }}>{s.num}</div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile fallback — simple list */}
        <div className="flex flex-col md:hidden" style={{ width: "100%", display: "none" }}>
          {SECTORS.map(s => (
            <Link key={s.id} to={s.link}
              style={{ display: "flex", alignItems: "center", gap: 20, padding: "18px 0", borderBottom: `1px solid ${W08}`, textDecoration: "none" }}>
              <span style={{ fontFamily: FONT, fontSize: 22, color: GREEN, flexShrink: 0 }}>{s.icon}</span>
              <div>
                <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 16, color: W }}>{s.short}</div>
                <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: W40 }}>{s.desc.replace("\n", " ")}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <Link to="/sectores" style={{
          fontFamily: FONT, fontWeight: 600, fontSize: 12, letterSpacing: "0.1em",
          textTransform: "uppercase", color: GREEN, textDecoration: "none",
          borderBottom: `1px solid ${GREEN}55`, paddingBottom: 2,
        }}>Ver todos los sectores →</Link>
      </div>
    </div>
  );
}

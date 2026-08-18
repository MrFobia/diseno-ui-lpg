import { useState } from "react";
import { Link } from "react-router";
import { PageHero } from "../components/shared/PageHero";
import { Glow } from "../components/shared/Glow";
import imgPersona from "figma:asset/25a2d6a5fa7ba5e46df1b52c9355918f1cddea84.png";
import { SECTOR_LOGOS } from "../data/clientLogos";
import { FONT, B1, B3, B4, GREEN, W, W40, W08, L_BG, L_BG2, L_TEXT, L_MID, L_RULE } from "../tokens";

const SECTORS = SECTOR_LOGOS;

const TESTIMONIALS = [
  { quote: "LPG transformó nuestra estrategia de relacionamiento con el Congreso. Los resultados en seis meses superaron lo que logramos en años anteriores.", name: "Carlos A. Mejía",  role: "CEO · Constructora Nacional",      img: imgPersona },
  { quote: "Su equipo de crisis manejó una situación crítica con una velocidad y efectividad que francamente nos sorprendió. Hoy nuestra reputación está intacta.",     name: "Sofía Restrepo", role: "Presidenta · Sector Salud",          img: imgPersona },
  { quote: "El IPM nos dio visibilidad sobre nuestra presencia en medios que nunca habíamos tenido. Cambia completamente cómo tomamos decisiones de comunicación.",    name: "Jorge Pizano",   role: "Director Comunicaciones · Banca",    img: imgPersona },
];

const CASES = [
  { sector: "Sector Público", title: "Gestión legislativa para reforma regulatoria crítica",          result: "+47 congresistas comprometidos en 90 días",          img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { sector: "Construcción",   title: "Manejo de crisis reputacional durante investigación mediática", result: "Recuperación del 92% del share of voice positivo",    img: "https://images.unsplash.com/photo-1620715153885-9c2c36155b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { sector: "Finanzas",       title: "Posicionamiento de vocero para fusión corporativa de alto perfil", result: "Cobertura en 28 medios nacionales e internacionales", img: "https://images.unsplash.com/photo-1682617367184-5ccbda40e4a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { sector: "Tecnología",     title: "Estrategia digital para lanzamiento de producto disruptivo",    result: "3.2M de impresiones orgánicas en 30 días",             img: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
];

export default function Clientes() {
  const [caseHov, setCaseHov] = useState<number | null>(null);
  const [testHov, setTestHov] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Nuestros clientes"
        title="200+ ORGANIZACIONES"
        titleAccent=" CONFÍAN EN LPG."
        subtitle="Trabajamos con las organizaciones más influyentes de Colombia en sectores que requieren discreción, estrategia y resultados medibles."
        image="https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
      />

      {/* ── Logos por sector ── */}
      <section id="logos" style={{ backgroundColor: L_BG }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ height: 1, width: 28, backgroundColor: B3, opacity: 0.3 }} />
              <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: B3, opacity: 0.6 }}>Portafolio</span>
            </div>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: B3 }}>ALGUNOS DE<br />NUESTROS CLIENTES</h2>
          </div>

          {SECTORS.map(sec => (
            <div key={sec.name} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: `1px solid ${L_RULE}` }}>
              <p style={{ fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: B3, opacity: 0.5, marginBottom: 24 }}>{sec.name}</p>
              {/* lpg-logo-row reduces gap from 64px → 32px on mobile */}
              <div className="lpg-logo-row" style={{ display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap" }}>
                {sec.logos.map((src, j) => (
                  <div key={j} style={{ width: 120, height: 40, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <img src={src} alt=""
                      style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", filter: "grayscale(1) brightness(0)", opacity: 0.35, transition: "opacity 0.2s, filter 0.2s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.opacity = "0.7"; (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.opacity = "0.35"; (e.currentTarget as HTMLImageElement).style.filter = "grayscale(1) brightness(0)"; }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats dark strip ── */}
      <section style={{ backgroundColor: B1, position: "relative", overflow: "hidden", borderTop: `1px solid ${W08}` }}>
        <Glow cx="50%" cy="50%" color={B3} size="100%" opacity={0.15} />
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, position: "relative" }}>
          {/* Removed inline display/gridTemplateColumns — Tailwind handles responsive */}
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 1, backgroundColor: W08 }}>
            {[
              { n: "200+", l: "Clientes activos" },
              { n: "98%",  l: "Tasa de retención" },
              { n: "6",    l: "Sectores de industria" },
              { n: "24/7", l: "Disponibilidad en crisis" },
            ].map(({ n, l }) => (
              <div key={l} className="lpg-stat-item" style={{ padding: "56px 40px", backgroundColor: B1 }}>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.05em", color: GREEN, lineHeight: 1, marginBottom: 10 }}>{n}</div>
                <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, color: W40, lineHeight: 1.5 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonios ── */}
      <section id="testimonios" style={{ backgroundColor: L_BG2, borderTop: `1px solid ${L_RULE}` }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ height: 1, width: 28, backgroundColor: B3, opacity: 0.3 }} />
              <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: B3, opacity: 0.6 }}>Testimonios</span>
            </div>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: B3 }}>LO QUE DICEN<br />NUESTROS CLIENTES</h2>
          </div>

          {/* Removed inline display/gridTemplateColumns — Tailwind handles responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 2, backgroundColor: L_RULE }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i}
                className="lpg-test-card"
                onMouseEnter={() => setTestHov(i)} onMouseLeave={() => setTestHov(null)}
                style={{ backgroundColor: testHov === i ? B3 : L_BG, padding: "48px 40px", transition: "background 0.25s", cursor: "default" }}>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 64, lineHeight: 0.8, color: testHov === i ? GREEN : B3, opacity: 0.3, marginBottom: 28, transition: "color 0.25s" }}>"</div>
                <p style={{ fontFamily: FONT, fontWeight: 500, fontSize: "clamp(15px, 1.8vw, 20px)", lineHeight: 1.5, letterSpacing: "-0.01em", color: testHov === i ? W : B3, marginBottom: 36, transition: "color 0.25s" }}>"{t.quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 16, borderTop: `1px solid ${testHov === i ? `${W}22` : L_RULE}`, paddingTop: 24, transition: "border-color 0.25s" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                    <img src={t.img} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(0.3)" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "-0.01em", color: testHov === i ? W : L_TEXT }}>{t.name}</div>
                    <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: testHov === i ? `${W}66` : L_MID, marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Casos de Éxito ── */}
      <section id="casos" style={{ backgroundColor: L_BG, borderTop: `1px solid ${L_RULE}` }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ height: 1, width: 28, backgroundColor: B3, opacity: 0.3 }} />
              <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: B3, opacity: 0.6 }}>Casos de Éxito</span>
            </div>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: B3 }}>RESULTADOS<br />CONCRETOS.</h2>
          </div>

          {/* Removed inline display/gridTemplateColumns — Tailwind handles responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 2, backgroundColor: L_RULE }}>
            {CASES.map((c, i) => (
              <div key={i}
                onMouseEnter={() => setCaseHov(i)} onMouseLeave={() => setCaseHov(null)}
                style={{ cursor: "pointer", backgroundColor: L_BG }}>
                <div style={{ aspectRatio: "16/9", overflow: "hidden", position: "relative" }}>
                  <img src={c.img} alt={c.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: caseHov === i ? "grayscale(0.1)" : "grayscale(0.5)", transform: caseHov === i ? "scale(1.04)" : "scale(1)", transition: "filter 0.5s, transform 0.6s" }} />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(160deg, ${B3}${caseHov === i ? "33" : "77"} 0%, transparent 70%)`, transition: "background 0.5s", pointerEvents: "none" }} />
                  <span style={{ position: "absolute", top: 20, left: 20, fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", backgroundColor: GREEN, color: B3, padding: "5px 12px" }}>{c.sector}</span>
                </div>
                <div className="lpg-case-body" style={{ padding: "32px 36px", borderTop: `1px solid ${L_RULE}` }}>
                  <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "-0.02em", lineHeight: 1.25, color: B3, marginBottom: 16 }}>{c.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GREEN, flexShrink: 0 }} />
                    <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 13, color: B3, opacity: 0.7 }}>{c.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: B3, position: "relative", overflow: "hidden" }}>
        <Glow cx="50%" cy="50%" color={B4} size="80%" opacity={0.25} />
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80, position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
          <div>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(32px, 5vw, 72px)", letterSpacing: "-0.04em", lineHeight: 0.9, color: W, marginBottom: 16 }}>TU ORGANIZACIÓN<br />PUEDE SER LA PRÓXIMA.</h2>
            <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 16, color: `${W}80`, maxWidth: 400, lineHeight: 1.7 }}>Únete a más de 200 organizaciones que confían en LPG para sus decisiones más estratégicas.</p>
          </div>
          <Link to="/contacto" style={{ fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: GREEN, color: B3, padding: "18px 44px", textDecoration: "none", flexShrink: 0 }}>Hablar con un experto →</Link>
        </div>
      </section>
    </>
  );
}

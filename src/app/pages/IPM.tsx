import { useState } from "react";
import { Link } from "react-router";
import { PageHero } from "../components/shared/PageHero";
import { Glow } from "../components/shared/Glow";
import { FONT, B1, B3, B4, GREEN, W, W40, W08, L_BG, L_BG2, L_MID, L_RULE } from "../tokens";

const METODOLOGIA = [
  { n: "01", title: "Monitoreo", desc: "Rastreo en tiempo real de más de 800 medios digitales, impresos, radio y televisión en todo el país." },
  { n: "02", title: "Análisis",  desc: "Algoritmos propietarios clasifican el sentimiento, relevancia e impacto de cada mención." },
  { n: "03", title: "Índice",    desc: "Generamos un puntaje IPM único que permite comparar la presencia mediática entre organizaciones." },
  { n: "04", title: "Reporte",   desc: "Entregamos dashboards mensuales y reportes ejecutivos con recomendaciones estratégicas accionables." },
];

const REPORTS = [
  { title: "IPM Colombia Q1 2026",                      desc: "Análisis de los 50 líderes corporativos con mayor presencia en medios del primer trimestre.",          date: "Marzo 2026",     tag: "Descargable" },
  { title: "Informe Especial: Crisis Reputacionales 2025", desc: "Estudio de los 10 casos de crisis corporativas más significativos del año y cómo fueron manejados.", date: "Enero 2026",     tag: "Gratuito" },
  { title: "IPM Sectorial: Finanzas y Banca",           desc: "Presencia comparativa de las principales entidades financieras del sistema colombiano.",               date: "Diciembre 2025", tag: "Suscriptores" },
];

export default function IPM() {
  const [hov, setHov] = useState<number | null>(null);
  const [form, setForm] = useState({ org: "", email: "", cargo: "" });

  return (
    <>
      <PageHero
        eyebrow="Herramienta exclusiva"
        title="ÍNDICE DE PRESENCIA"
        titleAccent="EN MEDIOS."
        subtitle="El IPM de LPG es la única herramienta en Colombia que mide, analiza y compara la presencia mediática de organizaciones y líderes en tiempo real."
        tags={["Análisis de Medios", "Tiempo Real", "800+ Fuentes", "IA"]}
        image="https://images.unsplash.com/photo-1686061593213-98dad7c599b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
      />

      {/* ── Qué es el IPM ── */}
      <section style={{ backgroundColor: L_BG, position: "relative", overflow: "hidden" }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 100, paddingBottom: 100, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ height: 1, width: 28, backgroundColor: B3, opacity: 0.3 }} />
            <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: B3, opacity: 0.6 }}>¿Qué es el IPM?</span>
          </div>

          <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: B3, maxWidth: 1100, marginBottom: 56 }}>
            INTELIGENCIA MEDIÁTICA<br />
            AL SERVICIO DE LA ESTRATEGIA.
          </h2>

          {/* Removed inline display/grid — Tailwind handles responsive */}
          <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10" style={{ alignItems: "start" }}>
            {/* Body copy */}
            <div className="md:col-span-7" style={{ borderTop: `1px solid ${L_RULE}`, paddingTop: 32 }}>
              <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 19, lineHeight: 1.75, color: L_MID, marginBottom: 26 }}>
                El <strong style={{ fontWeight: 700, color: B3 }}>Índice de Presencia en Medios (IPM)</strong> es una metodología propietaria de LPG que cuantifica y cualifica la presencia de organizaciones y líderes en el ecosistema mediático colombiano.
              </p>
              <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 19, lineHeight: 1.75, color: L_MID }}>
                Más allá del conteo de menciones, el IPM mide sentimiento, relevancia del medio, posición en la nota y evolución temporal para darte una visión estratégica de tu reputación mediática.
              </p>
            </div>

            {/* Feature stats — replaces the score-card mockup */}
            <div className="md:col-span-5" style={{ borderTop: `1px solid ${L_RULE}` }}>
              {[
                { n: "800+",     l: "Medios monitoreados" },
                { n: "IA",       l: "Análisis de sentimiento" },
                { n: "Mensual",  l: "Entrega de reportes" },
                { n: "Sectorial", l: "Benchmark competitivo" },
              ].map((f, i) => (
                <div key={f.l} style={{
                  display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16,
                  padding: "22px 0", borderBottom: `1px solid ${L_RULE}`,
                }}>
                  <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-0.03em", color: B3, flexShrink: 0 }}>{f.n}</span>
                  <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 14, letterSpacing: "0.02em", color: L_MID, textAlign: "right" }}>{f.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Metodología ── */}
      <section style={{ backgroundColor: B1, position: "relative", overflow: "hidden", borderTop: `1px solid ${W08}` }}>
        <Glow cx="50%" cy="50%" color={B3} size="100%" opacity={0.15} />
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80, position: "relative" }}>
          <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: W, marginBottom: 64 }}>CÓMO<br /><span style={{ color: GREEN }}>FUNCIONA.</span></h2>
          {/* Removed inline display/gridTemplateColumns — Tailwind handles responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 1, backgroundColor: W08 }}>
            {METODOLOGIA.map((m, i) => (
              <div key={m.n} className="lpg-meto-item" style={{ padding: "48px 32px", backgroundColor: B1, borderRight: i < 3 ? `1px solid ${W08}` : "none" }}>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 64, letterSpacing: "-0.06em", color: GREEN, opacity: 0.2, lineHeight: 1, marginBottom: 16 }}>{m.n}</div>
                <h4 style={{ fontFamily: FONT, fontWeight: 900, fontSize: 22, letterSpacing: "-0.03em", color: W, marginBottom: 12 }}>{m.title.toUpperCase()}</h4>
                <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 14, lineHeight: 1.75, color: W40 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reportes ── */}
      <section id="reportes" style={{ backgroundColor: L_BG2, borderTop: `1px solid ${L_RULE}` }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: `1px solid ${L_RULE}`, paddingBottom: 40, marginBottom: 56, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: B3 }}>ESTUDIOS<br />Y REPORTES</h2>
            <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, color: L_MID, alignSelf: "flex-end", paddingBottom: 8 }}>Publicaciones recientes</span>
          </div>
          {/* Removed inline display/gridTemplateColumns — Tailwind handles responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 2, backgroundColor: L_RULE }}>
            {REPORTS.map((r, i) => (
              <div key={i}
                className="lpg-report-card"
                onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
                style={{ backgroundColor: hov === i ? B3 : L_BG, padding: "44px 36px", transition: "background 0.25s", cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", backgroundColor: GREEN, color: B3, padding: "4px 10px" }}>{r.tag}</span>
                  <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: hov === i ? `${W}66` : L_MID }}>{r.date}</span>
                </div>
                <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "-0.02em", lineHeight: 1.25, color: hov === i ? W : B3, marginBottom: 16, transition: "color 0.25s" }}>{r.title}</h3>
                <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: hov === i ? `${W}77` : L_MID, marginBottom: 24, transition: "color 0.25s" }}>{r.desc}</p>
                <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: hov === i ? GREEN : B3, display: "flex", alignItems: "center", gap: 8, transition: "color 0.25s" }}>
                  Descargar →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formulario ── */}
      <section id="formulario" style={{ backgroundColor: B3, position: "relative", overflow: "hidden" }}>
        <Glow cx="80%" cy="50%" color={B4} size="60%" opacity={0.25} />
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80, position: "relative" }}>
          {/* Removed inline display/grid — Tailwind handles responsive */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-[80px]" style={{ alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(32px, 5vw, 72px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: W, marginBottom: 24 }}>SOLICITAR ACCESO AL IPM.</h2>
              <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 17, lineHeight: 1.85, color: `${W}77`, maxWidth: 400, marginBottom: 40 }}>Recibe un diagnóstico IPM gratuito de tu organización y descubre cómo mejorar tu presencia en medios.</p>
              {["Diagnóstico inicial gratuito", "Comparativa con tu sector", "Reunión con especialista incluida"].map(b => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GREEN, flexShrink: 0 }} />
                  <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 15, color: W }}>{b}</span>
                </div>
              ))}
            </div>
            <form onSubmit={e => { e.preventDefault(); alert("¡Solicitud enviada! Te contactaremos pronto."); }} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                { k: "org",   l: "Organización",       ph: "Nombre de tu empresa" },
                { k: "cargo", l: "Cargo",               ph: "Tu posición" },
                { k: "email", l: "Correo electrónico",  ph: "correo@empresa.com" },
              ].map(({ k, l, ph }) => (
                <div key={k}>
                  <label style={{ fontFamily: FONT, fontWeight: 500, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: `${W}66`, display: "block", marginBottom: 10 }}>{l}</label>
                  <input
                    type={k === "email" ? "email" : "text"}
                    placeholder={ph}
                    value={(form as any)[k]}
                    onChange={e => setForm({ ...form, [k]: e.target.value })}
                    style={{ width: "100%", background: "transparent", border: "none", borderBottom: `1px solid ${W}44`, padding: "0 0 12px", fontFamily: FONT, fontWeight: 300, fontSize: 17, color: W, outline: "none", boxSizing: "border-box" }}
                  />
                </div>
              ))}
              <button type="submit" style={{ alignSelf: "flex-start", backgroundColor: GREEN, color: B3, fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", padding: "18px 44px", cursor: "pointer" }}>
                Solicitar diagnóstico →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router";
import { INSIGHT_ARTICLES, articlePath } from "../data/content";
import { ALL_LOGOS } from "../data/clientLogos";
import imgPersona from "figma:asset/25a2d6a5fa7ba5e46df1b52c9355918f1cddea84.png";
import imgOffice  from "figma:asset/730840829b225cbc4017ffdb4809631bf68e48f0.png";
import { FONT, B0, B1, B3, B4, GREEN, W, W40, W08, W04 } from "../tokens";
import { Glow } from "../components/shared/Glow";

const SVC_IMGS = [
  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  "https://images.unsplash.com/photo-1682617367184-5ccbda40e4a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  "https://images.unsplash.com/photo-1620715153885-9c2c36155b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
];
const SVCS = [
  { num: "01", title: "COMUNICACIONES",       tags: ["Reputación", "Media Training", "Crisis PR", "Prensa"],    href: "/servicios/comunicaciones" },
  { num: "02", title: "ASUNTOS PÚBLICOS",    tags: ["Relacionamiento", "Gremios", "Congreso", "Lobby"],       href: "/servicios/asuntos-publicos" },
  { num: "03", title: "COMUNICACIÓN DIGITAL", tags: ["AI Social", "Analytics", "Content Lab", "SEO"],           href: "/servicios/digital" },
  { num: "04", title: "MANEJO DE CRISIS",     tags: ["Prevención", "Real-Time", "Recovery", "Monitoreo 24/7"],  href: "/servicios/crisis" },
];
const INS = INSIGHT_ARTICLES.slice(0, 3);

export default function Home() {
  const [in_, setIn] = useState(false);
  const [svcHov, setSvcHov] = useState<number | null>(null);
  const [insHov, setInsHov] = useState<number | null>(null);
  const allLogos = [...ALL_LOGOS, ...ALL_LOGOS, ...ALL_LOGOS];

  useEffect(() => { const t = setTimeout(() => setIn(true), 100); return () => clearTimeout(t); }, []);

  return (
    <>
      <style>{`@keyframes lpgMq{0%{transform:translateX(0)}100%{transform:translateX(-33.333%)}}`}</style>

      {/* ── Hero ── */}
      <section className="lpg-pad" style={{ minHeight: "82vh", position: "relative", overflow: "hidden", background: B1, display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingLeft: 48, paddingRight: 48, paddingBottom: 64 }}>
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.4) saturate(0.85)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse 90% 70% at 10% 20%, ${B4}55 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 85% 75%, ${B3}66 0%, transparent 60%)` }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, ${W04} 3px, ${W04} 4px)` }} />
        <div className="hidden md:flex" style={{ position: "absolute", top: 68, right: 48, alignItems: "center", gap: 10 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: GREEN }} />
          <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: W40 }}>Firma de consultoría estratégica</span>
        </div>
        <div style={{ maxWidth: 1440, width: "100%", margin: "0 auto", paddingTop: 120, position: "relative", zIndex: 1 }}>
          <div style={{ opacity: in_ ? 1 : 0, transform: in_ ? "translateY(0)" : "translateY(32px)", transition: "opacity 1.2s cubic-bezier(.16,1,.3,1), transform 1.2s cubic-bezier(.16,1,.3,1)" }}>
            <h1 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(48px, 7vw, 100px)", lineHeight: 0.9, letterSpacing: "-0.04em", color: W, margin: 0, userSelect: "none" }}>
              <span style={{ display: "block" }}>ESTRATEGIA</span>
              <span style={{ display: "block", color: GREEN }}>INTELIGENTE.</span>
              <span style={{ display: "block" }}>INFLUENCIA</span>
              <span style={{ display: "block", color: GREEN }}>REAL.</span>
            </h1>
          </div>
          <div style={{ marginTop: 60, borderTop: `1px solid ${W08}`, paddingTop: 28, display: "flex", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <div style={{ display: "flex", gap: 32 }}>
              {[{ n: "16", l: "Años" }, { n: "200+", l: "Clientes" }, { n: "3", l: "Ciudades" }].map(({ n, l }) => (
                <div key={l}>
                  <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 30, letterSpacing: "-0.04em", color: GREEN, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: FONT, fontWeight: 400, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: W40, marginTop: 5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/home-2" style={{ display: "inline-block", alignSelf: "flex-start", marginTop: 28, fontFamily: FONT, fontWeight: 500, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: W, textDecoration: "none", borderBottom: `1px solid ${W}55`, paddingBottom: 3, transition: "color 0.2s, border-color 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.color = GREEN; e.currentTarget.style.borderColor = `${GREEN}88`; }}
            onMouseLeave={e => { e.currentTarget.style.color = W; e.currentTarget.style.borderColor = `${W}55`; }}>
            Ver diseño 2 →
          </Link>
        </div>
      </section>

      {/* ── Clients ── */}
      <section style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid rgba(0,0,0,0.07)", overflow: "hidden", padding: "44px 0", position: "relative" }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, marginBottom: 28, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ height: 1, width: 28, backgroundColor: "rgba(0,0,0,0.15)" }} />
          <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }}>Confían en nosotros</span>
        </div>
        <div style={{ display: "flex", overflow: "hidden" }}>
          <div style={{ display: "flex", gap: 80, alignItems: "center", animation: "lpgMq 70s linear infinite", willChange: "transform", flexShrink: 0 }}>
            {allLogos.map((src, i) => (
              <div key={i} style={{ width: 100, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <img src={src} alt="" style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", filter: "grayscale(1) brightness(0)", opacity: 0.35 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="servicios" style={{ backgroundColor: "#FFFFFF", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 100, paddingBottom: 100, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 64 }}>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(40px, 6vw, 80px)", letterSpacing: "-0.05em", color: "#0A0A0A", lineHeight: 0.88, userSelect: "none" }}>SERVICIOS</h2>
            <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 13, color: "rgba(0,0,0,0.4)", alignSelf: "flex-end", paddingBottom: 8, letterSpacing: "0.06em" }}>04 áreas</span>
          </div>
          {SVCS.map((s, i) => (
            <Link key={s.num} to={s.href} style={{ textDecoration: "none", display: "block" }}
              onMouseEnter={() => setSvcHov(i)} onMouseLeave={() => setSvcHov(null)}>
              <div style={{ borderTop: `1px solid ${svcHov === i ? B3 + "44" : "rgba(0,0,0,0.08)"}`, padding: "32px 0", cursor: "pointer", transition: "background 0.28s ease", background: svcHov === i ? `linear-gradient(90deg, ${B3}08 0%, transparent 70%)` : "transparent", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 24, flex: 1, minWidth: 0 }}>
                  <span className="hidden sm:block" style={{ fontFamily: FONT, fontWeight: 400, fontSize: 12, letterSpacing: "0.12em", color: svcHov === i ? B3 + "99" : "rgba(0,0,0,0.3)", flexShrink: 0, transition: "color 0.28s" }}>{s.num}</span>
                  <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(18px, 3vw, 42px)", letterSpacing: "-0.03em", color: svcHov === i ? B3 : "#0A0A0A", lineHeight: 1, transition: "color 0.28s", flexShrink: 0 }}>{s.title}</span>
                  <div className="hidden lg:flex" style={{ gap: 8, flexWrap: "wrap", flex: 1 }}>
                    {s.tags.map(tag => (<span key={tag} style={{ fontFamily: FONT, fontWeight: 400, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: svcHov === i ? B3 + "CC" : "rgba(0,0,0,0.35)", border: `1px solid ${svcHov === i ? B3 + "33" : "rgba(0,0,0,0.1)"}`, padding: "4px 10px", transition: "color 0.28s, border-color 0.28s" }}>{tag}</span>))}
                  </div>
                </div>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ flexShrink: 0, transform: svcHov === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.28s ease" }}>
                  <path d="M6 22L22 6M22 6H8M22 6V20" stroke={svcHov === i ? B3 : "rgba(0,0,0,0.18)"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="hidden md:block" style={{ position: "absolute", right: svcHov === i ? 56 : 80, top: "50%", transform: "translateY(-50%)", width: 180, height: 116, overflow: "hidden", opacity: svcHov === i ? 1 : 0, transition: "opacity 0.3s ease, right 0.3s ease", pointerEvents: "none", border: `1px solid ${B3}22` }}>
                  <img src={SVC_IMGS[i]} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.65) saturate(0.7)" }} />
                </div>
              </div>
            </Link>
          ))}
          <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }} />
          <div style={{ marginTop: 36, display: "flex", justifyContent: "flex-end" }}>
            <Link to="/servicios" style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: B3, textDecoration: "none", borderBottom: `1px solid ${B3}55`, paddingBottom: 2 }}>Ver todos los servicios →</Link>
          </div>
        </div>
      </section>

      {/* ── Divisions ── */}
      <section style={{ backgroundColor: B0, borderTop: `1px solid ${W08}`, position: "relative", overflow: "hidden" }}>
        <Glow cx="50%" cy="0%" color={B3} size="100%" opacity={0.1} />
        <div className="lpg-pad grid grid-cols-2 md:grid-cols-4" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48 }}>
          {[
            { name: "Affairs",   items: ["Asuntos Públicos", "Reputación", "Gobierno"] },
            { name: "Media",     items: ["Comunicaciones", "Relaciones Públicas", "Prensa"] },
            { name: "Marketing", items: ["Branding", "Digital", "Influencers"] },
            { name: "Tech",      items: ["Análisis de Sentimiento", "Tendencias", "SEO"] },
          ].map((d, i) => (
            <div key={d.name} className="lpg-div-item" style={{ padding: "64px 0", paddingRight: 40, borderRight: i < 3 ? `1px solid ${W08}` : "none", paddingLeft: i > 0 ? 40 : 0 }}>
              <div style={{ marginBottom: 22 }}>
                <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: 15, letterSpacing: "-0.03em", color: GREEN }}>LPG</span>
                <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 15, letterSpacing: "-0.01em", color: W }}>  {d.name}</span>
              </div>
              {d.items.map(item => (<div key={item} style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, color: W40, marginBottom: 8, lineHeight: 1.6 }}>{item}</div>))}
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section style={{ backgroundColor: "#FFFFFF", position: "relative", overflow: "hidden" }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 100, paddingBottom: 100, position: "relative" }}>
          <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(60px, 8vw, 100px)", letterSpacing: "-0.04em", lineHeight: 1, color: B3, userSelect: "none", marginBottom: 48 }}>NOSOTROS</h2>

          {/* Grid: remove inline display/grid so Tailwind responsive classes work */}
          <div className="grid grid-cols-1 gap-10 items-start md:grid-cols-2 md:gap-[100px]">
            {/* Left column */}
            <div>
              <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(20px, 2.4vw, 38px)", lineHeight: 1.25, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: 28 }}>
                Libreta Personal Group es una firma de consultoría estratégica con 16 años construyendo confianza en las organizaciones más influyentes de Colombia.
              </p>
              <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 17, lineHeight: 1.8, color: "rgba(0,0,0,0.45)", marginBottom: 48 }}>
                Operamos en la intersección de la política, los negocios y la comunicación. Un espacio donde la información es poder y la reputación es capital. Nuestros clientes nos eligen porque somos discretos, estratégicos y medibles.
              </p>

              {/* Stats 2×2 grid */}
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: 40, columnGap: 24 }}>
                {[
                  { n: "16",   l: "Años en el mercado" },
                  { n: "3",    l: "Ciudades: Bogotá · Cali · Medellín" },
                  { n: "4",    l: "Divisiones especializadas" },
                  { n: "200+", l: "Clientes estratégicos" },
                ].map(({ n, l }) => (
                  <div key={l}>
                    <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 48, letterSpacing: "-0.04em", color: B3, lineHeight: 1 }}>{n}</div>
                    <div style={{ fontFamily: FONT, fontWeight: 400, fontSize: 13, color: "rgba(0,0,0,0.4)", marginTop: 8 }}>{l}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 48 }}>
                <Link to="/nosotros" style={{ fontFamily: FONT, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: B3, textDecoration: "none", borderBottom: `1px solid ${B3}55`, paddingBottom: 2 }}>Conocer más →</Link>
              </div>
            </div>

            {/* Right column — photo + quote overlay */}
            <div style={{ position: "relative" }}>
              <div className="lpg-about-img-wrap" style={{ overflow: "hidden", position: "relative", height: "940px" }}>
                <img src={imgOffice} alt="LPG" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.8s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
              </div>
              {/* Blue quote box — positioned over the image */}
              <div style={{ position: "absolute", left: 24, bottom: 24, right: 24, maxWidth: 297, backgroundColor: B3, padding: "31px 40px" }}>
                <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: 22, lineHeight: 1.4, letterSpacing: "-0.02em", color: GREEN, margin: 0 }}>
                  Comunicación asertiva, basada en datos, no en suposiciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section style={{ backgroundColor: B0, borderTop: `1px solid ${W08}`, position: "relative", overflow: "hidden" }}>
        <Glow cx="50%" cy="50%" color={B4} size="80%" opacity={0.2} />
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 100, paddingBottom: 100, position: "relative" }}>
          <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 100, lineHeight: 0.8, color: GREEN, marginBottom: 36, letterSpacing: "-0.05em" }}>"</div>
          <blockquote style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(20px, 3.5vw, 44px)", lineHeight: 1.2, letterSpacing: "-0.03em", color: W, maxWidth: 960, margin: "0 0 48px" }}>
            Gracias a su manejo de crisis, pudimos proteger la reputación de nuestra marca en un momento crítico. Su respuesta fue inmediata y completamente profesional.
          </blockquote>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 46, height: 46, borderRadius: "50%", overflow: "hidden", border: `1px solid ${GREEN}44`, flexShrink: 0 }}>
              <img src={imgPersona} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.8)" }} />
            </div>
            <div>
              <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: W }}>Carlos Andrés Mejía</div>
              <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, letterSpacing: "0.06em", color: W40, marginTop: 4 }}>CEO · Constructora Nacional</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Insights ── */}
      <section style={{ backgroundColor: "#FFFFFF", position: "relative", overflow: "hidden" }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 100, paddingBottom: 100, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: `1px solid #00000014`, paddingBottom: 40, marginBottom: 56 }}>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(40px, 5.5vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.85, color: B3 }}>INSIGHTS</h2>
            <Link to="/thought-leadership/insights" style={{ fontFamily: FONT, fontWeight: 500, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: B3, textDecoration: "none", alignSelf: "flex-end", paddingBottom: 8, borderBottom: `1px solid ${B3}55` }}>Ver todos →</Link>
          </div>
          {/* Removed inline display/gridTemplateColumns — Tailwind responsive classes handle layout */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 40 }}>
            {INS.map((item, i) => (
              <Link key={item.slug} to={articlePath(item)} onMouseEnter={() => setInsHov(i)} onMouseLeave={() => setInsHov(null)} style={{ cursor: "pointer", display: "flex", flexDirection: "column", height: "100%", textDecoration: "none" }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative", backgroundColor: "#111" }}>
                  <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: `brightness(${insHov === i ? 0.95 : 0.78}) saturate(${insHov === i ? 1 : 0.7})`, transform: insHov === i ? "scale(1.05)" : "scale(1)", transition: "filter 0.5s ease, transform 0.6s ease" }} />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(160deg, ${B3}${insHov === i ? "11" : "33"} 0%, transparent 80%)`, transition: "background 0.5s ease" }} />
                </div>
                <div style={{ padding: "24px 0", borderBottom: `1px solid #00000014`, display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: B3, marginBottom: 10 }}>{item.cat}</div>
                  <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(16px, 1.8vw, 22px)", letterSpacing: "-0.02em", lineHeight: 1.25, color: "#0a0a0a", marginBottom: 16, flex: 1 }}>{item.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: "#00000059" }}>{item.date}</span>
                    <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: insHov === i ? B3 : "#00000059", transition: "color 0.2s" }}>Leer →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latam Map ── */}
      <section style={{ backgroundColor: B1, borderTop: `1px solid ${W08}`, position: "relative", overflow: "hidden" }}>
        <Glow cx="50%" cy="0%" color={B3} size="80%" opacity={0.15} />
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 90, paddingBottom: 90, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: GREEN }} />
                <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: W40 }}>Presencia en Colombia</span>
              </div>
              <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 5.5vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.9, color: W }}>
                TRES CIUDADES,<br /><span style={{ color: GREEN }}>UNA ESTRATEGIA.</span>
              </h2>
            </div>
            <div style={{ alignSelf: "flex-end", paddingBottom: 8 }}>
              <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 40, letterSpacing: "-0.05em", color: GREEN, lineHeight: 1 }}>3</div>
              <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: W40, marginTop: 4 }}>Bogotá · Cali · Medellín</div>
            </div>
          </div>

          {/* City cards — three columns, no external map component */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, backgroundColor: W08 }}>
            {[
              { num: "01", name: "Bogotá",   role: "Sede Principal",    primary: true,
                address: "Cra 7 #71-52, Edificio Aliadas, Piso 8",    phone: "+57 (1) 555-0200",
                email: "bogota@libretapersonal.co", hours: "Lun–Vie 8am–6pm" },
              { num: "02", name: "Cali",     role: "Oficina Valle",     primary: false,
                address: "Av. 5N #23-10, Torre Empresarial, Piso 12", phone: "+57 (2) 555-0100",
                email: "cali@libretapersonal.co", hours: "Lun–Vie 8am–6pm" },
              { num: "03", name: "Medellín", role: "Oficina Antioquia", primary: false,
                address: "El Poblado, Cra 43A #7-50, Of. 301",        phone: "+57 (4) 555-0300",
                email: "medellin@libretapersonal.co", hours: "Lun–Vie 8am–6pm" },
            ].map(city => (
              <div key={city.name} style={{ backgroundColor: B1, padding: "40px 36px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: 20, top: 12, fontFamily: FONT, fontWeight: 900, fontSize: 110, letterSpacing: "-0.08em", color: W, opacity: 0.03, lineHeight: 1, userSelect: "none" }}>{city.name[0]}</div>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 11, letterSpacing: "0.2em", color: GREEN, opacity: 0.5, marginBottom: 24 }}>{city.num}</div>
                <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(22px, 2.5vw, 40px)", letterSpacing: "-0.04em", color: W, lineHeight: 0.9, marginBottom: 16 }}>{city.name.toUpperCase()}</h3>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: city.primary ? GREEN : W08, padding: "5px 12px", marginBottom: 24 }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: city.primary ? B3 : GREEN }} />
                  <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: city.primary ? B3 : W }}>{city.role}</span>
                </div>
                <div style={{ borderTop: `1px solid ${W08}`, paddingTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { label: "Dirección", value: city.address },
                    { label: "Teléfono", value: city.phone },
                    { label: "Email",    value: city.email },
                    { label: "Horario",  value: city.hours },
                  ].map(row => (
                    <div key={row.label}>
                      <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: GREEN, opacity: 0.6, marginBottom: 4 }}>{row.label}</div>
                      <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: W40, lineHeight: 1.5 }}>{row.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Hablemos ── */}
      <section style={{ backgroundColor: B3, position: "relative", overflow: "hidden" }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 100, paddingBottom: 100, position: "relative" }}>
          {/* Removed inline display/gridTemplateColumns — Tailwind responsive classes handle layout */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-[80px]" style={{ alignItems: "start" }}>

            {/* ── Left: heading · body · contact info ── */}
            <div>
              <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(60px, 7vw, 100px)", letterSpacing: "-0.04em", lineHeight: 1, color: W, marginBottom: 40 }}>HABLEMOS.</h2>
              <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 18, lineHeight: 1.75, color: W, maxWidth: 368, marginBottom: 56 }}>
                Cuéntanos sobre tu organización. Te mostraremos cómo LPG puede posicionarte donde mereces estar.
              </p>

              {[
                { label: "EMAIL",    value: "contacto@libretapersonal.co" },
                { label: "TELÉFONO", value: "+57 (311) 234-5678" },
                { label: "CIUDADES", value: "Bogotá · Cali · Medellín" },
              ].map(({ label, value }) => (
                <div key={label} style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 21, paddingBottom: 21 }}>
                  <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>{label}</div>
                  <div style={{ fontFamily: FONT, fontWeight: 400, fontSize: 16, color: W }}>{value}</div>
                </div>
              ))}
            </div>

            {/* ── Right: form ── */}
            <div>
              {[
                { label: "Nombre completo",          placeholder: "Juan García",           type: "text" },
                { label: "Compañía u organización",  placeholder: "Nombre de la empresa",  type: "text" },
                { label: "Correo electrónico",        placeholder: "correo@empresa.com",    type: "email" },
              ].map(({ label, placeholder, type }) => (
                <div key={label} style={{ marginBottom: 32 }}>
                  <label style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", display: "block", marginBottom: 12 }}>{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="lpg-cta-input"
                    style={{ fontFamily: FONT, fontWeight: 300, fontSize: 18, color: W, backgroundColor: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", width: "100%", paddingBottom: 14, outline: "none" }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 48 }}>
                <label style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", display: "block", marginBottom: 12 }}>Mensaje</label>
                <textarea
                  placeholder="Cuéntanos sobre tu desafío..."
                  rows={4}
                  className="lpg-cta-input"
                  style={{ fontFamily: FONT, fontWeight: 300, fontSize: 18, color: W, backgroundColor: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", width: "100%", paddingBottom: 14, outline: "none", resize: "none", display: "block" }}
                />
              </div>

              <button
                style={{ fontFamily: FONT, fontWeight: 900, fontSize: 14, letterSpacing: "0.06em", textTransform: "uppercase", backgroundColor: GREEN, color: B3, border: "none", padding: "18px 40px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 12 }}
              >
                Enviar mensaje
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 11V3H5" stroke={B3} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
              </button>
            </div>
          </div>

          <style>{`.lpg-cta-input::placeholder { color: rgba(255,255,255,0.35); }`}</style>
        </div>
      </section>
    </>
  );
}

import { useState } from "react";
import { Link } from "react-router";
import { PageHero } from "../components/shared/PageHero";
import { Glow } from "../components/shared/Glow";
// Colombia cities map — inlined to avoid new-file HMR issues
import team1 from "../../imports/LIBRETA2171.jpg";
import team2 from "../../imports/LIBRETA2209.jpg";
import team3 from "../../imports/LIBRETA2324.jpg";
import team4 from "../../imports/LIBRETA2455.jpg";
import team5 from "../../imports/LIBRETA2431 1.jpg";
import team6 from "../../imports/LIBRETA2350.jpg";
import team7 from "../../imports/team7-carolina-pinzon.png";
import { FONT, B1, B3, B4, GREEN, W, W40, W08, L_BG, L_BG2, L_MID, L_RULE } from "../tokens";

const TEAM = [
  { name: "Camilo Cano",           role: "CEO",                         tag: "CEO",       img: team1 },
  { name: "Juan Mesa",             role: "Socio Fundador",              tag: "Socio",     img: team2 },
  { name: "Alejandra López",       role: "Directora Cali",              tag: "Directora", img: team3 },
  { name: "Ana Bateman",           role: "Directora",                   tag: "Directora", img: team4 },
  { name: "Leidy Guevara",         role: "Directora Administrativa",    tag: "Directora", img: team5 },
  { name: "Claudia Peña",          role: "Directora Digital",           tag: "Directora", img: team6 },
  { name: "Carolina Pinzón",       role: "Directora Medellín",          tag: "Directora", img: team7 },
  { name: "Viviana Torres",        role: "Directora",                   tag: "Directora", img: null  },
  { name: "Luz Karime Hernández",  role: "Directora",                   tag: "Directora", img: null  },
];

const VALUES = [
  { icon: "◆", title: "Discreción",           desc: "Tratamos cada mandato con la confidencialidad que exige el entorno corporativo y político." },
  { icon: "◈", title: "Rigor Analítico",       desc: "Cada decisión estratégica está respaldada por datos, monitoreo e inteligencia de entorno." },
  { icon: "◉", title: "Orientación al Resultado", desc: "Medimos el éxito en resultados concretos: posicionamiento, reputación e influencia real." },
  { icon: "◇", title: "Innovación Constante",  desc: "Incorporamos tecnologías emergentes como IA para mantenernos a la vanguardia." },
];

const OFFICE_CITIES = [
  { name: "Bogotá",   badge: "Sede Principal",    since: "2010", primary: true,
    address: "Cra 7 #71-52, Edificio Aliadas, Piso 8",   phone: "+57 (1) 555-0200",
    email: "bogota@libretapersonal.co", hours: "Lun–Vie 8am–6pm" },
  { name: "Cali",     badge: "Oficina Valle",     since: "2004", primary: false,
    address: "Av. 5N #23-10, Torre Empresarial, Piso 12", phone: "+57 (2) 555-0100",
    email: "cali@libretapersonal.co", hours: "Lun–Vie 8am–6pm" },
  { name: "Medellín", badge: "Oficina Antioquia", since: "2018", primary: false,
    address: "El Poblado, Cra 43A #7-50, Of. 301",       phone: "+57 (4) 555-0300",
    email: "medellin@libretapersonal.co", hours: "Lun–Vie 8am–6pm" },
];

export default function Nosotros() {
  const [teamHov, setTeamHov] = useState<number | null>(null);
  const [valHov, setValHov]   = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="DOS DÉCADAS"
        titleAccent=" CONSTRUYENDO CONFIANZA."
        subtitle="Somos la firma de consultoría estratégica de referencia en Colombia para organizaciones que necesitan influencia, reputación y resultados."
        image="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
      />

      {/* ── Misión y Visión ── */}
      <section id="mision" style={{ backgroundColor: L_BG }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80 }}>
          {/* Removed inline display/grid — Tailwind handles responsive */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[80px]" style={{ alignItems: "start" }}>
            {/* Left: border-right on desktop, border-bottom on mobile via lpg-mision-left */}
            <div className="lpg-mision-left" style={{ borderRight: `1px solid ${L_RULE}`, paddingRight: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: GREEN, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: 10, color: B3 }}>M</span>
                </div>
                <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: B3 }}>Misión</span>
              </div>
              <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(22px, 2.8vw, 34px)", lineHeight: 1.25, letterSpacing: "-0.02em", color: B3 }}>
                Posicionar estratégicamente a nuestros clientes en los espacios de poder donde se toman las decisiones que transforman sectores y organizaciones.
              </p>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", border: `1px solid ${B3}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: 10, color: B3 }}>V</span>
                </div>
                <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: B3 }}>Visión</span>
              </div>
              <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(22px, 2.8vw, 34px)", lineHeight: 1.25, letterSpacing: "-0.02em", color: B3, marginBottom: 32 }}>
                Ser la firma latinoamericana líder en consultoría política y reputacional, reconocida por su rigor, discreción y orientación al resultado.
              </p>
              <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 16, lineHeight: 1.85, color: L_MID }}>
                Desde Bogotá, operamos en todo el territorio nacional con presencia en Cali y Medellín, y redes de alianzas en América Latina y Europa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats blue strip ── */}
      <section style={{ backgroundColor: B3, position: "relative", overflow: "hidden" }}>
        <Glow cx="50%" cy="50%" color={B4} size="80%" opacity={0.25} />
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, position: "relative" }}>
          {/* Removed inline display/gridTemplateColumns — Tailwind handles responsive */}
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 1, backgroundColor: `${W}18` }}>
            {[
              { n: "2004", l: "Año de fundación"       },
              { n: "20+",  l: "Años de trayectoria"    },
              { n: "200+", l: "Clientes estratégicos"  },
              { n: "3",    l: "Ciudades en Colombia"   },
            ].map(({ n, l }) => (
              <div key={l} className="lpg-stat-item" style={{ padding: "56px 36px" }}>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.05em", color: GREEN, lineHeight: 1, marginBottom: 10 }}>{n}</div>
                <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, color: `${W}80`, lineHeight: 1.5 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Estructura de Equipos ── */}
      <section id="socios" style={{ backgroundColor: L_BG2, borderTop: `1px solid ${L_RULE}` }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80 }}>

          {/* Section header */}
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ height: 1, width: 28, backgroundColor: B3, opacity: 0.3 }} />
              <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: B3, opacity: 0.6 }}>Liderazgo</span>
            </div>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 5.5vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: B3 }}>ESTRUCTURA<br />DE EQUIPOS.</h2>
            <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 15, color: L_MID, marginTop: 20, maxWidth: 520, lineHeight: 1.8 }}>Un mismo equipo directivo, con socios y directores especializados por área de práctica — algunos con dirección en Cali y Medellín.</p>
          </div>

          {/* ── Equipo unificado ── */}
          <div className="grid grid-cols-2 lg:grid-cols-3" style={{ gap: 2, backgroundColor: L_RULE }}>
            {TEAM.map((member, i) => {
              const isHighlight = member.tag === "CEO" || member.tag === "Socio" || member.tag === "Socia";
              const hovered = teamHov === i;
              return (
                <div key={i}
                  onMouseEnter={() => setTeamHov(i)} onMouseLeave={() => setTeamHov(null)}
                  style={{ cursor: "pointer", backgroundColor: L_BG }}>
                  <div style={{ aspectRatio: "3/4", overflow: "hidden", position: "relative", backgroundColor: L_BG2 }}>
                    {member.img ? (
                      <img src={member.img} alt={member.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: hovered ? "grayscale(0)" : "grayscale(0.55)", transform: hovered ? "scale(1.04)" : "scale(1)", transition: "filter 0.5s ease, transform 0.6s ease" }} />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                        <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: L_MID, opacity: 0.4, textAlign: "center" }}>Falta fotografía</span>
                      </div>
                    )}
                    {member.img && <div style={{ position: "absolute", inset: 0, background: hovered ? `linear-gradient(to top, ${B3}CC 0%, transparent 55%)` : `linear-gradient(to top, ${B3}55 0%, transparent 40%)`, transition: "background 0.5s ease", pointerEvents: "none" }} />}
                    {/* Role tag — top left */}
                    <div style={{ position: "absolute", top: 16, left: 16 }}>
                      <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", backgroundColor: isHighlight ? GREEN : `${B3}CC`, color: isHighlight ? B1 : W, padding: "5px 11px" }}>{member.tag}</span>
                    </div>
                  </div>
                  <div className="lpg-team-body" style={{ padding: "20px 24px", borderTop: `2px solid ${isHighlight ? GREEN : L_RULE}` }}>
                    <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(13px, 1.6vw, 17px)", letterSpacing: "-0.02em", color: B3, marginBottom: 4 }}>{member.name}</div>
                    <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: L_MID }}>{member.role}</div>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </section>

      {/* ── Cultura y Valores ── */}
      <section id="cultura" style={{ backgroundColor: L_BG, borderTop: `1px solid ${L_RULE}` }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80 }}>
          {/* Outer grid: title left + values right. Removed inline display/grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-10" style={{ alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 5.5vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: B3, marginBottom: 16 }}>CULTURA<br />Y VALORES</h2>
              <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 16, lineHeight: 1.85, color: L_MID }}>Los principios que guían cada mandato y definen la manera en que trabajamos con nuestros clientes.</p>
            </div>
            {/* Inner 2×2 values grid. Removed inline display/gridTemplateColumns */}
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 2, backgroundColor: L_RULE }}>
              {VALUES.map((v, i) => (
                <div key={v.title}
                  className="lpg-value-card"
                  onMouseEnter={() => setValHov(i)} onMouseLeave={() => setValHov(null)}
                  style={{ backgroundColor: valHov === i ? B3 : L_BG, padding: "48px 40px", transition: "background 0.25s", cursor: "default" }}>
                  <div style={{ fontFamily: FONT, fontSize: 28, color: valHov === i ? GREEN : B3, marginBottom: 16, transition: "color 0.25s" }}>{v.icon}</div>
                  <h4 style={{ fontFamily: FONT, fontWeight: 900, fontSize: 22, letterSpacing: "-0.03em", color: valHov === i ? W : B3, marginBottom: 12, transition: "color 0.25s" }}>{v.title}</h4>
                  <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 14, lineHeight: 1.75, color: valHov === i ? `${W}88` : L_MID, transition: "color 0.25s" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Presencia Nacional ── */}
      <section id="presencia" style={{ backgroundColor: B1, position: "relative", overflow: "hidden" }}>
        <Glow cx="30%" cy="50%" color={B3} size="70%" opacity={0.2} />
        <Glow cx="80%" cy="50%" color={B4} size="50%" opacity={0.15} />
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ height: 1, width: 28, backgroundColor: GREEN, opacity: 0.5 }} />
                <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: W40 }}>Presencia territorial</span>
              </div>
              <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 5.5vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: W }}>PRESENCIA<br /><span style={{ color: GREEN }}>EN COLOMBIA.</span></h2>
            </div>
            <div style={{ alignSelf: "flex-end", paddingBottom: 8 }}>
              <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 40, letterSpacing: "-0.05em", color: GREEN, lineHeight: 1 }}>3</div>
              <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: W40, marginTop: 4 }}>Bogotá · Cali · Medellín</div>
            </div>
          </div>
          {/* City presence cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, backgroundColor: W08 }}>
            {OFFICE_CITIES.map((city, i) => (
              <div key={city.name} style={{ backgroundColor: B1, padding: "48px 40px", position: "relative", overflow: "hidden" }}>
                {/* Large city initial as watermark */}
                <div style={{ position: "absolute", right: 24, top: 16, fontFamily: FONT, fontWeight: 900, fontSize: 120, letterSpacing: "-0.08em", color: W, opacity: 0.03, lineHeight: 1, userSelect: "none" }}>{city.name[0]}</div>
                {/* Number */}
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 11, letterSpacing: "0.2em", color: GREEN, opacity: 0.5, marginBottom: 28 }}>0{i + 1}</div>
                {/* City name */}
                <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.04em", color: W, lineHeight: 0.9, marginBottom: 20 }}>{city.name.toUpperCase()}</h3>
                {/* Badge */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: city.primary ? GREEN : W08, padding: "6px 14px", marginBottom: 24 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: city.primary ? B3 : GREEN }} />
                  <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: city.primary ? B3 : W }}>{city.badge}</span>
                </div>
                {/* Details */}
                <div style={{ borderTop: `1px solid ${W08}`, paddingTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { label: "Dirección", value: city.address },
                    { label: "Teléfono",  value: city.phone },
                    { label: "Email",     value: city.email },
                    { label: "Horario",   value: city.hours },
                  ].map(row => (
                    <div key={row.label}>
                      <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: GREEN, opacity: 0.6, marginBottom: 4 }}>{row.label}</div>
                      <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: W40, lineHeight: 1.5 }}>{row.value}</div>
                    </div>
                  ))}
                  <div style={{ fontFamily: FONT, fontWeight: 500, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: GREEN, opacity: 0.5, marginTop: 4 }}>Desde {city.since}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, padding: "20px 0", borderTop: `1px solid ${W08}` }}>
            <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, color: W40, opacity: 0.6 }}>Presencia directa en los tres principales centros de poder político y económico de Colombia.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: L_BG, borderTop: `1px solid ${L_RULE}` }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
          <div>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.04em", lineHeight: 0.9, color: B3, marginBottom: 16 }}>CONÓCENOS<br />PERSONALMENTE.</h2>
            <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 16, color: L_MID, maxWidth: 420, lineHeight: 1.7 }}>Agenda una sesión de presentación con nuestros socios y descubre cómo podemos trabajar juntos.</p>
          </div>
          <Link to="/agendar" style={{ fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: B3, color: W, padding: "18px 44px", textDecoration: "none", flexShrink: 0 }}>
            Agendar Presentación →
          </Link>
        </div>
      </section>
    </>
  );
}

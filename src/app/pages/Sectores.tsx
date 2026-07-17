import { useState } from "react";
import { Link } from "react-router";
import { PageHero } from "../components/shared/PageHero";
import { Glow } from "../components/shared/Glow";
import { FONT, B1, B3, B4, GREEN, W, W40, W08, L_BG, L_BG2, L_MID, L_RULE } from "../tokens";

const SECTORS = [
  {
    slug: "gremios", num: "01",
    title: "Gremios y Asociaciones",
    desc: "Acompañamos a gremios en su posicionamiento ante el gobierno, medios y opinión pública, gestionando su agenda de incidencia política con estrategia.",
    services: ["Representación gremial", "Agenda legislativa", "Posicionamiento público", "Comunicaciones sectoriales"],
    clients: "ANDI, Fenalco, ASOBANCARIA, Camacol",
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    slug: "finanzas", num: "02",
    title: "Finanzas y Banca",
    desc: "Estrategia de reputación, manejo de crisis y relacionamiento regulatorio para entidades financieras y aseguradoras.",
    services: ["Reputación corporativa", "Comunicaciones regulatorias", "Crisis financieras", "Vocería ejecutiva"],
    clients: "Bancos, Aseguradoras, Fiduciarias, Cooperativas",
    img: "https://images.unsplash.com/photo-1682617367184-5ccbda40e4a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    slug: "publico", num: "03",
    title: "Sector Público y Gobierno",
    desc: "Apoyamos entidades gubernamentales en comunicación institucional, gestión de imagen y posicionamiento de sus programas y políticas.",
    services: ["Comunicación institucional", "Gestión de imagen pública", "Vocería de funcionarios", "Relaciones con medios"],
    clients: "Ministerios, Alcaldías, Gobernaciones, Entidades descentralizadas",
    img: "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    slug: "construccion", num: "04",
    title: "Construcción e Infraestructura",
    desc: "Estrategias de relacionamiento comunitario, gestión ante autoridades y comunicación corporativa para proyectos de alto impacto.",
    services: ["Licencia social", "Gestión comunitaria", "Comunicación de proyectos", "Crisis ambientales"],
    clients: "Constructoras, Concesiones viales, Empresas de servicios públicos",
    img: "https://images.unsplash.com/photo-1620715153885-9c2c36155b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    slug: "salud", num: "05",
    title: "Sector Salud",
    desc: "Posicionamiento estratégico, manejo de crisis y comunicaciones para laboratorios farmacéuticos, clínicas y aseguradoras de salud.",
    services: ["Posicionamiento científico", "Crisis farmacéuticas", "Comunicación a pacientes", "Lobby sanitario"],
    clients: "Laboratorios, Clínicas, EPS, Distribuidoras farmacéuticas",
    img: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    slug: "tecnologia", num: "06",
    title: "Tecnología",
    desc: "Comunicaciones estratégicas para empresas tech, startups y scale-ups que buscan posicionamiento y credibilidad en el ecosistema colombiano.",
    services: ["Startup communications", "Digital PR", "Content marketing B2B", "Crisis reputacional tech"],
    clients: "Startups, Fintechs, Empresas SaaS, Scale-ups",
    img: "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

export default function Sectores() {
  const [gridHov, setGridHov] = useState<number | null>(null);
  const [cardHov, setCardHov] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Sectores"
        title="EXPERTOS EN"
        titleAccent=" SEIS SECTORES."
        subtitle="Conocemos las dinámicas políticas, reputacionales y comunicacionales de los sectores más estratégicos de Colombia."
        image="https://images.unsplash.com/photo-1752159684779-0639174cdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
      />

      {/* ── Sector grid nav ── */}
      <section style={{ backgroundColor: L_BG, borderBottom: `1px solid ${L_RULE}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          {/* Tailwind handles columns — no inline display/gridTemplateColumns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6" style={{ gap: 1, backgroundColor: L_RULE }}>
            {SECTORS.map((s, i) => (
              <a key={s.slug} href={`#${s.slug}`}
                onMouseEnter={() => setGridHov(i)} onMouseLeave={() => setGridHov(null)}
                style={{ backgroundColor: gridHov === i ? B3 : L_BG, padding: "32px 20px", textDecoration: "none", display: "block", transition: "background 0.22s" }}>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: gridHov === i ? `${W}60` : `${B3}55`, marginBottom: 10 }}>{s.num}</div>
                <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(13px, 1.4vw, 16px)", letterSpacing: "-0.01em", lineHeight: 1.25, color: gridHov === i ? W : B3, transition: "color 0.22s" }}>{s.title}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sector detail rows ── */}
      {SECTORS.map((s, i) => (
        <section key={s.slug} id={s.slug} style={{ backgroundColor: i % 2 === 0 ? L_BG : L_BG2, borderTop: `1px solid ${L_RULE}` }}>
          <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 100, paddingBottom: 100 }}>
            {/* Tailwind handles columns — lpg-svc-text/img forces text-first on mobile */}
            <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2 md:gap-[80px]">

              {/* Text — always first on mobile via lpg-svc-text */}
              <div className="lpg-svc-text" style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: B3, opacity: 0.4 }}>{s.num}</span>
                  <div style={{ height: 1, width: 28, backgroundColor: B3, opacity: 0.2 }} />
                  <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: B3, opacity: 0.5 }}>Sector</span>
                </div>
                <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.04em", lineHeight: 0.9, color: B3, marginBottom: 24 }}>{s.title.toUpperCase()}</h2>
                <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 17, lineHeight: 1.85, color: L_MID, marginBottom: 32 }}>{s.desc}</p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 32 }}>
                  {s.services.map(svc => (
                    <div key={svc} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: GREEN, flexShrink: 0, outline: `1px solid ${B3}33` }} />
                      <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 14, color: B3, opacity: 0.8 }}>{svc}</span>
                    </div>
                  ))}
                </div>

                <div style={{ padding: "16px 20px", backgroundColor: `${GREEN}22`, borderLeft: `3px solid ${GREEN}`, marginBottom: 32 }}>
                  <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, color: B3 }}>
                    <strong style={{ fontWeight: 700 }}>Clientes de referencia:</strong> {s.clients}
                  </span>
                </div>

                <Link to="/contacto" style={{ fontFamily: FONT, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: B3, color: W, padding: "14px 36px", textDecoration: "none", display: "inline-block" }}>
                  Trabajemos juntos →
                </Link>
              </div>

              {/* Image — always second on mobile via lpg-svc-img */}
              <div className="lpg-svc-img" style={{ order: i % 2 === 0 ? 2 : 1, aspectRatio: "4/3", overflow: "hidden", position: "relative" }}
                onMouseEnter={() => setCardHov(i)} onMouseLeave={() => setCardHov(null)}>
                <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: cardHov === i ? "grayscale(0.1)" : "grayscale(0.3)", transform: cardHov === i ? "scale(1.04)" : "scale(1)", transition: "filter 0.5s, transform 0.6s" }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(160deg, ${B3}22 0%, transparent 50%)`, pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 20, right: 20 }}>
                  <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", backgroundColor: GREEN, color: B3, padding: "5px 12px" }}>{s.num} / 06</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section style={{ backgroundColor: B1, position: "relative", overflow: "hidden", borderTop: `1px solid ${W08}` }}>
        <Glow cx="50%" cy="50%" color={B3} size="100%" opacity={0.18} />
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 100, paddingBottom: 100, position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
          <div>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: W, marginBottom: 16 }}>¿TU SECTOR<br /><span style={{ color: GREEN }}>NO ESTÁ AQUÍ?</span></h2>
            <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 16, color: W40, maxWidth: 420, lineHeight: 1.7 }}>Trabajamos con cualquier organización que necesite estrategia, reputación e influencia. Cuéntanos tu caso.</p>
          </div>
          <Link to="/contacto" style={{ fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: GREEN, color: B3, padding: "18px 44px", textDecoration: "none" }}>Hablar con nosotros →</Link>
        </div>
      </section>
    </>
  );
}

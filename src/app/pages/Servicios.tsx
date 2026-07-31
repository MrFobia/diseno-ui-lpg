import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { PageHero } from "../components/shared/PageHero";
import { Glow } from "../components/shared/Glow";
import { FONT, B1, B3, GREEN, W, W40, W08, L_BG, L_BG2, L_TEXT, L_MID, L_RULE } from "../tokens";

const SERVICES = [
  {
    num: "01", slug: "comunicaciones",
    title: "Comunicaciones Estratégicas",
    subtitle: "Construir narrativas que perduran",
    description: "Gestionamos la reputación de organizaciones y líderes a través de estrategias comunicacionales integradas que combinan relaciones con medios, vocería y posicionamiento de marca.",
    items: ["Relaciones con medios de comunicación", "Media training para voceros", "Gestión de reputación corporativa", "Comunicaciones en situaciones de cambio", "Estrategia de contenido editorial"],
    img: "https://images.unsplash.com/photo-1682617367184-5ccbda40e4a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["Reputación", "Media Training", "Crisis PR", "Prensa"],
  },
  {
    num: "02", slug: "asuntos-publicos",
    title: "Asuntos Públicos",
    subtitle: "Relacionamiento estratégico con poder",
    description: "Diseñamos y ejecutamos estrategias de relacionamiento con el sector público, gremios, congresistas y entidades regulatorias para posicionar favorablemente a nuestros clientes en las decisiones que importan.",
    items: ["Lobby legislativo y regulatorio", "Relacionamiento con entidades del gobierno", "Gestión ante gremios y asociaciones", "Monitoreo de agenda pública", "Posicionamiento ante tomadores de decisión"],
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["Relacionamiento", "Gremios", "Congreso", "Lobby"],
  },
  {
    num: "03", slug: "digital",
    title: "Comunicación Digital",
    subtitle: "Presencia que genera influencia real",
    description: "Potenciamos la presencia digital de organizaciones y líderes con estrategias basadas en inteligencia artificial, análisis de tendencias y producción de contenido de alto impacto.",
    items: ["Estrategia de redes sociales para líderes", "Análisis de sentimiento con IA", "Producción de contenido editorial digital", "Community management político y corporativo", "Monitoreo y alertas de reputación online"],
    img: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["AI Social", "Analytics", "Content Lab", "SEO"],
  },
  {
    num: "04", slug: "crisis",
    title: "Manejo de Crisis",
    subtitle: "Respuesta inmediata, daño controlado",
    description: "Activamos protocolos probados de gestión de crisis reputacionales 24/7, combinando prevención estratégica, respuesta en tiempo real y recuperación de imagen a mediano plazo.",
    items: ["Protocolo de respuesta en 24 horas", "Sala de crisis con equipo dedicado", "Monitoreo de medios en tiempo real", "Comunicados y mensajes bajo presión", "Plan de recuperación reputacional post-crisis"],
    img: "https://images.unsplash.com/photo-1620715153885-9c2c36155b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["Prevención", "Real-Time", "Recovery", "Monitoreo 24/7"],
  },
];

function ServiceRow({ svc, idx }: { svc: typeof SERVICES[0]; idx: number }) {
  const [hov, setHov] = useState(false);
  const even = idx % 2 === 0;
  return (
    <section style={{ backgroundColor: even ? L_BG : L_BG2, borderTop: `1px solid ${L_RULE}` }}>
      <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80 }}>
        {/*
          Mobile: always text first (lpg-svc-text order:1, lpg-svc-img order:2 via theme.css).
          Desktop: even → text left / image right; odd → image left / text right via inline order.
        */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[80px]" style={{ alignItems: "center" }}>
          {/* Text */}
          <div className="lpg-svc-text" style={{ order: even ? 1 : 2 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: B3, opacity: 0.5 }}>{svc.num}</span>
              <div style={{ height: 1, width: 32, backgroundColor: B3, opacity: 0.2 }} />
            </div>
            <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(32px, 5vw, 72px)", letterSpacing: "-0.04em", lineHeight: 0.9, color: B3, marginBottom: 20 }}>{svc.title.toUpperCase()}</h3>
            <p style={{ fontFamily: FONT, fontWeight: 500, fontSize: 18, color: B3, opacity: 0.7, marginBottom: 24, lineHeight: 1.5 }}>{svc.subtitle}</p>
            <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 16, lineHeight: 1.85, color: L_MID, marginBottom: 36 }}>{svc.description}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
              {svc.items.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GREEN, flexShrink: 0, marginTop: 6, outline: `1px solid ${B3}33` }} />
                  <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 15, color: L_TEXT, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
              {svc.tags.map(tag => (<span key={tag} style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", backgroundColor: GREEN, color: B3, padding: "6px 14px" }}>{tag}</span>))}
            </div>
            <Link to="/contacto"
              onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
              style={{ fontFamily: FONT, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: hov ? B3 : "transparent", color: hov ? W : B3, padding: "14px 36px", textDecoration: "none", border: `1px solid ${B3}`, transition: "background 0.22s, color 0.22s", display: "inline-block" }}>
              Hablar sobre este servicio →
            </Link>
          </div>

          {/* Image */}
          <div className="lpg-svc-img" style={{ order: even ? 2 : 1, aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
            <img src={svc.img} alt={svc.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(0.2)", transition: "transform 0.8s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(160deg, ${B3}22 0%, transparent 60%)`, pointerEvents: "none" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

const NAV_OFFSET = 84;

export default function Servicios() {
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) return;
    const el = document.getElementById(slug);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [slug]);

  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="CUATRO ÁREAS."
        titleAccent=" UN OBJETIVO."
        subtitle="Combinamos expertise político, comunicacional y digital para construir la reputación e influencia que tu organización necesita."
        tags={["Asuntos Públicos", "Comunicaciones", "Digital", "Crisis"]}
        image="https://images.unsplash.com/photo-1758873268998-2f77c2d38862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
      />

      {/* Intro navigation strip */}
      <section style={{ backgroundColor: L_BG, borderBottom: `1px solid ${L_RULE}` }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 0, paddingBottom: 0 }}>
          {/* Removed inline display/gridTemplateColumns — Tailwind handles responsive */}
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 1, backgroundColor: L_RULE }}>
            {SERVICES.map(s => (
              <a key={s.slug} href={`#${s.slug}`} style={{ backgroundColor: L_BG, padding: "32px 24px", textDecoration: "none", display: "block" }}>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: B3, opacity: 0.4, marginBottom: 12 }}>{s.num}</div>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(15px, 2vw, 26px)", letterSpacing: "-0.03em", color: B3, lineHeight: 1.1, marginBottom: 8 }}>{s.title.toUpperCase()}</div>
                <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: L_MID, lineHeight: 1.5 }}>{s.subtitle}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service detail rows */}
      {SERVICES.map((s, i) => (
        <div key={s.slug} id={s.slug}>
          <ServiceRow svc={s} idx={i} />
        </div>
      ))}

      {/* Stats strip dark */}
      <section style={{ backgroundColor: B1, position: "relative", overflow: "hidden", borderTop: `1px solid ${W08}` }}>
        <Glow cx="50%" cy="50%" color={B3} size="100%" opacity={0.15} />
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80, position: "relative" }}>
          {/* Removed inline display/gridTemplateColumns — Tailwind handles responsive */}
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 1, backgroundColor: W08 }}>
            {[
              { n: "200+", l: "Clientes estratégicos atendidos" },
              { n: "20+",  l: "Años de experiencia acumulada" },
              { n: "98%",  l: "Retención de clientes año a año" },
              { n: "4",    l: "Divisiones especializadas" },
            ].map(({ n, l }) => (
              <div key={l} className="lpg-stat-item" style={{ padding: "56px 40px", backgroundColor: B1 }}>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.05em", color: GREEN, lineHeight: 1, marginBottom: 12 }}>{n}</div>
                <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 14, color: W40, lineHeight: 1.5 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: L_BG, borderTop: `1px solid ${L_RULE}` }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
          <div>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 0.9, color: B3, marginBottom: 16 }}>¿LISTO PARA<br />EMPEZAR?</h2>
            <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 17, color: L_MID, maxWidth: 400, lineHeight: 1.7 }}>Un equipo de especialistas está listo para diseñar la estrategia que tu organización necesita.</p>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to="/contacto" style={{ fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: B3, color: W, padding: "18px 44px", textDecoration: "none" }}>Contactar ahora</Link>
            <Link to="/agendar" style={{ fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: "transparent", color: B3, padding: "18px 44px", textDecoration: "none", border: `1px solid ${B3}44` }}>Agendar presentación</Link>
          </div>
        </div>
      </section>
    </>
  );
}

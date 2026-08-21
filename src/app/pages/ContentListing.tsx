import { useMemo, useState } from "react";
import { Link } from "react-router";
import { PageHero } from "../components/shared/PageHero";
import {
  ARTICLES, BLOG_CATEGORIES, INSIGHT_FORMATS, articlePath, type Article,
} from "../data/content";
import { FONT, B1, B3, GREEN, W, W40, W08, L_BG, L_MID, L_RULE, L_RULE2 } from "../tokens";

type Kind = Article["kind"];

const COPY: Record<Kind, {
  eyebrow: string; title: string; accent: string; subtitle: string;
  tags: string[]; image: string; heading: string; note: string;
  filterLabel: string;
}> = {
  insight: {
    eyebrow: "Liderazgo · Insights",
    title: "INTELIGENCIA",
    accent: " PUBLICADA.",
    subtitle: "Estudios, episodios del podcast y recursos descargables producidos por los especialistas de Libreta Personal Group.",
    tags: ["Estudios", "Podcast", "Recursos"],
    image: "https://images.unsplash.com/photo-1767474365536-ef81bfa24c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000",
    heading: "INSIGHTS",
    note: "Producidos por nuestro equipo",
    filterLabel: "Formato",
  },
  blog: {
    eyebrow: "Liderazgo · Blog",
    title: "ANÁLISIS Y",
    accent: " PERSPECTIVAS.",
    subtitle: "Artículos de nuestro equipo sobre reputación, asuntos públicos, crisis y comunicación estratégica en Colombia.",
    tags: ["Asuntos Públicos", "Crisis", "Comunicaciones", "IPM"],
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000",
    heading: "BLOG",
    note: "Análisis y perspectivas",
    filterLabel: "Categoría",
  },
};

function FeaturedCard({ a }: { a: Article }) {
  const [hov, setHov] = useState(false);
  return (
    <Link to={articlePath(a)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ gap: 2, backgroundColor: L_RULE, textDecoration: "none", marginBottom: 2 }}>
      <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
        <img src={a.img} alt={a.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: hov ? "grayscale(0)" : "grayscale(0.35)", transform: hov ? "scale(1.04)" : "scale(1)", transition: "filter .5s, transform .6s" }} />
      </div>
      <div style={{ backgroundColor: L_BG, padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", backgroundColor: GREEN, color: B3, padding: "4px 10px" }}>Destacado</span>
          <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: B3 }}>{a.cat}</span>
          <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: L_MID }}>{a.date} · {a.read}</span>
        </div>
        <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(26px, 3.4vw, 46px)", letterSpacing: "-0.04em", lineHeight: 1, color: B3, marginBottom: 20 }}>{a.title}</h3>
        <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 15, lineHeight: 1.8, color: L_MID, marginBottom: 28 }}>{a.excerpt}</p>
        <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: B3, borderBottom: `1px solid ${hov ? B3 : B3 + "44"}`, paddingBottom: 2, width: "fit-content", transition: "border-color .2s" }}>Leer →</span>
      </div>
    </Link>
  );
}

function Card({ a, badge }: { a: Article; badge: string }) {
  const [hov, setHov] = useState(false);
  return (
    <Link to={articlePath(a)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ backgroundColor: L_BG, textDecoration: "none", display: "flex", flexDirection: "column" }}>
      <div style={{ aspectRatio: "16/9", overflow: "hidden", position: "relative", backgroundColor: "#111" }}>
        <img src={a.img} alt={a.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: hov ? "grayscale(0)" : "grayscale(0.5)", transform: hov ? "scale(1.04)" : "scale(1)", transition: "filter .5s, transform .6s" }} />
        <span style={{ position: "absolute", top: 0, left: 0, fontFamily: FONT, fontWeight: 700, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", backgroundColor: hov ? GREEN : B3, color: hov ? B3 : W, padding: "6px 12px", transition: "background .25s, color .25s" }}>{badge}</span>
      </div>
      <div style={{ padding: "28px 32px", borderTop: `1px solid ${L_RULE}`, flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
          <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: B3 }}>{a.cat}</span>
          <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: L_MID }}>{a.date} · {a.read}</span>
        </div>
        <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(17px, 2vw, 22px)", letterSpacing: "-0.02em", lineHeight: 1.25, color: B3, marginBottom: 14 }}>{a.title}</h3>
        <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 14, lineHeight: 1.75, color: L_MID, marginBottom: 24, flex: 1 }}>{a.excerpt}</p>
        <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: hov ? B3 : "rgba(0,0,0,0.35)", transition: "color .2s" }}>Leer →</span>
      </div>
    </Link>
  );
}

export function ContentListing({ kind }: { kind: Kind }) {
  const copy = COPY[kind];
  const chips = kind === "insight" ? INSIGHT_FORMATS : BLOG_CATEGORIES;
  const [chip, setChip] = useState<string>("Todos");
  const [q, setQ] = useState("");
  const [email, setEmail] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return ARTICLES.filter(a => {
      if (a.kind !== kind) return false;
      const okChip = chip === "Todos" || (kind === "insight" ? a.format === chip : a.cat === chip);
      const okTerm = !term ||
        a.title.toLowerCase().includes(term) ||
        a.excerpt.toLowerCase().includes(term) ||
        a.cat.toLowerCase().includes(term) ||
        a.tags.some(t => t.toLowerCase().includes(term));
      return okChip && okTerm;
    });
  }, [kind, chip, q]);

  const featured = filtered.find(a => a.featured) ?? filtered[0];
  const rest = filtered.filter(a => a !== featured);

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        titleAccent={copy.accent}
        subtitle={copy.subtitle}
        tags={copy.tags}
        image={copy.image}
      />

      {/* ── Migas + salto entre subsecciones de Liderazgo ── */}
      <section style={{ backgroundColor: L_BG, borderBottom: `1px solid ${L_RULE}` }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 18, paddingBottom: 18, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <Link to="/thought-leadership" style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: L_MID, textDecoration: "none" }}>← Liderazgo</Link>
          <span style={{ color: L_MID, opacity: 0.4 }}>/</span>
          <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: B3 }}>{copy.heading}</span>
          <Link to={kind === "insight" ? "/thought-leadership/blog" : "/thought-leadership/insights"}
            style={{ marginLeft: "auto", fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: B3, textDecoration: "none", borderBottom: `1px solid ${B3}44`, paddingBottom: 2 }}>
            {kind === "insight" ? "Ir al blog →" : "Ir a insights →"}
          </Link>
        </div>
      </section>

      {/* ── Filtros ── */}
      <section style={{ backgroundColor: L_BG, borderBottom: `1px solid ${L_RULE}`, position: "sticky", top: 72, zIndex: 40 }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 20, paddingBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: L_MID, marginRight: 4 }}>{copy.filterLabel}</span>
            {chips.map(f => {
              const active = chip === f;
              return (
                <button key={f} onClick={() => setChip(f)}
                  style={{
                    fontFamily: FONT, fontWeight: active ? 700 : 500, fontSize: 11,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    backgroundColor: active ? B3 : "transparent",
                    color: active ? W : L_MID,
                    border: `1px solid ${active ? B3 : L_RULE2}`,
                    padding: "8px 16px", cursor: "pointer", transition: "background .2s, color .2s, border-color .2s",
                  }}>{f}</button>
              );
            })}
          </div>
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Buscar por tema o etiqueta…"
            style={{ fontFamily: FONT, fontWeight: 300, fontSize: 14, color: B3, border: "none", borderBottom: `1px solid ${B3}33`, backgroundColor: "transparent", outline: "none", padding: "8px 0", minWidth: 220, flex: "0 1 300px" }}
          />
        </div>
      </section>

      {/* ── Grid ── */}
      <section style={{ backgroundColor: L_BG }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 72, paddingBottom: 100 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: `1px solid ${L_RULE}`, paddingBottom: 32, marginBottom: 48, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 5.5vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: B3 }}>{copy.heading}</h2>
            <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, color: L_MID, alignSelf: "flex-end", paddingBottom: 8 }}>
              {filtered.length} {filtered.length === 1 ? "publicación" : "publicaciones"} · {copy.note}
            </span>
          </div>

          {filtered.length === 0 ? (
            <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 16, color: L_MID, padding: "60px 0" }}>
              No hay publicaciones para esa búsqueda.{" "}
              <button onClick={() => { setQ(""); setChip("Todos"); }} style={{ background: "none", border: "none", color: B3, fontFamily: FONT, fontSize: 16, cursor: "pointer", padding: 0, borderBottom: `1px solid ${B3}` }}>Limpiar filtros</button>
            </p>
          ) : (
            <>
              {featured && <FeaturedCard a={featured} />}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 2, backgroundColor: L_RULE }}>
                {rest.map(a => <Card key={a.slug} a={a} badge={kind === "insight" ? a.format : a.cat} />)}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section style={{ backgroundColor: B1, borderTop: `1px solid ${W08}` }}>
        <div className="lpg-pad grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-[80px]"
          style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: GREEN }} />
              <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: W40 }}>Newsletter semanal</span>
            </div>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.05em", lineHeight: 0.9, color: W, marginBottom: 20 }}>RECÍBELOS<br /><span style={{ color: GREEN }}>ANTES QUE NADIE.</span></h2>
            <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 16, lineHeight: 1.8, color: W40 }}>Cada lunes enviamos el análisis de la semana y las nuevas publicaciones del equipo.</p>
          </div>
          <form onSubmit={e => { e.preventDefault(); setEmail(""); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <input type="email" placeholder="tu@correo.com" value={email} onChange={e => setEmail(e.target.value)}
              style={{ width: "100%", border: "none", borderBottom: `1px solid ${W08}`, padding: "14px 0", fontFamily: FONT, fontWeight: 300, fontSize: 18, color: W, outline: "none", backgroundColor: "transparent", boxSizing: "border-box" }} />
            <button type="submit" style={{ alignSelf: "flex-start", backgroundColor: GREEN, color: B1, fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", padding: "16px 40px", cursor: "pointer" }}>
              Suscribirse →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export function InsightsListing() { return <ContentListing kind="insight" />; }
export function BlogListing() { return <ContentListing kind="blog" />; }

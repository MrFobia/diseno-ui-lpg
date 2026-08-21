import { useState } from "react";
import { Link } from "react-router";
import { PageHero } from "../components/shared/PageHero";
import { Glow } from "../components/shared/Glow";
import { FONT, B1, B3, B4, GREEN, W, W40, W08, L_BG, L_BG2, L_MID, L_RULE } from "../tokens";

import { INSIGHT_ARTICLES, BLOG_ARTICLES, articlePath } from "../data/content";

const INSIGHTS = INSIGHT_ARTICLES.slice(0, 3);
const BLOG_POSTS = BLOG_ARTICLES;

const EPISODES = [
  { n: "EP 24", title: "El futuro del lobby en Colombia con Daniel García", guest: "Daniel García · Ex Congresista", dur: "54 min", date: "Abr 2026" },
  { n: "EP 23", title: "Crisis corporativas: ¿cómo sobreviven las marcas?", guest: "Carolina Vélez · Directora Comms Bancolombia", dur: "48 min", date: "Mar 2026" },
  { n: "EP 22", title: "Inteligencia artificial y comunicación política", guest: "Prof. Mario Hernández · Universidad de los Andes", dur: "61 min", date: "Mar 2026" },
  { n: "EP 21", title: "Reputación digital para ejecutivos C-suite", guest: "Ana Lucía Reyes · CEO Grupo Inversiones", dur: "52 min", date: "Feb 2026" },
];

const RESOURCES = [
  { title: "Guía de Crisis Reputacional 2026", desc: "Protocolo paso a paso para manejar una crisis corporativa.", type: "PDF", pages: "42 págs." },
  { title: "Checklist: Vocero Efectivo", desc: "Todo lo que debes verificar antes de una entrevista crítica.", type: "PDF", pages: "8 págs." },
  { title: "Plantilla de Comunicado de Crisis", desc: "Template editable para comunicados en situaciones de emergencia.", type: "DOCX", pages: "2 págs." },
  { title: "IPM Benchmark Colombia 2025", desc: "Análisis comparativo de presencia mediática por sector.", type: "PDF", pages: "68 págs." },
];

export default function ThoughtLeadership() {
  const [insightHov, setInsightHov] = useState<number | null>(null);
  const [blogHov, setBlogHov] = useState<number | null>(null);
  const [epHov, setEpHov] = useState<number | null>(null);
  const [resHov, setResHov] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Thought Leadership"
        title="INTELIGENCIA"
        titleAccent=" QUE INFORMA."
        subtitle="Artículos, podcast y recursos desarrollados por nuestros especialistas para quienes toman decisiones estratégicas en Colombia."
        tags={["Blog", "Podcast", "Recursos", "Newsletter"]}
        image="https://images.unsplash.com/photo-1767474365536-ef81bfa24c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
      />

      {/* ── INSIGHTS Section ── */}
      <section id="insights" style={{ backgroundColor: "#FFFFFF", paddingTop: 120, paddingBottom: 64 }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48 }}>
          {/* Header */}
          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderBottom: `1px solid rgba(0,0,0,0.08)`,
            paddingBottom: 32,
            marginBottom: 64,
            flexWrap: "wrap",
            gap: 16
          }}>
            <h2 style={{
              fontFamily: FONT,
              fontWeight: 900,
              fontSize: "clamp(40px, 8vw, 100px)",
              letterSpacing: "-4px",
              lineHeight: 1.1,
              color: B3,
              margin: 0
            }}>INSIGHTS</h2>
            <Link to="/thought-leadership/insights" style={{
              fontFamily: FONT,
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: B3,
              textDecoration: "none",
              borderBottom: `1px solid ${B3}`,
              paddingBottom: 6,
              flexShrink: 0,
              alignSelf: "flex-end"
            }}>Ver todos →</Link>
          </div>

          {/* Insights Grid — Tailwind handles columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 40 }}>
            {INSIGHTS.map((insight, i) => (
              <Link key={insight.slug} to={articlePath(insight)}
                onMouseEnter={() => setInsightHov(i)}
                onMouseLeave={() => setInsightHov(null)}
                style={{ display: "flex", flexDirection: "column", cursor: "pointer", textDecoration: "none" }}>
                <div style={{ width: "100%", height: 280, overflow: "hidden", backgroundColor: "#111", flexShrink: 0 }}>
                  <img
                    src={insight.img}
                    alt={insight.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.7,
                      filter: insightHov === i ? "grayscale(0)" : "grayscale(0.3)",
                      transform: insightHov === i ? "scale(1.05)" : "scale(1)",
                      transition: "filter 0.5s, transform 0.6s"
                    }}
                  />
                </div>
                <div style={{ borderBottom: `1px solid rgba(0,0,0,0.08)`, paddingTop: 32, paddingBottom: 32 }}>
                  <div style={{ marginBottom: 16 }}>
                    <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "1.8px", textTransform: "uppercase", color: B3 }}>{insight.cat}</span>
                  </div>
                  <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: 22, letterSpacing: "-0.52px", lineHeight: "31.2px", color: "#0a0a0a", margin: "0 0 20px 0" }}>{insight.title}</h3>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 12, color: "rgba(0,0,0,0.3)" }}>{insight.date}</span>
                    <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12, letterSpacing: "0.96px", textTransform: "uppercase", color: insightHov === i ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.3)", transition: "color 0.2s" }}>Leer →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section id="blog" style={{ backgroundColor: L_BG }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 100, paddingBottom: 100 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: `1px solid ${L_RULE}`, paddingBottom: 40, marginBottom: 64, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 5.5vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: B3 }}>BLOG</h2>
            <Link to="/thought-leadership/blog" style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12, letterSpacing: "1.2px", textTransform: "uppercase", color: B3, textDecoration: "none", borderBottom: `1px solid ${B3}`, paddingBottom: 6, alignSelf: "flex-end" }}>Ver todos →</Link>
          </div>

          {/* Featured post — Tailwind handles responsive columns */}
          {BLOG_POSTS.filter(p => p.featured).map((post, i) => (
            <Link key={post.slug} to={articlePath(post)} onMouseEnter={() => setBlogHov(-1)} onMouseLeave={() => setBlogHov(null)}
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: 2, backgroundColor: L_RULE, marginBottom: 2, cursor: "pointer", textDecoration: "none" }}>
              <div style={{ aspectRatio: "16/9", overflow: "hidden", position: "relative" }}>
                <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: blogHov === -1 ? "grayscale(0)" : "grayscale(0.3)", transform: blogHov === -1 ? "scale(1.03)" : "scale(1)", transition: "filter 0.5s, transform 0.6s" }} />
              </div>
              <div className="lpg-blog-feat-content" style={{ backgroundColor: L_BG, padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", backgroundColor: GREEN, color: B3, padding: "4px 10px" }}>{post.cat}</span>
                  <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: L_MID }}>{post.date} · {post.read}</span>
                </div>
                <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 48px)", letterSpacing: "-0.04em", lineHeight: 1.0, color: B3, marginBottom: 24 }}>{post.title}</h3>
                <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: B3, borderBottom: `1px solid ${B3}44`, paddingBottom: 2, display: "inline-block", width: "fit-content" }}>Leer artículo →</span>
              </div>
            </Link>
          ))}

          {/* Other posts grid — Tailwind handles columns */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 2, backgroundColor: L_RULE }}>
            {BLOG_POSTS.filter(p => !p.featured).map((post, i) => (
              <Link key={post.slug} to={articlePath(post)} onMouseEnter={() => setBlogHov(i)} onMouseLeave={() => setBlogHov(null)}
                style={{ backgroundColor: L_BG, cursor: "pointer", textDecoration: "none" }}>
                <div style={{ aspectRatio: "16/9", overflow: "hidden", position: "relative" }}>
                  <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: blogHov === i ? "grayscale(0)" : "grayscale(0.5)", transform: blogHov === i ? "scale(1.04)" : "scale(1)", transition: "filter 0.5s, transform 0.6s" }} />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(160deg, ${B3}${blogHov === i ? "22" : "55"} 0%, transparent 60%)`, transition: "background 0.5s", pointerEvents: "none" }} />
                </div>
                <div style={{ padding: "28px 32px", borderTop: `1px solid ${L_RULE}` }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: B3 }}>{post.cat}</span>
                    <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: L_MID }}>{post.date} · {post.read}</span>
                  </div>
                  <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "-0.02em", lineHeight: 1.25, color: B3 }}>{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Podcast dark ── */}
      <section id="podcast" style={{ backgroundColor: B1, position: "relative", overflow: "hidden", borderTop: `1px solid ${W08}` }}>
        <Glow cx="80%" cy="20%" color={B3} size="60%" opacity={0.2} />
        <Glow cx="10%" cy="80%" color={B4} size="50%" opacity={0.15} />
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 100, paddingBottom: 100, position: "relative" }}>
          {/* Tailwind handles responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]" style={{ gap: 40, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: GREEN, animation: "pulse 2s infinite" }} />
                <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: W40 }}>Podcast</span>
              </div>
              <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: W, marginBottom: 24 }}>DIÁLOGOS<br /><span style={{ color: GREEN }}>DE REPUTACIÓN.</span></h2>
              <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 16, lineHeight: 1.85, color: W40, marginBottom: 32 }}>Conversaciones con líderes, estrategas y comunicadores sobre los temas que mueven la agenda corporativa y política de Colombia.</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {["Spotify", "Apple Podcasts", "YouTube"].map(p => (
                  <a key={p} href="#" style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: W40, border: `1px solid ${W08}`, padding: "8px 14px", textDecoration: "none", transition: "color 0.2s, border-color 0.2s" }}>{p}</a>
                ))}
              </div>
              <div style={{ marginTop: 32 }}>
                <img src="https://images.unsplash.com/photo-1769509068789-f242b5a6fc47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" alt="Podcast" style={{ width: "100%", objectFit: "cover", filter: "brightness(0.6) saturate(0.7)" }} />
              </div>
            </div>

            {/* Episode list */}
            <div>
              {EPISODES.map((ep, i) => (
                <div key={i} onMouseEnter={() => setEpHov(i)} onMouseLeave={() => setEpHov(null)}
                  className="lpg-ep-row"
                  style={{ borderTop: `1px solid ${epHov === i ? GREEN + "44" : W08}`, padding: "28px 0", cursor: "pointer", background: epHov === i ? `linear-gradient(90deg, ${GREEN}08 0%, transparent 70%)` : "transparent", transition: "background 0.22s, border-color 0.22s", display: "flex", alignItems: "center", gap: 32 }}>
                  <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: 11, letterSpacing: "0.12em", color: epHov === i ? GREEN : W40, flexShrink: 0, transition: "color 0.22s" }}>{ep.n}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(14px, 1.8vw, 20px)", letterSpacing: "-0.02em", color: epHov === i ? GREEN : W, marginBottom: 6, transition: "color 0.22s" }}>{ep.title}</h4>
                    <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, color: W40, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ep.guest}</p>
                  </div>
                  <div className="lpg-ep-meta" style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontFamily: FONT, fontWeight: 500, fontSize: 12, color: W40, marginBottom: 4 }}>{ep.dur}</div>
                    <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 11, color: W40, opacity: 0.6 }}>{ep.date}</div>
                  </div>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ flexShrink: 0, opacity: epHov === i ? 1 : 0, transition: "opacity 0.22s" }}>
                    <circle cx="14" cy="14" r="13" stroke={GREEN} strokeWidth="1.2" />
                    <path d="M11 10l8 4-8 4V10z" fill={GREEN} />
                  </svg>
                </div>
              ))}
              <div style={{ borderBottom: `1px solid ${W08}` }} />
            </div>
          </div>
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
      </section>

      {/* ── Recursos ── */}
      <section id="recursos" style={{ backgroundColor: L_BG2, borderTop: `1px solid ${L_RULE}` }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 100, paddingBottom: 100 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: `1px solid ${L_RULE}`, paddingBottom: 40, marginBottom: 64, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 5.5vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: B3 }}>RECURSOS<br />DESCARGABLES</h2>
            <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, color: L_MID, alignSelf: "flex-end", paddingBottom: 8 }}>Gratis para suscriptores</span>
          </div>
          {/* Tailwind handles columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 2, backgroundColor: L_RULE }}>
            {RESOURCES.map((r, i) => (
              <div key={i} onMouseEnter={() => setResHov(i)} onMouseLeave={() => setResHov(null)}
                style={{ backgroundColor: resHov === i ? B3 : L_BG, padding: "40px 32px", transition: "background 0.25s", cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", backgroundColor: GREEN, color: B3, padding: "4px 8px" }}>{r.type}</span>
                  <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 11, color: resHov === i ? `${W}66` : L_MID }}>{r.pages}</span>
                </div>
                <h4 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(15px, 1.8vw, 19px)", letterSpacing: "-0.02em", lineHeight: 1.25, color: resHov === i ? W : B3, marginBottom: 12, transition: "color 0.25s" }}>{r.title}</h4>
                <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, lineHeight: 1.7, color: resHov === i ? `${W}77` : L_MID, marginBottom: 24, transition: "color 0.25s" }}>{r.desc}</p>
                <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: resHov === i ? GREEN : B3, transition: "color 0.25s" }}>Descargar →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section id="newsletter" style={{ backgroundColor: L_BG, borderTop: `1px solid ${L_RULE}` }}>
        {/* Tailwind handles responsive columns */}
        <div className="lpg-pad grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-[80px]"
          style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: GREEN, outline: `2px solid ${B3}33` }} />
              <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: B3, opacity: 0.6 }}>Newsletter semanal</span>
            </div>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.05em", lineHeight: 0.9, color: B3, marginBottom: 20 }}>LA AGENDA<br />DE LO QUE IMPORTA.</h2>
            <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 16, lineHeight: 1.8, color: L_MID }}>Cada lunes: análisis del escenario político-corporativo colombiano, novedades en comunicaciones y los mejores insights de nuestro equipo.</p>
          </div>
          <form onSubmit={e => { e.preventDefault(); alert("¡Suscripción exitosa!"); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <input type="email" placeholder="tu@correo.com" value={email} onChange={e => setEmail(e.target.value)}
              style={{ width: "100%", border: "none", borderBottom: `1px solid ${B3}33`, padding: "14px 0", fontFamily: FONT, fontWeight: 300, fontSize: 18, color: B3, outline: "none", backgroundColor: "transparent", boxSizing: "border-box" }} />
            <button type="submit" style={{ alignSelf: "flex-start", backgroundColor: B3, color: W, fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", padding: "16px 40px", cursor: "pointer" }}>
              Suscribirse →
            </button>
            <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: L_MID }}>Sin spam. Cancelación en un clic.</p>
          </form>
        </div>
      </section>
    </>
  );
}

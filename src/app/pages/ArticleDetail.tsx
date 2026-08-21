import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { LISTING_PATH, articlePath, getArticle, relatedArticles, type Article, type Block } from "../data/content";
import { Glow } from "../components/shared/Glow";
import { FONT, B1, B3, B4, GREEN, W, W40, W08, W04, L_BG, L_BG2, L_TEXT, L_MID, L_RULE } from "../tokens";

const PAD = { maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48 } as const;

/* ── Barra de progreso de lectura ── */
function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 1100, pointerEvents: "none" }}>
      <div style={{ height: "100%", width: `${pct}%`, backgroundColor: GREEN, transition: "width .1s linear" }} />
    </div>
  );
}

/* ── Bloques del cuerpo ── */
function BodyBlock({ b }: { b: Block }) {
  switch (b.k) {
    case "h2":
      return (
        <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.035em", lineHeight: 1.1, color: B3, margin: "56px 0 20px" }}>{b.t}</h2>
      );
    case "p":
      return (
        <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 18, lineHeight: 1.9, color: L_TEXT, margin: "0 0 24px" }}>{b.t}</p>
      );
    case "list":
      return (
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 14 }}>
          {b.items.map(item => (
            <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GREEN, outline: `1px solid ${B3}33`, flexShrink: 0, marginTop: 10 }} />
              <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 16, lineHeight: 1.7, color: L_TEXT }}>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote style={{ margin: "48px 0", padding: "8px 0 8px 32px", borderLeft: `2px solid ${B3}` }}>
          <p style={{ fontFamily: FONT, fontWeight: 500, fontSize: "clamp(20px, 2.4vw, 28px)", letterSpacing: "-0.02em", lineHeight: 1.4, color: B3, margin: 0 }}>“{b.t}”</p>
          {b.by && (
            <span style={{ display: "block", marginTop: 16, fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: L_MID }}>{b.by}</span>
          )}
        </blockquote>
      );
    case "img":
      return (
        <figure style={{ margin: "48px 0" }}>
          <img src={b.src} alt={b.caption ?? ""} style={{ width: "100%", objectFit: "cover" }} />
          {b.caption && <figcaption style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: L_MID, marginTop: 12 }}>{b.caption}</figcaption>}
        </figure>
      );
  }
}

/* ── Compartir ── */
function Share({ a }: { a: Article }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const links = [
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: "X", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(a.title)}&url=${encodeURIComponent(url)}` },
    { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${a.title} ${url}`)}` },
  ];
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
      <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: L_MID, marginRight: 6 }}>Compartir</span>
      {links.map(l => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: B3, border: `1px solid ${B3}22`, padding: "8px 14px", textDecoration: "none" }}>{l.label}</a>
      ))}
      <button
        onClick={() => { navigator.clipboard?.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
        style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: copied ? B3 : L_MID, border: `1px solid ${B3}22`, backgroundColor: copied ? GREEN : "transparent", padding: "8px 14px", cursor: "pointer", transition: "background .2s, color .2s" }}>
        {copied ? "Copiado ✓" : "Copiar link"}
      </button>
    </div>
  );
}

function NotFoundArticle() {
  return (
    <section style={{ backgroundColor: B1, minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="lpg-pad" style={{ ...PAD, paddingTop: 160, paddingBottom: 120 }}>
        <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: W40 }}>Contenido no disponible</span>
        <h1 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(40px, 7vw, 90px)", letterSpacing: "-0.04em", lineHeight: 0.9, color: W, margin: "24px 0 32px" }}>
          ESTE ARTÍCULO<br /><span style={{ color: GREEN }}>YA NO ESTÁ AQUÍ.</span>
        </h1>
        <Link to="/thought-leadership" style={{ fontFamily: FONT, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: GREEN, color: B1, padding: "14px 32px", textDecoration: "none" }}>Ir a Liderazgo →</Link>
      </div>
    </section>
  );
}

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticle(slug);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [slug]);

  if (!article) return <NotFoundArticle />;

  const related = relatedArticles(article);
  const parent = article.kind === "blog"
    ? { label: "Blog", to: LISTING_PATH.blog }
    : { label: "Insights", to: LISTING_PATH.insight };

  return (
    <>
      <ReadingProgress />

      {/* ── Hero editorial ── */}
      <section style={{ backgroundColor: B1, position: "relative", overflow: "hidden" }}>
        <img src={article.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.32) saturate(0.8)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse 80% 70% at 10% 20%, ${B4}44 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 85% 70%, ${B3}55 0%, transparent 60%)` }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, ${W04} 3px, ${W04} 4px)` }} />

        <div className="lpg-pad" style={{ ...PAD, position: "relative", paddingTop: 150, paddingBottom: 72 }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
            <Link to={parent.to} style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: W40, textDecoration: "none" }}>← {parent.label}</Link>
            <span style={{ color: W40, opacity: 0.4 }}>/</span>
            <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: GREEN }}>{article.cat}</span>
          </div>

          <h1 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 6vw, 84px)", letterSpacing: "-0.045em", lineHeight: 0.94, color: W, margin: "0 0 28px", maxWidth: 1100 }}>{article.title}</h1>

          <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: "clamp(16px, 1.7vw, 20px)", lineHeight: 1.75, color: W40, maxWidth: 720, margin: "0 0 40px" }}>{article.excerpt}</p>

          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", borderTop: `1px solid ${W08}`, paddingTop: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT, fontWeight: 900, fontSize: 14, color: B1, flexShrink: 0 }}>{article.author.initials}</div>
              <div>
                <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 14, color: W }}>{article.author.name}</div>
                <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: W40 }}>{article.author.role}</div>
              </div>
            </div>
            <div style={{ width: 1, height: 32, backgroundColor: W08 }} />
            <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, color: W40 }}>{article.date}</span>
            <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, color: W40 }}>· {article.read} de lectura</span>
            <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", border: `1px solid ${W08}`, color: GREEN, padding: "6px 12px" }}>{article.format}</span>
          </div>
        </div>
      </section>

      {/* ── Cuerpo ── */}
      <section style={{ backgroundColor: L_BG }}>
        <div className="lpg-pad grid grid-cols-1 lg:grid-cols-[1fr_260px]"
          style={{ ...PAD, paddingTop: 80, paddingBottom: 80, gap: 64, alignItems: "start" }}>
          {/* Columna principal */}
          <article style={{ maxWidth: 760 }}>
            {article.body.map((b, i) => <BodyBlock key={i} b={b} />)}

            {/* Tags */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 56, paddingTop: 32, borderTop: `1px solid ${L_RULE}` }}>
              {article.tags.map(t => (
                <span key={t} style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", border: `1px solid ${L_RULE}`, color: L_MID, padding: "6px 14px" }}>{t}</span>
              ))}
            </div>

            <div style={{ marginTop: 32 }}>
              <Share a={article} />
            </div>

            {/* Autor */}
            <div style={{ marginTop: 56, backgroundColor: L_BG2, padding: "36px 40px", display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: B3, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT, fontWeight: 900, fontSize: 16, color: W, flexShrink: 0 }}>{article.author.initials}</div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 17, color: B3, marginBottom: 4 }}>{article.author.name}</div>
                <div style={{ fontFamily: FONT, fontWeight: 500, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: L_MID, marginBottom: 14 }}>{article.author.role}</div>
                <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 14, lineHeight: 1.8, color: L_MID, margin: 0 }}>
                  Parte del equipo de Libreta Personal Group, la firma de consultoría estratégica que acompaña a las organizaciones más influyentes de Colombia en reputación, asuntos públicos y crisis.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar sticky */}
          <aside className="hidden lg:block" style={{ position: "sticky", top: 120 }}>
            <div style={{ borderTop: `2px solid ${B3}`, paddingTop: 20, marginBottom: 40 }}>
              <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: B3 }}>En este artículo</span>
              <nav style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 18 }}>
                {article.body.filter((b): b is Extract<Block, { k: "h2" }> => b.k === "h2").map((b, i) => (
                  <span key={i} style={{ fontFamily: FONT, fontWeight: 400, fontSize: 13, lineHeight: 1.5, color: L_MID }}>{b.t}</span>
                ))}
              </nav>
            </div>

            <div style={{ backgroundColor: B3, padding: "28px 24px" }}>
              <h4 style={{ fontFamily: FONT, fontWeight: 900, fontSize: 20, letterSpacing: "-0.03em", lineHeight: 1.1, color: W, marginBottom: 12 }}>¿Te enfrentas a un caso así?</h4>
              <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, lineHeight: 1.7, color: `${W}99`, marginBottom: 20 }}>Agenda una conversación de 30 minutos con nuestro equipo.</p>
              <Link to="/agendar" style={{ display: "inline-block", fontFamily: FONT, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: GREEN, color: B3, padding: "12px 22px", textDecoration: "none" }}>Agendar →</Link>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Relacionados ── */}
      <section style={{ backgroundColor: L_BG2, borderTop: `1px solid ${L_RULE}` }}>
        <div className="lpg-pad" style={{ ...PAD, paddingTop: 80, paddingBottom: 100 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: `1px solid ${L_RULE}`, paddingBottom: 32, marginBottom: 48, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(30px, 4.5vw, 64px)", letterSpacing: "-0.05em", lineHeight: 0.9, color: B3 }}>SEGUIR LEYENDO</h2>
            <Link to={parent.to} style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: B3, textDecoration: "none", borderBottom: `1px solid ${B3}`, paddingBottom: 4, alignSelf: "flex-end" }}>Ver todo {parent.label.toLowerCase()} →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 2, backgroundColor: L_RULE }}>
            {related.map(r => (
              <Link key={r.slug} to={articlePath(r)} style={{ backgroundColor: L_BG, textDecoration: "none", display: "flex", flexDirection: "column" }}>
                <div style={{ aspectRatio: "16/9", overflow: "hidden", backgroundColor: "#111" }}>
                  <img src={r.img} alt={r.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(0.45)" }} />
                </div>
                <div style={{ padding: "26px 28px" }}>
                  <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: B3 }}>{r.cat}</span>
                  <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: 19, letterSpacing: "-0.02em", lineHeight: 1.3, color: B3, margin: "12px 0 10px" }}>{r.title}</h3>
                  <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: L_MID }}>{r.date} · {r.read}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: B1, position: "relative", overflow: "hidden", borderTop: `1px solid ${W08}` }}>
        <Glow cx="85%" cy="30%" color={B3} size="55%" opacity={0.22} />
        <div className="lpg-pad" style={{ ...PAD, paddingTop: 90, paddingBottom: 90, position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(30px, 5vw, 68px)", letterSpacing: "-0.05em", lineHeight: 0.9, color: W, margin: 0 }}>
            HABLEMOS DE<br /><span style={{ color: GREEN }}>TU REPUTACIÓN.</span>
          </h2>
          <Link to="/contacto" style={{ fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: GREEN, color: B1, padding: "18px 40px", textDecoration: "none" }}>Contactar →</Link>
        </div>
      </section>
    </>
  );
}

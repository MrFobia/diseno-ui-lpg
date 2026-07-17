import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { FONT, B0, B1, B3, GREEN, W, W40, W08 } from "../../tokens";
import { Logo } from "../shared/Logo";

const SERVICES_MENU = [
  {
    num: "01",
    title: "Asuntos Públicos",
    href: "/servicios/asuntos-publicos",
    desc: "Lobby legislativo, gremios y relacionamiento institucional.",
    tags: ["Congreso", "Gremios", "Gobierno"],
  },
  {
    num: "02",
    title: "Comunicaciones Estratégicas",
    href: "/servicios/comunicaciones",
    desc: "Reputación corporativa, media training y relaciones con medios.",
    tags: ["Reputación", "Prensa", "Vocería"],
  },
  {
    num: "03",
    title: "Comunicación Digital",
    href: "/servicios/digital",
    desc: "Estrategia digital con IA, análisis de sentimiento y content lab.",
    tags: ["AI Social", "Analytics", "SEO"],
  },
  {
    num: "04",
    title: "Manejo de Crisis",
    href: "/servicios/crisis",
    desc: "Respuesta 24/7, sala de crisis y recuperación reputacional.",
    tags: ["Prevención", "Real-Time", "Recovery"],
  },
];

const PLAIN_LINKS = [
  { label: "Clientes",            href: "/clientes" },
  { label: "IPM",                 href: "/ipm" },
  { label: "Nosotros",            href: "/nosotros" },
  { label: "Liderazgo",           href: "/thought-leadership" },
  { label: "Sectores",            href: "/sectores" },
];

export function SiteNav() {
  const [scrolled, setScrolled]         = useState(false);
  const [isMobile, setIsMobile]         = useState(false);
  const [megaOpen, setMegaOpen]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [mobSvcOpen, setMobSvcOpen]     = useState(true);
  const [svcHov, setSvcHov]             = useState<number | null>(null);
  const location = useLocation();
  const megaRef = useRef<HTMLDivElement>(null);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    if (megaOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [megaOpen]);

  const toggleMega = () => setMegaOpen(!megaOpen);

  const navBg = scrolled || !isHome || isMobile ? `${B1}F2` : "transparent";
  const navBlur = scrolled || !isHome || isMobile ? "blur(14px)" : "none";
  const navBorder = scrolled || !isHome || isMobile ? `1px solid ${W08}` : "none";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      backgroundColor: navBg,
      backdropFilter: navBlur,
      borderBottom: navBorder,
      transition: "background 0.4s ease, backdrop-filter 0.4s ease",
    }}>
      {/* ── Main bar ── */}
      <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <Logo className="relative h-[28px] w-[78px]" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex" style={{ gap: 36, alignItems: "center" }}>

          {/* Servicios — with megamenu */}
          {(() => {
            const svcActive = location.pathname.startsWith("/servicios");
            return (
              <div ref={megaRef} style={{ position: "relative" }}>
                <button onClick={toggleMega} style={{
                  fontFamily: FONT, fontWeight: 500, fontSize: 12,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  color: megaOpen || svcActive ? GREEN : W40,
                  background: "none", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 5,
                  transition: "color 0.2s", padding: 0,
                  borderBottom: svcActive && !megaOpen ? `1px solid ${GREEN}66` : "none",
                  paddingBottom: svcActive && !megaOpen ? 2 : 0,
                }}>
                  Servicios
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                    style={{ opacity: 0.5, transform: megaOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                    <path d="M2 4l3 3 3-3" stroke={W} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            );
          })()}

          {/* Plain links */}
          {PLAIN_LINKS.map(link => {
            const isActive = location.pathname === link.href;
            return (
              <Link key={link.href} to={link.href} style={{
                fontFamily: FONT, fontWeight: 500, fontSize: 12,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: isActive ? W : W40, textDecoration: "none", transition: "color 0.2s",
                whiteSpace: "nowrap",
                borderBottom: isActive ? `1px solid ${W}55` : "none",
                paddingBottom: isActive ? 2 : 0,
              }}
                onMouseEnter={e => (e.currentTarget.style.color = W)}
                onMouseLeave={e => (e.currentTarget.style.color = isActive ? W : W40)}>
                {link.label}
              </Link>
            );
          })}

          {(() => {
            const isActive = location.pathname === "/contacto";
            return (
              <Link to="/contacto" style={{
                fontFamily: FONT, fontWeight: 400, fontSize: 12, letterSpacing: "0.06em",
                color: isActive ? W : W40, textDecoration: "none", textTransform: "uppercase",
                borderBottom: isActive ? `1px solid ${W}55` : "none",
                paddingBottom: isActive ? 2 : 0,
              }}>Contacto</Link>
            );
          })()}

          <Link to="/agendar" style={{
            fontFamily: FONT, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em",
            textTransform: "uppercase", backgroundColor: GREEN, color: B1,
            padding: "10px 20px", textDecoration: "none", flexShrink: 0,
            transition: "opacity 0.2s",
          }}>Agendar →</Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, flexShrink: 0 }}>
          {mobileOpen
            ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12M4 16L16 4" stroke={W} strokeWidth="1.5" strokeLinecap="round" /></svg>
            : <><div style={{ width: 24, height: 1, backgroundColor: W, marginBottom: 6 }} /><div style={{ width: 24, height: 1, backgroundColor: W }} /></>
          }
        </button>
      </div>

      {/* ── MEGA MENU ── */}
      {megaOpen && (
        <div style={{
            backgroundColor: `${B0}FC`, backdropFilter: "blur(20px)",
            borderTop: `1px solid ${W08}`, borderBottom: `1px solid ${W08}`,
          }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "48px 48px 48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 2, backgroundColor: W08 }}>
              {SERVICES_MENU.map((s, i) => (
                <Link key={s.num} to={s.href}
                  onMouseEnter={() => setSvcHov(i)}
                  onMouseLeave={() => setSvcHov(null)}
                  style={{
                    display: "flex", flexDirection: "column",
                    padding: "36px 32px",
                    backgroundColor: svcHov === i ? B3 : B0,
                    textDecoration: "none",
                    transition: "background 0.22s",
                    borderRight: i < 3 ? `1px solid ${W08}` : "none",
                  }}>
                  {/* Number */}
                  <span style={{
                    fontFamily: FONT, fontWeight: 900, fontSize: 11,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: svcHov === i ? `${GREEN}BB` : `${W}33`,
                    marginBottom: 20, transition: "color 0.22s",
                  }}>{s.num}</span>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: FONT, fontWeight: 900,
                    fontSize: "clamp(17px, 1.6vw, 22px)", letterSpacing: "-0.03em", lineHeight: 1.1,
                    color: svcHov === i ? W : W,
                    marginBottom: 14, flex: 1,
                    transition: "color 0.22s",
                  }}>{s.title}</h3>

                  {/* Description */}
                  <p style={{
                    fontFamily: FONT, fontWeight: 300, fontSize: 13, lineHeight: 1.65,
                    color: svcHov === i ? `${W}BB` : W40,
                    marginBottom: 20, transition: "color 0.22s",
                  }}>{s.desc}</p>

                  {/* Tags */}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                    {s.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: FONT, fontWeight: 600, fontSize: 9,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        backgroundColor: svcHov === i ? `${GREEN}33` : W08,
                        color: svcHov === i ? GREEN : W40,
                        padding: "3px 8px",
                        transition: "background 0.22s, color 0.22s",
                      }}>{tag}</span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: svcHov === i ? GREEN : W40, transition: "color 0.22s" }}>Ver más</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      style={{ transform: svcHov === i ? "translate(3px, -3px)" : "none", transition: "transform 0.22s" }}>
                      <path d="M2 10L10 2M10 2H4M10 2V8" stroke={svcHov === i ? GREEN : W40} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom strip */}
            <div style={{ borderTop: `1px solid ${W08}`, marginTop: 24, paddingTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, color: W40 }}>
                ¿No sabes qué necesitas? Hablemos y lo descubrimos juntos.
              </span>
              <div style={{ display: "flex", gap: 16 }}>
                <Link to="/servicios" style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: W40, textDecoration: "none", borderBottom: `1px solid ${W08}`, paddingBottom: 2 }}>
                  Todos los servicios
                </Link>
                <Link to="/contacto" style={{ fontFamily: FONT, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", backgroundColor: GREEN, color: B1, padding: "8px 20px", textDecoration: "none" }}>
                  Hablar con un experto →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div style={{ backgroundColor: `${B1}FA`, backdropFilter: "blur(20px)", borderTop: `1px solid ${W08}`, maxHeight: "calc(100vh - 68px)", overflowY: "auto", display: "flex", flexDirection: "column" }}>

          {/* ── Servicios accordion ── */}
          <div>
            <button
              onClick={() => setMobSvcOpen(!mobSvcOpen)}
              style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${W08}` }}>
              <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 17, letterSpacing: "-0.02em", color: W }}>Servicios</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                style={{ flexShrink: 0, transform: mobSvcOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s" }}>
                <path d="M4 6l4 4 4-4" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mobSvcOpen && SERVICES_MENU.map((s, i) => {
              const isActive = location.pathname === s.href;
              return (
                <Link key={s.num} to={s.href} onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    paddingTop: 14, paddingBottom: 14, paddingLeft: 36, paddingRight: 20,
                    fontFamily: FONT, fontWeight: isActive ? 600 : 400, fontSize: 15,
                    color: isActive ? GREEN : W40, textDecoration: "none",
                    borderBottom: `1px solid ${W08}`,
                    borderLeft: isActive ? `3px solid ${GREEN}` : "3px solid transparent",
                    transition: "color 0.2s",
                    backgroundColor: isActive ? `${GREEN}0A` : "transparent",
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = W; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = W40; }}>
                  <span>{s.title}</span>
                  <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: isActive ? GREEN : `${W}30` }}>{s.num}</span>
                </Link>
              );
            })}
          </div>

          {/* ── Plain links ── */}
          {PLAIN_LINKS.map(link => {
            const isActive = location.pathname === link.href;
            return (
              <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  paddingTop: 20, paddingBottom: 20, paddingLeft: 24, paddingRight: 20,
                  fontFamily: FONT, fontWeight: 700, fontSize: 17, letterSpacing: "-0.02em",
                  color: isActive ? GREEN : W, textDecoration: "none",
                  borderBottom: `1px solid ${W08}`,
                  borderLeft: isActive ? `3px solid ${GREEN}` : "3px solid transparent",
                  backgroundColor: isActive ? `${GREEN}0A` : "transparent",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = GREEN; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = W; }}>
                {link.label}
                {isActive && (
                  <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GREEN, flexShrink: 0 }} />
                )}
              </Link>
            );
          })}

          {/* ── CTA buttons ── */}
          <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 12, borderTop: `1px solid ${W08}`, marginTop: "auto" }}>
            <Link to="/contacto" onClick={() => setMobileOpen(false)}
              style={{
                display: "block", textAlign: "center",
                fontFamily: FONT, fontWeight: 600, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase",
                color: W, textDecoration: "none",
                padding: "16px 20px",
                border: `1px solid ${W08}`,
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${W}44`; e.currentTarget.style.color = W; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = W08; e.currentTarget.style.color = W; }}>
              Hablemos
            </Link>
            <Link to="/agendar" onClick={() => setMobileOpen(false)}
              style={{
                display: "block", textAlign: "center",
                fontFamily: FONT, fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase",
                backgroundColor: GREEN, color: B1, textDecoration: "none",
                padding: "18px 20px",
              }}>
              Agendar presentación →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
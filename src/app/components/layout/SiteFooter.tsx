import { Link } from "react-router";
import { FONT, B0, B3, GREEN, W, W40, W08, W04 } from "../../tokens";
import { Glow } from "../shared/Glow";
import { Logo } from "../shared/Logo";

const SERVICES = [
  { label: "Asuntos Públicos",            to: "/servicios/asuntos-publicos" },
  { label: "Comunicaciones Estratégicas", to: "/servicios/comunicaciones"   },
  { label: "Comunicación Digital",        to: "/servicios/digital"          },
  { label: "Manejo de Crisis",            to: "/servicios/crisis"           },
];

const EMPRESA = [
  { label: "Nosotros", to: "/nosotros" },
  { label: "Clientes", to: "/clientes" },
  { label: "IPM",      to: "/ipm"      },
  { label: "Sectores", to: "/sectores" },
];

const CONTENIDO = [
  { label: "Thought Leadership", to: "/thought-leadership"          },
  { label: "Insights",           to: "/thought-leadership/insights" },
  { label: "Blog",               to: "/thought-leadership/blog"     },
  { label: "Podcast",            to: "/thought-leadership#podcast"  },
  { label: "Recursos",           to: "/thought-leadership#recursos" },
];

const OFFICES = [
  { city: "Bogotá",   note: "Sede Principal"    },
  { city: "Cali",     note: "Oficina Valle"     },
  { city: "Medellín", note: "Oficina Antioquia" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    url: "https://linkedin.com/company/libretapersonal",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: "#0A66C2",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/libretapersonal",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    color: "#E1306C",
  },
  {
    label: "X",
    url: "https://twitter.com/libretapersonal",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: "#E7E9EA",
  },
];

function NavSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: GREEN, marginBottom: 18 }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to}
      style={{ display: "block", fontFamily: FONT, fontWeight: 300, fontSize: 13, color: W40, textDecoration: "none", marginBottom: 10, lineHeight: 1.45, transition: "color 0.2s" }}
      onMouseEnter={e => (e.currentTarget.style.color = W)}
      onMouseLeave={e => (e.currentTarget.style.color = W40)}>
      {children}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: B0, borderTop: `1px solid ${W08}`, position: "relative", overflow: "hidden" }}>
      <Glow cx="50%" cy="0%" color={B3} size="80%" opacity={0.07} />

      <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 64, paddingBottom: 44, position: "relative" }}>

        {/* ── Top grid ──
            Mobile:  brand full-width (col-span-2), then 4 nav cols in 2×2
            Desktop: brand + 4 nav cols in a 5-col row                      */}
        <div
          className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5 lg:gap-x-12"
          style={{ paddingBottom: 56, borderBottom: `1px solid ${W08}` }}
        >
          {/* ── Brand — full width on mobile, 1 col on desktop ── */}
          <div className="col-span-2 lg:col-span-1">
            <div style={{ marginBottom: 20 }}>
              <Logo />
            </div>
            <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, lineHeight: 1.85, color: W40, marginBottom: 28, maxWidth: 230 }}>
              Consultoría estratégica colombiana.<br />
              Estrategia inteligente. Influencia real.
            </p>

            <div style={{ marginBottom: 24 }}>
              <a href="mailto:contacto@libretapersonal.co"
                style={{ display: "block", fontFamily: FONT, fontWeight: 400, fontSize: 12, color: W40, textDecoration: "none", marginBottom: 8, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = W)}
                onMouseLeave={e => (e.currentTarget.style.color = W40)}>
                contacto@libretapersonal.co
              </a>
              <a href="https://wa.me/573105550000" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", fontFamily: FONT, fontWeight: 400, fontSize: 12, color: W40, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                onMouseLeave={e => (e.currentTarget.style.color = W40)}>
                +57 310 555 0000 · WhatsApp
              </a>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: 42, height: 42,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: W40, textDecoration: "none",
                    border: `1px solid ${W08}`,
                    borderRadius: "50%",
                    transition: "color 0.2s, border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.borderColor = `${s.color}55`;
                    e.currentTarget.style.backgroundColor = `${s.color}12`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = W40;
                    e.currentTarget.style.borderColor = W08;
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Servicios ── */}
          <NavSection title="Servicios">
            <Link to="/servicios"
              style={{ display: "block", fontFamily: FONT, fontWeight: 500, fontSize: 13, color: W40, textDecoration: "none", marginBottom: 14, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = W)}
              onMouseLeave={e => (e.currentTarget.style.color = W40)}>
              Ver todos →
            </Link>
            {SERVICES.map(l => <NavLink key={l.to} to={l.to}>{l.label}</NavLink>)}
          </NavSection>

          {/* ── Empresa ── */}
          <NavSection title="Empresa">
            {EMPRESA.map(l => <NavLink key={l.to} to={l.to}>{l.label}</NavLink>)}
          </NavSection>

          {/* ── Contenido ── */}
          <NavSection title="Contenido">
            {CONTENIDO.map(l => <NavLink key={l.to} to={l.to}>{l.label}</NavLink>)}
          </NavSection>

          {/* ── Contacto & Oficinas ── */}
          <NavSection title="Contacto">
            <NavLink to="/contacto">Hablemos</NavLink>
            <Link to="/agendar"
              style={{ display: "block", fontFamily: FONT, fontWeight: 300, fontSize: 13, color: W40, textDecoration: "none", marginBottom: 24, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = W)}
              onMouseLeave={e => (e.currentTarget.style.color = W40)}>
              Agendar presentación
            </Link>

            <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: W40, opacity: 0.5, marginBottom: 12 }}>
              Oficinas
            </div>
            {OFFICES.map(o => (
              <div key={o.city} style={{ marginBottom: 10 }}>
                <div style={{ fontFamily: FONT, fontWeight: 500, fontSize: 12, color: W40 }}>{o.city}</div>
                <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 11, color: W40, opacity: 0.5 }}>{o.note}</div>
              </div>
            ))}
          </NavSection>
        </div>

        {/* ── Bottom strip ── */}
        <div style={{ paddingTop: 32, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(18px, 4vw, 68px)", letterSpacing: "-0.06em", lineHeight: 0.85, color: W04, userSelect: "none" }}>
            LIBRETA PERSONAL GROUP
          </span>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, alignSelf: "center" }}>
            <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: W40 }}>
              © 2026 LPG · Todos los derechos reservados.
            </span>
            <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 11, color: W40, opacity: 0.5 }}>
              Bogotá · Cali · Medellín · Colombia
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

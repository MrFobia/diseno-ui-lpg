import { Outlet } from "react-router";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { GrainOverlay } from "../shared/GrainOverlay";
// import { Cursor } from "../shared/Cursor";
import { B1, FONT, GREEN, W, W40, W08 } from "../../tokens";

const SIDEBAR_SOCIALS = [
  {
    label: "LinkedIn",
    url: "https://linkedin.com/company/libretapersonal",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
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
  },
  {
    label: "X / Twitter",
    url: "https://twitter.com/libretapersonal",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

function SocialSidebar() {
  return (
    <div
      className="hidden lg:flex"
      style={{
        position: "fixed",
        right: 20,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 200,
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
      }}
    >
      {/* top line */}
      <div style={{ width: 1, height: 48, backgroundColor: W08, marginBottom: 10 }} />

      {/* icons */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {SIDEBAR_SOCIALS.map(s => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            style={{
              width: 36, height: 36,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: W40,
              transition: "color 0.2s, background 0.2s",
              borderRadius: "50%",
              border: `1px solid transparent`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = GREEN;
              e.currentTarget.style.border = `1px solid ${W08}`;
              e.currentTarget.style.backgroundColor = `${W}06`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = W40;
              e.currentTarget.style.border = "1px solid transparent";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* label rotated */}
      <div style={{ marginTop: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ width: 1, height: 32, backgroundColor: W08 }} />
        <div style={{
          fontFamily: FONT, fontWeight: 600, fontSize: 9, letterSpacing: "0.22em",
          textTransform: "uppercase", color: W40, opacity: 0.45,
          writingMode: "vertical-rl", textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}>
          Síguenos
        </div>
      </div>
    </div>
  );
}

export function Root() {
  return (
    <div style={{ backgroundColor: B1 }}>
      <GrainOverlay />
      {/* <Cursor /> */}
      <SiteNav />
      <SocialSidebar />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

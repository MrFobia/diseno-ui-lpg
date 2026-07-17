import { FONT, B1, B3, B4, GREEN, W, W40, W08, W04 } from "../../tokens";
import { Glow } from "./Glow";

interface Props {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  tags?: string[];
  image?: string;
}

export function PageHero({ eyebrow, title, titleAccent, subtitle, tags, image }: Props) {
  return (
    <section className="lpg-pad" style={{
      backgroundColor: B1, minHeight: "52vh",
      display: "flex", flexDirection: "column", justifyContent: "flex-end",
      paddingLeft: 48, paddingRight: 48, paddingBottom: 64, position: "relative", overflow: "hidden",
    }}>
      {image && (
        <img src={image} alt="" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", filter: "brightness(0.42) saturate(0.85)",
        }} />
      )}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 80% 70% at 10% 20%, ${B4}44 0%, transparent 65%),
          radial-gradient(ellipse 50% 50% at 85% 70%, ${B3}55 0%, transparent 60%)
        `,
      }} />
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, ${W04} 3px, ${W04} 4px)`,
      }} />

      <div style={{ maxWidth: 1440, margin: "0 auto", width: "100%", paddingTop: 120, position: "relative" }}>
        {eyebrow && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: GREEN }} />
            <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: W40 }}>
              {eyebrow}
            </span>
          </div>
        )}

        <h1 style={{
          fontFamily: FONT, fontWeight: 900,
          fontSize: "clamp(44px, 7vw, 100px)",
          lineHeight: 0.9, letterSpacing: "-0.04em",
          color: W, margin: "0 0 28px", userSelect: "none",
        }}>
          {title}
          <br />
          {titleAccent && <span style={{ color: GREEN }}>{titleAccent}</span>}
        </h1>

        {subtitle && (
          <p style={{
            fontFamily: FONT, fontWeight: 300, fontSize: "clamp(15px, 1.6vw, 18px)",
            lineHeight: 1.7, color: W40, maxWidth: 600,
          }}>{subtitle}</p>
        )}

        {tags && tags.length > 0 && (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 32 }}>
            {tags.map(t => (
              <span key={t} style={{
                fontFamily: FONT, fontWeight: 500, fontSize: 11,
                letterSpacing: "0.1em", textTransform: "uppercase",
                border: `1px solid ${W08}`, color: W40, padding: "6px 14px",
              }}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
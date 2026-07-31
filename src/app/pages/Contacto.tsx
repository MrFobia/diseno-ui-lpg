import { useState } from "react";
import { Link } from "react-router";
import { PageHero } from "../components/shared/PageHero";
import { Glow } from "../components/shared/Glow";
import { FONT, B1, B3, B4, GREEN, W, W40, W08, L_BG, L_BG2, L_MID, L_RULE } from "../tokens";

const OFFICES = [
  { city: "Bogotá", label: "Sede Principal", address: "Cra 7 #71-52, Edificio Aliadas, Piso 8", phone: "+57 (1) 555-0200", email: "bogota@libretapersonal.co", hours: "Lun–Vie 8am–6pm" },
  { city: "Cali", label: "Oficina Valle", address: "Av. 5N #23-10, Torre Empresarial, Piso 12", phone: "+57 (2) 555-0100", email: "cali@libretapersonal.co", hours: "Lun–Vie 8am–6pm" },
  { city: "Medellín", label: "Oficina Antioquia", address: "El Poblado, Cra 43A #7-50, Of. 301", phone: "+57 (4) 555-0300", email: "medellin@libretapersonal.co", hours: "Lun–Vie 8am–6pm" },
];

export default function Contacto() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [offHov, setOffHov] = useState<number | null>(null);
  const ch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const inputSt: React.CSSProperties = { width: "100%", background: "transparent", border: "none", borderBottom: `1px solid ${B3}22`, padding: "0 0 14px", fontFamily: FONT, fontWeight: 300, fontSize: 17, color: B3, outline: "none", boxSizing: "border-box" };
  const labelSt: React.CSSProperties = { fontFamily: FONT, fontWeight: 500, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: `${B3}66`, display: "block", marginBottom: 10 };

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="HABLEMOS."
        subtitle="Cuéntanos sobre tu organización. Un especialista de LPG te responderá en menos de 24 horas hábiles."
        image="https://images.unsplash.com/photo-1758876019338-c190822f6ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
      />

      {/* ── Main contact ── */}
      <section style={{ backgroundColor: L_BG }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "100px 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 100, alignItems: "start" }} className="flex flex-col md:grid">

            {/* Left info */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ height: 1, width: 28, backgroundColor: B3, opacity: 0.3 }} />
                <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: B3, opacity: 0.6 }}>Información de contacto</span>
              </div>
              <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: B3, marginBottom: 40 }}>CONTACTO<br />DIRECTO.</h2>

              {[
                { label: "Email general", value: "contacto@libretapersonal.co", icon: "✉" },
                { label: "WhatsApp ejecutivo", value: "+57 310 555 0000", icon: "●" },
                { label: "Sede principal", value: "Bogotá, Colombia", icon: "◎" },
              ].map(({ label, value, icon }) => (
                <div key={label} style={{ borderTop: `1px solid ${L_RULE}`, paddingTop: 20, marginBottom: 20 }}>
                  <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: B3, opacity: 0.5, marginBottom: 6 }}>{label}</div>
                  <div style={{ fontFamily: FONT, fontWeight: 500, fontSize: 17, color: B3, display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: GREEN, fontWeight: 900 }}>{icon}</span>
                    {value}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <div id="whatsapp" style={{ marginTop: 40, padding: "28px 32px", backgroundColor: `${GREEN}22`, border: `1px solid ${GREEN}77` }}>
                <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 14, color: B3, marginBottom: 8 }}>¿Crisis o urgencia?</div>
                <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 14, lineHeight: 1.6, color: L_MID, marginBottom: 16 }}>Para situaciones urgentes contamos con una línea directa disponible 24/7.</p>
                <a href="https://wa.me/573105550000" target="_blank" rel="noopener noreferrer" style={{ fontFamily: FONT, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: B3, color: W, padding: "12px 28px", textDecoration: "none", display: "inline-block" }}>WhatsApp directo →</a>
              </div>

              {/* Social */}
              <div style={{ marginTop: 40 }}>
                <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: B3, opacity: 0.5, marginBottom: 16 }}>Perfil corporativo</div>
                <div style={{ display: "flex", gap: 10 }}>
                  {[
                    { name: "LinkedIn", url: "https://linkedin.com" },
                    { name: "X/Twitter", url: "https://twitter.com" },
                    { name: "Instagram", url: "https://instagram.com" },
                  ].map(s => (
                    <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: B3, border: `1px solid ${B3}22`, padding: "8px 14px", textDecoration: "none", transition: "background 0.2s, color 0.2s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = B3; (e.currentTarget as HTMLAnchorElement).style.color = W; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = B3; }}>
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right form */}
            <form onSubmit={e => { e.preventDefault(); alert("¡Mensaje enviado! Te contactaremos en menos de 24 horas."); }}
              style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                <div>
                  <label style={labelSt}>Nombre completo</label>
                  <input name="name" type="text" placeholder="Juan García" value={form.name} onChange={ch} style={inputSt} />
                </div>
                <div>
                  <label style={labelSt}>Empresa / Organización</label>
                  <input name="company" type="text" placeholder="Nombre de la empresa" value={form.company} onChange={ch} style={inputSt} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                <div>
                  <label style={labelSt}>Correo electrónico</label>
                  <input name="email" type="email" placeholder="correo@empresa.com" value={form.email} onChange={ch} style={inputSt} />
                </div>
                <div>
                  <label style={labelSt}>Teléfono (opcional)</label>
                  <input name="phone" type="tel" placeholder="+57 300 000 0000" value={form.phone} onChange={ch} style={inputSt} />
                </div>
              </div>
              <div>
                <label style={labelSt}>Servicio de interés</label>
                <select name="service" value={form.service} onChange={ch}
                  style={{ ...inputSt, appearance: "none", cursor: "pointer" }}>
                  <option value="">Seleccionar servicio...</option>
                  <option value="publico">Asuntos Públicos</option>
                  <option value="comunicaciones">Comunicaciones Estratégicas</option>
                  <option value="digital">Comunicación Digital</option>
                  <option value="crisis">Manejo de Crisis</option>
                  <option value="ipm">IPM - Índice de Presencia en Medios</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label style={labelSt}>Mensaje</label>
                <textarea name="message" rows={5} placeholder="Cuéntanos sobre tu organización y el desafío que enfrentas..."
                  value={form.message} onChange={ch} style={{ ...inputSt, resize: "none" }} />
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                <button type="submit" style={{ backgroundColor: B3, color: W, fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", padding: "18px 44px", cursor: "pointer" }}>
                  Enviar mensaje →
                </button>
                <Link to="/agendar" style={{ fontFamily: FONT, fontWeight: 500, fontSize: 13, color: B3, textDecoration: "none", borderBottom: `1px solid ${B3}44`, paddingBottom: 2 }}>
                  O agenda una presentación
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── Oficinas ── */}
      <section id="oficinas" style={{ backgroundColor: L_BG2, borderTop: `1px solid ${L_RULE}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "100px 48px" }}>
          <div style={{ marginBottom: 64 }}>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: B3 }}>NUESTRAS<br />OFICINAS.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, backgroundColor: L_RULE }} className="grid grid-cols-1 md:grid-cols-3">
            {OFFICES.map((o, i) => (
              <div key={i} onMouseEnter={() => setOffHov(i)} onMouseLeave={() => setOffHov(null)}
                style={{ backgroundColor: offHov === i ? B3 : L_BG, padding: "48px 40px", transition: "background 0.25s", cursor: "default" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 20 }}>
                  <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.05em", color: offHov === i ? W : B3, lineHeight: 1, transition: "color 0.25s" }}>{o.city.toUpperCase()}</h3>
                  <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", backgroundColor: GREEN, color: B3, padding: "4px 10px", marginTop: 6, textAlign: "right", whiteSpace: "nowrap", flexShrink: 0 }}>{o.label}</span>
                </div>
                {[
                  { l: "Dirección", v: o.address },
                  { l: "Teléfono", v: o.phone },
                  { l: "Email", v: o.email },
                  { l: "Horario", v: o.hours },
                ].map(({ l, v }) => (
                  <div key={l} style={{ borderTop: `1px solid ${offHov === i ? `${W}18` : L_RULE}`, paddingTop: 14, marginBottom: 14, transition: "border-color 0.25s" }}>
                    <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: offHov === i ? `${W}55` : `${B3}55`, marginBottom: 4, transition: "color 0.25s" }}>{l}</div>
                    <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 14, color: offHov === i ? W : L_MID, lineHeight: 1.5, transition: "color 0.25s" }}>{v}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

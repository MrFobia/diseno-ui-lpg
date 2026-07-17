import { useState } from "react";
import { Link } from "react-router";
import { Glow } from "../components/shared/Glow";
import { FONT, B1, B3, B4, GREEN, W, W40, W08, L_BG, L_BG2, L_MID, L_RULE } from "../tokens";

const TIMES = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];
const MODALITIES = ["Videollamada (Zoom)", "Presencial en Cali", "Presencial en Bogotá", "Presencial en Medellín"];
const TOPICS = ["Asuntos Públicos", "Comunicaciones Estratégicas", "Comunicación Digital", "Manejo de Crisis", "IPM - Presencia en Medios", "Consultoría General"];

function getDates() {
  const dates = [];
  const today = new Date(2026, 3, 21);
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0 && d.getDay() !== 6) dates.push(d);
  }
  return dates.slice(0, 10);
}

const DAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

export default function Agendar() {
  const dates = getDates();
  const [selDate, setSelDate] = useState<number | null>(null);
  const [selTime, setSelTime] = useState<string | null>(null);
  const [modality, setModality] = useState(MODALITIES[0]);
  const [topic, setTopic] = useState(TOPICS[0]);
  const [form, setForm] = useState({ name: "", company: "", email: "", notes: "" });
  const [step, setStep] = useState(1);
  const ch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const inputSt: React.CSSProperties = { width: "100%", background: "transparent", border: "none", borderBottom: `1px solid ${B3}22`, padding: "0 0 14px", fontFamily: FONT, fontWeight: 300, fontSize: 17, color: B3, outline: "none", boxSizing: "border-box" };
  const labelSt: React.CSSProperties = { fontFamily: FONT, fontWeight: 500, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: `${B3}66`, display: "block", marginBottom: 10 };

  const canProceed1 = selDate !== null && selTime !== null;

  const STEPS = [
    { n: "01", l: "Fecha y hora" },
    { n: "02", l: "Tema y modalidad" },
    { n: "03", l: "Tus datos" },
  ];

  return (
    <div style={{ backgroundColor: L_BG, minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ backgroundColor: L_BG2, borderBottom: `1px solid ${L_RULE}`, paddingTop: 100 }}>
        <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 64, paddingBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: GREEN, outline: `1px solid ${B3}44` }} />
            <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: B3, opacity: 0.5 }}>Presentación LPG</span>
          </div>
          <h1 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(44px, 7vw, 100px)", letterSpacing: "-0.05em", lineHeight: 0.88, color: B3, marginBottom: 16 }}>AGENDAR<br />PRESENTACIÓN.</h1>
          <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 18, lineHeight: 1.7, color: L_MID, maxWidth: 560 }}>
            Agenda una sesión de 30 minutos con nuestros especialistas. Sin costo, sin compromiso.
          </p>

          {/* Steps indicator — labels hidden on mobile via lpg-step-label */}
          <div style={{ display: "flex", alignItems: "center", marginTop: 48 }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                    backgroundColor: step > i + 1 ? GREEN : step === i + 1 ? B3 : "transparent",
                    border: `1px solid ${step >= i + 1 ? B3 : `${B3}22`}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.3s",
                  }}>
                    {step > i + 1
                      ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke={B3} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      : <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 11, color: step === i + 1 ? W : `${B3}44` }}>{s.n}</span>
                    }
                  </div>
                  <span className="lpg-step-label" style={{ fontFamily: FONT, fontWeight: step === i + 1 ? 700 : 300, fontSize: 13, color: step === i + 1 ? B3 : `${B3}55`, transition: "font-weight 0.2s", whiteSpace: "nowrap" }}>{s.l}</span>
                </div>
                {i < 2 && <div className="lpg-step-connector" style={{ width: 48, height: 1, backgroundColor: `${B3}18`, margin: "0 16px", flexShrink: 0 }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Step 1: Date & Time ── */}
      {step === 1 && (
        <section style={{ backgroundColor: L_BG }}>
          <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80 }}>
            {/* Tailwind handles columns */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr] md:gap-[80px]">

              {/* Calendar */}
              <div>
                <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(24px, 4vw, 32px)", letterSpacing: "-0.04em", color: B3, marginBottom: 32 }}>SELECCIONA<br />UNA FECHA</h3>
                {/* 5 cols: compact on mobile, fine on desktop */}
                <div className="grid grid-cols-5" style={{ gap: 6 }}>
                  {dates.map((d, i) => (
                    <button key={i} onClick={() => setSelDate(i)}
                      style={{
                        padding: "12px 4px",
                        border: `1px solid ${selDate === i ? B3 : `${B3}18`}`,
                        backgroundColor: selDate === i ? B3 : "transparent",
                        cursor: "pointer", transition: "background 0.2s, border-color 0.2s",
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
                      }}>
                      <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: selDate === i ? `${W}88` : `${B3}55` }}>{DAYS[d.getDay()]}</span>
                      <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(16px, 3vw, 22px)", letterSpacing: "-0.04em", color: selDate === i ? W : B3, lineHeight: 1 }}>{d.getDate()}</span>
                      <span style={{ fontFamily: FONT, fontWeight: 300, fontSize: 10, color: selDate === i ? `${W}77` : `${B3}55` }}>{MONTHS[d.getMonth()]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Times */}
              <div>
                <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(24px, 4vw, 32px)", letterSpacing: "-0.04em", color: B3, marginBottom: 32 }}>SELECCIONA<br />UNA HORA</h3>
                <div className="grid grid-cols-3 md:grid-cols-3" style={{ gap: 8 }}>
                  {TIMES.map(t => (
                    <button key={t} onClick={() => setSelTime(t)}
                      style={{
                        padding: "14px 8px",
                        border: `1px solid ${selTime === t ? B3 : `${B3}18`}`,
                        backgroundColor: selTime === t ? B3 : "transparent",
                        cursor: "pointer", transition: "background 0.2s",
                        fontFamily: FONT, fontWeight: selTime === t ? 700 : 400, fontSize: 14,
                        letterSpacing: "-0.01em", color: selTime === t ? W : B3,
                      }}>
                      {t}
                    </button>
                  ))}
                </div>
                <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 12, color: L_MID, marginTop: 16 }}>Zona horaria: Colombia (GMT-5)</p>
              </div>
            </div>

            <div style={{ marginTop: 56, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => { if (canProceed1) setStep(2); }}
                style={{ backgroundColor: canProceed1 ? B3 : `${B3}33`, color: canProceed1 ? W : `${B3}55`, fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", padding: "18px 44px", cursor: canProceed1 ? "pointer" : "not-allowed" }}>
                Continuar →
              </button>
              {!canProceed1 && <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 13, color: L_MID }}>Selecciona fecha y hora para continuar</p>}
            </div>
          </div>
        </section>
      )}

      {/* ── Step 2: Topic & Modality ── */}
      {step === 2 && (
        <section style={{ backgroundColor: L_BG }}>
          <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80 }}>
            {/* Tailwind handles columns */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-[80px]">
              <div>
                <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(24px, 4vw, 32px)", letterSpacing: "-0.04em", color: B3, marginBottom: 32 }}>TEMA PRINCIPAL</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {TOPICS.map(t => (
                    <button key={t} onClick={() => setTopic(t)}
                      style={{ padding: "16px 20px", border: `1px solid ${topic === t ? B3 : `${B3}18`}`, backgroundColor: topic === t ? B3 : "transparent", cursor: "pointer", transition: "background 0.2s", fontFamily: FONT, fontWeight: topic === t ? 700 : 300, fontSize: 15, color: topic === t ? W : B3, textAlign: "left" }}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(24px, 4vw, 32px)", letterSpacing: "-0.04em", color: B3, marginBottom: 32 }}>MODALIDAD</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {MODALITIES.map(m => (
                    <button key={m} onClick={() => setModality(m)}
                      style={{ padding: "16px 20px", border: `1px solid ${modality === m ? B3 : `${B3}18`}`, backgroundColor: modality === m ? B3 : "transparent", cursor: "pointer", transition: "background 0.2s", fontFamily: FONT, fontWeight: modality === m ? 700 : 300, fontSize: 15, color: modality === m ? W : B3, textAlign: "left" }}>
                      {m}
                    </button>
                  ))}
                </div>

                {/* Summary */}
                <div style={{ marginTop: 40, padding: "24px 28px", backgroundColor: L_BG2, border: `1px solid ${L_RULE}` }}>
                  <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: B3, opacity: 0.5, marginBottom: 14 }}>Resumen</div>
                  {selDate !== null && <div style={{ fontFamily: FONT, fontWeight: 400, fontSize: 14, color: B3, marginBottom: 8 }}>📅 {DAYS[dates[selDate].getDay()]} {dates[selDate].getDate()} {MONTHS[dates[selDate].getMonth()]} · {selTime}</div>}
                  <div style={{ fontFamily: FONT, fontWeight: 400, fontSize: 14, color: B3, marginBottom: 8 }}>📋 {topic}</div>
                  <div style={{ fontFamily: FONT, fontWeight: 400, fontSize: 14, color: B3 }}>🎯 {modality}</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 56, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => setStep(1)} style={{ backgroundColor: "transparent", color: B3, fontFamily: FONT, fontWeight: 600, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", border: `1px solid ${B3}33`, padding: "18px 36px", cursor: "pointer" }}>← Atrás</button>
              <button onClick={() => setStep(3)} style={{ backgroundColor: B3, color: W, fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", padding: "18px 44px", cursor: "pointer" }}>Continuar →</button>
            </div>
          </div>
        </section>
      )}

      {/* ── Step 3: Form ── */}
      {step === 3 && (
        <section style={{ backgroundColor: L_BG }}>
          <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 80 }}>
            {/* Tailwind handles columns */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr] md:gap-[100px]">

              {/* Summary sidebar */}
              <div>
                <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(24px, 4vw, 32px)", letterSpacing: "-0.04em", color: B3, marginBottom: 32 }}>CONFIRMA TU CITA</h3>
                <div style={{ padding: "28px 24px", backgroundColor: L_BG2, border: `1px solid ${L_RULE}` }}>
                  {[
                    { icon: "📅", l: "Fecha y hora", v: selDate !== null ? `${DAYS[dates[selDate].getDay()]} ${dates[selDate].getDate()} ${MONTHS[dates[selDate].getMonth()]} 2026, ${selTime}` : "" },
                    { icon: "📋", l: "Tema", v: topic },
                    { icon: "🎯", l: "Modalidad", v: modality },
                    { icon: "⏱", l: "Duración", v: "30 minutos" },
                  ].map(({ icon, l, v }) => (
                    <div key={l} style={{ borderBottom: `1px solid ${L_RULE}`, paddingBottom: 16, marginBottom: 16 }}>
                      <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: `${B3}55`, marginBottom: 6 }}>{icon} {l}</div>
                      <div style={{ fontFamily: FONT, fontWeight: 500, fontSize: 14, color: B3 }}>{v}</div>
                    </div>
                  ))}
                  <div style={{ marginTop: 8, padding: "12px 16px", backgroundColor: `${GREEN}22` }}>
                    <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12, color: B3 }}>✓ Sin costo · Sin compromiso</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={e => { e.preventDefault(); setStep(4); }} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {/* Name + Company — stacks on mobile via lpg-form-row */}
                <div className="lpg-form-row grid grid-cols-1 md:grid-cols-2" style={{ gap: 28 }}>
                  <div><label style={labelSt}>Nombre completo</label><input name="name" type="text" placeholder="Juan García" value={form.name} onChange={ch} style={inputSt} required /></div>
                  <div><label style={labelSt}>Empresa</label><input name="company" type="text" placeholder="Tu empresa" value={form.company} onChange={ch} style={inputSt} required /></div>
                </div>
                <div><label style={labelSt}>Correo electrónico</label><input name="email" type="email" placeholder="correo@empresa.com" value={form.email} onChange={ch} style={inputSt} required /></div>
                <div><label style={labelSt}>Notas adicionales (opcional)</label><textarea name="notes" rows={4} placeholder="Cuéntanos brevemente sobre tu organización..." value={form.notes} onChange={ch} style={{ ...inputSt, resize: "none" }} /></div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button type="button" onClick={() => setStep(2)} style={{ backgroundColor: "transparent", color: B3, fontFamily: FONT, fontWeight: 600, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", border: `1px solid ${B3}33`, padding: "18px 36px", cursor: "pointer" }}>← Atrás</button>
                  <button type="submit" style={{ backgroundColor: B3, color: W, fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", padding: "18px 44px", cursor: "pointer" }}>Confirmar presentación →</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* ── Step 4: Confirmation ── */}
      {step === 4 && (
        <section style={{ backgroundColor: L_BG }}>
          <div className="lpg-pad" style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 48, paddingRight: 48, paddingTop: 120, paddingBottom: 120, textAlign: "center" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", backgroundColor: GREEN, margin: "0 auto 32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: FONT, fontWeight: 900, fontSize: 28, color: B3 }}>✓</span>
            </div>
            <h2 style={{ fontFamily: FONT, fontWeight: 900, fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.05em", lineHeight: 0.9, color: B3, marginBottom: 20 }}>¡CITA<br />AGENDADA!</h2>
            <p style={{ fontFamily: FONT, fontWeight: 300, fontSize: 18, lineHeight: 1.7, color: L_MID, maxWidth: 480, margin: "0 auto 40px" }}>
              Recibirás un correo de confirmación con los detalles. Un especialista de LPG te contactará para confirmar la reunión.
            </p>
            {selDate !== null && (
              <div style={{ display: "inline-block", padding: "24px 40px", backgroundColor: L_BG2, border: `1px solid ${L_RULE}`, marginBottom: 40 }}>
                <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 18, color: B3 }}>
                  {DAYS[dates[selDate].getDay()]} {dates[selDate].getDate()} {MONTHS[dates[selDate].getMonth()]} 2026 · {selTime}
                </div>
                <div style={{ fontFamily: FONT, fontWeight: 300, fontSize: 14, color: L_MID, marginTop: 4 }}>{modality} · {topic}</div>
              </div>
            )}
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/" style={{ fontFamily: FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: B3, color: W, padding: "16px 40px", textDecoration: "none" }}>Volver al inicio</Link>
              <Link to="/servicios" style={{ fontFamily: FONT, fontWeight: 500, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: B3, padding: "16px 40px", textDecoration: "none", border: `1px solid ${B3}33` }}>Ver servicios</Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

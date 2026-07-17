import { B4 } from "../../tokens";

export function Glow({ cx = "20%", cy = "30%", color = B4, size = "70%", opacity = 0.35 }: {
  cx?: string; cy?: string; color?: string; size?: string; opacity?: number;
}) {
  return (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none",
      background: `radial-gradient(ellipse ${size} ${size} at ${cx} ${cy}, ${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 0%, transparent 70%)`,
    }} />
  );
}

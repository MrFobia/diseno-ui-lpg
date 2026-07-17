import { useEffect, useRef } from "react";
import { GREEN } from "../../tokens";

export function Cursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos  = useRef({ x: 0, y: 0 });
  const lag  = useRef({ x: 0, y: 0 });
  const raf  = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);
    const tick = () => {
      lag.current.x += (pos.current.x - lag.current.x) * 0.11;
      lag.current.y += (pos.current.y - lag.current.y) * 0.11;
      if (dot.current)  dot.current.style.transform  = `translate(${pos.current.x - 4}px,${pos.current.y - 4}px)`;
      if (ring.current) ring.current.style.transform = `translate(${lag.current.x - 22}px,${lag.current.y - 22}px)`;
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf.current); };
  }, []);

  return (
    <>
      <div ref={dot} style={{
        position: "fixed", top: 0, left: 0, width: 8, height: 8,
        backgroundColor: GREEN, borderRadius: "50%", pointerEvents: "none", zIndex: 9999,
      }} />
      <div ref={ring} style={{
        position: "fixed", top: 0, left: 0, width: 44, height: 44,
        border: `1px solid ${GREEN}44`, borderRadius: "50%", pointerEvents: "none", zIndex: 9998,
      }} />
    </>
  );
}

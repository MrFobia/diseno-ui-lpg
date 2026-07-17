import { useEffect, useRef, useState } from "react";
import FigmaLatamMap from "../../../imports/LatamMap/LatamMap-42-119";

const FIGMA_W = 1433;
const FIGMA_H = 1102;

// Renders the Figma-imported static LatamMap scaled responsively to the container width.
export function LatamMap({ dark = true }: { dark?: boolean }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / FIGMA_W);
    });
    observer.observe(wrapperRef.current);
    // Set initial scale
    setScale(wrapperRef.current.getBoundingClientRect().width / FIGMA_W);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        width: "100%",
        height: FIGMA_H * scale,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: FIGMA_W,
          height: FIGMA_H,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        <FigmaLatamMap />
      </div>
    </div>
  );
}

import { useState, useRef } from "react";
import { FONT_DISPLAY, FONT_MONO } from "../styles/constants";
import { useOnScreen } from "../hooks/useOnScreen";
import type { PortfolioItem } from "../data/portfolio";

/**
 * A single row on the /portfolio page:
 * thumbnail (16:9, uniform) + text block side-by-side.
 * Even/odd rows alternate direction.
 */
export function PortfolioRow({
  item,
  index,
  isMobile,
}: {
  item: PortfolioItem;
  index: number;
  isMobile: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const visible = useOnScreen(ref, 0.15);
  const isReel = item.format === "9:16";
  const isRed = item.bg === "#FF3D00";
  const isReversed = index % 2 === 1;

  const thumbnail = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        backgroundColor: item.bg,
        aspectRatio: "16 / 9",
        overflow: "hidden",
        cursor: "pointer",
        flex: isMobile ? "none" : "0 0 55%",
        width: isMobile ? "100%" : undefined,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor:
            isHovered && !isRed ? "rgba(255,61,0,0.06)" : "transparent",
          transition: "background-color 0.4s",
        }}
      />

      {/* Format badge */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          fontFamily: FONT_MONO,
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: isRed ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.3)",
          border: isRed
            ? "1px solid rgba(0,0,0,0.15)"
            : "1px solid rgba(255,255,255,0.12)",
          padding: "3px 8px",
          zIndex: 2,
        }}
      >
        {isReel ? "9:16" : "16:9"}
      </div>

      {/* Big number */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: FONT_DISPLAY,
          fontSize: 100,
          lineHeight: 1,
          color: isRed ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.025)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Play button */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0.7})`,
          width: 56,
          height: 56,
          borderRadius: "50%",
          backgroundColor: "#FF3D00",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: isHovered ? 1 : 0,
          transition: "all 0.35s ease",
          zIndex: 3,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );

  const textBlock = (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: isMobile
          ? "24px 0 0"
          : isReversed
          ? "0 40px 0 0"
          : "0 0 0 40px",
      }}
    >
      <span
        style={{
          fontFamily: FONT_MONO,
          fontSize: 11,
          fontWeight: 700,
          color: "rgba(255,61,0,0.4)",
          marginBottom: 16,
        }}
      >
        [{String(index + 1).padStart(2, "0")}]
      </span>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "rgba(0,0,0,0.4)",
            textTransform: "uppercase",
          }}
        >
          {item.category}
        </span>
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 10,
            color: "rgba(0,0,0,0.2)",
          }}
        >
          {item.year}
        </span>
      </div>

      <h3
        style={{
          fontFamily: FONT_DISPLAY,
          fontSize: isMobile ? 28 : 36,
          letterSpacing: "0.03em",
          color: "#000",
          textTransform: "uppercase",
          margin: 0,
          lineHeight: 1,
        }}
      >
        {item.title}
      </h3>

      <div
        style={{
          width: 48,
          height: 3,
          backgroundColor: "#FF3D00",
          marginTop: 16,
          marginBottom: 16,
        }}
      />

      <p
        style={{
          fontFamily: FONT_MONO,
          fontSize: 12,
          color: "rgba(0,0,0,0.5)",
          lineHeight: 1.8,
          maxWidth: 400,
        }}
      >
        {item.desc}
      </p>

      <div style={{ marginTop: 20 }}>
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 10,
            letterSpacing: "0.08em",
            padding: "5px 12px",
            border: "1px solid rgba(0,0,0,0.12)",
            color: "rgba(0,0,0,0.4)",
          }}
        >
          {item.format}
        </span>
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: isMobile
          ? "column"
          : isReversed
          ? "row-reverse"
          : "row",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        paddingBottom: 24,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.7s ease",
      }}
    >
      {thumbnail}
      {textBlock}
    </div>
  );
}

import { useState } from "react";
import { FONT_DISPLAY, FONT_MONO } from "../styles/constants";
import type { PortfolioItem } from "../data/portfolio";

/**
 * Compact card for the home-page grid.
 * Renders at the item's real aspect ratio (16:9 or 9:16).
 */
export function PortfolioCard({
  item,
  index,
  style,
}: {
  item: PortfolioItem;
  index: number;
  style?: React.CSSProperties;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isReel = item.format === "9:16";
  const isRed = item.bg === "#FF3D00";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        backgroundColor: item.bg,
        aspectRatio: isReel ? "9 / 16" : "16 / 9",
        overflow: "hidden",
        cursor: "pointer",
        ...style,
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
          color: isRed ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.25)",
          border: isRed
            ? "1px solid rgba(0,0,0,0.15)"
            : "1px solid rgba(255,255,255,0.1)",
          padding: "3px 8px",
          zIndex: 2,
        }}
      >
        {isReel ? "9:16" : "16:9"}
      </div>

      {/* Background number */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: FONT_DISPLAY,
          fontSize: isReel ? 100 : 80,
          lineHeight: 1,
          color: isRed ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.025)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Play button on hover */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0.7})`,
          width: 52,
          height: 52,
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
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Bottom info */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 16,
          background: isRed
            ? "linear-gradient(transparent, rgba(200,40,0,0.5))"
            : "linear-gradient(transparent, rgba(0,0,0,0.7))",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 4,
          }}
        >
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 9,
              letterSpacing: "0.15em",
              color: isRed ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
            }}
          >
            {item.category}
          </span>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 9,
              color: isRed ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.2)",
            }}
          >
            {item.year}
          </span>
        </div>
        <h3
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: isReel ? 18 : 20,
            letterSpacing: "0.04em",
            color: isRed ? "#000" : "#fff",
            margin: 0,
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          {item.title}
        </h3>
      </div>
    </div>
  );
}

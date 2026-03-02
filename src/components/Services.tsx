import { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import { useIsMobile } from "../hooks/useIsMobile";
import { FONT_DISPLAY, FONT_MONO } from "../styles/constants";
import { services } from "../data/services";

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useOnScreen(ref);
  const isMobile = useIsMobile();
  const px = isMobile ? 20 : 40;

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        backgroundColor: "#000",
        color: "#fff",
        padding: `${isMobile ? 60 : 100}px ${px}px`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          marginBottom: isMobile ? 40 : 64,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 16,
          }}
        >
          <div style={{ width: 48, height: 4, backgroundColor: "#FF3D00" }} />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 10,
              letterSpacing: "0.4em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
            }}
          >
            Форматы
          </span>
        </div>
        <h2
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: isMobile
              ? "clamp(2rem, 8vw, 3rem)"
              : "clamp(2.5rem, 6vw, 5rem)",
            letterSpacing: "0.02em",
            lineHeight: 1,
            margin: 0,
          }}
        >
          ЧТО МЫ <span style={{ color: "#FF3D00" }}>ДЕЛАЕМ</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: 2,
        }}
      >
        {services.map((s, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              padding: isMobile ? "24px 20px" : "32px 28px",
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: s.accent
                ? "#FF3D00"
                : "rgba(255,255,255,0.02)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.7s ease ${0.1 * i}s`,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              if (!s.accent)
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              if (!s.accent)
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.02)";
            }}
          >
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 11,
                fontWeight: 700,
                color: s.accent
                  ? "rgba(0,0,0,0.4)"
                  : "rgba(255,61,0,0.5)",
                display: "block",
                marginBottom: 12,
              }}
            >
              [{s.num}]
            </span>

            <h3
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: isMobile ? 20 : 22,
                letterSpacing: "0.03em",
                color: s.accent ? "#000" : "#fff",
                textTransform: "uppercase",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {s.title}
            </h3>

            <p
              style={{
                fontFamily: FONT_MONO,
                fontSize: 11,
                color: s.accent
                  ? "rgba(0,0,0,0.6)"
                  : "rgba(255,255,255,0.35)",
                lineHeight: 1.6,
                marginTop: 10,
              }}
            >
              {s.desc}
            </p>

            <div
              style={{
                marginTop: 16,
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
              }}
            >
              {s.tags.map((tag, j) => (
                <span
                  key={j}
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 10,
                    letterSpacing: "0.04em",
                    padding: "4px 10px",
                    border: s.accent
                      ? "1px solid rgba(0,0,0,0.2)"
                      : "1px solid rgba(255,255,255,0.1)",
                    color: s.accent
                      ? "rgba(0,0,0,0.7)"
                      : "rgba(255,255,255,0.4)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {s.accent && (
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  fontFamily: FONT_MONO,
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#000",
                  backgroundColor: "#fff",
                  padding: "4px 10px",
                  textTransform: "uppercase",
                }}
              >
                Под ключ
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

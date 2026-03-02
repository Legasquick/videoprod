import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { FONT_DISPLAY, FONT_MONO } from "../styles/constants";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const px = isMobile ? 20 : 40;

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#FFFEF5",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Red accent block */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: isMobile ? "40%" : "min(320px, 30%)",
          height: isMobile ? "20vh" : "min(320px, 35vh)",
          backgroundColor: "#FF3D00",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "scale(1)" : "scale(0)",
          transformOrigin: "top right",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
        }}
      />

      {/* Company name */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: `24px ${px}px`,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease 0.2s",
        }}
      >
        <span
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: isMobile ? 16 : 20,
            letterSpacing: "0.06em",
            color: "#000",
          }}
        >
          НАЗВАНИЕ
        </span>
      </div>

      {/* Main hero content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: `0 ${px}px 40px`,
        }}
      >
        <div style={{ maxWidth: 900, width: "100%" }}>
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(60px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
            }}
          >
            <h1
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: isMobile
                  ? "clamp(1.6rem, 9.5vw, 3.2rem)"
                  : "clamp(3.2rem, 10vw, 9rem)",
                lineHeight: 0.9,
                color: "#000",
                textTransform: "uppercase",
                margin: 0,
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              ВИДЕОПРОДАКШН
            </h1>
            <h1
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: isMobile
                  ? "clamp(1.6rem, 9.5vw, 3.2rem)"
                  : "clamp(3.2rem, 10vw, 9rem)",
                lineHeight: 0.9,
                color: "#FF3D00",
                textTransform: "uppercase",
                margin: 0,
                marginTop: 4,
              }}
            >
              ПОД КЛЮЧ
            </h1>
          </div>

          <div
            style={{
              marginTop: isMobile ? 28 : 40,
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
            }}
          >
            <div
              style={{
                borderTop: "2px solid #000",
                paddingTop: 16,
                maxWidth: 480,
              }}
            >
              <p
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: isMobile ? 12 : 13,
                  color: "rgba(0,0,0,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Полный цикл видеопроизводства — подкасты, репортажи, выездные
                съёмки, интервью. Берём на себя{" "}
                <span
                  style={{
                    backgroundColor: "#FF3D00",
                    color: "#fff",
                    padding: "1px 5px",
                    fontWeight: 700,
                  }}
                >
                  ВСЁ
                </span>
                .
              </p>
            </div>

            <div
              style={{
                marginTop: 24,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  position: "relative",
                  padding: isMobile ? "14px 24px" : "16px 36px",
                  backgroundColor: "#000",
                  color: "#fff",
                  fontFamily: FONT_MONO,
                  fontSize: isMobile ? 11 : 12,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Обсудить проект
                <div
                  style={{
                    position: "absolute",
                    top: -4,
                    right: -4,
                    width: 12,
                    height: 12,
                    backgroundColor: "#FF3D00",
                  }}
                />
              </button>
              <button
                onClick={scrollToPortfolio}
                style={{
                  padding: isMobile ? "14px 24px" : "16px 36px",
                  border: "2px solid #000",
                  backgroundColor: "transparent",
                  color: "#000",
                  fontFamily: FONT_MONO,
                  fontSize: isMobile ? 11 : 12,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Портфолио ↓
              </button>
            </div>
          </div>

          <div
            style={{
              marginTop: isMobile ? 36 : 56,
              display: "flex",
              gap: isMobile ? 28 : 48,
              flexWrap: "wrap",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s ease 1s",
            }}
          >
            {[
              { num: "200+", label: "Проектов" },
              { num: "7+", label: "Лет опыта" },
            ].map((s, i) => (
              <div key={i}>
                <p
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: isMobile ? 28 : 36,
                    color: "#000",
                    letterSpacing: "0.02em",
                  }}
                >
                  {s.num}
                </p>
                <p
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 9,
                    color: "rgba(0,0,0,0.3)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginTop: 2,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee divider */}
      <div
        style={{
          borderTop: "2px solid #000",
          overflow: "hidden",
          padding: "14px 0",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1.2s",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "marquee 18s linear infinite",
          }}
        >
          {[...Array(4)].map((_, si) =>
            [
              "ПОДКАСТЫ",
              "РЕПОРТАЖИ",
              "СЪЁМКИ",
              "ИНТЕРВЬЮ",
              "МОНТАЖ",
              "ПРОДЮСИРОВАНИЕ",
              "REELS",
            ].map((t, i) => (
              <span
                key={`${si}-${i}`}
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: isMobile ? 18 : 24,
                  color: "rgba(0,0,0,0.06)",
                  letterSpacing: "0.05em",
                  margin: "0 20px",
                }}
              >
                {t}
                <span
                  style={{
                    color: "rgba(255,61,0,0.15)",
                    margin: "0 14px",
                    fontSize: 14,
                  }}
                >
                  ◼
                </span>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

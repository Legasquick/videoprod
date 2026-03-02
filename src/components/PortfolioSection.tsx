import { useRef } from "react";
import { Link } from "react-router-dom";
import { useOnScreen } from "../hooks/useOnScreen";
import { useIsMobile } from "../hooks/useIsMobile";
import { FONT_DISPLAY, FONT_MONO } from "../styles/constants";
import { portfolio } from "../data/portfolio";
import { PortfolioCard } from "./PortfolioCard";

const GAP = 12;

/**
 * Home-page portfolio preview.
 *
 * Desktop: paired rows so heights align naturally:
 *   Row 1 — two 16:9 stacked (61 %) │ one 9:16 (39 %)
 *   Row 2 — one 9:16 (39 %)         │ two 16:9 stacked (61 %)
 *
 * Mobile: single column, real aspect ratios.
 */
export function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useOnScreen(ref);
  const isMobile = useIsMobile();
  const px = isMobile ? 20 : 40;

  // items 0,2 = 16:9   item 1 = 9:16
  // items 4,5 = 16:9   item 3 = 9:16
  const g1Wide = [portfolio[0], portfolio[2]];
  const g1Tall = portfolio[1];
  const g2Tall = portfolio[3];
  const g2Wide = [portfolio[4], portfolio[5]];

  return (
    <section
      id="portfolio"
      ref={ref}
      style={{
        position: "relative",
        backgroundColor: "#FFFEF5",
        padding: `${isMobile ? 60 : 100}px ${px}px ${isMobile ? 40 : 80}px`,
        overflow: "hidden",
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          marginBottom: isMobile ? 32 : 64,
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
              color: "rgba(0,0,0,0.3)",
              textTransform: "uppercase",
            }}
          >
            Портфолио
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
            color: "#000",
          }}
        >
          НАШИ <span style={{ color: "#FF3D00" }}>РАБОТЫ</span>
        </h2>
      </div>

      {/* Grid */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: GAP,
            }}
          >
            {portfolio.map((p, i) => (
              <div
                key={i}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.7s ease ${0.08 * i}s`,
                }}
              >
                <PortfolioCard item={p} index={i} />
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: GAP,
            }}
          >
            {/* Group 1 — two 16:9 left + one 9:16 right */}
            <div
              style={{
                display: "flex",
                gap: GAP,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease 0.1s",
              }}
            >
              <div
                style={{
                  flex: `0 0 calc(61% - ${GAP / 2}px)`,
                  display: "flex",
                  flexDirection: "column",
                  gap: GAP,
                }}
              >
                {g1Wide.map((p, i) => (
                  <PortfolioCard
                    key={i}
                    item={p}
                    index={i === 0 ? 0 : 2}
                  />
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <PortfolioCard item={g1Tall} index={1} />
              </div>
            </div>

            {/* Group 2 — one 9:16 left + two 16:9 right */}
            <div
              style={{
                display: "flex",
                gap: GAP,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease 0.3s",
              }}
            >
              <div style={{ flex: "0 0 39%", minWidth: 0 }}>
                <PortfolioCard item={g2Tall} index={3} />
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: GAP,
                }}
              >
                {g2Wide.map((p, i) => (
                  <PortfolioCard
                    key={i}
                    item={p}
                    index={i === 0 ? 4 : 5}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* "ВСЕ РАБОТЫ" link */}
        <Link
          to="/portfolio"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: GAP,
            padding: isMobile ? "36px 20px" : "48px 40px",
            border: "2px solid #000",
            cursor: "pointer",
            backgroundColor: "transparent",
            textDecoration: "none",
            transition: "all 0.3s",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.5s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#000";
            const t =
              e.currentTarget.querySelector<HTMLElement>(".btn-title");
            if (t) t.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            const t =
              e.currentTarget.querySelector<HTMLElement>(".btn-title");
            if (t) t.style.color = "#000";
          }}
        >
          <div style={{ textAlign: "center" }}>
            <span
              className="btn-title"
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: isMobile ? 22 : 28,
                letterSpacing: "0.08em",
                color: "#000",
                transition: "color 0.3s",
              }}
            >
              ВСЕ РАБОТЫ
            </span>
            <span
              style={{
                display: "block",
                fontFamily: FONT_MONO,
                fontSize: 10,
                letterSpacing: "0.15em",
                color: "rgba(128,128,128,0.6)",
                marginTop: 6,
                textTransform: "uppercase",
              }}
            >
              Смотреть полное портфолио →
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

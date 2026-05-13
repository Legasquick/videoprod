import { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import { useIsMobile } from "../hooks/useIsMobile";
import { FONT_DISPLAY, FONT_MONO } from "../styles/constants";
import { portfolio } from "../data/portfolio";
import { PortfolioCard } from "./PortfolioCard";

const GAP = 12;
const PORTFOLIO_URL = "https://disk.yandex.ru/d/YlUkje4RZ_Jnhg";

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

  const wideItems = portfolio.filter((item) => item.format === "16:9");
  const tallItems = portfolio.filter((item) => item.format === "9:16");

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
                {wideItems.slice(0, 2).map((p, i) => (
                  <PortfolioCard
                    key={i}
                    item={p}
                    index={portfolio.indexOf(p)}
                  />
                ))}
              </div>
              {tallItems[0] && (
                <div style={{ flex: 1, minWidth: 0 }}>
                  <PortfolioCard
                    item={tallItems[0]}
                    index={portfolio.indexOf(tallItems[0])}
                  />
                </div>
              )}
            </div>

            {/* Group 2 — one 16:9 card */}
            <div
              style={{
                display: "flex",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease 0.3s",
              }}
            >
              {wideItems[2] && (
                <PortfolioCard
                  item={wideItems[2]}
                  index={portfolio.indexOf(wideItems[2])}
                  style={{ width: "100%" }}
                />
              )}
            </div>
          </div>
        )}

        {/* "ВСЕ РАБОТЫ" link */}
        <a
          href={PORTFOLIO_URL}
          target="_blank"
          rel="noreferrer"
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
        </a>
      </div>
    </section>
  );
}

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useIsMobile } from "../hooks/useIsMobile";
import { FONT_DISPLAY, FONT_MONO } from "../styles/constants";
import { portfolio } from "../data/portfolio";
import { PortfolioRow } from "../components/PortfolioRow";
import { Footer } from "../components/Footer";

export function PortfolioPage() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const px = isMobile ? 20 : 40;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "#FFFEF5", minHeight: "100vh" }}>
      {/* Grid bg */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Header bar */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          borderBottom: "2px solid #000",
          padding: `20px ${px}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#FFFEF5",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: isMobile ? 16 : 20,
            letterSpacing: "0.06em",
            color: "#000",
            textDecoration: "none",
          }}
        >
          НАЗВАНИЕ
        </Link>
        <button
          onClick={() => navigate(-1)}
          style={{
            fontFamily: FONT_MONO,
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#000",
            border: "2px solid #000",
            backgroundColor: "transparent",
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          ← Назад
        </button>
      </div>

      {/* Title */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: `${isMobile ? 40 : 80}px ${px}px ${isMobile ? 24 : 48}px`,
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
            Все проекты
          </span>
        </div>
        <h1
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: isMobile
              ? "clamp(2.5rem, 10vw, 4rem)"
              : "clamp(3rem, 8vw, 7rem)",
            letterSpacing: "0.02em",
            lineHeight: 1,
            margin: 0,
            color: "#000",
          }}
        >
          ПОРТФОЛИО
        </h1>
      </div>

      {/* Items list */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: `0 ${px}px ${isMobile ? 40 : 80}px`,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {portfolio.map((item, i) => (
          <PortfolioRow
            key={i}
            item={item}
            index={i}
            isMobile={isMobile}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

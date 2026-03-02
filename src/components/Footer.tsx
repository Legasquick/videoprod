import { useIsMobile } from "../hooks/useIsMobile";
import { FONT_DISPLAY, FONT_MONO } from "../styles/constants";

export function Footer() {
  const isMobile = useIsMobile();
  const px = isMobile ? 20 : 40;

  return (
    <footer
      style={{
        backgroundColor: "#000",
        borderTop: "2px solid #FF3D00",
        padding: `${isMobile ? 32 : 48}px ${px}px ${isMobile ? 24 : 32}px`,
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: isMobile ? 32 : 40,
        }}
      >
        <div>
          <span
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 18,
              letterSpacing: "0.06em",
            }}
          >
            НАЗВАНИЕ
          </span>
          <p
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              color: "rgba(255,255,255,0.3)",
              lineHeight: 1.6,
              maxWidth: 280,
              marginTop: 12,
            }}
          >
            Видеопродакшн полного цикла.
            <br />
            Подкасты, репортажи, съёмки, интервью.
          </p>
        </div>

        <div>
          <p
            style={{
              fontFamily: FONT_MONO,
              fontSize: 9,
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Контакты
          </p>
          <p
            style={{
              fontFamily: FONT_MONO,
              fontSize: 13,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 2,
            }}
          >
            hello@company.pro
            <br />
            +7 (999) 123-45-67
          </p>
        </div>

        <div>
          <button
            style={{
              padding: "14px 28px",
              backgroundColor: "#FF3D00",
              color: "#fff",
              fontFamily: FONT_MONO,
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
          >
            Написать нам
          </button>
        </div>
      </div>

      <div
        style={{
          marginTop: isMobile ? 32 : 48,
          paddingTop: 20,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 8 : 0,
        }}
      >
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 10,
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.1em",
          }}
        >
          © 2026 НАЗВАНИЕ
        </span>
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 10,
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.1em",
          }}
        >
          МОСКВА, РОССИЯ
        </span>
      </div>
    </footer>
  );
}

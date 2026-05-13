import { useIsMobile } from "../hooks/useIsMobile";
import { FONT_MONO } from "../styles/constants";

export function Footer() {
  const isMobile = useIsMobile();
  const px = isMobile ? 20 : 40;
  const contactEmail = ["g.n.mamedova", "yandex.ru"].join("@");

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
          <a
            href={`mailto:${contactEmail}`}
            style={{
              display: "inline-block",
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
              textDecoration: "none",
            }}
          >
            Написать нам
          </a>
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
        <span />
      </div>
    </footer>
  );
}

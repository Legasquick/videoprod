import { useIsMobile } from "../hooks/useIsMobile";
import { FONT_MONO } from "../styles/constants";

export function Footer() {
  const isMobile = useIsMobile();
  const px = isMobile ? 20 : 40;
  const contacts = [
    { label: "Telegram @gunayTIGI", href: "https://t.me/gunayTIGI", icon: "telegram" },
    { label: "MAX +7 926 585 01 54", href: "tel:+79265850154", icon: "max" },
  ];

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

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 10,
          }}
        >
          {contacts.map((contact) => (
            <a
              key={contact.href}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={contact.label}
              title={contact.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
                backgroundColor: "#FF3D00",
                color: "#fff",
                fontFamily: FONT_MONO,
                fontSize: 12,
                fontWeight: 700,
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              {contact.icon === "telegram" ? (
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M21.8 4.1 18.5 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L5.9 13.5 1 12c-1.1-.3-1.1-1.1.2-1.6L20.4 3c.9-.3 1.7.2 1.4 1.1Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <span aria-hidden="true" style={{ letterSpacing: "-0.08em" }}>
                  MAX
                </span>
              )}
            </a>
          ))}
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

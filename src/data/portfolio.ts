export type PortfolioItem = {
  title?: string;
  category: string;
  year: string;
  desc: string;
  bg: string;
  format: "16:9" | "9:16";
  videoSrc?: string;
};

export const portfolio: PortfolioItem[] = [
  {
    category: "Документальный фильм",
    year: "2026",
    desc: "История семейного бизнеса для эфира: съёмка, монтаж и пост-продакшен.",
    bg: "#1a1a1a",
    format: "16:9",
    videoSrc: new URL(
      "../assets/Семейное наследие. Батыр-Бройлер, для эфира (2).mp4",
      import.meta.url
    ).href,
  },
  {
    category: "Reel / Подкаст",
    year: "2025",
    desc: "Серия вертикальных нарезок из бизнес-подкаста для соцсетей.",
    bg: "#111",
    format: "9:16",
    videoSrc: new URL("../assets/podcast-short.mp4", import.meta.url).href,
  },
  {
    category: "Репортаж",
    year: "2026",
    desc: "Обзорный репортаж с международного форума: интервью, атмосфера и динамичный монтаж.",
    bg: "#FF3D00",
    format: "16:9",
    videoSrc: new URL(
      "../assets/ПМЭФ 2025 обзорный репортаж HD.mp4",
      import.meta.url
    ).href,
  },
  {
    category: "Тизер",
    year: "2025",
    desc: "Короткий промо-ролик для запуска проекта.",
    bg: "#0d0d0d",
    format: "16:9",
    videoSrc: new URL("../assets/Тизер.mp4", import.meta.url).href,
  },
];

import shots2Video from "../assets/shots-2-igor-zhilenko-tech.mp4?url";

export type PortfolioItem = {
  title?: string;
  category: string;
  year: string;
  desc: string;
  bg: string;
  format: "16:9" | "9:16";
  videoSrc?: string;
  playUrl?: string;
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Фильм о производстве «Батыр-Бройлер»",
    category: "Документальный фильм",
    year: "2026",
    desc: "Производственный фильм о семейном бизнесе: съёмка, монтаж и пост-продакшен.",
    bg: "#1a1a1a",
    format: "16:9",
    videoSrc: new URL(
      "../assets/Семейное наследие. Батыр-Бройлер, для эфира (2).mp4",
      import.meta.url
    ).href,
    playUrl:
      "https://drive.google.com/file/d/1kd2auKsbDB1yYx7qe-Znmk_JjyQUE2rc/view?usp=sharing",
  },
  {
    title: "Подкаст с Петром Самохиным",
    category: "Подкаст",
    year: "2025",
    desc: "Первый вице-президент по продажам компании «Сады Придонья».",
    bg: "#0d0d0d",
    format: "16:9",
    videoSrc: new URL("../assets/Тизер.mp4", import.meta.url).href,
  },
  {
    title: "Рилс: Игорь Жиленко",
    category: "Reels",
    year: "2025",
    desc: "Основатель «Экомобайл» — о том, как не отставать от технологий.",
    bg: "#111",
    format: "9:16",
    videoSrc: shots2Video,
    playUrl:
      "https://drive.google.com/file/d/1_NW4_2RlwB9LrCVnWW2AWI7o17JCYR7Q/view?usp=sharing",
  },
  {
    title: "ПМЭФ 2025: обзорный репортаж",
    category: "Репортаж",
    year: "2025",
    desc: "Интервью, атмосфера форума и динамичный монтаж ключевых событий.",
    bg: "#FF3D00",
    format: "16:9",
    videoSrc: new URL(
      "../assets/ПМЭФ 2025 обзорный репортаж HD.mp4",
      import.meta.url
    ).href,
    playUrl:
      "https://drive.google.com/file/d/1-KDWj8wn5cxznQMhk3cyz1QMers5A-WP/view?usp=sharing",
  },
  {
    title: "ПМЭФ 2024: интервью с Анной Цивилевой",
    category: "Интервью",
    year: "2024",
    desc: "Деловое интервью с форума в аккуратном репортажном формате.",
    bg: "#1a1a1a",
    format: "16:9",
    videoSrc: new URL(
      "../assets/ПМЭФ 2024. интервью Анна Цивилева.mp4",
      import.meta.url
    ).href,
    playUrl:
      "https://drive.google.com/file/d/1MbuFZbNxRfRB28M0aO6D1OdRXi576MrW/view?usp=sharing",
  },
  {
    title: "BRASS на выставке «Мебель 2024»",
    category: "Репортаж",
    year: "2024",
    desc: "Репортаж о компании BRASS и её стенде на отраслевой выставке.",
    bg: "#0d0d0d",
    format: "16:9",
    videoSrc: new URL(
      "../assets/Репортаж Мебель 2024 extended.mp4",
      import.meta.url
    ).href,
    playUrl:
      "https://drive.google.com/file/d/1xm0LQenijy8MX9upa6JyM13pSkg_jJCr/view?usp=sharing",
  },
];

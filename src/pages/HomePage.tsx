import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { PortfolioSection } from "../components/PortfolioSection";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <PortfolioSection />
      <Footer />
    </div>
  );
}

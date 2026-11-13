import CTAPortfolio from "./components/CTAPortfolio";
import FaqPortfolio from "./components/FaqPortfolio";
import PortfolioHero from "./components/HeroPortfolio";
import HeroPortfolio from "./components/HeroPortfolio";
import PortfolioGeral from "./components/PortfolioGeral";

import type { Metadata } from "next";
import PortfolioGrid from "./components/PortfolioGrid";
import PortfolioForm from "./components/CTAPortfolio";

export const metadata: Metadata = {
  title: "Portfólio de Sites",
  description:
    "Veja resultados de campanhas de tráfego pago e veja os sites, landing pages e sistemas desenvolvidos pelo Clintin dos Sites.",
};

export default function Portfolio() {
  return (
    <main>
      <PortfolioHero />

      <PortfolioGrid />

      <FaqPortfolio />

      <section className="mx-auto max-w-[1200px] px-5 py-16">
        <PortfolioForm />
      </section>
    </main>
  );
}

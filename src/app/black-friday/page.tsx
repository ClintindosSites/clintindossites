import CheckoutBlackFriday from "./components/checkout";
import FinalCTA from "./components/CtaBlackFriday";
import FaqBlackFriday from "./components/FaqBlackFriday";
import HeroBlackFriday from "./components/hero";
import PortfolioBlackFriday from "./components/portfolio";
import SobreBlackFriday from "./components/sobre";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Friday | Clintin dos Sites",
  description:
    "Aproveite a Black Friday do Clintin dos Sites! Até 50% de desconto em sites institucionais, landing pages, aplicativo mobile e lojas virtuais.",

  openGraph: {
    title: "Black Friday | Clintin dos Sites",
    description:
      "Seu negócio merece uma presença digital profissional. Aproveite condições especiais por tempo limitado!",
    url: "https://clintindossites.com.br/black-friday",
    siteName: "Clintin dos Sites",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-black-friday.webp",
        width: 1200,
        height: 630,
        alt: "Black Friday Clintin dos Sites - Até 50% de desconto",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Black Friday | Clintin dos Sites",
    description: "Até 50% de desconto em soluções digitais!",
    images: ["/og-black-friday.webp"],
  },
};

export default function BlackFriday() {
  return (
    <>
      <HeroBlackFriday />
      <SobreBlackFriday />
      <PortfolioBlackFriday />
      <CheckoutBlackFriday />
      <FaqBlackFriday />
      <FinalCTA />
    </>
  );
}

import CheckoutBlackFriday from "./components/checkout";
import FinalCTA from "./components/CtaBlackFriday";
import FaqBlackFriday from "./components/FaqBlackFriday";
import HeroBlackFriday from "./components/hero";
import PortfolioBlackFriday from "./components/portfolio";
import SobreBlackFriday from "./components/sobre";

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

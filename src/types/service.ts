export interface Service {
  slug: string;
  title: string;
  h1: string;
  description: string;
  image: string;
  keywords: string[];

  cta?: string;

  // Seção de dores
  painTitle?: string;
  painSubtitle?: string;
  pains?: PainItem[];

  // Seção de benefícios
  benefitsTitle?: string;
  benefitsSubtitle?: string;
  benefits?: BenefitItem[];

  // Seção de tecnologias
  techTitle?: string;
  techSubtitle?: string;
  technologies?: TechnologyItem[];

  // Seção de portfólio
  portfolioTitle?: string;
  portfolioSubtitle?: string;
  portfolio?: PortfolioSection[];

  checkoutTitle: string;
  checkoutSubtitile: string;

  pricingTitle?: string;
  pricingSubtitle?: string;
  pricing?: PricingCard[];

  objectionsTitle?: string;
  objectionsSubtitle?: string;
  objections?: ObjectionItem[];
}

export interface PainItem {
  titulo: string;
  descricao: string;
}

export interface BenefitItem {
  titulo: string;
  descricao: string;
}

export interface TechnologyItem {
  nome: string;
  descricao: string;
  image: string;
}

export interface PortfolioItem {
  titulo: string;
  img: string;
  link?: string;
  segmento?: string;
  tecnologias?: string[];
}

export interface PortfolioSection {
  titulo: string;
  itens: PortfolioItem[];
}
export interface PricingCard {
  titulo: string;
  preco: string;
  parcela?: string;
  descricao: string;
  destaque?: boolean;
  promocao?: boolean;
  itens: string[];
  cta: string;
  href?: string;
}

export interface ObjectionItem {
  pergunta: string;
  resposta: string;
}

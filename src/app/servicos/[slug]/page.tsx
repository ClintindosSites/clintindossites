import { notFound } from "next/navigation";
import { services } from "@/data/services";

import HeroServicos from "./components/HeroServicos";
import PortfolioServicos from "./components/PortfolioServicos";

import PricingServicos from "./components/PricingServicos";
import QuebraObjecoes from "./components/QuebraObjecoes";
import PaymentGuaranteeServicos from "./components/PaymentGuaranteeServicos";
import ResultsServicos from "./components/ResultServicos";
import ClientsServicos from "./components/ClientsServicos";
import FinalCtaServicos from "./components/FinalCta";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
export function generateStaticParams() {
  return Object.keys(services).map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return {};
  }

  return {
    title: `${service.seo.title} | Clintin dos Sites`,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: {
      canonical: `https://clintindossites.com.br/servicos/${slug}`,
    },
  };
}
export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <HeroServicos service={service} />

      <PortfolioServicos service={service} />

      <PricingServicos service={service} />
      <PaymentGuaranteeServicos />
      <ResultsServicos />
      <ClientsServicos service={service} />
      <QuebraObjecoes service={service} />
      <FinalCtaServicos service={service} />
    </>
  );
}

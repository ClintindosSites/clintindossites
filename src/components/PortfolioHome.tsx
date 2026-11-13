"use client";

import { useCallback, useState } from "react";
import Link from "next/link";

import PortfolioCard from "@/app/portfolio/components/PortfolioCard";
import PortfolioModal from "@/app/portfolio/components/PortfolioModal";

import {
  portfolioItems,
  PortfolioItem,
} from "../app/portfolio/components/portfolio-data";

const featuredIds = [
  "vidrosa",
  "bn-esquadrias",
  "hr-eletronicos",
  "lipo-training",
  "ceara-delivery",
  "linkcardflix",
];

const featuredProjects = featuredIds
  .map(id => portfolioItems.find(item => item.id === id))
  .filter((item): item is PortfolioItem => Boolean(item));

export default function PortfolioHome() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const closeModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <section id="portfolio" className="mx-auto max-w-[1200px] px-5 py-24">
      {/* CABEÇALHO */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b6cff]">
          Nosso portfólio
        </span>

        <h2 className="title-purple mt-4 text-3xl font-extrabold md:text-5xl">
          Projetos digitais que fazem a diferença
        </h2>

        <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg">
          Conheça alguns dos projetos desenvolvidos pela Clintin dos Sites para
          empresas e profissionais que desejam fortalecer sua presença digital.
        </p>
      </div>

      {/* PROJETOS EM DESTAQUE */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map(item => (
          <PortfolioCard
            key={item.id}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* BOTÃO PARA PORTFÓLIO COMPLETO */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/portfolio"
          className="cta-button inline-flex items-center gap-3"
        >
          Conhecer todos os projetos
          <span>→</span>
        </Link>
      </div>

      {/* MODAL */}
      <PortfolioModal item={selectedItem} onClose={closeModal} />
    </section>
  );
}

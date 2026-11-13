"use client";

import { useCallback, useMemo, useState } from "react";

import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";
import {
  portfolioItems,
  PortfolioCategory,
  PortfolioItem,
} from "./portfolio-data";

const filters: ("Todos" | PortfolioCategory)[] = [
  "Todos",
  "Sites institucionais",
  "Landing pages",
  "Aplicativos e delivery",
  "Gestão de tráfego",
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<"Todos" | PortfolioCategory>(
    "Todos"
  );

  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "Todos") {
      return portfolioItems;
    }

    return portfolioItems.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const closeModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <section id="portfolio" className="mx-auto max-w-[1200px] px-5 py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b6cff]">
          Nosso trabalho
        </span>

        <h2 className="title-purple mt-4 text-3xl font-extrabold md:text-5xl">
          Projetos que transformam ideias em experiências digitais
        </h2>

        <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg">
          Conheça alguns dos projetos desenvolvidos pela Clintin dos Sites para
          empresas, profissionais e negócios de diferentes segmentos.
        </p>
      </div>

      {/* FILTROS */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filters.map(filter => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "border-[#7f3dff] bg-[#7f3dff] text-white shadow-[0_0_20px_rgba(127,61,255,0.25)]"
                  : "border-white/10 bg-[#0b0b0f] text-zinc-400 hover:border-[#7f3dff]/60 hover:text-white"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* CONTADOR */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-zinc-500">
          {filteredItems.length} projetos encontrados
        </p>

        <span className="text-xs text-zinc-600">Clintin dos Sites</span>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map(item => (
          <PortfolioCard
            key={item.id}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* MODAL */}
      <PortfolioModal item={selectedItem} onClose={closeModal} />
    </section>
  );
}

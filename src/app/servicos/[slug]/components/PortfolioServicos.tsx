"use client";

import { useState } from "react";
import Image from "next/image";

import PortfolioModal from "./PortfolioModal";

import { PortfolioItem, Service } from "@/types/service";

interface PortfolioServicosProps {
  service: Service;
}

export default function PortfolioServicos({ service }: PortfolioServicosProps) {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  if (!service) {
    return null;
  }

  const rows = service.portfolio?.items ?? [];

  if (rows.length === 0) {
    return null;
  }

  return (
    <section
      id="portfolio"
      className="portfolio max-w-[1200px] m-auto py-[100px] px-5"
    >
      <div className="text">
        {" "}
        <h2 className="text-metal text-center text-4xl md:text-5xl font-extrabold">
          {service.portfolio?.title}
        </h2>
        <p className="text-[#bdbdbd] text-center mt-4 mb-12">
          {service.portfolio?.subtitle}
        </p>
      </div>
      <div
        className="
        portfolio-grid
        
    flex gap-[2rem] overflow-x-auto pb-4
    scrollbar-thin
    scrollbar-thumb-[rgba(127,61,255,0.4)]
  "
      >
        {rows.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelected(item)}
            className="
        group
        relative
        flex-[0_0_240px]
        sm:flex-[0_0_260px]
        md:flex-[0_0_280px]
        h-[380px]
        sm:h-[340px]
        md:h-[380px]
        rounded-[18px]
        border
        border-[rgba(127,61,255,0.25)]
        bg-[#0b0b0f]
        overflow-hidden
      "
          >
            <Image
              src={item.img}
              alt={item.titulo}
              fill
              className="
          object-top object-cover
          
          transition-transform
          duration-[6000ms]
          ease-linear
          group-hover:-translate-y-[55%]
        "
            />

            <div
              className="
          absolute inset-0
          bg-[linear-gradient(to_top,rgba(11,11,15,0.95),rgba(11,11,15,0.2))]
          flex flex-col items-center justify-end
          pb-5
          opacity-0
          transition
          duration-300
          group-hover:opacity-100
        "
            >
              <h4 className="font-bold text-lg text-[30px] ">{item.titulo}</h4>

              <span className="mt-2 text-sm text-purple-300 text-[30px]">
                Ver projeto →
              </span>
            </div>
          </button>
        ))}
      </div>
      <a href="/portfolio" className="cta-button">
        Ver portfolio completo
      </a>
      <PortfolioModal
        open={!!selected}
        item={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

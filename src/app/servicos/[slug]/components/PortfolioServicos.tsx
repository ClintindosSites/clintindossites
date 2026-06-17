"use client";

import { useState } from "react";
import Image from "next/image";

import PortfolioModal from "./PortfolioModal";

import { PortfolioItem, Service } from "@/types/service";

interface PortfolioServicosProps {
  service: Service;
}

export default function PortfolioServicos({ service }: PortfolioServicosProps) {
  if (!service) {
    return null;
  }
  const rows = service.portfolio ?? [];

  if (!rows.length) {
    return null;
  }
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="max-w-[1200px] m-auto py-[100px] px-5">
      <h2 className="text-metal text-center text-4xl md:text-5xl font-extrabold">
        {service.portfolioTitle}
      </h2>

      <p className="text-[#bdbdbd] text-center mt-4 mb-12">
        {service.portfolioSubtitle}
      </p>

      {rows.map((row, i) => (
        <div key={i} className="mb-[60px]">
          <h3 className="mb-[1.3rem] text-xl font-semibold">{row.titulo}</h3>

          <div
            className="
              flex gap-4 overflow-x-auto pb-4
              scrollbar-thin
              scrollbar-thumb-[rgba(127,61,255,0.4)]
            "
          >
            {row.itens.map((item, index) => (
              <button
                key={`${row.titulo}-${index}`}
                type="button"
                onClick={() => setSelected(item)}
                className="
                  group
                  relative
                  flex-[0_0_240px]
                  sm:flex-[0_0_260px]
                  md:flex-[0_0_280px]
                  h-[320px]
                  sm:h-[340px]
                  md:h-[380px]
                  rounded-[18px]
                  border border-[rgba(127,61,255,0.25)]
                  bg-[#0b0b0f]
                  overflow-hidden
                "
              >
                <Image
                  src={item.img}
                  alt={item.titulo}
                  fill
                  className="
                    object-cover
                    min-h-[120%]
                    transition-transform
                    duration-[6000ms]
                    ease-linear
                    group-hover:-translate-y-[40%]
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
                  <h4 className="font-bold text-lg">{item.titulo}</h4>

                  <span className="mt-2 text-sm text-purple-300">
                    Ver projeto →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      <PortfolioModal
        open={!!selected}
        item={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

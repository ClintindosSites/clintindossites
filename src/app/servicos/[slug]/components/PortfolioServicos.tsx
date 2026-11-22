"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import PortfolioModal from "./PortfolioModal";
import { PortfolioItem, Service } from "@/types/service";

interface PortfolioServicosProps {
  service: Service;
}

export default function PortfolioServicos({ service }: PortfolioServicosProps) {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects = service.portfolio?.items ?? [];

  if (projects.length === 0) return null;

  function moveCarousel(direction: number) {
    const container = carouselRef.current;
    if (!container) return;

    const card = container.firstElementChild as HTMLElement | null;
    if (!card) return;

    const gap = parseFloat(window.getComputedStyle(container).columnGap) || 16;

    container.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  }

  return (
    <section
      id="portfolio"
      className="relative w-full min-w-0 overflow-hidden bg-[#09070f] py-14 md:py-24"
    >
      <div className="mx-auto w-full min-w-0 max-w-300 px-4 sm:px-6">
        {/* CABEÇALHO */}
        <header className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Nosso portfólio
          </span>

          <h2 className="mt-5 text-2xl font-bold leading-tight wrap-break-word text-white sm:text-3xl md:text-5xl">
            {service.portfolio?.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            {service.portfolio?.subtitle}
          </p>
        </header>

        {/* CARROSSEL */}
        <div
          ref={carouselRef}
          className="
            flex w-full min-w-0
            snap-x snap-mandatory
            gap-4 overflow-x-auto
            overscroll-x-contain
            scroll-smooth pb-4
            touch-pan-x
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            md:gap-6
          "
        >
          {projects.map((project, index) => (
            <article
              key={`${project.titulo}-${index}`}
              className="
                group flex min-w-0
                w-[calc(100%-32px)]
                shrink-0 snap-start
                flex-col overflow-hidden
                rounded-2xl border border-white/10
                bg-[#15121e]
                transition-colors duration-300
                hover:border-purple-500/60

                sm:w-[calc((100%-24px)/2)]
                lg:w-[calc((100%-48px)/3)]
              "
            >
              {/* IMAGEM */}
              <button
                type="button"
                onClick={() => setSelected(project)}
                aria-label={`Ver detalhes de ${project.titulo}`}
                className="relative block aspect-16/10 w-full shrink-0 overflow-hidden bg-[#20192c] text-left"
              >
                <Image
                  src={project.img}
                  alt={`Prévia do projeto ${project.titulo}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 48vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                {project.segmento && (
                  <span className="absolute left-3 top-3 max-w-[80%] truncate rounded-full border border-purple-400/30 bg-black/70 px-3 py-1.5 text-[11px] font-semibold text-purple-300 backdrop-blur-md">
                    {project.segmento}
                  </span>
                )}

                <span className="absolute bottom-3 right-3 rounded-full bg-purple-600 px-3 py-2 text-xs font-semibold text-white cursor-pointer">
                  Ver detalhes ↗
                </span>
              </button>

              {/* INFORMAÇÕES */}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="line-clamp-2 text-base font-bold leading-snug text-white sm:text-lg">
                  {project.titulo}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-400">
                  {project.descricao ||
                    `Conheça o projeto desenvolvido para ${
                      project.cliente || project.titulo
                    }.`}
                </p>

                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="mt-auto inline-flex items-center gap-2 self-start pt-4 text-sm font-semibold text-purple-400 transition-colors hover:text-purple-300 cursor-pointer"
                >
                  Conhecer projeto
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* NAVEGAÇÃO */}
        {projects.length > 1 && (
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              aria-label="Projetos anteriores"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-purple-500 hover:bg-purple-600"
            >
              <ArrowLeft size={19} />
            </button>

            <span className="text-xs text-gray-500 md:hidden">
              Deslize para explorar
            </span>

            <button
              type="button"
              onClick={() => moveCarousel(1)}
              aria-label="Próximos projetos"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 text-white transition-colors hover:bg-purple-500"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        )}

        {/* CTA FINAL */}
        <div className="mx-auto mt-12 max-w-2xl px-1 text-center md:mt-16">
          <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
            Seu projeto pode ser o próximo!
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
            Transforme sua ideia em uma solução digital profissional,
            desenvolvida especialmente para o seu negócio.
          </p>

          <Link
            href="#checkout"
            className="mt-6 inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#4b1fb8] via-[#7f3dff] to-[#9b6cff] px-5 py-4 text-center text-sm font-bold uppercase leading-snug text-white transition-transform duration-300 hover:scale-[1.02] sm:w-auto sm:max-w-none sm:px-8"
          >
            Quero um projeto profissional
            <ArrowUpRight size={18} className="shrink-0" />
          </Link>

          <div className="mt-5">
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-purple-400 transition-colors hover:text-purple-300"
            >
              Ver portfólio completo →
            </Link>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <PortfolioModal
        open={selected !== null}
        item={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

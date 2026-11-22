"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const projects = [
  {
    title: "Projeto Institucional",
    category: "Site institucional",
    description: "Apresentação profissional de empresa e serviços.",
    image: "/assets/images/vidrosa-site.webp",
    url: "https://turnone.com.br",
  },
  {
    title: "Projeto Landing Page",
    category: "Landing page",
    description: "Página estratégica para captação de clientes.",
    image: "/assets/images/turnone.webp",
    url: "https://turnone.com.br",
  },
  {
    title: "Projeto E-commerce",
    category: "Loja virtual",
    description: "Loja virtual com apresentação de produtos.",
    image: "/assets/images/iluminado-cafe.webp",
    url: "https://iluminadocafe-two.vercel.app/iluminado-cafe/",
  },
  {
    title: "Aplicativo Mobile",
    category: "Desenvolvimento Aplicativo",
    description: "Desenvolvimento de aplicativos mobile",
    image: "/assets/images/cearaburugeracai-app.webp",
    url: "https://cearacaiburguer.com.br",
  },
];

export default function PortfolioBlackFriday() {
  const carouselRef = useRef<HTMLDivElement>(null);

  function moveCarousel(direction: number) {
    const container = carouselRef.current;

    if (!container) return;

    const card = container.firstElementChild as HTMLElement | null;

    if (!card) return;

    const gap = 24;

    container.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  }

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#09070f] py-24 px-5"
    >
      <div className="max-w-300 mx-auto">
        <div className="w-full max-w-3xl mx-auto px-2 sm:px-4 text-center mb-10 md:mb-14">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
            Nosso portfólio
          </span>

          <h2 className="w-full text-2xl sm:text-3xl md:text-5xl font-bold text-white mt-5 md:mt-6 leading-tight whitespace-normal wrap-break-word">
            Projetos que levam{" "}
            <span className="title-purple whitespace-normal">
              negócios mais longe.
            </span>
          </h2>

          <p className="w-full max-w-2xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg mt-4 md:mt-5 leading-relaxed">
            Conheça alguns dos projetos desenvolvidos pelo Clintin dos Sites.
            Soluções digitais criadas para apresentar empresas, conquistar
            clientes e fortalecer marcas na internet.
          </p>
        </div>

        {/* CARROSSEL */}
        <div
          ref={carouselRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-7 items-stretch justify-center  overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 scrollbar-hide"
        >
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative min-w-[45%] sm:min-w-[40%] lg:min-w-[calc((100%-3rem)/3)] snap-start overflow-hidden rounded-2xl border border-white/10 bg-[#15121e] transition-all duration-300 hover:border-purple-500/60"
            >
              {/* IMAGEM DO PROJETO */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${project.title}`}
                className="block relative aspect-4/3 overflow-hidden bg-[#20192c]"
              >
                <Image
                  src={project.image}
                  alt={`Preview do projeto ${project.title}`}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-70" />

                <span className="absolute top-4 left-4 rounded-full border border-purple-400/30 bg-black/70 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-purple-300">
                  {project.category}
                </span>

                <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-xs font-bold text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Visitar projeto
                  <span>↗</span>
                </span>
              </a>

              {/* INFORMAÇÕES */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Conhecer projeto
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* NAVEGAÇÃO */}
        {/*
        <div className="flex justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            aria-label="Projetos anteriores"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-purple-600 hover:border-purple-500 transition-all"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => moveCarousel(1)}
            aria-label="Próximos projetos"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/20"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
    */}

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Seu projeto pode ser o próximo!
          </h3>

          <p className="text-gray-400 mb-7">
            Aproveite a Black Friday e tenha um site profissional desenvolvido
            especialmente para o seu negócio.
          </p>

          <Link
            href="#checkout-blackfriday"
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#4b1fb8] via-[#7f3dff] to-[#9b6cff] px-8 py-4 font-bold text-white uppercase transition-transform hover:scale-105"
          >
            Quero meu site com desconto
          </Link>
        </div>
      </div>
    </section>
  );
}

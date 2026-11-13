"use client";

import Image from "next/image";
import { useEffect } from "react";
import { PortfolioItem } from "./portfolio-data";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onMouseDown={event => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-modal-title"
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[#7f3dff]/30 bg-[#0d0b12] shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar apresentação"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-xl text-white backdrop-blur transition hover:bg-[#7f3dff]"
        >
          ×
        </button>

        <div className="relative aspect-video w-full bg-[#15121d]">
          <Image
            src={item.image}
            alt={`Projeto ${item.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-contain"
            priority
          />
        </div>

        <div className="p-6 md:p-9">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
            {item.category}
          </span>

          <h2
            id="portfolio-modal-title"
            className="mt-3 text-2xl font-bold text-white md:text-4xl"
          >
            {item.title}
          </h2>

          <p className="mt-2 text-sm text-zinc-500">{item.segment}</p>

          <div className="my-7 h-px bg-white/10" />

          <h3 className="text-lg font-semibold text-white">Sobre o projeto</h3>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
            {item.description}
          </p>

          <h3 className="mt-7 text-lg font-semibold text-white">
            Serviços realizados
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.services.map(service => (
              <span
                key={service}
                className="rounded-full border border-[#7f3dff]/30 bg-[#7f3dff]/10 px-4 py-2 text-xs font-medium text-[#c4b5fd]"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex items-center justify-center gap-2"
              >
                Visitar site ↗
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:border-[#7f3dff] hover:bg-[#7f3dff]/10"
            >
              Voltar aos projetos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { reportConversion } from "@/lib/tracking";
import { PortfolioItem } from "@/types/service";

interface PortfolioModalProps {
  open: boolean;
  onClose: () => void;
  item: PortfolioItem | null;
}

export default function PortfolioModal({
  open,
  onClose,
  item,
}: PortfolioModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open || !item) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    window.fbq?.("trackCustom", "ViewPortfolio", {
      project: item.titulo,
    });

    window.dataLayer?.push({
      event: "view_portfolio",
      project: item.titulo,
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [open, item, onClose]);

  if (!open || !item) return null;

  const whatsapp =
    "https://wa.me/5531984362710?text=" +
    encodeURIComponent(
      `Olá, vi o projeto "${item.titulo}" no seu portfólio e gostaria de solicitar um orçamento.`
    );

  const handleVisit = () => {
    window.fbq?.("trackCustom", "VisitPortfolio", {
      project: item.titulo,
    });

    window.dataLayer?.push({
      event: "visit_portfolio",
      project: item.titulo,
    });
  };

  const handleClose = () => {
    window.dataLayer?.push({
      event: "close_portfolio",
      project: item.titulo,
    });

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={event => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-modal-title"
        className="flex max-h-[95dvh] w-full max-w-275 flex-col overflow-hidden rounded-2xl border border-purple-500/30 bg-[#100d18] shadow-[0_0_70px_rgba(127,61,255,0.18)]"
      >
        {/* CABEÇALHO */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7">
          <div className="min-w-0">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
              Projeto desenvolvido
            </span>

            <h2
              id="portfolio-modal-title"
              className="mt-1 truncate text-xl font-bold text-white sm:text-2xl"
            >
              {item.titulo}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            aria-label="Fechar detalhes do projeto"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition-colors hover:border-purple-500 hover:bg-purple-600"
          >
            ✕
          </button>
        </div>

        {/* CONTEÚDO COM ROLAGEM */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="p-4 sm:p-7">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#20192c]">
              <Image
                src={item.img}
                alt={`Visualização do projeto ${item.titulo}`}
                width={1400}
                height={4000}
                sizes="(max-width: 1100px) 100vw, 1050px"
                className="h-auto w-full"
              />
            </div>

            <div className="mt-8 grid gap-7 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-bold text-white">
                  Sobre o projeto
                </h3>

                <p className="leading-relaxed text-gray-400">
                  {item.descricao ||
                    `Conheça o projeto desenvolvido para ${item.cliente || item.titulo}.`}
                </p>

                {item.cliente && (
                  <p className="mt-4 text-sm text-gray-400">
                    <strong className="text-white">Cliente:</strong>{" "}
                    {item.cliente}
                  </p>
                )}

                {item.segmento && (
                  <p className="mt-2 text-sm text-gray-400">
                    <strong className="text-white">Segmento:</strong>{" "}
                    {item.segmento}
                  </p>
                )}
              </div>

              {Boolean(item.tecnologias?.length) && (
                <div>
                  <h3 className="mb-4 text-lg font-bold text-white">
                    Tecnologias utilizadas
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {item.tecnologias?.map(technology => (
                      <span
                        key={technology}
                        className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RODAPÉ */}
        <div className="flex shrink-0 flex-wrap items-center justify-center gap-3 border-t border-white/10 bg-[#0b0911] p-4 sm:p-5">
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleVisit}
              className="inline-flex items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-purple-300 transition-colors hover:bg-purple-500/20"
            >
              Visitar projeto ↗
            </a>
          )}

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={event => {
              event.preventDefault();

              reportConversion({
                url: whatsapp,
                origin: "Portfolio Modal",
                service: item.titulo,
                value: 1,
              });
            }}
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#4b1fb8] via-[#7f3dff] to-[#9b6cff] px-7 py-3 text-sm font-bold uppercase text-white transition-transform hover:scale-105"
          >
            Solicitar orçamento
          </a>

          <button
            type="button"
            onClick={handleClose}
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

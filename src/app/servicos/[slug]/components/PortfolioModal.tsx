"use client";

import { useEffect } from "react";
import { reportConversion } from "@/lib/tracking";
import Image from "next/image";

interface PortfolioModalProps {
  open: boolean;
  onClose: () => void;
  item: {
    titulo: string;
    img: string;
    link?: string;
  } | null;
}

export default function PortfolioModal({
  open,
  onClose,
  item,
}: PortfolioModalProps) {
  useEffect(() => {
    if (!open || !item) return;

    window.fbq?.("trackCustom", "ViewPortfolio", {
      project: item.titulo,
    });

    window.dataLayer?.push({
      event: "view_portfolio",
      project: item.titulo,
    });
  }, [open, item]);
  if (!open || !item) return null;

  const whatsapp =
    "https://wa.me/5531984362710?text=" +
    encodeURIComponent(
      `Olá, vi o projeto "${item.titulo}" no seu portfólio e gostaria de solicitar um orçamento.`
    );

  return (
    <div
      className="
      fixed inset-0 z-[999]
      bg-black/90
      flex flex-col
      "
    >
      {/* FECHAR */}
      <button
        onClick={onClose}
        className="
        absolute top-5 right-5
        text-3xl text-white
        "
      >
        ✕
      </button>

      {/* IMAGEM */}
      <div
        className="
        flex-1 overflow-y-auto
        p-6
        flex justify-center
        "
      >
        <div className="relative w-full max-w-[1200px]">
          <Image
            src={item.img}
            alt={item.titulo}
            width={1400}
            height={4000}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="
        border-t border-white/10
        p-5
        flex flex-wrap
        gap-4
        justify-center
        bg-[#0b0b0f]
        "
      >
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.fbq?.("trackCustom", "VisitPortfolio", {
                project: item.titulo,
              });

              window.dataLayer?.push({
                event: "visit_portfolio",
                project: item.titulo,
              });
            }}
          >
            🌐 Visitar Projeto
          </a>
        )}

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          onClick={e => {
            e.preventDefault();

            reportConversion({
              url: whatsapp,
              origin: "Portfolio Modal",
              service: item.titulo,
              value: 1,
            });
          }}
        >
          💬 Solicitar Orçamento
        </a>

        <button
          onClick={() => {
            window.dataLayer?.push({
              event: "close_portfolio",
            });

            onClose();
          }}
          className="
          px-6 py-3 rounded-full
          border border-white/20
          "
        >
          Voltar
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { Service } from "@/types/service";

interface ObjectionsProps {
  service: Service;
}

export default function QuebraObjecoes({ service }: ObjectionsProps) {
  const objections = service.faq?.items ?? [];

  const [open, setOpen] = useState<number | null>(0);

  if (objections.length === 0) return null;

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#09070f] px-5 py-14 md:py-24"
    >
      {/* EFEITO DE FUNDO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-112.5 w-112.5 rounded-full bg-purple-700/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-225">
        {/* CABEÇALHO */}
        <header className="mx-auto mb-9 max-w-3xl text-center md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-400 sm:text-sm">
            <HelpCircle size={16} />
            Perguntas frequentes
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
            {service.faq?.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-lg">
            {service.faq?.subtitle}
          </p>
        </header>

        {/* PERGUNTAS */}
        <div className="flex flex-col gap-3 md:gap-4">
          {objections.map((item, index) => {
            const isOpen = open === index;

            return (
              <article
                key={`${item.pergunta}-${index}`}
                className={`
                  overflow-hidden rounded-2xl border
                  transition-all duration-300
                  ${
                    isOpen
                      ? "border-purple-500/50 bg-[#191126] shadow-[0_8px_30px_rgba(127,61,255,0.1)]"
                      : "border-white/10 bg-[#15121e] hover:border-purple-500/30"
                  }
                `}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span
                      className={`
                        text-base font-semibold leading-snug
                        transition-colors duration-300
                        md:text-lg
                        ${isOpen ? "text-purple-300" : "text-white"}
                      `}
                    >
                      {item.pergunta}
                    </span>

                    <span
                      className={`
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-full border
                        transition-all duration-300
                        ${
                          isOpen
                            ? "rotate-180 border-purple-500 bg-purple-600 text-white"
                            : "border-white/10 bg-white/5 text-purple-400"
                        }
                      `}
                    >
                      <ChevronDown size={19} />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div id={`faq-answer-${index}`} className="px-5 pb-6 sm:px-6">
                    <div className="mb-5 h-px w-full bg-white/10" />

                    <p className="whitespace-pre-line text-sm leading-7 text-gray-300 md:text-base">
                      {item.resposta}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* CTA DISCRETO */}
        <div className="mt-12 text-center">
          <p className="mb-5 text-sm text-gray-400 md:text-base">
            Ainda ficou alguma dúvida sobre o seu projeto?
          </p>

          <a
            href={`https://wa.me/5531984362710?text=${encodeURIComponent(
              `Olá! Tenho algumas dúvidas sobre o serviço de ${service.slug} e gostaria de conversar.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-purple-500/40 bg-purple-500/10 px-7 py-3.5 text-sm font-semibold text-purple-300 transition-all duration-300 hover:border-purple-500 hover:bg-purple-600 hover:text-white"
          >
            <MessageCircle size={19} />
            Tirar dúvidas pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

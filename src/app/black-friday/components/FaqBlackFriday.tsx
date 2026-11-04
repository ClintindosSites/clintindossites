"use client";

import { useState } from "react";

const questions = [
  {
    question: "Como funciona a Black Friday do Clintin dos Sites?",
    answer:
      "Durante nossa campanha, você pode contratar serviços de desenvolvimento de sites e aplicativos com condições comerciais especiais. Escolha a solução desejada e fale conosco pelo WhatsApp.",
  },
  {
    question: "Os sites são personalizados?",
    answer:
      "Sim! Cada projeto é desenvolvido de acordo com a identidade visual, os objetivos e as necessidades da sua empresa.",
  },
  {
    question: "Os sites funcionam em celulares e computadores?",
    answer:
      "Sim. Todos os sites são desenvolvidos com layout responsivo, adaptando-se a celulares, tablets e computadores.",
  },
  {
    question: "Quanto tempo demora para desenvolver meu site?",
    answer:
      "O prazo depende do tipo de projeto, da complexidade e do envio dos materiais necessários. O cronograma será informado durante a contratação.",
  },
  {
    question: "O domínio e a hospedagem estão inclusos?",
    answer:
      "Esses itens dependem do pacote contratado. As condições de domínio, hospedagem e eventuais custos recorrentes serão informadas antes da contratação.",
  },
  {
    question: "Posso solicitar alterações durante o desenvolvimento?",
    answer:
      "Sim. Cada projeto possui etapas de aprovação e condições de revisão previamente alinhadas durante a contratação.",
  },
  {
    question: "Vocês desenvolvem aplicativos para Android e iOS?",
    answer:
      "Sim! Desenvolvemos aplicativos personalizados para Android e iOS. Como cada projeto possui funcionalidades específicas, trabalhamos com orçamento personalizado.",
  },
  {
    question: "Como faço para aproveitar a promoção?",
    answer:
      "Escolha o serviço desejado na seção de ofertas e clique no botão correspondente. Você será direcionado ao nosso WhatsApp para conversar com nossa equipe.",
  },
];

export default function FaqBlackFriday() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#0d0a14] px-5 py-24"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-purple-700/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* CABEÇALHO */}
        <header className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-purple-400">
            Dúvidas frequentes
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-6">
            Ainda tem alguma <span className="title-purple">dúvida?</span>
          </h2>

          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Reunimos as principais informações para ajudar você a escolher a
            melhor solução para seu negócio.
          </p>
        </header>

        {/* PERGUNTAS */}
        <div className="flex flex-col gap-3">
          {questions.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-purple-500/50 bg-purple-500/[0.06]"
                    : "border-white/10 bg-white/[0.02] hover:border-purple-500/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="text-base md:text-lg font-semibold text-white">
                    {item.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-purple-600 text-white rotate-180"
                        : "bg-white/5 text-purple-400"
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-6 text-sm md:text-base leading-relaxed text-gray-400">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

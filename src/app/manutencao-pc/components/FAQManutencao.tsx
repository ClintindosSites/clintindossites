"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQManutencao() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const perguntas = [
    {
      pergunta: "Vocês buscam o computador ou notebook no local?",
      resposta:
        "Sim. Realizamos coleta e entrega em Belo Horizonte e Contagem para trazer mais comodidade e segurança para você.",
    },
    {
      pergunta: "O orçamento é gratuito?",
      resposta:
        "Sim. Você pode entrar em contato pelo WhatsApp e explicar o problema para receber uma análise inicial e orçamento sem compromisso.",
    },
    {
      pergunta: "Quanto tempo demora o conserto?",
      resposta:
        "O prazo varia conforme o problema identificado. Serviços simples podem ser finalizados no mesmo dia.",
    },
    {
      pergunta: "Vocês fazem formatação e remoção de vírus?",
      resposta:
        "Sim. Trabalhamos com formatação profissional, otimização do sistema, instalação de programas e remoção completa de vírus e ameaças.",
    },
    {
      pergunta: "Meu notebook está lento, vale a pena fazer upgrade?",
      resposta:
        "Na maioria dos casos sim. Upgrade de SSD e memória RAM costuma deixar notebooks e computadores muito mais rápidos e responsivos.",
    },
    {
      pergunta: "Quais formas de pagamento são aceitas?",
      resposta:
        "Aceitamos Pix, dinheiro e cartão de crédito. Consulte as condições de parcelamento no atendimento.",
    },
    {
      pergunta: "Vocês possuem garantia?",
      resposta:
        "Sim. Trabalhamos com garantia nos serviços realizados para oferecer mais segurança e confiança aos clientes.",
    },
    {
      pergunta: "Posso levar o computador até vocês?",
      resposta:
        "Sim. Caso prefira, você também pode trazer o equipamento diretamente para atendimento presencial.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6" id="faq">
      <div className="max-w-[1000px] mx-auto">
        <div
          className="
            glassContainer
            relative overflow-hidden
            rounded-[30px]
            p-[25px] md:p-[40px]
          "
        >
          {/* GLOW */}
          <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] rounded-full bg-purple-600/20 blur-[120px]" />

          <div className="relative z-10">
            {/* HEADER */}
            <div className="text-center my-[22px] flex flex-col gap-[10px]">
              <span className="inline-block text-sm font-semibold text-purple-400 mb-4 uppercase tracking-[2px]">
                Perguntas Frequentes
              </span>

              <h2>Tire suas dúvidas</h2>

              <p className="text-[#cfcfcf] text-[17px] leading-relaxed max-w-[700px] mx-auto">
                Veja as principais dúvidas sobre manutenção de computadores,
                notebooks, formatação, upgrades e atendimento.
              </p>
            </div>

            {/* FAQ */}
            <div className="flex flex-col gap-[30px]">
              {perguntas.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="
                      stepCard
                      overflow-hidden
                      rounded-[22px] gap-[20px] flex flex-col
                    "
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="
                        w-full
                        flex items-center justify-between
                        text-left
                        p-6
                        gap-5 px-[20px] py-[20px]
                      "
                    >
                      <h3 className="text-white font-semibold text-[18px] md:text-[20px] leading-relaxed">
                        {item.pergunta}
                      </h3>

                      <div
                        className={`
                          min-w-[45px]
                          min-h-[45px]
                          rounded-full
                          flex items-center justify-center
                          border border-purple-500/20
                          bg-purple-500/10
                          transition duration-300
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      >
                        <ChevronDown size={20} className="text-purple-300" />
                      </div>
                    </button>

                    <div
                      className={`
                        grid transition-all duration-500 ease-in-out
                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="px-[20px] py-[20px] text-[#cfcfcf] leading-relaxed text-[15px] md:text-[16px]">
                          {item.resposta}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex justify-center my-[20px]">
              <a
                href="https://wa.me/5538991369873?text=Olá,%20tenho%20algumas%20dúvidas%20sobre%20manutenção%20de%20computadores."
                target="_blank"
                className="cta-button"
              >
                Tirar dúvidas no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

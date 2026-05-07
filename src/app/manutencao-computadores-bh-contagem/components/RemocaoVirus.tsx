"use client";

import Link from "next/link";

import { reportConversion } from "@/lib/tracking";

import "swiper/css";
import "swiper/css/pagination";

export default function RemocaoVirus() {
  const servicos = [
    "Remoção completa de vírus e malwares",
    "Limpeza de arquivos suspeitos",
    "Otimização do sistema",
    "Proteção contra ameaças futuras",
    "Verificação de segurança",
    "Instalação de antivírus e proteção",
  ];

  const mensagem =
    "Olá, acredito que meu computador/notebook esteja com vírus ou malware. Gostaria de solicitar uma análise e orçamento para remoção de vírus.";

  const whatsappUrl = `https://wa.me/5538991369873?text=${encodeURIComponent(
    mensagem
  )}`;

  return (
    <section className="py-24 px-6" id="remocaoVirus">
      <div className="max-w-[1100px] mx-auto py-24 px-6">
        <div
          className="
            relative overflow-hidden
            rounded-[30px]
            border border-[rgba(127,61,255,0.25)]
            bg-[linear-gradient(180deg,rgba(18,18,26,0.95),rgba(8,8,12,0.98))]
            p-[25px] md:p-[10px]
            shadow-[0_0_50px_rgba(127,61,255,0.15)]
          "
        >
          {/* EFEITO DE FUNDO */}
          <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] rounded-full bg-purple-600/20 blur-[120px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* TEXTO */}
            <div>
              <div className="flex flex-col gap-[10px] my-[20px]">
                <span className="inline-block text-sm font-semibold text-purple-400 mb-4 uppercase tracking-[2px]">
                  Remoção de Vírus Avançada
                </span>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                  Seu computador está lento ou com vírus?
                </h2>

                <p className="text-[#cfcfcf] text-[17px] leading-relaxed mb-8">
                  Eliminamos vírus, malwares e ameaças que deixam seu computador
                  lento, travando ou inseguro. Proteja seus arquivos e volte a
                  usar seu computador com segurança e desempenho.
                </p>
              </div>

              {/* LISTA */}
              <div className="flex justify-between mb-10 infoService">
                <div className="grid grid-columns gap-[10px]">
                  {servicos.map((item, index) => (
                    <div
                      key={index}
                      className="
                        flex items-center gap-3
                        bg-white/[0.03]
                        border border-white/5
                        rounded-[10px]
                        max-w-[400px]
                        min-w-[280px]
                        px-[20px] py-[20px]
                        listaService
                      "
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-500" />

                      <p className="text-[#e5e5e5] text-[15px]">{item}</p>
                    </div>
                  ))}
                </div>

                {/* IMAGEM */}
                <div className="relative">
                  <div
                    className="
                      absolute inset-0
                      bg-purple-600/20
                      blur-[80px]
                      rounded-full
                    "
                  />

                  <img
                    src="/assets/remocao-virus.webp"
                    alt="Remoção de vírus de computador e notebook"
                    className="
                      relative z-10
                      w-full
                      h-[300px]
                      rounded-[24px]
                      border border-white/10
                      shadow-[0_0_40px_rgba(0,0,0,0.45)]
                      imgService
                    "
                  />

                  {/* PREÇO */}
                  <div className="priceManutencao">
                    <p>Remoção de Vírus a partir de:</p>

                    <span>R$139,90</span>

                    <p>Entrega no mesmo dia</p>
                  </div>

                  {/* CTA */}
                  <Link
                    className="cta-button mx-auto my-[30px]"
                    target="_blank"
                    href={whatsappUrl}
                    onClick={() => reportConversion("Remoção de Vírus")}
                  >
                    Clique e solicite orçamento no WhatsApp
                  </Link>
                </div>
              </div>

              {/* BENEFÍCIOS */}
              <div className="flex flex-wrap gap-3 mb-10 justify-center p-[20px] gap-[1rem] infoBenefit">
                <span className="px-[20px] py-[10px] items-center rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  🛡️ Mais segurança 🛡️
                </span>

                <span className="px-[20px] py-[10px] items-center rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  ⚡ Melhor desempenho ⚡
                </span>

                <span className="px-[20px] py-[10px] items-center rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  🔒 Proteção dos arquivos 🔒
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

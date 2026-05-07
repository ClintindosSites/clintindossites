"use client";

import Link from "next/link";
import { reportConversion } from "@/lib/gtag";

export default function LocalizacaoAtendimento() {
  const infos = [
    "Atendimento em Belo Horizonte e Contagem",
    "Buscamos e entregamos seu computador ou notebook",
    "Atendimento rápido e especializado",
    "Também aceitamos atendimento presencial",
    "Suporte para computadores e notebooks",
    "Orçamento rápido pelo WhatsApp",
  ];

  const handleWhatsappClick = () => {
    // Google Ads
    reportConversion();

    // Google Analytics
    window.gtag?.("event", "click_whatsapp_localizacao", {
      event_category: "WhatsApp",
      event_label: "Localizacao Atendimento",
      value: 1,
    });

    // Meta Pixel
    window.fbq?.("track", "Contact", {
      content_name: "Localizacao Atendimento",
      content_category: "Manutencao Computador",
    });
  };

  return (
    <section className="py-24 px-6" id="localizacao">
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
              <div className="flex flex-col justify-center text-center gap-[10px] my-[20px] max-w-[850px] mx-auto">
                <span className="inline-block text-sm font-semibold text-purple-400 mb-4 uppercase tracking-[2px]">
                  Área de Atendimento
                </span>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                  Atendimento em Belo Horizonte e Contagem
                </h2>

                <p className="text-[#cfcfcf] text-[17px] leading-relaxed mb-8">
                  Realizamos manutenção em computadores e notebooks com
                  atendimento rápido e suporte especializado. Para sua
                  comodidade, buscamos o equipamento no local e entregamos
                  pronto para uso.
                </p>
              </div>

              {/* LISTA */}
              <div className="flex justify-center mb-10 infoService">
                <div className="grid grid-columns gap-[10px]">
                  {infos.map((item, index) => (
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

                {/* MAPA */}
                <div className="relative">
                  <div
                    className="
                      absolute inset-0
                      bg-purple-600/20
                      blur-[80px]
                      rounded-full
                    "
                  />

                  <iframe
                    src="https://www.google.com/maps?q=Rua+Flor+de+Alecrim+41+Belo+Horizonte&output=embed"
                    className="
                      relative z-10
                      w-full
                      h-[400px]
                      rounded-[24px]
                      border border-white/10
                      shadow-[0_0_40px_rgba(0,0,0,0.45)]
                      imgService
                    "
                    loading="lazy"
                  />

                  {/* CTA */}
                  <Link
                    className="cta-button mx-auto my-[30px]"
                    target="_blank"
                    onClick={handleWhatsappClick}
                    href="https://wa.me/5538991369873?text=Olá,%20gostaria%20de%20solicitar%20um%20atendimento%20para%20manutenção%20de%20computador%20ou%20notebook.%20Gostaria%20de%20mais%20informações."
                  >
                    Solicitar atendimento no WhatsApp
                  </Link>
                </div>
              </div>

              {/* BENEFÍCIOS */}
              <div className="flex flex-wrap gap-3 mb-10 justify-center p-[20px] gap-[1rem] infoBenefit">
                <span className="px-[20px] py-[10px] items-center rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  🚗 Buscamos no local 🚗
                </span>

                <span className="px-[20px] py-[10px] items-center rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  ⚡ Frete Grátis em BH e Contagem ⚡
                </span>

                <span className="px-[20px] py-[10px] items-center rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  🛡️ Suporte especializado 🛡️
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

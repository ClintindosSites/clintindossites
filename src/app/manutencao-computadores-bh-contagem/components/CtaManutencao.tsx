"use client";

import Link from "next/link";
import { reportConversion } from "@/lib/gtag";

export default function CtaFinalManutencao() {
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de solicitar um orçamento para manutenção do meu computador ou notebook."
  );

  const whatsappUrl = `https://wa.me/5538991369873?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    // GOOGLE ADS
    reportConversion();

    // GOOGLE ANALYTICS
    window.gtag?.("event", "click_whatsapp_cta_final", {
      event_category: "WhatsApp",
      event_label: "CTA Final Manutenção",
      value: 1,
    });

    // META PIXEL
    window.fbq?.("track", "Contact");
    window.fbq?.("trackCustom", "WhatsAppCTAFinal");
  };

  return (
    <section className="py-24 px-6" id="cta-final">
      <div className="max-w-[1100px] mx-auto">
        <div
          className="
            glassContainer
            relative overflow-hidden
            rounded-[35px]
            px-[20px] py-[40px] md:px-14 md:py-20
            text-center
          "
        >
          {/* GLOW FUNDO */}
          <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] rounded-full bg-purple-600/20 blur-[120px]" />

          <div className="absolute bottom-[-120px] right-[-120px] w-[280px] h-[280px] rounded-full bg-purple-700/20 blur-[120px]" />

          {/* GRID TECNOLÓGICO */}
          <div
            className="
              absolute inset-0 opacity-[0.03]
              bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
              bg-[size:35px_35px]
            "
          />

          <div className="relative z-10 flex flex-col gap-[20px] justify-center items-center">
            {/* TAG */}
            <span
              className="
                infoSpan
                inline-flex items-center
                px-5 py-2
                rounded-full
                bg-purple-500/10
                border border-purple-500/20
                text-purple-300
                text-sm
                font-semibold
                uppercase
                tracking-[2px]
                mb-8
              "
            >
              Atendimento em Belo Horizonte e Contagem
            </span>

            {/* TITULO */}
            <h2
              className="
                sectionTitle
                text-4xl md:text-6xl
                font-black
                leading-tight
                max-w-[900px]
                mx-auto
                mb-8
              "
            >
              Seu computador não precisa continuar lento ou com defeito
            </h2>

            {/* DESCRIÇÃO */}
            <p
              className="
                text-[#cfcfcf]
                text-[17px] md:text-[20px]
                leading-relaxed
                max-w-[850px]
                mx-auto
                mb-12
              "
            >
              Solicite agora seu orçamento e tenha atendimento rápido,
              diagnóstico especializado e retirada gratuita do equipamento em
              Belo Horizonte e Contagem.
            </p>

            {/* BENEFÍCIOS */}
            <div className="grid grid-cols-2 md:flex-wrap justify-center gap-[20px] mb-[10px] infoBenefit">
              <span className="px-[20px] py-[12px] rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                ⚡ Atendimento rápido
              </span>

              <span className="px-[20px] py-[12px] rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                🚗 Coleta gratuita em BH e Contagem
              </span>

              <span className="px-[20px] py-[12px] rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                🛡️ Garantia no serviço
              </span>

              <span className="px-[20px] py-[12px] rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                💳 Pix e cartão
              </span>
            </div>

            {/* BOX OFERTA */}
            <div
              className="
                stepCard
                max-w-[700px]
                mx-auto
                rounded-[28px]
                border border-purple-500/20
                bg-purple-500/[0.05]
                p-8 md:p-10
                mb-12
                flex
                flex-col
                gap-[20px]
                p-[20px]
              "
            >
              <span
                className="
                  infoSpan rounded-full w-fit p-[10px] mx-auto
                "
              >
                Oferta Especial
              </span>

              <h3 className="text-white text-2xl md:text-4xl font-bold mb-6">
                Diagnóstico rápido + orçamento sem compromisso
              </h3>

              <p className="text-[#cfcfcf] leading-relaxed text-[16px] md:text-[18px]">
                Entre em contato agora mesmo e descubra a melhor solução para o
                seu computador ou notebook sem perder tempo.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-[20px]">
              <Link
                href={whatsappUrl}
                target="_blank"
                onClick={handleWhatsAppClick}
                className="
                  cta-button
                  text-[17px]
                  md:text-[18px]
                  px-8 py-4
                "
              >
                Solicitar orçamento no WhatsApp
              </Link>

              <p className="text-[#8f8f99] text-sm">
                Atendimento rápido • Orçamento sem compromisso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

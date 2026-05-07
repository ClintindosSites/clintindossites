"use client";

import Link from "next/link";

export default function ComoFuncionaAtendimento() {
  const etapas = [
    {
      numero: "01",
      titulo: "Entre em contato",
      descricao:
        "Fale conosco pelo WhatsApp e informe o problema do seu computador ou notebook.",
    },
    {
      numero: "02",
      titulo: "Identificação do problema",
      descricao:
        "Analisamos os sintomas e identificamos a melhor solução para o seu dispositivo.",
    },
    {
      numero: "03",
      titulo: "Coleta do dispositivo",
      descricao:
        "Buscamos seu computador em Belo Horizonte e Contagem gratuitamente ou você pode trazer até nós se preferir.",
    },
    {
      numero: "04",
      titulo: "Solução do problema",
      descricao:
        "Realizamos o serviço necessário com segurança, qualidade e transparência.",
    },
    {
      numero: "05",
      titulo: "Entrega no local",
      descricao:
        "Após finalizar o serviço, entregamos seu computador pronto para uso novamente.",
    },
  ];

  return (
    <section className="py-24 px-6" id="como-funciona">
      <div className="max-w-[1100px] mx-auto my-[20px]">
        <div
          className="
          glassContainer
            relative overflow-hidden
            rounded-[30px]
            border border-[rgba(127,61,255,0.25)]
            bg-[linear-gradient(180deg,rgba(18,18,26,0.95),rgba(8,8,12,0.98))]
            p-[25px] md:p-[35px]
            shadow-[0_0_50px_rgba(127,61,255,0.15)]
          "
        >
          {/* EFEITO DE FUNDO */}
          <div className="absolute top-[-120px] left-[-120px] w-[260px] h-[260px] rounded-full bg-purple-600/20 blur-[120px]" />

          <div className="relative z-10">
            {/* HEADER */}
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-purple-400 mb-4 uppercase tracking-[2px]">
                Como Funciona o Atendimento
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Atendimento simples, rápido e sem complicação
              </h2>

              <p className="text-[#cfcfcf] text-[17px] leading-relaxed max-w-[800px] mx-auto">
                Nosso processo foi pensado para trazer praticidade e segurança
                para você. Desde o primeiro contato até a entrega do
                dispositivo, cuidamos de tudo.
              </p>
            </div>

            {/* ETAPAS */}
            <div className="flex flex-wrap justify-center gap-[20px] my-[20px]">
              {etapas.map((item, index) => (
                <div
                  key={index}
                  className="
                    stepCard
                    relative
                    overflow-hidden
                    rounded-[24px]
                    p-[20px]
                  "
                >
                  {/* NUMERO */}
                  <div
                    className="
                      stepNumber absolute top-[10px] right-[15px]
                    "
                  >
                    {item.numero}
                  </div>

                  <div className="relative z-10">
                    <div
                      className="
                        stepMiniNumber
                        w-[55px]
                        h-[55px]
                        rounded-[18px]
                        flex items-center justify-center
                        text-purple-300
                        text-[18px]
                        font-bold
                        mb-6
                      "
                    >
                      {item.numero}
                    </div>

                    <h3 className="text-white text-[22px] font-bold mb-4">
                      {item.titulo}
                    </h3>

                    <p className="text-[#cfcfcf] leading-relaxed text-[15px]">
                      {item.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* INFO EXTRA */}
            <div
              className="
              
                rounded-[24px]
                gap-[20px]
                flex
                bg-purple-500/[0.05]
                p-8
                mb-12
              "
            >
              <div className="flex flex-wrap gap-[7px] my-[20px] justify-center w-full infoExtra">
                <span className="px-[20px] py-[12px] rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  🚗 Frete grátis em BH e Contagem 🚗
                </span>

                <span className="px-[20px] py-[12px] rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  ⚡ Atendimento rápido ⚡
                </span>

                <span className="px-[20px] py-[12px] rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  💳 Pix e cartão de crédito 💳
                </span>

                <span className="px-[20px] py-[12px] rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  🛡️ Segurança e transparência 🛡️
                </span>
              </div>
            </div>

            {/* CTA FINAL */}
            <div className="flex justify-center">
              <Link
                className="cta-button"
                target="_blank"
                href="https://wa.me/5538991369873?text=Olá,%20gostaria%20de%20solicitar%20um%20atendimento%20para%20meu%20computador."
              >
                Solicitar atendimento no WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

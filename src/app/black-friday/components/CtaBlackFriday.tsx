"use client";

import Link from "next/link";
import { reportConversion } from "@/lib/tracking";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[#09070f] px-5 py-24"
    >
      {/* EFEITOS */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-700/20 blur-[130px]" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-[130px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-[#171220] px-6 py-16 md:px-16 text-center shadow-[0_0_70px_rgba(127,61,255,0.10)]">
          {/* ETIQUETA */}
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-widest text-purple-400">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            Black Friday Clintin dos Sites
          </span>

          {/* TÍTULO */}
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white mt-8">
            Não deixe seu próximo projeto{" "}
            <span className="title-purple">para depois!</span>
          </h2>

          {/* TEXTO */}
          <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed text-gray-400">
            Sua empresa merece uma presença digital profissional. Aproveite
            nossas condições especiais e transforme sua ideia em um projeto de
            verdade.
          </p>

          {/* DIFERENCIAIS */}
          <div className="flex flex-wrap justify-center gap-3 mt-9">
            {[
              "Sites profissionais",
              "Landing pages",
              "Lojas virtuais",
              "Aplicativos mobile",
            ].map(item => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs md:text-sm text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
          <Image
            src={"/black-friday-dos-sites-50.webp"}
            alt="Black friday dos Sites com até 50% de desconto"
            width={700}
            height={500}
            className="mx-auto mt-10"
          />

          {/* BOTÃO */}
          <Link
            href="#"
            id="checkout-final-blackfriday"
            target="_blank"
            className="whatsapp-track mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#4b1fb8] via-[#7f3dff] to-[#9b6cff] px-8 py-5 text-sm md:text-base font-bold uppercase tracking-wide text-white shadow-[0_10px_40px_rgba(127,61,255,0.30)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_50px_rgba(127,61,255,0.45)]"
            onClick={e => {
              e.preventDefault();

              reportConversion({
                url:
                  "https://wa.me/5531984362710?text=" +
                  encodeURIComponent(
                    "Olá! Vim pela Black Friday da Clintin dos Sites e gostaria de conhecer as ofertas disponíveis para desenvolver meu projeto."
                  ),
                service: "Black Friday",
                origin: "CTA Final Black Friday",
                value: 1,
              });
            }}
          >
            QUERO APROVEITAR A OFERTA
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </Link>

          {/* RODAPÉ */}
          <p className="mt-7 text-xs text-gray-500">
            Atendimento personalizado pelo WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}

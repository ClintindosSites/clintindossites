"use client";

import Image from "next/image";
import {
  Check,
  ShieldCheck,
  Clock3,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import { Service } from "@/types/service";
import { reportConversion } from "@/lib/tracking";

interface Props {
  service: Service;
}

export default function FinalCtaServicos({ service }: Props) {
  const cta = service.finalCTA;

  if (!cta) return null;

  const whatsapp =
    "https://wa.me/5531984362710?text=" + encodeURIComponent(cta.whatsapp);

  return (
    <section
      id="promo-cta"
      className="relative overflow-hidden bg-[#09070f] px-5 py-16 md:py-24"
    >
      {/* EFEITO DE FUNDO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-275">
        {/* CABEÇALHO */}
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-400">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            {cta.badge}
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            {cta.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            {cta.subtitle}
          </p>
        </header>

        {/* CARD PRINCIPAL */}
        <div className="grid overflow-hidden rounded-3xl border border-purple-500/30 bg-[#15121e] shadow-[0_0_50px_rgba(127,61,255,0.12)] lg:grid-cols-2">
          {/* BENEFÍCIOS */}
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-purple-400">
              Seu próximo projeto começa aqui
            </span>

            <h3 className="mb-7 text-2xl font-bold leading-tight text-white md:text-3xl">
              Invista em uma presença digital profissional.
            </h3>

            <ul className="flex flex-col gap-4">
              {cta.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm leading-relaxed text-gray-300 sm:text-base"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-purple-400">
                    <Check size={15} strokeWidth={3} />
                  </span>

                  {benefit}
                </li>
              ))}
            </ul>

            {/* IMAGEM APENAS NO DESKTOP */}
            <div className="relative mt-8 hidden h-62.5 w-full lg:block">
              <Image
                src="/mockup-sites.webp"
                alt="Exemplos de projetos digitais desenvolvidos"
                fill
                sizes="(max-width: 1200px) 45vw, 450px"
                className="object-contain"
              />
            </div>
          </div>

          {/* OFERTA */}
          <div className="relative flex flex-col justify-center border-t border-purple-500/20 bg-[linear-gradient(160deg,#211335,#100d18)] p-6 text-center sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-600/20 blur-[100px]"
            />

            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-300">
                Condição especial
              </span>

              <h3 className="mt-7 text-2xl font-bold text-white">{cta.plan}</h3>

              {/* PREÇO */}
              <div className="mt-6">
                {cta.oldPrice && (
                  <p className="text-xl text-gray-500 line-through">
                    {cta.oldPrice}
                  </p>
                )}

                <p className="mt-2 wrap-break-word text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  {cta.price}
                </p>

                {cta.installment && (
                  <p className="mt-3 text-sm text-gray-400">
                    {cta.installment}
                  </p>
                )}
              </div>

              {/* GARANTIA E CONDIÇÕES */}
              <div className="mt-8 flex flex-col items-center gap-3">
                {cta.guarantee && (
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                    <ShieldCheck
                      size={18}
                      className="shrink-0 text-purple-400"
                    />
                    <span>{cta.guarantee}</span>
                  </div>
                )}

                {cta.urgency && (
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                    <Clock3 size={18} className="shrink-0 text-purple-400" />
                    <span>{cta.urgency}</span>
                  </div>
                )}
              </div>

              {/* BOTÃO DE CONVERSÃO */}
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={event => {
                  event.preventDefault();

                  reportConversion({
                    url: whatsapp,
                    service: service.slug,
                    origin: "Final CTA",
                    value: 1,
                  });
                }}
                className="mt-9 flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#4b1fb8] via-[#7f3dff] to-[#9b6cff] px-5 py-4 text-center text-sm font-bold uppercase text-white shadow-lg shadow-purple-700/20 transition-all duration-300 hover:scale-[1.03]"
              >
                <MessageCircle size={19} className="shrink-0" />
                {cta.cta}
                <ArrowUpRight size={18} className="shrink-0" />
              </a>

              <p className="mt-5 text-xs text-gray-500">
                Atendimento personalizado pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

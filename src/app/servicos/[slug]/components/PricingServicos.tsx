"use client";

import { useEffect, useRef } from "react";
import { reportConversion, trackEvent } from "@/lib/tracking";
import { Service } from "@/types/service";

interface PricingProps {
  service: Service;
}

const WHATSAPP = "5531984362710";

export default function PricingServicos({ service }: PricingProps) {
  const plans = service.pricing?.cards ?? [];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element || plans.length === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent("ViewPricing", {
            service: service.slug,
          });

          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [service.slug, plans.length]);

  if (plans.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="checkout"
      className="relative scroll-mt-20 overflow-hidden bg-[#09070f] px-5 py-24"
    >
      {/* EFEITO DE FUNDO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-purple-700/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-300">
        {/* CABEÇALHO */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-400 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Planos e investimentos
          </span>

          <h2 className="mt-7 text-3xl font-bold leading-tight text-white md:text-5xl">
            {service.pricing?.title}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400 md:text-lg">
            {service.pricing?.subtitle}
          </p>
        </header>

        {/* CARDS DE PREÇOS */}
        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, index) => {
            const whatsapp =
              `https://wa.me/${WHATSAPP}?text=` +
              encodeURIComponent(
                `Olá! Tenho interesse no plano "${plan.titulo}" do serviço ${service.slug}, anunciado por ${plan.preco}. Gostaria de saber mais sobre as condições de contratação.`
              );

            return (
              <article
                key={`${plan.titulo}-${index}`}
                className={`
                  relative flex flex-col rounded-2xl border p-7
                  transition-all duration-300
                  hover:-translate-y-2
                  ${
                    plan.destaque
                      ? "border-purple-500 bg-[#191126] shadow-[0_0_40px_rgba(127,61,255,0.15)]"
                      : plan.promocao
                        ? "border-purple-500/40 bg-[linear-gradient(180deg,#1d113d,#12101a)] hover:border-purple-500"
                        : "border-white/10 bg-[#12101a] hover:border-purple-500/50"
                  }
                `}
              >
                {/* DESTAQUE */}
                {(plan.destaque || plan.promocao) && (
                  <span
                    className="
                      absolute -top-4 left-1/2
                      -translate-x-1/2 whitespace-nowrap
                      rounded-full
                      bg-linear-to-r from-[#4b1fb8] to-[#9b6cff]
                      px-5 py-2 text-xs font-bold
                      uppercase tracking-wider text-white
                      shadow-lg shadow-purple-700/30
                    "
                  >
                    {plan.promocao ? "Oferta especial" : "Mais procurado"}
                  </span>
                )}

                {/* NOME */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {plan.titulo}
                  </h3>

                  <p className="mt-2 min-h-10 text-sm leading-relaxed text-gray-400">
                    {plan.descricao}
                  </p>
                </div>

                {/* PREÇO */}
                <div className="mb-6 border-b border-white/10 pb-6">
                  <p className="mb-2 text-sm text-gray-400">
                    {plan.condicaoPagamento}
                  </p>

                  <strong className="block text-4xl font-extrabold tracking-tight text-white">
                    {plan.preco}
                  </strong>

                  {plan.parcela && (
                    <p className="mt-3 text-sm text-gray-400">{plan.parcela}</p>
                  )}
                </div>

                {/* ENTREGÁVEIS */}
                <div className="flex-1">
                  <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
                    O que você vai receber:
                  </h4>

                  <ul className="flex flex-col gap-4">
                    {plan.itens.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed text-gray-300"
                      >
                        <span
                          className="
                            mt-0.5 flex h-5 w-5 shrink-0
                            items-center justify-center
                            rounded-full bg-purple-500/15
                            text-purple-400
                          "
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="m5 12 4 4L19 6" />
                          </svg>
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    mt-9 flex min-h-14
                    items-center justify-center gap-2
                    rounded-full px-5 py-4
                    text-center text-sm font-bold uppercase
                    transition-all duration-300
                    hover:scale-[1.03]
                    ${
                      plan.destaque || plan.promocao
                        ? "bg-linear-to-r from-[#4b1fb8] via-[#7f3dff] to-[#9b6cff] text-white shadow-lg shadow-purple-700/20"
                        : "border border-purple-500/50 bg-purple-500/10 text-purple-300 hover:bg-purple-600 hover:text-white"
                    }
                  `}
                  onClick={event => {
                    event.preventDefault();

                    trackEvent("SelectPlan", {
                      service: service.slug,
                      plan: plan.titulo,
                    });

                    reportConversion({
                      url: whatsapp,
                      service: service.slug,
                      origin: `Pricing - ${plan.titulo}`,
                      value: 1,
                    });
                  }}
                >
                  {plan.ctaBtn}

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </article>
            );
          })}
        </div>

        {/* CTA SECUNDÁRIO */}
        <div className="mt-16 text-center">
          <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Não sabe qual plano escolher?
          </h3>

          <p className="mx-auto mb-7 max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
            Conte um pouco sobre seu projeto e ajudaremos você a encontrar a
            solução mais adequada para o seu negócio.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              `Olá! Gostaria de ajuda para escolher a melhor opção de ${service.slug} para minha empresa.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#4b1fb8] via-[#7f3dff] to-[#9b6cff] px-8 py-4 text-center font-bold uppercase text-white transition-transform duration-300 hover:scale-105"
          >
            Falar com um especialista
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

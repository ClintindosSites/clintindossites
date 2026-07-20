"use client";

import { reportConversion } from "@/lib/tracking";
import { Service } from "@/types/service";
import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/tracking";

interface PricingProps {
  service: Service;
}

export default function PricingServicos({ service }: PricingProps) {
  const plans = service.pricing?.cards ?? [];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent("ViewPricing", {
            service: service.slug,
          });

          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [service.slug]);

  if (plans.length === 0) return null;
  return (
    <section ref={sectionRef} className="py-24" id="checkout">
      <div className="max-w-[1200px] mx-auto px-6 gap-[30px] flex flex-col">
        <div className="flex flex-col gap-[10px] text-center">
          {" "}
          <h2 className="text-center text-4xl md:text-5xl font-extrabold text-metal">
            {service.pricing?.title}
          </h2>
          <p className="text-center text-[#bdbdbd] mt-4 mb-14">
            {service.pricing?.subtitle}
          </p>
        </div>

        <div className="grid gap-[1.3rem] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {plans.map((plan, index) => {
            const whatsapp = `https://wa.me/5531984362710?text=${encodeURIComponent(
              `Olá, gostaria de saber mais sobre o plano ${plan.titulo}.`
            )}`;

            return (
              <div
                onClick={() =>
                  trackEvent("SelectPlan", {
                    service: service.slug,
                    plan: plan.titulo,
                  })
                }
                id="checkout-item"
                key={index}
                className={`
                  rounded-[25px]
                  p-[20px]
                  border
                  flex
                  flex-col
                  gap-[10px]
                  ${
                    plan.destaque
                      ? "border-[#7f3dff] scale-105 shadow-[0_0_40px_rgba(127,61,255,0.4)]"
                      : "border-white/10"
                  }
                  ${
                    plan.promocao
                      ? "bg-[linear-gradient(180deg,#1d113d,#0b0b0f)]"
                      : "bg-[#0b0b0f]"
                  }
                `}
              >
                <h3 className="text-2xl font-bold text-metal mb-4">
                  {plan.titulo}
                </h3>

                <div className="mb-6">
                  <p className="text-[#bdbdbd]">{plan.condicaoPagamento}</p>
                  <h3 className="text-[2.5rem] font-extrabold text-metal">
                    {plan.preco}
                  </h3>

                  {plan.parcela && (
                    <p className="text-[#bdbdbd] mt-2">{plan.parcela}</p>
                  )}
                </div>

                <p className="text-[#cfcfcf] mb-6">{plan.descricao}</p>

                <ul className="space-y-3 mb-8">
                  {plan.itens.map((item, i) => (
                    <li key={i} className="flex gap-2 text-[#d7d7d7]">
                      ✅ {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3">
                  <a
                    href={whatsapp}
                    target="_blank"
                    className="cta-button text-center"
                    onClick={e => {
                      e.preventDefault();

                      reportConversion({
                        url: whatsapp,
                        service: service.slug,
                        origin: `Pricing - ${plan.titulo}`,
                        value: 1,
                      });
                    }}
                  >
                    {plan.ctaBtn}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

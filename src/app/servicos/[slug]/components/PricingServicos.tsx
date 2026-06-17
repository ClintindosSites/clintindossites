"use client";

import Link from "next/link";
import { Service } from "@/types/service";

interface PricingProps {
  service: Service;
}

export default function PricingServicos({ service }: PricingProps) {
  const plans = service.pricing ?? [];

  if (!plans.length) {
    return null;
  }

  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 gap-[30px] flex flex-col">
        <div className="flex flex-col gap-[10px] text-center">
          {" "}
          <h2 className="text-center text-4xl md:text-5xl font-extrabold text-metal">
            {service.pricingTitle}
          </h2>
          <p className="text-center text-[#bdbdbd] mt-4 mb-14">
            {service.pricingSubtitle}
          </p>
        </div>

        <div className="grid gap-[1.3rem] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {plans.map((plan, index) => {
            const whatsapp = `https://wa.me/5531984362710?text=${encodeURIComponent(
              `Olá, gostaria de saber mais sobre o plano ${plan.titulo}.`
            )}`;

            return (
              <div
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
                  <p className="text-[#bdbdbd]">A partir de:</p>
                  <h3 className="text-[50px] font-extrabold text-metal">
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
                    href={plan.href}
                    target="_blank"
                    className="cta-button text-center"
                  >
                    {plan.cta}
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

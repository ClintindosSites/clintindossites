"use client";

import { Check, ShieldCheck, Clock } from "lucide-react";
import { Service } from "@/types/service";

interface Props {
  service: Service;
}

export default function FinalCtaServicos({ service }: Props) {
  const cta = service.finalCTA;

  if (!cta) return null;

  const whatsapp = `https://wa.me/5531984362710?text=${encodeURIComponent(
    cta.whatsapp
  )}`;

  return (
    <section className="py-28 px-6 ctafinal">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-[3rem] flex flex-col items-center">
        {/* Texto */}

        {/* Checkout */}

        <div
          className="
          rounded-[30px]
          border
          border-purple-500/30
          bg-[#111117]
          p-[30px]
          shadow-[0_0_45px_rgba(127,61,255,.18)]
          relative
          overflow-hidden
          items-center
          text-center
          flex
          flex-col
          gap-[1rem]
        "
        >
          <div className="gap-[1rem] flex flex-col">
            <div className="title">
              {" "}
              <span className="text-purple-400 font-semibold">{cta.badge}</span>
              <h2 className="text-metal text-4xl md:text-5xl font-extrabold mt-4">
                {cta.title}
              </h2>
              <p className="text-[#bdbdbd] mt-6 text-lg leading-relaxed">
                {cta.subtitle}
              </p>
            </div>
            <div className="flex gap-[1rem] justify-between items-center text-left">
              <div className="mt-10 space-y-4">
                {cta.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-[#d8d8d8]"
                  >
                    <Check size={20} className="text-purple-400 shrink-0" />

                    {benefit}
                  </div>
                ))}
              </div>
              <div className="img">
                <img src="/mockup-sites.webp" alt="mockup de sites" />
              </div>
            </div>

            <div className="texts gap-[1rem]">
              {" "}
              <span
                className="
            inline-flex
            rounded-full
            bg-purple-500/20
            text-purple-300
            px-4
            py-2
            text-sm
            text-center justify-center
          "
              >
                Somente hoje você consegue:
              </span>
              <h3 className="text-3xl font-bold mt-8">{cta.plan}</h3>
              {cta.oldPrice && (
                <h3 className="line-through text-zinc-500 mt-6 text-[2rem]">
                  {cta.oldPrice}
                </h3>
              )}
              <div className="mt-2">
                <h3 className="text-[4rem] font-extrabold text-metal">
                  {cta.price}
                </h3>
              </div>
              <p className="text-[#bdbdbd] mt-3">{cta.installment}</p>
            </div>
            <div className="mt-10 flex flex-col gap-4 items-center">
              <div className="flex items-center gap-3 text-sm text-[#bdbdbd]">
                <ShieldCheck className="text-green-400" size={18} />

                {cta.guarantee}
              </div>

              <div className="flex items-center gap-3 text-sm text-[#bdbdbd]">
                <Clock className="text-yellow-400" size={18} />

                {cta.urgency}
              </div>
            </div>
          </div>
          <div className="absolute -top-24 -right-24 w-56 h-56 bg-purple-600/20 blur-[120px]" />

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button mt-10 w-full block text-center mx-auto"
          >
            {cta.cta}
          </a>

          <p className="text-center text-sm text-zinc-500 mt-5">
            Atendimento rápido pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}

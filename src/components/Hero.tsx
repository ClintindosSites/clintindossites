"use client";

import { useEffect, useRef } from "react";
import { reportConversion, trackEvent } from "@/lib/tracking";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = heroRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent("ViewHero", {
            page: "Home",
          });

          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);
  return (
    <section ref={heroRef} className="max-w-[1200px] mx-auto p-10">
      <div className="hero flex gap-8 justify-center items-center">
        <div className="heroText flex flex-col gap-8 flex-1">
          <h1 className="text-4xl font-title">
            Programador Profissional para Empresas que Querem Crescer
          </h1>

          <p className="text-lg text-gray-300">
            Desenvolvimento de sites, sistemas web, landing pages, aplicativos e
            automações sob medida para empresas, prestadores de serviço,
            engenheiros, construtoras, clínicas e negócios locais.
          </p>

          <div className="flex flex-col gap-6 text-sm text-gray-400">
            <span>✔ Desenvolvimento 100% personalizado</span>
            <span>✔ Sites rápidos e preparados para Google</span>
            <span>✔ Integrações com WhatsApp, CRM e APIs</span>
            <span>✔ Suporte direto com o desenvolvedor</span>
          </div>
          <Link
            href="https://wa.me/5531984362710?text=Olá,%20tenho%20interesse%20em%20adquirir%20um%20website.%20Pode%20me%20explicar%20como%20funciona?"
            className="cta-button whatsapp-track"
            id="orcamento-wpp"
            target="_blank"
            onClick={e => {
              e.preventDefault();

              reportConversion({
                url: "https://wa.me/5531984362710?text=Olá,%20tenho%20interesse%20em%20adquirir%20um%20website.%20Pode%20me%20explicar%20como%20funciona?",
                service: "Home",
                origin: "Hero Home",
                value: 1,
              });
            }}
          >
            Enviar projeto direto para o desenvolvedor
          </Link>
        </div>

        {/*<div className="flex-1">
          <Image src="" />
        </div>*/}
      </div>
    </section>
  );
}

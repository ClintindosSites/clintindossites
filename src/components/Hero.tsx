"use client";

import { useEffect, useRef } from "react";
import { reportConversion, trackEvent } from "@/lib/tracking";
import Link from "next/link";
import HeroForm from "./HeroForm";
import Servicos from "./Servicos";
import HeroContato from "@/app/contato/page";

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
    <section
      ref={heroRef}
      className="hero relative mx-auto min-h-screen p-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.78)_40%,rgba(0,0,0,0.35)_100%),linear-gradient(0deg,rgba(0,0,0,0.65)_0%,transparent_45%,rgba(0,0,0,0.2)_100%),url('/hero.webp')] bg-no-repeat bg-cover bg-center flex items-center justify-center"
    >
      <div className="container max-w-[1200px] flex gap-8 justify-center items-center">
        <div className="heroText flex flex-col text-left gap-8 flex-1 justify-between my-0 mx-0 p-0 ">
          <h1 className="text-4xl font-title">
            Desenvolvedor Full Stack de Estruturas Digitais Completas do Zero ao
            Online
          </h1>

          <p className="text-lg text-gray-800">
            Ajudo empresas que precisam de um programador profissional para
            desenvolver estruturas digitais completas e funcionais como:
          </p>

          <div className="heroList flex flex-col gap-6 text-sm text-gray-400">
            <span>
              <div className="badgeHeroList">✔</div> Desenvolvimento de Sistema
              Web Personalizado
            </span>

            <span>
              <div className="badgeHeroList">✔</div>Desenvolvimento de
              Automações Digitais
            </span>
            <span>
              <div className="badgeHeroList">✔</div> Desenvolvimento de Sites
              Profissionais
            </span>
            <span>
              <div className="badgeHeroList">✔</div> Desenvolvimento de
              Aplicativo Mobile
            </span>
            <span>
              <div className="badgeHeroList">✔</div> Desenvolvimento de Landing
              Page
            </span>
            <span>
              <div className="badgeHeroList">✔</div> Desenvolvimento de Loja
              Virtual
            </span>
          </div>
          <Link
            href="#"
            className="cta-button whatsapp-track mx-0"
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
        <div className="formHero flex-1 w-full flex">
          <HeroContato />
        </div>
        {/*<div className="flex-1">
          <Image src="" />
        </div>*/}
      </div>
    </section>
  );
}

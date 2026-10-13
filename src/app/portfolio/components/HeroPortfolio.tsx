"use client";

import Link from "next/link";

export default function HeroPortfolio() {
  return (
    <section>
      <div className=" mx-auto max-w-300 flex flex-col justify-center text-center gap-10 mt-37.5 items-center ">
        <h1 className="title-purple text-5xl">
          Portfolio de Projetos de empresas que ajudei alcançar os objetivos
        </h1>
        <p className="text-xl">
          Confira websites, landing pages, aplicações mobile e resultados
          digitais gerados com desenvolvimento web e gestão de tráfego pago.
        </p>
        <Link
          href="https://wa.me/5531984362710"
          target="blank"
          className="cta-button whatsapp-track"
        >
          Solicite seu projeto digital
        </Link>
      </div>
    </section>
  );
}

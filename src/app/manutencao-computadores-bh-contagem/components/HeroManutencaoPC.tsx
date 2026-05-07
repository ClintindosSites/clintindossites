"use client";

import { reportConversion } from "@/lib/tracking";
import Link from "next/link";

export default function HeroManutencaoPC() {
  const mensagem =
    "Olá, tenho interesse em fazer manutenção no meu computador. Pode me passar mais informações?";

  const url = `https://wa.me/5538991369873?text=${encodeURIComponent(mensagem)}`;
  return (
    <section className="hero heroManutencao" id="heroManutencao">
      <div className="heroManuText">
        <h1 className="text-[40px]">
          Seu computador estragou? <br /> Clintin dos Sites consertou!
        </h1>
        <p>Assistência Técnica de Computadores e Notebooks em Belo Horizonte</p>
        <p>Entrega no mesmo dia ou em até 24 horas</p>
        <p>Atendimento a domicílio</p>

        <Link
          className="cta-button"
          href={url}
          target="_blank"
          onClick={() => reportConversion("Hero - Manutenção de Computador")}
        >
          Clique e solicite orçamento no Whatsapp
        </Link>
      </div>
    </section>
  );
}

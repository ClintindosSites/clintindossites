"use client";

import HeroForm from "@/components/HeroForm";
import { reportConversion } from "@/lib/tracking";
import { Service } from "@/types/service";

interface HeroServicosProps {
  service: Service;
}

export default function HeroServicos({ service }: HeroServicosProps) {
  return (
    <section className="hero heroservicos">
      <div className="container">
        <div className="text">
          <h1>{service.hero.title}</h1>

          <p>{service.hero.subtitle}</p>

          <a
            href="#checkout"
            className="cta-button"
            onClick={() => reportConversion()}
          >
            {service.hero.ctaBtn}
          </a>

          <div className="img">
            <img src="/hero-criacao-de-sites.webp" alt="" />
          </div>
        </div>

        <div className="img">
          <HeroForm form={service.form} />
        </div>
      </div>
    </section>
  );
}

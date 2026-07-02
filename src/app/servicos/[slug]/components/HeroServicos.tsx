import { Service } from "@/types/service";

interface HeroServicosProps {
  service: Service;
}

export default function HeroServicos({ service }: HeroServicosProps) {
  const whatsappMessage = encodeURIComponent(
    `Olá! Acabei de visitar a página de ${service.hero.title} no site da Clintin dos Sites e gostaria de receber um orçamento sem compromisso.`
  );

  return (
    <section className="hero heroservicos">
      <div className="container">
        <div className="text">
          <h1>{service.hero.title}</h1>

          <p>{service.hero.subtitle}</p>

          <a
            href={`https://wa.me/5531984362710?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            {service.hero.ctaBtn}
          </a>
        </div>
        <div className="img">
          <img
            src={"/hero-criacao-de-sites.webp"}
            alt="Imagem de criação de sites"
          />
        </div>
      </div>
    </section>
  );
}

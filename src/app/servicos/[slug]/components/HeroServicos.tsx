interface HeroServicosProps {
  service: {
    title: string;
    headline: string;
    description: string;
    price: string;
    cta: string;
  };
}

export default function HeroServicos({ service }: HeroServicosProps) {
  const whatsappMessage = encodeURIComponent(
    `Olá! Acabei de visitar a página de ${service.title} no site da Clintin dos Sites e gostaria de receber um orçamento sem compromisso.`
  );

  return (
    <section className="hero">
      <div className="container">
        <h1>{service.title}</h1>

        <p>
          <strong>{service.headline}</strong>
        </p>

        <h3>{service.description}</h3>

        <ul>
          <li>
            {service.title} a partir de {service.price}
          </li>
        </ul>

        <a
          href={`https://wa.me/5538991369873?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          {service.cta}
        </a>
      </div>
    </section>
  );
}

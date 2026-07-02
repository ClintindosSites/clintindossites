import { Service } from "@/types/service";

import Image from "next/image";

interface TechnologiesProps {
  service: Service;
}

export default function TechnologiesServicos({ service }: TechnologiesProps) {
  const whatsappMessage = encodeURIComponent(
    `Olá! Acabei de visitar a página de ${service.technologies} no site da Clintin dos Sites e gostaria de receber um orçamento sem compromisso.`
  );
  const tecnologias = service.technologies?.items ?? [];

  return (
    <section className="technologies">
      <div className="container flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[10px] text-center">
          {" "}
          <h2>{service.technologies?.title}</h2>
          <p className="text-[#cfcfcf]">{service.technologies?.subtitle}</p>
        </div>
        <div className="grid gap-[1.3rem] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {tecnologias.map((tech, index) => (
            <div
              key={index}
              className="flex items-center rounded-[20px] p-[20px] border transition duration-300 hover:-translate-y-[6px] bg-[linear-gradient(180deg,rgba(18,18,26,0.95),rgba(11,11,15,0.95))] border-[rgba(127,61,255,0.25)] hover:shadow-[0_0_40px_rgba(127,61,255,0.4)]"
            >
              <div className="flex-col gap-[5px] flex">
                {" "}
                <h3>{tech.nome}</h3>
                <p className="text-[#bdbdbd]">{tech.descricao}</p>
              </div>
              <Image src={tech.image} alt={tech.nome} width={80} height={80} />
            </div>
          ))}
        </div>
        <a
          href={`https://wa.me/5531984362710?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button mx-auto"
        >
          {service.technologies?.ctaButton}
        </a>
      </div>
    </section>
  );
}

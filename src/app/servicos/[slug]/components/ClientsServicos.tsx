"use client";

import Image from "next/image";
import { Service } from "@/types/service";

interface Props {
  service: Service;
}

export default function ClientsServicos({ service }: Props) {
  const clients = service.clients?.items ?? [];

  if (clients.length === 0) return null;

  return (
    <section className="max-w-[1200px] mx-auto py-24 px-6">
      <div className="text-center mb-14">
        <h2 className="text-metal text-4xl md:text-5xl font-extrabold">
          {service.clients?.title}
        </h2>

        <p className="text-[#bdbdbd] mt-4">{service.clients?.subtitle}</p>
      </div>

      <div
        className="
        flex
        flex-wrap
        justify-center
        gap-[1rem]
        p-[30px]
        "
      >
        {clients.map(client => (
          <a
            key={client.nome}
            href={client.link}
            target="_blank"
            rel="noopener noreferrer"
            title={client.nome}
            className="
              transition
              duration-300
              hover:scale-110
              hover:drop-shadow-[0_0_20px_rgba(127,61,255,.6)]
            "
          >
            <Image
              src={client.logo}
              alt={client.nome}
              width={170}
              height={90}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

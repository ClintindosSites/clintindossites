"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

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

        <p className="text-[#bdbdbd] mt-4 max-w-3xl mx-auto">
          {service.clients?.subtitle}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {clients.map(client => (
          <a
            key={client.nome}
            href={client.link}
            target="_blank"
            className="
            group
            rounded-[22px]
            border
            border-purple-500/20
            bg-[#0f0f15]
            p-6
            transition
            duration-300
            hover:-translate-y-2
            hover:border-purple-500
            hover:shadow-[0_0_35px_rgba(127,61,255,.25)]
            "
          >
            <div className="flex items-center gap-5">
              <div
                className="
                w-20
                h-20
                rounded-2xl
                bg-white
                flex
                items-center
                justify-center
                p-3
                "
              >
                <Image
                  src={client.logo}
                  alt={client.nome}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-metal">{client.nome}</h3>

                <p className="text-purple-300">{client.segmento}</p>
              </div>
            </div>

            <p className="text-[#bdbdbd] mt-6 leading-relaxed">
              {client.descricao}
            </p>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-sm text-[#9f9f9f]">Projeto publicado</span>

              <span className="flex items-center gap-2 text-purple-400 group-hover:translate-x-1 transition">
                Visitar site
                <ExternalLink size={18} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

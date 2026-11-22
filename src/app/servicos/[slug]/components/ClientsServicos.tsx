import Image from "next/image";
import { Service } from "@/types/service";
import { ArrowUpRight } from "lucide-react";

interface Props {
  service: Service;
}

export default function ClientsServicos({ service }: Props) {
  const clients = service.clients?.items ?? [];

  if (clients.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[#09070f] px-5 py-24">
      {/* EFEITO DE FUNDO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-112.5 w-112.5 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-300">
        {/* CABEÇALHO */}
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-400 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Empresas que confiam
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
            {service.clients?.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            {service.clients?.subtitle}
          </p>
        </header>

        {/* LOGOMARCAS */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {clients.map(client => {
            const content = (
              <>
                <div className="relative flex h-28 w-full items-center justify-center p-5">
                  <Image
                    src={client.logo}
                    alt={`Logomarca ${client.nome}`}
                    width={170}
                    height={90}
                    sizes="170px"
                    className="max-h-20 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex w-full items-center justify-center gap-2 border-t border-white/10 px-3 py-3">
                  <span className="truncate text-center text-xs font-medium text-gray-400 transition-colors group-hover:text-white">
                    {client.nome}
                  </span>

                  {client.link && (
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-purple-400"
                    />
                  )}
                </div>
              </>
            );

            const cardClassName =
              "group flex min-w-0 flex-col items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#15121e] transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(127,61,255,0.12)]";

            return client.link ? (
              <a
                key={client.nome}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visitar ${client.nome}`}
                className={cardClassName}
              >
                {content}
              </a>
            ) : (
              <div key={client.nome} className={cardClassName}>
                {content}
              </div>
            );
          })}
        </div>

        {/* MENSAGEM FINAL */}
        <div className="mt-12 text-center">
          <p className="text-sm leading-relaxed text-gray-400 md:text-base">
            Sua empresa também pode fazer parte dessa história.
          </p>

          <a
            href="#checkout"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition-colors hover:text-purple-300"
          >
            Conheça nossos planos
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

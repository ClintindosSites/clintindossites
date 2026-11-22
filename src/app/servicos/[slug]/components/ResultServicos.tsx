import {
  FolderKanban,
  Building2,
  MapPinned,
  CalendarClock,
} from "lucide-react";

const results = [
  {
    icon: FolderKanban,
    number: "80+",
    title: "Projetos entregues",
    description: "Sites, sistemas e aplicativos.",
  },
  {
    icon: Building2,
    number: "60+",
    title: "Empresas atendidas",
    description: "Negócios de diferentes segmentos.",
  },
  {
    icon: MapPinned,
    number: "10+",
    title: "Estados atendidos",
    description: "Clientes em diversas regiões do Brasil.",
  },
  {
    icon: CalendarClock,
    number: "5+",
    title: "Anos de experiência",
    description: "Desenvolvendo soluções digitais.",
  },
];

export default function ResultsServicos() {
  return (
    <section className="relative overflow-hidden bg-[#09070f] px-5 py-14 md:py-20">
      <div className="relative mx-auto max-w-300">
        {/* CABEÇALHO */}
        <header className="mx-auto mb-9 max-w-3xl text-center md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-400">
            Nossa experiência
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Resultados que{" "}
            <span className="title-purple">geram confiança.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
            Experiência prática desenvolvendo projetos digitais para empresas de
            diferentes segmentos.
          </p>
        </header>

        {/* INDICADORES */}
        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {results.map(item => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex flex-col items-center rounded-2xl border border-white/10 bg-[#15121e] px-3 py-6 text-center transition-all duration-300 hover:border-purple-500/50 hover:bg-[#1c1529] sm:p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 sm:h-14 sm:w-14">
                  <Icon size={25} strokeWidth={1.8} className="sm:h-8 sm:w-8" />
                </div>

                <strong className="bg-linear-to-r from-[#9b6cff] to-[#d5c0ff] bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl lg:text-5xl">
                  {item.number}
                </strong>

                <h3 className="mt-3 text-sm font-bold leading-snug text-white sm:text-base">
                  {item.title}
                </h3>

                <p className="mt-2 hidden text-xs leading-relaxed text-gray-400 sm:block md:text-sm">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import {
  FolderKanban,
  Building2,
  MapPinned,
  CalendarClock,
} from "lucide-react";

export default function ResultsServicos() {
  const results = [
    {
      icon: FolderKanban,
      number: "80+",
      title: "Projetos Entregues",
      description:
        "Sites, Landing Pages, Sistemas Web e Aplicativos desenvolvidos para clientes reais.",
    },
    {
      icon: Building2,
      number: "60+",
      title: "Empresas Atendidas",
      description:
        "Negócios de diversos segmentos confiaram no nosso desenvolvimento.",
    },
    {
      icon: MapPinned,
      number: "10+",
      title: "Estados Atendidos",
      description:
        "Projetos entregues para clientes em diversas regiões do Brasil.",
    },
    {
      icon: CalendarClock,
      number: "5+",
      title: "Anos Desenvolvendo",
      description: "Experiência prática criando soluções digitais sob medida.",
    },
  ];

  return (
    <section className="results py-24 max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-metal text-4xl md:text-5xl font-extrabold">
          Resultados que geram confiança
        </h2>

        <p className="text-[#bdbdbd] mt-4 max-w-2xl mx-auto">
          Cada projeto representa uma empresa que decidiu investir em presença
          digital profissional.
        </p>
      </div>

      <div className="results-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="results-item rounded-[20px] border border-purple-500/20 bg-[#0f0f15] p-8 text-center"
            >
              <Icon className="mx-auto text-purple-400 mb-5" size={45} />

              <h3 className="text-5xl font-black text-metal">{item.number}</h3>

              <h4 className="mt-4 text-xl font-bold">{item.title}</h4>

              <p className="text-sm text-[#bdbdbd] mt-3">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

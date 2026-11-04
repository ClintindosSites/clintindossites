import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Site Institucional",
    description:
      "Apresente sua empresa, seus serviços e seus diferenciais com profissionalismo. Transmita credibilidade e facilite o contato com novos clientes.",
  },
  {
    number: "02",
    title: "Landing Page",
    description:
      "Uma página estratégica para divulgar produtos, serviços e campanhas, direcionando visitantes para uma ação específica.",
  },
  {
    number: "03",
    title: "Loja Virtual",
    description:
      "Leve seus produtos para o ambiente digital com uma loja virtual profissional, organizada e preparada para receber pedidos.",
  },
  {
    number: "04",
    title: "Aplicativo Mobile",
    description:
      "Desenvolvimento de aplicativos mobile para Android e iOS com interface moderna e intuitiva.",
  },
];

export default function SobreBlackFriday() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Apresentação */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-purple-400">
              Black Friday Clintin dos Sites
            </span>

            <h2 className="title-purple text-4xl font-title font-bold leading-tight md:text-5xl">
              A oportunidade que faltava para colocar sua empresa na internet!
            </h2>

            <p className="text-xl font-semibold text-white md:text-2xl">
              Sua empresa merece uma presença digital profissional.
            </p>

            <p className="text-base leading-relaxed text-gray-400 md:text-lg">
              A Black Friday do Clintin dos Sites chegou para ajudar você a dar
              o próximo passo no crescimento do seu negócio. Aproveite condições
              especiais para desenvolver um site moderno, estratégico e
              totalmente responsivo, com um investimento muito menor.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-purple-600/20 blur-3xl" />

            <Image
              src="/sobre-black-friday.webp"
              alt="Black Friday Clintin dos Sites com condições especiais"
              width={700}
              height={500}
              priority={false}
              className="relative h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Serviços */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
              Soluções digitais
            </span>

            <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              O que podemos desenvolver para sua empresa?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Escolha a solução ideal para transformar sua presença digital e
              conquistar novas oportunidades.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4  justify-center">
            {services.map(service => (
              <article
                key={service.number}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:bg-purple-500/[0.06] md:p-8"
              >
                <span className="text-sm font-bold tracking-widest text-purple-400">
                  {service.number}
                </span>

                <h4 className="mt-5 text-2xl font-bold text-white transition-colors group-hover:text-purple-400">
                  {service.title}
                </h4>

                <div className="my-5 h-1 w-12 rounded-full bg-gradient-to-r from-purple-700 to-purple-400" />

                <p className="text-base leading-relaxed text-gray-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

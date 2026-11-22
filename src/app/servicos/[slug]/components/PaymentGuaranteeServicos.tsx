import {
  CreditCard,
  Code2,
  Headset,
  UserCheck,
  Check,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    icon: CreditCard,
    title: "Pagamento facilitado",
    description:
      "Pague via PIX, transferência ou cartão de crédito, com opções de parcelamento conforme o projeto.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento personalizado",
    description:
      "Seu projeto é desenvolvido com atenção às necessidades da sua empresa, sem depender de modelos genéricos.",
  },
  {
    icon: Headset,
    title: "Suporte após a entrega",
    description:
      "Orientações e suporte após a publicação, conforme as condições combinadas na contratação.",
  },
  {
    icon: UserCheck,
    title: "Atendimento direto",
    description:
      "Converse diretamente com o desenvolvedor responsável pelo seu projeto, sem intermediários.",
  },
];

export default function PaymentGuaranteeServicos() {
  return (
    <section className="relative overflow-hidden bg-[#09070f] px-5 py-24">
      {/* EFEITO DE FUNDO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-112.5 w-112.5 rounded-full bg-purple-700/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-300">
        {/* CABEÇALHO */}
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-400 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Segurança e confiança
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
            Seu projeto em <span className="title-purple">boas mãos.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            Desenvolvimento profissional, condições flexíveis e acompanhamento
            para você investir na presença digital da sua empresa com
            tranquilidade.
          </p>
        </header>

        {/* CARDS */}
        <div className="grid grid-cols-1 items-center  gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
          {benefits.map(benefit => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#15121e] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_15px_40px_rgba(127,61,255,0.12)] mx-auto"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <h3 className="mb-3 text-lg font-bold text-white">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-400">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* INFORMAÇÕES ADICIONAIS */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-purple-500/20 bg-[linear-gradient(120deg,#191126,#100d18)] p-7 md:flex-row md:p-9">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white md:text-2xl">
              Pronto para tirar seu projeto do papel?
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-400 md:text-base">
              Conte sua ideia e receba uma proposta personalizada para sua
              empresa.
            </p>

            <div className="mt-5 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 text-sm text-gray-300">
                <Check size={17} className="text-purple-400" />
                Orçamento personalizado
              </span>

              <span className="inline-flex items-center gap-2 text-sm text-gray-300">
                <Check size={17} className="text-purple-400" />
                Atendimento especializado
              </span>
            </div>
          </div>

          <a
            href="#checkout"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#4b1fb8] via-[#7f3dff] to-[#9b6cff] px-7 py-4 text-center text-sm font-bold uppercase text-white transition-all duration-300 hover:scale-105"
          >
            Solicitar orçamento
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

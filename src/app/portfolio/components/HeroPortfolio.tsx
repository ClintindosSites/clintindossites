import Link from "next/link";

export default function PortfolioHero() {
  return (
    <section className="px-5 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-7 text-center">
        <span className="rounded-full border border-[#7f3dff]/30 bg-[#7f3dff]/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#b794ff]">
          Portfólio Clintin dos Sites
        </span>

        <h1 className="title-purple text-4xl font-extrabold leading-tight md:text-6xl">
          Projetos digitais desenvolvidos para transformar negócios
        </h1>

        <p className="max-w-3xl text-base leading-relaxed text-zinc-400 md:text-xl">
          Conheça websites, landing pages, aplicações e estratégias digitais
          desenvolvidas para empresas que desejam crescer e conquistar seu
          espaço na internet.
        </p>

        <Link
          href="https://wa.me/5531984362710"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button whatsapp-track"
        >
          Quero desenvolver meu projeto
        </Link>
      </div>
    </section>
  );
}

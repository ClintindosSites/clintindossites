import Link from "next/link";

export default function Oferta() {
  return (
    <section id="oferta" className="py-24 px-5">
      <div className="max-w-[1100px] mx-auto">
        <div
          className="
          text-center flex flex-col items-center gap-[10px]
          p-[20px] md:p-12
          rounded-[20px]
          border border-[#7f3dff40]
          bg-gradient-to-b from-[#12121a] to-[#0b0b0f]
        "
        >
          {/* BADGE */}
          <span
            className="
            p-[10px] text-sm rounded-full
            border border-[#7f3dff60]
            bg-[#7f3dff20]
            text-zinc-200
            uppercase tracking-wider
          "
          >
            OFERTA LIMITADA ATÉ O DIA 31/07
          </span>

          {/* TÍTULO */}
          <h2 className="text-metal text-3xl md:text-4xl max-w-3xl mb-[20px]">
            Está precisando de um site profissional sob medida?
          </h2>

          {/* SUBTÍTULO */}
          <p className="text-zinc-400 max-w-2xl mb-[10px]">
            O Clintin dos Sites desenvolve sites profissionais com páginas
            rápidas, responsivas e com layout moderno e exclusivo com foco em
            resultados e está com uma promoção de Site Institucional por apenas
            R$997 para pagamentos à vista valendo até dia 31/07/2026.
          </p>

          {/* ALERTA */}
          <p className="uppercase text-sm text-zinc-300 tracking-wide mb-[20px]">
            Quer aproveitar a promoção de site profissional por apenas R$997?
            <br />
            Clique em saiba mais para mais informações
          </p>

          {/* BOTÃO */}
          <Link
            href="/servicos/criacao-de-sites#checkout"
            className="cta-button mt-2"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}

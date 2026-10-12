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
            p-[5px] text-sm rounded-full
            border border-[#7f3dff60]
            bg-[#7f3dff20]
            text-zinc-200
            uppercase tracking-wider
          "
          >
            Faça seu pedido direto com o desenvolvedor
          </span>

          {/* TÍTULO */}
          <h2 className="text-metal text-3xl md:text-4xl max-w-3xl mb-[20px]"></h2>

          {/* SUBTÍTULO */}
          <p className="text-zinc-400 max-w-2xl mb-[10px]">
            Precisa de um Site profissional ou até mesmo um sistema web sob
            medida? Clique no botão abaixo e envie uma mensagem direto par ao
            desenvolvedor.
          </p>
          <Link
            href={"https://wa.me/5531984362710"}
            className="cta-button"
            id="oferta-checkout-1"
          >
            Envie seu projeto direto para o desenvolvedor
          </Link>
          {/* ALERTA */}
          <p className="text-sm text-zinc-300 tracking-wide mb-[20px] mt-[20px]">
            Aproveite a nossa oferta especial de site profisional por apenas{" "}
            <br />
            <strong className="strong-oferta"> R$997</strong>
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

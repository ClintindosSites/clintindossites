import Link from "next/link";

export default function Servicos() {
  const servicos = [
    {
      id: "sites-profissionais",
      titulo: "Criação de Sites Profissionais",
      descricao:
        "Sites modernos, rápidos e responsivos, pensados para posicionar sua marca e gerar credibilidade. Websites a partir de R$1.497.",
      link: "/servicos/criacao-de-sites",
    },
    {
      id: "landing-page",
      titulo: "Criação de Landing Page Profissional",
      descricao:
        "Páginas focadas em conversão, ideais para anúncios e captação de leads qualificados. Landing Pages a partir de R$997.",
      link: "/servicos/criacao-landing-page",
    },
    {
      id: "ecommerce",
      titulo: "Loja Virtual Profissional ",
      descricao:
        "Lojas virtuais completas, rápidas e seguras, prontas para vender. E-commerce a partir de R$ R$2.997",
      link: "/servicos/criacao-loja-virtual",
    },
    {
      id: "sistemas-web",
      titulo: "Desenvolvimento de Sistemas Web",
      descricao:
        "Sistemas e aplicações sob medida para automatizar processos e escalar operações. Desenvolvimento de Sistema WEB a partir de R$3.997.",
      link: "/servicos/sistema-web-personalizado",
    },

    {
      id: "aplicativos-android-ios",
      titulo: "Desenvolvimento de App para  Android e IOS",
      descricao:
        "Criação de aplicativos para dispositivos móveis android a partir de R$4.997.",
      link: "/servicos/desenvolvimento-mobile",
    },

    {
      id: "manutencao-seo",
      titulo: "Manutenção em sites e sistemas",
      descricao:
        "Correção de bugs, falhas, layout quebrado, funções e otimizações no seu site. Hora técnica a partir de R$80,00",
      mensagem:
        "Olá, tenho interesse em automações e integrações. Pode me explicar melhor?",
      link: "/servicos/manutencao-sites-e-sistemas",
    },
    {
      id: "manutencao-computadores",
      titulo: "Manutenção de computador e servidor",
      descricao:
        "Manutenção e formatação em servidores, computadores e notebooks. Clique em saiba mais e confira a área de atendimento.",
      link: "/servicos/manutencao-computadores-servidores",
    },
  ];

  return (
    <section id="servicos" className="py-24 text-center">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-metal text-4xl md:text-5xl font-extrabold">
          Soluções digitais completas para atrair, converter e escalar seu
          negócio.
        </h2>

        <p className="text-[#bdbdbd] mt-3 mb-[60px] text-[16px] max-w-2xl mx-auto">
          Confira os serviços digitais ofertados pelo Clintin dos Sites e o que
          de melhor ele pode fazer para você ou sua empresa:
        </p>

        <div className="grid gap-[1.3rem] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {servicos.map((item, index) => {
            return (
              <div
                key={index}
                id={item.id}
                className="rounded-[20px] p-[20px] border transition duration-300 hover:-translate-y-[6px] bg-[linear-gradient(180deg,rgba(18,18,26,0.95),rgba(11,11,15,0.95))] border-[rgba(127,61,255,0.25)] hover:shadow-[0_0_40px_rgba(127,61,255,0.4)] justify-center flex flex-col items-center"
              >
                <h3 className="text-metal text-[20px] mb-[14px] font-bold">
                  {item.titulo}
                </h3>

                <p className="text-[#cfcfcf] text-[15px] leading-relaxed mb-4">
                  {item.descricao}
                </p>

                <Link
                  href={item.link}
                  className="cta-button whatsapp-track mx-auto mt-[20px]"
                >
                  Saiba mais
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

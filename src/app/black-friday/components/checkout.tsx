"use client";

const WHATSAPP = "5531984362710";

const offers = [
  {
    id: "institucional",
    name: "Site Institucional",
    subtitle: "Sua empresa com presença profissional na internet.",
    oldPrice: "R$ 1.497",
    price: "R$ 997",
    discount: "33% OFF",
    highlight: true,
    features: [
      "Até 5 páginas personalizadas",
      "Design moderno e exclusivo",
      "Layout responsivo",
      "Apresentação de serviços e empresa",
      "Botão de WhatsApp",
      "Formulário de contato",
      "SEO técnico básico",
      "Integração com Google Analytics",
    ],
    message:
      "Olá! Vim pela Black Friday do Clintin dos Sites e tenho interesse no SITE INSTITUCIONAL por R$ 997. Gostaria de saber mais sobre o projeto e as condições de contratação.",
    button: "QUERO MEU SITE",
  },
  {
    id: "landing",
    name: "Landing Page",
    subtitle: "Uma página estratégica para conquistar clientes.",
    oldPrice: "R$ 985",
    price: "R$ 497",
    discount: "49% OFF",
    highlight: false,
    features: [
      "Página única personalizada",
      "Design moderno e exclusivo",
      "Layout responsivo",
      "Estrutura estratégica de conversão",
      "Botões de WhatsApp",
      "Formulário de captação",
      "SEO técnico básico",
      "Integração com ferramentas de análise",
    ],
    message:
      "Olá! Vim pela Black Friday do Clintin dos Sites e tenho interesse na LANDING PAGE por R$ 497. Gostaria de saber mais sobre o projeto e as condições de contratação.",
    button: "QUERO MINHA LANDING PAGE",
  },
  {
    id: "ecommerce",
    name: "Loja Virtual",
    subtitle: "Venda seus produtos pela internet.",
    oldPrice: "R$ 2.997",
    price: "R$ 1.997",
    discount: "33% OFF",
    highlight: false,
    features: [
      "Loja virtual personalizada",
      "Design moderno e exclusivo",
      "Layout responsivo",
      "Cadastro inicial de até 20 produtos",
      "Categorias de produtos",
      "Carrinho de compras",
      "Integração com meio de pagamento",
      "Gestão de pedidos",
    ],
    message:
      "Olá! Vim pela Black Friday do Clintin dos Sites e tenho interesse na LOJA VIRTUAL por R$ 1.997. Gostaria de saber mais sobre o projeto e as condições de contratação.",
    button: "QUERO MINHA LOJA VIRTUAL",
  },

  {
    id: "aplicativo",
    name: "Aplicativo Mobile",
    subtitle: "Sua empresa na palma da mão dos seus clientes.",
    oldPrice: "",
    price: "Sob consulta",
    discount: "OFERTA BLACK FRIDAY",
    highlight: false,
    features: [
      "Desenvolvimento personalizado",
      "Aplicativos Android e iOS",
      "Interface moderna e intuitiva",
      "Integração com banco de dados",
      "Integração com APIs e serviços externos",
      "Autenticação e cadastro de usuários",
      "Funcionalidades sob medida",
      "Preparação para publicação nas lojas",
    ],
    message:
      "Olá! Vim pela Black Friday do Clintin dos Sites e tenho interesse em desenvolver um APLICATIVO MOBILE para minha empresa. Gostaria de conhecer as condições especiais e solicitar um orçamento.",
    button: "SOLICITAR ORÇAMENTO",
  },
];

function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export default function CheckoutBlackFriday() {
  return (
    <section
      id="ofertas"
      className="relative overflow-hidden bg-[#09070f] px-5 py-24"
    >
      {/* EFEITOS DE FUNDO */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-purple-700/10 blur-[130px]" />

      <div className="relative z-10 max-w-300 mx-auto">
        {/* CABEÇALHO */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-purple-400">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            Ofertas especiais de Black Friday
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-7">
            Escolha seu próximo{" "}
            <span className="title-purple">projeto digital!</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-5 leading-relaxed">
            Desenvolva sua presença digital com condições especiais. Escolha a
            solução ideal para seu negócio e aproveite nossos descontos de Black
            Friday.
          </p>
        </header>

        {/* CARDS DE OFERTAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-7 items-stretch">
          {offers.map(offer => (
            <article
              key={offer.id}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-2 ${
                offer.highlight
                  ? "border-purple-500 bg-[#191126] shadow-[0_0_40px_rgba(127,61,255,0.15)]"
                  : "border-white/10 bg-[#12101a] hover:border-purple-500/50"
              }`}
            >
              {/* DESTAQUE */}
              {offer.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-linear-to-r from-[#4b1fb8] to-[#9b6cff] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-purple-700/30">
                  Mais procurado
                </span>
              )}

              {/* NOME */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">{offer.name}</h3>

                <p className="text-sm text-gray-400 mt-2 min-h-10">
                  {offer.subtitle}
                </p>
              </div>

              {/* PREÇO */}
              <div className="border-b border-white/10 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-gray-500 line-through">
                    {offer.oldPrice}
                  </span>

                  <span className="rounded-md bg-green-500/10 px-2 py-1 text-xs font-bold text-green-400">
                    {offer.discount}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-400">Por apenas</span>

                  <strong className="text-4xl font-extrabold tracking-tight text-white">
                    {offer.price}
                  </strong>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Condição promocional de Black Friday.
                </p>
              </div>

              {/* ENTREGÁVEIS */}
              <div className="flex-1">
                <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">
                  O que você vai receber:
                </h4>

                <ul className="flex flex-col gap-4">
                  {offer.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-purple-400">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m5 12 4 4L19 6" />
                        </svg>
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href={getWhatsAppLink(offer.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-9 flex min-h-14 items-center justify-center gap-2 rounded-full px-5 py-4 text-center text-sm font-bold uppercase transition-all duration-300 hover:scale-[1.03] ${
                  offer.highlight
                    ? "bg-linear-to-r from-[#4b1fb8] via-[#7f3dff] to-[#9b6cff] text-white shadow-lg shadow-purple-700/20"
                    : "border border-purple-500/50 bg-purple-500/10 text-purple-300 hover:bg-purple-600 hover:text-white"
                }`}
              >
                {offer.button}

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* RODAPÉ */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 text-sm leading-relaxed">
            Não sabe qual solução escolher?
            <br />
            Fale com nossa equipe e descubra a melhor opção para o seu negócio.
          </p>

          <a
            href={getWhatsAppLink(
              "Olá! Vim pela Black Friday da Clintin dos Sites e gostaria de ajuda para escolher a melhor solução para minha empresa."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#4b1fb8] via-[#7f3dff] to-[#9b6cff] px-8 py-4 font-bold text-white uppercase transition-transform hover:scale-105 my-10"
          >
            Falar com um especialista
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

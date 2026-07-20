import {
  CreditCard,
  QrCode,
  Landmark,
  BadgeDollarSign,
  Code2,
  Rocket,
  Search,
  Smartphone,
  Headphones,
  UserCheck,
} from "lucide-react";
import Image from "next/image";

export default function PaymentGuaranteeServicos() {
  return (
    <section className="max-w-[1200px] mx-auto py-24 px-6">
      <div className="text-center mb-14 flex flex-col gap-[1rem] mb-[1.5rem]">
        <h2 className="text-metal text-4xl md:text-5xl font-extrabold">
          Pagamento Facilitado e Desenvolvimento Profissional
        </h2>

        <p className="text-[#bdbdbd] mt-4 max-w-3xl mx-auto">
          Trabalhamos com diversas formas de pagamento e desenvolvemos cada
          projeto utilizando tecnologias modernas para entregar velocidade,
          segurança e resultados para sua empresa.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-[1rem]">
        {/* PAGAMENTO */}

        <div className="rounded-3xl border border-purple-500/20 rounded-[20px] bg-[#0f0f15] p-[20px] flex flex-col gap-[20px]">
          <h3 className="text-2xl font-bold mb-8 ">💳 Formas de Pagamento</h3>

          <div className="space-y-7 flex flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <CreditCard className="text-purple-400 shrink-0" size={30} />

              <div>
                <h4 className="font-semibold">Cartão de Crédito</h4>

                <p className="text-[#bdbdbd] text-sm">
                  Parcelamento disponível conforme o valor do projeto.
                </p>
              </div>
            </div>

            <div className="flex gap-[10px]">
              <QrCode className="text-purple-400 shrink-0" size={30} />

              <div>
                <h4 className="font-semibold">PIX</h4>

                <p className="text-[#bdbdbd] text-sm">
                  Pagamento rápido com confirmação imediata.
                </p>
              </div>
            </div>

            <div className="flex gap-[10px]">
              <Landmark className="text-purple-400 shrink-0" size={30} />

              <div>
                <h4 className="font-semibold">Transferência Bancária</h4>

                <p className="text-[#bdbdbd] text-sm">
                  Pagamento por TED ou transferência entre bancos.
                </p>
              </div>
            </div>

            <div className="flex gap-[10px]">
              <BadgeDollarSign className="text-purple-400 shrink-0" size={30} />

              <div>
                <h4 className="font-semibold">Condições Personalizadas</h4>

                <p className="text-[#bdbdbd] text-sm">
                  Dependendo do projeto é possível negociar uma condição de
                  pagamento sob medida.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GARANTIAS */}

        <div className="rounded-3xl border border-purple-500/20 bg-[#0f0f15] p-[20px] rounded-[20px] flex flex-col gap-[20px]">
          <h3 className="text-2xl font-bold mb-8">
            🛡️ Por que contratar o Clintin dos Sites?
          </h3>

          <div className="flex flex-col md:flex-row gap-8 garantia-box">
            <div className="space-y-6 flex flex-col gap-[10px] w-full lg:w-2/3">
              <div className="flex gap-[10px]">
                <Code2 className="text-purple-400 shrink-0" size={30} />

                <div>
                  <h4 className="font-semibold">
                    Desenvolvimento Profissional
                  </h4>

                  <p className="text-[#bdbdbd] text-sm">
                    Projetos desenvolvidos do zero, sem depender de templates
                    prontos.
                  </p>
                </div>
              </div>

              <div className="flex gap-[10px]">
                <Rocket className="text-purple-400 shrink-0" size={30} />

                <div>
                  <h4 className="font-semibold">Alta Performance</h4>

                  <p className="text-[#bdbdbd] text-sm">
                    Sites rápidos, leves e preparados para suportar crescimento.
                  </p>
                </div>
              </div>

              <div className="flex gap-[10px]">
                <Search className="text-purple-400 shrink-0" size={30} />

                <div>
                  <h4 className="font-semibold">SEO Otimizado</h4>

                  <p className="text-[#bdbdbd] text-sm">
                    Estrutura preparada para facilitar o posicionamento no
                    Google.
                  </p>
                </div>
              </div>

              <div className="flex gap-[10px]">
                <Smartphone className="text-purple-400 shrink-0" size={30} />

                <div>
                  <h4 className="font-semibold">Responsivo</h4>

                  <p className="text-[#bdbdbd] text-sm">
                    Funciona perfeitamente em celulares, tablets e computadores.
                  </p>
                </div>
              </div>

              <div className="flex gap-[10px]">
                <Headphones className="text-purple-400 shrink-0" size={30} />

                <div>
                  <h4 className="font-semibold">Suporte Pós-Entrega</h4>

                  <p className="text-[#bdbdbd] text-sm">
                    Você continua tendo suporte após a publicação do projeto.
                  </p>
                </div>
              </div>

              <div className="flex gap-[10px]">
                <UserCheck className="text-purple-400 shrink-0" size={30} />

                <div>
                  <h4 className="font-semibold">
                    Atendimento Direto com o Desenvolvedor
                  </h4>

                  <p className="text-[#bdbdbd] text-sm">
                    Sem intermediários. Você conversa diretamente com quem
                    desenvolve seu projeto.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center items-center">
              <Image
                src={"/selo-garantia.webp"}
                alt="Selo de garantia e qualidade "
                width={300}
                height={300}
                className="max-w-[220px] md:max-w-[260px] lg:max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

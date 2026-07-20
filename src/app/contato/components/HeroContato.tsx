"use client";
import { FormSection } from "@/types/service";
import CtaButton from "@/components/CTAButton";
import HeroForm from "@/components/HeroForm";

const contatoForm: FormSection = {
  title: "Solicite um orçamento",

  subtitle:
    "Preencha o formulário e receba um orçamento personalizado pelo WhatsApp.",

  button: "Enviar para WhatsApp",

  whatsappMessage: "📩 *Novo orçamento pelo site*",

  servicos: [
    "Criação de Sites",
    "Landing Page",
    "Loja Virtual",
    "Aplicativo Mobile",
    "Sistema Web Personalizado",
  ],

  orcamentos: [
    "Até R$ 1.000",
    "R$ 1.000 a R$ 3.000",
    "R$ 3.000 a R$ 5.000",
    "Acima de R$ 5.000",
  ],
};
export default function HeroContato() {
  return (
    <section className="max-w-[1200px] mx-auto p-10">
      <div className="hero flex-col gap-8 justify-center items-center text-center">
        <div className="heroText flex flex-col gap-8 flex-1">
          <h1 className="text-4xl font-title">
            Criamos sites que geram clientes todos os dias
          </h1>

          <p className="text-lg text-gray-300">
            Precisando de criar um site para sua empresa ou até mesmo procurando
            por consultoria em Tráfego Pago para aumentar suas vendas?
          </p>

          <CtaButton href="https://wa.me/5531984362710?text=Quero%20realizar%20um%20orçamento">
            Orçamento no Whatsapp
            <span className="icon icon-whatsapp whatsapp-track" />
          </CtaButton>
        </div>

        <div className="flex-1 justify-center items-center mx-auto">
          <HeroForm form={contatoForm} />
        </div>
      </div>
    </section>
  );
}

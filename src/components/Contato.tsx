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
    <section className="hero relative mx-auto min-h-screen p-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.78)_40%,rgba(0,0,0,0.35)_100%),linear-gradient(0deg,rgba(0,0,0,0.65)_0%,transparent_45%,rgba(0,0,0,0.2)_100%),url('/hero.webp')] bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <div className=" max-w-[1200px] flex gap-8 justify-center items-center text-center">
        <div className="heroText text-left flex flex-col gap-8 flex-1">
          <h1 className="text-4xl font-title">
            Desenvolvo soluções digitais completas para seu problema digital
          </h1>

          <p className="text-lg text-gray-300">
            Precisando de um programador experiente para desenvolver um projeto
            web ou mobile? Clique enviar mensagem no WhatsApp ou envia uma
            mensagem pelo formulário de contato.
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

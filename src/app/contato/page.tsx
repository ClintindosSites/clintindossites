import HeroForm from "@/components/HeroForm";
import { FormSection } from "@/types/service";

const contatoForm: FormSection = {
  title: "Entre em contato",

  subtitle: "Preencha o formulário e receba um orçamento personalizado.",

  button: "Enviar para WhatsApp",

  whatsappMessage: "📩 *Novo contato pelo site*",

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
    <section>
      <HeroForm form={contatoForm} />
    </section>
  );
}

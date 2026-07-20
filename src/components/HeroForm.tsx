"use client";

import { reportConversion } from "@/lib/tracking";
import { useState } from "react";
import { FormSection } from "@/types/service";

interface HeroFormProps {
  form: FormSection;
}

export default function HeroForm({ form }: HeroFormProps) {
  const [dados, setDados] = useState({
    nome: "",
    servico: "",
    orcamento: "",
    endereco: "",
    mensagem: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const texto = `
${form.whatsappMessage}

 *Nome:* ${dados.nome}
 *Serviço:* ${dados.servico}
 *Orçamento:* ${dados.orcamento}
 *Cidade:* ${dados.endereco}
 *Projeto:* ${dados.mensagem}
`.trim();

    const url = `https://wa.me/5531984362710?text=${encodeURIComponent(texto)}`;

    // GOOGLE ADS
    window.gtag?.("event", "conversion", {
      send_to: "AW-17677408224/8Zy7CLmXj5ocEOCvn-1B",
      value: 1.0,
      currency: "BRL",
    });

    // META PIXEL
    window.fbq?.("track", "Lead");

    // Delay para garantir tracking antes de abrir whatsapp
    setTimeout(() => {
      window.open(url, "_blank");
    }, 300);
  }

  return (
    <form onSubmit={handleSubmit} className="form-whatsapp">
      <h2>{form.title}</h2>
      <p>{form.subtitle}</p>

      <div>
        <label>Nome</label>
        <input
          name="nome"
          value={dados.nome}
          required
          placeholder="Seu nome"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Serviço desejado</label>
        <select
          name="servico"
          value={dados.servico}
          required
          defaultValue=""
          onChange={handleChange}
        >
          <option value="" disabled>
            Selecione
          </option>

          {form.servicos.map(servico => (
            <option key={servico} value={servico}>
              {servico}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Orçamento estimado</label>
        <select
          name="orcamento"
          value={dados.orcamento}
          required
          onChange={handleChange}
        >
          {form.orcamentos.map(orcamento => (
            <option key={orcamento} value={orcamento}>
              {orcamento}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Cidade / Estado</label>
        <input
          name="endereco"
          value={dados.endereco}
          placeholder="Ex: Belo Horizonte - MG"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Mensagem</label>
        <textarea
          className="resize-none"
          value={dados.mensagem}
          name="mensagem"
          rows={4}
          placeholder="Descreva seu projeto"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="" onClick={() => reportConversion()}>
        {form.button}
      </button>
    </form>
  );
}

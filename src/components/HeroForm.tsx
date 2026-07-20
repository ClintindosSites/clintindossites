"use client";

import { reportConversion, trackEvent } from "@/lib/tracking";
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

👤 Nome: ${dados.nome}
💼 Serviço: ${dados.servico}
💰 Orçamento: ${dados.orcamento}
📍 Cidade: ${dados.endereco}
📝 Projeto: ${dados.mensagem}
`.trim();

    const url = `https://wa.me/5531984362710?text=${encodeURIComponent(texto)}`;

    reportConversion({
      url,
      service: dados.servico,
      origin: "Hero Form",
      value: 1,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="form-whatsapp">
      <h2>{form.title}</h2>
      <p>{form.subtitle}</p>

      <div>
        <label>Nome</label>
        <input
          name="nome"
          onFocus={() =>
            trackEvent("StartForm", {
              origin: "Hero Form",
            })
          }
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
          onChange={e => {
            handleChange(e);

            trackEvent("SelectService", {
              service: e.target.value,
            });
          }}
          value={dados.servico}
          required
          defaultValue=""
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

      <button type="submit" className="cta-button">
        {form.button}
      </button>
    </form>
  );
}

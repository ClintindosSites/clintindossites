import { Metadata } from "next";

import HeroManutencaoPC from "./components/HeroManutencaoPC";
import ManutencaoNotebook from "./components/ManutencaoNotebook";
import ManutencaoPC from "./components/ManutencaoPC";
import ServicosPC from "./components/ServicosPC";
import FormatacaoProfissional from "./components/FormatacaoProfissional";
import ComboFormatacaoExpert from "./components/ComboFormatacaoProfissional";

import LocalizacaoAtendimento from "./components/LocalizacaoAtendimento";

import FAQManutencao from "./components/FAQManutencao";
import CtaFinalManutencao from "./components/CtaManutencao";

import ComoFuncionaAtendimento from "./components/ComoFunciona";

export const metadata: Metadata = {
  title: "Manutenção em Computadores em Belo Horizonte",
  description:
    "Seu computador estragou? Clintin dos Sites consertou! Assistência técnica de computadores e Notebooks em Belo Horizonte com atendimento a domícilio",
  keywords:
    "manutenção de computador, formatação de computador em bh, assistência técnica de computador em belo horizonte, orçamento manutenção de computadores",
};

export default function ManutencaoComputador() {
  return (
    <div
      className="
        relative

        /* MOBILE */
        bg-[linear-gradient(to_bottom,rgba(0,0,0,50),rgba(127,61,255,0.30),rgba(0,0,0,50)),url('/assets/manutencao-pc.png')]
        bg-cover
        bg-center
        bg-no-repeat
        bg-fixed
        flex
        flex-col
        justify-center
        /* DESKTOP */
        md:bg-none
      "
    >
      <div className="relative z-10">
        <HeroManutencaoPC />
        <ServicosPC />
        <FormatacaoProfissional />
        <ComboFormatacaoExpert />
        <ManutencaoPC />
        <ManutencaoNotebook />

        <ComoFuncionaAtendimento />
        <LocalizacaoAtendimento />
        <FAQManutencao />
        <CtaFinalManutencao />
      </div>
    </div>
  );
}

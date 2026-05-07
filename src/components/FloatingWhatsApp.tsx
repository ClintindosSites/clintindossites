"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import Image from "next/image";

import { reportConversion } from "@/lib/gtag";

export default function FloatingWhatsApp() {
  const pathname = usePathname();

  const pageConfig: Record<
    string,
    {
      mensagem: string;
      evento: string;
      servico: string;
    }
  > = {
    "/": {
      mensagem: "Olá, gostaria de solicitar um orçamento para criação de site.",
      evento: "click_whatsapp_home",
      servico: "Criação de Sites",
    },
    "/contato": {
      mensagem: "Olá, gostaria de solicitar um orçamento para criação de site.",
      evento: "click_whatsapp_contato",
      servico: "Criação de Sites",
    },
    "/blog": {
      mensagem: "Olá, gostaria de solicitar um orçamento para criação de site.",
      evento: "click_whatsapp_blog",
      servico: "Criação de Sites",
    },
    "/portfolio": {
      mensagem: "Olá, gostaria de solicitar um orçamento para criação de site.",
      evento: "click_whatsapp_portfolio",
      servico: "Criação de Sites",
    },
    "/manutencao-computadores-bh-contagem": {
      mensagem:
        "Olá, gostaria de solicitar um orçamento para manutenção do meu computador ou notebook.",
      evento: "click_whatsapp_manutencao_pc",
      servico: "Manutenção de Computadores",
    },

    "/trafego-pago": {
      mensagem:
        "Olá, gostaria de contratar gestão de tráfego para minha empresa.",
      evento: "click_whatsapp_trafego_pago",
      servico: "Tráfego Pago",
    },

    "/sitesparaconstrutores": {
      mensagem:
        "Olá, gostaria de solicitar um orçamento para criação de site profissional.",
      evento: "click_whatsapp_sitesparaconstrutores",
      servico: "Sites para Construtores",
    },
  };

  const currentPage = pageConfig[pathname] || {
    mensagem: "Olá, gostaria de mais informações.",
    evento: "click_whatsapp_default",
    servico: "Site",
  };

  const whatsappUrl = `https://wa.me/5538991369873?text=${encodeURIComponent(
    currentPage.mensagem
  )}`;

  const handleClick = () => {
    // GOOGLE ADS
    reportConversion();

    // GA4
    window.gtag?.("event", currentPage.evento, {
      event_category: "WhatsApp",
      event_label: currentPage.servico,
      value: 1,
    });

    // META PIXEL
    window.fbq?.("track", "Contact");

    window.fbq?.("trackCustom", "WhatsAppClick", {
      service: currentPage.servico,
      page: pathname,
      button: "FloatingButton",
    });
  };

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      onClick={handleClick}
      aria-label="WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-[9999]
        flex
        items-center
        justify-center
        w-[65px]
        h-[65px]
        rounded-full
        bg-green-500
        shadow-[0_0_30px_rgba(34,197,94,0.5)]
        hover:scale-110
        transition-all
        duration-300
      "
    >
      {" "}
      <Image
        src="/assets/icons/whatssapp-2.svg"
        alt="botão do whatsapp"
        width={60}
        height={60}
      />
    </Link>
  );
}

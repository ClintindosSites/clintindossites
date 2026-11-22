"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import { reportConversion } from "@/lib/tracking";

const whatsappUrl = "https://wa.me/5531984362710";

const services = [
  {
    title: "Criação de Sites",
    href: "/servicos/criacao-de-sites",
  },
  {
    title: "Landing Pages",
    href: "/servicos/criacao-landing-page",
  },
  {
    title: "Lojas Virtuais",
    href: "/servicos/criacao-loja-virtual",
  },
  {
    title: "Sistemas Web",
    href: "/servicos/sistema-web-personalizado",
  },
  {
    title: "Aplicativos Mobile",
    href: "/servicos/desenvolvimento-mobile",
  },
  {
    title: "Manutenção de Sites",
    href: "/servicos/manutencao-sites-e-sistemas",
  },
  {
    title: "Manutenção de Computadores",
    href: "/servicos/manutencao-computadores-servidores",
  },
];

const navigation = [
  { title: "Portfólio", href: "/portfolio" },
  { title: "Contato", href: "/contato" },
  {
    title: "Política de Privacidade",
    href: "/politica-de-privacidade",
  },
  { title: "Termos de Uso", href: "/termos-de-uso" },
  {
    title: "Política de Cookies",
    href: "/politica-de-cookies",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ClintindosSites",
    icon: FaGithub,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61576133499522",
    icon: FaFacebookF,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/clintindos-sites/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/clintindossites",
    icon: FaInstagram,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleWhatsApp = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    reportConversion({
      url: whatsappUrl,
      service: "Footer",
      origin: "Footer WhatsApp",
      value: 1,
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09070f] text-white">
      {/* EFEITO DE LUZ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-100 w-175 max-w-full -translate-x-1/2 rounded-full bg-purple-700/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-300 px-5 sm:px-6">
        {/* CTA SUPERIOR */}
        <div className="pt-12 md:pt-16">
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/25 bg-[#15101f] p-6 sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-purple-600/15 blur-3xl"
            />

            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
                  <span className="h-2 w-2 rounded-full bg-purple-500" />
                  Vamos conversar?
                </span>

                <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                  Seu próximo projeto começa{" "}
                  <span className="bg-linear-to-r from-[#9b6cff] to-[#d8c1ff] bg-clip-text text-transparent">
                    com uma conversa.
                  </span>
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
                  Precisa de um site, aplicativo ou sistema web? Conte sua ideia
                  e receba uma proposta personalizada para seu negócio.
                </p>
              </div>

              <a
                href={whatsappUrl}
                onClick={handleWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#4b1fb8] via-[#7f3dff] to-[#9b6cff] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-700/30 sm:w-auto"
              >
                <MessageCircle size={20} />
                Solicitar orçamento
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8 lg:py-16">
          {/* MARCA */}
          <div className="space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Clintin dos Sites - Página inicial"
            >
              <Image
                src="/logo.svg"
                alt=""
                width={72}
                height={72}
                className="h-16 w-auto object-contain"
              />

              <span className="text-xl font-extrabold tracking-tight text-white">
                Clintin <span className="text-purple-400">dos Sites</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              Desenvolvimento de sites, landing pages, lojas virtuais,
              aplicativos e sistemas web personalizados para empresas que querem
              fortalecer sua presença digital.
            </p>

            <div className="flex items-start gap-2 text-sm leading-relaxed text-gray-400">
              <MapPin size={18} className="mt-0.5 shrink-0 text-purple-400" />
              <span>
                Atendimento online em todo o Brasil e presencial na Grande Belo
                Horizonte.
              </span>
            </div>
          </div>

          {/* SERVIÇOS */}
          <nav aria-label="Serviços">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Nossos serviços
            </h3>

            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-purple-300"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 shrink-0 rounded-full bg-purple-500/60 transition-all group-hover:bg-purple-400"
                    />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* LINKS */}
          <nav aria-label="Navegação e informações">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Links úteis
            </h3>

            <ul className="space-y-3">
              {navigation.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-purple-300"
                  >
                    <ArrowRight
                      size={14}
                      className="shrink-0 text-purple-500/70 transition-transform group-hover:translate-x-1"
                    />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTATO E REDES SOCIAIS */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Entre em contato
            </h3>

            <a
              href={whatsappUrl}
              onClick={handleWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-purple-300"
            >
              <MessageCircle size={19} className="shrink-0 text-purple-400" />
              WhatsApp
            </a>

            <a
              href="mailto:clintindossites@gmail.com"
              className="mb-6 flex items-center gap-3 break-all text-sm text-gray-400 transition-colors hover:text-purple-300"
            >
              <Mail size={19} className="shrink-0 text-purple-400" />
              clintindossites@gmail.com
            </a>

            <h4 className="mb-3 text-sm font-semibold text-white">
              Acompanhe nas redes
            </h4>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map(social => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/15 hover:text-purple-300"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* RODAPÉ INFERIOR */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
            © {year} Clintin dos Sites. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-500 sm:text-sm">
            <Code2 size={16} className="text-purple-400" />
            <span>Desenvolvido com dedicação e código.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

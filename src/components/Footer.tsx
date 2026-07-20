"use client";

import { reportConversion } from "@/lib/tracking";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container p-[0px] ">
        <div className="footer-top ">
          <div className="footer-brand">
            <h3 className="text-metal">Clintin dos Sites</h3>

            <p>
              Programador Full Stack com experiência em criação de sites,
              landing pages, loja virtual, aplicativos mobile e sistemas web
              personalizado. Programado para tirar o seu projeto do papel!
            </p>

            <span className="global-badge">
              Atendimento online no Brasil inteiro e atendimento presencial na
              Grande BH
            </span>
          </div>
          <div>
            <Image
              src="/logo.svg"
              alt="Clintin dos Sites"
              width={160}
              height={100}
            />
          </div>
          <div className="footer-links">
            <h4>Links rápidos</h4>
            <Link href="/servicos/criacao-de-sites">Criação de sites</Link>
            <Link href={"/servicos/criacao-landing-page"}>Landing Page</Link>
            <Link href={"/servicos/criacao-loja-virtual"}>Loja Virtual</Link>
            <Link href={"/servicos/sistema-web-personalizado"}>
              Sistema Web
            </Link>
            <Link href={"/servicos/desenvolvimento-mobile"}>App Mobile</Link>
            <Link href={"/servicos/manutencao-sites-e-sistemas"}>
              Manutenção em sites e sistemas
            </Link>
            <Link href={"/servicos/manutencao-computadores-servidores"}>
              Manutenção de computadores
            </Link>
            <Link href="/portfolio">Portfólio</Link>

            <Link href="/contato">Contato</Link>
          </div>

          <div className="footer-social">
            <h4>Redes sociais</h4>

            <div className="social-icons">
              <a
                href="https://wa.me/5531984362710"
                onClick={() => reportConversion()}
              >
                <span></span>
              </a>

              <a href="https://github.com/ClintindosSites" target="_blank">
                <span className="icon icon-github"></span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61576133499522"
                target="_blank"
              >
                <span className="icon icon-facebook"></span>
              </a>

              <a
                href="https://www.linkedin.com/in/clintindos-sites/"
                target="_blank"
              >
                <span className="icon icon-linkedin"></span>
              </a>
              <a href="https://instagram.com/clintindossites" target="_blank">
                <span className="icon icon-instagram"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="policies-links">
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="/termos-de-uso">Termos de Uso</a>
          <a href="/politica-de-cookies">Política de Cookies</a>
          <a href="/contato">Contato</a>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Clintin dos Sites. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="container">
          {/* LOGO */}
          <a href="#" className="logo">
            <Image
              src="/logo.svg"
              alt="Clintin dos Sites"
              width={160}
              height={100}
            />
          </a>

          {/* MENU */}
          <nav className={`menu ${menuOpen ? "active" : "items-center"}`}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/servicos/criacao-de-sites" onClick={closeMenu}>
              Criação de Sites
            </Link>
            <Link href="/servicos/criacao-landing-page" onClick={closeMenu}>
              Criação de Landing Page
            </Link>
            <Link href="/servicos/criacao-loja-virtual" onClick={closeMenu}>
              Criação de Loja Virtual
            </Link>

            <Link
              href="/servicos/desenvolvimento-app-android-ios"
              onClick={closeMenu}
            >
              Desenvolvimento App Mobile
            </Link>

            <Link href="/portfolio" onClick={closeMenu}>
              Portfólio
            </Link>

            <Link href="/contato" onClick={closeMenu}>
              Contato
            </Link>
            {/*
            <Link
              href="/servicos/desenvolvimento-sistema-web-personalizado"
              onClick={closeMenu}
            >
              Sistemas Web Personalizado
            </Link>
            <Link
              href="/servicos/desenvolvimento-app-android"
              onClick={closeMenu}
            >
              Desenvolvimento App Android
            </Link>
            <Link
              href="/servicos/manutencao-sites-sistemas"
              onClick={closeMenu}
            >
              Manutenção em Sites e Sistemas
            </Link>
            <Link href="/servicos/assistencia-tecnica-ti" onClick={closeMenu}>
              Assistência Técnica em TI
            </Link>

            <Link
              href="/sitesparaconstrutores"
              className="cta-button"
              onClick={closeMenu}
            >
              Cursos profissionais
            </Link>
      */}
          </nav>

          {/* HAMBURGER */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* BACKDROP */}
      <div
        className={`menu-backdrop ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />
    </>
  );
}

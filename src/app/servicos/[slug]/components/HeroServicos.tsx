"use client";

import { useEffect, useRef } from "react";
import { Service } from "@/types/service";
import { trackEvent } from "@/lib/tracking";

interface HeroServicosProps {
  service: Service;
}

export default function HeroServicos({ service }: HeroServicosProps) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent("ViewHero", {
            page: service.slug,
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [service.slug]);

  const handleCTA = () => {
    window.fbq?.("trackCustom", "ScrollToCheckout", {
      service: service.slug,
      origin: "Hero",
    });

    window.dataLayer?.push({
      event: "scroll_to_checkout",
      service: service.slug,
      origin: "Hero",
    });
  };

  return (
    <section
      ref={heroRef}
      className="
        relative isolate flex min-h-[90vh]
        items-center justify-center
        overflow-hidden bg-black
        px-5 py-24 md:px-10
      "
    >
      {/* Fundo no estilo Black Friday */}
      <div
        aria-hidden="true"
        className="
        pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.5),transparent)]
        "
      />

      {/* Iluminação roxa */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-32
          top-1/4 -z-10
          h-100 w-100
          rounded-full bg-[#7f3dff]/20
          blur-[120px]
        "
      />

      <div
        className="
          container relative z-10 mx-auto
          flex max-w-250 flex-col
          items-center gap-8 text-center
        "
      >
        <span
          className="
            rounded-full border border-[#9b6cff]/40
            bg-[#7f3dff]/10 px-5 py-2
            text-xs font-semibold uppercase
            tracking-[0.2em] text-[#c4a5ff]
          "
        >
          Clintin dos Sites
        </span>

        <h1
          className="
            font-title text-4xl font-extrabold
            leading-tight text-white
            sm:text-5xl lg:text-6xl
          "
        >
          {service.hero.title}
        </h1>

        <p
          className="
            max-w-187.5 text-lg
            leading-relaxed text-gray-300
            md:text-xl
          "
        >
          {service.hero.subtitle}
        </p>

        <a
          href="#checkout"
          onClick={handleCTA}
          className="
            whatsapp-track inline-flex
            items-center justify-center
            rounded-full
            bg-[linear-gradient(135deg,#4b1fb8,#7f3dff,#9b6cff)]
            px-9 py-5 text-center
            font-bold uppercase text-white
            shadow-[0_10px_35px_rgba(127,61,255,0.3)]
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[0_15px_45px_rgba(127,61,255,0.5)]
          "
        >
          {service.hero.ctaBtn}
          <span className="ml-3" aria-hidden="true">
            →
          </span>
        </a>

        <div
          className="
            flex flex-wrap items-center
            justify-center gap-x-7 gap-y-3
            text-sm text-gray-300
          "
        >
          <span>✓ Design profissional</span>
          <span>✓ Alta performance</span>
          <span>✓ Atendimento personalizado</span>
        </div>
      </div>
    </section>
  );
}

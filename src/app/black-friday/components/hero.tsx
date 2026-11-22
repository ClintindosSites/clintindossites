"use client";

import { useEffect, useRef } from "react";
import { reportConversion, trackEvent } from "@/lib/tracking";
import Link from "next/link";
import Image from "next/image";
export default function HeroBlackFriday() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = heroRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent("ViewHero", {
            page: "Home",
          });

          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={heroRef}
      className="hero relative mx-auto min-h-screen p-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.78)_40%,rgba(0,0,0,0.35)_100%),linear-gradient(0deg,rgba(0,0,0,0.65)_0%,transparent_45%,rgba(0,0,0,0.2)_100%),url('/hero.webp')] bg-no-repeat bg-cover bg-center flex items-center justify-center"
    >
      <div className="container max-w-300 flex gap-8 justify-center items-center">
        <div className="heroText flex flex-col text-left gap-8 flex-1 justify-between my-0 mx-0 p-0 ">
          <Image
            src={"/black-friday-dos-sites-50.webp"}
            alt="Black friday dos Sites com até 50% de desconto"
            width={700}
            height={500}
            className="mx-auto"
          />
          {/*   <h1 className="title-purple text-4xl font-title text-center">
            BLACK FRIDAY DOS SITES
          </h1>*/}

          <p className="text-lg text-gray-300 text-center">
            Aproveite as melhores condições especiais da nossa black friday dos
            sites: site institucional, landing page ou loja virtual com até{" "}
            <strong>50% DE DESCONTO</strong>.
          </p>

          <Link
            href="#"
            className="bg-[linear-gradient(135deg,#4b1fb8,#7f3dff,#9b6cff)] whatsapp-track mx-auto p-6 rounded-full font-bold uppercase"
            id="checkout-blackfriday"
            target="_blank"
            onClick={e => {
              e.preventDefault();

              reportConversion({
                url: "https://wa.me/5531984362710?text=Olá,%20tenho%20interesse%20em%20adquirir%20um%20website%20da%20black%20friday%20dos%20sites.%20Pode%20me%20explicar%20como%20funciona?",
                service: "Black Friday",
                origin: "Black Friday",
                value: 1,
              });
            }}
          >
            Confira os melhores preços
          </Link>
        </div>

        {/*<div className="flex-1">
          <Image src="" />
        </div>*/}
      </div>
    </section>
  );
}

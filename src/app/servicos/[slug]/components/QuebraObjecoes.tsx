"use client";

import { useState } from "react";
import { Service } from "@/types/service";

interface ObjectionsProps {
  service: Service;
}

export default function QuebraObjecoes({ service }: ObjectionsProps) {
  const objections = service.objections ?? [];

  const [open, setOpen] = useState<number | null>(0);

  if (!objections.length) {
    return null;
  }

  return (
    <section className="py-24">
      <div className="max-w-[900px] mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-metal">
          {service.objectionsTitle}
        </h2>

        <p className="text-center text-[#bdbdbd] mt-4 mb-[30px]">
          {service.objectionsSubtitle}
        </p>

        <div
          className="space-y-5 flex
                flex-col gap-[20px]"
        >
          {objections.map((item, index) => (
            <div
              key={index}
              className="
               bg-[#0b0b0f]
                border border-[#7f3dff40]
                rounded-2xl
                overflow-hidden rounded-[20px]
                
              "
            >
              <button
                type="button"
                onClick={() => setOpen(open === index ? null : index)}
                className="
                 faq-question w-full flex justify-between items-center
                  text-left p-[20px] text-white
                "
              >
                <span className="text-[#7f3dff] text-2xl transition-transform duration-300">
                  {item.pergunta}
                </span>

                <span className="text-2xl">{open === index ? "−" : "+"}</span>
              </button>

              {open === index && (
                <div className="p-[20px] pt-0 text-sm text-zinc-300 leading-relaxed text-[#bdbdbd]">
                  {item.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

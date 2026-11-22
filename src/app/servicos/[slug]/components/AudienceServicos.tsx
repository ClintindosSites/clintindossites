import { Service } from "@/types/service";

interface AudienceServicosProps {
  service: Service;
}

export default function AudienceServicos({ service }: AudienceServicosProps) {
  const servicos = service.pains?.items ?? [];

  return (
    <section className="py-24 text-center">
      <div className="max-w-275 mx-auto px-6">
        <h2 className="text-metal text-4xl md:text-5xl font-extrabold">
          {service.pains?.title}
        </h2>

        <p className="text-[#bdbdbd] mt-3 mb-15 text-[16px] max-w-2xl mx-auto">
          {service.pains?.subtitle}
        </p>

        <div className="grid gap-[1.3rem] grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {servicos.map((item, index) => (
            <div
              key={index}
              className="rounded-[20px] p-5 border transition duration-300 hover:-translate-y-1.5 bg-[linear-gradient(180deg,rgba(18,18,26,0.95),rgba(11,11,15,0.95))] border-[rgba(127,61,255,0.25)] hover:shadow-[0_0_40px_rgba(127,61,255,0.4)]"
            >
              <h3 className="text-metal text-[20px] mb-3.5 font-bold">
                {item.titulo}
              </h3>

              <p className="text-[#cfcfcf] text-[15px] leading-relaxed">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

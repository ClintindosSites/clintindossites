import Image from "next/image";
import { PortfolioItem } from "./portfolio-data";

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick: () => void;
}

export default function PortfolioCard({ item, onClick }: PortfolioCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ver detalhes do projeto ${item.title}`}
      className="group w-full text-left overflow-hidden rounded-2xl
        border border-white/10 bg-[#0b0b0f]
        transition-all duration-300
        hover:-translate-y-1 hover:border-[#7f3dff]/60
        hover:shadow-[0_12px_40px_rgba(127,61,255,0.12)]"
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-[#15121d]">
        <Image
          src={item.image}
          alt={`Captura do projeto ${item.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />

        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/65 px-3 py-1 text-[11px] text-white backdrop-blur-md">
          {item.category}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#a78bfa]">
            {item.title}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">{item.segment}</p>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400">
          {item.description}
        </p>

        <div className="mt-1 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-xs font-medium text-zinc-500">
            Conheça o projeto
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7f3dff]/10 text-[#a78bfa] transition-all group-hover:bg-[#7f3dff] group-hover:text-white">
            ↗
          </span>
        </div>
      </div>
    </button>
  );
}

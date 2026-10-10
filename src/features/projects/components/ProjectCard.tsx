import { assetPath } from "@/shared/lib/assetPath";
import Image from "next/image";
import { Project } from "../model/project.types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="site-shell grid items-center gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-20">
      <div>
        <p className="eyebrow mb-7 text-content-secondary">Diário pessoal</p>
        <h3 aria-label={project.name} className="text-[clamp(4rem,8vw,7rem)] leading-none tracking-[-0.075em] font-light">axis<strong className="font-bold">mind</strong></h3>
        <p className="mt-6 text-3xl leading-tight tracking-[-0.045em] md:text-4xl">Um espaço para o seu dia.</p>
        <p className="mt-4 max-w-md text-base leading-relaxed text-content-secondary">{project.description}</p>
        <ul aria-label="Recursos do AxisMind" className="mt-7 flex flex-wrap justify-center md:justify-start gap-3 text-xs">
          <li className="rounded-full bg-[#202020] text-white px-5 py-2">Diário</li>
          <li className="rounded-full bg-[#202020] text-white px-5 py-2">Texto e voz</li>
          <li className="rounded-full bg-[#202020] text-white px-5 py-2">Privacidade</li>
        </ul>
        <div className="mt-10 flex justify-center md:justify-start">
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="pill-button">
            Conhecer o AxisMind <span aria-hidden="true">↗</span><span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>
      </div>
      <figure className="app-artwork flex flex-col items-center md:items-end">
        <div className="phone-frame">
          <Image src={assetPath("/projects/axismind-hoje.webp")} alt="Tela Hoje do AxisMind, com registro de humor, novo relato e cofre de pensamentos" width={1080} height={2400} className="block h-auto w-full rounded-[32px]" unoptimized />
        </div>
        <figcaption className="mt-6 text-center md:text-right eyebrow text-content-secondary">AXISMIND · UM DIÁRIO DO SEU JEITO</figcaption>
      </figure>
    </article>
  );
}

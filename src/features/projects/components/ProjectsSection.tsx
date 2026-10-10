import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ScrollIndicator } from "@/shared/components/ScrollIndicator";

export function ProjectsSection() {
  return (
    <section id="projetos" aria-labelledby="projects-title" className="apple-stack-section apple-stack-projects border-t border-border-subtle">
      <ScrollIndicator targetId="inicio" direction="up" />
      <div className="border-b border-border-subtle">
        <div className="site-shell flex items-center justify-between gap-4 py-6">
          <h2 id="projects-title" className="eyebrow">01 / Projetos</h2>
          <span className="text-xs tracking-widest text-content-secondary">Feitos com intenção</span>
        </div>
      </div>
      <div className="flex flex-col">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      <ScrollIndicator targetId="estudio" direction="down" />
    </section>
  );
}

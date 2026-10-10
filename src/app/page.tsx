import { Hero } from "@/features/hero";
import { ProjectsSection } from "@/features/projects";
import { AboutSection } from "@/features/about";
import { Footer } from "@/features/contact";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <main id="conteudo">
        <Hero />
        <span id="projetos" className="block h-0" aria-hidden="true" />
        <ProjectsSection />
        <span id="estudio" className="block h-0" aria-hidden="true" />
        <AboutSection />
      </main>
      <span id="contato" className="block h-0" aria-hidden="true" />
      <Footer />
    </>
  );
}

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
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

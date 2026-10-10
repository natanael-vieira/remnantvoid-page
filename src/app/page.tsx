import { Hero } from "@/features/hero";
import { ProjectsSection } from "@/features/projects";
import { AboutSection } from "@/features/about";
import { Footer } from "@/features/contact";

import { Header } from "@/shared/components/Header";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

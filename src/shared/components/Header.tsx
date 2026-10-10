import { Wordmark } from "./Wordmark";

export function Header() {
  return (
    <header id="inicio" className="site-shell flex flex-wrap items-center justify-between gap-6 py-7 md:py-9">
      <a href="#inicio" aria-label="Remnant Void — início"><Wordmark /></a>
      <nav aria-label="Navegação principal" className="flex gap-7 text-xs tracking-widest sm:gap-10">
        <a className="nav-link" href="#projetos">Projetos</a>
        <a className="nav-link" href="#estudio">Estúdio</a>
        <a className="nav-link" href="#contato">Contato</a>
      </nav>
    </header>
  );
}

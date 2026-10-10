import { Wordmark } from "@/shared/components/Wordmark";

export function Footer() {
  return (
    <footer id="contato" className="site-shell pt-14 pb-8 md:pt-16">
      <h2 className="max-w-lg text-4xl leading-[1.15] tracking-[-0.05em] md:text-5xl">Vamos criar algo<br />que permaneça.</h2>
      <a href="mailto:natnaelsales@gmail.com" className="mt-6 inline-flex gap-5 border-b border-content-primary pb-1 text-base">Entre em contato <span aria-hidden="true">↗</span></a>
      <div className="mt-12 flex flex-col gap-6 border-t border-border-subtle pt-7 md:flex-row md:items-center md:justify-between">
        <a href="#inicio" aria-label="Remnant Void — voltar ao início"><Wordmark small /></a>
        <div className="flex flex-wrap gap-6 text-[10px] tracking-widest text-content-secondary md:gap-10">
          <span>© 2026 remnantvoid</span><span>Algumas coisas permanecem.</span>
        </div>
      </div>
    </footer>
  );
}

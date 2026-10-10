export function HeroContent() {
  return (
    <>
      <p className="eyebrow mb-8 text-content-secondary">Estúdio independente de software</p>
      <h1 className="text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.08] tracking-[-0.065em]">
        Simples na forma.<br />
        <strong className="font-semibold">Profundo no propósito.</strong>
      </h1>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-content-secondary">Ideias transformadas em software para a vida real.</p>
      <div className="mt-9 flex justify-end">
        <a href="#projetos" className="pill-button">Explore os projetos <span aria-hidden="true">↓</span></a>
      </div>
    </>
  );
}

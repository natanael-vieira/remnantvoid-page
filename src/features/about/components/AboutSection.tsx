import { assetPath } from "@/shared/lib/assetPath";
import Image from "next/image";
import { ScrollIndicator } from "@/shared/components/ScrollIndicator";

export function AboutSection() {
  return (
    <section aria-labelledby="studio-title" className="apple-stack-section apple-stack-studio dark-section isolate flex flex-col justify-center overflow-hidden text-surface-paper">
      <ScrollIndicator targetId="projetos" direction="up" dark={true} />
      <ScrollIndicator targetId="contato" direction="down" dark={true} />
      <Image src={assetPath("/brand/studio-moon.webp")} alt="" fill sizes="100vw" unoptimized className="pointer-events-none -z-10 object-cover object-right opacity-40 md:opacity-70" />
      <div className="site-shell py-16 md:py-20">
        <div className="mb-12 flex items-center gap-8"><Image src={assetPath("/brand/symbol-white.webp")} alt="" width={56} height={56} unoptimized /><p className="eyebrow">02 / O estúdio</p></div>
        <h2 id="studio-title" className="text-5xl leading-[1.08] tracking-[-0.055em] md:text-6xl">Ideias. Código.<br />Pessoas reais.</h2>
        <p className="mt-7 text-base leading-relaxed tracking-wide text-white/70">Um estúdio independente.<br />Um olhar atento ao essencial.</p>
      </div>
    </section>
  );
}

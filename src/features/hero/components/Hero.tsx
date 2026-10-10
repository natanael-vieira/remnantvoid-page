import { HeroContent } from "./HeroContent";
import { BrandSymbol } from "./BrandSymbol";
import { ScrollIndicator } from "@/shared/components/ScrollIndicator";
import { Header } from "@/shared/components/Header";

export function Hero() {
  return (
    <section id="inicio" className="apple-stack-section apple-stack-hero flex flex-col">
      <Header />
      <div className="site-shell grid flex-1 items-center gap-6 py-6 md:grid-cols-2 md:gap-16 md:py-16">
        <div className="w-full min-w-0">
          <HeroContent />
        </div>
        <div className="flex justify-center md:justify-end">
          <BrandSymbol />
        </div>
      </div>
      <ScrollIndicator targetId="projetos" direction="down" />
    </section>
  );
}

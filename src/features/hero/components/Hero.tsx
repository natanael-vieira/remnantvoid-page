import { HeroContent } from "./HeroContent";
import { BrandSymbol } from "./BrandSymbol";
import { ScrollIndicator } from "@/shared/components/ScrollIndicator";

export function Hero() {
  return (
    <section className="apple-stack-section apple-stack-hero grid items-center py-16 md:py-24">
      <div className="site-shell grid items-center gap-12 md:grid-cols-2 md:gap-16">
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

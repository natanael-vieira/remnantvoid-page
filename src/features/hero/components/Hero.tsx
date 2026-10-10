import { HeroContent } from "./HeroContent";
import { BrandSymbol } from "./BrandSymbol";

export function Hero() {
  return (
    <section className="site-shell grid min-h-[570px] items-center gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24">
      <div className="contents">
        <div className="w-full min-w-0 max-w-[630px]">
          <HeroContent />
        </div>
        <BrandSymbol />
      </div>
    </section>
  );
}

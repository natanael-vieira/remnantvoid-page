import { HeroContent } from "./HeroContent";
import { BrandSymbol } from "./BrandSymbol";

export function Hero() {
  return (
    <section className="site-shell grid min-h-[570px] items-center gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
      <div className="contents">
        <div className="w-full min-w-0">
          <HeroContent />
        </div>
        <div className="flex justify-center md:justify-end">
          <BrandSymbol />
        </div>
      </div>
    </section>
  );
}

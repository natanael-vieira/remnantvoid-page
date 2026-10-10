import { assetPath } from "@/shared/lib/assetPath";
import Image from "next/image";

export function BrandSymbol() {
  return (
    <Image
      src={assetPath("/brand/hero-moon-hd.webp")}
      alt=""
      width={1254}
      height={1254}
      className="mx-auto h-auto w-[240px] md:w-full md:max-w-[350px]"
      preload
      unoptimized
    />
  );
}

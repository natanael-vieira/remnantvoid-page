import { assetPath } from "@/shared/lib/assetPath";
import Image from "next/image";

export function BrandSymbol() {
  return (
    <Image
      src={assetPath("/brand/symbol-black.png")}
      alt=""
      width={1024}
      height={1024}
      className="h-auto w-[270px] mx-auto md:mx-0 md:w-full md:max-w-[380px] md:ml-auto md:-mr-14 mix-blend-multiply"
      preload
      unoptimized
    />
  );
}

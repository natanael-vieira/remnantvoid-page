import { assetPath } from "@/shared/lib/assetPath";
import Image from "next/image";

export function Wordmark({ small = false }: { small?: boolean }) {
  return (
    <Image
      src={assetPath("/brand/logo-primary-black.webp")}
      alt="remnantvoid — independent software studio"
      width={630}
      height={140}
      className={`h-auto mix-blend-multiply ${small ? "w-48" : "w-60"}`}
      unoptimized
    />
  );
}

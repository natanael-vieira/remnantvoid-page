import { assetPath } from "@/shared/lib/assetPath";
import Image from "next/image";

export function Wordmark({ small = false }: { small?: boolean }) {
  return (
    <span className={`wordmark ${small ? "wordmark-small" : ""}`}>
      <span className="wordmark-name">
        <span className="font-light">remnant</span>
        <strong className="font-bold">v<span className="wordmark-orbit"><span className="sr-only">o</span><Image src={assetPath("/brand/symbol-black.png")} alt="" width={1024} height={1024} unoptimized /></span>id</strong>
      </span>
      <span className="wordmark-subtitle">independent software studio</span>
    </span>
  );
}

import { assetPath } from "@/shared/lib/assetPath";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "remnant void - independent software studio",
    short_name: "remnant void",
    description:
      "Estúdio independente de software. Ideias, código e pessoas reais.",
    start_url: assetPath("/"),
    display: "standalone",
    background_color: "#fafaf8",
    theme_color: "#202020",
    icons: [
      {
        src: assetPath("/brand/icons/dark-192.png"),
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: assetPath("/brand/icons/dark-512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

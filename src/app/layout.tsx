import { assetPath } from "@/shared/lib/assetPath";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://natanael-vieira.github.io/remnantvoid-page/"),
  title: "remnant void — independent software studio",
  description:
    "Estúdio independente de software. Ideias transformadas em produtos digitais para a vida real.",
  icons: {
    icon: [
      { url: assetPath("/brand/icons/light-32.png"), sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: assetPath("/brand/icons/dark-32.png"), sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [{ url: assetPath("/brand/icons/dark-180.png"), sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "remnant void — independent software studio",
    description: "Estúdio independente de software. Ideias transformadas em produtos digitais para a vida real.",
    images: [{ url: assetPath("/brand/brandboard.webp"), width: 1536, height: 1024, alt: "remnant void brand identity" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [assetPath("/brand/brandboard.webp")],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

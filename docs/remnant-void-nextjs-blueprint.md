# remnant void --- Blueprint da Landing Page

> Plano de arquitetura e implementação da landing page oficial da
> **remnant void**.
>
> **Stack:** Next.js + React + TypeScript + Tailwind CSS v4\
> **Router:** App Router\
> **Renderização:** Static Export\
> **Hospedagem inicial:** GitHub Pages\
> **Arquitetura:** modular baseada em features\
> **Direção visual:** papel + grafite + espaço negativo + movimento
> discreto

------------------------------------------------------------------------

## 1. Objetivo

Criar uma landing page institucional e portfólio para a **remnant
void**, funcionando como hub dos projetos atuais e futuros.

A primeira versão deve ser uma experiência **single-page**, mas a
arquitetura deve permitir crescimento futuro para rotas como:

``` text
/
/projects/axismind
/projects/future-project
/about
```

sem necessidade de reestruturar o projeto.

A página deve:

-   apresentar `remnant void`;
-   comunicar `independent software studio`;
-   listar projetos, começando por `axismind`;
-   ser extremamente leve;
-   funcionar como site estático;
-   ser adequada ao GitHub Pages;
-   funcionar bem em telas pequenas, médias, grandes e ultrawide;
-   manter acessibilidade como requisito estrutural;
-   respeitar `prefers-reduced-motion`;
-   evitar estética SaaS genérica;
-   não depender de backend.

------------------------------------------------------------------------

# 2. Stack

## Core

``` text
Next.js
React
TypeScript
Tailwind CSS v4
```

Usar:

-   **App Router**;
-   TypeScript em modo estrito;
-   Server Components por padrão;
-   Client Components apenas onde interação/browser APIs forem
    necessárias;
-   Static Export para produção.

Não utilizar Pages Router.

------------------------------------------------------------------------

# 3. Next.js como site estático

Apesar de utilizar Next.js, a landing não deve depender de servidor em
produção.

Configuração conceitual:

``` ts
// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
```

Build:

``` text
next build
     ↓
out/
     ↓
GitHub Pages
```

O resultado final deve ser composto por HTML, CSS, JavaScript e assets
estáticos.

## Não utilizar sem necessidade

Enquanto o projeto permanecer hospedado como static export, evitar
recursos que exijam runtime de servidor, como:

-   API Routes;
-   Server Actions que dependam de servidor;
-   autenticação server-side;
-   banco de dados;
-   SSR dinâmico;
-   cookies server-side para funcionalidade essencial;
-   middleware dependente de runtime;
-   qualquer infraestrutura desnecessária para uma landing.

Se futuramente algum produto exigir isso, a decisão de infraestrutura
será reavaliada.

------------------------------------------------------------------------

# 4. Server Components e Client Components

Regra:

> Tudo é Server Component até existir um motivo concreto para ser Client
> Component.

Exemplo:

``` text
Hero
├── HeroContent            Server Component
├── BrandSymbol            Server Component
└── BootSequence           Client Component
    └── useBootSequence()

ProjectsSection            Server Component
├── ProjectCard            Server Component
└── ProjectCard            Server Component

AboutSection               Server Component
Footer                     Server Component
```

Usar `"use client"` apenas quando houver necessidade de:

-   `useState`;
-   `useEffect`;
-   `IntersectionObserver`;
-   `requestAnimationFrame`;
-   eventos interativos;
-   acesso a APIs do navegador.

Não transformar uma feature inteira em Client Component apenas porque um
pequeno elemento precisa de estado.

Isolar a ilha interativa.

------------------------------------------------------------------------

# 5. Conceito visual

A interface deve lembrar **papel**, não uma tela branca luminosa.

Direção:

-   fundo off-white/papel;
-   texto grafite/chumbo quase preto;
-   contraste confortável;
-   praticamente monocromática;
-   muito espaço negativo;
-   linhas e divisores discretos;
-   tipografia limpa;
-   animações com propósito;
-   ausência de glow;
-   ausência de neon;
-   ausência de estética hacker;
-   ausência de elementos decorativos sem função.

A referência "Matrix" aplica-se **somente ao comportamento inicial de
terminal/digitação**, nunca às cores ou à estética.

------------------------------------------------------------------------

# 6. Identidade

Nome textual:

``` text
remnant void
```

Tratamento gráfico:

``` text
remnantvoid
```

No wordmark:

-   `remnant` com peso leve/regular;
-   `void` com peso forte;
-   o `o` pode assumir o símbolo/eclipse da marca.

Descriptor:

``` text
independent software studio
```

A marca principal deve permanecer visualmente neutra para que cada
projeto possa possuir sua própria identidade.

------------------------------------------------------------------------

# 7. Design tokens --- regra obrigatória

**Nenhum componente deve declarar decisões visuais arbitrárias
diretamente.**

Evitar:

``` tsx
<div className="bg-[#f7f7f3] text-[#202020] text-[13px] p-[17px]" />
```

Preferir:

``` tsx
<section className="bg-surface-paper text-content-primary px-page">
```

Os valores reais pertencem ao tema.

------------------------------------------------------------------------

# 8. Tailwind CSS v4

Utilizar configuração CSS-first com `@theme`.

Estrutura:

``` text
src/app/styles/
├── globals.css
├── theme.css
└── motion.css
```

Exemplo conceitual:

``` css
@import "tailwindcss";

@theme {
  /* Colors */

  --color-surface-paper: ...;
  --color-surface-raised: ...;
  --color-surface-inverse: ...;

  --color-content-primary: ...;
  --color-content-secondary: ...;
  --color-content-inverse: ...;

  --color-border-subtle: ...;

  /* Typography */

  --font-sans: ...;
  --font-mono: ...;

  --text-body-min: 0.75rem;
  --text-body: ...;
  --text-label: ...;
  --text-title: ...;
  --text-display: ...;

  /* Layout */

  --spacing-page: ...;
  --spacing-section: ...;
  --spacing-content: ...;

  /* Radius */

  --radius-surface: ...;

  /* Shadows */

  --shadow-sheet: ...;

  /* Breakpoints */

  --breakpoint-medium: ...;
  --breakpoint-large: ...;
  --breakpoint-wide: ...;

  /* Motion */

  --ease-brand: ...;
  --animate-cursor: ...;
}
```

------------------------------------------------------------------------

# 9. Regra de unidades

Não utilizar `px` para:

-   tipografia;
-   spacing;
-   largura de layout;
-   altura de layout;
-   breakpoints;
-   border radius.

Preferir:

``` text
rem
%
vw
vh
svh
dvh
ch
clamp()
```

Pixels podem existir em assets rasterizados, como:

``` text
favicon-32x32.png
```

mas não como linguagem de layout dos componentes.

------------------------------------------------------------------------

# 10. Acessibilidade

Acessibilidade é requisito arquitetural, não refinamento posterior.

## Tamanho mínimo

**Nenhum texto visível pode ser menor que o equivalente a 12px.**

Como o projeto utiliza unidades relativas:

``` css
--text-body-min: 0.75rem;
```

Assumindo o tamanho raiz padrão do navegador, isso equivale a 12px.

Não alterar o root font-size para diminuir artificialmente esse valor.

Isso inclui:

-   copyright;
-   metadata;
-   labels;
-   navegação;
-   badges;
-   legendas;
-   footer.

Textos normais de leitura devem preferencialmente ser maiores que o
mínimo.

------------------------------------------------------------------------

# 11. Zoom e baixa visão

Não bloquear:

-   browser zoom;
-   pinch zoom;
-   tamanho de fonte configurado pelo usuário;
-   reflow.

A interface deve continuar utilizável com zoom elevado.

Evitar layouts que dependam de dimensões rígidas.

------------------------------------------------------------------------

# 12. Semântica HTML

Usar:

``` html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Hierarquia:

``` text
h1
 └── h2
      └── h3
```

Não escolher heading baseado em aparência.

A aparência vem dos tokens.

------------------------------------------------------------------------

# 13. Navegação por teclado

Todo elemento interativo deve:

-   ser alcançável por teclado;
-   possuir foco visível;
-   possuir área interativa confortável;
-   não depender exclusivamente de hover.

Nunca remover `outline` sem substituição acessível.

------------------------------------------------------------------------

# 14. Reduced Motion

Implementar suporte a:

``` css
@media (prefers-reduced-motion: reduce)
```

Nesse modo:

-   remover typing caractere por caractere;
-   remover parallax;
-   remover transforms de scroll não essenciais;
-   eliminar animações decorativas;
-   mostrar a marca imediatamente;
-   preservar conteúdo e hierarquia.

A página deve continuar visualmente completa sem animações.

------------------------------------------------------------------------

# 15. Responsividade

Implementação **mobile-first**.

Estados conceituais:

``` text
small
medium
large
wide
```

Os breakpoints reais pertencem aos tokens do Tailwind.

Nunca declarar breakpoints arbitrários diretamente nos componentes.

------------------------------------------------------------------------

## 15.1 Small --- celulares

Hero:

-   layout em coluna;
-   conteúdo textual primeiro;
-   símbolo abaixo ou discretamente ao fundo;
-   símbolo não pode competir com o conteúdo;
-   utilizar `svh`/`dvh` quando necessário;
-   navegação extremamente simples.

Projects:

-   uma coluna;
-   mídia abaixo do conteúdo;
-   áreas interativas confortáveis.

------------------------------------------------------------------------

## 15.2 Medium --- tablets

A composição pode começar a utilizar duas regiões.

Projetos podem alternar texto e mídia desde que a leitura continue
confortável.

------------------------------------------------------------------------

## 15.3 Large --- desktop/notebook

Hero conceitual:

``` text
┌──────────────────────────────────────────────┐
│                                              │
│   remnant void_              símbolo         │
│   independent                eclipse         │
│   software studio                            │
│                                              │
└──────────────────────────────────────────────┘
```

Não exigir divisão rígida 50/50.

------------------------------------------------------------------------

## 15.4 Wide --- monitores grandes

Não esticar conteúdo indefinidamente.

Usar container máximo baseado em token.

Manter espaço negativo lateral.

O símbolo pode crescer.

O comprimento de linha do texto deve permanecer confortável.

------------------------------------------------------------------------

# 16. Container Queries

Componentes reutilizáveis devem preferir container queries quando sua
adaptação depender do espaço disponível no próprio componente.

Exemplo:

``` text
ProjectCard
```

não deveria necessariamente conhecer o tamanho total da viewport.

Isso permite reutilizá-lo futuramente em:

-   home;
-   página de projetos;
-   grid;
-   destaque;
-   página individual.

------------------------------------------------------------------------

# 17. Hero --- Boot Sequence

A primeira viewport inicia com um cursor.

``` text
_
```

O cursor pisca.

Depois começa:

``` text
r_
rem_
remnant_
remnant void_
```

Ao terminar:

1.  cursor pisca brevemente;
2.  cursor desaparece;
3.  versão terminal transiciona para a identidade;
4.  `remnant` assume peso leve;
5.  `void` assume peso forte;
6.  o `o` pode assumir o eclipse;
7.  aparece `independent software studio`;
8.  símbolo/eclipse surge na região direita quando houver espaço.

A animação deve ocorrer rapidamente e não bloquear interação.

------------------------------------------------------------------------

# 18. Semântica da Boot Sequence

Não fazer leitor de tela ouvir:

``` text
r
re
rem
remn
...
```

A versão animada deve poder ser:

``` tsx
aria-hidden="true"
```

enquanto a versão semanticamente completa permanece disponível.

Exemplo conceitual:

``` tsx
<h1>
  <span className="sr-only">remnant void</span>

  <span aria-hidden="true">
    {animatedText}
  </span>
</h1>
```

O conteúdo existe independentemente da animação.

------------------------------------------------------------------------

# 19. Estado da Boot Sequence

Modelo:

``` ts
export type BootPhase =
  | "idle"
  | "typing"
  | "cursor"
  | "brand"
  | "complete";
```

Fluxo:

``` text
idle
 ↓
typing
 ↓
cursor
 ↓
brand
 ↓
complete
```

Reduced motion:

``` text
idle → complete
```

------------------------------------------------------------------------

# 20. Transição de scroll --- folhas

A seção seguinte deve parecer nascer **atrás da hero**.

Estratégia preferencial:

-   sticky positioning;
-   stacking context controlado;
-   transform discreto;
-   opacity;
-   sombra via token.

Fluxo visual:

``` text
┌─────────────────────┐
│ HERO                │
│                     │
└─────────────────────┘
          ↑
          │ scroll
          │
┌─────────────────────┐
│ PROJECTS            │
│                     │
└─────────────────────┘
```

A hero pode sofrer redução de escala muito discreta enquanto a próxima
folha sobe.

Evitar:

-   vídeos;
-   centenas de frames;
-   Canvas;
-   WebGL;
-   Three.js;
-   dependências pesadas apenas para esse efeito.

Com reduced motion:

``` text
Hero
Projects
About
Footer
```

em fluxo normal.

------------------------------------------------------------------------

# 21. Projects

Primeiro projeto:

``` text
01 / project
2026

axismind

private journal for everyday records.

android

view project →
```

Projetos devem vir de dados.

Nunca hardcode cada projeto na Home.

------------------------------------------------------------------------

# 22. Modelo de projeto

``` ts
export interface Project {
  id: string;
  index: number;
  name: string;
  description: string;
  year: number;
  platforms: string[];
  href: string;
  status?: ProjectStatus;
  artwork?: ProjectArtwork;
}

export type ProjectStatus =
  | "released"
  | "testing"
  | "development";
```

Dados:

``` text
features/projects/data/projects.ts
```

Adicionar um projeto deve ser majoritariamente:

``` ts
projects.push(...)
```

ou adicionar um novo objeto à coleção declarativa.

------------------------------------------------------------------------

# 23. About

Curto.

Texto provisório:

``` text
remnant void is an independent software studio.

built from curiosity, necessity,
and things worth making.
```

Não transformar a primeira versão em manifesto.

O conteúdo poderá evoluir sem alterar arquitetura.

------------------------------------------------------------------------

# 24. Footer

Composição possível:

``` text
remnantvoid

github
email

some things remain.

© 2026
```

Minimalista.

Links externos devem possuir comportamento acessível.

------------------------------------------------------------------------

# 25. Arquitetura modular baseada em features

Estrutura sugerida:

``` text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   │
│   └── styles/
│       ├── globals.css
│       ├── theme.css
│       └── motion.css
│
├── features/
│   ├── hero/
│   │   ├── components/
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroContent.tsx
│   │   │   ├── BootSequence.tsx
│   │   │   ├── BrandReveal.tsx
│   │   │   └── BrandSymbol.tsx
│   │   ├── hooks/
│   │   │   └── useBootSequence.ts
│   │   ├── model/
│   │   │   └── hero.types.ts
│   │   └── index.ts
│   │
│   ├── projects/
│   │   ├── components/
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ProjectCard.tsx
│   │   ├── data/
│   │   │   └── projects.ts
│   │   ├── model/
│   │   │   └── project.types.ts
│   │   └── index.ts
│   │
│   ├── about/
│   │   ├── components/
│   │   │   └── AboutSection.tsx
│   │   └── index.ts
│   │
│   └── contact/
│       ├── components/
│       │   └── Footer.tsx
│       └── index.ts
│
├── shared/
│   ├── assets/
│   │   └── brand/
│   ├── components/
│   │   ├── Container/
│   │   ├── Section/
│   │   ├── AccessibleLink/
│   │   └── VisuallyHidden/
│   ├── hooks/
│   │   ├── usePrefersReducedMotion.ts
│   │   └── useIntersectionObserver.ts
│   ├── lib/
│   ├── types/
│   └── utils/
│
└── ...
```

------------------------------------------------------------------------

# 26. Responsabilidade de `app/`

A pasta `app/` cuida de:

-   routing;
-   layouts;
-   metadata;
-   composição de páginas;
-   arquivos especiais do Next.

Ela não deve virar um depósito de componentes.

Exemplo:

``` tsx
// src/app/page.tsx

import { Hero } from "@/features/hero";
import { ProjectsSection } from "@/features/projects";
import { AboutSection } from "@/features/about";
import { Footer } from "@/features/contact";

export default function HomePage() {
  return (
    <>
      <Hero />

      <main>
        <ProjectsSection />
        <AboutSection />
      </main>

      <Footer />
    </>
  );
}
```

------------------------------------------------------------------------

# 27. Regras de dependência

Fluxo:

``` text
app
 ↓
features
 ↓
shared
```

`shared` nunca importa `features`.

Features não devem acessar internals umas das outras.

Consumir API pública:

``` ts
import { ProjectsSection } from "@/features/projects";
```

Evitar:

``` ts
import { ProjectCard } from "@/features/projects/components/internal/...";
```

Cada feature expõe sua API em:

``` text
index.ts
```

------------------------------------------------------------------------

# 28. Clean Code

## Responsabilidade

Componentes pequenos e coesos.

Evitar:

``` text
page.tsx com centenas de linhas
```

## Hooks

Lógica de estado/animação deve ficar fora do JSX quando possuir
complexidade própria.

Preferir:

``` ts
const boot = useBootSequence();
```

## Naming

Preferir:

``` ts
isBootComplete
shouldReduceMotion
activeProject
```

Evitar:

``` ts
flag
tmp
value2
dataX
```

## Dados vs apresentação

Dados de projetos não pertencem ao componente visual.

## Comentários

Comentários explicam **por que**, não narram o código.

------------------------------------------------------------------------

# 29. Client boundaries

Evitar:

``` tsx
"use client";

export default function EntireHomePage() {
  // tudo aqui
}
```

Preferir:

``` text
Server page
├── Server section
│   └── Small Client Island
├── Server section
└── Server footer
```

Isso reduz JavaScript enviado ao navegador.

------------------------------------------------------------------------

# 30. Animações

Priorizar:

``` text
CSS
Web APIs
```

Usar:

-   CSS animations;
-   transitions;
-   IntersectionObserver;
-   requestAnimationFrame somente quando necessário;
-   sticky positioning.

Não instalar biblioteca de animação apenas para:

``` text
typing
fade
reveal
sticky
```

Motion/Framer Motion só entra se existir ganho arquitetural concreto.

------------------------------------------------------------------------

# 31. Performance de animações

Preferir animar:

``` css
transform
opacity
```

Evitar propriedades que provoquem layout contínuo.

Evitar processamento pesado diretamente no evento `scroll`.

Preferir:

``` text
IntersectionObserver
CSS sticky
requestAnimationFrame
```

quando necessário.

------------------------------------------------------------------------

# 32. Assets

Utilizar SVG para:

-   símbolo;
-   wordmark;
-   elementos vetoriais.

Raster somente quando necessário:

-   screenshots;
-   Open Graph;
-   favicons específicos;
-   imagens dos projetos.

Não carregar imagem de alta resolução quando uma variante menor atende
ao dispositivo.

------------------------------------------------------------------------

# 33. Next/Image

Para imagens rasterizadas de projetos, utilizar `next/image` quando
compatível com o modo de exportação escolhido.

Como o projeto utiliza static export, qualquer configuração de
otimização deve ser compatível com hospedagem puramente estática.

Não introduzir servidor apenas para otimização de imagens.

SVGs de marca podem ser utilizados diretamente conforme a estratégia de
assets definida.

------------------------------------------------------------------------

# 34. Metadata do Next.js

Utilizar Metadata API no `layout.tsx`.

Exemplo conceitual:

``` ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "remnant void — independent software studio",
  description:
    "Independent software studio creating thoughtful digital products.",
};
```

Adicionar:

-   canonical;
-   Open Graph;
-   icons;
-   robots;
-   metadataBase quando apropriado.

------------------------------------------------------------------------

# 35. Arquivos públicos

Estrutura:

``` text
public/
├── brand/
│   ├── remnant-void-symbol.svg
│   └── remnant-void-wordmark.svg
│
├── favicon.ico
├── favicon-32x32.png
├── apple-touch-icon.png
├── og-image.png
├── robots.txt
└── site.webmanifest
```

------------------------------------------------------------------------

# 36. GitHub Pages

Fluxo:

``` text
repository
    ↓
GitHub Actions
    ↓
npm ci
    ↓
next build
    ↓
out/
    ↓
GitHub Pages
```

Preferir deployment automatizado via GitHub Actions.

------------------------------------------------------------------------

# 37. Base path

Se o site for:

``` text
https://remnantvoid.github.io/
```

a configuração é simples, sem subpath do projeto.

Se for:

``` text
https://usuario.github.io/remnantvoid/
```

será necessário considerar:

``` ts
basePath
assetPrefix
```

na configuração do Next.

Por isso, se disponível, preferir:

``` text
remnantvoid.github.io
```

como site principal da marca.

------------------------------------------------------------------------

# 38. SEO

Mínimo:

``` text
title
description
canonical
Open Graph
favicon
robots
sitemap
```

Título:

``` text
remnant void — independent software studio
```

Descrição inicial:

``` text
Independent software studio creating thoughtful digital products.
```

O texto pode ser refinado depois.

------------------------------------------------------------------------

# 39. Open Graph

Criar uma imagem dedicada.

Não utilizar screenshot aleatório da página.

Possível composição:

``` text
[ símbolo ]

remnantvoid
independent software studio
```

sobre fundo papel.

------------------------------------------------------------------------

# 40. Qualidade

## TypeScript

Ativar strict mode.

Evitar `any`.

Tipos de domínio explícitos.

## ESLint

Configurar React, Next.js, TypeScript e imports.

## Formatter

Utilizar formatter consistente.

## Testes

Priorizar comportamento:

-   boot sequence termina;
-   reduced motion pula animação;
-   projetos vêm dos dados;
-   links possuem destinos corretos;
-   componentes interativos são acessíveis.

Não testar implementação interna irrelevante.

------------------------------------------------------------------------

# 41. Lighthouse

Avaliar:

``` text
Accessibility
Performance
Best Practices
SEO
```

Objetivo:

-   nenhuma falha crítica de acessibilidade;
-   evitar layout shift;
-   evitar JavaScript excessivo;
-   carregamento rápido em mobile.

------------------------------------------------------------------------

# 42. Regras invioláveis

1.  Nenhum texto visível abaixo de `0.75rem`.
2.  Nenhuma cor literal em JSX/TSX.
3.  Nenhum tamanho arbitrário de fonte em JSX/TSX.
4.  Nenhum breakpoint arbitrário em componentes.
5.  Nenhum spacing arbitrário sem token.
6.  Nenhuma animação importante sem fallback reduced-motion.
7.  Nenhum componente de feature importando internals de outra feature.
8.  Nenhuma dependência pesada sem justificativa.
9.  Nenhuma imagem rasterizada quando SVG resolve melhor.
10. Nenhuma intro bloqueando acesso ao conteúdo.
11. Nenhum conteúdo essencial disponível apenas pela animação.
12. Nenhuma largura de conteúdo ilimitada em ultrawide.
13. Não transformar componentes em Client Components sem necessidade.
14. Não adicionar infraestrutura server-side enquanto static export
    resolver.
15. Não quebrar zoom ou reflow para preservar composição visual.

------------------------------------------------------------------------

# 43. Ordem de implementação

## Fase 1 --- Foundation

Criar:

``` text
Next.js
TypeScript
App Router
Tailwind CSS v4
```

Depois:

-   aliases;
-   ESLint;
-   formatter;
-   strict mode;
-   arquitetura modular;
-   `theme.css`;
-   tokens;
-   Container;
-   Section.

------------------------------------------------------------------------

## Fase 2 --- Identidade

Adicionar:

-   SVG do símbolo;
-   SVG do wordmark;
-   favicon;
-   metadata;
-   fontes.

------------------------------------------------------------------------

## Fase 3 --- Hero

Implementar:

-   Hero;
-   HeroContent;
-   BrandSymbol;
-   BootSequence;
-   useBootSequence;
-   reduced motion;
-   layout responsivo;
-   brand reveal.

------------------------------------------------------------------------

## Fase 4 --- Sheet Transition

Implementar:

-   sticky hero;
-   Projects sheet;
-   stacking;
-   transform discreto;
-   fallback reduced-motion.

Testar especialmente Safari/iOS.

------------------------------------------------------------------------

## Fase 5 --- Projects

Criar:

-   Project model;
-   projects.ts;
-   ProjectsSection;
-   ProjectCard;
-   AxisMind como primeiro projeto.

------------------------------------------------------------------------

## Fase 6 --- Institutional

Criar:

-   About;
-   Footer;
-   GitHub;
-   contato.

------------------------------------------------------------------------

## Fase 7 --- Production

Configurar:

-   metadata;
-   Open Graph;
-   robots;
-   sitemap;
-   manifest;
-   GitHub Actions;
-   GitHub Pages.

Depois executar:

-   Lighthouse;
-   revisão de teclado;
-   revisão de screen reader;
-   zoom/reflow;
-   mobile;
-   tablet;
-   notebook;
-   desktop;
-   ultrawide;
-   reduced motion.

------------------------------------------------------------------------

# 44. Definition of Done

A primeira versão está pronta quando:

-   funciona sem backend;
-   `next build` gera export estático;
-   pode ser publicada no GitHub Pages;
-   Hero possui boot/reveal;
-   reduced-motion apresenta imediatamente a marca;
-   transição Hero → Projects funciona sem jank;
-   AxisMind aparece como primeiro projeto;
-   layouts small/medium/large/wide foram testados;
-   zoom não quebra navegação;
-   nenhum texto está abaixo do mínimo;
-   componentes não contêm valores visuais arbitrários;
-   tokens são a fonte das decisões visuais;
-   Server Components são o padrão;
-   Client Components estão isolados;
-   não há dependências pesadas desnecessárias;
-   Lighthouse não aponta falhas críticas;
-   adicionar um segundo projeto não exige alterar a arquitetura.

------------------------------------------------------------------------

# 45. Decisões que não devem bloquear o MVP

Deixar para depois, se necessário:

-   texto definitivo do About;
-   domínio próprio;
-   analytics;
-   formulário de contato;
-   CMS;
-   blog;
-   dark mode;
-   internacionalização;
-   biblioteca de animação;
-   backend;
-   área administrativa.

Não construir antecipadamente o que ainda não possui requisito.

------------------------------------------------------------------------

# 46. Princípio final

A interface não precisa explicar toda a história da marca.

A primeira impressão é:

``` text
remnant void
independent software studio
```

Depois o usuário descobre os projetos.

A implementação deve seguir a mesma filosofia da identidade:

> **poucos elementos, hierarquia forte, movimento intencional e nenhuma
> complexidade sem propósito.**

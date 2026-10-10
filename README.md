# Remnant Void

Página única do estúdio, com layout responsivo e apresentação do AxisMind.

## Desenvolvimento

```sh
yarn install --frozen-lockfile
yarn dev
```

Prévia: http://localhost:3000

## Publicação

O workflow `.github/workflows/pages.yml` compila e publica automaticamente os commits em `main`.

Site: https://natanael-vieira.github.io/remnantvoid-page/

Para reproduzir a exportação do Pages:

```sh
NEXT_PUBLIC_BASE_PATH=/remnantvoid-page yarn build --webpack
```

Os arquivos estáticos ficam em `out/`. A variável de caminho é usada somente na compilação; o desenvolvimento local continua na raiz.

As artes para o perfil do Google Play estão em `output/google-play/`.

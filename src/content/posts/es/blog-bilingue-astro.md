---
title: "Astro + Content Collections: un blog bilingüe que se publica con git push"
description: Esquemas tipados, rutas /es y /en, búsqueda estática y despliegue en Cloudflare Pages sin servidor.
date: 2026-10-01
category: web
translationKey: bilingual-astro-blog
sample: true
---

Este blog es un sitio estático. Escribo un archivo Markdown, hago `git push` y Cloudflare Pages lo compila y publica. No hay base de datos ni panel de administración: **git es el CMS**.

## Contenido tipado

Astro valida el frontmatter de cada post con un esquema. Si me olvido de la categoría, el build falla antes de publicar:

```ts
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(categoryIds),
    translationKey: z.string(),
  }),
});
```

## Dos idiomas, una sola fuente

Cada idioma vive en su carpeta (`posts/es` y `posts/en`). Los posts traducidos comparten un `translationKey`, y así el selector de idioma sabe adónde llevar al lector.

- Las rutas siempre llevan prefijo: `/es/p/...` y `/en/p/...`.
- Si un post no tiene traducción, el selector lleva al índice del otro idioma.
- Las etiquetas `hreflang` se generan automáticamente.

> Que un post no exista en ambos idiomas no es un error: es una decisión editorial.

## Búsqueda sin servidor

Pagefind recorre el HTML compilado y genera un índice estático por idioma. El navegador descarga solo los fragmentos que necesita:

```bash
pnpm astro build && pnpm pagefind --site dist
```

## Despliegue

| Paso | Herramienta |
| --- | --- |
| Compilar | `astro build` |
| Indexar | `pagefind` |
| Publicar | Cloudflare Pages |
| Contador de likes | Pages Functions + KV |

La configuración de Cloudflare cabe en unas pocas líneas:

```yaml
build:
  command: pnpm build
  output: dist
env:
  NODE_VERSION: "22"
```

El resultado es un sitio que carga rápido desde cualquier parte, cuesta cero y se mantiene con el mismo flujo que uso para el código.

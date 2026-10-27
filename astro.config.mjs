// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeCodeBox } from './src/lib/rehype-code-box.mjs';

/** Shiki theme built from the DOS 16-colour palette. */
const dosTheme = {
  name: 'dos-bbs',
  type: /** @type {'dark'} */ ('dark'),
  colors: {
    'editor.background': '#000000',
    'editor.foreground': '#e8eef0',
  },
  tokenColors: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#8a8a8a', fontStyle: 'italic' } },
    { scope: ['keyword', 'storage', 'storage.type', 'keyword.control'], settings: { foreground: '#55ffff' } },
    { scope: ['string', 'string.quoted', 'string.template'], settings: { foreground: '#ffff55' } },
    { scope: ['constant.numeric', 'constant.language', 'constant.character'], settings: { foreground: '#ff55ff' } },
    { scope: ['entity.name.function', 'support.function', 'meta.function-call'], settings: { foreground: '#55ff55' } },
    { scope: ['entity.name.type', 'support.type', 'entity.name.class'], settings: { foreground: '#00aaaa' } },
    { scope: ['variable.parameter', 'variable.other.property', 'meta.object-literal.key', 'entity.name.tag'], settings: { foreground: '#aaaaaa' } },
    { scope: ['punctuation', 'meta.brace'], settings: { foreground: '#aaaaaa' } },
  ],
};

export default defineConfig({
  site: 'https://glacayo.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } },
    }),
  ],
  markdown: {
    shikiConfig: { theme: dosTheme, wrap: false },
    rehypePlugins: [rehypeCodeBox],
  },
});

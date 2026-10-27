export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';
export const langs = Object.keys(languages) as Lang[];

export const ui = {
  es: {
    'site.title': 'BLOG DE INFORMÁTICA',
    'site.description':
      'Bitácora personal de Geovanny Lacayo sobre programación, desarrollo web, inteligencia artificial, agentes, bots, homelabs, hardware, seguridad y todo lo que vaya aprendiendo.',
    'skip': 'Saltar al contenido',
    'search.title': '[S]EARCH',
    'search.label': 'Buscar en el blog',
    'search.placeholder': 'buscar',
    'search.devOnly': 'La búsqueda funciona después de compilar el sitio (pnpm build).',
    'search.empty': 'Sin resultados para',
    'search.results': 'resultados',
    'bases.title': 'MESSAGE BASES',
    'bases.all': 'Todos',
    'bases.saved': 'Guardados',
    'sysop.title': 'SYSOP',
    'messages.new': 'NEW MESSAGES',
    'messages.related': 'RELATED MESSAGES',
    'messages.saved': 'SAVED MESSAGES',
    'messages.empty': 'Todavía no hay mensajes en esta base.',
    'saved.empty': 'No guardaste ningún mensaje. Usa [B] o el botón Guardar en un post.',
    'saved.remove': 'Quitar',
    'col.number': '#',
    'col.subject': 'Asunto',
    'col.base': 'Base',
    'col.date': 'Fecha',
    'sample': 'SAMPLE',
    'post.readTime': 'min de lectura',
    'post.updated': 'Actualizado',
    'post.actions': 'ACCIONES',
    'post.contents': 'CONTENIDO',
    'post.like': 'Me gusta',
    'post.liked': 'Te gusta',
    'post.share': 'Compartir',
    'post.save': 'Guardar',
    'post.saved': 'Guardado',
    'post.download': 'Descargar .md',
    'post.copied': 'Enlace copiado al portapapeles.',
    'post.savedMsg': 'Mensaje guardado.',
    'post.unsavedMsg': 'Mensaje quitado de guardados.',
    'post.likeError': 'No se pudo registrar el like. Intenta más tarde.',
    'post.prev': 'Mensaje anterior',
    'post.next': 'Mensaje siguiente',
    'post.resume': 'Continuar donde quedaste',
    'post.dismiss': 'Descartar',
    'post.translation': 'Read in English',
    'code.copy': '[COPY]',
    'code.copied': '[OK]',
    'status.search': 'Buscar',
    'status.next': 'Sig',
    'status.prev': 'Ant',
    'status.bases': 'Bases',
    'status.lang': 'EN',
    'status.langLabel': 'Cambiar a inglés',
    '404.title': 'ERROR 404: MENSAJE NO ENCONTRADO',
    '404.text': 'El mensaje que buscas no existe en este nodo.',
    '404.back': 'Volver al índice',
  },
  en: {
    'site.title': 'COMPUTING BLOG',
    'site.description':
      "Geovanny Lacayo's personal log on programming, web development, artificial intelligence, agents, bots, homelabs, hardware, security and whatever I'm learning next.",
    'skip': 'Skip to content',
    'search.title': '[S]EARCH',
    'search.label': 'Search the blog',
    'search.placeholder': 'search',
    'search.devOnly': 'Search works after the site is built (pnpm build).',
    'search.empty': 'No results for',
    'search.results': 'results',
    'bases.title': 'MESSAGE BASES',
    'bases.all': 'All',
    'bases.saved': 'Saved',
    'sysop.title': 'SYSOP',
    'messages.new': 'NEW MESSAGES',
    'messages.related': 'RELATED MESSAGES',
    'messages.saved': 'SAVED MESSAGES',
    'messages.empty': 'No messages in this base yet.',
    'saved.empty': 'You have not saved any message. Press [B] or the Save button on a post.',
    'saved.remove': 'Remove',
    'col.number': '#',
    'col.subject': 'Subject',
    'col.base': 'Base',
    'col.date': 'Date',
    'sample': 'SAMPLE',
    'post.readTime': 'min read',
    'post.updated': 'Updated',
    'post.actions': 'ACTIONS',
    'post.contents': 'CONTENTS',
    'post.like': 'Like',
    'post.liked': 'Liked',
    'post.share': 'Share',
    'post.save': 'Save',
    'post.saved': 'Saved',
    'post.download': 'Download .md',
    'post.copied': 'Link copied to clipboard.',
    'post.savedMsg': 'Message saved.',
    'post.unsavedMsg': 'Message removed from saved.',
    'post.likeError': 'Could not record the like. Try again later.',
    'post.prev': 'Previous message',
    'post.next': 'Next message',
    'post.resume': 'Continue where you left off',
    'post.dismiss': 'Dismiss',
    'post.translation': 'Leer en español',
    'code.copy': '[COPY]',
    'code.copied': '[OK]',
    'status.search': 'Search',
    'status.next': 'Next',
    'status.prev': 'Prev',
    'status.bases': 'Bases',
    'status.lang': 'ES',
    'status.langLabel': 'Switch to Spanish',
    '404.title': 'ERROR 404: MESSAGE NOT FOUND',
    '404.text': 'The message you are looking for does not exist on this node.',
    '404.back': 'Back to the index',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];

export function isLang(value: string | undefined): value is Lang {
  return value === 'es' || value === 'en';
}

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-NI' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  }).format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

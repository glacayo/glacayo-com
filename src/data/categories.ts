import type { Lang } from '../i18n/ui';

export const categoryIds = [
  'programming',
  'web',
  'ai',
  'agents',
  'bots',
  'homelab',
  'hardware',
  'skills',
  'frameworks',
  'libraries',
  'languages',
  'security',
] as const;

export type CategoryId = (typeof categoryIds)[number];

export interface Category {
  id: CategoryId;
  number: string;
  labels: Record<Lang, string>;
  /** Compact label for the sidebar and table columns (max ~11 chars). */
  short: Record<Lang, string>;
  /** Codicons codepoint from the patched Nerd Font. */
  icon: string;
}

export const categories: Category[] = [
  { id: 'programming', number: '01', labels: { es: 'Programación', en: 'Programming' }, short: { es: 'Programación', en: 'Programming' }, icon: '\uEAC4' },
  { id: 'web', number: '02', labels: { es: 'Desarrollo web', en: 'Web development' }, short: { es: 'Web', en: 'Web' }, icon: '\uEB01' },
  { id: 'ai', number: '03', labels: { es: 'IA', en: 'AI' }, short: { es: 'IA', en: 'AI' }, icon: '\uEC10' },
  { id: 'agents', number: '04', labels: { es: 'Agentes de IA', en: 'AI agents' }, short: { es: 'Agentes IA', en: 'AI agents' }, icon: '\uEC20' },
  { id: 'bots', number: '05', labels: { es: 'Bots', en: 'Bots' }, short: { es: 'Bots', en: 'Bots' }, icon: '\uEB08' },
  { id: 'homelab', number: '06', labels: { es: 'Homelab', en: 'Homelab' }, short: { es: 'Homelab', en: 'Homelab' }, icon: '\uEB50' },
  { id: 'hardware', number: '07', labels: { es: 'Hardware', en: 'Hardware' }, short: { es: 'Hardware', en: 'Hardware' }, icon: '\uEC19' },
  { id: 'skills', number: '08', labels: { es: 'Skills', en: 'Skills' }, short: { es: 'Skills', en: 'Skills' }, icon: '\uEB6D' },
  { id: 'frameworks', number: '09', labels: { es: 'Frameworks', en: 'Frameworks' }, short: { es: 'Frameworks', en: 'Frameworks' }, icon: '\uEBD2' },
  { id: 'libraries', number: '10', labels: { es: 'Librerías', en: 'Libraries' }, short: { es: 'Librerías', en: 'Libraries' }, icon: '\uEB9C' },
  { id: 'languages', number: '11', labels: { es: 'Lenguajes', en: 'Languages' }, short: { es: 'Lenguajes', en: 'Languages' }, icon: '\uEAE9' },
  { id: 'security', number: '12', labels: { es: 'Seguridad', en: 'Security' }, short: { es: 'Seguridad', en: 'Security' }, icon: '\uEB53' },
];

export const getCategory = (id: CategoryId): Category =>
  categories.find((category) => category.id === id) ?? categories[0];

import { defineRouting } from 'next-intl/routing';
import { defaultLocale, locales } from '@/i18n/locales';

export const routing = defineRouting({
  locales,
  defaultLocale,
});

export type AppLocale = (typeof routing.locales)[number];

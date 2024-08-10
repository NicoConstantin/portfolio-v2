import createMiddleware from 'next-intl/middleware';
import { locales } from './locales';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: 'en',
});
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|es|fr)/:path*'],
};

//Unable to do this because of Unsupported template literal with expressions at "config.matcher[1]".
// const localesMatcher = locales.join('|')

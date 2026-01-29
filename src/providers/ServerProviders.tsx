import { NextIntlClientProvider } from 'next-intl';

export async function ServerProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}

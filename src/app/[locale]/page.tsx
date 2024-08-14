import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('HomePage');
  unstable_setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <h1 className="text-xl text-white">{t('title')}</h1>
    </div>
  );
}

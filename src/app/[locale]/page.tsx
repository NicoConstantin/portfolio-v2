import Header from '@/components/Header/Header';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col pt-12">
      <Header />
    </div>
  );
}

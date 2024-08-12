import Navbar from '@/components/Navbar/Navbar';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <h1>{t('title')}</h1>
    </main>
  );
}

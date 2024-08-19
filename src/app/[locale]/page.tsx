import About from '@/components/About/About';
import Header from '@/components/Header/Header';
import Projects from '@/components/Projects/Projects';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  return (
    <div className="flex h-full min-h-screen flex-col text-white">
      <Header />
      <About />
      <Projects />
    </div>
  );
}

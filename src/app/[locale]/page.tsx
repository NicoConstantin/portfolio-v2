import About from '@/components/About/About';
import Header from '@/components/Header/Header';
import Projects from '@/components/Projects/Projects';
import Recommendations from '@/components/Recommendations/Recommendations';
import Skills from '@/components/Skills/Skills';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  return (
    <div className="flex h-full min-h-screen max-w-screen-lg flex-col gap-y-32 overflow-hidden px-6 text-white md:px-8">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Recommendations />
    </div>
  );
}

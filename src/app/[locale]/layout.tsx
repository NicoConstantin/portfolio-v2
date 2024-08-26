import type { Metadata } from 'next';
import { Montserrat, Onest } from 'next/font/google';
import { Providers } from '@/providers/Providers';
import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import { locales } from '@/locales';
import { unstable_setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

const montserrat = Montserrat({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
  variable: '--font-montserrat',
});

const onest = Onest({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
  variable: '--font-onest', // Optional: Define a custom CSS variable
});

export const metadata: Metadata = {
  title: 'Constantin Nicolas - Software Developer',
  description: 'Software developer specialized in creating modern and efficient solutions',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${montserrat.variable} ${onest.variable} relative flex h-full w-full flex-col items-center justify-center scroll-smooth bg-black font-onest`}
      >
        <Providers>
          <Navbar />
          <div className="absolute inset-0 -z-20">
            <div className="animate-gradient bg-size-150 absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-950 to-black"></div>
          </div>
          <main className={`flex h-full w-full justify-center pb-16`}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

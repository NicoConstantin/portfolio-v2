import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import { Providers } from '@/providers/Providers';
import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import { locales } from '@/locales';
import { unstable_setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

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
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={` ${onest.variable} relative flex h-full w-full flex-col items-center justify-center scroll-smooth bg-black font-onest`}
      >
        <Providers>
          <Navbar />
          <div className="absolute inset-0 -z-20">
            <div className="absolute inset-0 animate-gradient bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-950 to-black bg-size-150"></div>
          </div>
          <main className={`flex h-full w-full justify-center pb-16`}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

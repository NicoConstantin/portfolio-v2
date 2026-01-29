import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import { Providers } from '@/providers/Providers'
import Navbar from '@/components/common/navbar'
import './globals.css'
import Footer from '@/components/common/footer'

const display = Sora({
  weight: ['300', '400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
})

const body = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Constantin Nicolas - Software Developer',
  description: 'Software developer specialized in creating modern and efficient solutions',
}

type ParamsRootLayout = Promise<{ locale: string }>

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: ParamsRootLayout
}>) {
  const { locale } = await params

  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        className={`${display.variable} ${body.variable} relative flex min-h-screen w-full flex-col items-center justify-center bg-background text-foreground font-body transition-colors duration-300 ease-in-out overflow-x-hidden`}
      >
        <Providers>
          <Navbar />
          <main className={`flex h-full w-full justify-center pb-16`}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

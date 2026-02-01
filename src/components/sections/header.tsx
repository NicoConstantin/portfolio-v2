import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Mail, ArrowDown } from 'lucide-react'
import { Button } from '../ui/button'
import Particles from '../common/particles'

export default function Header() {
  const t = useTranslations('Header')

  return (
    <section id="Home" className="relative flex h-full min-h-svh w-full flex-col pt-20 md:pt-32 xl:pt-40">
      <Particles className="absolute inset-0 -z-20 opacity-95 mix-blend-screen" />
      <div className="xs:mt-0 absolute -z-10 mt-4 -ml-6 rotate-180">
        <Particles
          count={40}
          className="absolute inset-0 z-0 opacity-95 mix-blend-screen"
          style={{
            WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, transparent 28%, #000 58%, #000 100%)',
            maskImage: 'radial-gradient(circle at center, transparent 0%, transparent 28%, #000 58%, #000 100%)',
          }}
        />
        <div className="absolute left-1/2 top-1/2 z-0 h-[min(28rem,100vw)] w-[min(28rem,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <Image src="/headerNeon.svg" width={600} height={800} className="relative z-10" alt="bg-header" />
      </div>

      <div className="z-30 flex h-full w-full grow flex-col justify-between pt-20">
        <div className="flex w-full flex-col gap-y-4">
          <div className="space-y-4">
            <h2 className="text-primary text-lg lg:text-xl">{t('hello')}</h2>
            <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] dark:text-white">
              NICOLAS
              <br />
              CONSTANTIN
            </h1>
            <p className="max-w-xl text-md xs:text-lg sm:text-xl lg:text-2xl text-muted-foreground">
              {t('description')}
            </p>
          </div>

          <div className="mt-10 flex items-center justify-start gap-4">
            <Button size="xl" variant="default">
              <a
                href="mailto:nicoconstantin11@gmail.com"
                target="_blank"
                className={`whitespace-nowrap flex items-center justify-start gap-x-2 text-white`}
              >
                <Mail className="xs:flex hidden" />
                {t('button1')}
              </a>
            </Button>
            <Button size="xl" variant="outline">
              <a
                href="https://www.dropbox.com/scl/fi/8ny7rco9z8j7b3kmmnyg0/Nicolas-Constantin-Full-Stack-Developer.pdf?rlkey=vm3mm3pu2g22qnjrtu1m6xf3l&st=kovgaczr&dl=0"
                target="_blank"
              >
                {t('button2')}
              </a>
            </Button>
          </div>
        </div>

        <Link
          href="#about"
          className="animate-bounce mb-4 flex flex-col items-center justify-center gap-y-2 self-center text-muted-foreground"
        >
          <span className="text-xs font-medium uppercase tracking-widest lg:text-sm">{t('scroll')}</span>
          <ArrowDown className="text-3xl" />
        </Link>
      </div>
    </section>
  )
}

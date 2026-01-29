import { Link } from '@/i18n/navigation'
import { CodeXml, Github, Linkedin, FileUser } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('')
  const footerOptions: string[] = ['home', 'about', 'projects']
  const iconClass: string = 'text-base sm:text-lg cursor-pointer transition-colors hover:text-primary'

  return (
    <footer className="bg-background/40 z-50 w-full flex items-center justify-center border-t backdrop-blur-md">
      <div className="flex flex-col sm:flex-row w-full max-w-6xl items-center sm:items-start justify-between gap-8 px-6 sm:px-8 py-8 sm:py-12">
        <Link href="#home" className="flex items-center justify-center gap-x-2 sm:mb-0">
          <CodeXml className="text-primary text-3xl" />
          <span className="font-display font-bold dark:text-white">Nicolas Constantin</span>
        </Link>

        <div className="flex flex-col items-center justify-center">
          <ul className="flex items-center gap-x-6 text-sm font-medium">
            {footerOptions.map((option: string) => {
              return (
                <Link href={`#${option}`} key={option} className="hover:text-primary transition-colors">
                  {t(`Navbar.${option}`)}
                </Link>
              )
            })}
          </ul>
          <span className="hidden sm:block text-muted-foreground text-xs text-center mt-12 tracking-wider">
            {t('Footer.copyright')}
          </span>
        </div>

        <div className="flex items-center gap-x-4">
          <a href="https://github.com/NicoConstantin" target={'_blank'}>
            <Github className={iconClass} />
          </a>
          <a href="https://www.linkedin.com/in/nico-constantin/" target={'_blank'}>
            <Linkedin className={iconClass} />
          </a>
          <a
            href="https://www.dropbox.com/scl/fi/8ny7rco9z8j7b3kmmnyg0/Nicolas-Constantin-Full-Stack-Developer.pdf?rlkey=vm3mm3pu2g22qnjrtu1m6xf3l&st=kovgaczr&dl=0"
            target={'_blank'}
          >
            <FileUser className={iconClass} />
          </a>
        </div>
        <span className="block sm:hidden text-muted text-xs text-center mt-2 tracking-wider">
          {t('Footer.copyright')}
        </span>
      </div>
    </footer>
  )
}

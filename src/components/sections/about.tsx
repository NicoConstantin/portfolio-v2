import { titleClass } from '@/data/defaultClasses'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function About() {
  const t = useTranslations('About')
  return (
    <section className="relative flex flex-col">
      <div id="about" className="absolute -top-[100px]" />

      <h1 className={titleClass}>{t('title')}</h1>

      <div className="relative flex w-full items-start justify-between gap-x-8">
        <p className="w-full whitespace-pre-line text-base lg:text-lg leading-relaxed md:w-7/12 text-muted-foreground">
          {t.rich('description', {
            highlight: chunks => <span className="font-semibold italic text-primary">{chunks}</span>,
            italic: chunks => <span className="italic text-foreground/90">{chunks}</span>,
          })}
        </p>

        <Image
          src={'/triangleNeon.svg'}
          width={500}
          height={500}
          alt="neon guy"
          className="-mt-20 hidden w-4/12 scale-110 object-top md:flex"
        />
      </div>
    </section>
  )
}

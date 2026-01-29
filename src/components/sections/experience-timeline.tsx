import { titleClass } from '@/data/defaultClasses'
import { workingExperience } from '@/data/experience'
import { useTranslations } from 'next-intl'

export default function ExperienceTimeline() {
  const t = useTranslations('Experience')
  return (
    <section className="flex w-full lg:w-9/12 flex-col mx-auto">
      <h1 className={titleClass}>{t('title')}</h1>
      <p className="mb-12 text-base lg:text-lg text-muted-foreground">{t('description')}</p>

      <ol className="relative flex flex-col gap-y-4 timeline-line">
        {workingExperience.map(exp => (
          <li className="ms-6 lg:ms-8" key={exp}>
            <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full bg-primary ring-4 ring-primary/20"></div>
            <time className="text-sm font-semibold uppercase tracking-wider mb-2">{t(`works.${exp}.date`)}</time>
            <h3 className="text-lg lg:text-xl font-semibold dark:text-white mb-2">{t(`works.${exp}.title`)}</h3>
            <p className="mb-4 text-sm lg:text-base leading-relaxed text-muted-foreground">
              {t.rich(`works.${exp}.description`, {
                main: chunks => <span className="font-medium text-primary">{chunks}</span>,
                second: chunks => <span className="italic text-muted-foreground/90">{chunks}</span>,
              })}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

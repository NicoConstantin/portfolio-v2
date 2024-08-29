import { titleClass } from '@/data/defaultClasses';
import { workingExperience } from '@/data/experience';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function ExperienceTimeline() {
  const t = useTranslations('Experience');
  return (
    <div className="flex w-full flex-col">
      <h1 className={titleClass}>{t('title')}</h1>
      <p className="mb-8 text-lg text-gray-300 lg:text-xl">{t('description')}</p>

      <ol className="relative flex flex-col gap-y-4 border-s border-gray-700">
        {workingExperience.map((exp) => (
          <li className="ms-4" key={exp}>
            <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border border-gray-900 bg-secondary"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              {t(`works.${exp}.date`)}
            </time>
            <h3 className="text-lg font-semibold text-white">{t(`works.${exp}.title`)}</h3>
            <p className="mb-4 text-base font-normal text-gray-400">
              {t.rich(`works.${exp}.description`, {
                main: (chunks) => <span className="text-[#9c7dd2]">{chunks}</span>,
                second: (chunks) => <span className="italic text-gray-200">{chunks}</span>,
              })}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

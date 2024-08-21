import { useTranslations } from 'next-intl';
import React from 'react';

export default function About() {
  const t = useTranslations('About');
  return (
    <div id="about" className="flex flex-col gap-y-6">
      <h1 className="text-4xl">{t('title')}</h1>
      <p className="text-lg">{t('description')}</p>
    </div>
  );
}

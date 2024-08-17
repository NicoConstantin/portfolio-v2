import { useTranslations } from 'next-intl';
import React from 'react';

export default function About() {
  const t = useTranslations('About');
  return (
    <div className="flex flex-col gap-y-4 py-6">
      <h1 className="text-2xl">{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}

import React from 'react';
import { Referrer } from '@/types';
import { useTranslations } from 'next-intl';

export default function Recommendations() {
  const t = useTranslations('Recommendations');
  const referrers: Referrer[] = [
    { key: 'tano', name: 'Tano Franco Bevacqua', img: '/' },
    { key: 'fer', name: 'Fernando Gabriel Villabrille', img: '/' },
    { key: 'giu', name: 'Giuseppe Schiavello', img: '/' },
    { key: 'lino', name: 'Lino Hassan', img: '/' },
    { key: 'agus', name: 'Agustin Maurel', img: '/' },
  ];
  return (
    <div className="flex flex-col">
      <h1>{t('title')}</h1>
      <span>{t('description')}</span>
      {/*HERE GOES A CARROUSEL OF RECOMMENDCARDS */}
    </div>
  );
}

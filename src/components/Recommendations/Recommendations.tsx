'use client';
import React from 'react';
import { Referrer } from '@/types';
import { useTranslations } from 'next-intl';
import Viewer from '../Carrousel/Viewer';
import { titleClass } from '@/data/defaultClasses';
import RecommendCard from '../RecommendCard/RecommendCard';

export default function Recommendations() {
  const t = useTranslations('Recommendations');
  const referrers: Referrer[] = [
    { key: 'tano', name: 'Franco Bevacqua', img: '/tano.jpeg' },
    { key: 'giu', name: 'Giuseppe Schiavello', img: '/giu.jpeg' },
    { key: 'agus', name: 'Agustin Maurel', img: '/agus.jpg' },
    { key: 'lino', name: 'Lino Hassan', img: '/lino.jpeg' },
    { key: 'fer', name: 'Fernando Villabrille', img: '/fer.jpeg' },
  ];

  return (
    <div className="relative flex flex-col">
      <div id="testimonials" className="absolute -top-[100px]" />
      <h1 className={titleClass}>{t('title')}</h1>
      <span className="text-lg">{t('description')}</span>
      {/*HERE GOES A CARROUSEL OF RECOMMENDCARDS */}
      <Viewer
        items={referrers}
        renderItem={(ref) => <RecommendCard refferer={ref as Referrer} />}
      />
    </div>
  );
}

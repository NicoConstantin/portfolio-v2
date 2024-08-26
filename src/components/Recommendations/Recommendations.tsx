'use client';
import React, { useEffect, useState } from 'react';
import { Referrer } from '@/types';
import { useTranslations } from 'next-intl';
import Viewer from '../Carrousel/Viewer';
import { titleClass } from '@/data/defaultClasses';
import RecommendCard from '../RecommendCard/RecommendCard';

export default function Recommendations() {
  const t = useTranslations('Recommendations');
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateIsLargeScreen = () => setIsLargeScreen(window.innerWidth >= 768); // lg breakpoint in Tailwind is 1024px

    updateIsLargeScreen(); // Set initial value
    window.addEventListener('resize', updateIsLargeScreen);

    return () => window.removeEventListener('resize', updateIsLargeScreen);
  }, []);

  const referrers: Referrer[] = [
    { key: 'tano', name: 'Franco Bevacqua', img: '/tano.jpeg' },
    { key: 'giu', name: 'Giuseppe Schiavello', img: '/giu.jpeg' },
    { key: 'agus', name: 'Agustin Maurel', img: '/agus.jpg' },
    { key: 'lino', name: 'Lino Hassan', img: '/lino.jpeg' },
    { key: 'fer', name: 'Fernando Villabrille', img: '/fer.jpeg' },
  ];

  return (
    <div className="relative flex flex-col">
      <div id="recommendations" className="absolute -top-[100px]" />
      <h1 className={titleClass}>{t('title')}</h1>
      <p className="mb-8 text-lg text-gray-300 lg:text-xl">{t('description')}</p>
      {/*HERE GOES A CARROUSEL OF RECOMMENDCARDS */}
      <Viewer
        items={referrers}
        renderItem={(ref) => <RecommendCard refferer={ref as Referrer} />}
        slidesOnScreen={isLargeScreen ? 2 : 1}
      />
    </div>
  );
}

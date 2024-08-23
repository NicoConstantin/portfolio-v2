import { titleClass } from '@/data/defaultClasses';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function About() {
  const t = useTranslations('About');
  return (
    <div className="relative flex flex-col">
      <div id="about" className="absolute -top-[100px]" />
      <h1 className={titleClass}>{t('title')}</h1>
      <div className="flex w-full items-start">
        <p className="text-lg lg:w-8/12 lg:text-xl">{t('description')}</p>
        <Image
          src={'/test.svg'}
          width={500}
          height={500}
          alt="neon guy"
          className="-mt-16 hidden object-top lg:flex lg:w-4/12"
        />
      </div>
    </div>
  );
}

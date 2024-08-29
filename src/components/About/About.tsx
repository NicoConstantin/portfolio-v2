import { titleClass } from '@/data/defaultClasses';
import { Highlight } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function About() {
  const t = useTranslations('About');
  return (
    <div className="relative flex flex-col">
      <div id="about" className="absolute -top-[100px]" />
      <h1 className={titleClass}>{t('title')}</h1>
      <div className="relative flex w-full items-start gap-x-8">
        <p className="w-full whitespace-pre-line text-lg text-gray-300 md:w-8/12 lg:text-xl">
          {t.rich('description', {
            highlight: (chunks) => (
              <span className="px-1 py-0.5 font-bold italic text-[#8f60d1]">{chunks}</span>
            ),
            italic: (chunks) => <span className="italic">{chunks}</span>,
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
    </div>
  );
}

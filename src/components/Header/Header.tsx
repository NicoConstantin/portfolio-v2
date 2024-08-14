import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaGithubSquare, FaLinkedin, FaLongArrowAltDown } from 'react-icons/fa';
import { TbFileCv } from 'react-icons/tb';

export default function Header(): JSX.Element {
  const t = useTranslations('Header');
  const baseClassButton: string = 'px-4 py-1.5 rounded-md';
  const iconClass: string = 'text-2xl hover:text-slate-100 cursor-pointer';
  return (
    <div className="h-full w-full text-white">
      <Image
        src="/neon.svg"
        width={400}
        height={900}
        className="absolute -z-10 -ml-6 -mt-24"
        alt="bg-header"
      />

      <div className="relative z-30 flex flex-col">
        <h1 className="flex flex-col">
          <span>{t('hello')}</span>
          <span>Nicolas</span>
          <span>Constantin</span>
          <span className="mt-1">{t('description')}</span>
        </h1>

        <div className="flex items-center justify-start gap-x-4">
          <button className={`${baseClassButton} bg-white text-black hover:bg-slate-100`}>
            {t('talkButton')}
          </button>
          <button className={`${baseClassButton}`}>{t('workButton')}</button>
        </div>

        <div className="flex items-center gap-x-2">
          <FaGithubSquare className={iconClass} />
          <FaLinkedin className={iconClass} />
          <TbFileCv className={iconClass} />
        </div>

        <FaLongArrowAltDown />
      </div>
    </div>
  );
}

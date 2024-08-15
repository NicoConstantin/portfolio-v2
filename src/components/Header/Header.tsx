import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaGithubSquare, FaLinkedin, FaLongArrowAltDown } from 'react-icons/fa';
import { TbFileCv } from 'react-icons/tb';

export default function Header(): JSX.Element {
  const t = useTranslations('Header');
  const baseClassButton: string = 'px-4 py-1.5 rounded-md';
  const iconClass: string =
    'text-2xl hover:text-slate-100 cursor-pointer transition duration-300 ease-in-out';
  return (
    <div className="relative flex h-full min-h-dvh w-full flex-col pt-12 text-white">
      <Image
        src="/neon.svg"
        width={400}
        height={900}
        className="animate-spin-slow absolute -z-10 -ml-6"
        alt="bg-header"
      />

      <div className="z-30 flex h-full w-full flex-grow flex-col justify-between pt-12">
        <div className="flex w-full flex-col gap-y-4">
          <h1 className="font-bebas flex flex-col text-[3rem]">
            <span className="text-[2rem]">{t('hello')}</span>
            <span>Nicolas</span>
            <span>Constantin</span>
            <span className="mt-1 text-lg">{t('description')}</span>
          </h1>

          <div className="flex items-center justify-start gap-x-4">
            <button
              className={`${baseClassButton} border border-white bg-white text-black hover:bg-slate-100`}
            >
              {t('talkButton')}
            </button>
            <button className={`${baseClassButton} border border-white/50 hover:bg-white/20`}>
              {t('workButton')}
            </button>
          </div>

          <div className="flex items-center gap-x-2">
            <FaGithubSquare className={iconClass} />
            <FaLinkedin className={iconClass} />
            <TbFileCv className={iconClass} />
          </div>
        </div>
        <div className="mb-4 flex flex-col items-center justify-center gap-y-2 self-center">
          <span className="text-xs">{t('scroll')}</span>
          <FaLongArrowAltDown className="animate-bounce text-3xl" />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { GoArrowDown } from 'react-icons/go';
import { TbFileCv } from 'react-icons/tb';

export default function Header(): JSX.Element {
  const t = useTranslations('Header');
  const baseClassButton: string = 'w-28 px-4 py-1.5 rounded-md transition duration-300 ease-in-out';
  const iconClass: string =
    'text-2xl hover:text-[#C3C3C3] cursor-pointer transition duration-300 ease-in-out';
  return (
    <div className="relative flex h-full min-h-dvh w-full flex-col pt-12 text-white">
      <Image
        src="/neon.svg"
        width={600}
        height={800}
        className="absolute -z-10 -ml-6 rotate-180"
        alt="bg-header"
      />

      <div className="z-30 flex h-full w-full flex-grow flex-col justify-between pt-20">
        <div className="flex w-full flex-col gap-y-4">
          <h1 className="flex flex-col text-[2.75rem]">
            <span className="text-2xl">{t('hello')}</span>
            <span className="font-black">NICOLAS</span>
            <span className="font-black">CONSTANTIN</span>
            <span className="mt-6 text-xl">{t('description')}</span>
          </h1>

          <div className="mt-10 flex items-center justify-start gap-x-4 text-lg">
            <button
              className={`${baseClassButton} border border-white bg-white text-black hover:border-[#C3C3C3] hover:bg-[#C3C3C3]`}
            >
              {t('talkButton')}
            </button>
            <button
              className={`${baseClassButton} border border-white/50 bg-white/5 hover:bg-white/20`}
            >
              {t('workButton')}
            </button>
          </div>

          <div className="mt-4 flex items-center gap-x-4">
            <FaGithubSquare className={iconClass} />
            <FaLinkedin className={iconClass} />
            <TbFileCv className={iconClass} />
          </div>
        </div>

        <GoArrowDown className="mb-4 animate-bounce self-center text-3xl" />
      </div>
    </div>
  );
}

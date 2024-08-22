import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { GoArrowDown } from 'react-icons/go';
import Social from '../Social/Social';
import { Link } from '@/navigation';

export default function Header(): JSX.Element {
  const t = useTranslations('Header');
  const baseClassButton: string =
    'w-28 px-4 py-1.5 rounded-lg transition duration-300 ease-in-out shadow shadow-lg ';

  return (
    <div id="Home" className="relative flex h-full min-h-svh w-full flex-col pt-16">
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
            <span className="whitespace-nowrap font-black">NICOLAS</span>
            <span className="whitespace-nowrap font-black">CONSTANTIN</span>
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

          <Social containerClass="mt-4 flex items-center gap-x-4" />
        </div>

        <Link href="#about" offset={100} className="group mb-4 self-center">
          <GoArrowDown className="animate-bounce cursor-pointer text-3xl transition-all duration-500 ease-in-out group-hover:text-purple-700" />
        </Link>
      </div>
    </div>
  );
}

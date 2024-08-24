import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { GoArrowDown } from 'react-icons/go';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Link } from '@/navigation';

export default function Header(): JSX.Element {
  const t = useTranslations('Header');
  const baseClassButton: string =
    'px-4 py-1.5 rounded-lg transition duration-300 ease-in-out shadow-lg lg:px-6 lg:py-2.5 whitespace-nowrap';

  return (
    <div id="Home" className="relative flex h-full min-h-svh w-full flex-col pt-20">
      <Image
        src="/neon.svg"
        width={600}
        height={800}
        className="absolute -z-10 -ml-6 mt-4 rotate-180 xs:mt-0"
        alt="bg-header"
      />

      <div className="z-30 flex h-full w-full flex-grow flex-col justify-between pt-20">
        <div className="flex w-full flex-col gap-y-4">
          <h1 className="flex flex-col text-[2.75rem] lg:text-6xl">
            <span className="text-2xl lg:text-3xl">{t('hello')}</span>
            <span className="whitespace-nowrap font-black lg:mb-2 lg:mt-6">NICOLAS</span>
            <span className="whitespace-nowrap font-black">CONSTANTIN</span>
            <span className="mt-6 text-xl lg:mt-10 lg:text-2xl">{t('description')}</span>
          </h1>

          <div className="text-md mt-10 flex items-center justify-start gap-x-4 lg:text-lg">
            <a
              href="mailto:nicoconstantin11@gmail.com"
              target="_blank"
              className={`${baseClassButton} flex items-center justify-start gap-x-1 border border-light-purple bg-light-purple text-white hover:border-dark-purple hover:bg-dark-purple`}
            >
              <MdOutlineMailOutline size="1.5rem" className="hidden xs:flex" />
              {t('button1')}
            </a>
            <a
              href="https://www.dropbox.com/scl/fi/tlgstirgtyc0pagwqe3rh/CV-Nicolas-Constantin-Full-Stack-Developer.pdf?rlkey=1i6lrwg67sf8yu5g0yqwmf3ht&st=os14jrpe&dl=0"
              className={`${baseClassButton} border border-white/50 bg-white/5 hover:bg-white/20`}
              target="_blank"
            >
              {t('button2')}
            </a>
          </div>
        </div>

        <Link
          href="#about"
          className="group mb-4 flex flex-col items-center justify-center gap-y-2 self-center"
        >
          <span className="text-xs text-gray-400 lg:text-sm">{t('scroll')}</span>
          <GoArrowDown className="duration-400 animate-bounce cursor-pointer text-3xl text-gray-400 transition-all ease-in-out group-hover:text-purple-700" />
        </Link>
      </div>
    </div>
  );
}

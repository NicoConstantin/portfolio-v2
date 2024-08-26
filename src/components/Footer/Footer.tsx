import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { PiCodeDuotone } from 'react-icons/pi';
import { TbFileCv } from 'react-icons/tb';

export default function Footer() {
  const t = useTranslations('');
  const footerOptions: string[] = ['home', 'about'];
  const iconClass: string =
    'text-xl hover:text-white cursor-pointer transition duration-300 ease-in-out ';

  return (
    <footer className="z-50 flex w-full flex-col items-center justify-center bg-neutral-950/70 px-6 py-6 text-gray-400">
      <div className="mb-2 flex w-full max-w-screen-lg items-center justify-between md:px-8 md:py-8">
        <div className="flex items-center gap-x-8">
          <Link
            href="#home"
            className="flex items-center justify-center text-4xl text-white sm:mb-0"
          >
            <PiCodeDuotone />
          </Link>

          <ul className="flex items-center gap-x-4 text-sm font-medium sm:mb-0">
            {footerOptions.map((option: string) => {
              return (
                <Link
                  href={`#${option}`}
                  key={option}
                  className="transition-all duration-300 ease-in-out hover:text-white"
                >
                  {t(`Navbar.${option}`)}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-x-4">
          <FaGithubSquare className={iconClass} />
          <FaLinkedin className={iconClass} />
          <TbFileCv className={iconClass} />
        </div>
      </div>
      <hr className="my-4 border-gray-700 sm:mx-auto lg:my-8" />
      <span className="block text-sm sm:text-center">{t('Footer.copyright')}</span>
    </footer>
  );
}

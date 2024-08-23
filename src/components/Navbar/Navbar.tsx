'use client';

import React, { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CgMenu, CgClose } from 'react-icons/cg';
import {
  Slide,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  IconButton,
  useOutsideClick,
} from '@chakra-ui/react';
import { PiCodeDuotone } from 'react-icons/pi';
import { MdLanguage } from 'react-icons/md';
import { Link } from '@/navigation';

export default function Navbar(): JSX.Element {
  const t = useTranslations('Navbar');
  const popoverRef = useRef(null);
  const [isHamburguerOpen, setIsHamburguerOpen] = useState<boolean>(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState<boolean>(false);
  const navOptions: string[] = ['home', 'about', 'projects', 'skills', 'recommendations'];
  const langOptions: string[] = ['en', 'fr', 'es'];

  useOutsideClick({
    ref: popoverRef,
    handler: () => setIsLangMenuOpen(false),
  });

  const HamburguerButton = ({
    isOpen,
    onClick,
  }: {
    isOpen: boolean;
    onClick: Function;
  }): JSX.Element => {
    const Icon = isOpen ? CgClose : CgMenu;
    return (
      <button onClick={() => onClick()} className={'z-40 text-lg'}>
        <Icon />
      </button>
    );
  };

  return (
    <nav className="fixed top-0 z-[80] flex h-14 w-full items-center justify-center bg-neutral-950/90 px-6 text-white shadow-lg backdrop-blur backdrop-brightness-110 backdrop-saturate-150 md:px-8">
      <div className="z-50 flex h-full w-full max-w-screen-xl items-center justify-between">
        <Link href={`#home`} className="z-40">
          <PiCodeDuotone className="text-xl" />
        </Link>

        {/*MENU HAMBURGUER */}
        <div className="flex items-center md:hidden">
          <HamburguerButton
            isOpen={isHamburguerOpen}
            onClick={() => setIsHamburguerOpen(!isHamburguerOpen)}
          />
          <Slide in={isHamburguerOpen} direction={'top'}>
            <div className="z-30 mt-14 flex flex-col items-center justify-start gap-y-4 rounded-b-lg bg-neutral-950/90 p-10 text-white shadow-lg">
              {navOptions.map((option: string) => {
                return (
                  <Link
                    href={`#${option}`}
                    key={option}
                    className="text-md text-gray-300 transition-all duration-300 ease-in-out hover:text-white"
                    onClick={() => setIsHamburguerOpen(false)}
                  >
                    {t(option)}
                  </Link>
                );
              })}
              <Divider orientation="horizontal" />
              <div className="flex w-full items-center justify-center gap-x-6">
                {langOptions.map((lng: string) => {
                  return (
                    <Link
                      href="/"
                      locale={lng}
                      key={lng}
                      className="text-sm text-gray-300 transition-all duration-300 ease-in-out hover:text-white"
                      onClick={() => setIsHamburguerOpen(false)}
                    >
                      {t(`Languages.${lng}`)}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Slide>
        </div>

        {/*MENU TABLET-DESKTOP */}
        <ul className="hidden items-center md:flex md:gap-x-6 lg:gap-x-8">
          {navOptions.map((option: string) => {
            return (
              <Link
                href={`#${option}`}
                key={option}
                className="hover:text-light-purple text-lg text-white transition-all duration-300 ease-in-out"
              >
                {t(option)}
              </Link>
            );
          })}
          <Popover isOpen={isLangMenuOpen} placement="bottom-end">
            <PopoverTrigger>
              <Button
                as={IconButton}
                variant="link"
                className="bg-transparent hover:bg-transparent"
                icon={
                  <MdLanguage
                    className="hover:!text-light-purple cursor-pointer text-lg text-white transition-all duration-300 ease-in-out"
                    onClick={() => setIsLangMenuOpen((prev) => !prev)}
                  />
                }
              ></Button>
            </PopoverTrigger>
            <PopoverContent
              ref={popoverRef}
              className="mt-1.5 flex h-32 max-w-[160px] flex-col gap-y-2 rounded-t-none rounded-bl-lg rounded-br-none border-0 bg-neutral-950/90 px-8 py-4 shadow-lg"
            >
              {langOptions.map((lng: string) => {
                return (
                  <Link
                    href="/"
                    locale={lng}
                    key={lng}
                    className="text-md hover:text-light-purple transition-all duration-300 ease-in-out"
                    onClick={() => setIsLangMenuOpen(false)}
                  >
                    {t(`Languages.${lng}`)}
                  </Link>
                );
              })}
            </PopoverContent>
          </Popover>
        </ul>
      </div>
    </nav>
  );
}

'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { CgMenu, CgClose } from 'react-icons/cg';
import { MenuItem, MenuList, Menu, IconButton, MenuButton, Slide } from '@chakra-ui/react';
import { PiCodeDuotone } from 'react-icons/pi';
import { MdLanguage } from 'react-icons/md';
import { Link } from '@/navigation';

export default function Navbar(): JSX.Element {
  const t = useTranslations('Navbar');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navOptions: string[] = ['home', 'about', 'projects', 'skills', 'contact'];
  const langOptions: string[] = ['en', 'fr', 'es'];

  const MenuIcon = ({ isOpen, onClick }: { isOpen: boolean; onClick: Function }): JSX.Element => {
    const Icon = isOpen ? CgClose : CgMenu;
    return (
      <button onClick={() => onClick()} className={'z-40'}>
        <Icon />
      </button>
    );
  };

  return (
    <nav className="fixed top-0 z-50 flex h-12 w-full items-center justify-center bg-black/20 text-white shadow-lg backdrop-blur backdrop-brightness-110 backdrop-saturate-150">
      <div className="flex h-full w-full max-w-screen-xl items-center justify-between px-4 md:px-6">
        <PiCodeDuotone />

        {/*MENU HAMBURGUER */}
        <div className="flex items-center md:hidden">
          <MenuIcon isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          <Slide in={isMenuOpen} direction={'top'} style={{ zIndex: 10 }}>
            <div className="z-20 mt-12 flex flex-col items-center justify-start gap-y-4 rounded-b-md bg-black/50 p-10 text-white shadow-md">
              {navOptions.map((option: string) => {
                return <Link href={`#${option}`}>{t(option)}</Link>;
              })}
              <div className="flex w-full items-center justify-center gap-x-2">
                {langOptions.map((lng: string) => {
                  return (
                    <Link href="/" locale={lng} key={lng}>
                      {t(`Languages.${lng}`)}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Slide>
        </div>

        {/*MENU TABLET-DESKTOP */}
        <ol className="hidden items-center gap-x-6 md:flex">
          {navOptions.map((option: string) => {
            return (
              <Link href={`#${option}`} key={option}>
                {t(option)}
              </Link>
            );
          })}
          <Menu isLazy gutter={4}>
            <MenuButton
              as={IconButton}
              aria-label="Languages"
              icon={<MdLanguage />}
              variant="none"
            />
            <MenuList bg="black" color="white" w="100%">
              {langOptions.map((lng: string) => {
                return (
                  <Link href="/" locale={lng} key={lng}>
                    <MenuItem key={lng} bg="black" color="white">
                      {t(`Languages.${lng}`)}
                    </MenuItem>
                  </Link>
                );
              })}
            </MenuList>
          </Menu>
        </ol>
      </div>
    </nav>
  );
}

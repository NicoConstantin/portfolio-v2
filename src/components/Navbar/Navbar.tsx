'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { CgMenu } from 'react-icons/cg';

export default function Navbar(): JSX.Element {
  const t = useTranslations('Navbar');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navOptions: string[] = ['home', 'about', 'projects', 'skills', 'contact'];

  return (
    <nav className="flex h-12 items-center px-4 text-white">
      <CgMenu style={{ color: 'white' }} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      {isMenuOpen && (
        <ol className="flex flex-col items-center">
          {navOptions.map((option: string) => {
            return <li key={option}>{t(option)}</li>;
          })}
        </ol>
      )}
    </nav>
  );
}

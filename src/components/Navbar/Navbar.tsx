'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { CgMenu, CgClose } from 'react-icons/cg';
import { MenuItem, MenuList, Menu, IconButton, MenuButton } from '@chakra-ui/react';

export default function Navbar(): JSX.Element {
  const t = useTranslations('Navbar');

  const navOptions: string[] = ['home', 'about', 'projects', 'skills', 'contact'];

  return (
    <nav className="flex h-12 items-center justify-end px-4 text-white">
      <div className="flex items-center">
        <Menu isLazy gutter={4}>
          {({ isOpen }) => (
            <>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={
                  isOpen ? (
                    <CgClose style={{ color: 'white' }} />
                  ) : (
                    <CgMenu style={{ color: 'white' }} />
                  )
                }
                variant="none"
              />
              <MenuList bg="black" color="white" w="100%">
                {navOptions.map((option: string) => {
                  return (
                    <MenuItem key={option} bg="black" color="white">
                      {t(option)}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </>
          )}
        </Menu>
      </div>
    </nav>
  );
}

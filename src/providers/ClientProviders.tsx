'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { IconContext } from 'react-icons';

export function ClientProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <CacheProvider>
      <IconContext.Provider value={{ size: '1.5em', className: 'global-class-name' }}>
        <ChakraProvider>{children}</ChakraProvider>
      </IconContext.Provider>
    </CacheProvider>
  );
}

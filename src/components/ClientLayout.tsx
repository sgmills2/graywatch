'use client';

import React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { GlobalStyles } from '@mui/joy';
import Navbar from './Navbar';
import baseTheme from '../lib/theme';

interface ClientLayoutProps {
  children: React.ReactNode;
  fontFamily: string;
}

export default function ClientLayout({ children, fontFamily }: ClientLayoutProps) {
  const theme = React.useMemo(
    () => extendTheme({
      ...baseTheme,
      fontFamily: {
        body: fontFamily,
        display: fontFamily,
      },
    }),
    [fontFamily]
  );

  return (
    <CssVarsProvider 
      theme={theme} 
      defaultMode="dark" 
      disableTransitionOnChange
      colorSchemeSelector="#root"
      modeStorageKey="graywatch-color-scheme"
      defaultColorScheme={{
        light: 'light',
        dark: 'dark',
      }}
    >
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            fontFamily,
            backgroundColor: 'var(--joy-palette-background-body)',
            color: 'var(--joy-palette-text-primary)',
          },
          ':root': {
            '--joy-shadowRing': '0 0 #000',
          },
        }}
      />
      <Navbar />
      {children}
    </CssVarsProvider>
  );
} 
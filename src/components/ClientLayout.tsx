'use client';

import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Navbar from './Navbar';

interface ClientLayoutProps {
  children: React.ReactNode;
  theme: any; // Using any for brevity, but you could define a proper theme type
}

export default function ClientLayout({ children, theme }: ClientLayoutProps) {
  return (
    <CssVarsProvider theme={theme} defaultMode="light">
      <CssBaseline />
      <Navbar />
      {children}
    </CssVarsProvider>
  );
} 
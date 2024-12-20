'use client';

import React from 'react';
import { Box } from '@mui/joy';

interface LogoProps {
  size?: number;
}

export default function Logo({ size = 40 }: LogoProps) {
  return (
    <Box
      component="svg"
      viewBox="0 0 100 60"
      width={size}
      height={size * 0.6}
      sx={{ fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}
    >
      {/* Three mountain peaks in grayscale */}
      <path
        d="M10 50 L30 20 L50 50 Z"
        fill="#212529"
      />
      <path
        d="M30 50 L50 10 L70 50 Z"
        fill="#495057"
      />
      <path
        d="M50 50 L70 25 L90 50 Z"
        fill="#6c757d"
      />
    </Box>
  );
} 
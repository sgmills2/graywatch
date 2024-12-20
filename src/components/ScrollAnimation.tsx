'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export default function ScrollAnimation({ 
  children, 
  direction = 'up', 
  delay = 0 
}: ScrollAnimationProps) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.2 1']
  });

  const getInitialY = () => {
    switch (direction) {
      case 'up': return 100;
      case 'down': return -100;
      default: return 0;
    }
  };

  const getInitialX = () => {
    switch (direction) {
      case 'left': return 100;
      case 'right': return -100;
      default: return 0;
    }
  };

  const y = useTransform(scrollYProgress, [0, 1], [getInitialY(), 0]);
  const x = useTransform(scrollYProgress, [0, 1], [getInitialX(), 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        y: direction === 'up' || direction === 'down' ? y : 0,
        x: direction === 'left' || direction === 'right' ? x : 0,
        opacity
      }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
} 
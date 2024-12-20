'use client';

import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link as JoyLink } from '@mui/joy';
import Link from 'next/link';

const SocialIcon = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <IconButton
    component={JoyLink}
    href={href}
    target="_blank"
    variant="plain"
    color="neutral"
  >
    {children}
  </IconButton>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Services',
      links: [
        { label: 'Data Science & Analytics', href: '/services/data-science' },
        { label: 'Data Engineering', href: '/services/data-engineering' },
        { label: 'Business Intelligence', href: '/services/business-intelligence' },
        { label: 'AI Solutions', href: '/services/ai-solutions' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: 'background.surface',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid xs={12} md={4}>
            <Box sx={{ mb: { xs: 4, md: 0 } }}>
              <Typography
                level="h4"
                sx={{
                  background: 'linear-gradient(45deg, var(--joy-palette-primary-200), var(--joy-palette-primary-400))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Graywatch
              </Typography>
              <Typography level="body-sm" sx={{ mb: 2, color: 'text.secondary' }}>
                Transforming data into actionable insights for businesses worldwide.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <SocialIcon href="https://github.com/graywatch">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://linkedin.com/company/graywatch">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </SocialIcon>              
              </Box>
            </Box>
          </Grid>
          {sections.map((section) => (
            <Grid key={section.title} xs={12} sm={6} md={4}>
              <Typography level="title-lg" sx={{ mb: 2 }}>
                {section.title}
              </Typography>
              <Box
                component="ul"
                sx={{
                  p: 0,
                  m: 0,
                  listStyle: 'none',
                }}
              >
                {section.links.map((link) => (
                  <Box
                    key={link.label}
                    component="li"
                    sx={{ mb: 1 }}
                  >
                    <Link
                      href={link.href}
                      style={{
                        textDecoration: 'none',
                        color: 'var(--joy-palette-text-secondary)',
                        transition: 'color 0.2s',
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            mt: 6,
            pt: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
          }}
        >
          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
            © {currentYear} Graywatch Analytics. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              '& a': {
                color: 'text.secondary',
                textDecoration: 'none',
                fontSize: 'sm',
                '&:hover': {
                  color: 'text.primary',
                },
              },
            }}
          >
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 
'use client';

import React from 'react';
import { Box, Container, IconButton, List, ListItem, Typography, Button, Sheet } from '@mui/joy';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <Sheet
      component="nav"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        bgcolor: 'background.body',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '64px',
          }}
        >
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Logo size={40} />
            <Typography
              level="h2"
              sx={{
                ml: 2,
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 800,
                letterSpacing: '-0.02em',
                background: 'linear-gradient(45deg, var(--joy-palette-primary-200), var(--joy-palette-primary-400))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(156, 39, 176, 0.3)',
              }}
            >
              Graywatch
            </Typography>
          </Link>

          {/* Desktop menu */}
          <List
            role="menubar"
            orientation="horizontal"
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
            }}
          >
            {navItems.map((item) => (
              <ListItem key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <Button
                    variant={pathname === item.href ? 'soft' : 'plain'}
                    color={pathname === item.href ? 'primary' : 'neutral'}
                  >
                    {item.label}
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>

          {/* Mobile menu button */}
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <span>☰</span>
          </IconButton>
        </Box>

        {/* Mobile menu */}
        {mobileOpen && (
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              bgcolor: 'background.body',
              borderTop: '1px solid',
              borderColor: 'divider',
              py: 2,
            }}
          >
            <List>
              {navItems.map((item) => (
                <ListItem key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      width: '100%',
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <Button
                      fullWidth
                      variant={pathname === item.href ? 'soft' : 'plain'}
                      color={pathname === item.href ? 'primary' : 'neutral'}
                    >
                      {item.label}
                    </Button>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Container>
    </Sheet>
  );
} 
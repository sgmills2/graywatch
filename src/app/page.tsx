'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/joy';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollAnimation from '../components/ScrollAnimation';
import Footer from '../components/Footer';

function PointillismBackground() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        opacity: 0.4,
        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
      }}
    >
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 4,
            height: 4,
            borderRadius: '50%',
            backgroundColor: `var(--joy-palette-primary-${Math.floor(Math.random() * 5 + 3)}00)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </Box>
  );
}

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'background.body' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <PointillismBackground />
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  level="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    mb: 2,
                    background: 'linear-gradient(45deg, var(--joy-palette-primary-200), var(--joy-palette-primary-400))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(156, 39, 176, 0.3)',
                  }}
                >
                  Transform Your Data into Actionable Insights
                </Typography>
                <Typography
                  level="h3"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    fontWeight: 'normal',
                  }}
                >
                  Expert consulting in data science, engineering, analytics, and AI solutions
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    component={Link}
                    href="/services"
                    size="lg"
                    variant="solid"
                    color="primary"
                  >
                    Explore Services
                  </Button>
                  <Button
                    component={Link}
                    href="/contact"
                    size="lg"
                    variant="outlined"
                    color="neutral"
                  >
                    Contact Us
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Preview Section */}
      <Box sx={{ py: 12 }}>
        <Container>
          <ScrollAnimation>
            <Typography
              level="h2"
              sx={{
                textAlign: 'center',
                mb: 8,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Our Services
            </Typography>
          </ScrollAnimation>
          <Grid container spacing={4}>
            {[
              {
                title: 'Data Science & Analytics',
                description: 'Transform raw data into actionable insights with ML and statistical analysis.',
                link: '/services/data-science',
              },
              {
                title: 'Data Engineering',
                description: 'Build robust data infrastructure and pipelines for efficient operations.',
                link: '/services/data-engineering',
              },
              {
                title: 'Business Intelligence',
                description: 'Get comprehensive insights into your business performance.',
                link: '/services/business-intelligence',
              },
              {
                title: 'AI Solutions',
                description: 'Leverage cutting-edge artificial intelligence to automate and innovate.',
                link: '/services/ai-solutions',
              },
            ].map((service, index) => (
              <Grid key={service.title} xs={12} md={6}>
                <ScrollAnimation delay={index * 0.2}>
                  <Box
                    component={Link}
                    href={service.link}
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      p: 4,
                      borderRadius: 'lg',
                      bgcolor: 'background.surface',
                      transition: 'all 0.2s',
                      '&:hover': {
                        bgcolor: 'background.level1',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Typography level="h3" sx={{ mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography level="body-md" sx={{ color: 'text.secondary' }}>
                      {service.description}
                    </Typography>
                  </Box>
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 12,
          bgcolor: 'background.level1',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <PointillismBackground />
        <Container>
          <ScrollAnimation>
            <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <Typography level="h2" sx={{ mb: 2 }}>
                Ready to Start Your Data Journey?
              </Typography>
              <Typography level="body-lg" sx={{ mb: 4, color: 'text.secondary' }}>
                Let's discuss how we can help transform your business with data.
              </Typography>
              <Button
                component={Link}
                href="/contact"
                size="lg"
                variant="solid"
                color="primary"
              >
                Get Started
              </Button>
            </Box>
          </ScrollAnimation>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
} 
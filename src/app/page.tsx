'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/joy';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'background.body', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Container 
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        sx={{ 
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          textAlign: 'center'
        }}
      >
        <Typography
          level="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 2,
            background: 'linear-gradient(45deg, var(--joy-palette-primary-500), var(--joy-palette-primary-700))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Transform Your Data Journey
        </Typography>
        <Typography
          level="h3"
          sx={{ 
            mb: 4,
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Expert consulting in data science, engineering, analytics, and AI solutions
        </Typography>
        <Button
          size="lg"
          variant="solid"
          color="primary"
          sx={{ mr: 2 }}
        >
          Get Started
        </Button>
        <Button
          size="lg"
          variant="outlined"
          color="neutral"
        >
          Learn More
        </Button>
      </Container>

      {/* Services Section */}
      <Box 
        sx={{ 
          bgcolor: 'background.level1',
          py: { xs: 8, md: 12 }
        }}
      >
        <Container>
          <Grid container spacing={4}>
            {[
              {
                title: 'Data Science',
                description: 'Turn your data into actionable insights with advanced analytics and machine learning',
                icon: '🔬'
              },
              {
                title: 'Data Engineering',
                description: 'Build robust data pipelines and infrastructure for seamless data operations',
                icon: '⚙️'
              },
              {
                title: 'Analytics',
                description: 'Make data-driven decisions with comprehensive business intelligence solutions',
                icon: '📊'
              },
              {
                title: 'AI Solutions',
                description: 'Leverage cutting-edge artificial intelligence to automate and innovate',
                icon: '🤖'
              }
            ].map((service, index) => (
              <Grid key={service.title} xs={12} sm={6} md={3}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    bgcolor: 'background.surface',
                    borderRadius: 'lg',
                    boxShadow: 'sm',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 'md',
                    }
                  }}
                >
                  <Typography level="h2" sx={{ fontSize: '2.5rem', mb: 2 }}>
                    {service.icon}
                  </Typography>
                  <Typography level="h4" sx={{ mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography level="body-md" sx={{ color: 'text.secondary' }}>
                    {service.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              sx={{ position: 'relative', height: '400px' }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: '80%',
                  height: '80%',
                  background: 'linear-gradient(45deg, var(--joy-palette-primary-500), var(--joy-palette-primary-700))',
                  borderRadius: 'lg',
                  transform: 'rotate(-3deg)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  width: '80%',
                  height: '80%',
                  bgcolor: 'background.surface',
                  borderRadius: 'lg',
                  border: '1px solid',
                  borderColor: 'divider',
                  transform: 'rotate(3deg)',
                }}
              />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Typography level="h2" sx={{ mb: 3 }}>
                Why Choose Graywatch Analytics?
              </Typography>
              {[
                'Expert team with industry experience',
                'Customized solutions for your business',
                'Data-driven approach to problem-solving',
                'End-to-end project management',
                'Cutting-edge technology stack'
              ].map((point, index) => (
                <Box
                  key={point}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: 'sm',
                      bgcolor: 'primary.softBg',
                      color: 'primary.solidBg',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}
                  >
                    ✓
                  </Box>
                  <Typography level="body-lg">
                    {point}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 
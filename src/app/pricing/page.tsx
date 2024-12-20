'use client';

import React from 'react';
import { Box, Container, Typography, Card, CardContent, List, ListItem, ListItemDecorator, Button, Grid } from '@mui/joy';
import ScrollAnimation from '../../components/ScrollAnimation';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,000',
    description: 'Perfect for small businesses starting their data journey',
    features: [
      'Data analysis & reporting',
      'Basic dashboard setup',
      'Monthly insights report',
      'Email support',
      '1 revision round'
    ]
  },
  {
    name: 'Professional',
    price: '$5,000',
    description: 'Ideal for growing companies with complex data needs',
    features: [
      'Everything in Starter',
      'Custom data pipeline setup',
      'Advanced analytics',
      'Weekly strategy calls',
      'AI model implementation',
      '3 revision rounds'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations requiring comprehensive data solutions',
    features: [
      'Everything in Professional',
      'Dedicated data team',
      'Custom AI/ML solutions',
      '24/7 priority support',
      'Unlimited revisions',
      'Quarterly strategy planning'
    ]
  }
];

export default function Pricing() {
  return (
    <Box sx={{ bgcolor: 'background.body', py: { xs: 8, md: 12 } }}>
      <Container>
        <ScrollAnimation>
          <Typography
            level="h1"
            sx={{
              mb: 2,
              textAlign: 'center',
              background: 'linear-gradient(45deg, var(--joy-palette-primary-500), var(--joy-palette-primary-700))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Transparent Pricing
          </Typography>
          <Typography
            level="body-lg"
            sx={{
              mb: 8,
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              color: 'text.secondary'
            }}
          >
            Choose the perfect plan for your business needs. All plans include our core analytics expertise.
          </Typography>
        </ScrollAnimation>

        <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
          {pricingPlans.map((plan, index) => (
            <Grid key={plan.name} xs={12} md={4}>
              <ScrollAnimation delay={index * 0.2}>
                <Card
                  variant={plan.popular ? 'solid' : 'outlined'}
                  color={plan.popular ? 'primary' : undefined}
                  sx={{
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 'md',
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    {plan.popular && (
                      <Typography
                        level="title-sm"
                        sx={{ mb: 2, color: plan.popular ? 'primary.solidBg' : 'primary.500' }}
                      >
                        MOST POPULAR
                      </Typography>
                    )}
                    <Typography level="h3" sx={{ mb: 1 }}>
                      {plan.name}
                    </Typography>
                    <Typography level="h2" sx={{ mb: 2 }}>
                      {plan.price}
                    </Typography>
                    <Typography level="body-sm" sx={{ mb: 4, color: plan.popular ? 'primary.solidBg' : 'text.secondary' }}>
                      {plan.description}
                    </Typography>

                    <List
                      sx={{
                        '--ListItem-paddingY': '0.5rem',
                        '--ListItemDecorator-size': '1.5rem',
                      }}
                    >
                      {plan.features.map((feature) => (
                        <ListItem key={feature}>
                          <ListItemDecorator>✓</ListItemDecorator>
                          {feature}
                        </ListItem>
                      ))}
                    </List>

                    <Button
                      variant={plan.popular ? 'solid' : 'outlined'}
                      color={plan.popular ? 'neutral' : 'primary'}
                      size="lg"
                      sx={{ mt: 4, width: '100%' }}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </Grid>
          ))}
        </Grid>

        <ScrollAnimation>
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography level="body-lg" sx={{ color: 'text.secondary' }}>
              Need a custom solution?{' '}
              <Button
                variant="plain"
                color="primary"
                onClick={() => window.location.href = '/contact'}
              >
                Contact us
              </Button>
            </Typography>
          </Box>
        </ScrollAnimation>
      </Container>
    </Box>
  );
} 
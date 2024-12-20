'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, List, ListItem, ListItemDecorator, Table } from '@mui/joy';
import ScrollAnimation from '../../components/ScrollAnimation';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  slug: string;
  icon: string;
  description: string;
  features: string[];
  benefits: string;
  level: string;
  timeframe: string;
  teamSize: string;
}

interface ServiceSupport {
  supported: boolean;
  note?: string;
}

interface ComparisonData {
  [feature: string]: {
    [key: string]: ServiceSupport;
  };
}

const services: Service[] = [
  {
    title: 'Data Science & Analytics',
    slug: 'data-science',
    icon: '🔬',
    description: 'Transform raw data into actionable insights with our comprehensive data science solutions.',
    features: [
      'Predictive Analytics',
      'Machine Learning Models',
      'Statistical Analysis',
      'Data Visualization',
      'Pattern Recognition',
      'A/B Testing'
    ],
    benefits: 'Make data-driven decisions with confidence using our advanced analytics capabilities.',
    level: 'Advanced',
    timeframe: '2-6 months',
    teamSize: '2-4 experts'
  },
  {
    title: 'Data Engineering',
    slug: 'data-engineering',
    icon: '⚙️',
    description: 'Build robust data infrastructure and pipelines for efficient data operations.',
    features: [
      'Data Pipeline Development',
      'ETL Process Design',
      'Data Warehouse Solutions',
      'Database Optimization',
      'Real-time Processing',
      'Data Quality Management'
    ],
    benefits: 'Ensure seamless data flow and accessibility across your organization.',
    level: 'Intermediate',
    timeframe: '3-6 months',
    teamSize: '1-3 experts'
  },
  {
    title: 'Business Intelligence',
    slug: 'business-intelligence',
    icon: '📊',
    description: 'Get comprehensive insights into your business performance with custom BI solutions.',
    features: [
      'Dashboard Development',
      'KPI Monitoring',
      'Report Automation',
      'Data Storytelling',
      'Trend Analysis',
      'Performance Metrics'
    ],
    benefits: 'Make informed decisions with real-time insights into your business operations.',
    level: 'Intermediate',
    timeframe: '1-3 months',
    teamSize: '1-2 experts'
  },
  {
    title: 'AI Solutions',
    slug: 'ai-solutions',
    icon: '🤖',
    description: 'Leverage cutting-edge artificial intelligence to automate and innovate.',
    features: [
      'Custom AI Models',
      'Natural Language Processing',
      'Computer Vision',
      'Automated Decision Systems',
      'AI Strategy Consulting',
      'Model Optimization'
    ],
    benefits: 'Stay ahead of the competition with state-of-the-art AI solutions.',
    level: 'Advanced',
    timeframe: '3-8 months',
    teamSize: '2-4 experts'
  }
];

const comparisonData: ComparisonData = {
  'Predictive Analytics': {
    'data-science': { supported: true, note: 'Advanced ML models' },
    'data-engineering': { supported: false },
    'business-intelligence': { supported: true, note: 'Basic predictions' },
    'ai-solutions': { supported: true, note: 'AI-powered predictions' }
  },
  'Real-time Processing': {
    'data-science': { supported: true, note: 'Stream processing' },
    'data-engineering': { supported: true, note: 'High-performance pipelines' },
    'business-intelligence': { supported: true, note: 'Real-time dashboards' },
    'ai-solutions': { supported: true, note: 'Real-time inference' }
  },
  'Custom Dashboards': {
    'data-science': { supported: true, note: 'Analytics dashboards' },
    'data-engineering': { supported: false },
    'business-intelligence': { supported: true, note: 'Interactive dashboards' },
    'ai-solutions': { supported: true, note: 'AI insights dashboards' }
  },
  'AI Integration': {
    'data-science': { supported: true, note: 'ML models' },
    'data-engineering': { supported: false },
    'business-intelligence': { supported: false },
    'ai-solutions': { supported: true, note: 'Full AI suite' }
  },
  'Data Pipeline Setup': {
    'data-science': { supported: false },
    'data-engineering': { supported: true, note: 'Enterprise pipelines' },
    'business-intelligence': { supported: true, note: 'Basic pipelines' },
    'ai-solutions': { supported: true, note: 'AI pipelines' }
  },
  'Automated Reporting': {
    'data-science': { supported: true, note: 'Custom reports' },
    'data-engineering': { supported: true, note: 'Pipeline reports' },
    'business-intelligence': { supported: true, note: 'Scheduled reports' },
    'ai-solutions': { supported: true, note: 'AI-generated reports' }
  },
  '24/7 Support': {
    'data-science': { supported: true, note: 'Premium support' },
    'data-engineering': { supported: true, note: 'Enterprise support' },
    'business-intelligence': { supported: true, note: 'Business hours' },
    'ai-solutions': { supported: true, note: 'Full coverage' }
  },
  'Team Training': {
    'data-science': { supported: true, note: 'Data science training' },
    'data-engineering': { supported: true, note: 'Technical training' },
    'business-intelligence': { supported: true, note: 'BI tools training' },
    'ai-solutions': { supported: true, note: 'AI systems training' }
  }
};

export default function Services() {
  const [activeService, setActiveService] = React.useState<string | null>(null);
  const [showComparison, setShowComparison] = React.useState(false);
  const [hoveredFeature, setHoveredFeature] = React.useState<string | null>(null);
  const [hoveredService, setHoveredService] = React.useState<string | null>(null);
  const [comparisonView, setComparisonView] = React.useState<'simple' | 'detailed'>('simple');

  const handleServiceClick = (slug: string) => {
    setActiveService(activeService === slug ? null : slug);
  };

  return (
    <Box sx={{ bgcolor: 'background.body', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
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
            Our Services
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
            Comprehensive data solutions tailored to your business needs. From analysis to implementation,
            we've got you covered.
          </Typography>
        </ScrollAnimation>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid key={service.slug} xs={12} md={6}>
              <ScrollAnimation delay={index * 0.2}>
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  variant="outlined"
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: 'md',
                      '& .service-overlay': {
                        opacity: 1,
                      }
                    }
                  }}
                  onClick={() => handleServiceClick(service.slug)}
                >
                  <CardContent>
                    <Box sx={{ mb: 2, fontSize: '2.5rem', textAlign: 'center' }}>
                      {service.icon}
                    </Box>
                    <Typography level="h3" sx={{ mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography level="body-md" sx={{ mb: 3, color: 'text.secondary' }}>
                      {service.description}
                    </Typography>
                    
                    <Typography level="title-md" sx={{ mb: 2 }}>
                      Key Features:
                    </Typography>
                    <List
                      sx={{
                        '--ListItem-paddingY': '0.5rem',
                        '--ListItemDecorator-size': '1.5rem',
                      }}
                    >
                      {service.features.map((feature) => (
                        <ListItem key={feature}>
                          <ListItemDecorator>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                bgcolor: 'primary.500'
                              }}
                            />
                          </ListItemDecorator>
                          {feature}
                        </ListItem>
                      ))}
                    </List>

                    <Typography
                      level="body-sm"
                      sx={{
                        mt: 3,
                        p: 2,
                        bgcolor: 'background.level1',
                        borderRadius: 'sm',
                        color: 'text.secondary'
                      }}
                    >
                      {service.benefits}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        gap: 2,
                        mt: 3,
                        pt: 3,
                        borderTop: '1px solid',
                        borderColor: 'divider'
                      }}
                    >
                      <Typography level="body-sm">
                        Level: {service.level}
                      </Typography>
                      <Typography level="body-sm">
                        Timeframe: {service.timeframe}
                      </Typography>
                      <Typography level="body-sm">
                        Team: {service.teamSize}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between' }}>
                    <Button
                      variant="plain"
                      color="neutral"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/services/${service.slug}`;
                      }}
                    >
                      Learn More
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = '/contact';
                      }}
                    >
                      Get Started
                    </Button>
                  </CardActions>
                </Card>
              </ScrollAnimation>
            </Grid>
          ))}
        </Grid>

        <ScrollAnimation>
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
              <Button
                variant="soft"
                color="primary"
                onClick={() => setShowComparison(!showComparison)}
              >
                {showComparison ? 'Hide Comparison' : 'Compare Services'}
              </Button>
              {showComparison && (
                <Button
                  variant="plain"
                  color="neutral"
                  onClick={() => setComparisonView(view => view === 'simple' ? 'detailed' : 'simple')}
                >
                  {comparisonView === 'simple' ? 'Show Details' : 'Simple View'}
                </Button>
              )}
            </Box>

            {showComparison && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    overflow: 'hidden',
                    '& th, & td': {
                      textAlign: 'center',
                      transition: 'all 0.2s',
                      p: comparisonView === 'detailed' ? 2 : 1,
                    },
                    '& th': {
                      position: 'relative',
                    }
                  }}
                >
                  <Table>
                    <thead>
                      <tr>
                        <th style={{ width: '200px' }}>Features</th>
                        {services.map(service => (
                          <th
                            key={service.slug}
                            onMouseEnter={() => setHoveredService(service.slug)}
                            onMouseLeave={() => setHoveredService(null)}
                            style={{
                              backgroundColor: hoveredService === service.slug ? 'var(--joy-palette-primary-50)' : undefined
                            }}
                          >
                            <Box sx={{ p: 1 }}>
                              <Typography level="title-lg">{service.title}</Typography>
                              {comparisonView === 'detailed' && (
                                <Typography level="body-sm" sx={{ color: 'text.secondary', mt: 1 }}>
                                  Level: {service.level}
                                </Typography>
                              )}
                            </Box>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(comparisonData).map(([feature, serviceSupport]) => (
                        <tr
                          key={feature}
                          onMouseEnter={() => setHoveredFeature(feature)}
                          onMouseLeave={() => setHoveredFeature(null)}
                          style={{
                            backgroundColor: hoveredFeature === feature ? 'var(--joy-palette-primary-50)' : undefined
                          }}
                        >
                          <td>
                            <Typography level="body-md">{feature}</Typography>
                          </td>
                          {services.map(service => {
                            const support = serviceSupport[service.slug];
                            return (
                              <td
                                key={`${service.slug}-${feature}`}
                                style={{
                                  backgroundColor: hoveredService === service.slug && hoveredFeature === feature
                                    ? 'var(--joy-palette-primary-100)'
                                    : undefined
                                }}
                              >
                                <Box
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 1
                                  }}
                                >
                                  <Typography
                                    level="body-lg"
                                    sx={{
                                      color: support?.supported ? 'success.500' : 'neutral.500',
                                      fontWeight: support?.supported ? 'bold' : 'normal'
                                    }}
                                  >
                                    {support?.supported ? '✓' : '–'}
                                  </Typography>
                                  {support?.note && (comparisonView === 'detailed' || hoveredService === service.slug || hoveredFeature === feature) && (
                                    <Typography
                                      level="body-xs"
                                      sx={{
                                        color: 'text.secondary',
                                      }}
                                    >
                                      {support.note}
                                    </Typography>
                                  )}
                                </Box>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card>
              </motion.div>
            )}
          </Box>
        </ScrollAnimation>

        <ScrollAnimation>
          <Box
            sx={{
              mt: 8,
              p: 4,
              textAlign: 'center',
              bgcolor: 'background.level1',
              borderRadius: 'lg',
            }}
          >
            <Typography level="h2" sx={{ mb: 2 }}>
              Ready to Transform Your Data Journey?
            </Typography>
            <Typography level="body-lg" sx={{ mb: 4, color: 'text.secondary' }}>
              Let's discuss how our services can help you achieve your business goals.
            </Typography>
            <Button
              size="lg"
              variant="solid"
              color="primary"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started
            </Button>
          </Box>
        </ScrollAnimation>
      </Container>
    </Box>
  );
} 
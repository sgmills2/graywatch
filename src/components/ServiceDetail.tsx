'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemDecorator, Button, Tabs, TabList, Tab, TabPanel } from '@mui/joy';
import ScrollAnimation from './ScrollAnimation';
import CaseStudy from './CaseStudy';
import { motion } from 'framer-motion';
import { serviceDetails, caseStudies } from '../lib/serviceData';

interface ServiceDetailProps {
  slug: string;
}

export default function ServiceDetail({ slug }: ServiceDetailProps) {
  const service = serviceDetails[slug as keyof typeof serviceDetails];
  const studies = caseStudies[slug as keyof typeof caseStudies] || [];
  const [activeTab, setActiveTab] = React.useState(0);

  if (!service) {
    return (
      <Container>
        <Typography level="h2">Service not found</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: 'background.body', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <ScrollAnimation>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                level="h1"
                sx={{
                  mb: 2,
                  background: 'linear-gradient(45deg, var(--joy-palette-primary-500), var(--joy-palette-primary-700))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {service.title}
              </Typography>
            </motion.div>
            <Typography level="body-lg" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
              {service.description}
            </Typography>
          </Box>
        </ScrollAnimation>

        <Tabs
          value={activeTab}
          onChange={(event, value) => setActiveTab(value as number)}
          sx={{ mb: 4 }}
        >
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Case Studies</Tab>
          </TabList>
          <TabPanel value={0}>
            <Grid container spacing={4}>
              <Grid xs={12} md={8}>
                <ScrollAnimation>
                  <Card>
                    <CardContent>
                      <Typography level="h2" sx={{ mb: 4 }}>Our Process</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {service.processSteps.map((step, index) => (
                          <Box key={step.title}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <Box
                                sx={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: '50%',
                                  bgcolor: 'primary.softBg',
                                  color: 'primary.solidBg',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  mr: 2,
                                  fontWeight: 'bold'
                                }}
                              >
                                {index + 1}
                              </Box>
                              <Typography level="h3">{step.title}</Typography>
                            </Box>
                            <Typography level="body-md" sx={{ color: 'text.secondary', ml: 7 }}>
                              {step.description}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </Grid>

              <Grid xs={12} md={4}>
                <ScrollAnimation delay={0.2}>
                  <Card sx={{ mb: 2 }}>
                    <CardContent>
                      <Typography level="h3" sx={{ mb: 2 }}>Use Cases</Typography>
                      <List>
                        {service.useCases.map((useCase) => (
                          <ListItem key={useCase}>
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
                            {useCase}
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent>
                      <Typography level="h3" sx={{ mb: 2 }}>Technologies</Typography>
                      <List>
                        {service.technologies.map((tech) => (
                          <ListItem key={tech}>
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
                            {tech}
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={1}>
            <Grid container spacing={4}>
              {studies.map((study, index) => (
                <Grid key={study.title} xs={12} md={6}>
                  <ScrollAnimation delay={index * 0.2}>
                    <CaseStudy {...study} />
                  </ScrollAnimation>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Tabs>

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
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Typography level="h2" sx={{ mb: 2 }}>
                Ready to Get Started?
              </Typography>
              <Typography level="body-lg" sx={{ mb: 4, color: 'text.secondary' }}>
                Let's discuss how our {service.title} solutions can benefit your business.
              </Typography>
              <Button
                size="lg"
                variant="solid"
                color="primary"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Consultation
              </Button>
            </motion.div>
          </Box>
        </ScrollAnimation>
      </Container>
    </Box>
  );
} 
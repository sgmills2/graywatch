'use client';

import React from 'react';
import { Card, CardContent, Typography, Box, Grid, LinearProgress } from '@mui/joy';
import { motion } from 'framer-motion';

interface CaseStudyProps {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: number;
  }[];
}

export default function CaseStudy({ title, client, challenge, solution, results }: CaseStudyProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      sx={{
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        '&:hover': {
          '& .case-study-overlay': {
            opacity: 1,
          }
        }
      }}
    >
      <CardContent>
        <Typography level="h3" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography level="body-sm" sx={{ color: 'text.secondary', mb: 3 }}>
          Client: {client}
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography level="title-md" sx={{ mb: 1 }}>
            Challenge
          </Typography>
          <Typography level="body-md" sx={{ color: 'text.secondary' }}>
            {challenge}
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography level="title-md" sx={{ mb: 1 }}>
            Solution
          </Typography>
          <Typography level="body-md" sx={{ color: 'text.secondary' }}>
            {solution}
          </Typography>
        </Box>

        <Typography level="title-md" sx={{ mb: 2 }}>
          Results
        </Typography>
        <Grid container spacing={2}>
          {results.map((result, index) => (
            <Grid xs={12} key={result.metric}>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography level="body-sm">{result.metric}</Typography>
                  <Typography level="body-sm">{result.value}</Typography>
                </Box>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                >
                  <LinearProgress
                    determinate
                    value={result.improvement}
                    sx={{
                      '--LinearProgress-radius': '8px',
                      '--LinearProgress-thickness': '8px',
                    }}
                  />
                </motion.div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
} 
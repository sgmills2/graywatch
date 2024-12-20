'use client';

import React from 'react';
import { Box, Container, Typography, Input, Textarea, Button, FormControl, FormLabel, Alert } from '@mui/joy';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function Contact() {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success'); // For now, just show success
    // TODO: Integrate with Supabase
  };

  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
      <ScrollAnimation>
        <Typography
          level="h1"
          sx={{
            mb: 2,
            background: 'linear-gradient(45deg, var(--joy-palette-primary-500), var(--joy-palette-primary-700))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Get in Touch
        </Typography>
        <Typography level="body-lg" sx={{ mb: 6, color: 'text.secondary' }}>
          Ready to transform your data journey? Let's discuss how we can help.
        </Typography>
      </ScrollAnimation>

      <ScrollAnimation delay={0.2}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            bgcolor: 'background.surface',
            p: 4,
            borderRadius: 'lg',
            boxShadow: 'sm'
          }}
        >
          <FormControl required>
            <FormLabel>Name</FormLabel>
            <Input
              value={formState.name}
              onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
              placeholder="John Doe"
            />
          </FormControl>

          <FormControl required>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={formState.email}
              onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
              placeholder="john@example.com"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Company</FormLabel>
            <Input
              value={formState.company}
              onChange={(e) => setFormState(prev => ({ ...prev, company: e.target.value }))}
              placeholder="Your company name"
            />
          </FormControl>

          <FormControl required>
            <FormLabel>Message</FormLabel>
            <Textarea
              minRows={4}
              value={formState.message}
              onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Tell us about your project or requirements"
            />
          </FormControl>

          {status === 'success' && (
            <Alert color="success" variant="soft">
              Thanks for reaching out! We'll get back to you soon.
            </Alert>
          )}

          {status === 'error' && (
            <Alert color="danger" variant="soft">
              Something went wrong. Please try again.
            </Alert>
          )}

          <Button type="submit" size="lg">
            Send Message
          </Button>
        </Box>
      </ScrollAnimation>
    </Container>
  );
} 
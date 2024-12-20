import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import ClientLayout from '../components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Graywatch Analytics | Data Science & AI Solutions',
  description: 'Transform your data into actionable insights with Graywatch Analytics. Expert consulting in data science, engineering, analytics, and AI solutions.',
  metadataBase: new URL('https://graywatch.ai'),
  icons: {
    icon: [
      {
        url: '/logo.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Graywatch Analytics | Data Science & AI Solutions',
    description: 'Transform your data into actionable insights with Graywatch Analytics. Expert consulting in data science, engineering, analytics, and AI solutions.',
    url: 'https://graywatch.ai',
    siteName: 'Graywatch Analytics',
    images: [
      {
        url: '/logo.svg',
        width: 100,
        height: 60,
        alt: 'Graywatch Analytics Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graywatch Analytics | Data Science & AI Solutions',
    description: 'Transform your data into actionable insights with Graywatch Analytics. Expert consulting in data science, engineering, analytics, and AI solutions.',
    images: ['/logo.svg'],
    creator: '@graywatch',
    site: '@graywatch',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <ClientLayout fontFamily={inter.style.fontFamily}>{children}</ClientLayout>
      </body>
    </html>
  );
} 
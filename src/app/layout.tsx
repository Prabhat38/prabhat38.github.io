import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prabhat38.github.io'),
  title: 'Prabhat Kumar — Backend Engineer, ex-Paytm Technical Lead',
  description:
    '7 years at Paytm building distributed backend systems — Kafka pipelines, real-time event processing, and payment infrastructure at scale. Currently pursuing an MSc in Software Engineering at Fachhochschule Erfurt, Germany.',
  keywords: [
    'Prabhat Kumar',
    'Software Engineer',
    'Backend Engineer',
    'Java',
    'Kafka',
    'Spring Boot',
    'Distributed Systems',
    'Paytm',
    'Fachhochschule Erfurt',
    'Germany',
  ],
  authors: [{ name: 'Prabhat Kumar' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Prabhat Kumar — Backend Engineer, ex-Paytm Technical Lead',
    description:
      '7 years at Paytm in distributed backend systems. Now an MSc Software Engineering student at Fachhochschule Erfurt, Germany.',
    url: '/',
    siteName: 'Prabhat Kumar',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Prabhat Kumar — Backend Engineer, distributed systems and payments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prabhat Kumar — Backend Engineer, ex-Paytm Technical Lead',
    description:
      '7 years at Paytm in distributed backend systems. Now an MSc Software Engineering student at Fachhochschule Erfurt, Germany.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-[#050A0F]">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

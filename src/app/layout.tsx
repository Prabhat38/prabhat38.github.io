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
  title: 'Prabhat Kumar — Technical Lead',
  description:
    'Technical Lead at Paytm. 7+ years building distributed backend systems — Kafka pipelines, real-time event processing, and payment infrastructure at scale.',
  keywords: [
    'Prabhat Kumar',
    'Software Engineer',
    'Backend Engineer',
    'Java',
    'Kafka',
    'Spring Boot',
    'Distributed Systems',
    'Paytm',
  ],
  authors: [{ name: 'Prabhat Kumar' }],
  openGraph: {
    title: 'Prabhat Kumar — Technical Lead',
    description: 'Technical Lead at Paytm. 7+ years in distributed backend systems.',
    type: 'website',
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

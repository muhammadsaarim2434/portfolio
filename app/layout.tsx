import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Cursor from '@/components/Cursor';
import ScrollProgress from '@/components/ScrollProgress';
import Grain from '@/components/Grain';
import { profile } from '@/lib/data';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
  keywords: [
    'Muhammad Saarim',
    'MERN Stack Developer',
    'AI Trainer',
    'React',
    'Next.js',
    'Portfolio',
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    type: 'website',
    images: [{ url: profile.photo }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <Grain />
        <ScrollProgress />
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

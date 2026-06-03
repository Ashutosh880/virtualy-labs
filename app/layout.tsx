import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virtualy Labs — Premium Technology Partner | Software Architecture, AI, Cloud & Digital Transformation',
  description:
    'A multidisciplinary technology team delivering SaaS, enterprise software, AI solutions, Shopify development, cloud engineering, and digital transformation globally. Schedule a free consultation today.',
  keywords: [
    'software development team',
    'technology consulting',
    'SaaS development',
    'AI solutions',
    'Shopify development',
    'cloud engineering',
    'enterprise software',
    'digital transformation',
    'DevOps',
    'product architecture',
  ],
  openGraph: {
    title: 'Virtualy Labs — Premium Technology Partner',
    description: 'Building Scalable Digital Products That Drive Business Growth.',
    type: 'website',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtualy Labs — Premium Technology Partner',
    description: 'Building Scalable Digital Products That Drive Business Growth.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning style={{ overflowX: 'hidden', maxWidth: '100%' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif", overflowX: 'hidden', maxWidth: '100vw' }}>{children}</body>
    </html>
  );
}

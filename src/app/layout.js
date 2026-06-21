import './globals.css';
import Analytics from '@/components/layout/Analytics';

export const metadata = {
  metadataBase: new URL('https://sriramnjr7.github.io'),
  title: 'Sriram S — AI & Web Solutions for Modern Businesses',
  description: 'Independent technology consultant helping businesses build modern websites, AI assistants, automation systems, and dashboards. Enterprise experience from JPMorgan Chase.',
  keywords: 'website development, AI solutions, business automation, data dashboards, AI consultant, web developer, business websites',
  authors: [{ name: 'Sriram S' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sriram S — AI & Web Solutions for Modern Businesses',
    description: 'Modern websites, AI assistants, and automation that grow your business. Enterprise-grade quality, independent pricing.',
    url: 'https://sriramnjr7.github.io',
    siteName: 'Sriram S',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sriram S — AI & Web Solutions for Modern Businesses',
    description: 'Modern websites, AI assistants, and automation that grow your business.',
    creator: '@sriramnjr7',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import EmergencyBanner from './components/EmergencyBanner';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Tree Removal Plattsburgh NY | Blocksons LLC | North Country',
    template: '%s | Blocksons LLC',
  },
  description:
    'Blocksons LLC — North Country\'s most trusted tree removal company. Hazardous removal, stump grinding, emergency response. 5.0 ★ on Google. Call (518) 570-3076.',
  metadataBase: new URL('https://blocksons-site.vercel.app'),
  keywords: [
    'tree removal Plattsburgh NY',
    'tree service North Country NY',
    'hazardous tree removal Clinton County',
    'stump grinding Plattsburgh',
    'emergency tree removal North Country',
    'tree trimming Lake Placid',
    'Blocksons LLC',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blocksons-site.vercel.app',
    siteName: 'Blocksons LLC',
    title: 'Tree Removal Plattsburgh NY | Blocksons LLC | North Country',
    description:
      'North Country\'s most trusted tree removal company. Hazardous removal, stump grinding, emergency response. 5.0 ★ on Google. Call (518) 570-3076.',
    images: [
      {
        url: '/photos/hero.jpg',
        width: 1920,
        height: 1080,
        alt: 'Blocksons LLC tree removal near power lines in the North Country NY',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tree Removal Plattsburgh NY | Blocksons LLC',
    description:
      'North Country\'s most trusted tree removal. Hazardous removal, stump grinding, 24/7 emergency response. 5.0 ★ on Google.',
    images: ['/photos/hero.jpg'],
  },
  alternates: {
    canonical: 'https://blocksons-site.vercel.app',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Blocksons LLC',
  telephone: '(518) 570-3076',
  email: 'Blocksonstreeservice@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Morrisonville',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.142641,
    longitude: -73.743536,
  },
  openingHours: 'Mo-Su 00:00-23:59',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '49',
  },
  url: 'https://blocksons-site.vercel.app',
  description:
    'Blocksons LLC specializes in hazardous tree removal, stump grinding, tree trimming, and 24/7 emergency response across the North Country of New York.',
  areaServed: [
    'Plattsburgh', 'Morrisonville', 'Lake Placid', 'Saranac Lake', 'Malone',
    'Clinton County', 'Essex County', 'Franklin County', 'NY',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tree Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hazardous Tree Removal' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tree Trimming & Pruning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stump Grinding' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Tree Removal' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Work Near Utility Lines' } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <EmergencyBanner />
        <main className="flex-1 pb-[56px] md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}

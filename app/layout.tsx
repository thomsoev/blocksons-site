import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import EmergencyBanner from './components/EmergencyBanner';
import Footer from './components/Footer';

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
  title: 'Tree Removal in Plattsburgh, NY | Blocksons LLC',
  description:
    'Blocksons LLC — Plattsburgh\'s most trusted tree removal company. Hazardous removal, stump grinding, emergency response. 5.0 ★ on Google. Call (518) 570-3076.',
  metadataBase: new URL('https://blocksons-site.vercel.app'),
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
  url: 'https://blocksonsllc.com',
  areaServed: ['Plattsburgh', 'Morrisonville', 'Clinton County', 'NY'],
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
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

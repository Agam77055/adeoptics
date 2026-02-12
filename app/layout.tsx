import type { Metadata, Viewport } from 'next';
import { inter, outfit } from './fonts';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ADEOptics - Precision Optics for Every Mission',
  description:
    'Premium red dot sights, riflescopes, and laser sights trusted by professionals worldwide',
  keywords: [
    'red dot sights',
    'riflescopes',
    'laser sights',
    'tactical optics',
    'ADEOptics',
  ],
  openGraph: {
    title: 'ADEOptics - Precision Optics for Every Mission',
    description:
      'Premium red dot sights, riflescopes, and laser sights trusted by professionals worldwide',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

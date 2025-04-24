import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Instabrows - Especialistas en Microblading y Diseño de Cejas',
  description: 'Servicios profesionales de microblading, micropigmentación y diseño de cejas en Madrid. Expertos en belleza facial y cuidado de cejas.',
  keywords: 'microblading madrid, micropigmentación cejas, diseño de cejas, cejas perfectas, belleza facial, instabrows',
  authors: [{ name: 'Instabrows' }],
  openGraph: {
    title: 'Instabrows - Especialistas en Microblading y Diseño de Cejas',
    description: 'Servicios profesionales de microblading, micropigmentación y diseño de cejas en Madrid. Expertos en belleza facial.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Instabrows'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instabrows - Especialistas en Microblading',
    description: 'Servicios profesionales de microblading y diseño de cejas en Madrid'
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://www.instabrows.es'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <main className="overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

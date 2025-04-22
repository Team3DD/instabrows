import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Instabrows - Especialistas en Cejas',
  description: 'Servicios profesionales de microblading, micropigmentación y diseño de cejas',
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

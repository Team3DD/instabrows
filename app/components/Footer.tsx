'use client';

import React from 'react';
import Link from 'next/link';
import { navigationCategories, contactInfo, socialLinks } from './footer/footerData';
import FooterLogo from './footer/FooterLogo';
import FooterNavigation from './footer/FooterNavigation';
import FooterSocial from './footer/FooterSocial';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';

// Mapeo de iconos para redes sociales
const socialIcons = {
  FacebookIcon,
  InstagramIcon
};

// Componente principal del Footer
export default function Footer() {
  // Preparar los enlaces sociales con los componentes de iconos correctos
  const socialLinksWithIcons = socialLinks.map(link => ({
    ...link,
    icon: socialIcons[link.icon as keyof typeof socialIcons]
  }));

  return (
    <footer 
      className="bg-gray-100 text-gray-700 py-4 text-xs" 
      itemScope 
      itemType="https://schema.org/WPFooter"
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Columna 1: Logo y descripción */}
          <FooterLogo />
          
          {/* Columnas 2-4: Navegación */}
          {navigationCategories.map((category, index) => (
            <FooterNavigation key={index} category={category} />
          ))}
          
          {/* Columna 5: Redes sociales y contacto */}
          <FooterSocial 
            contactInfo={contactInfo} 
            socialLinks={socialLinksWithIcons}
          />
        </div>
        
        {/* Copyright section */}
        <div 
          className="mt-4 border-t border-gray-200 pt-3 text-center"
          itemProp="copyrightNotice"
        >
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()}{' '}
            <Link 
              href="/" 
              className="font-bold hover:text-gray-900 transition-colors"
              aria-label="Ir a la página principal de Instabrows"
            >
              Instabrows
            </Link>
            . Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
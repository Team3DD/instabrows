'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';

// Navigation links for the 3 content columns
const navigationCategories = [
  {
    title: "Servicios",
    links: [
      { href: "/servicios", label: "Todos los servicios" },
      { href: "/pestanas", label: "Pestañas" },
      { href: "/cejas", label: "Cejas" },
      { href: "/microblading", label: "Microblading" }
    ]
  },
  {
    title: "Nosotros",
    links: [
      { href: "/nosotras", label: "Equipo" },
      { href: "/galeria", label: "Galería" },
      { href: "/testimonios", label: "Testimonios" },
      { href: "/blog", label: "Blog" }
    ]
  },
  {
    title: "Comprar",
    links: [
      { href: "/tienda", label: "Tienda" },
      { href: "/productos", label: "Productos" },
      { href: "/ofertas", label: "Ofertas" },
      { href: "/gift-cards", label: "Gift Cards" }
    ]
  }
];

// Contact information
const contactInfo = [
  { label: "Teléfono", value: "(55) 1234-5678" },
  { label: "Email", value: "info@instabrows.mx" },
  { label: "Dirección", value: "Av. Principal #123, Col. Centro" }
];

// Social media links
const socialLinks = [
  { href: "https://facebook.com/instabrows", label: "Facebook", icon: FacebookIcon },
  { href: "https://instagram.com/instabrows", label: "Instagram", icon: InstagramIcon },
];

// Reusable footer link component
const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-gray-600 hover:text-gray-900 transition-colors block py-0.5 text-xs"
    aria-label={`Ir a ${children}`}
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-4 text-xs" itemScope itemType="https://schema.org/WPFooter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Columna 1: Logo */}
          <div className="flex flex-col items-center md:items-start justify-start">
            <Link href="/" aria-label="Instabrows - Página principal" className="w-full flex justify-center md:justify-start">
              <Image 
                src="/images/icon2.png" 
                alt="Instabrows Logo" 
                width={300}
                height={90}
                className="w-full max-w-[250px] h-auto"
                priority
              />
            </Link>
            
            <p className="text-gray-600 mt-4 text-center md:text-left text-xs leading-tight" itemProp="description">
              Especialistas en belleza y cuidado de cejas, ofreciendo servicios de microblading, micropigmentación y más.
            </p>
          </div>
          
          {/* Columnas 2-4: Navegación (3 columnas de contenido) */}
          {navigationCategories.map((category, index) => (
            <div key={index} className="text-center px-1 flex flex-col justify-start h-full">
              <h3 className="text-base font-bold mb-1.5 text-center">{category.title}</h3>
              <ul className="space-y-0.5 w-full flex flex-col items-center" itemScope itemType="https://schema.org/SiteNavigationElement">
                {category.links.map((link) => (
                  <li key={link.href} itemProp="name" className="w-full text-center">
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-gray-900 transition-colors block py-0.5 text-sm"
                      aria-label={`Ir a ${link.label}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Columna 5: Redes sociales y contacto */}
          <div className="text-center md:text-right">
            <div className="mb-3">
              <h3 className="text-sm font-bold mb-1.5">Síguenos</h3>
              <div className="flex justify-center md:justify-end space-x-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`Síguenos en ${social.label}`}
                  >
                    <social.icon size={20} className="text-gray-600 hover:text-gray-900" />
                  </a>
                ))}
              </div>
            </div>
            
            <div itemScope itemType="https://schema.org/Organization">
              <h3 className="text-sm font-bold mb-1.5">Contacto</h3>
              {contactInfo.map((info, index) => (
                <p key={index} className="text-gray-600 mb-0.5 text-xs leading-tight" itemProp={info.label === "Email" ? "email" : info.label === "Teléfono" ? "telephone" : "address"}>
                  <span className="font-medium">{info.label}:</span> {info.value}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright section - Full width */}
        <div className="mt-4 border-t border-gray-200 pt-3 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} <Link href="/" className="font-bold hover:text-gray-900 transition-colors">Instabrows</Link>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
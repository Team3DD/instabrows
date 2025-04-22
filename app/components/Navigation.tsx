'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import Image from 'next/image';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu";
import React from 'react';

// Factored out service items for reusability and SEO
const serviceItems = [
  {
    title: "Microblading",
    href: "/servicios/microblading",
    description: "Cejas perfectas y naturales con técnica de precisión.",
    seoKeywords: "microblading cejas, cejas perfectas, técnica de precisión"
  },
  {
    title: "Micropigmentación",
    href: "/servicios/micropigmentacion",
    description: "Técnica avanzada para definición permanente.",
    seoKeywords: "micropigmentación, definición permanente, maquillaje permanente"
  },
  {
    title: "Extensión de Pestañas",
    href: "/servicios/pestanas",
    description: "Pestañas más largas y voluminosas.",
    seoKeywords: "extensión de pestañas, pestañas voluminosas, pestañas largas"
  },
  {
    title: "Lifting de Pestañas",
    href: "/servicios/lifting",
    description: "Eleva y curva tus pestañas naturales.",
    seoKeywords: "lifting de pestañas, pestañas curvadas, pestañas naturales"
  }
];

// ListItem component for navigation menu
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
});
ListItem.displayName = "ListItem";

// Mobile logo component
const MobileLogoOnly = () => (
  <div className="flex-shrink-0 md:hidden">
    <Link href="/" className="flex items-center" aria-label="Instabrows - Página principal">
      <Image 
        src="/images/icon1.png" 
        alt="Instabrows Logo" 
        width={80}
        height={32}
        className="h-8 w-auto"
        priority
      />
    </Link>
  </div>
);

// Desktop logo component with transition effect
const DesktopLogoOnly = ({ isScrolled }: { isScrolled: boolean }) => (
  <div className="hidden md:flex flex-shrink-0 justify-center">
    <Link href="/" className="flex items-center justify-center" aria-label="Instabrows - Página principal">
      <div className="relative h-12 w-auto overflow-hidden flex justify-center">
        <Image 
          src="/images/icon2.png" 
          alt="Instabrows Logo" 
          width={160}
          height={48}
          className={`max-h-12 w-auto transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
          priority
        />
        <Image 
          src="/images/icon1.png" 
          alt="Instabrows Logo" 
          width={160}
          height={48}
          className={`absolute top-0 left-0 right-0 mx-auto max-h-12 w-auto transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
          priority
        />
      </div>
    </Link>
  </div>
);

// Para el botón de hamburguesa animado
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative w-6 h-6">
    <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
      isOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'
    }`}></span>
    <span className={`absolute h-0.5 w-full bg-current top-3 transition-all duration-300 ${
      isOpen ? 'opacity-0' : 'opacity-100'
    }`}></span>
    <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
      isOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'
    }`}></span>
  </div>
);

// Componente mejorado para el dropdown de servicios
const ServiceDropdown = ({ toggleMenu }: { toggleMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="relative w-full text-center">
      <button 
        onClick={toggleDropdown}
        className="flex items-center justify-center w-full px-3 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-accent uppercase tracking-wider"
        aria-expanded={isOpen}
        aria-controls="services-submenu"
      >
        Servicios
        <svg 
          className={`h-4 w-4 ml-2 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div 
        id="services-submenu" 
        className={`w-full overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-2 bg-gray-50">
          {serviceItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="block px-3 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-accent uppercase tracking-wider text-center"
              aria-label={`Ver servicio de ${item.title}`}
              onClick={() => toggleMenu()}
            >
              {item.title}
            </Link>
          ))}
          <Link 
            href="/servicios" 
            className="block px-3 py-3 text-base font-medium text-primary hover:bg-accent uppercase tracking-wider text-center"
            aria-label="Ver todos los servicios"
            onClick={() => toggleMenu()}
          >
            Todos los servicios
          </Link>
        </div>
      </div>
    </div>
  );
};

// Mobile menu component
const MobileMenu = ({ 
  isOpen, 
  toggleMenu, 
  items 
}: {
  isOpen: boolean;
  toggleMenu: () => void;
  items: React.ReactElement[];
}) => (
  <>
    {/* Mobile menu button - positioned to the right */}
    <div className="md:hidden flex items-center justify-end ml-auto">
      <button 
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none relative z-[60]"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <span className="sr-only">Abrir menú principal</span>
        <HamburgerIcon isOpen={isOpen} />
      </button>
    </div>
    
     {isOpen && (
      <div 
        id="mobile-menu"
        className="md:hidden fixed inset-0 z-50 bg-white pt-16 pb-6 px-4 overflow-hidden"
      >
        {/* Remove the duplicate button in the top-right corner */}
        <div className="flex flex-col items-center justify-center h-full space-y-0 py-4 overflow-hidden">
          {items}
        </div>
      </div>
    )}
    {/* Full-screen mobile menu */}
    {isOpen && (
      <div 
        id="mobile-menu"
        className="md:hidden fixed inset-0 z-50 bg-white pt-16 pb-6 px-4 overflow-hidden"
      >
        {/* Remove the duplicate close button that was here */}
        
        <div className="flex flex-col items-center justify-center h-full space-y-0 py-4 overflow-hidden">
          {items}
        </div>
      </div>
    )}
  </>
);

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Left menu items with structured data for SEO
  const leftMenuItems = (
    <>
      <NavigationMenuItem itemScope itemProp="name">
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink itemProp="url" className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      
      <NavigationMenuItem itemScope itemProp="name">
        <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white/80 backdrop-blur-sm">
            <li className="row-span-4" itemScope itemProp="name">
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-center items-center rounded-md bg-transparent p-6 no-underline outline-none focus:shadow-md hover:bg-gray-100/80 transition-colors text-center relative"
                  href="/servicios"
                  aria-label="Ver todos los servicios de Instabrows"
                  itemProp="url"
                >
                  <div className="absolute inset-0 bg-white/50 hover:bg-white/30 transition-colors rounded-md"></div>
                  <div className="relative z-10">
                    <div className="mb-2 text-lg font-medium">
                      Instabrows®
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explora nuestra gama completa de servicios de belleza y cuidado.
                    </p>
                  </div>
                </a>
              </NavigationMenuLink>
            </li>
            
            {serviceItems.map((item) => (
              <ListItem 
                key={item.href} 
                href={item.href} 
                title={item.title}
                aria-label={`Ver servicio de ${item.title}`}
                data-seo={item.seoKeywords}
                itemScope 
                itemProp="name"
              >
                {item.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      
      <NavigationMenuItem itemScope itemProp="name">
        <Link href="/pestanas" legacyBehavior passHref>
          <NavigationMenuLink itemProp="url" className={navigationMenuTriggerStyle()}>
            Pestañas
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </>
  );

  // Right menu items with structured data for SEO
  const rightMenuItems = (
    <>
      <NavigationMenuItem itemScope itemProp="name">
        <Link href="/nosotras" legacyBehavior passHref>
          <NavigationMenuLink itemProp="url" className={navigationMenuTriggerStyle()}>
            Nosotras
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      
      <NavigationMenuItem itemScope itemProp="name">
        <Link href="/tienda" legacyBehavior passHref>
          <NavigationMenuLink itemProp="url" className={navigationMenuTriggerStyle()}>
            Tienda
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      
      <NavigationMenuItem itemScope itemProp="name">
        <Link href="/contacto" legacyBehavior passHref>
          <NavigationMenuLink itemProp="url" className="btn-primary inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground uppercase tracking-wider transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Agenda tu cita
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </>
  );

  // Mobile menu items
  const mobileMenuItems = [
    <Link 
      key="home-link"
      href="/" 
      className="block px-3 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-accent uppercase tracking-wider text-center w-full"
      aria-label="Ir a la página principal"
    >
      Home
    </Link>,
    
    <ServiceDropdown key="services-dropdown" toggleMenu={() => setIsMobileMenuOpen(false)} />,
    
    <Link 
      key="pestanas-link"
      href="/pestanas" 
      className="block px-3 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-accent uppercase tracking-wider text-center w-full"
      aria-label="Ver servicios de pestañas"
    >
      Pestañas
    </Link>,
    
    <Link 
      key="nosotras-link"
      href="/nosotras" 
      className="block px-3 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-accent uppercase tracking-wider text-center w-full"
      aria-label="Conocer más sobre nosotras"
    >
      Nosotras
    </Link>,
    
    <Link 
      key="tienda-link"
      href="/tienda" 
      className="block px-3 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-accent uppercase tracking-wider text-center w-full"
      aria-label="Visitar nuestra tienda"
    >
      Tienda
    </Link>,
    
    <Link 
      key="contacto-link"
      href="/contacto" 
      className="btn-primary block px-6 py-3 rounded-full text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-center mx-auto mt-4 max-w-xs"
      aria-label="Agendar una cita"
    >
      Agenda tu cita
    </Link>
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-sm shadow-md py-2 text-foreground' 
          : 'bg-white py-4 text-foreground'
      }`}
      aria-label="Navegación principal"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Mobile logo (left aligned) - Only shows on mobile */}
          <MobileLogoOnly />

          {/* Desktop layout */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Desktop menu - Left side */}
            <div className="flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList>
                  {leftMenuItems}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop logo (center) */}
            <DesktopLogoOnly isScrolled={isScrolled} />

            {/* Desktop menu - Right side */}
            <div className="flex items-center space-x-6 justify-end">
              <NavigationMenu>
                <NavigationMenuList>
                  {rightMenuItems}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Mobile menu button (right aligned) */}
          <MobileMenu 
            isOpen={isMobileMenuOpen}
            toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            items={mobileMenuItems}
          />
        </div>
      </div>

      {/* SEO structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          "name": "Instabrows",
          "description": "Especialistas en belleza y cuidado de cejas",
          "url": "https://instabrows.com",
          "sameAs": [
            "https://www.instagram.com/instabrows",
            "https://www.facebook.com/instabrows"
          ],
          "potentialAction": {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://instabrows.com/contacto"
            },
            "result": {
              "@type": "Reservation",
              "name": "Agenda tu cita"
            }
          },
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Microblading",
                "description": "Cejas perfectas y naturales con técnica de precisión"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Micropigmentación",
                "description": "Técnica avanzada para definición permanente"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Extensión de Pestañas",
                "description": "Pestañas más largas y voluminosas"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lifting de Pestañas",
                "description": "Eleva y curva tus pestañas naturales"
              }
            }
          ]
        })
      }} />
    </nav>
  );
}
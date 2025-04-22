'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@/components/ui/arrow-left';
import { ArrowRightIcon } from '@/components/ui/arrow-right';

// Reusable link component for consistent styling
const ResourceLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="inline-flex items-center text-sm text-primary gap-x-2 hover:underline transition-colors"
  >
    <span>{children}</span>
    <ArrowRightIcon className="w-8 h-8" />
  </Link>
);

// Resource section component
const ResourceSection = ({ title, description, href }: { title: string; description: string; href: string }) => (
  <div>
    <ResourceLink href={href}>{title}</ResourceLink>
    <p className="mt-2 text-sm text-muted-foreground">{description}</p>
  </div>
);

export default function NotFound() {
  const router = useRouter();
  
  // Resources data for easy maintenance
  const resources = [
    {
      title: "Nuestros servicios",
      description: "Descubre todos los tratamientos de belleza que ofrecemos.",
      href: "/servicios"
    },
    {
      title: "Nuestro blog",
      description: "Lee los últimos artículos sobre belleza y cuidado personal.",
      href: "/blog"
    },
    {
      title: "Contacta con nosotras",
      description: "Nuestro equipo está aquí para ayudarte.",
      href: "/contacto"
    }
  ];

  return (
    <section className="bg-background">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        
      <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <Image 
            className="w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover"
            src="/images/404.webp" 
            alt="Página no encontrada - Instabrows" 
            width={1000}
            height={800}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-medium text-primary p-4 lg:p-0">Error 404</p>
          <h1 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
            No pudimos encontrar esta página
          </h1>
          <p className="mt-4 text-muted-foreground">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button 
              onClick={() => router.back()}
              className="btn-secondary flex items-center justify-center min-w-[150px] group"
              aria-label="Regresar a la página anterior"
            >
              <ArrowLeftIcon className="mr-2 h-5 w-5 text-primary group-hover:text-foreground transition-colors" />
              Regresar
            </button>

            <Link 
              href="/"
              className="btn-primary min-w-[150px] flex items-center justify-center"
              aria-label="Ir a la página de inicio"
            >
              Ir al inicio
            </Link>
          </div>

          <div className="mt-10 space-y-6">
            {resources.map((resource, index) => (
              <ResourceSection 
                key={index}
                title={resource.title}
                description={resource.description}
                href={resource.href}
              />
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}
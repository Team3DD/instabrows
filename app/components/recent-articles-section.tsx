'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeftIcon } from '@/components/ui/chevron-left';
import { ChevronRightIcon } from '@/components/ui/chevron-right';

// Sample latest blog posts data
const latestPosts = [
  {
    id: 'microblading-tips',
    title: '5 consejos para cuidar tu microblading',
    excerpt: 'Descubre cómo mantener tus cejas perfectas por más tiempo con estos consejos de cuidado post-microblading.',
    image: '/images/beforeafter/img2before.jpg',
    date: '15 de mayo, 2023',
    slug: '/blog/microblading-tips'
  },
  {
    id: 'lash-lifting-benefits',
    title: 'Beneficios del Lash Lifting que no conocías',
    excerpt: 'El lash lifting es más que estética. Conoce todos los beneficios que este tratamiento puede ofrecer a tus pestañas.',
    image: '/images/beforeafter/img1before.jpg',
    date: '2 de junio, 2023',
    slug: '/blog/lash-lifting-benefits'
  },
  {
    id: 'eyebrow-trends-2023',
    title: 'Tendencias de cejas para 2023',
    excerpt: 'Las cejas definen tu rostro. Descubre las tendencias que dominarán este año y cómo adaptarlas a tu estilo.',
    image: '/images/beforeafter/img2before.jpg',
    date: '18 de julio, 2023',
    slug: '/blog/eyebrow-trends-2023'
  },
  {
    id: 'eyelash-extensions-myths',
    title: 'Mitos y verdades sobre las extensiones de pestañas',
    excerpt: '¿Las extensiones dañan tus pestañas naturales? Desmitificamos las creencias más comunes sobre este tratamiento.',
    image: '/images/beforeafter/img1before.jpg',
    date: '5 de agosto, 2023',
    slug: '/blog/eyelash-extensions-myths'
  },
  {
    id: 'brow-lamination-guide',
    title: 'Guía completa sobre la laminación de cejas',
    excerpt: 'Todo lo que necesitas saber sobre la laminación de cejas: proceso, resultados y cuidados posteriores.',
    image: '/images/beforeafter/img2before.jpg',
    date: '20 de septiembre, 2023',
    slug: '/blog/brow-lamination-guide'
  }
];

export default function RecentArticlesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle window resize to determine mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Number of cards to show based on screen size
  const cardsToShow = isMobile ? 1 : 3;
  
  // Create a wrapped array for infinite scrolling
  const wrappedPosts = [...latestPosts, ...latestPosts, ...latestPosts];
  
  // Navigate to next slide with cylindrical effect
  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => prevIndex + 1);
    
    // If we've scrolled through all original items, reset position without animation
    if (currentIndex >= latestPosts.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };
  
  // Navigate to previous slide with cylindrical effect
  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => prevIndex - 1);
    
    // If we've scrolled back to beginning, reset position without animation
    if (currentIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(latestPosts.length - 1);
      }, 500);
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Separator at the beginning */}
        <div className="w-3/4 h-0.5 bg-primary mx-auto mb-12"></div>
        
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">Artículos Recientes</h2>
        
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-15 hover:opacity-75 transition-opacity"
            aria-label="Artículo anterior"
          >
            <ChevronLeftIcon className="w-15 h-15" />
          </button>
          
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${(currentIndex + latestPosts.length) * (100 / cardsToShow)}%)` }}
            >
              {wrappedPosts.map((post, index) => (
                <div 
                  key={`${post.id}-${index}`}
                  className="w-full md:w-1/3 flex-shrink-0 px-3 py-3"
                  style={{ minWidth: isMobile ? '100%' : `${100/cardsToShow}%` }}
                >
                  <motion.div 
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Link href={post.slug} className="block h-full flex flex-col">
                      <div className="relative h-56 w-full">
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill 
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-6 flex-grow">
                        <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                        <h3 className="text-xl font-medium mb-3">{post.title}</h3>
                        <p className="text-gray-700 line-clamp-3 mb-4">{post.excerpt}</p>
                        <span className="inline-block text-primary font-medium hover:underline">
                          Leer más...
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-15 hover:opacity-75 transition-opacity"
            aria-label="Artículo siguiente"
          >
            <ChevronRightIcon className="w-15 h-15" />
          </button>
        </div>
        
        {/* Separator at the end */}
        <div className="w-3/4 h-0.5 bg-primary mx-auto mt-12"></div>
      </div>
    </section>
  );
}
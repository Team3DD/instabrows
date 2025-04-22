'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const brands = [
  { name: 'EstiloDF', logo: '/images/brands/estilodf.png' },
  { name: 'L\'Beauté', logo: '/images/brands/lbeaute.png' },
  { name: 'Donde', logo: '/images/brands/donde.png' },
  { name: 'Leisure Lux', logo: '/images/brands/leisurelux.png' },
  { name: 'Canal Once', logo: '/images/brands/canalonce.png' },
  { name: 'Cosmopolitan', logo: '/images/brands/cosmopolitan.png' },
  { name: 'Insolente', logo: '/images/brands/insolente.webp' },
  { name: 'Quién', logo: '/images/brands/quien.png' },
];

export default function BrandsCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading removed */}
        
        <div className="overflow-hidden relative">
          <motion.div
            className="flex items-center"
            animate={{
              x: isMobile ? [0, -1500, 0] : [0, -1000, 0],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div 
                key={`brand-1-${index}`} 
                className="mx-8 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={150}
                  height={75}
                  className="h-16 w-auto object-contain"
                  priority={index < 4}
                  quality={90}
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div 
                key={`brand-2-${index}`} 
                className="mx-8 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={150}
                  height={75}
                  className="h-16 w-auto object-contain"
                  quality={90}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
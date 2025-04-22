'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Animation values for images
  const image1Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const image1Y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  
  const image2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const image2Y = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);
  
  const image3Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const image3Y = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);

  // Image wrapper component to reduce repetition
  const ImageWrapper = ({ 
    src, 
    alt, 
    opacity, 
    y, 
    caption, 
    className 
  }: {
    src: string;
    alt: string;
    opacity: any;
    y: any;
    caption?: string;
    className?: string;
  }) => (
    <motion.div 
      className={`relative aspect-[3/4] w-full ${className}`}
      style={{ opacity, y }}
    >
      <div className="absolute inset-0 border border-black rounded-lg"></div>
      <div className="absolute inset-0 border border-black rounded-lg transform translate-x-[10px] translate-y-[10px]"></div>
      <div 
        className="relative h-full w-full overflow-hidden rounded-lg cursor-pointer group"
        onClick={() => setSelectedImage(src)}
      >
        <Image 
          src={src} 
          alt={alt} 
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 45vw, 35vw"
          loading="lazy"
          quality={80}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-transparent via-white/20 to-transparent -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-all duration-1000 ease-in-out pointer-events-none"></div>
        
        {caption && (
          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded z-10">
            <p className="text-xs md:text-sm font-medium">{caption}</p>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div ref={containerRef} className="py-4 md:py-8 -mt-20">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-0">
  {/* Columna 1 */}
  <div className="flex flex-col">
    {/* Primera imagen */}
    <ImageWrapper
      src="/images/hero/heroimage1.jpg"
      alt="Mujer con cejas perfectas mirándose en un espejo"
      opacity={image1Opacity}
      y={image1Y}
      className=""
    />
    
    {/* Espacio de 3rem */}
    <div className="h-12 md:h-16"></div>
    
    {/* Tercera imagen */}
    <ImageWrapper
      src="/images/hero/heroimage3.jpg"
      alt="Detalle de cejas con microblading"
      opacity={image3Opacity}
      y={image3Y}
      className=""
    />
  </div>
  
  {/* Columna 2 */}
  <div className="mt-12 md:mt-44">
    {/* Segunda imagen */}
    <ImageWrapper
      src="/images/hero/heroimage2.jpg"
      alt="Profesionales de Instabrows sonriendo"
      opacity={image2Opacity}
      y={image2Y}
      caption="Andy y Marina Fundadoras de InstaBrows"
      className=""
    />
  </div>
</div>

      {/* Lightbox for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <Image
                src={selectedImage}
                alt="Enlarged image"
                width={1200}
                height={1600}
                className="object-contain w-full h-full rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <button 
                className="absolute top-4 right-4 bg-white/80 rounded-full p-2 text-black"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
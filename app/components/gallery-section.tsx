'use client';

import { useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { ImageWrapper } from './gallery/image-wrapper';
import { Lightbox } from './gallery/lightbox';

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Valores de animación para las imágenes
  const image1Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const image1Y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  
  const image2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const image2Y = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);
  
  const image3Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const image3Y = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);

  return (
    <div ref={containerRef} className="py-4 md:py-8 -mt-20">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-0">
        {/* Columna 1 */}
        <div className="flex flex-col">
          <ImageWrapper
            src="/images/hero/heroimage1.jpg"
            alt="Mujer con cejas perfectas mirándose en un espejo"
            opacity={image1Opacity}
            y={image1Y}     
            caption="Cejas perfectas"
            onImageClick={setSelectedImage}
          />
          
          <div className="h-12 md:h-16" />
          
          <ImageWrapper
            src="/images/hero/heroimage3.jpg"
            alt="Detalle de cejas con microblading"
            opacity={image3Opacity}
            y={image3Y}
            onImageClick={setSelectedImage}
          />
        </div>
        
        {/* Columna 2 */}
        <div className="mt-12 md:mt-44">
          <ImageWrapper
            src="/images/hero/heroimage2.jpg"
            alt="Profesionales de Instabrows sonriendo"
            opacity={image2Opacity}
            y={image2Y}
            caption="Andy y Marina Fundadoras de InstaBrows"
            onImageClick={setSelectedImage}
          />
        </div>
      </div>

      <Lightbox
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
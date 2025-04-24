'use client';

import Image from 'next/image';
import { motion, MotionValue } from 'framer-motion';

// Modificamos la interfaz para usar MotionValue<number> directamente
interface ImageWrapperProps {
  src: string;
  alt: string;
  opacity: MotionValue<number>; // Cambiado desde ReturnType<typeof useTransform>
  y: MotionValue<number>; // Cambiado desde ReturnType<typeof useTransform>
  caption?: string;
  className?: string;
  onImageClick: (src: string) => void;
}

export function ImageWrapper({
  src,
  alt,
  opacity,
  y,
  caption,
  className = "", // Valor por defecto para evitar undefined
  onImageClick
}: ImageWrapperProps) {
  return (
    <motion.div
      className={`relative aspect-[3/4] w-full ${className}`}
      style={{ opacity, y }}
    >
      <div className="absolute inset-0 border border-black rounded-lg"></div>
      <div className="absolute inset-0 border border-black rounded-lg transform translate-x-[10px] translate-y-[10px]"></div>
      <div
        className="relative h-full w-full overflow-hidden rounded-lg cursor-pointer group"
        onClick={() => onImageClick(src)}
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
}
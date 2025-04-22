'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ReactCompareImage from 'react-compare-image';

// Service data
const services = [
  {
    id: 'microblading',
    title: 'Microblading de Cejas',
    price: '$5,499',
    description: 'Cejas con efecto natural, llenas y definidas que duran de manera semipermanente.',
    beforeImage: '/images/beforeafter/img1before.jpg',
    afterImage: '/images/beforeafter/img2before.jpg',
    alt: 'Antes y después de microblading de cejas'
  },
  {
    id: 'lash-lifting',
    title: 'Lash Lifting',
    price: '$649',
    description: 'Eleva tus pestañas naturales desde la raíz manteniendo un resultado muy natural y discreto.',
    beforeImage: '/images/beforeafter/img1before.jpg',
    afterImage: '/images/beforeafter/img2before.jpg',
    alt: 'Antes y después de lash lifting'
  },
  {
    id: 'extensiones',
    title: 'Extensiones de Pestañas',
    price: 'Desde $1,199',
    description: 'Colocamos extensiones sobre tus pestañas para un efecto de mayor longitud y definición.',
    beforeImage: '/images/beforeafter/img1before.jpg',
    afterImage: '/images/beforeafter/img2before.jpg',
    alt: 'Antes y después de extensiones de pestañas'
  }
];

// Service card component con controles de antes/después
const ServiceCard = ({ service }: { service: { 
  id: string;
  title: string;
  price: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  alt: string;
} }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [showBeforeButton, setShowBeforeButton] = useState(true);
  const [showAfterButton, setShowAfterButton] = useState(true);
  
  // Determinar qué botones mostrar basado en la posición del slider
  useEffect(() => {
    // Si el slider está muy a la izquierda (menos del 15%)
    if (sliderPosition < 35) {
      setShowBeforeButton(false);
      setShowAfterButton(true);
    } 
    // Si el slider está muy a la derecha (más del 85%)
    else if (sliderPosition > 65) {
      setShowBeforeButton(true);
      setShowAfterButton(false);
    } 
    // Si el slider está en el medio
    else {
      setShowBeforeButton(true);
      setShowAfterButton(true);
    }
  }, [sliderPosition]);
  
  // Función para mostrar completamente la imagen de antes
  const showBefore = () => {
    setSliderPosition(0);
  };
  
  // Función para mostrar completamente la imagen de después
  const showAfter = () => {
    setSliderPosition(100);
  };
  
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div 
        className="relative h-64 md:h-72 lg:h-80 w-full"
        onMouseEnter={() => setButtonsVisible(false)}
        onMouseLeave={() => setButtonsVisible(true)}
      >
        {/* Contenedor de botones con transición de opacidad */}
        <div className={`absolute top-0 left-0 right-0 flex justify-between z-10 p-2 transition-opacity duration-300 ${buttonsVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Botón Antes - solo visible según condición */}
          {showBeforeButton && (
            <button 
              onClick={showBefore}
              className="bg-black/70 hover:bg-black text-white px-2 py-1 rounded-full text-xs font-medium transition-colors"
            >
              Antes
            </button>
          )}
          
          {/* Espacio vacío cuando solo hay un botón para mantener el justify-between */}
          {!showBeforeButton && <div></div>}
          
          {/* Botón Después - solo visible según condición */}
          {showAfterButton && (
            <button 
              onClick={showAfter}
              className="bg-black/70 hover:bg-black text-white px-2 py-1 rounded-full text-xs font-medium transition-colors"
            >
              Después
            </button>
          )}
          
          {/* Espacio vacío cuando solo hay un botón para mantener el justify-between */}
          {!showAfterButton && <div></div>}
        </div>
        
        {/* Componente de comparación de imágenes */}
        <ReactCompareImage
          leftImage={service.beforeImage}
          rightImage={service.afterImage}
          sliderLineWidth={2}
          sliderLineColor="white"
          sliderPositionPercentage={sliderPosition / 100}
          onSliderPositionChange={(position) => setSliderPosition(position * 100)}
          hover={false}
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-medium mb-2">{service.title}</h3>
        <p className="text-xl font-bold mb-3">{service.price}</p>
        <p className="text-gray-700 mb-4 flex-grow">{service.description}</p>
        <Link 
          href={`/servicios/${service.id}`} 
          className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors text-center font-medium"
        >
          Más información
        </Link>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">Servicios para una mirada perfecta</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            En InstaBrows somos aliadas de la belleza, expertas dedicadas a transformar miradas que están listas en todo momento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-700">
            Nuestra meta es que transmitas la seguridad y confianza que desees con unas cejas y pestañas perfectas. Todos los procedimientos son personalizados ya que nuestro servicios se trata de encontrar juntas lo mejor para ti.
          </p>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Script from 'next/script';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';

// Temporary review data until Facebook API loads
const fallbackReviews = [
  {
    id: '1',
    name: 'Mariana Rivera',
    date: 'hace 3 años',
    rating: 5,
    text: 'Encantada con mis pestañas!! Súper recomiendo venir con Arely buen trato y excelente trabajo, yo busqué un lugar donde el precio fuera relacionado a la calida y aquí lo encontré instalaciones linda y excelente trato por parte de todas!',
    image: '/images/reviews/review1.jpg',
    profilePic: '/images/reviews/profile1.jpg',
    fbLink: 'https://www.facebook.com/instabrowsmx/reviews/'
  },
  {
    id: '2',
    name: 'Castell Mon',
    date: 'hace 3 años',
    rating: 5,
    text: 'Súper servicio, llevo casi 2 años viniendo cada 15 días y el trato y atención siempre ha sido muy bueno por parte de las chicas. Especialmente Pao quien es la que regularmente me atiende, súper linda y su trabajo increíble. Recomiendo al 100%',
    image: null,
    profilePic: '/images/reviews/profile2.jpg',
    fbLink: 'https://www.facebook.com/instabrowsmx/reviews/'
  },
  {
    id: '3',
    name: 'Karii Rm',
    date: 'hace 4 años',
    rating: 5,
    text: 'Como experiencia personal, dudé mucho en hacerme el proceso de microblading por que muchos lugares ofrecen este servicio y de diferentes precios. Y ninguno me daba la confianza para pedir una cita o algunos salían de mi presupuesto. Preguntando con amigas, familiares, etc me recomendaron al 100% Insta Brows. Así que ahora me toca recomendar este lugar, de verdad que desde que agendas tú cita hasta que terminan de hacer el trabajo, todo es excelente: Excelente trato.',
    image: '/images/reviews/review3.jpg',
    profilePic: '/images/reviews/profile3.jpg',
    fbLink: 'https://www.facebook.com/instabrowsmx/reviews/'
  },
  // Add 5 more reviews to make a total of 8
  {
    id: '4',
    name: 'Laura Méndez',
    date: 'hace 2 años',
    rating: 5,
    text: 'Increíble servicio, me encantó el resultado de mi microblading. Las chicas son super profesionales y el lugar es muy limpio y acogedor. Definitivamente regresaré para mi retoque y para probar otros servicios.',
    image: '/images/reviews/review4.jpg',
    profilePic: '/images/reviews/profile4.jpg',
    fbLink: 'https://www.facebook.com/instabrowsmx/reviews/'
  },
  {
    id: '5',
    name: 'Daniela Torres',
    date: 'hace 1 año',
    rating: 5,
    text: 'Me hice extensiones de pestañas y quedé fascinada con el resultado. El ambiente es muy agradable y el servicio es de primera. Totalmente recomendable si buscas calidad y profesionalismo.',
    image: null,
    profilePic: '/images/reviews/profile5.jpg',
    fbLink: 'https://www.facebook.com/instabrowsmx/reviews/'
  },
  {
    id: '6',
    name: 'Fernanda Ruiz',
    date: 'hace 6 meses',
    rating: 5,
    text: 'Excelente servicio y atención. Me hice el lash lifting y el resultado fue mejor de lo que esperaba. Las chicas son muy amables y profesionales. El lugar es muy bonito y limpio. Definitivamente volveré.',
    image: '/images/reviews/review6.jpg',
    profilePic: '/images/reviews/profile6.jpg',
    fbLink: 'https://www.facebook.com/instabrowsmx/reviews/'
  },
  {
    id: '7',
    name: 'Sofía Vega',
    date: 'hace 3 meses',
    rating: 5,
    text: 'Primera vez que me hago el microblading y estoy super contenta con el resultado. El proceso fue muy profesional y me explicaron todo paso a paso. El lugar es muy limpio y la atención es excelente.',
    image: null,
    profilePic: '/images/reviews/profile7.jpg',
    fbLink: 'https://www.facebook.com/instabrowsmx/reviews/'
  },
  {
    id: '8',
    name: 'Alejandra Moreno',
    date: 'hace 1 mes',
    rating: 5,
    text: 'Me encantó el servicio, super recomendado. Las chicas son muy profesionales y el lugar es muy bonito. Me hice las extensiones de pestañas y quedaron perfectas. Volveré pronto para probar el microblading.',
    image: '/images/reviews/review8.jpg',
    profilePic: '/images/reviews/profile8.jpg',
    fbLink: 'https://www.facebook.com/instabrowsmx/reviews/'
  }
];

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(fallbackReviews);
  const [loading, setLoading] = useState(true);
  const [fbLoaded, setFbLoaded] = useState(false);

  // Function to load Facebook reviews when SDK is ready
  const loadFacebookReviews = () => {
    if ((window as any).FB && fbLoaded) {
      // This would be the actual Facebook Graph API call
      // For now, we'll just simulate it with a timeout
      setTimeout(() => {
        // In a real implementation, you would fetch and process reviews from FB
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (fbLoaded) {
      loadFacebookReviews();
    }
  }, [fbLoaded]);

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Function to truncate text and add "read more" link
  const truncateText = (text: string, maxLines: number = 5) => {
    const words = text.split(' ');
    // Approximate 10 words per line
    const wordsPerLine = 10;
    const maxWords = maxLines * wordsPerLine;
    
    if (words.length <= maxWords) {
      return <p className="text-gray-700 mb-4">{text}</p>;
    }
    
    return (
      <div className="mb-4">
        <p className="text-gray-700">
          {words.slice(0, maxWords).join(' ')}...{' '}
          <a 
            href="#" 
            className="text-primary font-medium hover:underline"
            onClick={(e) => {
              e.preventDefault();
              // In a real implementation, this would navigate to the FB post
              window.open(reviews[0].fbLink, '_blank');
            }}
          >
            Leer más...
          </a>
        </p>
      </div>
    );
  };

  return (
    <>
      {/* Facebook SDK Script */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          ((window as any).FB)?.init({
            appId: '123456789012345', // Replace with your actual FB App ID
            version: 'v16.0',
            xfbml: true
          });
          setFbLoaded(true);
        }}
      />
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Opiniones de Nuestras Clientas</h2>
            <p className="text-lg">Somos el estudio mejor calificado de México</p>
            <div className="flex items-center justify-center mt-2">
              {renderStars(5)}
              <span className="ml-2 text-lg">4.9 (287 Opiniones)</span>
            </div>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-auto">
              {reviews.map((review) => (
                <motion.div 
                  key={review.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col ${
                    review.image 
                      ? 'md:col-span-2 lg:col-span-2 row-span-2' 
                      : 'md:col-span-2 lg:col-span-2 row-span-1 w-full'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image 
                          src={review.profilePic} 
                          alt={review.name} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-sm">{review.name}</h3>
                        <p className="text-gray-500 text-xs">{review.date}</p>
                      </div>
                      <div className="ml-auto">
                        <a href={review.fbLink} target="_blank" rel="noopener noreferrer">
                          <FacebookIcon className="w-10 h-10 text-[#1877F2]"/>
                        </a>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 line-clamp-5">
                        {review.text}
                        {review.text.length > 250 && (
                          <a 
                            href={review.fbLink}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="text-primary font-medium hover:underline ml-1"
                          >
                            Leer más...
                          </a>
                        )}
                      </p>
                    </div>
                    
                    {review.image && (
                      <div className="relative h-48 w-full rounded-lg overflow-hidden mb-3">
                        <Image 
                          src={review.image} 
                          alt={`Reseña de ${review.name}`} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-auto border-t border-gray-100 p-3 flex items-center justify-between bg-gray-50">
                    <button className="text-gray-500 text-xs hover:text-blue-600">Me gusta</button>
                    <button className="text-gray-500 text-xs hover:text-blue-600">Comentar</button>
                    <button className="text-gray-500 text-xs hover:text-blue-600">Compartir</button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
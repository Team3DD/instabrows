'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Script from 'next/script';
import { FacebookIcon } from './icons/FacebookIcon';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

// Constantes para configuración
const REVIEW_IMAGE = '/images/reviews/review-image.jpg'; // Nueva ruta de imagen optimizada
const DEFAULT_PROFILE_PIC = '/images/icon1.png';
const FB_APP_ID = '123456789012345'; // Reemplazar con tu FB App ID real
const FB_REVIEW_LINK = 'https://www.facebook.com/instabrowsmx/reviews/';
const MAX_TEXT_LENGTH = 250;

// Definición de tipos
interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  image: string | null;
  profilePic: string;
  fbLink: string;
}

// Podemos eliminar la interfaz FacebookReview si no se usa, o añadirle guion bajo
interface _FacebookReview {
  id: string;
  created_time: string;
  message?: string;
  rating?: number;
  reviewer?: {
    name: string;
    profile_photo?: string;
  };
}

// Definir un tipo para la ventana con FB
interface WindowWithFB extends Window {
  FB?: {
    init: (params: {
      appId: string;
      version: string;
      xfbml: boolean;
    }) => void;
  };
}

// Datos de reseñas predeterminados
const fallbackReviews: Review[] = [
  {
    id: '1',
    name: 'Mariana Rivera',
    date: 'hace 3 años',
    rating: 5,
    text: 'Encantada con mis pestañas!! Súper recomiendo venir con Arely buen trato y excelente trabajo, yo busqué un lugar donde el precio fuera relacionado a la calida y aquí lo encontré instalaciones linda y excelente trato por parte de todas!',
    image: REVIEW_IMAGE,
    profilePic: DEFAULT_PROFILE_PIC,
    fbLink: FB_REVIEW_LINK
  },
  // ... otros objetos de reseña ...
];

export default function ReviewsSection() {
  const [reviews, _setReviews] = useState<Review[]>(fallbackReviews); // Usamos _setReviews para indicar que es intencional no usarlo
  const [loading, setLoading] = useState(true);
  const [fbLoaded, setFbLoaded] = useState(false);

  // Carga de reseñas de Facebook cuando el SDK está listo
  const loadFacebookReviews = async (): Promise<void> => {
    const windowWithFB = window as WindowWithFB;
    if (windowWithFB.FB && fbLoaded) {
      // Esta sería la llamada real a la API de Facebook Graph
      // Por ahora, solo simulamos con un timeout
      setTimeout(() => {
        // En una implementación real, obtendrías y procesarías las reseñas de FB
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (fbLoaded) {
      loadFacebookReviews();
    }
  }, [fbLoaded, loadFacebookReviews]); // Añadimos loadFacebookReviews a las dependencias

  // ... resto del código sin cambios ...

  return (
    <>
      {/* Facebook SDK Script */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          const windowWithFB = window as WindowWithFB;
          windowWithFB.FB?.init({
            appId: FB_APP_ID,
            version: 'v16.0',
            xfbml: true
          });
          setFbLoaded(true);
        }}
      />
      
      {/* ... resto del código sin cambios ... */}
    </>
  );
}
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function FooterLogo() {
  return (
    <div className="flex flex-col items-center md:items-start justify-start" itemScope itemType="https://schema.org/Organization">
      <Link href="/" aria-label="Instabrows - Página principal" className="w-full flex justify-center md:justify-start">
        <Image 
          src="/images/icon2.png" 
          alt="Instabrows Logo" 
          width={300}
          height={90}
          className="w-full max-w-[250px] h-auto"
          priority
        />
      </Link>
      
      <p className="text-gray-600 mt-4 text-center md:text-left text-xs leading-tight" itemProp="description">
        Especialistas en belleza y cuidado de cejas, ofreciendo servicios de microblading, micropigmentación y más.
      </p>
    </div>
  );
}
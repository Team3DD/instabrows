'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Team member type
type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram?: string;
};

export default function NosotrasPage() {
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Ana García",
      role: "Fundadora & Especialista en Microblading",
      bio: "Con más de 8 años de experiencia en el mundo de la belleza, Ana fundó Instabrows con la visión de ofrecer servicios de alta calidad que realcen la belleza natural de cada cliente. Certificada internacionalmente en técnicas de microblading y micropigmentación.",
      image: "/images/team/ana.jpg",
      instagram: "anagarcia_instabrows"
    },
    {
      id: 2,
      name: "Laura Rodríguez",
      role: "Especialista en Diseño de Cejas",
      bio: "Laura es experta en crear diseños personalizados que se adaptan perfectamente a cada rostro. Su atención al detalle y su capacidad para entender las necesidades de cada cliente la han convertido en una de las profesionales más solicitadas del equipo.",
      image: "/images/team/laura.jpg",
      instagram: "laurarodriguez_beauty"
    },
    {
      id: 3,
      name: "Sofía Martínez",
      role: "Técnica en Pestañas",
      bio: "Especializada en extensiones de pestañas y lifting, Sofía aporta su creatividad y precisión a cada tratamiento. Su formación constante en las últimas tendencias le permite ofrecer resultados excepcionales y personalizados.",
      image: "/images/team/sofia.jpg",
      instagram: "sofiamartinez_lashes"
    }
  ];

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen py-20 px-4 bg-[#f9f5f2]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 uppercase tracking-wider">Nuestro Equipo</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En Instabrows, contamos con un equipo de profesionales apasionadas por la belleza y el cuidado de cejas y pestañas. 
            Cada una de nuestras especialistas está certificada y en constante formación para ofrecerte los mejores resultados.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <Card 
              key={member.id} 
              className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-80 w-full bg-gray-200">
                {/* Replace with actual images when available */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {member.name.charAt(0)}
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">{member.role}</p>
                {member.instagram && (
                  <a 
                    href={`https://instagram.com/${member.instagram}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-primary text-sm"
                  >
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" />
                      <path d="M12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                    @{member.instagram}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Member Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
                    <p className="text-gray-500 text-sm uppercase tracking-wider">{selectedMember.role}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative h-80 w-full bg-gray-200 rounded-lg">
                      {/* Replace with actual images when available */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-4xl">
                        {selectedMember.name.charAt(0)}
                      </div>
                    </div>
                    
                    {selectedMember.instagram && (
                      <a 
                        href={`https://instagram.com/${selectedMember.instagram}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center text-gray-600 hover:text-primary"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" />
                          <path d="M12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                        </svg>
                        @{selectedMember.instagram}
                      </a>
                    )}
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-4">Biografía</h3>
                    <p className="text-gray-600 mb-6">{selectedMember.bio}</p>
                    
                    <h3 className="text-xl font-semibold mb-4">Especialidades</h3>
                    <ul className="list-disc pl-5 text-gray-600 mb-6">
                      <li className="mb-2">Microblading de cejas</li>
                      <li className="mb-2">Diseño personalizado</li>
                      <li className="mb-2">Técnicas avanzadas de sombreado</li>
                      <li>Asesoría de imagen</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mb-4">Certificaciones</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li className="mb-2">Certificación Internacional en Microblading</li>
                      <li className="mb-2">Especialista en Micropigmentación</li>
                      <li>Técnicas Avanzadas de Diseño de Cejas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-wider">Nuestros Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad</h3>
              <p className="text-gray-600">
                Utilizamos productos de la más alta calidad y técnicas avanzadas para garantizar resultados excepcionales.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovación</h3>
              <p className="text-gray-600">
                Nos mantenemos actualizadas con las últimas tendencias y técnicas para ofrecerte lo mejor.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalización</h3>
              <p className="text-gray-600">
                Cada tratamiento está diseñado específicamente para ti, respetando tus rasgos naturales y realzando tu belleza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';

export default function Servicios() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Servicio 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Microblading</h2>
            <div className="bg-gray-200 h-64 rounded-lg mb-6"></div>
            <p className="text-gray-600 mb-6">
              El microblading es una técnica semipermanente que consiste en dibujar pelo a pelo para conseguir unas cejas con aspecto natural. Ideal para quienes desean rellenar zonas despobladas o redefinir la forma de sus cejas.
            </p>
            <div className="mb-4">
              <span className="font-semibold">Duración:</span> 2 horas aproximadamente
            </div>
            <div className="mb-4">
              <span className="font-semibold">Precio:</span> Desde $2,500 MXN
            </div>
            <Link href="/contacto" className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Agendar Cita
            </Link>
          </div>
          
          {/* Servicio 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Micropigmentación</h2>
            <div className="bg-gray-200 h-64 rounded-lg mb-6"></div>
            <p className="text-gray-600 mb-6">
              La micropigmentación es una técnica de maquillaje semipermanente que permite corregir o reconstruir zonas que han perdido color o pelo. Perfecta para definir el contorno de los labios, delinear los ojos o dar forma a las cejas.
            </p>
            <div className="mb-4">
              <span className="font-semibold">Duración:</span> 1-2 horas aproximadamente
            </div>
            <div className="mb-4">
              <span className="font-semibold">Precio:</span> Desde $2,000 MXN
            </div>
            <Link href="/contacto" className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Agendar Cita
            </Link>
          </div>
          
          {/* Servicio 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Diseño de Cejas</h2>
            <div className="bg-gray-200 h-64 rounded-lg mb-6"></div>
            <p className="text-gray-600 mb-6">
              Nuestro servicio de diseño de cejas incluye depilación, perfilado y tinte para conseguir la forma perfecta según tu rostro. Utilizamos técnicas profesionales para realzar tu mirada.
            </p>
            <div className="mb-4">
              <span className="font-semibold">Duración:</span> 45 minutos aproximadamente
            </div>
            <div className="mb-4">
              <span className="font-semibold">Precio:</span> Desde $500 MXN
            </div>
            <Link href="/contacto" className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Agendar Cita
            </Link>
          </div>
          
          {/* Servicio 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Laminado de Cejas</h2>
            <div className="bg-gray-200 h-64 rounded-lg mb-6"></div>
            <p className="text-gray-600 mb-6">
              El laminado de cejas es un tratamiento que alisa, levanta y fija el pelo de las cejas, dándoles un aspecto más poblado y definido. Incluye tinte para un resultado más intenso.
            </p>
            <div className="mb-4">
              <span className="font-semibold">Duración:</span> 1 hora aproximadamente
            </div>
            <div className="mb-4">
              <span className="font-semibold">Precio:</span> Desde $800 MXN
            </div>
            <Link href="/contacto" className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Agendar Cita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
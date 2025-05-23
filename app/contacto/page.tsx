'use client';

import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formData);
    alert('Formulario enviado correctamente');
  };

  return (
    <div className="min-h-screen py-12 px-4">

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contacto</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Ubicación</h3>
              <p className="text-gray-600 mb-2">Av. Principal #123</p>
              <p className="text-gray-600 mb-2">Col. Centro</p>
              <p className="text-gray-600">Ciudad de México, CP 12345</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Horario de Atención</h3>
              <p className="text-gray-600 mb-2">Lunes a Viernes: 10:00 - 19:00</p>
              <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Contacto Directo</h3>
              <p className="text-gray-600 mb-2">Teléfono: (55) 1234-5678</p>
              <p className="text-gray-600 mb-2">WhatsApp: (55) 8765-4321</p>
              <p className="text-gray-600">Email: info@instabrows.mx</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-pink-600 hover:text-pink-800">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Formulario de Contacto */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">Nombre Completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="telefono" className="block text-gray-700 font-semibold mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="servicio" className="block text-gray-700 font-semibold mb-2">Servicio de Interés</label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="microblading">Microblading</option>
                  <option value="micropigmentacion">Micropigmentación</option>
                  <option value="diseno">Diseño de Cejas</option>
                  <option value="laminado">Laminado de Cejas</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-gray-700 font-semibold mb-2">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
        
        {/* Mapa */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Encuéntranos</h2>
          <div className="bg-gray-200 h-96 w-full rounded-lg">
            {/* Aquí puedes integrar un mapa de Google Maps */}
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Mapa de ubicación</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
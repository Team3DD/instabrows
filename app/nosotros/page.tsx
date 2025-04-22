export default function Nosotros() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Sobre Nosotros</h1>
        
        {/* Historia */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-gray-200 h-80 w-full rounded-lg"></div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                Instabrows nació en 2015 con la visión de ofrecer servicios de belleza especializados en cejas de la más alta calidad. Desde entonces, hemos ayudado a miles de clientes a realzar su belleza natural y aumentar su confianza.
              </p>
              <p className="text-gray-600">
                Nuestro compromiso con la excelencia y la formación continua nos ha permitido mantenernos a la vanguardia de las últimas técnicas y tendencias en el cuidado de cejas y micropigmentación.
              </p>
            </div>
          </div>
        </section>
        
        {/* Misión y Visión */}
        <section className="mb-16 bg-gray-100 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-gray-600">
                Proporcionar servicios de belleza personalizados que realcen la belleza natural de nuestros clientes, utilizando técnicas avanzadas y productos de alta calidad en un ambiente acogedor y profesional.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-gray-600">
                Ser reconocidos como el referente en servicios de micropigmentación y cuidado de cejas, destacando por nuestra excelencia, innovación y atención personalizada.
              </p>
            </div>
          </div>
        </section>
        
        {/* Equipo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Miembro 1 */}
            <div className="text-center">
              <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Ana López</h3>
              <p className="text-gray-600 mb-2">Fundadora y Especialista en Microblading</p>
              <p className="text-gray-500">
                Con más de 10 años de experiencia en el sector de la belleza, Ana ha formado a decenas de profesionales en técnicas de micropigmentación.
              </p>
            </div>
            
            {/* Miembro 2 */}
            <div className="text-center">
              <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Laura Martínez</h3>
              <p className="text-gray-600 mb-2">Especialista en Micropigmentación</p>
              <p className="text-gray-500">
                Laura es experta en técnicas avanzadas de micropigmentación y ha participado en numerosos congresos internacionales de estética.
              </p>
            </div>
            
            {/* Miembro 3 */}
            <div className="text-center">
              <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Carlos Rodríguez</h3>
              <p className="text-gray-600 mb-2">Especialista en Diseño de Cejas</p>
              <p className="text-gray-500">
                Carlos combina su formación en arte y estética para crear diseños de cejas personalizados que realzan las facciones de cada cliente.
              </p>
            </div>
          </div>
        </section>
        
        {/* Valores */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">Excelencia</h3>
              <p className="text-gray-600">
                Nos esforzamos por ofrecer los mejores resultados en cada servicio.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">Personalización</h3>
              <p className="text-gray-600">
                Adaptamos nuestros servicios a las necesidades y características de cada cliente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">Innovación</h3>
              <p className="text-gray-600">
                Nos mantenemos actualizados con las últimas técnicas y productos del sector.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">Profesionalidad</h3>
              <p className="text-gray-600">
                Trabajamos con ética y respeto hacia nuestros clientes y compañeros.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
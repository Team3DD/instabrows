'use client';

import { motion } from 'framer-motion';

// Schedule data
const schedule = [
  { day: 'Lunes', hours: '9am – 6:00pm' },
  { day: 'Martes', hours: '9am – 6:00pm' },
  { day: 'Miércoles', hours: '9am – 6:00pm' },
  { day: 'Jueves', hours: '9am – 6:00pm' },
  { day: 'Viernes', hours: '9am – 6:00pm' },
  { day: 'Sabado', hours: '9am – 3:00pm' },
  { day: 'Domingo', hours: 'Cerrado' }
];

export default function AppointmentSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column - Booking info */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">Agenda tu Cita</h2>
              <p className="text-gray-700 mb-8">
                Transforma tu mirada con nosotras y muéstrale al mundo la versión más segura de ti misma. 
                Recuerda que todos nuestros servicios son personalizados por lo que es necesario previa cita.
              </p>
              
              <div className="flex items-center mt-6 gap-x-3">
                {/* WhatsApp Button */}
                <button 
              onClick={() => window.open("https://wa.me/5215512936398?text=Hola,%20me%20gustaría%20agendar%20una%20cita", "_blank")}
                
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center min-w-[150px]"
              aria-label="Agendar cita por WhatsApp"
            >
              AGENDAR VÍA WHATSAPP
            </button>
              </div>
              
              <div className="mb-8 mt-10">
                <h3 className="text-xl font-medium mb-2">Dirección</h3>
                <p className="text-gray-700">Valle Dorado, Jinetes #14</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Contacto</h3>
                <p className="text-gray-700 mb-1">Tel. 5559297998</p>
                <p className="text-gray-700 mb-1">WP. <a href="tel:5512936398" className="underline">55 1293-6398</a></p>
                <p className="text-gray-700"><a href="mailto:instabrows.mx@gmail.com" className="underline">instabrows.mx@gmail.com</a></p>
              </div>
            </motion.div>
          </div>
          
          {/* Right column - Schedule */}
          <div className="lg:w-1/2 bg-gray-50 rounded-lg p-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-medium mb-6">Horarios</h3>
              
              <div className="space-y-0">
              {schedule.map((item) => (
                <div key={item.day} className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0">
                  <span className="text-lg">{item.day}</span>
                  <span className="text-lg">{item.hours}</span>
                </div>
              ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
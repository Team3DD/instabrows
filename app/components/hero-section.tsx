'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 md:px-8">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary font-medium mb-2 md:mb-4">LE DAMOS PODER A TU MIRADA</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 leading-tight">
          Somos expertas en<br />Microblading de Cejas
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Creemos que puedes sentirte guapa sin esfuerzo, a través de diseños
          personalizados y resultados naturales. Te ayudamos a que te sientas mejor y te
          veas mejor.
        </p>
      </motion.div>
    </div>
  );
}
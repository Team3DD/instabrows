/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  output: 'standalone',
  swcMinify: true,
  // Optimizaciones adicionales para despliegue
  poweredByHeader: false,
  images: {
    unoptimized: false,
    // Agrega aquí dominios para imágenes si los necesitas
    // domains: ['example.com'],
  },
  // Configura webpack para optimizar el build
  webpack: (config) => {
    // Optimizaciones de webpack si son necesarias
    return config;
  },
}

module.exports = nextConfig
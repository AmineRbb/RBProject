/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Formats supportés
    formats: ['image/webp', 'image/avif'],
    
    // Tailles d'images optimisées
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Cache des images optimisées
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 jours
  },
  
  // Compression gzip/brotli
  compress: true,
};

export default nextConfig;

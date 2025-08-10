'use client';

import { useEffect } from 'react';

interface ImagePreloaderProps {
  imageSources: string[];
}

export default function ImagePreloader({ imageSources }: ImagePreloaderProps) {
  useEffect(() => {
    const preloadImages = () => {
      imageSources.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Précharger après un délai pour ne pas bloquer le rendu initial
    const timer = setTimeout(preloadImages, 1000);
    
    return () => clearTimeout(timer);
  }, [imageSources]);

  return null; // Ce composant ne rend rien visuellement
} 
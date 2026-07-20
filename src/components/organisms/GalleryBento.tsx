import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryData } from '../../data/gallery';
import { ZoomIn } from 'lucide-react';
import { cn } from '../../lib/utils';

export function GalleryBento() {
  const [index, setIndex] = useState(-1);

  // Bento grid mapping: varying row/col spans for visual interest
  const getBentoClass = (index: number) => {
    switch (index % 6) {
      case 0: return "col-span-1 row-span-2 md:col-span-2 md:row-span-2"; // Large square
      case 1: return "col-span-1 row-span-1 md:col-span-2 md:row-span-1"; // Wide landscape
      case 2: return "col-span-1 row-span-1"; // Small square
      case 3: return "col-span-1 row-span-1 md:col-span-1 md:row-span-2"; // Tall portrait
      case 4: return "col-span-1 row-span-1 md:col-span-2 md:row-span-1"; // Wide landscape
      case 5: return "col-span-1 row-span-1"; // Small square
      default: return "col-span-1 row-span-1";
    }
  };

  const slides = galleryData.map(img => ({ src: img.src, alt: img.alt }));

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[200px] gap-4">
        {galleryData.map((image, i) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={cn(
              "relative rounded-xl overflow-hidden group cursor-pointer bg-brand-light",
              getBentoClass(i)
            )}
            onClick={() => setIndex(i)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
              <div className="flex items-center justify-between">
                <p className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <ZoomIn size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        animation={{ fade: 300, swipe: 250 }}
        carousel={{ finite: false }}
      />
    </>
  );
}

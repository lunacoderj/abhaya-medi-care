import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCard } from '../molecules/ServiceCard';
import { servicesData } from '../../data/services';

interface ServicesGridProps {
  preview?: boolean;
}

export function ServicesGrid({ preview = false }: ServicesGridProps) {
  // Always show all 14 categories as requested for the home page/services page
  const displayedServices = preview ? servicesData.slice(0, 14) : servicesData;

  return (
    <div>
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: preview ? index * 0.05 : 0 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

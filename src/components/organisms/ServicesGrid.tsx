import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCard } from '../molecules/ServiceCard';
import { servicesData } from '../../data/services';

interface ServicesGridProps {
  limit?: number;
}

export function ServicesGrid({ limit }: ServicesGridProps) {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <div>
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.5) }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

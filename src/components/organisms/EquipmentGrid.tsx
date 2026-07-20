import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { EquipmentCard } from '../molecules/EquipmentCard';
import { equipmentData } from '../../data/equipment';
import { cn } from '../../lib/utils';

interface EquipmentGridProps {
  preview?: boolean;
}

export function EquipmentGrid({ preview = false }: EquipmentGridProps) {
  const displayEquipment = preview ? equipmentData.slice(0, 4) : equipmentData;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "grid gap-6",
        preview 
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" // standard grid for preview
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"  // full grid
      )}
    >
      {displayEquipment.map((equipment, i) => (
        <motion.div 
          key={equipment.id} 
          variants={itemVariants}
          // Make the first item larger in the bento grid if not preview
          className={!preview && i === 0 ? "md:col-span-2 lg:col-span-2" : ""}
        >
          <EquipmentCard equipment={equipment} />
        </motion.div>
      ))}
    </motion.div>
  );
}

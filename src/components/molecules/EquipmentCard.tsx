import React from 'react';
import { Card } from '../atoms/Card';
import { Badge } from '../atoms/Badge';
import { ArrowRight } from 'lucide-react';
import { type Equipment } from '../../data/equipment';
import { Link } from 'react-router-dom';

interface EquipmentCardProps {
  equipment: Equipment;
}

export function EquipmentCard({ equipment }: EquipmentCardProps) {
  return (
    <Card padding="none" className="group overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
      <div className="relative aspect-video overflow-hidden bg-brand-light">
        {equipment.image ? (
          <img 
            src={equipment.image} 
            alt={equipment.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-gray/50">
            No Image
          </div>
        )}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="shadow-md backdrop-blur-md bg-brand-teal/90">
            {equipment.category}
          </Badge>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h4 className="text-xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-blue transition-colors">
          {equipment.name}
        </h4>
        <p className="text-sm font-medium text-brand-gray mb-3">
          {equipment.manufacturer} {equipment.model}
        </p>
        <p className="text-sm text-brand-charcoal/70 line-clamp-2 mb-4 flex-1">
          {equipment.description}
        </p>
        
        <Link 
          to={`/equipment/${equipment.id}`}
          className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-teal transition-colors mt-auto"
        >
          View Specifications <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}

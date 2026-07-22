import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { type Equipment } from '../../data/equipment';

interface EquipmentCardProps {
  equipment: Equipment;
}

export function EquipmentCard({ equipment }: EquipmentCardProps) {


  return (
    <>
      <Card variant="glass" padding="none" hover={true} className="group overflow-hidden flex flex-col h-full bg-white">
        {/* Header Image */}
        <div className="relative w-full bg-brand-light flex items-center justify-center p-6 border-b border-brand-gray/10" style={{ height: '250px' }}>
          {equipment.image ? (
            <img 
              src={equipment.image} 
              alt={equipment.name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-brand-gray/50">
              No Image
            </div>
          )}
        </div>
        
        {/* Card Content */}
        <div className="p-6 flex flex-col flex-1">
          <Badge variant="outline" className="self-start mb-2 border-brand-gold/20 text-brand-gold">{equipment.model}</Badge>
          <h4 className="text-xl font-bold text-brand-charcoal mb-3 group-hover:text-brand-blue transition-colors">
            {equipment.name}
          </h4>
          <p className="text-sm text-brand-charcoal/70 mb-4 line-clamp-3">
            {equipment.description}
          </p>

          <Link 
            to={`/equipment/${equipment.id}`}
            className="w-full mt-auto group/btn flex items-center justify-center gap-2 py-2.5 rounded-full border border-brand-gold/50 text-brand-blue hover:border-brand-gold hover:text-brand-gold transition-colors font-medium text-sm"
          >
            Learn More
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Card>
    </>
  );
}

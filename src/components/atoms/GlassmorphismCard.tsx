import React from 'react';
import { Card } from './Card';
import { Icon } from './Icon';

export interface GlassmorphismCardProps {
  icon?: string;
  title: string;
  description: string;
  hoverable?: boolean;
  onClick?: () => void;
  className?: string;
}

export function GlassmorphismCard({ 
  icon, 
  title, 
  description, 
  hoverable = true, 
  onClick,
  className = ''
}: GlassmorphismCardProps) {
  return (
    <Card 
      variant="glass" 
      hover={hoverable} 
      onClick={onClick}
      className={`p-6 flex flex-col gap-4 cursor-pointer group ${className}`}
    >
      {icon && (
        <div className="text-brand-gold bg-brand-gold/10 w-12 h-12 rounded-xl flex items-center justify-center shadow-inner group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
          <Icon name={icon} size={24} animation="pulse" className="group-hover:animate-none group-hover:scale-110 transition-transform" />
        </div>
      )}
      <div>
        <h3 className="text-lg font-bold text-brand-charcoal mb-2 group-hover:text-brand-blue transition-colors">{title}</h3>
        <p className="text-sm text-brand-gray/80 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}

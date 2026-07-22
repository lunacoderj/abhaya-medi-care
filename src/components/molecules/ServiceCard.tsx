import React from 'react';
import { Card } from '../atoms/Card';
import { Icon } from '../atoms/Icon';
import { ArrowRight, Clock } from 'lucide-react';
import { type Service } from '../../data/services';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link to={`/services/${service.id}`} className="block h-full group">
      <Card 
        variant="glass"
        hover={true}
        className="relative h-full overflow-hidden flex flex-col p-0 border border-white/40 shadow-soft-xl rounded-2xl bg-white"
      >
        {/* Image Header */}
        <div className="relative h-56 w-full overflow-hidden bg-brand-charcoal">
          {service.image && (
            <img 
              src={service.image} 
              alt={service.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent" />
          
          <div className="absolute bottom-4 left-5 right-5 flex items-end gap-4">
            <div className="bg-white/10 backdrop-blur-lg text-brand-gold p-3 rounded-xl shadow-lg border border-white/20 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
              <Icon name={service.iconName} size={28} />
            </div>
            <h4 className="text-2xl font-serif font-bold text-white leading-tight flex-1 drop-shadow-md pb-1">
              {service.name}
            </h4>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-1">
          <p className="text-sm text-brand-charcoal/80 line-clamp-2 mb-5 font-medium leading-relaxed">
            {service.description}
          </p>

          {/* Tests preview */}
          <div className="flex-1 mb-6">
            <div className="w-8 h-1 bg-brand-gold/30 mb-4 rounded-full group-hover:w-16 group-hover:bg-brand-gold transition-all duration-300" />
            <p className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-3">Key Tests:</p>
            <ul className="space-y-2">
              {service.tests?.slice(0, 3).map((test, idx) => (
                <li key={idx} className="text-sm text-brand-charcoal flex items-start gap-2">
                  <span className="text-brand-teal mt-0.5">✦</span>
                  <span className="line-clamp-1 font-medium">{test.name}</span>
                </li>
              ))}
              {service.tests && service.tests.length > 3 && (
                <li className="text-xs font-bold text-brand-blue mt-2 inline-flex items-center gap-1">
                  + {service.tests.length - 3} more tests
                </li>
              )}
            </ul>
          </div>

          {/* Bottom Section */}
          <div className="mt-auto pt-4 border-t border-brand-charcoal/10 overflow-hidden relative h-14">
            <div className="absolute inset-0 flex items-center justify-between font-semibold text-sm transition-transform duration-300 transform group-hover:-translate-y-12 text-brand-charcoal">
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-brand-teal" /> 
                {service.turnaroundTime}
              </span>
              <ArrowRight size={18} className="text-brand-gold" />
            </div>
            
            <div className="absolute inset-0 flex items-center justify-between text-white font-bold text-sm bg-brand-charcoal px-5 rounded-xl transition-all duration-300 transform translate-y-12 group-hover:translate-y-0 shadow-md">
              <span>View Details</span>
              <ArrowRight size={18} className="animate-pulse-subtle text-brand-gold" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

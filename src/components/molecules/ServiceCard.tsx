import React from 'react';
import { Card } from '../atoms/Card';
import { Icon } from '../atoms/Icon';
import { ArrowRight } from 'lucide-react';
import { type Service } from '../../data/services';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link to={`/services/${service.id}`} className="block h-full">
      <Card 
        className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/30"
      >
        <div className="flex flex-col h-full">
          {/* Top Section */}
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-brand-pale text-brand-blue p-3 rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Icon name={service.iconName} size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-brand-charcoal leading-tight mb-1 group-hover:text-brand-blue transition-colors">
                {service.name}
              </h4>
              <p className="text-sm text-brand-gray line-clamp-2">
                {service.description}
              </p>
            </div>
          </div>

          {/* Middle Section - Tests preview */}
          <div className="flex-1 mb-6">
            <p className="text-xs font-semibold text-brand-gray/70 uppercase tracking-wider mb-2">Includes tests like:</p>
            <ul className="space-y-1">
              {service.tests.slice(0, 3).map((test, idx) => (
                <li key={idx} className="text-sm text-brand-gray flex items-start gap-2">
                  <span className="text-brand-teal mt-0.5">•</span>
                  <span className="line-clamp-1">{test.name}</span>
                </li>
              ))}
              {service.tests.length > 3 && (
                <li className="text-xs text-brand-gray/60 italic pl-3 mt-1">
                  + {service.tests.length - 3} more tests
                </li>
              )}
            </ul>
          </div>

          {/* Bottom Section */}
          <div className="mt-auto pt-4 border-t border-brand-gray/10 flex items-center justify-between text-brand-blue font-semibold text-sm">
            <span>More Details</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
}

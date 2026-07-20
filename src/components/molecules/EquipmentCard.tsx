import React, { useState } from 'react';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { type EquipmentDetailed } from '../../data/equipment';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface EquipmentCardProps {
  equipment: EquipmentDetailed;
}

export function EquipmentCard({ equipment }: EquipmentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card padding="none" className="group overflow-hidden flex flex-col h-full hover:shadow-float transition-all duration-300 bg-white">
        {/* Header Image - Preserving Original Sizes */}
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
          <h4 className="text-xl font-bold text-brand-charcoal mb-3 group-hover:text-brand-blue transition-colors">
            {equipment.name}
          </h4>
          <p className="text-sm text-brand-charcoal/70 mb-4 line-clamp-3">
            {equipment.overview}
          </p>

          {/* Quick Highlights */}
          <div className="mb-6 space-y-2 flex-1">
            {equipment.commonUses.slice(0, 3).map((use, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-teal shrink-0 mt-0.5" />
                <span className="text-sm text-brand-gray">{use}</span>
              </div>
            ))}
            {equipment.commonUses.length > 3 && (
              <span className="text-xs text-brand-blue font-semibold pl-6">
                + {equipment.commonUses.length - 3} more uses
              </span>
            )}
          </div>
          
          <Button 
            variant="outline"
            className="w-full mt-auto group/btn"
            onClick={() => setIsModalOpen(true)}
          >
            Learn More
            <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>

      {/* Learn More Modal */}
      {isModalOpen && createPortal(
        <AnimatePresence>
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
            >
              {/* Modal Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-brand-charcoal hover:bg-brand-pale hover:text-red-500 transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              {/* Modal Image Section */}
              <div className="w-full md:w-2/5 bg-brand-light p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-brand-gray/10 min-h-[250px] md:min-h-full">
                <img 
                  src={equipment.image} 
                  alt={equipment.name}
                  className="w-full max-h-[400px] object-contain mix-blend-multiply"
                />
              </div>

              {/* Modal Content Section */}
              <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto custom-scrollbar">
                <Badge variant="outline" className="mb-4 text-brand-teal border-brand-teal/20 bg-brand-teal/5">Diagnostic Equipment</Badge>
                <h3 className="text-3xl font-extrabold text-brand-charcoal mb-6">{equipment.name}</h3>
                
                <div className="space-y-8">
                  <section>
                    <h4 className="text-lg font-bold text-brand-blue mb-2">Overview</h4>
                    <p className="text-brand-gray leading-relaxed">{equipment.overview}</p>
                  </section>

                  {equipment.purpose && (
                    <section>
                      <h4 className="text-lg font-bold text-brand-blue mb-2">Purpose</h4>
                      <p className="text-brand-gray leading-relaxed">{equipment.purpose}</p>
                    </section>
                  )}

                  {equipment.howItWorks && (
                    <section>
                      <h4 className="text-lg font-bold text-brand-blue mb-2">How It Works</h4>
                      <p className="text-brand-gray leading-relaxed">{equipment.howItWorks}</p>
                    </section>
                  )}

                  <div className="grid sm:grid-cols-2 gap-8">
                    <section>
                      <h4 className="text-lg font-bold text-brand-blue mb-3">Common Uses</h4>
                      <ul className="space-y-2">
                        {equipment.commonUses.map((use, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-brand-gray text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 shrink-0" />
                            {use}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h4 className="text-lg font-bold text-brand-blue mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {equipment.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-brand-gray text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

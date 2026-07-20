import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { clinicData } from '../../data/clinic';
import { buildWhatsAppUrl } from '../../lib/utils';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const whatsappMessage = "Hi Abhaya Medicare, I need some information.";
  const whatsappUrl = buildWhatsAppUrl(clinicData.contact.whatsapp, whatsappMessage);
  
  // Mobile only shows whatsapp and phone. Desktop shows scroll-to-top.
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top (Desktop mostly) */}
      <button
        onClick={scrollToTop}
        className={cn(
          "bg-white text-brand-charcoal p-3 rounded-full shadow-lg border border-brand-gray/10 hover:bg-brand-light transition-all duration-300 focus:outline-none",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="flex flex-col gap-4">
        {/* Phone Button */}
        <motion.a 
          href={`tel:${clinicData.contact.phone}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="bg-brand-blue text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 flex items-center justify-center relative overflow-hidden group"
          aria-label="Call Us"
        >
          <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform rounded-full" />
          <Phone size={24} className="relative z-10" />
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full border border-brand-blue animate-ping opacity-20" />
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 flex items-center justify-center relative overflow-hidden group"
          aria-label="WhatsApp Us"
        >
          <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform rounded-full" />
          <MessageCircle size={24} className="relative z-10" />
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-20" />
        </motion.a>
      </div>
    </div>
  );
}

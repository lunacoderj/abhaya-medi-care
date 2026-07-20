import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { clinicData } from '../../data/clinic';
import { buildWhatsAppUrl } from '../../lib/utils';
import { cn } from '../../lib/utils';

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

      <div className="flex gap-3">
        {/* Phone Button */}
        <a 
          href={`tel:${clinicData.contact.phone}`}
          className="bg-brand-blue text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          aria-label="Call Us"
        >
          <Phone size={24} />
        </a>

        {/* WhatsApp Button */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          aria-label="WhatsApp Us"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { Shield, MessageCircle, Phone, Activity, HeartPulse, TestTube } from 'lucide-react';
import { clinicData } from '../../data/clinic';
import { buildWhatsAppUrl } from '../../lib/utils';
import { Icon } from '../atoms/Icon';

export function HeroSection() {
  const whatsappMessage = "Hi Abhaya Medicare, I want to book an appointment.";
  const whatsappUrl = buildWhatsAppUrl(clinicData.contact.whatsapp, whatsappMessage);

  const heroRef = useRef<HTMLDivElement>(null);
  const textElementsRef = useRef<HTMLDivElement>(null);
  const floatCard1Ref = useRef<HTMLDivElement>(null);
  const floatCard2Ref = useRef<HTMLDivElement>(null);
  const backgroundMeshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      // Background Mesh Rotation
      gsap.to(backgroundMeshRef.current, {
        rotation: 360,
        duration: 100,
        repeat: -1,
        ease: "linear",
      });

      // Staggered Text Reveal
      const textElements = textElementsRef.current?.children;
      if (textElements) {
        gsap.fromTo(
          textElements,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
        );
      }

      // Floating UI Cards
      gsap.to(floatCard1Ref.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(floatCard2Ref.current, {
        y: 20,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });

    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-brand-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 640px)" srcSet="/hero-bg.png" />
          <img src="/mobile-version-bg.png" alt="Abhaya Medicare Hero Background" className="w-full h-full object-cover" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/40 sm:bg-none sm:bg-gradient-to-r sm:from-white/90 sm:via-white/70 sm:to-transparent"></div>
      </div>

      {/* EKG Pulse Line Animation (Full Width, Mobile & Desktop) */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 z-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-70 translate-y-2">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full">
          <motion.path 
            d="M 0,50 L 150,50 L 160,50 L 175,20 L 195,95 L 210,35 L 225,50 L 500,50 L 510,50 L 525,20 L 545,95 L 560,35 L 575,50 L 850,50 L 860,50 L 875,20 L 895,95 L 910,35 L 925,50 L 1000,50" 
            fill="none" 
            stroke="#CD0000" 
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1], 
              opacity: [0, 1, 1, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1]
            }}
          />
          {/* Secondary ghost line for glow effect */}
          <motion.path 
            d="M 0,50 L 150,50 L 160,50 L 175,20 L 195,95 L 210,35 L 225,50 L 500,50 L 510,50 L 525,20 L 545,95 L 560,35 L 575,50 L 850,50 L 860,50 L 875,20 L 895,95 L 910,35 L 925,50 L 1000,50" 
            fill="none" 
            stroke="#CD0000" 
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="blur-sm opacity-50"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1], 
              opacity: [0, 0.5, 0.5, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1]
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-2xl text-left" ref={textElementsRef}>
            <div className="flex justify-start mb-8">
              <Badge variant="outline" className="border-brand-gold/30 text-brand-gold gap-2 px-5 py-2.5 rounded-full font-medium text-xs tracking-widest inline-flex items-center uppercase bg-white/50 backdrop-blur-sm">
                <Shield size={14} className="text-brand-gold" />
                NABL Accredited Diagnostics
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-normal text-brand-charcoal leading-[1.1] mb-8 font-serif">
              Diagnostics <br className="hidden md:block" />
              <span className="italic text-brand-blue">Redefined</span>
            </h1>

            <p className="text-lg md:text-xl text-brand-charcoal/90 mb-12 max-w-xl leading-relaxed font-medium text-balance drop-shadow-sm">
              {clinicData.tagline}. State-of-the-art equipment, expert doctors, and accurate results delivered in a serene environment.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full shadow-lg" icon={<MessageCircle size={20} />} iconPosition="left">
                  Book Appointment
                </Button>
              </a>
              <a href={`tel:${clinicData.contact.phone}`} className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full bg-white/50 backdrop-blur-sm border-brand-blue text-brand-blue" icon={<Phone size={20} />} iconPosition="left">
                  Call Now
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Heart & Lifeline Animation */}
          <div className="hidden lg:flex justify-center items-center relative h-full">
            <div 
              ref={floatCard1Ref}
              className="relative w-[400px] h-[400px] flex items-center justify-center"
            >
              {/* HM Ambulance style Ripple Pulse Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[200px] h-[200px] bg-brand-red/20 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <div className="absolute w-[250px] h-[250px] bg-brand-red/10 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '0.5s' }} />
                <div className="absolute w-[300px] h-[300px] bg-brand-red/5 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '1s' }} />
              </div>
              
              <div className="relative w-48 h-48 bg-white/90 backdrop-blur-md rounded-full shadow-soft-xl flex items-center justify-center border-4 border-brand-red/10 z-10">
                <HeartPulse 
                  size={80} 
                  strokeWidth={1.5}
                  className="text-brand-red" 
                  style={{ 
                    animation: 'pulse 1.5s ease-in-out infinite' 
                  }} 
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 right-10 bg-white p-4 rounded-2xl shadow-soft-xl border border-brand-gray/10 z-20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Activity size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-charcoal uppercase tracking-widest">Life Care</p>
                  <p className="text-xs text-brand-gray font-medium">Monitoring Precision</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { Shield, MessageCircle, Phone, Activity, HeartPulse, Dna, TestTube } from 'lucide-react';
import { clinicData } from '../../data/clinic';
import { buildWhatsAppUrl } from '../../lib/utils';

export function HeroSection() {
  const whatsappMessage = "Hi Abhaya Medicare, I want to book an appointment.";
  const whatsappUrl = buildWhatsAppUrl(clinicData.contact.whatsapp, whatsappMessage);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 overflow-hidden bg-brand-pale">
      {/* Vibrant Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-pale via-brand-pale to-[#cbd5e1]/40" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-brand-orange/15 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Floating Icons Background */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden md:block">
        <FloatingIcon Icon={Activity} size={64} className="top-[20%] left-[10%] text-brand-blue/40" delay={0} />
        <FloatingIcon Icon={HeartPulse} size={80} className="top-[60%] left-[15%] text-brand-orange/40" delay={1.5} />
        <FloatingIcon Icon={Dna} size={96} className="top-[30%] right-[12%] text-brand-teal/40" delay={0.5} />
        <FloatingIcon Icon={TestTube} size={72} className="top-[70%] right-[18%] text-brand-blue/40" delay={2} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <Badge variant="outline" className="shadow-clay bg-brand-pale border-0 text-brand-blue gap-2 px-4 py-2 rounded-full font-bold text-sm">
              <Shield size={16} className="text-brand-orange" />
              NABL Accredited Diagnostics
            </Badge>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-charcoal leading-[1.1] mb-8 tracking-tight"
          >
            Diagnostics <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">Redefined</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-brand-charcoal/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            {clinicData.tagline}. State-of-the-art equipment, expert doctors, and accurate results delivered on time.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto group gap-2 rounded-2xl shadow-clay-btn hover:shadow-clay-btn-active transition-all bg-brand-pale text-brand-charcoal hover:bg-brand-pale border-0 font-bold px-8 py-6 text-lg">
                <MessageCircle size={22} className="text-green-500 group-hover:scale-110 transition-transform" />
                Book Appointment
              </Button>
            </a>
            <a href={`tel:${clinicData.contact.phone}`}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto group gap-2 rounded-2xl shadow-clay-btn hover:shadow-clay-btn-active transition-all bg-brand-pale text-brand-charcoal hover:bg-brand-pale border-0 font-bold px-8 py-6 text-lg">
                <Phone size={22} className="text-brand-blue group-hover:scale-110 transition-transform" />
                Call Now
              </Button>
            </a>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="mt-16 inline-flex items-center gap-4 px-6 py-3 rounded-3xl shadow-clay bg-brand-pale"
          >
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-pale bg-white flex items-center justify-center shadow-sm">
                  <UserIcon />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-brand-charcoal font-bold text-lg leading-tight">{clinicData.stats.patientsServed.toLocaleString()}+</p>
              <p className="text-xs text-brand-gray font-medium uppercase tracking-wider">Patients Served</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingIcon({ Icon, size, className, delay }: { Icon: any, size: number, className: string, delay: number }) {
  return (
    <motion.div
      animate={{ 
        y: [0, -30, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ 
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      className={`absolute ${className} drop-shadow-2xl`}
    >
      <Icon size={size} strokeWidth={1.5} />
    </motion.div>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}

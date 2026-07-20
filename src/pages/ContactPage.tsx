import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { seoData } from '../data/seo';
import { Breadcrumb } from '../components/molecules/Breadcrumb';
import { ContactForm } from '../components/organisms/ContactForm';
import { ContactInfo } from '../components/molecules/ContactInfo';
import { MapSection } from '../components/organisms/MapSection';
import { clinicData } from '../data/clinic';
import { Mail, Phone as PhoneIcon, MapPin as MapPinIcon, MessageCircle } from 'lucide-react';

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
      className={`absolute ${className} drop-shadow-2xl opacity-60`}
    >
      <Icon size={size} strokeWidth={1.5} />
    </motion.div>
  );
}

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>{seoData.contact.title}</title>
        <meta name="description" content={seoData.contact.description} />
        <meta name="keywords" content={seoData.contact.keywords} />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-pale relative overflow-hidden">
        {/* Vibrant Gradient Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-pale via-brand-pale to-[#cbd5e1]/40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        {/* Floating Icons */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden md:block">
          <FloatingIcon Icon={Mail} size={64} className="top-[20%] left-[10%] text-brand-blue" delay={0} />
          <FloatingIcon Icon={PhoneIcon} size={80} className="top-[60%] right-[15%] text-brand-orange" delay={1.5} />
          <FloatingIcon Icon={MapPinIcon} size={72} className="top-[30%] right-[25%] text-brand-teal" delay={0.5} />
          <FloatingIcon Icon={MessageCircle} size={96} className="top-[70%] left-[20%] text-brand-blue" delay={2} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <Breadcrumb 
            items={[{ label: "Contact Us" }]} 
            className="mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-charcoal leading-[1.1] mb-6 tracking-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">Touch</span>
            </h1>
            <p className="text-xl text-brand-charcoal/80 leading-relaxed font-medium">
              We're here to help with all your diagnostic needs. Reach out for appointments, home sample collections, or any queries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-brand-pale relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Send us a Message</h2>
                  <p className="text-brand-gray">Fill out the form below and we'll get back to you via WhatsApp.</p>
                </div>
                <ContactForm />
              </motion.div>
            </div>

            {/* Right: Contact Info */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-brand-pale p-8 rounded-3xl shadow-clay-card border-0 h-full"
              >
                <h2 className="text-2xl font-bold text-brand-charcoal mb-8">Contact Information</h2>
                <ContactInfo />
                
                <hr className="my-8 border-brand-gray/10" />
                
                <h3 className="font-bold text-brand-charcoal mb-4">Working Hours</h3>
                <ul className="space-y-3">
                  {clinicData.workingHours.map((wh, idx) => (
                    <li key={idx} className="flex justify-between items-center text-sm">
                      <span className="text-brand-gray">{wh.day}</span>
                      <span className="font-semibold text-brand-charcoal bg-brand-pale px-3 py-1 rounded-full">{wh.hours}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <MapSection />
      </section>
    </>
  );
}

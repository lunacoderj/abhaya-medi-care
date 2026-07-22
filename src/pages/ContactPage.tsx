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

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>{seoData.contact.title}</title>
        <meta name="description" content={seoData.contact.description} />
        <meta name="keywords" content={seoData.contact.keywords} />
      </Helmet>

      {/* Premium Hero */}
      <section className="relative w-full pt-32 pb-24 bg-brand-charcoal overflow-hidden flex items-center min-h-[50vh]">
        {/* Background Image with Overlays */}
        <div className="absolute inset-0 z-0">
          {/* Using a highly relevant hospital interior/reception image we generated */}
          <img src="/services/category_9_culture_1784702879845.png" alt="Contact Us" className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-pale via-transparent to-transparent"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-brand-gold mb-6 shadow-glow-gold backdrop-blur-md border border-white/20">
              <MessageCircle size={32} />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
              We're Here for <span className="text-brand-gold italic">You</span>
            </h1>
            
            <div className="w-20 h-1.5 bg-brand-gold rounded-full mb-8 shadow-glow-gold"></div>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light text-balance">
              Reach out for appointments, home sample collections, or any diagnostic queries. Experience premium healthcare with Abhaya Medi Care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-brand-light relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 relative">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 md:p-12 rounded-[2rem] shadow-clay-card border-t border-brand-teal/10 h-full"
              >
                <div className="mb-10">
                  <h2 className="text-3xl font-extrabold text-brand-charcoal mb-3">Send us a Message</h2>
                  <p className="text-brand-gray/90 font-medium">Fill out the form below and we'll get back to you via WhatsApp.</p>
                </div>
                <ContactForm />
              </motion.div>
            </div>

            {/* Right: Contact Info */}
            <div className="lg:col-span-5 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-brand-blue p-8 md:p-12 rounded-[2rem] shadow-clay-card relative overflow-hidden h-full text-white"
              >
                {/* Luxury decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-teal/20 rounded-tr-full pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-3xl font-extrabold mb-8 text-white">Contact Info</h2>
                  <div className="[&_h4]:text-white/80 [&_p]:text-white [&_a]:text-white [&_svg]:text-brand-gold [&_div.bg-brand-pale]:bg-white/5 [&_div.text-brand-charcoal]:text-white">
                    <ContactInfo />
                  </div>
                  
                  <hr className="my-10 border-white/10" />
                  
                  <h3 className="font-bold text-brand-gold mb-6 text-lg">Working Hours</h3>
                  <ul className="space-y-4">
                    {clinicData.workingHours.map((wh, idx) => (
                      <li key={idx} className="flex justify-between items-center text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0">
                        <span className="text-white/80 font-medium">{wh.day}</span>
                        <span className="font-bold text-white bg-white/5 px-4 py-1.5 rounded-full">{wh.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-charcoal mb-4">Find Us Easily</h2>
            <p className="text-brand-gray/90">We are centrally located with ample parking and easy access. Follow the map below for directions to our diagnostic center.</p>
          </div>
          <div className="h-[500px] rounded-[2rem] overflow-hidden shadow-clay-light border-4 border-white">
            <MapSection />
          </div>
        </div>
      </section>
    </>
  );
}

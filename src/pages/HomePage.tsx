import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { seoData } from '../data/seo';
import { HeroSection } from '../components/organisms/HeroSection';
import { StatsSection } from '../components/organisms/StatsSection';
import { InteractiveSymptomChecker } from '../components/organisms/InteractiveSymptomChecker';
import { ServicesGrid } from '../components/organisms/ServicesGrid';
import { EquipmentGrid } from '../components/organisms/EquipmentGrid';
import { GalleryBento } from '../components/organisms/GalleryBento';
import { ReviewsCarousel } from '../components/organisms/ReviewsCarousel';
import { Button } from '../components/atoms/Button';
import { clinicData } from '../data/clinic';
import { buildWhatsAppUrl } from '../lib/utils';
import { motion } from 'framer-motion';

export function HomePage() {
  const whatsappUrl = buildWhatsAppUrl(clinicData.contact.whatsapp, "Hi, I'm interested in booking a test.");

  return (
    <>
      <Helmet>
        <title>{seoData.home.title}</title>
        <meta name="description" content={seoData.home.description} />
        <meta name="keywords" content={seoData.home.keywords} />
      </Helmet>

      <HeroSection />
      <StatsSection />
      
      {/* Interactive Symptom Mapper */}
      <InteractiveSymptomChecker />

      {/* About Preview */}
      <section className="py-32 bg-brand-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-square md:aspect-auto md:h-[550px] flex items-center justify-center"
            >
              <div className="relative z-10 w-full h-full max-w-[90%] max-h-[90%]">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-soft-xl relative group border border-black/5">
                  <img 
                    src="/hero.png" 
                    alt="Abhaya Medicare Facility" 
                    className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-1000"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light border border-brand-gray/10 text-brand-teal font-bold tracking-widest mb-6 uppercase text-sm">
                Who We Are
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal mb-6 tracking-tight">
                12 Years of Excellence in Diagnostic Care
              </h2>
              <p className="text-xl text-brand-charcoal/70 leading-relaxed font-medium mb-8">
                {clinicData.description} We are committed to providing the highest quality diagnostic services with a patient-first approach. Our NABL accredited laboratories ensure that every report is precise and reliable.
              </p>
              <Link to="/about">
                <Button size="lg" variant="outline" className="group gap-3 rounded-2xl shadow-soft">
                  Learn More About Us
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-brand-teal font-medium tracking-widest mb-3 uppercase text-xs">Our Services</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal">
                Comprehensive Diagnostic Solutions
              </h2>
            </div>
            <Link to="/services">
              <Button variant="outline" className="group gap-2 whitespace-nowrap">
                View All Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <ServicesGrid limit={6} />
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-32 bg-brand-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-brand-teal font-medium tracking-widest mb-3 uppercase text-xs">Advanced Technology</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-6">
              State-of-the-Art Equipment
            </h2>
            <p className="text-brand-gray text-lg">
              We invest in the latest medical technology to ensure the highest accuracy and patient comfort.
            </p>
          </div>
          <EquipmentGrid preview />
          <div className="mt-12 text-center">
            <Link to="/equipment">
              <Button size="lg" className="group gap-2 shadow-lg">
                See All Equipment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-brand-teal font-medium tracking-widest mb-3 uppercase text-xs">Our Facility</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal">
              Take a Look Inside
            </h2>
          </div>
          <GalleryBento />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 bg-brand-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-brand-teal font-medium tracking-widest mb-3 uppercase text-xs">Testimonials</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal">
              What Our Patients Say
            </h2>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand-blue relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Ready for Your Diagnostic Journey?
            </h2>
            <p className="text-xl text-white/80 mb-12 font-light max-w-2xl text-balance">
              Schedule your appointment today and get your results within 24 hours. Experience healthcare designed around you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-white text-brand-blue hover:bg-brand-light shadow-xl border-none">
                  Book Appointment
                </Button>
              </a>
              <a href={`tel:${clinicData.contact.phone}`} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10">
                  Call Us Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

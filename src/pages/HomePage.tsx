import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { seoData } from '../data/seo';
import { HeroSection } from '../components/organisms/HeroSection';
import { StatsSection } from '../components/organisms/StatsSection';
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

      {/* About Preview */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-brand-teal/20 blur-[80px] rounded-full mix-blend-multiply" />
              
              <motion.div
                className="relative z-10 w-[85%] h-[85%] bg-brand-pale rounded-[3rem] p-4 shadow-clay-card border-0 transform"
              >
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white bg-white shadow-inner">
                  <img 
                    src="/hero.png" 
                    alt="Abhaya Medicare Professional Team" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-brand-teal font-semibold tracking-wider mb-2 uppercase text-sm">Who We Are</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
                12 Years of Excellence in Diagnostic Care
              </h2>
              <p className="text-brand-gray leading-relaxed mb-6">
                {clinicData.description} We are committed to providing the highest quality diagnostic services with a patient-first approach. Our NABL accredited laboratories ensure that every report is precise and reliable.
              </p>
              <Link to="/about">
                <Button variant="outline" className="group gap-2">
                  Learn More About Us
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-brand-teal font-semibold tracking-wider mb-2 uppercase text-sm">Our Services</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal">
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
          <ServicesGrid preview />
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-20 bg-brand-pale">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-brand-teal font-semibold tracking-wider mb-2 uppercase text-sm">Advanced Technology</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h4 className="text-brand-teal font-semibold tracking-wider mb-2 uppercase text-sm">Our Facility</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal">
              Take a Look Inside
            </h2>
          </div>
          <GalleryBento />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-brand-light overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h4 className="text-brand-teal font-semibold tracking-wider mb-2 uppercase text-sm">Testimonials</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal">
              What Our Patients Say
            </h2>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto glass p-10 md:p-14 rounded-3xl border-white/10 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Your Diagnostic Journey?
            </h2>
            <p className="text-lg text-gray-200 mb-10">
              Schedule your appointment today and get your results within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-white text-brand-blue hover:bg-brand-light shadow-xl">
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

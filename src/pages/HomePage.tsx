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
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-square md:aspect-auto md:h-[550px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-brand-teal/10 blur-[80px] rounded-full mix-blend-multiply" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-teal/20 rounded-full animate-[spin_20s_linear_infinite] border-dashed" />
              
              <motion.div className="relative z-10 w-full h-full max-w-[90%] max-h-[90%]">
                <div className="w-full h-full rounded-[40px] overflow-hidden border-8 border-white bg-white shadow-float relative group [mask-image:url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill=%22%23000%22 d=%22M45.7,-76.4C58.9,-69.3,69.2,-55.5,76.5,-41.1C83.8,-26.6,88.1,-11.5,86.2,3.1C84.3,17.7,76.1,31.7,66.3,43.2C56.4,54.7,44.9,63.7,31.4,70.9C17.9,78.2,2.4,83.7,-12.3,81.9C-27,80.2,-41,71.2,-53.4,60.2C-65.7,49.2,-76.5,36.2,-81.9,21.1C-87.3,6,-87.3,-11.2,-81.3,-26.1C-75.3,-41.1,-63.3,-53.9,-50,-61.2C-36.6,-68.5,-21.8,-70.3,-5.7,-71.4C10.5,-72.5,21,-73,32.5,-83.5C44.1,-94.1,45.7,-76.4,45.7,-76.4Z%22 transform=%22translate(100 100)%22 /></svg>')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]">
                  <img 
                    src="/hero.png" 
                    alt="Abhaya Medicare Facility" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
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

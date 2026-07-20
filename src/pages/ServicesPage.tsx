import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoData } from '../data/seo';
import { Breadcrumb } from '../components/molecules/Breadcrumb';
import { ServicesGrid } from '../components/organisms/ServicesGrid';
import { clinicData } from '../data/clinic';
import { motion } from 'framer-motion';

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>{seoData.services.title}</title>
        <meta name="description" content={seoData.services.description} />
        <meta name="keywords" content={seoData.services.keywords} />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-pale relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb 
            items={[{ label: "Services" }]} 
            className="mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
              Our Comprehensive Services
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              {clinicData.stats.testsAvailable.toLocaleString()}+ diagnostic tests covering all health areas, performed with precision and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6">
          <ServicesGrid />
        </div>
      </section>
    </>
  );
}

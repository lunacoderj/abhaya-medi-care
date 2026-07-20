import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoData } from '../data/seo';
import { Breadcrumb } from '../components/molecules/Breadcrumb';
import { ServicesGrid } from '../components/organisms/ServicesGrid';
import { clinicData } from '../data/clinic';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesPage() {
  const featuredTests = servicesData.flatMap(service => 
    service.tests
      .filter(test => test.image)
      .map(test => ({ ...test, serviceId: service.id }))
  );

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

      {/* Featured Tests */}
      {featuredTests.length > 0 && (
        <section className="py-16 bg-brand-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-brand-charcoal mb-2">Featured Diagnostic Tests</h2>
              <p className="text-brand-gray">Highly accurate, detailed reporting for essential health markers.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTests.map((test, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-clay-light hover:-translate-y-2 transition-transform duration-300 flex flex-col group border border-brand-gray/5">
                  <div className="h-48 w-full bg-brand-pale p-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-teal/5 group-hover:bg-brand-teal/10 transition-colors" />
                    <img 
                      src={test.image} 
                      alt={test.name}
                      className="h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-brand-charcoal text-lg mb-2">{test.name}</h3>
                    <p className="text-sm text-brand-gray line-clamp-2 mb-4 flex-1">
                      {test.description}
                    </p>
                    <Link 
                      to={`/services/${test.serviceId}`}
                      className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-teal transition-colors"
                    >
                      View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="py-16 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
             <h2 className="text-3xl font-bold text-brand-charcoal mb-2">All Service Categories</h2>
             <p className="text-brand-gray">Browse our comprehensive list of diagnostic departments.</p>
          </div>
          <ServicesGrid />
        </div>
      </section>
    </>
  );
}

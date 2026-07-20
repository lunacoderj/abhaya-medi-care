import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import { servicesData } from '../data/services';
import { buildWhatsAppUrl } from '../lib/utils';
import { clinicData } from '../data/clinic';

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 bg-brand-pale/30">
        <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Service not found</h2>
        <Button onClick={() => navigate('/services')} variant="outline">
          Back to Services
        </Button>
      </div>
    );
  }

  const whatsappMessage = `Hi, I would like to book tests under the ${service.name} category.`;
  const whatsappUrl = buildWhatsAppUrl(clinicData.contact.whatsapp, whatsappMessage);

  return (
    <div className="min-h-screen bg-brand-pale/30 pt-24 pb-16">
      <Helmet>
        <title>{service.name} - Abhaya Medi Care</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/services" 
          className="inline-flex items-center text-brand-blue hover:text-brand-teal transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to All Services
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl border border-brand-gray/10 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-brand-blue p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Icon name={service.iconName} size={160} />
            </div>
            
            <div className="relative z-10 flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Icon name={service.iconName} size={32} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">{service.name}</h1>
            </div>
            <p className="text-white/80 text-lg max-w-2xl relative z-10">
              {service.description}
            </p>
          </div>

          <div className="p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column - Tests List */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-brand-charcoal mb-6 border-b border-brand-gray/10 pb-4">
                    Included Tests
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.tests.map((test, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start p-4 rounded-lg bg-brand-pale/50 border border-brand-teal/20"
                      >
                        <CheckCircle2 size={20} className="text-brand-teal mt-0.5 mr-3 shrink-0" />
                        <span className="text-brand-charcoal font-medium">{test.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-charcoal mb-4 border-b border-brand-gray/10 pb-4">
                    Testing Process & Details
                  </h2>
                  <p className="text-brand-gray leading-relaxed bg-white p-6 rounded-xl border border-brand-gray/10 shadow-sm">
                    {service.process}
                  </p>
                </div>
              </div>

              {/* Right Column - Call to action */}
              <div className="lg:col-span-1">
                <div className="bg-brand-pale/50 p-6 rounded-xl border border-brand-blue/10 sticky top-28">
                  <h3 className="text-xl font-bold text-brand-charcoal mb-4">Book Your Test</h3>
                  <p className="text-brand-gray text-sm mb-6">
                    Ready to proceed? Send us a message on WhatsApp and we will schedule your appointment immediately.
                  </p>
                  
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 mb-4 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
                  >
                    <span>Book via WhatsApp</span>
                  </a>
                  
                  <div className="text-center text-xs text-brand-gray">
                    Or call us directly at <br/>
                    <a href={`tel:${clinicData.contact.phone}`} className="font-bold text-brand-blue hover:underline mt-1 inline-block">
                      {clinicData.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

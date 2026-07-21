import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { equipmentData } from '../data/equipment';
import { Breadcrumb } from '../components/molecules/Breadcrumb';
import { Button } from '../components/atoms/Button';
import { Badge } from '../components/atoms/Badge';
import { clinicData } from '../data/clinic';
import { buildWhatsAppUrl } from '../lib/utils';
import { motion } from 'framer-motion';

export function EquipmentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const equipment = equipmentData.find(e => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!equipment) {
    return <Navigate to="/equipment" replace />;
  }

  const whatsappMessage = `Hi, I would like to know more about the tests performed using the ${equipment.name}.`;
  const whatsappUrl = buildWhatsAppUrl(clinicData.contact.whatsapp, whatsappMessage);

  return (
    <>
      <Helmet>
        <title>{equipment.name} | Abhaya Medicare Equipment</title>
        <meta name="description" content={equipment.overview} />
      </Helmet>

      {/* Hero Image Section */}
      <section className="relative pt-20 bg-brand-charcoal h-[40vh] min-h-[300px] md:h-[50vh] flex flex-col justify-end">
        <div className="absolute inset-0">
          <img 
            src={equipment.image} 
            alt={equipment.name}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-12">
          <Breadcrumb 
            items={[
              { label: "Equipment", href: "/equipment" },
              { label: equipment.name }
            ]} 
            className="mb-6 [&_a]:text-gray-400 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-gray-500"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 bg-brand-teal text-brand-charcoal hover:bg-brand-teal">
              Diagnostic Equipment
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {equipment.name}
            </h1>
            <p className="text-xl text-gray-300">
              {equipment.purpose}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-brand-light min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column - Details */}
            <div className="lg:col-span-8 space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Overview</h2>
                <p className="text-brand-gray text-lg leading-relaxed">{equipment.overview}</p>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-brand-charcoal mb-6">How It Works</h2>
                <div className="bg-white rounded-2xl border border-brand-gray/10 overflow-hidden shadow-sm p-6">
                  <p className="text-brand-gray text-lg leading-relaxed">{equipment.howItWorks}</p>
                </div>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {equipment.benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-brand-gray/10 shadow-sm flex items-start gap-3 group hover:border-brand-teal/30 transition-colors">
                      <div className="bg-brand-pale text-brand-teal p-1.5 rounded-lg shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="text-brand-charcoal font-medium mt-1">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Common Uses</h2>
                <div className="flex flex-wrap gap-3">
                  {equipment.commonUses.map((use, idx) => (
                    <Link key={idx} to="/services" className="bg-white px-4 py-2.5 rounded-lg border border-brand-gray/10 shadow-sm font-medium text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all flex items-center gap-2 group">
                      {use}
                      <ChevronRight size={16} className="text-brand-gray/50 group-hover:text-white transition-colors" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                
                {/* CTA Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg border border-brand-gray/10 overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-brand-blue to-brand-teal p-6 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    <Badge variant="outline" className="mb-3 bg-white/20 border-white/30 text-white backdrop-blur-sm">Accuracy</Badge>
                    <div className="text-5xl font-bold mb-2 tracking-tight">99.9%</div>
                    <div className="text-white/80 font-medium">Diagnostic Precision</div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="font-semibold text-brand-charcoal text-center mb-4">Book a test using this equipment</h3>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button className="w-full flex items-center justify-center gap-2 text-base h-12 shadow-md">
                        Book via WhatsApp <MessageCircle size={18} />
                      </Button>
                    </a>
                    <a href={`tel:${clinicData.contact.phone}`} className="block w-full">
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2 text-base h-12">
                        <Phone size={18} /> Call Now
                      </Button>
                    </a>
                  </div>
                </motion.div>

                {/* Related Equipment */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-sm border border-brand-gray/10 p-6"
                >
                  <h3 className="font-bold text-brand-charcoal mb-4">Other Equipment</h3>
                  <div className="space-y-4">
                    {equipmentData
                      .filter(e => e.id !== equipment.id)
                      .slice(0, 3)
                      .map((item) => (
                        <Link key={item.id} to={`/equipment/${item.id}`} className="group flex gap-4 items-center">
                          <div className="w-16 h-16 rounded-lg bg-brand-light overflow-hidden shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-brand-charcoal group-hover:text-brand-blue transition-colors line-clamp-1">{item.name}</h4>
                            <p className="text-xs text-brand-gray">Diagnostic Equipment</p>
                          </div>
                        </Link>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

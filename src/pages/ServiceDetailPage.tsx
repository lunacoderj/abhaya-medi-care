import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Coffee, CheckCircle2, ChevronDown, ChevronUp, FileText, Activity, Droplet, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import { servicesData } from '../data/services';
import { buildWhatsAppUrl } from '../lib/utils';
import { clinicData } from '../data/clinic';
import { cn } from '../lib/utils';

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [expandedTest, setExpandedTest] = useState<string | null>(null);
  
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 bg-brand-pale">
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
    <div className="min-h-screen bg-brand-pale pb-20 relative">
      <Helmet>
        <title>{service.name} - Abhaya Medi Care</title>
        <meta name="description" content={service.description} />
      </Helmet>

      {/* Hero Section (Full Width, Majestic) */}
      <div className="relative w-full min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden bg-brand-charcoal">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image || "/equipments/Screenshot 2026-07-20 230235.png"} 
            alt={service.name}
            className="w-full h-full object-cover opacity-60" 
          />
          {/* Gradients to blend it elegantly into the content below */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/30 via-transparent to-brand-pale"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <Link 
            to="/services" 
            className="inline-flex items-center text-brand-gold hover:text-white transition-colors mb-12 font-medium bg-white/10 px-5 py-2.5 rounded-full shadow-lg backdrop-blur-md border border-white/20"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to All Services
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Huge Text & Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 max-w-3xl"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
                {service.name}
              </h1>
              
              <div className="w-24 h-1.5 bg-brand-gold rounded-full mb-8 shadow-glow-gold"></div>
              
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light mb-12 text-balance">
                {service.detailedOverview}
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-soft-xl">
                  <Clock className="text-brand-gold" size={28} />
                  <div>
                    <p className="text-xs text-white/70 uppercase tracking-wider font-bold mb-0.5">Turnaround</p>
                    <p className="text-white font-semibold text-lg">{service.turnaroundTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-soft-xl">
                  <Activity className="text-brand-teal" size={28} />
                  <div>
                    <p className="text-xs text-white/70 uppercase tracking-wider font-bold mb-0.5">Tests Included</p>
                    <p className="text-white font-semibold text-lg">{service.tests?.length || 0} Parameters</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Floating Icon with Hospital Vibe */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex w-72 h-72 shrink-0 bg-white/10 backdrop-blur-xl rounded-[3rem] shadow-2xl items-center justify-center border border-white/20 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 rounded-[3rem]"></div>
              
              <div className="text-brand-gold drop-shadow-2xl relative z-10 animate-pulse-subtle">
                <Icon name={service.iconName} size={110} />
              </div>
              
              {/* Pulse Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[350px] h-[350px] border border-brand-teal/30 rounded-full animate-[ping_4s_ease-out_infinite]" />
                <div className="absolute w-[450px] h-[450px] border border-brand-blue/20 rounded-full animate-[ping_4s_ease-out_infinite]" style={{ animationDelay: '1s' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content below hero */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8">

        {/* Clinical Insight Banner */}
        {service.clinicalInsight && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-10 bg-gradient-to-r from-brand-teal/20 to-brand-blue/10 border-l-4 border-brand-teal rounded-xl p-6 shadow-sm flex gap-4 items-start"
          >
            <div className="bg-white p-2 rounded-lg text-brand-teal shrink-0 shadow-sm">
              <Activity size={24} />
            </div>
            <div>
              <h4 className="font-bold text-brand-charcoal text-lg mb-1 flex items-center gap-2">
                Clinical Insight
                <span className="text-xs bg-brand-teal text-white px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">New</span>
              </h4>
              <p className="text-brand-gray/90 leading-relaxed font-medium">
                {service.clinicalInsight}
              </p>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Details & Tests */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Info Badges */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-xl shadow-soft border border-black/5 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-500">
                <div className="bg-brand-light text-brand-gold p-3 rounded-lg shrink-0">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-brand-charcoal mb-1">Preparation</h4>
                  <p className="text-sm text-brand-gray leading-relaxed font-light">{service.preparation}</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft border border-black/5 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-500">
                <div className="bg-brand-light text-brand-blue p-3 rounded-lg shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-brand-charcoal mb-1">Turnaround Time</h4>
                  <p className="text-sm text-brand-gray leading-relaxed font-light">{service.turnaroundTime}</p>
                </div>
              </div>
            </motion.div>


            {/* Testing Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-brand-blue text-white rounded-2xl p-8 sm:p-10 shadow-soft-xl border border-black/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Activity size={120} />
              </div>
              <h2 className="text-2xl font-bold mb-4 relative z-10">Testing Process</h2>
              <p className="text-white/90 leading-relaxed text-lg relative z-10">
                {service.process}
              </p>
            </motion.div>
          </div>

          {/* Right Column - Call to action (Sticky) */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-soft-xl border border-black/5 sticky top-28"
            >
              <div className="w-16 h-16 bg-brand-light text-brand-gold rounded-xl flex items-center justify-center mb-6">
                <Clock size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-serif text-brand-charcoal mb-4">Book Your Test Today</h3>
              <p className="text-brand-gray mb-8 leading-relaxed font-light">
                Skip the waiting room. Book this test via WhatsApp and secure your preferred time slot instantly.
              </p>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 mb-6 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all shadow-clay-btn hover:-translate-y-1"
              >
                <span>Book on WhatsApp</span>
              </a>
              
              <div className="text-center p-4 bg-brand-pale rounded-xl border border-brand-gray/5">
                <p className="text-sm text-brand-gray mb-1">Or call us directly at</p>
                <a href={`tel:${clinicData.contact.phone}`} className="font-bold text-xl text-brand-blue hover:text-brand-teal transition-colors">
                  {clinicData.contact.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Included Tests List as Unique Cards - Full Width Below */}
      {service.tests && service.tests.length > 0 && (
        <div className="container mx-auto px-4 md:px-6 my-16 relative z-10">
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-serif text-brand-charcoal flex items-center gap-3">
                <div className="bg-brand-light text-brand-teal p-3 rounded-xl">
                  <FileText size={24} />
                </div>
                Included Tests ({(service.tests || []).length})
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {(service.tests || []).map((test, idx) => {
                const RandomIcon = ["Microscope", "Activity", "HeartPulse", "TestTube", "Droplets"][idx % 5] as any;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="bg-white rounded-2xl shadow-soft hover:shadow-soft-xl border border-black/5 overflow-hidden transition-all duration-500 group"
                  >
                    <div className="p-1">
                      <div className="rounded-xl overflow-hidden bg-transparent">
                        {/* Card Header */}
                        <div className="p-8 pb-6 border-b border-brand-gray/5 flex items-start justify-between gap-4">
                          <div className="flex items-center gap-5">
                            <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300 shadow-inner">
                              <Icon name={RandomIcon} size={32} />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-brand-charcoal mb-1">
                                {test.name}
                              </h3>
                              <p className="text-base font-medium text-brand-teal">
                                Diagnostic Parameter
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* We use md:grid-cols-[1fr_2fr] so image takes 1 part and text takes 2 parts, making it look much better full width */}
                        <div className="p-8 grid md:grid-cols-[1fr_2fr] gap-10 items-start">
                          {/* Image / Fallback Container */}
                          <div className={cn(
                            "bg-brand-light rounded-2xl p-6 shadow-sm border border-brand-gray/10 h-full flex items-center justify-center min-h-[200px] relative overflow-hidden group-hover:border-brand-teal/20 transition-colors",
                            idx % 2 !== 0 ? "md:order-2" : "md:order-1"
                          )}>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-blue/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                            
                            {test.image ? (
                              <img 
                                src={test.image} 
                                alt={test.name} 
                                className="w-full h-auto object-cover rounded-xl shadow-sm max-h-56 relative z-10"
                              />
                            ) : (
                              <div className="text-center text-brand-gray/40 relative z-10">
                                <Icon name={RandomIcon} size={80} className="mx-auto mb-4 opacity-20 group-hover:opacity-40 transition-opacity group-hover:text-brand-teal" />
                                <p className="text-base font-medium">Standard Analysis</p>
                              </div>
                            )}
                          </div>
                          
                          {/* Rich Details */}
                          <div className={cn(
                            "space-y-6",
                            idx % 2 !== 0 ? "md:order-1" : "md:order-2"
                          )}>
                            <div>
                              <h5 className="text-brand-teal font-bold uppercase tracking-widest text-xs mb-2 opacity-80">Description</h5>
                              <p className="text-brand-charcoal/80 leading-relaxed text-base">
                                {test.description || "Detailed diagnostic evaluation for this specific parameter. Integral for clinical assessment."}
                              </p>
                            </div>
                            
                            {test.purpose && (
                              <div className="pb-2">
                                <h5 className="text-brand-teal font-bold uppercase tracking-widest text-xs mb-3 opacity-80">Clinical Purpose</h5>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                  {test.purpose.map((p, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base text-brand-charcoal/80 bg-brand-pale/50 p-3 rounded-lg border border-brand-gray/5">
                                      <span className="w-2 h-2 rounded-full bg-brand-blue mt-1.5 shrink-0 shadow-sm" />
                                      <span className="leading-snug">{p}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {test.recommendedFor && (
                              <div>
                                <h5 className="text-brand-teal font-bold uppercase tracking-widest text-xs mb-3 opacity-80">Recommended For</h5>
                                <div className="flex flex-wrap gap-2">
                                  {test.recommendedFor.map((r, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-brand-blue/5 text-brand-blue text-sm rounded-full font-medium border border-brand-blue/10">
                                      {r}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="grid grid-cols-2 gap-4 pt-4">
                              {test.sampleRequired && (
                                <div className="bg-brand-pale p-4 rounded-xl border border-brand-gray/5">
                                  <h5 className="text-brand-charcoal/50 font-bold uppercase tracking-widest text-xs mb-2">Sample Type</h5>
                                  <p className="text-base font-bold text-brand-charcoal flex items-center gap-2">
                                    <Droplet size={18} className="text-red-500" />
                                    {test.sampleRequired}
                                  </p>
                                </div>
                              )}
                              {test.reportTime && (
                                <div className="bg-brand-pale p-4 rounded-xl border border-brand-gray/5">
                                  <h5 className="text-brand-charcoal/50 font-bold uppercase tracking-widest text-xs mb-2">Result Ready</h5>
                                  <p className="text-base font-bold text-brand-charcoal flex items-center gap-2">
                                    <Clock size={18} className="text-brand-teal" />
                                    {test.reportTime}
                                  </p>
                                </div>
                              )}
                              {test.preparation && (
                                <div className="bg-brand-pale p-4 rounded-xl border border-brand-gray/5 col-span-2">
                                  <h5 className="text-brand-charcoal/50 font-bold uppercase tracking-widest text-xs mb-2">Preparation Instructions</h5>
                                  <p className="text-base font-bold text-brand-charcoal flex items-center gap-2">
                                    <Coffee size={18} className="text-amber-600 shrink-0" />
                                    {test.preparation}
                                  </p>
                                </div>
                              )}
                            </div>

                            {/* Book this specific test */}
                            <div className="pt-2">
                              <a 
                                href={buildWhatsAppUrl(clinicData.contact.whatsapp, `Hi Abhaya Medicare, I would like to book an appointment for the ${test.name} test.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-6 rounded-xl font-bold text-sm transition-all shadow-md hover:-translate-y-0.5 w-full sm:w-auto"
                              >
                                <MessageCircle size={18} />
                                <span>Book {test.name}</span>
                              </a>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Floating Booking Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-brand-gray/10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50">
        <div className="flex items-center gap-4 max-w-5xl mx-auto">
          <div className="flex-1">
            <p className="text-sm font-bold text-brand-charcoal truncate">{service.name}</p>
            <p className="text-xs text-brand-gray">Book instantly</p>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-bold text-sm transition-all shadow-md shrink-0"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

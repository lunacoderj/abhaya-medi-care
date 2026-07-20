import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Coffee, CheckCircle2, ChevronDown, ChevronUp, FileText, Activity } from 'lucide-react';
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
    <div className="min-h-screen bg-brand-pale pt-24 pb-20 overflow-hidden relative">
      <Helmet>
        <title>{service.name} - Abhaya Medi Care</title>
        <meta name="description" content={service.description} />
      </Helmet>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link 
          to="/services" 
          className="inline-flex items-center text-brand-blue hover:text-brand-teal transition-colors mb-8 font-medium bg-white/50 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm border border-white"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to All Services
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white rounded-[2rem] shadow-clay-card border-0 overflow-hidden mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-teal to-brand-pale opacity-10"></div>
          
          <div className="p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center gap-10 relative z-10">
            {/* 3D Floating Icon Container */}
            <motion.div 
              animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-gradient-to-br from-brand-blue to-brand-teal rounded-[2.5rem] shadow-2xl flex items-center justify-center transform -rotate-3"
            >
              <div className="text-white drop-shadow-md">
                <Icon name={service.iconName} size={70} />
              </div>
            </motion.div>

            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-charcoal mb-4 tracking-tight">
                {service.name}
              </h1>
              <p className="text-xl text-brand-gray/90 leading-relaxed font-medium">
                {service.detailedOverview}
              </p>
            </div>
          </div>
        </motion.div>

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
              <div className="bg-white p-6 rounded-2xl shadow-clay-light border-0 flex items-start gap-4 hover:-translate-y-1 transition-transform">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-xl shrink-0">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal mb-1">Preparation</h4>
                  <p className="text-sm text-brand-gray leading-relaxed">{service.preparation}</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-clay-light border-0 flex items-start gap-4 hover:-translate-y-1 transition-transform">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal mb-1">Turnaround Time</h4>
                  <p className="text-sm text-brand-gray leading-relaxed">{service.turnaroundTime}</p>
                </div>
              </div>
            </motion.div>

            {/* Included Tests Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-clay-card border-0"
            >
              <div className="flex items-center gap-3 mb-8 border-b border-brand-gray/10 pb-6">
                <div className="bg-brand-teal/10 text-brand-teal p-2 rounded-lg">
                  <FileText size={24} />
                </div>
                <h2 className="text-2xl font-bold text-brand-charcoal">
                  Included Tests ({service.tests.length})
                </h2>
              </div>
              
              <div className="space-y-3">
                {service.tests.map((test, idx) => {
                  const isExpanded = expandedTest === test.name;
                  return (
                    <div 
                      key={idx} 
                      className={cn(
                        "rounded-2xl border transition-all duration-300 overflow-hidden",
                        isExpanded ? "border-brand-teal bg-brand-pale shadow-md" : "border-brand-gray/10 bg-white hover:border-brand-blue/30 hover:bg-brand-pale/50"
                      )}
                    >
                      <button
                        onClick={() => setExpandedTest(isExpanded ? null : test.name)}
                        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 size={20} className={isExpanded ? "text-brand-teal" : "text-brand-gray/40"} />
                          <span className={cn("font-bold text-lg", isExpanded ? "text-brand-teal" : "text-brand-charcoal")}>
                            {test.name}
                          </span>
                        </div>
                        <div className="text-brand-gray">
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-5 pb-5 pt-1 ml-9 text-brand-gray/90 leading-relaxed">
                              {test.description}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Testing Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-brand-blue text-white rounded-[2rem] p-8 sm:p-10 shadow-clay-card border-0 relative overflow-hidden"
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
              className="bg-white p-8 rounded-[2rem] shadow-clay-card border-0 sticky top-28"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-charcoal mb-3">Book Your Test Today</h3>
              <p className="text-brand-gray mb-8 leading-relaxed">
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
    </div>
  );
}

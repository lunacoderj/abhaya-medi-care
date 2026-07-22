import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Phone, MessageCircle, Settings, Shield, Workflow, ArrowRight, HeartPulse } from 'lucide-react';
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
        <meta name="description" content={equipment.description} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full min-h-[70vh] flex items-center pt-24 pb-12 overflow-hidden bg-brand-charcoal">
        {/* Blurred background using the same image */}
        <img 
          src={equipment.image} 
          alt={`${equipment.name} Background`}
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-3xl scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-brand-charcoal/40"></div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <Breadcrumb 
            items={[
              { label: "Equipment", href: "/equipment" },
              { label: equipment.name }
            ]} 
            className="mb-8 [&_a]:text-brand-gray/80 [&_a:hover]:text-white [&_span]:text-white"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className="bg-brand-teal text-white border-0 px-4 py-1.5">
                  {equipment.category}
                </Badge>
                <Badge variant="outline" className="text-brand-gold border-brand-gold/30 px-4 py-1.5 bg-black/20">
                  {equipment.manufacturer}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 tracking-tight drop-shadow-lg">
                {equipment.name}
              </h1>
              
              <p className="text-xl text-brand-gold font-medium mb-10 tracking-wide max-w-2xl">
                Model: {equipment.model}
              </p>

              <div className="flex flex-wrap gap-6 md:gap-8 border-t border-white/20 pt-8 mt-auto">
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                    <Shield size={24} className="text-brand-teal" />
                  </div>
                  <div>
                    <p className="font-bold tracking-wider uppercase text-sm">High Precision</p>
                    <p className="text-xs text-brand-gray/80">Accurate Diagnostics</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                    <Workflow size={24} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-bold tracking-wider uppercase text-sm">Fast Processing</p>
                    <p className="text-xs text-brand-gray/80">Rapid Results</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Preserved Image + Lifeline Pulse Animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center items-center h-[400px] lg:h-[500px]"
            >
              {/* Pulse Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="absolute w-[300px] h-[300px] bg-brand-red/20 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <div className="absolute w-[400px] h-[400px] bg-brand-red/10 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '0.5s' }} />
                <div className="absolute w-[500px] h-[500px] bg-brand-red/5 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '1s' }} />
              </div>

              {/* Preserved Image floating */}
              <div className="relative w-full h-full max-w-lg z-10 p-6 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 shadow-2xl flex items-center justify-center">
                <img 
                  src={equipment.image} 
                  alt={equipment.name}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Floating HeartPulse Badge attached to image */}
              <div className="absolute -bottom-4 -right-4 lg:-right-8 w-24 h-24 bg-white/95 backdrop-blur-md rounded-full shadow-soft-xl border-4 border-brand-red/10 z-20 flex items-center justify-center animate-bounce" style={{ animationDuration: '4s' }}>
                <HeartPulse 
                  size={40} 
                  strokeWidth={2}
                  className="text-brand-red" 
                  style={{ 
                    animation: 'pulse 1.5s ease-in-out infinite' 
                  }} 
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="flex-1 relative bg-brand-white py-20">
        {/* Background Mesh */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column - Details */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* 1. Overview */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-soft-xl border border-white/20"
              >
                <h2 className="text-3xl font-serif text-brand-charcoal mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center">
                    <Shield size={20} />
                  </span>
                  Overview
                </h2>
                <p className="text-brand-gray text-lg leading-relaxed font-light">{equipment.description}</p>
              </motion.div>

              {/* 2. Capabilities / Tests Performed */}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif text-white mb-6">Usages / Tests Performed</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {equipment.testsPerformed.map((test, idx) => (
                    <div key={idx} className="bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-soft border border-white/10 flex items-start gap-4 hover:-translate-y-1 transition-transform">
                      <div className="bg-brand-light text-brand-teal p-2 rounded-lg shrink-0">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-brand-charcoal font-medium leading-tight mt-1">{test}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 3. Specifications */}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif text-white mb-6">Technical Specifications</h2>
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-soft-xl overflow-hidden">
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-brand-gray/10">
                    {Object.entries(equipment.specs).map(([key, value], idx) => (
                      <div key={idx} className="p-6 flex flex-col justify-center border-b border-brand-gray/10 last:border-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
                        <div className="flex items-center gap-3 mb-2">
                          <Settings size={16} className="text-brand-gray/40" />
                          <h4 className="text-sm font-bold text-brand-gray uppercase tracking-wider">{key}</h4>
                        </div>
                        <p className="text-lg font-semibold text-brand-charcoal">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* 4. Benefits / Points */}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif text-white mb-6">Points / Benefits</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {equipment.benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-white/20 flex gap-4 items-start shadow-soft">
                      <div className="text-brand-gold shrink-0 mt-1">
                        <CheckCircle2 size={20} />
                      </div>
                      <p className="text-brand-charcoal font-medium leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 5. Animated Flowchart (Workflow) */}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-brand-charcoal text-white p-8 rounded-[2rem] shadow-clay-card relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  <Workflow size={150} />
                </div>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Workflow size={20} />
                  </span>
                  Process Workflow
                </h2>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center text-center max-w-[200px]">
                    <div className="w-16 h-16 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-xl font-bold mb-4 shadow-[0_0_20px_rgba(15,76,117,0.4)]">1</div>
                    <h4 className="font-bold text-brand-teal mb-2">Sample Collection</h4>
                    <p className="text-sm text-white/70">Safe and precise extraction.</p>
                  </div>
                  <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-brand-blue to-brand-teal" />
                  
                  {/* Step 2 */}
                  <div className="flex flex-col items-center text-center max-w-[200px]">
                    <div className="w-16 h-16 rounded-full bg-brand-teal/20 border border-brand-teal/40 flex items-center justify-center text-xl font-bold mb-4 shadow-[0_0_20px_rgba(6,167,125,0.4)]">2</div>
                    <h4 className="font-bold text-brand-teal mb-2">Analysis</h4>
                    <p className="text-sm text-white/70">Processed by {equipment.name}.</p>
                  </div>
                  <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-brand-teal to-brand-gold" />
                  
                  {/* Step 3 */}
                  <div className="flex flex-col items-center text-center max-w-[200px]">
                    <div className="w-16 h-16 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-xl font-bold mb-4 shadow-[0_0_20px_rgba(212,175,55,0.4)]">3</div>
                    <h4 className="font-bold text-brand-teal mb-2">Results</h4>
                    <p className="text-sm text-white/70">Fast & accurate reporting.</p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                
                {/* CTA Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-soft-xl border border-black/5 overflow-hidden"
                >
                  <div className="bg-brand-light p-8 text-center text-brand-charcoal border-b border-brand-gray/10">
                    <Badge variant="outline" className="mb-4 text-brand-blue border-brand-blue/30 shadow-sm">{equipment.accuracyRating} Accuracy</Badge>
                    <div className="text-2xl font-serif mb-2 tracking-tight">Need a test involving this equipment?</div>
                  </div>
                  
                  <div className="p-8 space-y-4">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button className="w-full flex items-center justify-center gap-2 text-base h-14 rounded-full shadow-soft bg-brand-teal hover:bg-brand-teal/90 text-white border-0">
                        Inquire via WhatsApp <MessageCircle size={20} />
                      </Button>
                    </a>
                    <a href={`tel:${clinicData.contact.phone}`} className="block w-full">
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2 text-base h-14 rounded-full border-brand-gray/20 text-brand-charcoal">
                        <Phone size={20} /> Call Now
                      </Button>
                    </a>
                  </div>
                </motion.div>

                {/* Related Equipment */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-soft-xl border border-white/20 p-8"
                >
                  <h3 className="font-serif text-xl text-brand-charcoal mb-6 flex items-center justify-between">
                    Other Equipment
                    <Link to="/equipment" className="text-sm text-brand-blue font-sans font-medium hover:underline">View All</Link>
                  </h3>
                  <div className="space-y-4">
                    {equipmentData
                      .filter(e => e.id !== equipment.id)
                      .slice(0, 3)
                      .map((item) => (
                        <Link key={item.id} to={`/equipment/${item.id}`} className="group flex gap-4 items-center p-3 rounded-xl hover:bg-brand-light transition-colors border border-transparent hover:border-brand-gray/10">
                          <div className="w-14 h-14 rounded-lg bg-white overflow-hidden shrink-0 border border-brand-gray/10">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-brand-charcoal group-hover:text-brand-blue transition-colors line-clamp-2">{item.name}</h4>
                            <p className="text-xs text-brand-gray mt-1">{item.category}</p>
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

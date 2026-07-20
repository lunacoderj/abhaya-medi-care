import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { seoData } from '../data/seo';
import { clinicData } from '../data/clinic';
import { aboutContent } from '../data/staticContent';
import { Breadcrumb } from '../components/molecules/Breadcrumb';
import { Card } from '../components/atoms/Card';
import { Icon } from '../components/atoms/Icon';
import { StatsSection } from '../components/organisms/StatsSection';

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{seoData.about.title}</title>
        <meta name="description" content={seoData.about.description} />
        <meta name="keywords" content={seoData.about.keywords} />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-pale relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb 
            items={[{ label: "About Us" }]} 
            className="mb-8"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h4 className="text-brand-teal font-bold tracking-widest mb-4 uppercase text-sm">About {clinicData.shortName}</h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-charcoal mb-6 leading-[1.1] tracking-tight">
                Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">Diagnostic</span> Excellence
              </h1>
              <p className="text-xl text-brand-charcoal/80 leading-relaxed font-medium">
                A journey of 12 years in providing accurate, compassionate diagnostic care. We put patients first.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-brand-orange/20 blur-[100px] rounded-full mix-blend-multiply" />
              
              <motion.div
                className="relative z-10 w-full max-w-[90%] h-[90%] bg-brand-pale rounded-[3rem] p-4 shadow-clay-card border-0 transform"
              >
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white bg-white shadow-inner relative group">
                  <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <img 
                    src="/hero.png" 
                    alt="Abhaya Medicare Team" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card variant="clay" className="h-full group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-brand-blue/10 text-brand-blue p-4 rounded-2xl w-fit mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-charcoal mb-4">Our Mission</h3>
                <p className="text-brand-gray leading-relaxed">{aboutContent.mission}</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card variant="clay" className="h-full group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-brand-teal/10 text-brand-teal p-4 rounded-2xl w-fit mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-charcoal mb-4">Our Vision</h3>
                <p className="text-brand-gray leading-relaxed">{aboutContent.vision}</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal">Our Journey</h2>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-teal before:via-brand-blue before:to-brand-teal">
            {aboutContent.timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-blue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-brand-gray/10 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-brand-charcoal text-lg">{item.title}</h3>
                    <span className="font-bold text-brand-teal">{item.year}</span>
                  </div>
                  <p className="text-sm text-brand-gray">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">Why Choose Abhaya Medicare?</h2>
            <p className="text-brand-gray">We combine medical expertise with advanced technology to deliver the best diagnostic care.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutContent.whyChooseUs.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-brand-pale p-6 rounded-2xl border border-brand-blue/5 hover:border-brand-blue/20 transition-colors group"
              >
                <div className="bg-white text-brand-blue w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Icon name={feature.icon} size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">{feature.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
    </>
  );
}

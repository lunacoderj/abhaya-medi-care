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
import { Button } from '../components/atoms/Button';
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
      <section className="pt-32 pb-20 bg-brand-light relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-teal/5 via-brand-light to-brand-blue/5" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb 
            items={[{ label: "About Us" }]} 
            className="mb-8"
          />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-brand-gray/10 text-brand-teal font-bold tracking-widest mb-6 uppercase text-sm">
                <Target size={16} />
                About {clinicData.shortName}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-charcoal mb-6 leading-[1.1] tracking-tight">
                Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">Diagnostic</span> Excellence
              </h1>
              <p className="text-xl text-brand-charcoal/70 leading-relaxed font-medium mb-8">
                A journey of over a decade in providing accurate, compassionate diagnostic care. We put patients first, blending medical expertise with cutting-edge technology.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#team">
                  <Button size="lg" className="rounded-2xl px-8 shadow-soft">
                    Meet Our Team
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-brand-blue/10 blur-[80px] rounded-full mix-blend-multiply" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-teal/20 rounded-full animate-[spin_20s_linear_infinite] border-dashed" />
              
              <motion.div className="relative z-10 w-full h-full max-w-[90%] max-h-[90%]">
                <div className="w-full h-full rounded-[40px] md:rounded-[60px] overflow-hidden border-8 border-white bg-white shadow-float relative group [mask-image:url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill=%22%23000%22 d=%22M45.7,-76.4C58.9,-69.3,69.2,-55.5,76.5,-41.1C83.8,-26.6,88.1,-11.5,86.2,3.1C84.3,17.7,76.1,31.7,66.3,43.2C56.4,54.7,44.9,63.7,31.4,70.9C17.9,78.2,2.4,83.7,-12.3,81.9C-27,80.2,-41,71.2,-53.4,60.2C-65.7,49.2,-76.5,36.2,-81.9,21.1C-87.3,6,-87.3,-11.2,-81.3,-26.1C-75.3,-41.1,-63.3,-53.9,-50,-61.2C-36.6,-68.5,-21.8,-70.3,-5.7,-71.4C10.5,-72.5,21,-73,32.5,-83.5C44.1,-94.1,45.7,-76.4,45.7,-76.4Z%22 transform=%22translate(100 100)%22 /></svg>')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]">
                  <img 
                    src="/hero.png" 
                    alt="Abhaya Medicare Facility" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values / Bento Grid */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal mb-6 tracking-tight">Our Core Values</h2>
            <p className="text-xl text-brand-charcoal/70 leading-relaxed">We combine medical expertise with advanced technology to deliver the best diagnostic care.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Mission - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-brand-blue to-brand-teal p-8 md:p-10 rounded-3xl text-white shadow-soft relative overflow-hidden group"
            >
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Target size={200} />
              </div>
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 text-lg leading-relaxed">{aboutContent.mission}</p>
              </div>
            </motion.div>

            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-1 lg:col-span-2 rounded-3xl overflow-hidden shadow-soft relative group min-h-[250px]"
            >
              <img src="/hero.png" alt="Facility" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">State-of-the-Art Facility</h3>
              </div>
            </motion.div>

            {/* Vision - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-brand-gray/10 shadow-soft group hover:shadow-float transition-shadow"
            >
              <div className="bg-brand-orange/10 text-brand-orange w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-3xl font-bold text-brand-charcoal mb-4">Our Vision</h3>
              <p className="text-brand-gray text-lg leading-relaxed">{aboutContent.vision}</p>
            </motion.div>

            {/* Small Feature Cards from whyChooseUs */}
            {aboutContent.whyChooseUs.slice(0, 2).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                className="col-span-1 bg-white p-8 rounded-3xl border border-brand-gray/10 shadow-soft hover:shadow-float transition-shadow group"
              >
                <div className="bg-brand-light text-brand-blue w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Icon name={feature.icon} size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">{feature.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight mb-4">Our Journey</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-blue to-brand-teal mx-auto rounded-full" />
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-brand-blue/20 before:via-brand-teal/40 before:to-brand-blue/20 before:rounded-full">
            {aboutContent.timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-brand-blue to-brand-teal shadow-soft shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-500">
                  <div className="w-3 h-3 bg-white rounded-full shadow-inner"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl border border-brand-gray/10 bg-white shadow-soft group-hover:shadow-float group-hover:-translate-y-1 transition-all duration-300 relative">
                  {/* Small pointer triangle for desktop */}
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-brand-gray/10 rotate-45 group-odd:-left-2 group-odd:-rotate-[135deg] group-even:-right-2 group-even:border-l group-even:border-b group-even:border-t-0 group-even:border-r-0" />
                  
                  <div className="flex items-center justify-between mb-4 border-b border-brand-gray/5 pb-4">
                    <h3 className="text-2xl font-bold text-brand-charcoal">{item.title}</h3>
                    <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal px-4 py-1 rounded-full bg-brand-light">{item.year}</span>
                  </div>
                  <p className="text-lg text-brand-charcoal/70 leading-relaxed font-medium">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="team" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal mb-6 tracking-tight">Meet Our Experts</h2>
            <p className="text-xl text-brand-charcoal/70 leading-relaxed">Dedicated professionals committed to delivering precise and reliable diagnostic results.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutContent.team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-[2rem] overflow-hidden bg-brand-light shadow-soft hover:shadow-float transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-brand-teal font-bold tracking-wider uppercase text-sm mb-1">{member.role}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-white/80 text-sm mb-4">{member.qualifications}</p>
                    <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
    </>
  );
}

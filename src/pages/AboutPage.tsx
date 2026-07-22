import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { seoData } from '../data/seo';
import { clinicData } from '../data/clinic';
import { aboutContent } from '../data/staticContent';
import { Breadcrumb } from '../components/molecules/Breadcrumb';
import { Icon } from '../components/atoms/Icon';
import { Button } from '../components/atoms/Button';
import { StatsSection } from '../components/organisms/StatsSection';

gsap.registerPlugin(ScrollTrigger);

export function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline Animation
      if (timelineRef.current) {
        const items = gsap.utils.toArray<HTMLElement>('.timeline-item');
        
        items.forEach((item, i) => {
          gsap.fromTo(item, 
            { opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 },
            {
              opacity: 1, 
              x: 0, 
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });

        // Timeline Line Progress
        gsap.fromTo('.timeline-line', 
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 50%',
              end: 'bottom 80%',
              scrub: 0.5
            }
          }
        );
      }

      // Values Grid Animation
      if (valuesRef.current) {
        const cards = gsap.utils.toArray<HTMLElement>('.value-card');
        gsap.fromTo(cards, 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: valuesRef.current,
              start: 'top 75%'
            }
          }
        );
      }

    });

    return () => ctx.revert();
  }, []);

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
            <div className="max-w-2xl animate-fade-in-up">
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
                <a href="/contact">
                  <Button size="lg" className="rounded-2xl px-8 shadow-soft bg-brand-blue hover:bg-brand-teal text-white border-0">
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-brand-blue/10 blur-[80px] rounded-full mix-blend-multiply" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-teal/20 rounded-full animate-[spin_20s_linear_infinite] border-dashed" />
              
              <div className="relative z-10 w-full h-full max-w-[90%] max-h-[90%]">
                <div className="w-full h-full rounded-[40px] md:rounded-[60px] overflow-hidden border-8 border-white bg-white shadow-float relative group [mask-image:url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill=%22%23000%22 d=%22M45.7,-76.4C58.9,-69.3,69.2,-55.5,76.5,-41.1C83.8,-26.6,88.1,-11.5,86.2,3.1C84.3,17.7,76.1,31.7,66.3,43.2C56.4,54.7,44.9,63.7,31.4,70.9C17.9,78.2,2.4,83.7,-12.3,81.9C-27,80.2,-41,71.2,-53.4,60.2C-65.7,49.2,-76.5,36.2,-81.9,21.1C-87.3,6,-87.3,-11.2,-81.3,-26.1C-75.3,-41.1,-63.3,-53.9,-50,-61.2C-36.6,-68.5,-21.8,-70.3,-5.7,-71.4C10.5,-72.5,21,-73,32.5,-83.5C44.1,-94.1,45.7,-76.4,45.7,-76.4Z%22 transform=%22translate(100 100)%22 /></svg>')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]">
                  <img 
                    src="/hero.png" 
                    alt="Abhaya Medicare Facility" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Bento Grid */}
      <section className="py-24 bg-brand-light" ref={valuesRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal mb-6 tracking-tight">Our Core Values</h2>
            <p className="text-xl text-brand-charcoal/70 leading-relaxed">We combine medical expertise with advanced technology to deliver the best diagnostic care.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Mission - Large Card */}
            <div
              className="value-card md:col-span-2 lg:col-span-2 bg-gradient-to-br from-brand-blue to-brand-teal p-8 md:p-10 rounded-3xl text-white shadow-soft relative overflow-hidden group opacity-0"
            >
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Target size={200} />
              </div>
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 text-lg leading-relaxed">{aboutContent.mission}</p>
              </div>
            </div>

            {/* Image Card */}
            <div
              className="value-card md:col-span-1 lg:col-span-2 rounded-3xl overflow-hidden shadow-soft relative group min-h-[250px] opacity-0"
            >
              <img src="/hero.png" alt="Facility" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/40 to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">State-of-the-Art Facility</h3>
              </div>
            </div>

            {/* Vision - Medium Card */}
            <div
              className="value-card md:col-span-2 lg:col-span-2 glass p-8 md:p-10 rounded-3xl shadow-soft group hover:shadow-float transition-all opacity-0"
            >
              <div className="bg-brand-gold/10 text-brand-gold w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-3xl font-bold text-brand-charcoal mb-4">Our Vision</h3>
              <p className="text-brand-gray text-lg leading-relaxed">{aboutContent.vision}</p>
            </div>

            {/* Small Feature Cards from whyChooseUs */}
            {aboutContent.whyChooseUs.slice(0, 2).map((feature, idx) => (
              <div
                key={idx}
                className="value-card col-span-1 glass p-8 rounded-3xl shadow-soft hover:shadow-glow-teal transition-all group opacity-0"
              >
                <div className="bg-brand-teal/10 text-brand-teal w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                  <Icon name={feature.icon} size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">{feature.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white overflow-hidden" ref={timelineRef}>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight mb-4">Our Journey</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-blue to-brand-teal mx-auto rounded-full" />
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-brand-gray/10 before:rounded-full">
            {/* Animated Line Progress */}
            <div className="timeline-line absolute inset-0 ml-5 -translate-x-px md:mx-auto md:translate-x-0 h-full w-1 bg-gradient-to-b from-brand-blue via-brand-teal to-brand-gold rounded-full z-0" />
            
            {aboutContent.timeline.map((item, idx) => (
              <div 
                key={idx}
                className="timeline-item relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group opacity-0"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-brand-white shadow-soft shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-teal transition-all duration-500">
                  <div className="w-4 h-4 bg-brand-gold rounded-full shadow-inner group-hover:bg-white transition-colors"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl glass bg-white/80 shadow-soft group-hover:shadow-glow-teal group-hover:-translate-y-1 transition-all duration-300 relative">
                  {/* Small pointer triangle for desktop */}
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-white/20 rotate-45 group-odd:-left-2 group-odd:-rotate-[135deg] group-even:-right-2 group-even:border-l group-even:border-b group-even:border-t-0 group-even:border-r-0" />
                  
                  <div className="flex items-center justify-between mb-4 border-b border-brand-gray/5 pb-4">
                    <h3 className="text-2xl font-bold text-brand-charcoal">{item.title}</h3>
                    <span className="text-xl font-black text-brand-gold px-4 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20">{item.year}</span>
                  </div>
                  <p className="text-lg text-brand-charcoal/70 leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
    </>
  );
}

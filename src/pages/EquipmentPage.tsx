import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { seoData } from '../data/seo';
import { Breadcrumb } from '../components/molecules/Breadcrumb';
import { EquipmentGrid } from '../components/organisms/EquipmentGrid';
import { Badge } from '../components/atoms/Badge';

export function EquipmentPage() {
  return (
    <>
      <Helmet>
        <title>{seoData.equipment.title}</title>
        <meta name="description" content={seoData.equipment.description} />
        <meta name="keywords" content={seoData.equipment.keywords} />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-pale relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb 
            items={[{ label: "Equipment" }]} 
            className="mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge variant="outline" className="mb-4 bg-white border-brand-blue/20 text-brand-blue">
              Latest Technology
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
              Advanced Diagnostic Equipment
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              We leverage cutting-edge medical technology to provide you with the most accurate, reliable, and fastest diagnostic results possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-20 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6">
          <EquipmentGrid />
        </div>
      </section>
    </>
  );
}

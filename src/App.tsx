import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MainLayout } from './components/templates/MainLayout';
import { PageTransition } from './components/templates/PageTransition';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { EquipmentPage } from './pages/EquipmentPage';
import { EquipmentDetailPage } from './pages/EquipmentDetailPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';

export default function App() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="services" element={<PageTransition><ServicesPage /></PageTransition>} />
          <Route path="services/:id" element={<PageTransition><ServiceDetailPage /></PageTransition>} />
          <Route path="equipment" element={<PageTransition><EquipmentPage /></PageTransition>} />
          <Route path="equipment/:id" element={<PageTransition><EquipmentDetailPage /></PageTransition>} />
          <Route path="contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

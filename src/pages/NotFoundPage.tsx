import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '../components/atoms/Button';
import { FileQuestion, Home, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 bg-brand-light">
      <Helmet>
        <title>404 - Page Not Found | Abhaya Medicare</title>
      </Helmet>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg mx-auto"
      >
        <div className="mb-8 flex justify-center">
          <div className="bg-brand-pale text-brand-blue p-6 rounded-full inline-block">
            <FileQuestion size={64} />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-brand-gray mb-6">Page Not Found</h2>
        
        <p className="text-brand-gray mb-10">
          Oops! The page you're looking for seems to have been moved, deleted, or doesn't exist.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Home size={18} />
              Back to Homepage
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto bg-white">
              <Search size={18} />
              Browse Services
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

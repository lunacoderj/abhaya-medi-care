import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';
import { Button } from '../atoms/Button';
import { clinicData } from '../../data/clinic';
import { cn } from '../../lib/utils';
import { buildWhatsAppUrl } from '../../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Equipment', path: '/equipment' },
    { label: 'Contact', path: '/contact' },
  ];

  const whatsappMessage = "Hi, I would like to book an appointment.";
  const whatsappUrl = buildWhatsAppUrl(clinicData.contact.whatsapp, whatsappMessage);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-brand-gray/10 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-blue text-white p-1.5 rounded-lg group-hover:bg-brand-teal transition-colors">
              <Activity size={24} />
            </div>
            <span className="font-bold text-xl md:text-2xl text-brand-charcoal tracking-tight">
              Abhaya <span className="text-brand-blue">Medicare</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-brand-blue",
                      location.pathname === link.path ? "text-brand-blue" : "text-brand-charcoal"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button>Book Appointment</Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-brand-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-gray/10 shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={cn(
                    "block text-base font-medium",
                    location.pathname === link.path ? "text-brand-blue" : "text-brand-charcoal"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-brand-gray/10">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full">Book Appointment</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

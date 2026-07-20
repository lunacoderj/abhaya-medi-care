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
        "fixed top-[2px] left-4 right-4 md:left-8 md:right-8 z-50 transition-all duration-300 rounded-2xl",
        isScrolled ? "glass shadow-soft py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Abhaya Medicare" className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
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
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-xl border border-brand-gray/10 rounded-2xl shadow-soft py-6 px-6 flex flex-col gap-6 animate-in slide-in-from-top-4">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "block text-xl font-bold transition-colors",
                    location.pathname === link.path ? "text-brand-blue" : "text-brand-charcoal hover:text-brand-blue"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-brand-gray/10">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button size="lg" className="w-full">Book Appointment</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

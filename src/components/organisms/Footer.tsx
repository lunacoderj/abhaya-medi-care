import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { clinicData } from '../../data/clinic';
import { servicesData } from '../../data/services';
import { SocialLinks } from '../molecules/SocialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-charcoal text-brand-light pt-16 pb-8 border-t-[6px] border-brand-teal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-white p-1 rounded-xl">
                <img src="/logo.png" alt="Abhaya Medicare" className="h-10 md:h-12 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              {clinicData.description}
            </p>
            <div className="pt-2">
              <SocialLinks variant="dark" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Equipment', path: '/equipment' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-brand-teal transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.id}`}
                    className="text-gray-400 hover:text-brand-teal transition-colors text-sm flex items-center gap-2 group capitalize"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {service.name.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-teal shrink-0 mt-0.5" />
                <span className="leading-relaxed">{clinicData.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-teal shrink-0" />
                <span>{clinicData.contact.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-teal shrink-0" />
                <a href={`mailto:${clinicData.contact.email}`} className="hover:text-white transition-colors">
                  {clinicData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} {clinicData.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

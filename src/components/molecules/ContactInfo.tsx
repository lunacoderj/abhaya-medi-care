import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { clinicData } from '../../data/clinic';
import { buildWhatsAppUrl } from '../../lib/utils';
import { toast } from 'sonner';

interface ContactInfoProps {
  variant?: 'light' | 'dark';
}

export function ContactInfo({ variant = 'light' }: ContactInfoProps) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-brand-charcoal';
  const iconColor = variant === 'dark' ? 'text-brand-teal' : 'text-brand-blue';
  const subtextColor = variant === 'dark' ? 'text-gray-400' : 'text-brand-gray';

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const whatsappMessage = "Hi, I would like to know more about your diagnostic services.";
  const whatsappUrl = buildWhatsAppUrl(clinicData.contact.whatsapp, whatsappMessage);

  return (
    <div className="space-y-6">
      {/* Address */}
      <div className="flex items-start gap-4">
        <div className={`mt-1 ${iconColor}`}>
          <MapPin size={24} />
        </div>
        <div>
          <h4 className={`font-semibold mb-1 ${textColor}`}>Visit Us</h4>
          <p className={`text-sm leading-relaxed mb-2 ${subtextColor}`}>
            {clinicData.contact.address}
          </p>
          <a 
            href={clinicData.contact.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-teal text-sm font-medium hover:underline"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <div className={`mt-1 ${iconColor}`}>
          <Phone size={24} />
        </div>
        <div>
          <h4 className={`font-semibold mb-1 ${textColor}`}>Call Us</h4>
          <p className={`text-sm mb-2 ${subtextColor}`}>
            {clinicData.contact.phoneDisplay}
          </p>
          <button 
            onClick={() => copyToClipboard(clinicData.contact.phoneDisplay, "Phone number")}
            className="text-brand-teal text-sm font-medium hover:underline"
          >
            Copy Number
          </button>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="flex items-start gap-4">
        <div className={`mt-1 ${iconColor}`}>
          <MessageCircle size={24} />
        </div>
        <div>
          <h4 className={`font-semibold mb-1 ${textColor}`}>WhatsApp</h4>
          <p className={`text-sm mb-2 ${subtextColor}`}>
            Available for quick queries and appointments
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-teal text-sm font-medium hover:underline inline-flex items-center gap-1"
          >
            Chat with us
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4">
        <div className={`mt-1 ${iconColor}`}>
          <Mail size={24} />
        </div>
        <div>
          <h4 className={`font-semibold mb-1 ${textColor}`}>Email</h4>
          <a 
            href={`mailto:${clinicData.contact.email}`}
            className={`text-sm ${subtextColor} hover:text-brand-teal transition-colors`}
          >
            {clinicData.contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}

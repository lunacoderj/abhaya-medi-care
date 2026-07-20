import React from 'react';
import { clinicData } from '../../data/clinic';

export function MapSection() {
  // Use a reliable Google Maps embed URL based on the clinic's name and address
  const mapQuery = `${clinicData.name}, ${clinicData.contact.address}`;
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-sm border border-brand-gray/10 relative z-0">
      <iframe
        title="Clinic Location"
        src={mapUrl}
        className="w-full h-full absolute inset-0 border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

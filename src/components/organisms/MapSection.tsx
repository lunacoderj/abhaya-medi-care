import React from 'react';

export function MapSection() {
  // Using the exact Google Maps location provided by the clinic
  const mapUrl = `https://maps.google.com/maps?q=Abhaya+Medicare+-+Diagnostic+Centres+in+Vizag&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full h-full relative">
      <iframe
        title="Clinic Location"
        src={mapUrl}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

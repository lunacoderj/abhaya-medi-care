import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { clinicData } from '../../data/clinic';
import { cn } from '../../lib/utils';

interface SocialLinksProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function SocialLinks({ className, variant = 'light' }: SocialLinksProps) {
  const iconClass = variant === 'dark' 
    ? 'text-gray-400 hover:text-brand-teal hover:bg-white/10' 
    : 'text-brand-gray hover:text-brand-blue hover:bg-brand-blue/10';

  const socialLinks = [
    { icon: FaFacebook, href: clinicData.social.facebook, label: 'Facebook' },
    { icon: FaInstagram, href: clinicData.social.instagram, label: 'Instagram' },
    { icon: FaTwitter, href: clinicData.social.twitter, label: 'Twitter' },
  ];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialLinks.map((link, idx) => {
        const Icon = link.icon;
        return (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={cn(
              "p-2 rounded-full transition-all duration-300",
              iconClass
            )}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}

import React from 'react';
import { Instagram, Phone, Clock, MapPin } from 'lucide-react';
import { FitnessFirstLogo } from './FitnessFirstLogo';
import { GYM_INFO } from '../data/gymData';
import { WhatsAppButton } from './WhatsAppButton';

interface FooterProps {
  id?: string;
}

export const Footer: React.FC<FooterProps> = ({ id = 'footer' }) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Founder', href: '#founder' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id={id}
      className="bg-[#050507] text-neutral-400 pt-16 pb-12 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-neutral-800/80">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#home" className="inline-block mb-4">
                <FitnessFirstLogo size="lg" />
              </a>
              <p className="text-sm text-neutral-400 max-w-md leading-relaxed mt-2">
                A fitness-focused community and movement in Kolhapur, Maharashtra. Inspiring the youth to stay active, train with discipline, and build real strength.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                id="footer-instagram-icon"
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Fitness First on Instagram"
                className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-[#F5C21B] hover:border-[#F5C21B]/40 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <WhatsAppButton
                id="footer-whatsapp-badge"
                size="sm"
                label="WhatsApp"
                variant="subtle"
              />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-display mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    id={`footer-link-${link.name.toLowerCase()}`}
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-[#F5C21B] transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-display mb-4">
              Visit Fitness First
            </h4>

            {/* Address */}
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-[#F5C21B] flex-shrink-0 mt-1" />
              <span>{GYM_INFO.address}</span>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center gap-3 text-sm">
              <Clock className="w-4 h-4 text-[#F5C21B] flex-shrink-0" />
              <span>{GYM_INFO.openingHours} (Mon - Sat)</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-[#F5C21B] flex-shrink-0" />
              <div className="flex gap-2">
                {GYM_INFO.phones.map((phone, i) => (
                  <span key={phone}>
                    <a href={`tel:${phone}`} className="hover:text-white transition-colors">
                      {phone}
                    </a>
                    {i < GYM_INFO.phones.length - 1 && ', '}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2026 {GYM_INFO.registeredName}. All Rights Reserved.</p>
          <p className="text-neutral-400">
            {GYM_INFO.tagline} • Kolhapur, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
};

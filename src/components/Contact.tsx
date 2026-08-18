import React from 'react';
import { motion } from 'motion/react';
import { Clock, Phone, MapPin, Navigation, Instagram } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { WhatsAppButton } from './WhatsAppButton';

interface ContactProps {
  id?: string;
}

export const Contact: React.FC<ContactProps> = ({ id = 'contact' }) => {
  return (
    <section
      id={id}
      className="py-24 sm:py-32 bg-[#09090b] text-neutral-100 relative overflow-hidden border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#F5C21B]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#F5C21B]">
              Location & Connect
            </span>
            <span className="w-5 h-[2px] bg-[#F5C21B]" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight font-display mb-4">
            COME TRAIN <span className="text-[#F5C21B]">WITH US</span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Ready to start your fitness journey? Visit Fitness First or connect with us directly.
          </p>
        </div>

        {/* Info Grid & Map Action Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-7 rounded-2xl bg-[#121216] border border-neutral-800/90 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#F5C21B] mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2 font-display">
                Opening Hours
              </h3>
              <p className="text-2xl font-bold text-[#F5C21B] font-sans">
                {GYM_INFO.openingHours}
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                Monday to Saturday • Active Floor
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80">
              <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Morning & Evening Batches
              </span>
            </div>
          </motion.div>

          {/* Card 2: Direct Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-7 rounded-2xl bg-[#121216] border border-neutral-800/90 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#F5C21B] mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2 font-display">
                Phone Inquiries
              </h3>
              <div className="space-y-1">
                {GYM_INFO.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="block text-xl font-bold text-neutral-100 hover:text-[#F5C21B] transition-colors font-sans"
                  >
                    +91 {phone}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80">
              <span className="text-xs text-neutral-400">
                Call anytime during operating hours
              </span>
            </div>
          </motion.div>

          {/* Card 3: Address & Landmark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-7 rounded-2xl bg-[#121216] border border-neutral-800/90 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#F5C21B] mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2 font-display">
                Gym Address
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                {GYM_INFO.address}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80">
              <span className="text-xs text-[#F5C21B] font-semibold">
                Landmark: Beside City Hospital, Rajarampuri
              </span>
            </div>
          </motion.div>

        </div>

        {/* Primary Action Buttons Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto"
        >
          {/* Get Directions (Google Maps) */}
          <a
            id="contact-directions-btn"
            href={GYM_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#F5C21B] hover:bg-[#e0b010] text-black font-bold text-sm tracking-wide transition-all shadow-md active:scale-98"
          >
            <Navigation className="w-4 h-4 fill-black/20" />
            <span>Get Directions</span>
          </a>

          {/* WhatsApp Us */}
          <WhatsAppButton
            id="contact-whatsapp-btn"
            label="WhatsApp Us"
            variant="outline"
            size="lg"
          />

          {/* Follow On Instagram */}
          <a
            id="contact-instagram-btn"
            href={GYM_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 hover:border-neutral-700 font-semibold text-sm transition-all active:scale-98"
          >
            <Instagram className="w-4 h-4 text-[#F5C21B]" />
            <span>Follow On Instagram</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

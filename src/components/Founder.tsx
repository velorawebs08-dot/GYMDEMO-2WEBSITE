import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Upload, Check } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import defaultFounderImg from '../assets/images/swapnil_founder_1787053658043.jpg';

interface FounderProps {
  id?: string;
}

export const Founder: React.FC<FounderProps> = ({ id = 'founder' }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [founderImageSrc, setFounderImageSrc] = useState<string>(() => {
    return localStorage.getItem('ff_founder_custom_photo') || '/images/founder.png';
  });
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);

  useEffect(() => {
    // Check if custom photo exists in storage or load fallback
    const saved = localStorage.getItem('ff_founder_custom_photo');
    if (saved) {
      setFounderImageSrc(saved);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setFounderImageSrc(result);
          try {
            localStorage.setItem('ff_founder_custom_photo', result);
          } catch (err) {
            // Storage quota handled gracefully
          }
          setShowUploadSuccess(true);
          setTimeout(() => setShowUploadSuccess(false), 3000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      id={id}
      className="py-24 sm:py-32 md:py-40 bg-black text-white relative border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* LEFT SIDE: Founder Image (Clean, natural photograph sitting directly on solid black) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start justify-center relative group"
          >
            <div className="w-full max-w-xl lg:max-w-none flex flex-col items-center justify-center relative">
              <img
                src={founderImageSrc}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.dataset.triedDefault) {
                    target.dataset.triedDefault = 'true';
                    target.src = defaultFounderImg;
                  }
                }}
                alt="Swapnil — Founder & Fitness Influencer at Fitness First Kolhapur"
                className="w-full h-auto max-h-[680px] lg:max-h-[740px] object-contain object-center rounded-sm select-none"
                loading="eager"
              />

              {/* Seamless, minimal photo replacement control */}
              <div className="mt-4 flex items-center gap-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleFileChange}
                  className="hidden"
                  id="founder-photo-file-input"
                />
                
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-[#F5C21B]/60 text-xs font-semibold text-neutral-300 hover:text-white transition-all shadow-sm active:scale-98 cursor-pointer"
                  title="Click to select the exact image.png from your device"
                >
                  <Upload className="w-3.5 h-3.5 text-[#F5C21B]" />
                  <span>Choose exact photo file</span>
                </button>

                {showUploadSuccess && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold animate-in fade-in">
                    <Check className="w-3.5 h-3.5" />
                    <span>Loaded!</span>
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Founder Information */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center"
          >
            {/* Small Accent Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1.5px] bg-[#F5C21B]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#F5C21B] font-sans">
                FOUNDER
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-400 uppercase tracking-tight font-display mb-1">
              Meet Our Founder
            </h2>

            {/* Name */}
            <h3 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white uppercase tracking-tight font-display mb-3">
              <span className="text-[#F5C21B]">{GYM_INFO.founderName}</span>
            </h3>

            {/* Role */}
            <p className="text-sm sm:text-base font-semibold text-neutral-400 tracking-wide mb-6">
              {GYM_INFO.founderTitle}
            </p>

            {/* Subtle Divider Line */}
            <div className="w-12 h-[2px] bg-[#F5C21B] mb-6" />

            {/* Short Description */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl font-normal">
              Swapnil is the founder of Fitness First and a fitness influencer in Kolhapur, inspiring the younger generation to stay active, train consistently, and build a healthier lifestyle.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

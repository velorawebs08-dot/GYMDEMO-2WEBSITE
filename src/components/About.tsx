import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Flame, HeartPulse, CheckCircle2, Upload, Check, ChevronRight } from 'lucide-react';

interface AboutProps {
  id?: string;
}

interface InteriorPhoto {
  id: string;
  name: string;
  url: string;
  tag: string;
}

const INTERIOR_PHOTOS: InteriorPhoto[] = [
  {
    id: 'turf-agility',
    name: 'Turf & Agility Arena',
    url: '/images/gym-interior.jpg',
    tag: 'Functional Training Floor',
  },
  {
    id: 'strength-machines',
    name: 'Strength & Conditioning',
    url: '/images/gym-strength-cardio.jpg',
    tag: 'Resistance Machines & Turf',
  },
  {
    id: 'wide-arena',
    name: 'Main Turf & Mirrors',
    url: '/images/gym-equipment.jpg',
    tag: 'Wide Perspective Arena',
  },
];

export const About: React.FC<AboutProps> = ({ id = 'about' }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [customPhotos, setCustomPhotos] = useState<Record<number, string>>({});
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ff_about_interior_photos');
      if (saved) {
        setCustomPhotos(JSON.parse(saved));
      }
    } catch (e) {
      // Graceful fallback
    }
  }, []);

  const activePhoto = customPhotos[selectedPhotoIndex] || INTERIOR_PHOTOS[selectedPhotoIndex].url;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          const updated = { ...customPhotos, [selectedPhotoIndex]: result };
          setCustomPhotos(updated);
          try {
            localStorage.setItem('ff_about_interior_photos', JSON.stringify(updated));
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

  const highlights = [
    {
      title: 'Train Consistently',
      desc: 'Building daily discipline and sustainable workout habits.',
      icon: Flame,
    },
    {
      title: 'Build Strength',
      desc: 'Progressive overload on high-grade resistance equipment.',
      icon: Dumbbell,
    },
    {
      title: 'Live Fitter',
      desc: 'Transforming mindset, health, and athletic confidence.',
      icon: HeartPulse,
    },
  ];

  return (
    <section
      id={id}
      className="py-24 sm:py-32 bg-[#09090b] text-neutral-100 relative overflow-hidden border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Authentic Gym Interior Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-900 shadow-2xl group">
              {/* Gym Interior Image */}
              <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-neutral-950">
                <img
                  key={activePhoto}
                  src={activePhoto}
                  alt={INTERIOR_PHOTOS[selectedPhotoIndex].name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Gym Feature overlay tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-black/80 backdrop-blur-md border border-neutral-700/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F5C21B] animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
                      {INTERIOR_PHOTOS[selectedPhotoIndex].tag}
                    </span>
                  </div>
                  <span className="text-xs text-[#F5C21B] font-bold">
                    Rajarampuri, Kolhapur
                  </span>
                </div>

                {/* Direct Upload / Replace Action for currently selected Interior view */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png, image/jpeg, image/webp, image/jfif"
                  onChange={handleFileChange}
                  className="hidden"
                  id="about-gym-image-upload"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black/95 text-neutral-200 hover:text-[#F5C21B] border border-neutral-700/80 text-xs font-medium backdrop-blur-sm transition-all duration-200 shadow-lg cursor-pointer"
                  title="Upload / replace selected interior photo"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Replace Photo</span>
                </button>

                {showUploadSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-700/80 text-xs font-medium backdrop-blur-sm"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Photo updated!</span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* 3 Interior Photo Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {INTERIOR_PHOTOS.map((photo, index) => {
                const currentThumbUrl = customPhotos[index] || photo.url;
                const isSelected = selectedPhotoIndex === index;
                return (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setSelectedPhotoIndex(index)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all p-0.5 cursor-pointer text-left ${
                      isSelected
                        ? 'border-[#F5C21B] shadow-lg shadow-[#F5C21B]/20 scale-102'
                        : 'border-neutral-800 hover:border-neutral-700 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <div className="aspect-[16/10] overflow-hidden rounded-lg bg-neutral-950">
                      <img
                        src={currentThumbUrl}
                        alt={photo.name}
                        className="w-full h-full object-cover object-center brightness-90"
                      />
                    </div>
                    <div className="px-1.5 py-1 bg-neutral-900/90">
                      <p className={`text-[11px] font-semibold truncate ${isSelected ? 'text-[#F5C21B]' : 'text-neutral-300'}`}>
                        {photo.name}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#F5C21B]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#F5C21B]">
                About Fitness First
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight font-display mb-6">
              MORE THAN <span className="text-[#F5C21B]">A GYM</span>
            </h2>

            {/* Concise Core Copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 font-normal">
              Fitness First is built around real training, consistency, and a positive fitness culture. Founded by fitness influencer Swapnil, the gym aims to encourage more young people in Kolhapur to make fitness a part of their lifestyle.
            </p>

            {/* 3 Simple Highlights */}
            <div className="space-y-4 pt-2 border-t border-neutral-800/80">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-3 rounded-xl transition-colors hover:bg-neutral-900/60"
                  >
                    <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[#F5C21B] flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                        {item.title}
                        <CheckCircle2 className="w-4 h-4 text-[#F5C21B]" />
                      </h3>
                      <p className="text-sm text-neutral-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

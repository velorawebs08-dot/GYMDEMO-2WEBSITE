import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';

interface GalleryProps {
  id?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ id = 'gallery' }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Interior', 'Strength', 'Cardio', 'Equipment', 'Community'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  const openLightbox = (filteredIndex: number) => {
    // Find the original item index in GALLERY_ITEMS
    const targetItem = filteredItems[filteredIndex];
    const originalIndex = GALLERY_ITEMS.findIndex((item) => item.id === targetItem.id);
    setActiveImageIndex(originalIndex !== -1 ? originalIndex : 0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section
      id={id}
      className="py-24 sm:py-32 bg-[#0c0c0f] text-neutral-100 relative overflow-hidden border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#F5C21B]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#F5C21B]">
              Facility & Floor
            </span>
            <span className="w-5 h-[2px] bg-[#F5C21B]" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight font-display mb-4">
            THE <span className="text-[#F5C21B]">ARENA</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Modern equipment, dedicated turf zone, and high-energy workout atmosphere in Rajarampuri, Kolhapur.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory.toLowerCase() === category.toLowerCase()
                  ? 'bg-[#F5C21B] text-black font-bold shadow-lg shadow-[#F5C21B]/20 scale-105'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => openLightbox(idx)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/80 cursor-pointer shadow-xl transition-all duration-300 hover:border-[#F5C21B]/50"
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-100"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[#F5C21B] border border-neutral-700/60 shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Zoom Icon Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2.5 rounded-full bg-black/80 backdrop-blur-md text-white hover:text-[#F5C21B] border border-neutral-700/60 shadow-md">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base font-bold text-white font-sans tracking-wide group-hover:text-[#F5C21B] transition-colors line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && GALLERY_ITEMS[activeImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-neutral-900 text-neutral-300 hover:text-[#F5C21B] hover:bg-neutral-800 border border-neutral-700 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev button */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-neutral-900/80 text-white hover:text-[#F5C21B] hover:bg-neutral-800 border border-neutral-700 transition-colors cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-neutral-900/80 text-white hover:text-[#F5C21B] hover:bg-neutral-800 border border-neutral-700 transition-colors cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image Content */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={GALLERY_ITEMS[activeImageIndex].imageUrl}
                alt={GALLERY_ITEMS[activeImageIndex].alt}
                className="max-h-[75vh] w-auto object-contain rounded-xl border border-neutral-800 shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="text-xs text-[#F5C21B] font-bold uppercase tracking-wider block mb-1">
                  {GALLERY_ITEMS[activeImageIndex].category}
                </span>
                <p className="text-base text-neutral-200 font-semibold">
                  {GALLERY_ITEMS[activeImageIndex].title}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

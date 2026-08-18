import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, MapPin, Clock, Volume2, VolumeX, Video, Check } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { GYM_INFO } from '../data/gymData';

interface HeroProps {
  id?: string;
}

export const Hero: React.FC<HeroProps> = ({ id = 'home' }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoInputRef = useRef<HTMLInputElement | null>(null);
  const [videoSrc, setVideoSrc] = useState<string>('/videos/hero.mp4');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoChanged, setVideoChanged] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay handled
      });
    }
  }, [videoSrc]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setVideoChanged(true);
      setTimeout(() => setVideoChanged(false), 4000);
      if (videoRef.current) {
        videoRef.current.src = url;
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090b]"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          key={videoSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-center scale-105 brightness-110 contrast-105 transition-opacity duration-700 ${
            videoLoaded ? 'opacity-100' : 'opacity-90'
          }`}
          src={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Lighter overlay to let the bright turf, ceiling lights, and interior pop */}
        <div className="absolute inset-0 bg-[#09090b]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-[#09090b]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#09090b]/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        {/* Kolhapur Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs font-semibold mb-6 backdrop-blur-xs shadow-lg"
        >
          <MapPin className="w-3.5 h-3.5 text-[#F5C21B]" />
          <span>Kolhapur, Maharashtra</span>
          <span className="w-1 h-1 rounded-full bg-neutral-600" />
          <Clock className="w-3.5 h-3.5 text-[#F5C21B]" />
          <span>6:00 AM – 10:00 PM</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight text-white leading-none font-display mb-4 drop-shadow-lg"
        >
          REAL PEOPLE, <br />
          <span className="text-[#F5C21B]">REAL RESULTS</span>
        </motion.h1>

        {/* Brand Subtitle & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col items-center justify-center mb-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-100">
            <span>{GYM_INFO.registeredName}</span>
            <span className="text-neutral-500 font-light">•</span>
            <span className="text-[#F5C21B] font-semibold">{GYM_INFO.tagline}</span>
          </div>
        </motion.div>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-2xl text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-10 text-center"
        >
          Inspiring Kolhapur's next generation to train, stay consistent, and live a fitter life.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <WhatsAppButton
            id="hero-cta-join"
            label="Join Now"
            size="lg"
            variant="primary"
            className="w-full sm:w-auto min-w-[180px] shadow-lg shadow-[#F5C21B]/15"
          />
          <WhatsAppButton
            id="hero-cta-whatsapp"
            label="WhatsApp Us"
            size="lg"
            variant="outline"
            className="w-full sm:w-auto min-w-[180px]"
          />
        </motion.div>
      </div>

      {/* Hidden File Input for Video Loading */}
      <input
        ref={videoInputRef}
        type="file"
        accept="video/mp4, video/webm, video/quicktime"
        onChange={handleVideoFile}
        className="hidden"
        id="hero-video-file-picker"
      />

      {/* Bottom Left: Video File Selector (for 100% exact local video playback) */}
      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={() => videoInputRef.current?.click()}
          className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-[#F5C21B] border border-neutral-800 backdrop-blur-xs transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
          title="Select your exact video file to play in background"
        >
          <Video className="w-4 h-4 text-[#F5C21B]" />
          <span className="hidden sm:inline">Select exact video file</span>
        </button>
        {videoChanged && (
          <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 bg-black/80 px-2.5 py-1 rounded-full border border-neutral-800">
            <Check className="w-3.5 h-3.5" /> Playing video!
          </span>
        )}
      </div>

      {/* Video Audio Control in Bottom Right */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
        className="absolute bottom-6 right-6 z-20 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-[#F5C21B] border border-neutral-800 backdrop-blur-xs transition-all cursor-pointer"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#F5C21B]" />}
      </button>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-label="Scroll down to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-neutral-400 hover:text-[#F5C21B] transition-colors group cursor-pointer"
      >
        <span className="text-[11px] uppercase tracking-widest font-semibold mb-1 group-hover:translate-y-0.5 transition-transform">
          Explore
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#F5C21B]" />
      </motion.a>
    </section>
  );
};

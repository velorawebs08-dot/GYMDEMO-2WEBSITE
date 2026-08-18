import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Founder } from './components/Founder';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-[#F5C21B] selection:text-black">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Background Video & Motivational Slogan */}
        <Hero id="home" />

        {/* 2. About Fitness First — More Than A Gym */}
        <About id="about" />

        {/* 3. Programs — Train With Purpose (4 Simple Disciplines) */}
        <Programs id="programs" />

        {/* 4. Founder — Swapnil (Face of Fitness First & Influencer) */}
        <Founder id="founder" />

        {/* 5. Gallery — The Arena & Workout Environment */}
        <Gallery id="gallery" />

        {/* 6. Contact & Location — Come Train With Us */}
        <Contact id="contact" />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick WhatsApp Floating Action for mobile and quick booking */}
      <WhatsAppButton variant="floating" id="floating-whatsapp-btn" />
    </div>
  );
}

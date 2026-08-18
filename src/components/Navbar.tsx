import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FitnessFirstLogo } from './FitnessFirstLogo';
import { WhatsAppButton } from './WhatsAppButton';

interface NavbarProps {
  id?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ id = 'navbar' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Founder', href: '#founder' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id={id}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-neutral-800/80 py-2 sm:py-2.5 shadow-xl'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center">
            <a
              id="nav-logo-link"
              href="#home"
              className="flex items-center group transition-transform active:scale-98"
            >
              <FitnessFirstLogo size="md" enableUpload={true} />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-[#F5C21B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F5C21B] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <WhatsAppButton
                id="nav-cta-join"
                label="Join Now"
                size="sm"
                variant="primary"
              />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/60 md:hidden focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#F5C21B]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#0c0c0f] border-b border-neutral-800 px-5 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-neutral-200 hover:text-[#F5C21B] hover:bg-neutral-900/80 px-3 py-2.5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2.5">
            <WhatsAppButton
              id="mobile-nav-cta-join"
              label="Join Now on WhatsApp"
              size="md"
              variant="primary"
              className="w-full justify-center"
            />
          </div>
        </div>
      )}
    </header>
  );
};

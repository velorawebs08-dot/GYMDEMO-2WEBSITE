import React from 'react';
import { MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface WhatsAppButtonProps {
  label?: string;
  variant?: 'primary' | 'outline' | 'floating' | 'subtle';
  className?: string;
  customMessage?: string;
  size?: 'sm' | 'md' | 'lg';
  id?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  label = 'WhatsApp Us',
  variant = 'primary',
  className = '',
  customMessage = GYM_INFO.whatsappMessage,
  size = 'md',
  id = 'whatsapp-button',
}) => {
  const encodedMsg = encodeURIComponent(customMessage);
  const whatsappUrl = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodedMsg}`;

  const sizeClasses = {
    sm: 'px-3.5 py-2 text-xs font-semibold gap-2',
    md: 'px-5 py-2.5 text-sm font-semibold gap-2.5',
    lg: 'px-7 py-3.5 text-base font-bold gap-3',
  };

  if (variant === 'floating') {
    return (
      <a
        id={id}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Fitness First on WhatsApp"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group ${className}`}
      >
        <MessageCircle className="w-5 h-5 text-black fill-black/10 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline text-xs tracking-wide uppercase font-bold text-neutral-950">Chat on WhatsApp</span>
      </a>
    );
  }

  if (variant === 'outline') {
    return (
      <a
        id={id}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-lg border border-[#F5C21B]/40 hover:border-[#F5C21B] text-white hover:text-[#F5C21B] bg-black/40 backdrop-blur-xs transition-all duration-200 active:scale-98 ${sizeClasses[size]} ${className}`}
      >
        <MessageCircle className="w-4 h-4 text-[#F5C21B]" />
        <span>{label}</span>
      </a>
    );
  }

  if (variant === 'subtle') {
    return (
      <a
        id={id}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-colors ${sizeClasses[size]} ${className}`}
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        <span>{label}</span>
      </a>
    );
  }

  // Primary yellow style
  return (
    <a
      id={id}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg bg-[#F5C21B] hover:bg-[#e5b210] text-black font-bold tracking-wide transition-all duration-200 shadow-md active:scale-98 ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle className="w-4 h-4 text-black fill-black/20" />
      <span>{label}</span>
    </a>
  );
};

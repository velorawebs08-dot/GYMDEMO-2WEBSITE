import React, { useState, useEffect, useRef } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  enableUpload?: boolean;
}

export const FitnessFirstLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  enableUpload = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [logoSrc, setLogoSrc] = useState<string>(() => {
    return localStorage.getItem('ff_custom_logo_img') || '/images/logo.svg';
  });

  useEffect(() => {
    const handleLogoUpdate = () => {
      const saved = localStorage.getItem('ff_custom_logo_img');
      if (saved) {
        setLogoSrc(saved);
      }
    };

    window.addEventListener('storage', handleLogoUpdate);
    window.addEventListener('ff_logo_changed', handleLogoUpdate);
    return () => {
      window.removeEventListener('storage', handleLogoUpdate);
      window.removeEventListener('ff_logo_changed', handleLogoUpdate);
    };
  }, []);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          try {
            localStorage.setItem('ff_custom_logo_img', result);
          } catch (err) {
            // Storage quota handled gracefully
          }
          setLogoSrc(result);
          window.dispatchEvent(new Event('ff_logo_changed'));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Exact requested height mapping with h-29 (116px) for the navbar logo
  const heightClasses = {
    sm: 'h-16',
    md: 'h-29 h-[116px]',
    lg: 'h-29 h-[116px]',
    xl: 'h-36 h-[144px]',
  };

  return (
    <div className={`inline-flex items-center group relative select-none ${className}`}>
      <img
        src={logoSrc}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (!target.dataset.triedSvg) {
            target.dataset.triedSvg = 'true';
            target.src = '/images/logo.svg';
          }
        }}
        alt="Fitness First — Being Fit With Swapnil"
        className={`w-auto ${heightClasses[size]} object-contain object-left max-w-[340px] sm:max-w-[440px] transition-all`}
        loading="eager"
      />

      {enableUpload && (
        <>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/webp"
            onChange={handleFile}
            className="hidden"
            id="fitness-first-logo-file-picker"
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 left-0 bg-neutral-900/90 hover:bg-neutral-800 text-[10px] text-[#F5C21B] px-2 py-0.5 rounded border border-neutral-700 whitespace-nowrap z-50 cursor-pointer shadow-md"
            title="Click to replace with your exact logo file"
          >
            Upload exact logo file
          </button>
        </>
      )}
    </div>
  );
};

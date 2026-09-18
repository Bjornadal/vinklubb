import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenApplyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplyModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Salongen', href: '#salongen' },
    { label: 'Tasting-Ledger', href: '#arrangementer' },
    { label: 'Kjellerjournal', href: '#kjellerjournal' },
    { label: 'Vin-Kompass', href: '#vin-kompass' },
    { label: 'Et Sete ved Bordet', href: '#medlemskap' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-velvet-950/95 backdrop-blur-md editorial-border-b py-3 shadow-2xl'
          : 'bg-gradient-to-b from-velvet-950/90 via-velvet-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Discreet Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-editorial tracking-widest uppercase text-neutral-300 hover:text-brass-400 transition-colors py-1 relative"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Center: Bespoke Maison Identity */}
        <a href="#" className="flex flex-col items-center group text-center px-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl sm:text-3xl font-normal tracking-[0.25em] text-white group-hover:text-brass-300 transition-colors uppercase">
              66° Cuvée
            </span>
          </div>
          <span className="text-[9px] font-editorial tracking-widest-editorial text-brass-400 uppercase -mt-0.5">
            Salong på 66° 18′ N • Mo i Rana
          </span>
        </a>

        {/* Right: Secondary Nav & Bespoke Salon Action */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.slice(3).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-editorial tracking-widest uppercase text-neutral-300 hover:text-brass-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={onOpenApplyModal}
            className="text-[11px] font-editorial tracking-[0.2em] uppercase px-4 py-2 border border-brass-500/40 hover:border-brass-400 text-brass-300 hover:text-white bg-wine-950/30 hover:bg-wine-900/40 transition-all duration-300 rounded-none"
          >
            Søk Innvilgelse
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={onOpenApplyModal}
            className="text-[10px] font-editorial tracking-widest uppercase px-3 py-1.5 border border-brass-500/40 text-brass-300"
          >
            Søk Plass
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-300 hover:text-brass-400 transition-colors"
            aria-label="Meny"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-velvet-950/98 border-b border-brass-500/20 px-6 py-8 animate-fade-in">
          <div className="text-center mb-6 pb-4 border-b border-white/10">
            <span className="text-xs uppercase tracking-super-wide text-brass-400 font-editorial block">
              Caroline Skovholt • Mo i Rana
            </span>
          </div>
          <nav className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-editorial tracking-widest uppercase text-neutral-200 hover:text-brass-400 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal();
                }}
                className="w-full py-3 text-xs font-editorial tracking-[0.25em] uppercase bg-brass-500 text-neutral-950 hover:bg-brass-400"
              >
                Søk om Medlemskap
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

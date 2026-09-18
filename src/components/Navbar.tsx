import React, { useState, useEffect } from 'react';
import { Wine, Menu, X, Compass, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenApplyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplyModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Om Klubben', href: '#om-klubben' },
    { label: 'Kommende Smakinger', href: '#smakinger' },
    { label: 'Smaksarkiv', href: '#vinarkiv' },
    { label: 'Vinstil-test', href: '#vinstil-test' },
    { label: 'Medlemskap', href: '#medlemskap' },
    { label: 'Spørsmål', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-velvet-950/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-velvet-950/90 via-velvet-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gold-400/40 p-0.5 group-hover:border-gold-300 transition-all shadow-md group-hover:shadow-gold-500/20">
            <img
              src="./images/logo-crest.jpg"
              alt="66° Cuvée Emblem"
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl font-bold tracking-wider gold-gradient-text uppercase">
                66° Cuvée
              </span>
              <span className="text-[10px] font-semibold text-gold-400/80 uppercase px-1.5 py-0.5 rounded border border-gold-500/30 bg-wine-950/60">
                Mo i Rana
              </span>
            </div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 -mt-0.5 flex items-center gap-1">
              <Compass className="w-2.5 h-2.5 text-gold-400" />
              66° 18′ N • Vinklubb
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-neutral-300 hover:text-gold-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-gold-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenApplyModal}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-900/30 hover:shadow-gold-500/30 hover:scale-[1.02]"
          >
            <Wine className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
            <span>Søk Medlemskap</span>
            <Sparkles className="w-3 h-3 text-wine-900" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-gold-300 hover:bg-wine-900/30 transition-colors"
          aria-label="Meny"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-velvet-950/95 backdrop-blur-xl border-b border-gold-500/20 px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-200 hover:text-gold-300 py-1.5 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 shadow-md"
              >
                <Wine className="w-4 h-4" />
                <span>Søk Medlemskap i 66° Cuvée</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

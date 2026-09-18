import React from 'react';
import { Wine, Compass, ChevronDown, Sparkles, Calendar, Award } from 'lucide-react';
import { clubInfo } from '../data/clubInfo';

interface HeroProps {
  onOpenApplyModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApplyModal }) => {
  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Image with Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/hero-bg.jpg"
          alt="Atmospheric wine cellar tasting"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
        />
        {/* Multilayer gradient overlays for luxury contrast and depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-velvet-950 via-velvet-950/80 to-velvet-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-wine-950/90 via-transparent to-wine-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,176,90,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Polar Latitude Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gold-400/30 bg-wine-950/80 backdrop-blur-md text-gold-300 text-xs font-semibold tracking-widest uppercase mb-6 shadow-lg shadow-wine-950/80">
          <Compass className="w-3.5 h-3.5 text-gold-400 animate-spin-slow" />
          <span>{clubInfo.latitude} • {clubInfo.location}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          <span className="text-neutral-300">Leder: {clubInfo.leader.name}</span>
        </div>

        {/* Crest Emblem Showcase */}
        <div className="mb-6 relative group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-gold-400/50 bg-gradient-to-b from-wine-900 to-velvet-950 shadow-2xl shadow-gold-500/10 group-hover:border-gold-300 transition-all duration-500">
            <img
              src="./images/logo-crest.jpg"
              alt="66° Cuvée Emblem"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -inset-1 rounded-full bg-gold-400/10 filter blur-md -z-10 group-hover:bg-gold-400/25 transition-all duration-500" />
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="gold-gradient-text block mb-1 drop-shadow-md">66° CUVÉE</span>
          <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-light italic text-gold-100/90 font-normal">
            {clubInfo.tagline}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-neutral-300 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8">
          En nyoppstartet, raffinert vinklubb i Mo i Rana for nysgjerrige ganer, samlere og livsnytere. 
          Ledet med lidenskap og fagkunnskap av <span className="text-gold-200 font-medium">Caroline Skovholt</span>.
        </p>

        {/* Live Upcoming Event Teaser Pill */}
        <div className="mb-10 px-5 py-2.5 rounded-2xl glass-card inline-flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
          <div className="flex items-center gap-1.5 text-gold-400 font-medium">
            <Calendar className="w-4 h-4" />
            <span>Neste samling:</span>
          </div>
          <span className="text-white font-serif tracking-wide">Champagne i Mørketida (24. okt)</span>
          <span className="hidden sm:inline text-xs text-wine-300 bg-wine-900/60 px-2 py-0.5 rounded-full border border-wine-500/30">
            4 plasser igjen
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenApplyModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 transition-all duration-300 shadow-xl shadow-gold-950/50 hover:shadow-gold-500/30 flex items-center justify-center gap-2.5 hover:scale-[1.03]"
          >
            <Wine className="w-4 h-4" />
            <span>Bli Medlem / Meld Interesse</span>
            <Sparkles className="w-4 h-4 text-wine-900" />
          </button>

          <a
            href="#smakinger"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-gold-200 border border-gold-400/40 bg-wine-950/60 hover:bg-wine-900/40 hover:border-gold-300 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>Se Høstens Smakinger</span>
          </a>

          <a
            href="#vinstil-test"
            className="w-full sm:w-auto px-6 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span>Ta Vinstil-testen</span>
          </a>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 w-full max-w-4xl border-t border-gold-500/20 pt-10">
          {clubInfo.stats.map((stat) => (
            <div key={stat.label} className="text-center p-3 rounded-xl bg-velvet-900/40 border border-gold-500/10">
              <div className="font-serif text-2xl sm:text-3xl font-bold gold-gradient-text">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-gold-200/80 font-medium mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#om-klubben"
          aria-label="Rull ned"
          className="mt-12 text-gold-400/60 hover:text-gold-300 transition-colors animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

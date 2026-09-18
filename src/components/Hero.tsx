import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { clubInfo } from '../data/clubInfo';

interface HeroProps {
  onOpenApplyModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApplyModal }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden grain-overlay">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60rem] h-[35rem] bg-wine-900/20 rounded-full filter blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-12 left-10 w-96 h-96 bg-brass-500/5 rounded-full filter blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Editorial Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 editorial-border-b text-neutral-400 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-editorial uppercase tracking-widest text-brass-400 text-[11px]">
              {clubInfo.latitude} • Mo i Rana
            </span>
            <span className="text-white/20">|</span>
            <span className="font-serif italic text-neutral-300">
              Helgelands private vinforening
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-editorial uppercase tracking-widest text-neutral-400">
            <span>Grunnlagt av</span>
            <span className="text-brass-300 border-b border-brass-400/40 pb-0.5 font-medium">
              Caroline Skovholt
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Typographic Drama */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-1">
              <span className="text-xs font-editorial uppercase tracking-[0.4em] text-brass-400/90 block">
                Privat Salong & Vinklubb
              </span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display uppercase tracking-tight text-white leading-[0.9]">
                66° Cuvée<span className="text-brass-400 font-serif">.</span>
              </h1>
            </div>

            <p className="font-serif text-2xl sm:text-3xl text-brass-100 font-light italic leading-snug max-w-xl">
              "Hvor den arktiske vinterens mørke møter Europas mest tidløse vinkjellere."
            </p>

            <p className="text-neutral-300 font-serif text-base sm:text-lg font-light leading-relaxed max-w-xl pt-2">
              Når snøen legger seg over Ranfjorden og mørketida hersker på 66 grader nord, samles vi 
              rundt kandelabrene. 66° Cuvée er en kompromissløs salong for vinglede, 
              kunnskapsdeling og sjeldne årganger i Mo i Rana – ledet av Caroline Skovholt.
            </p>

            {/* Editorial Action Row */}
            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button
                onClick={onOpenApplyModal}
                className="px-8 py-4 bg-brass-400 text-neutral-950 font-editorial text-xs tracking-widest uppercase hover:bg-brass-300 transition-all duration-300 flex items-center gap-3 shadow-lg group"
              >
                <span>Søk om et sete ved bordet</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#arrangementer"
                className="text-xs font-editorial tracking-[0.2em] uppercase text-neutral-300 hover:text-brass-300 transition-colors py-3 border-b border-brass-500/30 hover:border-brass-400 inline-flex items-center gap-2"
              >
                <span>Utforsk Tasting-Ledgeren</span>
                <span className="text-brass-400">↓</span>
              </a>
            </div>

            {/* Discrete Micro Notations */}
            <div className="pt-6 grid grid-cols-3 gap-6 max-w-md border-t border-white/10 text-xs">
              <div>
                <span className="block font-editorial text-white text-base">35</span>
                <span className="text-[10px] font-serif italic text-neutral-400">faste seter i salongen</span>
              </div>
              <div>
                <span className="block font-editorial text-white text-base">8–10</span>
                <span className="text-[10px] font-serif italic text-neutral-400">årlige bordsettinger</span>
              </div>
              <div>
                <span className="block font-editorial text-white text-base">100%</span>
                <span className="text-[10px] font-serif italic text-neutral-400">terroir & historie</span>
              </div>
            </div>

          </div>

          {/* Right: Curated Visual Assemblage (Framed Art Direction) */}
          <div className="lg:col-span-5 relative">
            <div className="relative salon-card p-4 sm:p-6 editorial-border">
              
              {/* Image Frame with Editorial Matte */}
              <div className="relative overflow-hidden aspect-[4/5] bg-velvet-950">
                <img
                  src="./images/hero-bg.jpg"
                  alt="Stemningsfull vinsmaking i Mo i Rana"
                  className="w-full h-full object-cover object-center filter brightness-90 hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Embedded Crest Inscription */}
                <div className="absolute top-4 left-4 w-16 h-16 rounded-full overflow-hidden border border-brass-400/60 shadow-2xl p-0.5 bg-velvet-950/80 backdrop-blur-sm">
                  <img src="./images/logo-crest.jpg" alt="66° Cuvée Monogram" className="w-full h-full object-cover rounded-full" />
                </div>

                {/* Subtle Coordinate Stamp */}
                <div className="absolute bottom-4 right-4 text-[10px] font-editorial tracking-widest text-brass-200/90 uppercase px-2.5 py-1 bg-velvet-950/85 backdrop-blur-sm border border-brass-500/30">
                  Ranfjorden • Lat. 66° 18′ N
                </div>
              </div>

              {/* Brass Cartouche / Current Tasting Notice */}
              <div className="mt-4 pt-4 border-t border-brass-500/20 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-editorial uppercase tracking-widest text-brass-400 block mb-0.5">
                    Neste Bordsetting
                  </span>
                  <p className="font-serif text-white text-sm font-semibold">
                    Champagne i Mørketida • 24. Oktober
                  </p>
                  <p className="text-[11px] font-serif italic text-neutral-400">
                    Privat vinstue, Mo i Rana • 4 ledige plasser
                  </p>
                </div>
                
                <a
                  href="#arrangementer"
                  className="text-brass-300 hover:text-white p-2 border border-brass-500/30 hover:border-brass-400 transition-colors"
                  aria-label="Se arrangement"
                >
                  <ArrowDownRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Subtle background offset border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-brass-500/15 -z-10 hidden sm:block pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
};

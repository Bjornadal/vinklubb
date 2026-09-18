import React from 'react';
import { Quote, Sparkles, MapPin, Wine, Heart, Compass, CheckCircle2 } from 'lucide-react';
import { clubInfo } from '../data/clubInfo';

interface AboutSectionProps {
  onOpenApplyModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenApplyModal }) => {
  return (
    <section id="om-klubben" className="py-24 relative overflow-hidden">
      {/* Background subtleties */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute top-40 -left-60 w-96 h-96 rounded-full bg-wine-900/15 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-60 w-96 h-96 rounded-full bg-gold-600/10 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/20 bg-wine-950/70 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Compass className="w-3 h-3 text-gold-400" />
            <span>Historien & Filosofien</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            En vinklubb skapt med <span className="gold-gradient-text font-serif italic">hjerte for faget</span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
            Hvorfor "66° Cuvée"? Mo i Rana ligger ved 66° 18′ N – like under den mytiske Polarsirkelen. 
            Vi forener den arktiske naturens ro og mørke vintre med kontinentets mest sublime vintradisjoner.
          </p>
        </div>

        {/* Caroline Skovholt Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Caroline Portrait Image Column */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400/30 shadow-2xl shadow-wine-950/80 aspect-[3/4]">
              <img
                src="./images/caroline-skovholt.jpg"
                alt="Caroline Skovholt - Leder for 66° Cuvée"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/90 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card border border-gold-400/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-serif text-lg font-bold">Caroline Skovholt</h3>
                    <p className="text-gold-300 text-xs tracking-wider uppercase">{clubInfo.leader.title}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center">
                    <Wine className="w-5 h-5 text-gold-300" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient glow behind image */}
            <div className="absolute -inset-2 bg-gradient-to-r from-wine-600/20 to-gold-500/20 rounded-3xl filter blur-xl -z-10 opacity-70" />
          </div>

          {/* Biography & Vision Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-gold-400 uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>Mo i Rana, Helgeland • Grunnlagt 2026</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
              "Vin skal ikke være snobbete, men en kilde til undring, kunnskap og gode samtaler."
            </h3>

            {/* Leader Bio Paragraphs */}
            <div className="space-y-4 text-neutral-300 text-base font-light leading-relaxed">
              {clubInfo.leader.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Caroline's Quote Block */}
            <div className="p-6 rounded-2xl glass-card border-l-4 border-l-gold-400 relative">
              <Quote className="w-8 h-8 text-gold-400/30 absolute top-4 right-4" />
              <p className="font-serif italic text-gold-100 text-base sm:text-lg leading-relaxed mb-3">
                "{clubInfo.leader.quote}"
              </p>
              <div className="flex items-center gap-2 text-xs font-medium text-gold-400 uppercase tracking-wider">
                <span>— Caroline Skovholt, Vinklubbleder</span>
              </div>
            </div>

            {/* Caroline's Favorite Regions */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-3 font-semibold flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-wine-400" />
                <span>Carolines hjerteregioner:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {clubInfo.leader.favoriteRegions.map((region) => (
                  <span
                    key={region}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-gold-200 border border-gold-400/25 bg-wine-950/60"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenApplyModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-gold-300 to-gold-400 hover:from-gold-200 hover:to-gold-300 transition-all shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-wine-900" />
                <span>Søk om plass i klubben</span>
              </button>
              <a
                href="#smakinger"
                className="text-xs uppercase tracking-wider text-gold-300 hover:text-white transition-colors underline underline-offset-4"
              >
                Se smakingene vi planlegger →
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pillars Manifesto */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Klubbens Fire Grunnpilarer
            </h3>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto">
              Slik sikrer vi at hver kveld i 66° Cuvée blir en eksklusiv opplevelse uten like på Helgeland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubInfo.manifesto.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="glass-card glass-card-hover p-6 rounded-2xl relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-wine-800 to-wine-950 border border-gold-400/30 flex items-center justify-center mb-4 text-gold-300 font-serif font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-gold-400/80">
                  <CheckCircle2 className="w-3 h-3 text-gold-400" />
                  <span>Kvalitetsgaranti</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

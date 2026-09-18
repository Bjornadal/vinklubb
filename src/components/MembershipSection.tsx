import React from 'react';
import { ArrowRight } from 'lucide-react';
import { membershipTiers, MembershipTier } from '../data/membership';

interface MembershipSectionProps {
  onSelectTier: (tier: MembershipTier) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectTier }) => {
  const primaryTier = membershipTiers.find((t) => t.id === 'medlem') || membershipTiers[0];
  const patronTier = membershipTiers.find((t) => t.id === 'ambassador') || membershipTiers[1];
  const guestTier = membershipTiers.find((t) => t.id === 'gjest') || membershipTiers[2];

  return (
    <section id="medlemskap" className="py-28 relative editorial-border-t bg-velvet-950/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="mb-16 editorial-border-b pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-editorial uppercase tracking-[0.35em] text-brass-400 block mb-1">
              Kapittel V — Salongens Seter
            </span>
            <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-tight text-white">
              Et Sete ved Bordet
            </h2>
          </div>
          <p className="font-serif italic text-brass-200 text-sm sm:text-base max-w-sm">
            For å bevare intimiteten og kvaliteten på flaskene vi trekker opp korken på, 
            har salongen et strengt tak på 35 faste medlemmer.
          </p>
        </div>

        {/* Narrative Box on Exclusivity */}
        <div className="salon-card p-6 sm:p-8 editorial-border mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-brass-400/40 p-1 shrink-0 overflow-hidden">
              <img src="./images/logo-crest.jpg" alt="Emblem" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide">
                Hvorfor kun 35 medlemmer i Mo i Rana?
              </h3>
              <p className="font-serif text-neutral-300 text-sm font-light leading-relaxed">
                Når en sjelden Grand Cru fra Burgund eller en eldre Barolo Riserva åpnes, finnes det ofte 
                kun én eller to flasker tilgjengelig i hele landet. Ved å begrense medlemsmassen til 35 
                personer og samles i grupper på 12–16, sikrer vi at hver enkelt gjest får et raust glass 
                av kveldens ypperste dråper, og at samtalen rundt bordet forblir nær og levende.
              </p>
            </div>
          </div>
        </div>

        {/* Two-Column Asymmetrical Fellowship Cards (Not 3 SaaS pricing boxes!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto mb-14">
          
          {/* Main: Det Faste Medlemskapet (7 cols) */}
          <div className="lg:col-span-7 salon-card p-8 sm:p-10 editorial-border flex flex-col justify-between relative bg-gradient-to-b from-wine-950/60 to-velvet-950">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-brass-500/20">
                <span className="text-[10px] font-editorial uppercase tracking-widest text-brass-400">
                  Hovedopptak • 35 Seter
                </span>
                <span className="font-serif text-xs text-neutral-400 italic">
                  Sesong 2026/2027
                </span>
              </div>

              <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-2">
                {primaryTier.name}
              </h3>
              <p className="font-serif text-sm text-neutral-300 font-light leading-relaxed mb-6">
                {primaryTier.subtitle}
              </p>

              <div className="mb-6 pb-6 border-b border-white/5">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl text-white">
                    {primaryTier.price}
                  </span>
                  <span className="font-serif text-xs text-neutral-400 italic">
                    {primaryTier.period}
                  </span>
                </div>
                <span className="text-[10px] font-editorial uppercase tracking-widest text-brass-400 block mt-1">
                  Inkluderer fortrinnsrett og medlemspris på alle smakinger
                </span>
              </div>

              <div className="space-y-3 mb-8">
                <span className="text-[10px] font-editorial uppercase tracking-widest text-neutral-400 block">
                  Salongistens Rettigheter:
                </span>
                {primaryTier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 font-serif text-sm text-neutral-200">
                    <span className="text-brass-400 font-serif">†</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelectTier(primaryTier)}
              className="w-full py-4 bg-brass-400 text-neutral-950 font-editorial text-xs uppercase tracking-widest hover:bg-brass-300 transition-all flex items-center justify-center gap-2"
            >
              <span>Søk om fast medlemskap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Secondary: Ambassadør & Gjesteliste (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Grand Cru Ambassadør */}
            <div className="salon-card p-6 sm:p-7 editorial-border flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-editorial uppercase tracking-widest text-brass-400 block mb-1">
                  Spesialallokering
                </span>
                <h4 className="font-display text-2xl text-white uppercase tracking-wide mb-1">
                  {patronTier.name}
                </h4>
                <p className="font-serif text-xs text-neutral-400 leading-relaxed mb-4">
                  For samleren som ønsker personlig konsultasjon, garanterte plasser på jubileumsmiddager og tilgang til Carolines private kjellerarkiv.
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-2xl text-white">{patronTier.price}</span>
                  <span className="font-serif text-xs text-neutral-500 italic">{patronTier.period}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectTier(patronTier)}
                className="w-full py-2.5 border border-brass-500/40 text-brass-300 hover:text-white hover:border-brass-400 font-editorial text-[11px] uppercase tracking-widest transition-colors"
              >
                Utforsk Ambassadørplass
              </button>
            </div>

            {/* Gjestelisten */}
            <div className="p-6 border border-white/10 bg-velvet-900/40 space-y-3">
              <span className="text-[9px] font-editorial uppercase tracking-widest text-neutral-400 block">
                Uforpliktende
              </span>
              <h4 className="font-display text-xl text-white uppercase tracking-wide">
                {guestTier.name}
              </h4>
              <p className="font-serif text-xs text-neutral-300 font-light leading-relaxed">
                Ønsker du å delta på en enkeltstående smaking før du binder deg? Før deg opp på gjestelisten for restplasser og åpne introduksjonskvelder.
              </p>
              <button
                onClick={() => onSelectTier(guestTier)}
                className="text-xs font-editorial uppercase tracking-widest text-brass-400 hover:text-white border-b border-brass-500/30 pb-0.5 inline-flex items-center gap-1.5"
              >
                <span>Sett deg på gjestelisten</span>
                <span>→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

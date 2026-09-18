import React from 'react';
import { Sparkles, Check, Crown, ShieldCheck, ArrowRight } from 'lucide-react';
import { membershipTiers, MembershipTier } from '../data/membership';

interface MembershipSectionProps {
  onSelectTier: (tier: MembershipTier) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="medlemskap" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/20 bg-wine-950/70 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Crown className="w-3 h-3 text-gold-400" />
            <span>Eksklusivitet & Fellesskap</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Bli en del av <span className="gold-gradient-text italic font-serif">66° Cuvée</span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            For å bevare intimiteten og kvaliteten på flaskene vi åpner, har klubben et tak på 
            <strong className="text-gold-300 font-normal"> maksimalt 35 faste medlemmer</strong>. 
            Opptak skjer løpende etter søknad og interesse.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {membershipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? 'bg-gradient-to-b from-wine-900/80 via-velvet-950 to-velvet-950 border-2 border-gold-400 shadow-2xl shadow-gold-500/10 lg:-translate-y-2'
                  : 'glass-card border border-gold-500/20 hover:border-gold-400/40'
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-gold-300 to-gold-500 text-neutral-950 shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                {/* Title & Subtitle */}
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-neutral-300 font-light mb-6 min-h-[36px]">
                  {tier.subtitle}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-4xl font-extrabold text-white">
                      {tier.price}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {tier.period}
                    </span>
                  </div>
                </div>

                {/* Core Features */}
                <div className="space-y-3 mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold block">
                    Inkluderte goder:
                  </span>
                  {tier.features.map((feature, i) => (
                    <div key={i} className="text-xs text-neutral-200 flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-gold-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Exclusive Perks */}
                {tier.exclusivePerks.length > 0 && (
                  <div className="pt-4 border-t border-white/5 space-y-2 mb-8">
                    <span className="text-[11px] uppercase tracking-wider text-gold-300 font-semibold block flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-gold-400" />
                      <span>Spesielle privilegier:</span>
                    </span>
                    {tier.exclusivePerks.map((perk, i) => (
                      <div key={i} className="text-xs text-gold-100/90 italic font-serif flex items-start gap-2">
                        <span className="text-gold-400">★</span>
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectTier(tier)}
                className={`w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-gold-300 to-gold-400 text-neutral-950 hover:from-gold-200 hover:to-gold-300 shadow-md hover:scale-[1.02]'
                    : 'border border-gold-400/40 text-gold-200 hover:bg-wine-900/40 hover:border-gold-300'
                }`}
              >
                <span>Velg {tier.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="max-w-2xl mx-auto p-5 rounded-2xl bg-velvet-900/60 border border-gold-500/20 text-center flex items-center justify-center gap-3 text-xs text-neutral-300">
          <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
          <span>
            Ingen bindingstid utover avtalt halvår. Caroline tar personlig kontakt med alle søkere for en hyggelig vinprat før bekreftelse.
          </span>
        </div>

      </div>
    </section>
  );
};

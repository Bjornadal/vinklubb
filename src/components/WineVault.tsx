import React, { useState } from 'react';
import { Wine, Search, Award, Sparkles, X, Utensils } from 'lucide-react';
import { cellarWines, WineItem } from '../data/wines';

export const WineVault: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeWineModal, setActiveWineModal] = useState<WineItem | null>(null);

  const categories = ['Alle', 'Rødvin', 'Hvitvin', 'Musserende', 'Naturvin'];

  const filteredWines = cellarWines.filter((wine) => {
    const matchesCategory = selectedCategory === 'Alle' || wine.type === selectedCategory;
    const matchesSearch =
      wine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wine.producer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wine.grape.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wine.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="vinarkiv" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/20 bg-wine-950/70 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Wine className="w-3 h-3 text-gold-400" />
            <span>Carolines Kurerte Smaksarkiv</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Dråpene vi har <span className="gold-gradient-text italic font-serif">elsket & utforsket</span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            I 66° Cuvée fører vi en levende smakslogg over vinene vi åpner og diskuterer. 
            Her finner du smaksnotater, profil og matanbefalinger kuratert av Caroline Skovholt.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-neutral-950 font-semibold shadow-md'
                    : 'bg-wine-950/40 text-neutral-300 border border-gold-500/15 hover:border-gold-400/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Søk på vin, drue, produsent..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-velvet-900/80 border border-gold-500/20 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400/70 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Wines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredWines.map((wine) => (
            <div
              key={wine.id}
              onClick={() => setActiveWineModal(wine)}
              className="glass-card glass-card-hover rounded-2xl p-6 cursor-pointer flex flex-col justify-between border border-gold-500/15 hover:border-gold-400/40 group relative"
            >
              <div>
                {/* Top Badge: Vintage & Score */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold tracking-wider text-gold-400 uppercase bg-wine-950/80 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                    {wine.type} • {wine.vintage}
                  </span>
                  <div className="flex items-center gap-1 text-gold-300 bg-wine-900/60 px-2 py-0.5 rounded-full border border-gold-400/30 text-xs font-serif font-bold">
                    <Award className="w-3.5 h-3.5 text-gold-400" />
                    <span>{wine.score}/100</span>
                  </div>
                </div>

                {/* Wine Name & Producer */}
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-200 transition-colors mb-1">
                  {wine.name}
                </h3>
                <p className="text-xs text-gold-300/80 font-medium mb-2">
                  {wine.producer}
                </p>
                <p className="text-[11px] text-neutral-400 mb-4">
                  {wine.region}, {wine.country} • {wine.grape}
                </p>

                {/* Caroline's note snippet */}
                <p className="text-xs text-neutral-300 italic font-serif leading-relaxed line-clamp-3 mb-4 bg-wine-950/30 p-3 rounded-xl border border-white/5">
                  "{wine.notesByCaroline}"
                </p>

                {/* Aroma Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {wine.aromas.slice(0, 3).map((aroma, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-velvet-900/60 text-gold-200/90 border border-gold-500/15"
                    >
                      {aroma}
                    </span>
                  ))}
                  {wine.aromas.length > 3 && (
                    <span className="text-[10px] text-neutral-400 self-center">
                      +{wine.aromas.length - 3} til
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gold-300/80 font-medium">
                <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Se full smaksprofil →
                </span>
                <span className="text-[11px] text-neutral-400">{wine.alcohol}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredWines.length === 0 && (
          <div className="text-center py-16 text-neutral-400 text-sm">
            Ingen viner matchet søket ditt "{searchQuery}". Prøv et annet søkeord eller velg 'Alle'.
          </div>
        )}

      </div>

      {/* Wine Detail Modal */}
      {activeWineModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-velvet-950 border border-gold-500/40 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            
            {/* Close button */}
            <button
              onClick={() => setActiveWineModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-wine-900/50 hover:bg-wine-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold px-2.5 py-0.5 rounded bg-wine-900/60 border border-gold-500/20">
                {activeWineModal.type} • Årgang {activeWineModal.vintage}
              </span>
              <span className="text-xs text-gold-300 font-serif font-bold">
                Poeng: {activeWineModal.score}/100
              </span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-white mb-1">
              {activeWineModal.name}
            </h3>
            <p className="text-sm text-gold-300 font-medium mb-4">
              {activeWineModal.producer} — {activeWineModal.region}, {activeWineModal.country}
            </p>

            {/* Profile Bars */}
            <div className="bg-velvet-900/70 p-4 rounded-2xl border border-gold-500/20 mb-6 space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-gold-400 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Smaksprofil (1–5)</span>
              </h4>

              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span>Fruktkonsentrasjon</span>
                    <span className="text-gold-300 font-medium">{activeWineModal.profile.fruit}/5</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-wine-500 to-gold-400 rounded-full"
                      style={{ width: `${(activeWineModal.profile.fruit / 5) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span>Syrespenst & Friskhet</span>
                    <span className="text-gold-300 font-medium">{activeWineModal.profile.acidity}/5</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold-400 to-gold-300 rounded-full"
                      style={{ width: `${(activeWineModal.profile.acidity / 5) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span>Fylde & Tekstur</span>
                    <span className="text-gold-300 font-medium">{activeWineModal.profile.body}/5</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-wine-600 to-wine-400 rounded-full"
                      style={{ width: `${(activeWineModal.profile.body / 5) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span>Tanninstruktur / Bobler</span>
                    <span className="text-gold-300 font-medium">{activeWineModal.profile.tannin}/5</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold-500 to-wine-500 rounded-full"
                      style={{ width: `${(activeWineModal.profile.tannin / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Caroline's full note */}
            <div className="mb-6 p-4 rounded-2xl glass-card border border-gold-500/20">
              <h4 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">
                Carolines Smaksnotat:
              </h4>
              <p className="font-serif italic text-neutral-200 text-sm leading-relaxed">
                "{activeWineModal.notesByCaroline}"
              </p>
            </div>

            {/* Aromas & Food pairing */}
            <div className="space-y-4 text-xs text-neutral-300 mb-6">
              <div>
                <strong className="text-white block mb-1.5 uppercase tracking-wider text-[11px]">
                  Fremtredende Aromer:
                </strong>
                <div className="flex flex-wrap gap-1.5">
                  {activeWineModal.aromas.map((aroma, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-wine-950 text-gold-200 border border-gold-500/20">
                      {aroma}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-velvet-900/60 border border-white/5 flex items-start gap-2.5">
                <Utensils className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Anbefalt Matopplevelse:</strong>
                  <span>{activeWineModal.recommendedPairing}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveWineModal(null)}
              className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-400 text-neutral-950 hover:bg-gold-300 transition-colors"
            >
              Lukk Smaksnotat
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

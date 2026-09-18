import React, { useState } from 'react';
import { cellarWines, WineItem } from '../data/wines';
import { Search, X } from 'lucide-react';

export const WineVault: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('Alle');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeWineModal, setActiveWineModal] = useState<WineItem | null>(null);

  const types = ['Alle', 'Rødvin', 'Hvitvin', 'Musserende', 'Naturvin'];

  const filteredWines = cellarWines.filter((wine) => {
    const matchesType = selectedType === 'Alle' || wine.type === selectedType;
    const matchesQuery =
      wine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wine.producer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wine.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wine.grape.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesQuery;
  });

  return (
    <section id="kjellerjournal" className="py-28 relative editorial-border-t bg-velvet-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="mb-16 editorial-border-b pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-editorial uppercase tracking-[0.35em] text-brass-400 block mb-1">
              Kapittel III — Smaksarkivet
            </span>
            <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-tight text-white">
              Carolines Kjellerjournal
            </h2>
          </div>
          <p className="font-serif italic text-brass-200 text-sm sm:text-base max-w-sm">
            Hver flaske som åpnes i salongen føres inn i vårt arkiv med detaljerte feltnotater og serveringsråd.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-10 border-b border-brass-500/15">
          {/* Types */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-1.5 text-xs font-editorial uppercase tracking-wider transition-all ${
                  selectedType === type
                    ? 'border-b-2 border-brass-400 text-white font-medium'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Minimalist Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-brass-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Søk drue, vinmark, årgang..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-transparent border-b border-brass-500/30 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brass-400 transition-colors font-serif"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Journal Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWines.map((wine) => (
            <div
              key={wine.id}
              onClick={() => setActiveWineModal(wine)}
              className="salon-card salon-card-interactive p-6 cursor-pointer flex flex-col justify-between group relative"
            >
              <div>
                {/* Vintage & Classification Header */}
                <div className="flex items-center justify-between text-[10px] font-editorial uppercase tracking-widest text-brass-400 pb-3 mb-4 border-b border-white/5">
                  <span>{wine.type} • {wine.vintage}</span>
                  <span className="font-serif italic text-white text-xs">{wine.score}/100 p</span>
                </div>

                {/* Wine Title & Producer */}
                <h3 className="font-display text-2xl text-white uppercase tracking-wide group-hover:text-brass-300 transition-colors mb-1">
                  {wine.name}
                </h3>
                <p className="font-editorial text-xs text-brass-400/90 tracking-wider uppercase mb-3">
                  {wine.producer}
                </p>

                <p className="text-[11px] font-serif text-neutral-400 mb-4">
                  {wine.region}, {wine.country} • {wine.grape}
                </p>

                {/* Caroline's Tasting Excerpt */}
                <p className="font-serif italic text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-6 bg-wine-950/30 p-3 border-l-2 border-brass-500/30">
                  «{wine.notesByCaroline}»
                </p>

                {/* Aromas */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {wine.aromas.map((aroma, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-editorial tracking-wider text-neutral-300 px-2 py-0.5 border border-white/10"
                    >
                      {aroma}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-editorial uppercase tracking-wider text-brass-400 group-hover:text-brass-200">
                <span>Åpne Sommelier-notat</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Sommelier Dossier Modal */}
      {activeWineModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="bg-velvet-950 border border-brass-500/40 max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            
            <button
              onClick={() => setActiveWineModal(null)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-[10px] font-editorial uppercase tracking-widest text-brass-400 mb-2">
              Kjellerarkiv • Feltnotat #{activeWineModal.id}
            </div>

            <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-1">
              {activeWineModal.name}
            </h3>
            <p className="font-editorial text-xs text-brass-300 uppercase tracking-widest mb-6">
              {activeWineModal.producer} • {activeWineModal.vintage} • {activeWineModal.region}
            </p>

            {/* Tasting Note */}
            <div className="p-4 border-l-2 border-brass-400 bg-velvet-900/60 mb-6">
              <span className="text-[10px] font-editorial uppercase tracking-widest text-brass-400 block mb-1">
                Carolines Vurdering & Poeng: {activeWineModal.score} / 100
              </span>
              <p className="font-serif italic text-base text-neutral-200 leading-relaxed">
                «{activeWineModal.notesByCaroline}»
              </p>
            </div>

            {/* Sensory Balance */}
            <div className="p-4 border border-brass-500/20 bg-velvet-900/40 space-y-3 mb-6 text-xs">
              <span className="font-editorial uppercase tracking-widest text-brass-300 text-[10px] block">
                Sensorisk Balanse i Glasset
              </span>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-neutral-300 text-[11px] mb-1">
                    <span>Fruktkonsentrasjon</span>
                    <span>{activeWineModal.profile.fruit} / 5</span>
                  </div>
                  <div className="w-full h-1 bg-white/10">
                    <div className="h-full bg-brass-400" style={{ width: `${(activeWineModal.profile.fruit / 5) * 100}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 text-[11px] mb-1">
                    <span>Syrespenst & Mineralitet</span>
                    <span>{activeWineModal.profile.acidity} / 5</span>
                  </div>
                  <div className="w-full h-1 bg-white/10">
                    <div className="h-full bg-brass-400" style={{ width: `${(activeWineModal.profile.acidity / 5) * 100}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 text-[11px] mb-1">
                    <span>Kropp & Munnfølelse</span>
                    <span>{activeWineModal.profile.body} / 5</span>
                  </div>
                  <div className="w-full h-1 bg-white/10">
                    <div className="h-full bg-brass-400" style={{ width: `${(activeWineModal.profile.body / 5) * 100}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 text-[11px] mb-1">
                    <span>Tanninstruktur / Bobler</span>
                    <span>{activeWineModal.profile.tannin} / 5</span>
                  </div>
                  <div className="w-full h-1 bg-white/10">
                    <div className="h-full bg-brass-400" style={{ width: `${(activeWineModal.profile.tannin / 5) * 100}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Pairing */}
            <div className="p-4 border border-white/10 bg-velvet-900/60 mb-6 text-xs text-neutral-300 space-y-1">
              <span className="font-editorial uppercase tracking-widest text-brass-400 block text-[10px]">
                Anbefalt Gastronomisk Møte:
              </span>
              <p className="font-serif text-sm text-white">
                {activeWineModal.recommendedPairing}
              </p>
            </div>

            <button
              onClick={() => setActiveWineModal(null)}
              className="w-full py-3 bg-brass-400 text-neutral-950 font-editorial text-xs uppercase tracking-widest hover:bg-brass-300"
            >
              Lukk Notat
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

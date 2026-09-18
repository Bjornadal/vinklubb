import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Wine, Utensils, Sparkles, Check, ArrowRight } from 'lucide-react';
import { upcomingEvents, WineEvent } from '../data/events';

interface EventsSectionProps {
  onSelectEvent: (event: WineEvent) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onSelectEvent }) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('Alle');

  const themes = ['Alle', 'Musserende & Fransk Champagne', 'Pinot Noir & Chardonnay', 'Nebbiolo Masterclass', 'Interaktiv Blindsmaking'];

  const filteredEvents = selectedTheme === 'Alle'
    ? upcomingEvents
    : upcomingEvents.filter(e => e.theme === selectedTheme);

  return (
    <section id="smakinger" className="py-24 relative bg-velvet-950/60">
      {/* Subtle top/bottom borders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/20 bg-wine-950/70 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Calendar className="w-3 h-3 text-gold-400" />
            <span>Kommende Arrangementer i Mo i Rana</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Eksklusive Samlinger & <span className="gold-gradient-text italic font-serif">Vinsmakinger</span>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            Hver smaking er en gjennomtenkt opplevelse med introduksjon fra Caroline, kompromissløse viner, 
            tilpasset gastronomi og intime rammer.
          </p>
        </div>

        {/* Theme Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                selectedTheme === theme
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-neutral-950 shadow-md font-semibold'
                  : 'bg-wine-950/40 text-neutral-300 border border-gold-500/15 hover:border-gold-400/40 hover:text-white'
              }`}
            >
              {theme}
            </button>
          ))}
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-gold-500/20 group"
            >
              {/* Background delicate wine glow */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-wine-700/10 filter blur-2xl group-hover:bg-wine-600/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header: Date & Spots */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-gold-300 text-xs sm:text-sm font-medium">
                    <Calendar className="w-4 h-4 text-gold-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-wine-900/60 text-wine-200 border border-wine-500/30">
                    <Users className="w-3.5 h-3.5" />
                    <span>Kun {event.spotsLeft} av {event.spotsTotal} plasser igjen</span>
                  </div>
                </div>

                {/* Event Title & Subtitle */}
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400/80 mb-1 block">
                  {event.theme}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-gold-200 transition-colors">
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm text-gold-300/80 font-serif italic mb-4">
                  {event.subtitle}
                </p>

                {/* Description */}
                <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Wine Highlights Pills */}
                <div className="mb-6 bg-wine-950/50 p-4 rounded-2xl border border-gold-500/10">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gold-400 uppercase tracking-wider mb-2.5">
                    <Wine className="w-3.5 h-3.5" />
                    <span>Utvalgte viner på smakingen:</span>
                  </div>
                  <ul className="space-y-1.5">
                    {event.wineHighlights.map((wine, i) => (
                      <li key={i} className="text-xs text-neutral-200 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-gold-400 mt-0.5 shrink-0" />
                        <span>{wine}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details list (Location, Food, Time) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>Tidspunkt: {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="sm:col-span-2 flex items-start gap-2">
                    <Utensils className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span><strong className="text-neutral-200">Servering:</strong> {event.foodPairing}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & Booking button */}
              <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-neutral-400">Egenandel per person:</div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-2xl font-bold text-white">
                      {event.priceMember}
                    </span>
                    <span className="text-[11px] text-gold-400 uppercase tracking-wider font-semibold">
                      (medlemspris)
                    </span>
                    <span className="text-xs text-neutral-400">
                      / {event.priceGuest} gjest
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectEvent(event)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-gold-300 to-gold-400 hover:from-gold-200 hover:to-gold-300 transition-all shadow-md flex items-center gap-2"
                >
                  <span>Reserver Plass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Feature Experience Showcase Banner */}
        <div className="rounded-3xl overflow-hidden glass-card border border-gold-500/25 p-8 md:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Kvalitet i alle ledd</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Riedel Krystall, Karaffering & Nordisk Gastronomi
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                Hver dråpe fortjener respekt. Under 66° Cuvées samlinger serveres vinene i korrekt temperatur og i 
                druespesifikke Riedel-glass. Vi legger stor vekt på munnfølelse, modning og harmoniske munnfuller 
                som hever sansene til et nytt nivå.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-gold-200">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-gold-400" /> WSET-inspirert metodikk
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-gold-400" /> Smaksnotathefte inkludert
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-gold-400" /> Private lokaler i Mo i Rana
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/30">
              <img
                src="./images/tasting-flight.jpg"
                alt="Curated Wine Flight Tasting Experience"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { WineEvent, upcomingEvents } from '../data/events';
import { ArrowRight } from 'lucide-react';

interface EventsSectionProps {
  onSelectEvent: (event: WineEvent) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onSelectEvent }) => {
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);
  const activeEvent = upcomingEvents[activeEventIndex];

  return (
    <section id="arrangementer" className="py-28 relative editorial-border-t bg-velvet-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="mb-16 editorial-border-b pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-editorial uppercase tracking-[0.35em] text-brass-400 block mb-1">
              Kapittel II — Sesongens Bordsettinger
            </span>
            <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-tight text-white">
              Tasting-Ledger 2026 / 2027
            </h2>
          </div>
          <p className="font-serif italic text-brass-200 text-sm sm:text-base max-w-sm">
            Kuraterte samlinger i intime rom i Mo i Rana. Hver aften har et strengt begrenset antall gjester.
          </p>
        </div>

        {/* Ledger Layout: Master Index on Left, Active Detailed Dossier on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tasting Ledger Index (Interactive ledger list) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-editorial uppercase tracking-widest text-neutral-400 block mb-3">
              Velg samling for full briefing:
            </span>

            {upcomingEvents.map((event, idx) => {
              const isSelected = activeEventIndex === idx;
              return (
                <button
                  key={event.id}
                  onClick={() => setActiveEventIndex(idx)}
                  className={`w-full text-left p-5 transition-all duration-500 editorial-border flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-wine-900/40 border-brass-400 shadow-xl'
                      : 'bg-velvet-900/40 border-white/10 hover:border-brass-500/40 hover:bg-velvet-900/80'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-editorial text-[11px] uppercase tracking-widest text-brass-400">
                      0{idx + 1} • {event.date.split(' ')[0]} {event.date.split(' ')[1]}
                    </span>
                    <span className="text-[10px] font-serif italic text-neutral-400">
                      {event.spotsLeft} ledige seter
                    </span>
                  </div>

                  <h3 className={`font-display text-xl sm:text-2xl uppercase tracking-wide transition-colors ${
                    isSelected ? 'text-white' : 'text-neutral-300 group-hover:text-brass-200'
                  }`}>
                    {event.title}
                  </h3>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 font-serif italic">
                    <span>{event.theme}</span>
                    <span className="text-brass-300 not-italic font-editorial tracking-wider text-[11px]">
                      {event.priceMember} <span className="text-[9px] text-neutral-500">/ {event.priceGuest}</span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Event Dossier */}
          <div className="lg:col-span-7 salon-card p-6 sm:p-10 editorial-border relative">
            
            {/* Dossier Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-brass-500/20">
              <div>
                <span className="text-[10px] font-editorial uppercase tracking-widest text-brass-400 block mb-1">
                  Bordsetting Dossier — 66° Cuvée
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide">
                  {activeEvent.title}
                </h3>
                <p className="font-serif italic text-brass-200 text-sm mt-0.5">
                  {activeEvent.subtitle}
                </p>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-editorial uppercase tracking-widest text-neutral-400 block">
                  Kapasitet
                </span>
                <span className="font-editorial text-lg text-white">
                  {activeEvent.spotsTotal - activeEvent.spotsLeft} / {activeEvent.spotsTotal} seter
                </span>
                <span className="block text-[10px] text-wine-300 font-serif italic">
                  ({activeEvent.spotsLeft} plasser gjenstår)
                </span>
              </div>
            </div>

            {/* Event Description */}
            <div className="space-y-6">
              <p className="font-serif text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                {activeEvent.description}
              </p>

              {/* The Pours (Vinmenyen) */}
              <div className="p-5 border border-brass-500/20 bg-wine-950/40 space-y-3">
                <div className="flex items-center justify-between text-xs font-editorial uppercase tracking-widest text-brass-300 pb-2 border-b border-brass-500/15">
                  <span>Kveldens Utvalgte Flasker</span>
                  <span className="font-serif italic text-neutral-400">Kuratering: Caroline Skovholt</span>
                </div>

                <ul className="space-y-2">
                  {activeEvent.wineHighlights.map((wine, i) => (
                    <li key={i} className="flex items-start gap-2.5 font-serif text-sm text-neutral-200">
                      <span className="text-brass-400 font-editorial text-xs mt-0.5">0{i+1}.</span>
                      <span>{wine}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Logistics & Practicalities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-300 pt-2">
                <div className="p-3.5 border border-white/10 bg-velvet-900/60 space-y-1">
                  <span className="font-editorial uppercase tracking-widest text-neutral-400 block text-[10px]">
                    Dato & Tid
                  </span>
                  <p className="font-serif text-white text-sm">
                    {activeEvent.date}
                  </p>
                  <p className="text-neutral-400 font-serif italic">
                    Klokken {activeEvent.time}
                  </p>
                </div>

                <div className="p-3.5 border border-white/10 bg-velvet-900/60 space-y-1">
                  <span className="font-editorial uppercase tracking-widest text-neutral-400 block text-[10px]">
                    Lokasjon & Kleskode
                  </span>
                  <p className="font-serif text-white text-sm">
                    {activeEvent.location}
                  </p>
                  <p className="text-neutral-400 font-serif italic">
                    {activeEvent.dressCode}
                  </p>
                </div>

                <div className="sm:col-span-2 p-3.5 border border-white/10 bg-velvet-900/60 space-y-1">
                  <span className="font-editorial uppercase tracking-widest text-neutral-400 block text-[10px]">
                    Gastronomi & Servering
                  </span>
                  <p className="font-serif text-neutral-200 text-sm">
                    {activeEvent.foodPairing}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-brass-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-editorial uppercase tracking-widest text-neutral-400 block">
                    Kuvertpris
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl text-white">
                      {activeEvent.priceMember}
                    </span>
                    <span className="font-editorial text-[10px] text-brass-400 uppercase tracking-widest">
                      (medlem)
                    </span>
                    <span className="text-xs text-neutral-400 font-serif">
                      / {activeEvent.priceGuest} (gjest)
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectEvent(activeEvent)}
                  className="w-full sm:w-auto px-7 py-3.5 bg-brass-400 text-neutral-950 font-editorial text-xs uppercase tracking-widest hover:bg-brass-300 transition-all flex items-center justify-center gap-2 shadow"
                >
                  <span>Reserver plass for {activeEvent.date.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Editorial Photography Feature: The Stemware & Ambiance */}
        <div className="mt-16 pt-12 border-t border-brass-500/15 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 relative aspect-[16/9] overflow-hidden editorial-border">
            <img
              src="./images/tasting-flight.jpg"
              alt="Kuratert vinflight på skifer"
              className="w-full h-full object-cover filter contrast-[1.02] hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="md:col-span-5 space-y-4">
            <span className="text-[10px] font-editorial uppercase tracking-super-wide text-brass-400 block">
              Håndverket i Glasset
            </span>
            <h4 className="font-display text-2xl text-white uppercase tracking-wide">
              Munnblåst Krystall & Lufting
            </h4>
            <p className="font-serif text-neutral-300 text-base font-light leading-relaxed">
              En stor årgang krever rom til å utfolde seg. Hver samling i 66° Cuvée skjer med 
              optimal temperatur og tilpasset krystall for druens særegenhet. Vi gir vinen tid i 
              karaffelen og ro rundt bordet.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

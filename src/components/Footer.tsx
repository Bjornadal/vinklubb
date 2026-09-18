import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { clubInfo } from '../data/clubInfo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-velvet-950 editorial-border-t pt-20 pb-12 overflow-hidden text-neutral-400 text-xs">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-48 bg-wine-900/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Imprint Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-brass-500/15">
          
          {/* Brand Presentation (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-brass-400/40 p-0.5 overflow-hidden">
                <img src="./images/logo-crest.jpg" alt="66° Cuvée Emblem" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <span className="font-display text-2xl tracking-[0.2em] text-white uppercase block">
                  66° Cuvée
                </span>
                <span className="text-[9px] font-editorial uppercase tracking-widest text-brass-400">
                  Mo i Rana • Polarsirkelen
                </span>
              </div>
            </div>

            <p className="font-serif text-neutral-300 text-sm font-light leading-relaxed max-w-sm">
              En privat vinklubb og salong dedikert til vinkunnskap, sjeldne årganger og gode samtaler 
              i Mo i Rana. Grunnlagt og ledet av Caroline Skovholt.
            </p>

            <div className="pt-2 text-[10px] font-editorial uppercase tracking-widest text-neutral-500">
              Koordinater: {clubInfo.latitude} • Helgeland, Norge
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-editorial text-[10px] uppercase tracking-[0.25em] text-brass-300">
              Salongens Indeks
            </h4>
            <ul className="space-y-2 font-serif text-sm">
              <li>
                <a href="#salongen" className="hover:text-brass-300 transition-colors">
                  Kapittel I — Filosofien & Caroline
                </a>
              </li>
              <li>
                <a href="#arrangementer" className="hover:text-brass-300 transition-colors">
                  Kapittel II — Tasting-Ledgeren
                </a>
              </li>
              <li>
                <a href="#kjellerjournal" className="hover:text-brass-300 transition-colors">
                  Kapittel III — Kjellerjournalen
                </a>
              </li>
              <li>
                <a href="#vin-kompass" className="hover:text-brass-300 transition-colors">
                  Kapittel IV — Det Arktiske Vin-Kompasset
                </a>
              </li>
              <li>
                <a href="#medlemskap" className="hover:text-brass-300 transition-colors">
                  Kapittel V — Et Sete ved Bordet
                </a>
              </li>
            </ul>
          </div>

          {/* Salongens Sirkulære (Newsletter) (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-editorial text-[10px] uppercase tracking-[0.25em] text-brass-300">
              Salongens Sirkulære
            </h4>
            <p className="font-serif text-neutral-300 text-xs font-light leading-relaxed">
              Motta Carolines månedlige skriv om årganger, kjelelagring og invitasjoner til spesielle bordsettinger.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="flex border-b border-brass-500/40 focus-within:border-brass-300 transition-colors">
                <input
                  type="email"
                  required
                  placeholder="Deres e-postadresse..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 bg-transparent text-white placeholder-neutral-500 text-xs focus:outline-none font-serif"
                />
                <button
                  type="submit"
                  className="px-3 text-brass-400 hover:text-white transition-colors"
                  aria-label="Abonner"
                >
                  {subscribed ? <Check className="w-4 h-4 text-brass-300" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
              {subscribed && (
                <span className="text-[10px] font-serif italic text-brass-300 block">
                  Deres adresse er notert i Carolines sirkulære.
                </span>
              )}
            </form>

            <div className="pt-2 text-[10px] font-serif italic text-neutral-500">
              Direkte kontakt: <a href="mailto:caroline@66cuvee.no" className="text-neutral-400 hover:text-brass-300">caroline@66cuvee.no</a>
            </div>
          </div>

        </div>

        {/* Lower Imprint Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-editorial uppercase tracking-widest text-neutral-500">
          <div>
            © {new Date().getFullYear()} 66° Cuvée • Mo i Rana. Alle rettigheter forbeholdt.
          </div>
          <div>
            Designet eksklusivt for salongens venner under Polarsirkelen
          </div>
        </div>

      </div>
    </footer>
  );
};

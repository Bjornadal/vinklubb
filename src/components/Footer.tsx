import React, { useState } from 'react';
import { Wine, Mail, MapPin, Phone, Compass, Send, Check, Heart } from 'lucide-react';
import { clubInfo } from '../data/clubInfo';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="relative bg-velvet-950 border-t border-gold-500/20 pt-16 pb-12 overflow-hidden text-neutral-400 text-xs">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-wine-900/10 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand & Emblem Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-400/40 p-0.5 shadow-md shrink-0">
                <img
                  src="./images/logo-crest.jpg"
                  alt="66° Cuvée Emblem"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider gold-gradient-text uppercase block">
                  66° Cuvée
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-1">
                  <Compass className="w-2.5 h-2.5 text-gold-400" />
                  Mo i Rana • 66° Nord
                </span>
              </div>
            </div>

            <p className="text-neutral-300 font-light leading-relaxed max-w-sm text-xs">
              66° Cuvée er en eksklusiv vinklubb i Mo i Rana ledet av <strong className="text-gold-300 font-normal">Caroline Skovholt</strong>. 
              Vi feirer vinens magi, geografi og historiefortelling i intime, stemningsfulle rammer under Polarsirkelen.
            </p>

            <div className="pt-1 flex items-center gap-2 text-gold-400 font-medium">
              <Wine className="w-3.5 h-3.5" />
              <span>Polarsirkelens fremste vinmiljø</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-2">
              Navigasjon
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#om-klubben" className="hover:text-gold-300 transition-colors">
                  Om Klubben & Caroline
                </a>
              </li>
              <li>
                <a href="#smakinger" className="hover:text-gold-300 transition-colors">
                  Kommende Smakinger
                </a>
              </li>
              <li>
                <a href="#vinarkiv" className="hover:text-gold-300 transition-colors">
                  Carolines Smaksarkiv
                </a>
              </li>
              <li>
                <a href="#vinstil-test" className="hover:text-gold-300 transition-colors">
                  Ta Vinstil-testen
                </a>
              </li>
              <li>
                <a href="#medlemskap" className="hover:text-gold-300 transition-colors">
                  Bli Medlem
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-300 transition-colors">
                  Spørsmål & Svar (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-2">
              Kontakt & Lokasjon
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300 font-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{clubInfo.contact.city}, {clubInfo.contact.region}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${clubInfo.contact.email}`} className="hover:text-gold-300 transition-colors">
                  {clubInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{clubInfo.contact.phone}</span>
              </li>
              <li className="pt-1 text-[11px] text-neutral-400">
                Leder: <strong className="text-gold-300 font-medium">{clubInfo.leader.name}</strong>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-2">
              Carolines Vintips
            </h4>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              Motta månedlige vintips, invitasjoner til spesialslipp og oppskrifter rett i innboksen.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Din e-postadresse..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-velvet-900 border border-gold-500/25 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-gold-400"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gold-400 text-neutral-950 hover:bg-gold-300 transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Påmeldt!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3 h-3" />
                    <span>Abonner</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} 66° Cuvée • Vinklubb i Mo i Rana. Alle rettigheter forbeholdt.
          </p>
          <div className="flex items-center gap-2 text-neutral-400">
            <span>Kurert med</span>
            <Heart className="w-3.5 h-3.5 text-wine-500 fill-wine-500" />
            <span>for Helgeland og Caroline Skovholt</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WineEvent } from '../data/events';
import { MembershipTier, membershipTiers } from '../data/membership';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEvent?: WineEvent | null;
  initialTier?: MembershipTier | null;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialEvent,
  initialTier,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'membership', // 'membership' or 'event'
    selectedTier: initialTier?.id || 'medlem',
    selectedEvent: initialEvent?.id || 'champagne-morketid',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialEvent) {
      setFormData((prev) => ({
        ...prev,
        type: 'event',
        selectedEvent: initialEvent.id,
      }));
    } else if (initialTier) {
      setFormData((prev) => ({
        ...prev,
        type: 'membership',
        selectedTier: initialTier.id,
      }));
    }
  }, [initialEvent, initialTier]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Subtle champagne gold shimmer
      try {
        confetti({
          particleCount: 30,
          spread: 45,
          origin: { y: 0.6 },
          colors: ['#c5a059', '#faf6eb']
        });
      } catch (err) {
        // Fallback
      }
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="bg-velvet-950 border border-brass-500/40 max-w-lg w-full p-6 sm:p-10 relative shadow-2xl overflow-y-auto max-h-[92vh]">
        
        {/* Close */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-white"
          aria-label="Lukk"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="text-[10px] font-editorial uppercase tracking-[0.3em] text-brass-400 mb-1">
              66° Cuvée • Mo i Rana
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide mb-2">
              {formData.type === 'event' ? 'Reserver Sete ved Bordet' : 'Søk om Medlemskap'}
            </h3>
            <p className="font-serif italic text-neutral-300 text-sm mb-6 leading-relaxed">
              Vennligst fyll ut Deres detaljer under. Caroline Skovholt vil gjennomgå henvendelsen personlig.
            </p>

            {/* Type selector */}
            <div className="flex border-b border-brass-500/20 mb-6">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: 'membership' })}
                className={`py-2 px-4 text-xs font-editorial uppercase tracking-wider transition-colors ${
                  formData.type === 'membership'
                    ? 'border-b-2 border-brass-400 text-white font-medium'
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                Fast Medlemskap
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: 'event' })}
                className={`py-2 px-4 text-xs font-editorial uppercase tracking-wider transition-colors ${
                  formData.type === 'event'
                    ? 'border-b-2 border-brass-400 text-white font-medium'
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                Enkeltsamling
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-editorial uppercase tracking-widest text-neutral-400 block">
                  Deres Navn *
                </label>
                <input
                  type="text"
                  required
                  placeholder="f.eks. Henrik Wergeland"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full py-2 bg-transparent border-b border-brass-500/30 text-white placeholder-neutral-600 focus:outline-none focus:border-brass-400 text-sm font-serif"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-editorial uppercase tracking-widest text-neutral-400 block">
                    E-postadresse *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="navn@domene.no"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full py-2 bg-transparent border-b border-brass-500/30 text-white placeholder-neutral-600 focus:outline-none focus:border-brass-400 text-sm font-serif"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-editorial uppercase tracking-widest text-neutral-400 block">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+47 000 00 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-2 bg-transparent border-b border-brass-500/30 text-white placeholder-neutral-600 focus:outline-none focus:border-brass-400 text-sm font-serif"
                  />
                </div>
              </div>

              {/* Selection based on type */}
              {formData.type === 'membership' ? (
                <div className="space-y-1">
                  <label className="text-[10px] font-editorial uppercase tracking-widest text-neutral-400 block">
                    Ønsket Medlemskategori
                  </label>
                  <select
                    value={formData.selectedTier}
                    onChange={(e) => setFormData({ ...formData, selectedTier: e.target.value })}
                    className="w-full py-2 bg-velvet-950 border-b border-brass-500/30 text-white focus:outline-none focus:border-brass-400 text-sm font-serif"
                  >
                    {membershipTiers.map((t) => (
                      <option key={t.id} value={t.id} className="bg-velvet-950 text-white">
                        {t.name} — {t.price} ({t.period})
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="space-y-1">
                  <label className="text-[10px] font-editorial uppercase tracking-widest text-neutral-400 block">
                    Velg Bordsetting
                  </label>
                  <select
                    value={formData.selectedEvent}
                    onChange={(e) => setFormData({ ...formData, selectedEvent: e.target.value })}
                    className="w-full py-2 bg-velvet-950 border-b border-brass-500/30 text-white focus:outline-none focus:border-brass-400 text-sm font-serif"
                  >
                    <option value="champagne-morketid">24. Okt — Champagne & Bobler i Mørketida</option>
                    <option value="bourgogne-cote-dor">21. Nov — Bourgogne: Terroir, Kalke & Côte d'Or</option>
                    <option value="piemonte-barolo-royals">16. Jan — Piemontes Konger: Barolo & Barbaresco</option>
                    <option value="blindsmaking-sansene">18. Feb — Blindsmakingens Kunst</option>
                  </select>
                </div>
              )}

              {/* Note */}
              <div className="space-y-1">
                <label className="text-[10px] font-editorial uppercase tracking-widest text-neutral-400 block">
                  Fortell gjerne noen ord om Deres vininteresse (Valgfritt)
                </label>
                <textarea
                  rows={2}
                  placeholder="Hva er Deres favorittregion, eller hva ønsker De å utforske mer av?"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full py-2 bg-transparent border-b border-brass-500/30 text-white placeholder-neutral-600 focus:outline-none focus:border-brass-400 text-sm font-serif resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brass-400 text-neutral-950 font-editorial text-xs uppercase tracking-widest hover:bg-brass-300 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Overfører henvendelse...</span>
                  ) : (
                    <>
                      <span>Send henvendelse til Caroline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-neutral-500 font-serif italic">
                Alle opplysninger behandles diskré i tråd med salongens fortrolighet.
              </p>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <span className="text-[10px] font-editorial uppercase tracking-widest text-brass-400 block">
              Salongens Protokoll
            </span>
            <h3 className="font-display text-3xl text-white uppercase tracking-wide">
              Mottatt med takk, {formData.name}
            </h3>
            <p className="font-serif text-neutral-300 text-sm font-light leading-relaxed max-w-sm mx-auto">
              Deres henvendelse er overbrakt til Caroline Skovholt. Hun vil ta direkte kontakt 
              med Dem på <strong className="text-white font-normal">{formData.email}</strong> innen 48 timer.
            </p>

            <div className="p-4 border-l-2 border-brass-400 bg-velvet-900/60 my-6 text-left">
              <p className="font-serif italic text-brass-100 text-xs leading-relaxed">
                «Vi ser frem til å heve glassene sammen i Mo i Rana. Velkommen til bords.»
              </p>
              <span className="text-[10px] font-editorial uppercase tracking-widest text-brass-400 block mt-1">
                — Caroline Skovholt
              </span>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-2.5 border border-brass-400 text-brass-300 font-editorial text-xs uppercase tracking-widest hover:bg-brass-400 hover:text-neutral-950 transition-colors"
            >
              Lukk vindu
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

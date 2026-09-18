import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, Send, Phone, Mail, User } from 'lucide-react';
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
    experience: '',
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

      // Gold and Wine Champagne Confetti
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#dfbf76', '#a32a53', '#ffffff', '#eedcae']
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 900);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-velvet-950 border border-gold-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[92vh]">
        
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-wine-900/50 hover:bg-wine-900 transition-colors"
          aria-label="Lukk"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Title */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full border border-gold-400/40 p-0.5 overflow-hidden">
                <img src="./images/logo-crest.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                66° Cuvée • Mo i Rana
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              {formData.type === 'event' ? 'Reserver Plass på Smaking' : 'Søk om Medlemskap'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light mb-6">
              Fyll ut skjemaet nedenfor, så tar leder <strong className="text-gold-300 font-medium">Caroline Skovholt</strong> personlig kontakt med deg for bekreftelse og detaljer.
            </p>

            {/* Type selector toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-velvet-900/90 border border-gold-500/20 mb-6">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: 'membership' })}
                className={`py-2 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                  formData.type === 'membership'
                    ? 'bg-gold-400 text-neutral-950 shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Medlemskap
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: 'event' })}
                className={`py-2 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                  formData.type === 'event'
                    ? 'bg-gold-400 text-neutral-950 shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Enkeltsmaking
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Full Name */}
              <div>
                <label className="block text-neutral-300 mb-1.5 font-medium">
                  Fullt navn *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="f.eks. Astrid Johansen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-velvet-900/90 border border-gold-500/25 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 text-xs"
                  />
                </div>
              </div>

              {/* Email & Phone grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 mb-1.5 font-medium">
                    E-postadresse *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="astrid@eksempel.no"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-velvet-900/90 border border-gold-500/25 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-300 mb-1.5 font-medium">
                    Telefonnummer *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+47 900 00 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-velvet-900/90 border border-gold-500/25 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Option based on type */}
              {formData.type === 'membership' ? (
                <div>
                  <label className="block text-neutral-300 mb-1.5 font-medium">
                    Ønsket medlemskapsnivå
                  </label>
                  <select
                    value={formData.selectedTier}
                    onChange={(e) => setFormData({ ...formData, selectedTier: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-velvet-900/90 border border-gold-500/25 text-white focus:outline-none focus:border-gold-400 text-xs"
                  >
                    {membershipTiers.map((t) => (
                      <option key={t.id} value={t.id} className="bg-velvet-950 text-white">
                        {t.name} ({t.price} {t.period})
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-neutral-300 mb-1.5 font-medium">
                    Velg arrangement
                  </label>
                  <select
                    value={formData.selectedEvent}
                    onChange={(e) => setFormData({ ...formData, selectedEvent: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-velvet-900/90 border border-gold-500/25 text-white focus:outline-none focus:border-gold-400 text-xs"
                  >
                    <option value="champagne-morketid">Champagne & Bobler i Mørketida (24. okt)</option>
                    <option value="bourgogne-cote-dor">Bourgogne: Terroir, Kalke & Côte d'Or (21. nov)</option>
                    <option value="piemonte-barolo-royals">Piemontes Konger: Barolo & Barbaresco (16. jan)</option>
                    <option value="blindsmaking-sansene">Blindsmakingens Kunst (18. feb)</option>
                  </select>
                </div>
              )}

              {/* Wine interests */}
              <div>
                <label className="block text-neutral-300 mb-1.5 font-medium">
                  Hva er ditt forhold til vin, eller har du noen favorittregioner? (Valgfritt)
                </label>
                <textarea
                  rows={3}
                  placeholder="Fortell oss gjerne litt om hva du liker å drikke, eller hva du ønsker å lære mer om..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-velvet-900/90 border border-gold-500/25 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 text-xs resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-neutral-950 hover:from-gold-200 hover:to-gold-400 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sender forespørsel...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Søknad til Caroline</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-400 pt-1">
                Opplysningene behandles konfidensielt og deles aldri med tredjeparter.
              </p>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-gold-400/20 border-2 border-gold-400 flex items-center justify-center mx-auto mb-4 text-gold-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-gold-400 uppercase tracking-widest font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Forespørsel mottatt</span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-white mb-3">
              Velkommen til bords, {formData.name}!
            </h3>

            <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6 max-w-sm mx-auto">
              Takk for din interesse for <strong className="text-gold-200 font-medium">66° Cuvée</strong>. 
              Caroline Skovholt har mottatt henvendelsen din og vil ta kontakt på <strong className="text-white font-normal">{formData.email}</strong> innen kort tid.
            </p>

            <div className="p-4 rounded-2xl bg-velvet-900/80 border border-gold-500/20 mb-6 text-xs text-gold-200/90 font-serif italic text-left">
              "Vi gleder oss til å heve glassene sammen i Mo i Rana. Skål for edle dråper under Polarsirkelen!"
              <span className="block not-italic text-gold-400 text-[11px] uppercase tracking-wider mt-1 font-sans font-semibold">
                — Caroline Skovholt
              </span>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-400 text-neutral-950 hover:bg-gold-300 transition-colors"
            >
              Lukk vindu
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

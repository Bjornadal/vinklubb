import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { clubInfo } from '../data/clubInfo';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-velvet-950/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/20 bg-wine-950/70 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3 h-3 text-gold-400" />
            <span>Ofte Stilte Spørsmål</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
            Alt du lurer på om <span className="gold-gradient-text italic font-serif">66° Cuvée</span>
          </h2>
          <p className="text-neutral-300 text-sm font-light">
            Finner du ikke svaret her? Caroline svarer gjerne på dine spørsmål direkte.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {clubInfo.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-gold-500/20 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-gold-200 transition-colors"
                >
                  <span className="font-serif text-lg font-bold">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

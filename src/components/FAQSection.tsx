import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clubInfo } from '../data/clubInfo';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative editorial-border-t bg-velvet-950/90">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[10px] font-editorial uppercase tracking-[0.35em] text-brass-400 block mb-1">
            Praktiske Spørsmål
          </span>
          <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-white mb-2">
            Salongens Kjøreregler
          </h2>
          <p className="font-serif italic text-neutral-400 text-sm">
            Har du spørsmål før din første samling? Her er det viktigste du trenger å vite.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {clubInfo.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-brass-500/20 py-4 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between gap-4 text-white hover:text-brass-300 transition-colors group"
                >
                  <span className="font-display text-lg sm:text-xl uppercase tracking-wide">
                    0{index + 1}. {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-brass-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-3 pb-2 text-sm text-neutral-300 font-serif leading-relaxed font-light animate-fade-in">
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

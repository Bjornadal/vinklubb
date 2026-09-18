import React, { useState } from 'react';
import { Sparkles, Wine, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizQuestions, wineRecommendations, WineRecommendation } from '../data/wineQuiz';

interface TasteFinderProps {
  onOpenApplyModal: () => void;
}

export const TasteFinder: React.FC<TasteFinderProps> = ({ onOpenApplyModal }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [recommendation, setRecommendation] = useState<WineRecommendation | null>(null);

  const handleSelectOption = (tag: string) => {
    const updatedAnswers = [...selectedAnswers, tag];
    setSelectedAnswers(updatedAnswers);

    if (currentStep + 1 < quizQuestions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate outcome: pick the dominant tag or latest
      const tagCounts: Record<string, number> = {};
      updatedAnswers.forEach((t) => {
        tagCounts[t] = (tagCounts[t] || 0) + 1;
      });

      let topTag = 'bourgogne';
      let maxCount = 0;
      Object.entries(tagCounts).forEach(([tag, count]) => {
        if (count > maxCount) {
          maxCount = count;
          topTag = tag;
        }
      });

      const matchedRec = wineRecommendations[topTag] || wineRecommendations['bourgogne'];
      setRecommendation(matchedRec);

      // Subtle celebration confetti
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#dfbf76', '#a32a53', '#eedcae']
        });
      } catch (err) {
        // Ignore confetti if unsupported
      }
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setRecommendation(null);
  };

  const currentQ = quizQuestions[currentStep];

  return (
    <section id="vinstil-test" className="py-24 relative bg-wine-950/40 border-y border-gold-500/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/20 bg-wine-950/70 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>Interaktiv Sommelier-guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
            Finn din personlige <span className="gold-gradient-text italic font-serif">vinstil</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light">
            Svar på tre enkle spørsmål om dine sanser, så gir Caroline deg en skreddersydd anbefaling 
            og matmatch for din neste kveld i glasset.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-gold-500/25 relative overflow-hidden shadow-2xl">
          
          {!recommendation ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold">
                  Spørsmål {currentStep + 1} av {quizQuestions.length}
                </span>
                <div className="flex gap-1.5">
                  {quizQuestions.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-6 h-1 rounded-full transition-all duration-300 ${
                        idx === currentStep
                          ? 'bg-gold-400 w-10'
                          : idx < currentStep
                          ? 'bg-wine-500'
                          : 'bg-neutral-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  {currentQ.question}
                </h3>
                <p className="text-sm text-neutral-400 font-light">
                  {currentQ.description}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.tag)}
                    className="text-left p-5 rounded-2xl bg-velvet-900/60 hover:bg-wine-900/40 border border-gold-500/15 hover:border-gold-400/50 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-gold-200 transition-colors mb-1.5">
                        {option.text}
                      </div>
                      <p className="text-xs text-neutral-400 font-light">
                        {option.subtext}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-end text-xs text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Velg dette →</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="animate-fade-in space-y-6">
              
              {/* Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-widest bg-wine-950/80 px-3 py-1 rounded-full border border-gold-500/20">
                  <Wine className="w-3.5 h-3.5" />
                  <span>Din Arketype: {recommendation.archetype}</span>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ta testen på nytt</span>
                </button>
              </div>

              {/* Recommendation Title */}
              <div>
                <span className="text-xs text-gold-300/80 uppercase tracking-wider block mb-1">
                  Region: {recommendation.region}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  {recommendation.wineTitle}
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {recommendation.description}
                </p>
              </div>

              {/* Caroline's Quote */}
              <div className="p-5 rounded-2xl bg-velvet-900/80 border-l-4 border-l-gold-400">
                <p className="font-serif italic text-gold-100 text-sm sm:text-base leading-relaxed mb-2">
                  "{recommendation.quoteByCaroline}"
                </p>
                <span className="text-[11px] uppercase tracking-wider text-gold-400 font-medium block">
                  — Caroline Skovholt, 66° Cuvée
                </span>
              </div>

              {/* Practical Details (Pairing & Bottle) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-wine-950/60 border border-gold-500/15">
                  <strong className="text-white block mb-1 uppercase tracking-wider text-[11px]">
                    Ideell Matmatch:
                  </strong>
                  <span className="text-neutral-300">{recommendation.foodPairing}</span>
                </div>
                <div className="p-4 rounded-xl bg-wine-950/60 border border-gold-500/15">
                  <strong className="text-white block mb-1 uppercase tracking-wider text-[11px]">
                    Konkret Flaskeanbefaling:
                  </strong>
                  <span className="text-gold-200 font-serif text-sm">{recommendation.recommendedBottle}</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenApplyModal}
                  className="px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-300 to-gold-400 text-neutral-950 hover:from-gold-200 hover:to-gold-300 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-wine-950" />
                  <span>Søk medlemskap og smak med oss</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-300 border border-white/10 hover:border-white/30 transition-all text-center"
                >
                  Prøv andre svar
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

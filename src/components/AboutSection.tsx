import React from 'react';

interface AboutSectionProps {
  onOpenApplyModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenApplyModal }) => {
  return (
    <section id="salongen" className="py-28 relative editorial-border-t bg-velvet-950/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-wine-800/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="mb-16 editorial-border-b pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-editorial uppercase tracking-[0.35em] text-brass-400 block mb-1">
              Kapittel I — Salongens Filosofi
            </span>
            <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-tight text-white">
              Vinkultur under Polarsirkelen
            </h2>
          </div>
          <p className="font-serif italic text-brass-200 text-sm sm:text-base max-w-sm">
            «Vi smaker ikke for å imponere, men for å lytte til hva vinmarken og årgangen har å fortelle.»
          </p>
        </div>

        {/* Magazine Spread: Asymmetrical 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Tasting Ritual */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Editorial Prose with Drop Cap */}
            <div className="space-y-5 text-neutral-300 font-serif text-lg leading-relaxed font-light">
              <p className="drop-cap">
                Det finnes en særegen stillhet over Mo i Rana når vinterkulda setter inn og Ranfjorden 
                ligger mørk og speilblank. Det er nettopp her, under den 66. breddegrad, at 
                kontrasten til de varme kjellerhvelvene i Burgund, Champagne og Piemonte blir 
                på sitt mest magiske.
              </p>
              <p>
                Caroline Skovholt startet <strong>66° Cuvée</strong> ut fra en enkel, men 
                ufravikelig overbevisning: Vin skal aldri gjøres mystisk eller uoppnåelig for den som er nysgjerrig, 
                men den fortjener alltid kompromissløs kvalitet, riktige glass og respekt for håndverket.
              </p>
              <p className="text-base text-neutral-400 italic">
                «En stor flaske som drikkes alene er bare god kjemi. Men når den samme flasken dekanteres og deles 
                rundt et bord med gode mennesker, blir den til geografi, historie og et uutslettelig minne.»
              </p>
            </div>

            {/* Ritual Section: "En Aften hos 66° Cuvée" */}
            <div className="pt-4">
              <div className="mb-4 pb-2 border-b border-brass-500/20 flex items-center justify-between">
                <h3 className="font-editorial text-xs uppercase tracking-[0.25em] text-brass-300">
                  Salongens Anatomi — Slik forløper en samling
                </h3>
                <span className="text-[10px] font-serif italic text-neutral-500">I – IV</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 border-l-2 border-brass-500/40 bg-velvet-900/40 space-y-1">
                  <div className="flex items-center justify-between text-xs font-editorial uppercase tracking-wider text-brass-400">
                    <span>I. Ankomst & Aperitif</span>
                    <span className="font-serif italic text-neutral-400 text-[11px]">Riedel Krystall</span>
                  </div>
                  <p className="font-serif text-sm text-neutral-300 font-light">
                    Kvelden åpnes alltid med en kuratert musserende vin — som oftest en knivskarp Blanc de Blancs eller en moden vintage champagne.
                  </p>
                </div>

                <div className="p-4 border-l-2 border-brass-500/40 bg-velvet-900/40 space-y-1">
                  <div className="flex items-center justify-between text-xs font-editorial uppercase tracking-wider text-brass-400">
                    <span>II. Blindsmaking & Terroir-dykk</span>
                    <span className="font-serif italic text-neutral-400 text-[11px]">Uten fordommer</span>
                  </div>
                  <p className="font-serif text-sm text-neutral-300 font-light">
                    Caroline dekker til etikettene. Vi utforsker farge, tanninstruktur og aromaer med egne notatbøker før produsenten og historien avdukes.
                  </p>
                </div>

                <div className="p-4 border-l-2 border-brass-500/40 bg-velvet-900/40 space-y-1">
                  <div className="flex items-center justify-between text-xs font-editorial uppercase tracking-wider text-brass-400">
                    <span>III. Gastronomisk Harmoni</span>
                    <span className="font-serif italic text-neutral-400 text-[11px]">Helgeland møter Europa</span>
                  </div>
                  <p className="font-serif text-sm text-neutral-300 font-light">
                    Vinene matches med matbiter tilpasset syre og tanniner — fra arktisk piggvar og reinsdyr til franske upasteuriserte oster.
                  </p>
                </div>

                <div className="p-4 border-l-2 border-brass-500/40 bg-velvet-900/40 space-y-1">
                  <div className="flex items-center justify-between text-xs font-editorial uppercase tracking-wider text-brass-400">
                    <span>IV. Kjellerns Frie Samtale</span>
                    <span className="font-serif italic text-neutral-400 text-[11px]">Rundt kandelabrene</span>
                  </div>
                  <p className="font-serif text-sm text-neutral-300 font-light">
                    Tid til uformell fordypning, spørsmål og diskusjon om årganger, kjellerlagring og fremtidige allokeringer.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait & Curator Profile */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="relative salon-card p-5 editorial-border">
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[3/4] bg-velvet-900">
                <img
                  src="./images/caroline-skovholt.jpg"
                  alt="Caroline Skovholt ved vinhyllene"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] hover:scale-105 transition-transform duration-1000"
                />
                
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-velvet-950 via-velvet-950/80 to-transparent">
                  <h3 className="font-display text-2xl text-white uppercase tracking-wider">
                    Caroline Skovholt
                  </h3>
                  <p className="font-editorial text-[11px] uppercase tracking-widest text-brass-400">
                    Grunnlegger & Vertinne • 66° Cuvée
                  </p>
                </div>
              </div>

              {/* Personal Curator Note */}
              <div className="mt-5 space-y-4 pt-4 border-t border-brass-500/20 text-xs">
                <div>
                  <span className="text-[10px] font-editorial uppercase tracking-widest text-neutral-400 block mb-1">
                    Carolines Utvalgte Hjerteregioner:
                  </span>
                  <ul className="space-y-1 font-serif text-sm text-brass-100 italic">
                    <li>• Côte de Nuits — <span className="not-italic text-xs text-neutral-400">Pinot Noir med uendelig jordsmonnsdybde</span></li>
                    <li>• Montagne de Reims — <span className="not-italic text-xs text-neutral-400">Kalkdrevet, moden champagne</span></li>
                    <li>• Barolo & Barbaresco — <span className="not-italic text-xs text-neutral-400">Nebbioloens aristokratiske tanniner</span></li>
                    <li>• Saar & Mosel — <span className="not-italic text-xs text-neutral-400">Laserpresisjon i bratte skiferskråninger</span></li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <p className="font-serif text-neutral-300 italic">
                    «Min dør står alltid åpen for deg som vil snakke om vin, enten du akkurat har kjøpt ditt første vinglass eller har kjelleren full av Barolo.»
                  </p>
                </div>
              </div>
            </div>

            {/* Salon Invitation Card */}
            <div className="p-6 border border-brass-500/20 bg-wine-950/40 text-center space-y-3">
              <span className="text-[10px] font-editorial uppercase tracking-super-wide text-brass-400 block">
                Mo i Rana • Begrenset Fellesskap
              </span>
              <h4 className="font-display text-xl text-white uppercase tracking-wide">
                Vil du sitte ved bordet?
              </h4>
              <p className="font-serif text-sm text-neutral-300 font-light leading-relaxed">
                Salongen har et tak på 35 faste medlemmer for å bevare intimiteten rundt hvert smaksbord.
              </p>
              <button
                onClick={onOpenApplyModal}
                className="mt-2 inline-block px-6 py-2.5 border border-brass-400 text-brass-300 hover:text-neutral-950 hover:bg-brass-400 text-xs font-editorial uppercase tracking-widest transition-all"
              >
                Send søknad til Caroline
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

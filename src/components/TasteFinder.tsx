import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface SensoryElement {
  id: string;
  name: string;
  subtitle: string;
  element: string;
  idealFor: string;
  wineTitle: string;
  region: string;
  curatorNote: string;
  pairing: string;
  bottle: string;
}

const sensoryElements: SensoryElement[] = [
  {
    id: 'frost',
    name: 'Nordisk Frost & Kystluft',
    element: 'Vann & Stein',
    subtitle: 'Når vintervinden feier inn Ranfjorden og ganen søker ren, mineralsk elektrisitet.',
    idealFor: 'Sjømat, rå kamskjell fra kysten, ferske reker og renset gane.',
    wineTitle: 'Tørr Tysk Riesling fra Bratte Skiferskråninger',
    region: 'Mosel / Rheinhessen, Tyskland',
    curatorNote: '«Det finnes ikke noe mer forfriskende enn en knivskarp tørr Riesling når frosten biter ute. Syren skjærer gjennom fettet i sjømaten og etterlater en ren smak av knust stein og sitruszest.»',
    pairing: 'Pannestekt piggvar med brunet smør, eller ferske østers.',
    bottle: 'Weingut Keller «Von der Fels» eller Egon Müller Scharzhof'
  },
  {
    id: 'peis',
    name: 'Peisild & Mørk Vinterkveld',
    element: 'Ild & Tre',
    subtitle: 'Knitrende bjørkeved, dype lenestoler og et glass med sjel og faste tanniner.',
    idealFor: 'Langtidskokte gryter, viltkjøtt, lær, tobakk og tålmodighet.',
    wineTitle: 'Klassisk Barolo DOCG – «Kongenes Vin»',
    region: 'Piemonte, Nord-Italia',
    curatorNote: '«Nebbiolo på 66 grader nord gir deg varmen du lengter etter. Den krever to timer på karaffel før tjære, roser og trøffel stiger opp av krystallet. En vin som krever en skikkelig middag.»',
    pairing: 'Braisert oksehøyrygg, sopprisotto med parmesan og trøffelsmør.',
    bottle: 'Vietti Barolo Castiglione eller G.D. Vajra Bricco delle Viole'
  },
  {
    id: 'fest',
    name: 'Gylne Bobler & Kandelabre',
    element: 'Luft & Krystall',
    subtitle: 'Feiring, høye stettglass og den uforlignelige lyden av en sprettet champagnekork.',
    idealFor: 'Aperitiff som glir over i natten, sprudlende samtaler og luksus.',
    wineTitle: 'Prestige Blanc de Blancs Grand Cru Champagne',
    region: 'Côte des Blancs, Champagne, Frankrike',
    curatorNote: '«Ekte champagne er ikke forbeholdt nyttårsaften – det er kanskje verdens mest komplekse matvin. Samspillet mellom ristet brioche, krittmineralitet og silkeaktig mousse løfter enhver kveld i Rana.»',
    pairing: 'Nystekte blinis med Rørosrømme og løyrom, modnet Comté.',
    bottle: 'Pierre Péters Cuvée de Réserve eller Dom Pérignon Vintage'
  },
  {
    id: 'ro',
    name: 'Kjellerro & Terroir-dykk',
    element: 'Jord & Finesse',
    subtitle: 'Når du søker ren eleganse, florale nyanser og en ettersmak som aldri tar slutt.',
    idealFor: 'Dype samtaler, klassisk musikk og vinverdens mest myteomspunne drue.',
    wineTitle: 'Côte de Nuits Grand Vin – Pinot Noir',
    region: 'Bourgogne, Frankrike',
    curatorNote: '«Bourgogne er vinverdens mest vanedannende labyrint. Lys i glasset, men med en dybde av skogbunn, markjordbær og mineraler som trollbinder deg fra første munnfull.»',
    pairing: 'Andebryst med kirsebærglaze, eller pannestekt reinsdyrfilet.',
    bottle: 'Domaine Dujac Morey-Saint-Denis eller Domaine Séraphin'
  }
];

interface TasteFinderProps {
  onOpenApplyModal: () => void;
}

export const TasteFinder: React.FC<TasteFinderProps> = ({ onOpenApplyModal }) => {
  const [selectedElementId, setSelectedElementId] = useState<string>('peis');
  const current = sensoryElements.find((e) => e.id === selectedElementId) || sensoryElements[0];

  return (
    <section id="vin-kompass" className="py-28 relative editorial-border-t bg-velvet-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="mb-16 editorial-border-b pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-editorial uppercase tracking-[0.35em] text-brass-400 block mb-1">
              Kapittel IV — Sanselig Navigasjon
            </span>
            <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-tight text-white">
              Det Arktiske Vin-Kompasset
            </h2>
          </div>
          <p className="font-serif italic text-brass-200 text-sm sm:text-base max-w-sm">
            Velg stemningen og elementet som tiltaler deg mest i kveld, og la Caroline anbefale din ideelle dråpe.
          </p>
        </div>

        {/* Compass Dial: 4 Elemental Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {sensoryElements.map((item) => {
            const isActive = item.id === selectedElementId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedElementId(item.id)}
                className={`p-5 text-left transition-all duration-500 editorial-border flex flex-col justify-between ${
                  isActive
                    ? 'bg-wine-900/50 border-brass-400 shadow-xl'
                    : 'bg-velvet-900/40 border-white/10 hover:border-brass-500/30'
                }`}
              >
                <div>
                  <span className="text-[9px] font-editorial uppercase tracking-widest text-brass-400 block mb-1">
                    {item.element}
                  </span>
                  <h3 className={`font-display text-lg sm:text-xl uppercase tracking-wide mb-1 ${
                    isActive ? 'text-white' : 'text-neutral-300'
                  }`}>
                    {item.name}
                  </h3>
                </div>
                <span className="text-[10px] font-serif italic text-neutral-400 mt-4 block">
                  {isActive ? '● Valgt stemning' : '○ Klikk for å utforske'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Sommelier Dossier View */}
        <div className="salon-card p-6 sm:p-12 editorial-border relative animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-editorial uppercase tracking-widest text-brass-400 block mb-1">
                  Carolines Utvalgte Anbefaling for {current.name}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wide">
                  {current.wineTitle}
                </h3>
                <p className="font-editorial text-xs text-brass-300 uppercase tracking-widest mt-1">
                  Region: {current.region}
                </p>
              </div>

              <p className="font-serif text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                {current.subtitle}
              </p>

              {/* Sommelier Quote */}
              <div className="p-5 border-l-2 border-brass-400 bg-velvet-900/80">
                <p className="font-serif italic text-brass-100 text-sm sm:text-base leading-relaxed mb-2">
                  {current.curatorNote}
                </p>
                <span className="text-[10px] font-editorial uppercase tracking-widest text-brass-400 block">
                  — Caroline Skovholt, Leder for 66° Cuvée
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-300 pt-1">
                <div className="p-3 border border-white/10 bg-velvet-900/40">
                  <span className="font-editorial uppercase tracking-widest text-brass-400 block text-[10px] mb-1">
                    Anbefalt Matfølge:
                  </span>
                  <p className="font-serif text-white">{current.pairing}</p>
                </div>
                <div className="p-3 border border-white/10 bg-velvet-900/40">
                  <span className="font-editorial uppercase tracking-widest text-brass-400 block text-[10px] mb-1">
                    Konkret Flaske i Kikkerten:
                  </span>
                  <p className="font-serif text-white">{current.bottle}</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenApplyModal}
                  className="px-7 py-3.5 bg-brass-400 text-neutral-950 font-editorial text-xs uppercase tracking-widest hover:bg-brass-300 transition-all inline-flex items-center gap-2"
                >
                  <span>Søk plass i salongen og smak med oss</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Mood Visual Frame */}
            <div className="lg:col-span-5 relative aspect-[3/4] overflow-hidden editorial-border">
              <img
                src={
                  selectedElementId === 'fest'
                    ? './images/champagne-pour.jpg'
                    : selectedElementId === 'frost'
                    ? './images/tasting-flight.jpg'
                    : './images/wine-bottle.jpg'
                }
                alt="Stemningsbilde fra vinbaren"
                className="w-full h-full object-cover filter contrast-[1.03] hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-velvet-950/90 backdrop-blur-sm border border-brass-500/30 text-center">
                <span className="text-[10px] font-editorial uppercase tracking-widest text-brass-300">
                  {current.element} • 66° 18′ N • Mo i Rana
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

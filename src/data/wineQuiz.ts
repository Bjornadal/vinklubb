export interface QuizOption {
  text: string;
  subtext: string;
  tag: 'bordeaux' | 'champagne' | 'bourgogne' | 'piemonte' | 'riesling';
}

export interface QuizQuestion {
  id: number;
  question: string;
  description: string;
  options: QuizOption[];
}

export interface WineRecommendation {
  archetype: string;
  wineTitle: string;
  region: string;
  description: string;
  quoteByCaroline: string;
  idealSetting: string;
  foodPairing: string;
  recommendedBottle: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Hvilken stemning beskriver din ideelle vinkveld?",
    description: "Velg øyeblikket som appellerer mest til sansene dine.",
    options: [
      {
        text: "Knitrende peis, dype lenestoler og lavmælte samtaler",
        subtext: "Klassisk ro, tidløs eleganse og modne aromaer.",
        tag: "bordeaux"
      },
      {
        text: "Feiring, fnisende kandelabrer og sprudlende latter",
        subtext: "Høy energi, luksus og ferske bobler i krystallglass.",
        tag: "champagne"
      },
      {
        text: "En lang gastronomisk middag med fokus på finesser",
        subtext: "Delikate nyanser, parfymert frukt og silkemyk balanse.",
        tag: "bourgogne"
      },
      {
        text: "Rustikk italiensk langbord med trøfler og solide retter",
        subtext: "Karakter, struktur, faste tanniner og sjel.",
        tag: "piemonte"
      }
    ]
  },
  {
    id: 2,
    question: "Hva foretrekker du på tallerkenen til et godt glass?",
    description: "Smakssammensetning er kjernen i en fullkommen vinopplevelse.",
    options: [
      {
        text: "Pannestekt piggvar eller kveite med nøttesmør og kapers",
        subtext: "Mineralsk, ferskt og saltbalansert.",
        tag: "riesling"
      },
      {
        text: "Helstekt okse-entrecôte eller hjort med rødvinssjy",
        subtext: "Mektig kjøtt som krever faste tanniner og lagret frukt.",
        tag: "bordeaux"
      },
      {
        text: "Friske østers, løyrom-blinis og sprø havsalt",
        subtext: "Kjølig sjømat som ber om syre og krispe bobler.",
        tag: "champagne"
      },
      {
        text: "Skogsopp, morkler, andebryst eller fasan",
        subtext: "Jordlige toner og eleganse som kler lysere rødvin.",
        tag: "bourgogne"
      }
    ]
  },
  {
    id: 3,
    question: "Hvilken munnfølelse søker du i glasset?",
    description: "Hvordan opplever du vinens tekstur og tyngde?",
    options: [
      {
        text: "Elektrisk friskhet, knust stein og sitrusspenst",
        subtext: "Helt ren og oppkvikkende ettersmak.",
        tag: "riesling"
      },
      {
        text: "Kremet, kriblende mousse og ristet brioche",
        subtext: "Luksuriøs perlage som renser og forfører ganen.",
        tag: "champagne"
      },
      {
        text: "Silkeaktig, svevende og floral kompleksitet",
        subtext: "Lys i fargen, men med enorm dybde og lengde.",
        tag: "bourgogne"
      },
      {
        text: "Fast bitt, lær, tjære og tørkede roser",
        subtext: "En vin som griper tak og krever oppmerksomhet.",
        tag: "piemonte"
      }
    ]
  }
];

export const wineRecommendations: Record<string, WineRecommendation> = {
  bordeaux: {
    archetype: "Den Tidløse Klassiker",
    wineTitle: "Klassisk Venstrebredd Bordeaux / Mektig Cabernet",
    region: "Pauillac / Saint-Julien, Frankrike",
    description: "Du verdsetter substans, struktur og historiens sus. Du lar deg forføre av ceder, solbær, blyantspiss og faste, modne tanniner som har tålt tidens tann.",
    quoteByCaroline: "For deg er en god vinkveld en seremoni. Gi vinen en time på karaffel, sett på noe rolig i bakgrunnen og nyt hvordan den åpner seg lag for lag.",
    idealSetting: "Kald høstkveld i Mo i Rana med tente lys og godt selskap.",
    foodPairing: "Helstekt lammelår med rosmarin eller klassisk Côte de Boeuf.",
    recommendedBottle: "Château Pontet-Canet eller Château Léoville Barton"
  },
  champagne: {
    archetype: "Den Levende Epikuréer",
    wineTitle: "Prestige Blanc de Blancs & Moden Champagne",
    region: "Côte des Blancs, Champagne, Frankrike",
    description: "Du vet at champagne ikke bare er til nyttårsaften, men en av verdens mest komplekse matviner. Du elsker samspillet mellom knivskarp kalkmineralitet, kremet brioche og gyldne bobler.",
    quoteByCaroline: "Livet er for kort til lunken cava. Når en ekte champagne åpnes, løftes hele rommets energi. Perfekt for å skåle for livet på 66 grader nord!",
    idealSetting: "En aperitiff som glir over i en helaftens opplevelse.",
    foodPairing: "Nystekte blinis med Rørosrømme og løyrom, eller nyåpnede østers.",
    recommendedBottle: "Pierre Péters Cuvée de Réserve Grand Cru eller Billecart-Salmon"
  },
  bourgogne: {
    archetype: "Den Poitiske Terroir-søker",
    wineTitle: "Grand Cru Pinot Noir & Elegant Côte de Nuits",
    region: "Bourgogne, Frankrike",
    description: "Du søker finesse over rå kraft. Du lar deg trollbinde av florale fioler, modne skogsbær, skogbunn og en ettersmak som aldri ser ut til å ta slutt.",
    quoteByCaroline: "Bourgogne er vinverdens mest vanedannende labyrint. Det handler om én enkelt drue som uttrykker 50 ulike åssider på fullstendig unike måter.",
    idealSetting: "Et intimt middagsselskap med nære venner og dype samtaler.",
    foodPairing: "Pannestekt andebryst med kirsebærsaus eller kveite med soppbuljong.",
    recommendedBottle: "Domaine Dujac Morey-Saint-Denis eller Domaine Séraphin"
  },
  piemonte: {
    archetype: "Den Aristokratiske Tradisjonalist",
    wineTitle: "Barolo DOCG – 'Vinenes Konge, Kongenes Vin'",
    region: "Piemonte, Nord-Italia",
    description: "Du frykter ikke tanniner og syre – du omfavner dem. Du elsker viner med sjel, mystikk, toner av trøffel, lær og tørket roseblomst som krever en god rett på bordet.",
    quoteByCaroline: "Nebbiolo på 66 grader nord gir deg varmen og energien du trenger. En stor Barolo er som en god roman – krevende i starten, men umulig å glemme.",
    idealSetting: "Rundt et bugnende spisebord med hjemmelaget pasta og venner.",
    foodPairing: "Tajarin med salviesmør og trøfler, eller braiserte oksekjaker.",
    recommendedBottle: "Vietti Barolo Castiglione eller G.D. Vajra Bricco delle Viole"
  },
  riesling: {
    archetype: "Den Presise Estetiker",
    wineTitle: "Mineralsk Trocken Riesling fra Bratte Skiferskråninger",
    region: "Mosel / Rheinhessen, Tyskland",
    description: "Du elsker laserpresisjon, sitrusnerver og en ettersmak som smaker av våt stein etter sommerregn. Renhet, energi og uovertruffen spenst i ganen.",
    quoteByCaroline: "Tysk tørr Riesling er kanskje verdens aller beste sommermat- og sjømatvin. Friskheten skjærer gjennom alt av fett og renser smaksløkene fullstendig.",
    idealSetting: "En lys sommerkveld under midnattssolen i Rana.",
    foodPairing: "Ferske reker på brygga, kongekrabbe eller asiatisk ceviche.",
    recommendedBottle: "Weingut Keller 'Von der Fels' eller Egon Müller Scharzhof"
  }
};

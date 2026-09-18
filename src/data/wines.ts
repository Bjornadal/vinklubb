export interface WineItem {
  id: string;
  name: string;
  producer: string;
  vintage: string;
  region: string;
  country: string;
  type: 'Rødvin' | 'Hvitvin' | 'Musserende' | 'Naturvin';
  grape: string;
  alcohol: string;
  score: number;
  profile: {
    fruit: number;      // 1 to 5
    acidity: number;    // 1 to 5
    body: number;       // 1 to 5
    tannin: number;     // 1 to 5 (or effervescence for sparkling)
    oak: number;        // 1 to 5
  };
  aromas: string[];
  notesByCaroline: string;
  recommendedPairing: string;
  featured: boolean;
}

export const cellarWines: WineItem[] = [
  {
    id: "dom-perignon-2013",
    name: "Vintage Brut 2013",
    producer: "Dom Pérignon",
    vintage: "2013",
    region: "Champagne, Épernay",
    country: "Frankrike",
    type: "Musserende",
    grape: "Pinot Noir, Chardonnay",
    alcohol: "12.5%",
    score: 97,
    profile: {
      fruit: 4,
      acidity: 5,
      body: 4,
      tannin: 5, // Bobler / struktur
      oak: 3
    },
    aromas: ["Ristet brioche", "Sitruszest", "Grønne epler", "Krittmineralitet", "Hvite blomster"],
    notesByCaroline: "En usedvanlig elegant årgang for Dom Pérignon. Friskheten fra den sene innhøstingen i 2013 gir en laserskarp syrestruktur pakket inn i silkeaktig mousse og ristet hasselnøtt.",
    recommendedPairing: "Piggvar i smørsaus eller lett saltet kamskjell fra Helgelandskysten.",
    featured: true
  },
  {
    id: "seraphin-gevrey-chambertin",
    name: "Gevrey-Chambertin Vieilles Vignes",
    producer: "Domaine Séraphin Père & Fils",
    vintage: "2018",
    region: "Bourgogne, Côte de Nuits",
    country: "Frankrike",
    type: "Rødvin",
    grape: "Pinot Noir",
    alcohol: "13.5%",
    score: 95,
    profile: {
      fruit: 4,
      acidity: 4,
      body: 4,
      tannin: 4,
      oak: 4
    },
    aromas: ["Mørke kirsebær", "Skogbunn", "Villbringebær", "Edeltre", "Sorte trøfler"],
    notesByCaroline: "Séraphin leverer en Pinot Noir med formidabel konsentrasjon fra gamle vinstokker. Dyp, maskulin Bourgogne med fløyelsmyke tanniner og uendelig ettersmak.",
    recommendedPairing: "Reinsdyrstek med fløtegratinerte rotgrønnsaker og tyttebærglaze.",
    featured: true
  },
  {
    id: "vietti-barolo-castiglione",
    name: "Barolo Castiglione DOCG",
    producer: "Vietti",
    vintage: "2019",
    region: "Piemonte, Castiglione Falletto",
    country: "Italia",
    type: "Rødvin",
    grape: "Nebbiolo",
    alcohol: "14.5%",
    score: 96,
    profile: {
      fruit: 4,
      acidity: 5,
      body: 5,
      tannin: 5,
      oak: 3
    },
    aromas: ["Tørkede roser", "Tjære", "Kirsebærstein", "Lær", "Tobakk"],
    notesByCaroline: "Klassisk, harmonisk og majestetisk Barolo. 2019 er et år for historiebøkene i Piemonte. Luft den 3 timer i karaffel og se den folde seg ut som et symfoniorkester.",
    recommendedPairing: "Langtidsbraisert oksehøyrygg, sopprisotto med ekte parmesan.",
    featured: true
  },
  {
    id: "leflaive-puligny",
    name: "Puligny-Montrachet",
    producer: "Domaine Leflaive",
    vintage: "2020",
    region: "Bourgogne, Côte de Beaune",
    country: "Frankrike",
    type: "Hvitvin",
    grape: "Chardonnay",
    alcohol: "13.0%",
    score: 96,
    profile: {
      fruit: 4,
      acidity: 5,
      body: 4,
      tannin: 1,
      oak: 4
    },
    aromas: ["Hvit fersken", "Flintstein", "Akasiehonning", "Kremet sitron", "Hasselnøtt"],
    notesByCaroline: "Leflaives biodynamiske magi i glasset. Renheten i frukten sammen med den umiskjennelige kalksteins-mineraliteten gjør dette til referansepunktet for hvit burgunder.",
    recommendedPairing: "Bakt kveite med hollandaisesaus, hummerhale med hvitløkssmør.",
    featured: true
  },
  {
    id: "keller-riesling-von-der-fels",
    name: "Riesling 'Von der Fels' Trocken",
    producer: "Weingut Keller",
    vintage: "2021",
    region: "Rheinhessen",
    country: "Tyskland",
    type: "Hvitvin",
    grape: "Riesling",
    alcohol: "12.5%",
    score: 94,
    profile: {
      fruit: 4,
      acidity: 5,
      body: 3,
      tannin: 1,
      oak: 1
    },
    aromas: ["Knust skifer", "Grapefrukt", "Limezest", "Røykaktig mineralitet", "Hvit pepper"],
    notesByCaroline: "Klaus-Peter Keller på sitt beste. 'Von der Fels' lages av unge vinstokker fra de legendariske Grosses Gewächs-markene Abtserde og Kirchspiel. Ekstrem elektrisk energi!",
    recommendedPairing: "Kongekrabbe, sushi, ferske reker fra fjorden.",
    featured: false
  },
  {
    id: "radikon-ribolla-gialla",
    name: "Ribolla Gialla Riserva",
    producer: "Radikon",
    vintage: "2017",
    region: "Friuli-Venezia Giulia, Oslavia",
    country: "Italia",
    type: "Naturvin",
    grape: "Ribolla Gialla",
    alcohol: "13.0%",
    score: 93,
    profile: {
      fruit: 3,
      acidity: 4,
      body: 4,
      tannin: 4,
      oak: 2
    },
    aromas: ["Tørket aprikos", "Bikake", "Kvede", "Te-blader", "Harpiks"],
    notesByCaroline: "En oransjevin som omdefinerer hva hvitvin kan være. 3 måneders maserasjon på skall gir dyp ravfarge og faste tanniner. En intellektuell og dypt fascinerende vinopplevelse.",
    recommendedPairing: "Vellagret fastost, andeconfit, krydrede nordafrikanske retter.",
    featured: false
  }
];

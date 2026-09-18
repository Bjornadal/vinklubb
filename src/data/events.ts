export interface WineEvent {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  date: string;
  time: string;
  location: string;
  priceMember: string;
  priceGuest: string;
  spotsTotal: number;
  spotsLeft: number;
  status: 'upcoming' | 'sold-out' | 'registration-open';
  description: string;
  wineHighlights: string[];
  foodPairing: string;
  dressCode: string;
}

export const upcomingEvents: WineEvent[] = [
  {
    id: "champagne-morketid",
    title: "Champagne & Bobler i Mørketida",
    subtitle: "Prestige Cuvées, Grower Champagnes & Franske Østers",
    theme: "Musserende & Fransk Champagne",
    date: "Torsdag 24. oktober 2026",
    time: "19:00 – 22:30",
    location: "Privat vinstue, Mo i Rana sentrum",
    priceMember: "850 kr",
    priceGuest: "1 150 kr",
    spotsTotal: 16,
    spotsLeft: 4,
    status: "registration-open",
    description: "Når høstmørket senker seg over Ranfjorden tenner vi kandelabrene og spretter korkene på noen av Champagnes mest karaktersterke hus. Caroline guider oss gjennom forskjellen på Grand Marques og små 'Grower Champagnes' (RM), samt Blanc de Blancs vs Blanc de Noirs.",
    wineHighlights: [
      "Dom Pérignon Vintage 2013",
      "Pierre Péters Cuvée de Réserve Blanc de Blancs",
      "Egly-Ouriet Grand Cru Brut Tradition",
      "Billecart-Salmon Brut Rosé"
    ],
    foodPairing: "Franske Gillardeau-østers, blinis med løyrom og modnet comté.",
    dressCode: "Smart Casual / Elegant kveldsantrekk"
  },
  {
    id: "bourgogne-cote-dor",
    title: "Bourgogne: Terroir, Kalke & Côte d'Or",
    subtitle: "Dypdykk i verdens mest myteomspunne vinregion",
    theme: "Pinot Noir & Chardonnay",
    date: "Fredag 21. november 2026",
    time: "18:30 – 22:00",
    location: "Chambre Séparée, Mo i Rana",
    priceMember: "1 050 kr",
    priceGuest: "1 390 kr",
    spotsTotal: 14,
    spotsLeft: 2,
    status: "registration-open",
    description: "En eksklusiv reise fra Chablis i nord ned gjennom Côte de Nuits og Côte de Beaune. Hvorfor koster en flaske fra én vinmark tidobbelte av naboparsellen? Vi smaker forskjellene i jordsmonn, vinifikasjon og lagringspotensial.",
    wineHighlights: [
      "Domaine Leflaive Puligny-Montrachet 2020",
      "Domaine Dujac Morey-Saint-Denis 2019",
      "Louis Jadot Gevrey-Chambertin 1er Cru 2018",
      "Vincent Dauvissat Chablis 1er Cru Vaillons"
    ],
    foodPairing: "Pannestekt piggvar med brunet smør og morkler, etterfulgt av langtidsbakt reinsdyrfilet.",
    dressCode: "Klassisk / Mørk dressjakke"
  },
  {
    id: "piemonte-barolo-royals",
    title: "Piemontes Konger: Barolo & Barbaresco",
    subtitle: "Stramme tanniner, tjære, roser og himmelsk lagring",
    theme: "Nebbiolo Masterclass",
    date: "Lørdag 16. januar 2027",
    time: "19:00 – 23:00",
    location: "Vinkjelleren, Mo i Rana",
    priceMember: "990 kr",
    priceGuest: "1 250 kr",
    spotsTotal: 16,
    spotsLeft: 7,
    status: "registration-open",
    description: "Nebbiolo-druen kalles vinverdens gåte: lys i fargen som en Pinot Noir, men med mektig struktur, voldsom syre og tannin. Vi sammenligner tradisjonalister (som store slavonske fat) mot modernister (fransk barrique) fra toppårgangene 2016 og 2019.",
    wineHighlights: [
      "Giacomo Conterno Barolo Francia",
      "Vietti Barolo Castiglione 2019",
      "Produttori del Barbaresco Ovello Riserva 2016",
      "G.D. Vajra Barolo Bricco delle Viole"
    ],
    foodPairing: "Hjemmelaget tagliolini med trøffelsmør og braiserte oksekjaker i rødvinssaus.",
    dressCode: "Classy & komfortabelt"
  },
  {
    id: "blindsmaking-sansene",
    title: "Blindsmakingens Kunst: Tren Ganen som en Sommelier",
    subtitle: "Dekk til etikettene – la lukt, farge og smak tale",
    theme: "Interaktiv Blindsmaking",
    date: "Torsdag 18. februar 2027",
    time: "19:00 – 22:00",
    location: "Mo i Rana",
    priceMember: "690 kr",
    priceGuest: "890 kr",
    spotsTotal: 18,
    spotsLeft: 6,
    status: "registration-open",
    description: "Uten fordommer om etikett, pris eller prestisje: Caroline serverer 6 mystiske viner i sorte glass og tildekkede karafler. Gjennom WSETs systematiske smaksmetode lærer vi å identifisere drue, klima, alder og land. En kveld fylt med latter og store overraskelser!",
    wineHighlights: [
      "6 hemmelige viner fra toppregioner i den gamle og nye verden",
      "Premie til kveldens beste smaker"
    ],
    foodPairing: "Rikt utvalg av italienske og franske oster, charcuterie og nybakt surdeigsbrød.",
    dressCode: "Uformelt og hyggelig"
  }
];

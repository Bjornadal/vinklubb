export interface MembershipTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  exclusivePerks: string[];
  badge?: string;
}

export const membershipTiers: MembershipTier[] = [
  {
    id: "medlem",
    name: "Cuvée Medlem",
    subtitle: "For den engasjerte vinelskeren som vil oppleve alle klubbens kjernearrangementer.",
    price: "1 450 kr",
    period: "per halvår",
    popular: true,
    badge: "Mest populær",
    features: [
      "Prioritert plass på alle 8–10 årlige smakinger",
      "Medlemspris på smakinger (sparer 250–350 kr per kveld)",
      "Tilgang til klubbens lukkede WhatsApp- / meldingskanal",
      "Kuratert smakshefte og notatbok i skinn",
      "Stemmerett ved valg av årets temaregioner"
    ],
    exclusivePerks: [
      "Forkjøpsrett ved begrensede spesialsmakinger",
      "Mulighet for å ta med 1 ledsager/gjest til medlemspris 2 ganger i året"
    ]
  },
  {
    id: "ambassador",
    name: "Cuvée Grand Cru Ambassadør",
    subtitle: "For vinkjenneren og samleren som søker det mest eksklusive og sjeldne.",
    price: "3 200 kr",
    period: "per halvår",
    popular: false,
    badge: "Eksklusivt",
    features: [
      "Alt i Cuvée Medlem inkludert",
      "Garantert reservert plass på samtlige samlinger og jubileumsmiddager",
      "Invitasjon til den årlige 'Kjellerkvelden' med modne viner fra Carolines private arkiv",
      "Deltakelse i fellesbestillinger og allokeringer av sjeldne årganger",
      "Personlig sommelier-konsultasjon til private anledninger eller egen vinkjeller"
    ],
    exclusivePerks: [
      "Eksklusiv 66° Cuvée inngravert sommelier-korketrekker fra Laguiole",
      "Prioritert tilgang til planlagte vinreiser"
    ]
  },
  {
    id: "gjest",
    name: "Gjest & Vinsnuser",
    subtitle: "For deg som vil oppleve en enkeltkveld eller teste ut klubben før du søker medlemskap.",
    price: "0 kr",
    period: "i medlemsavgift",
    popular: false,
    features: [
      "Motta nyhetsbrev med datoer og vintips fra Caroline",
      "Tilgang til ledige restplasser på arrangementer 48t før start",
      "Ordinær gjestepris per smaking",
      "Delta på åpne introduksjonskvelder"
    ],
    exclusivePerks: [
      "Ingen fast binding – betal kun for smakingene du deltar på"
    ]
  }
];

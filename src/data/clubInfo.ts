export interface ClubInfo {
  name: string;
  tagline: string;
  subtitle: string;
  latitude: string;
  location: string;
  leader: {
    name: string;
    role: string;
    title: string;
    quote: string;
    bio: string[];
    favoriteRegions: string[];
  };
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
  manifesto: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  contact: {
    email: string;
    phone: string;
    city: string;
    region: string;
    meetingLocation: string;
  };
}

export const clubInfo: ClubInfo = {
  name: "66° Cuvée",
  tagline: "Edle dråper under Polarsirkelen",
  subtitle: "En eksklusiv vinklubb i Mo i Rana for nysgjerrige ganer, lidenskapelige samlere og livsnytere.",
  latitude: "66° 18′ 45″ N",
  location: "Mo i Rana, Helgeland",
  leader: {
    name: "Caroline Skovholt",
    role: "Leder & Grunnlegger",
    title: "Vinentusiast & Sommelier-initiativtager",
    quote: "Vin er geografi, historie, håndverk og kjemi på flaske – men fremfor alt handler det om fellesskapet som oppstår når glassene heves.",
    bio: [
      "Caroline Skovholt er drivkraften bak 66° Cuvée. Med en dyp forkjærlighet for terroir-drevne viner og et brennende ønske om å berike vinmiljøet i Mo i Rana, startet hun klubben for å samle vininteresserte til uforglemmelige kvelder.",
      "Hennes filosofi er at vin aldri skal være snobbete, men alltid kompromissløs på kvalitet, nysgjerrighet og sanselig opplevelse. Gjennom blindsmakinger, produsentfokus og nøye kuraterte mat- og vinkombinasjoner tar hun medlemmene med på en reise gjennom verdens fremste vinregioner."
    ],
    favoriteRegions: [
      "Côte de Nuits (Burgund)",
      "Montagne de Reims (Champagne)",
      "Piemonte (Barolo & Barbaresco)",
      "Mosel (Tyskland)"
    ]
  },
  stats: [
    {
      value: "66° N",
      label: "Polarsirkel-latitude",
      detail: "Verdens nordligste eksklusive vinklubb-miljø"
    },
    {
      value: "8–10",
      label: "Årlige samlinger",
      detail: "Temasmakinger, middager og blindtester"
    },
    {
      value: "35",
      label: "Medlemskapstak",
      detail: "Intime rammer for maksimal opplevelse"
    },
    {
      value: "100%",
      label: "Lidenskap",
      detail: "Håndplukkede viner fra anerkjente kjellere"
    }
  ],
  manifesto: [
    {
      title: "Kunnskap uten snobberi",
      description: "Vi fordyper oss i druer, jordsmonn, fatlagring og årganger med faglig tyngde, men i en varm, inkluderende og avslappet atmosfære."
    },
    {
      title: "Kuraterte dråper",
      description: "Hver eneste flaske som åpnes i 66° Cuvée er personlig valgt ut – fra ikoniske Grand Cru-marker til skjulte naturvinperler og små håndverksprodusenter."
    },
    {
      title: "Gastronomisk harmoni",
      description: "En god vin blir enestående i møte med riktig mat. Vi samarbeider med lokale kokker og delikatesser i Rana for å skape uforglemmelige smaksopplevelser."
    },
    {
      title: "Nordisk sanselighet",
      description: "Det er noe helt unikt ved å smake dyp, moden rødvin eller sprudlende champagne mens vintermørket og nordlyset hersker utenfor."
    }
  ],
  faqs: [
    {
      question: "Må jeg være en erfaren vinkjenner for å bli med?",
      answer: "Absolutt ikke. Det viktigste kriteriet for medlemskap i 66° Cuvée er ekte nysgjerrighet og glede over gode smaker. Caroline og klubbens faglige opplegg er tilpasset både deg som er i startfasen og deg med velfylt vinkjeller."
    },
    {
      question: "Hvor holdes smakingene i Mo i Rana?",
      answer: "Vi samles i intime og stemningsfulle lokaler i Mo i Rana, blant annet private selskapsrom, egnede vinkjellere og utvalgte restauranter med tilpassede menyer."
    },
    {
      question: "Hvor ofte arrangeres det vinkvelder?",
      answer: "Vi har ordinære samlinger ca. én gang i måneden (bortsett fra midtsommer), i tillegg til spontane 'kjellerkvelder', slipp-smakinger og temamiddager."
    },
    {
      question: "Hvordan finansieres vinene som smakes?",
      answer: "Hver smaking har en egenandel som dekker innkjøpspris på viner og eventuell servering. Medlemmer nyter godt av rabatterte priser og forkjøpsrett før arrangementer åpnes for gjester."
    }
  ],
  contact: {
    email: "caroline@66cuvee.no",
    phone: "+47 912 34 567",
    city: "Mo i Rana",
    region: "Nordland, Norge",
    meetingLocation: "Senter & utvalgte lokaler, Mo i Rana"
  }
};

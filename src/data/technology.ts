export interface TechnologyCard {
  title: string;
  body: string;
}

export const integrations = [
  "systemy SCADA / DCS",
  "systemy klasy ERP, MES oraz CMMS",
  "dokumentację techniczną i procesową",
  "systemy diagnostyczne i monitoringu stanu technicznego",
];

export const technologyCards: TechnologyCard[] = [
  {
    title: "Integracja danych",
    body: "Łączy informacje z rozproszonych źródeł i porządkuje je w spójny model operacyjny.",
  },
  {
    title: "Warstwa analityczna",
    body: "Ułatwia analizę trendów, jakości, efektywności oraz przyczyn problemów w procesach.",
  },
  {
    title: "Agentic AI",
    body: "Zapewnia szybki dostęp do wiedzy zapisanej w dokumentacji, systemach i wynikach analiz.",
  },
];

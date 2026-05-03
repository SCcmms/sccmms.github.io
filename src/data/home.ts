export interface WorkStep {
  eyebrow: string;
  title: string[];
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export const capabilities = [
  "Modelowanie procesów i pracy urządzeń",
  "Monitoring i optymalizacja produktów",
  "Monitoring pracy urządzeń i procesów",
  "Automatyzacja procesów wewnętrznych",
  "Optymalizacja procesu, zużycia oraz energii",
  "Prognozowanie wartości na bazie danych",
];

export const workSteps: WorkStep[] = [
  {
    eyebrow: "Zbierz dane",
    title: ["Z różnych", "źródeł"],
    body: "Dane z systemów produkcyjnych, utrzymania ruchu, jakości i dokumentacji technicznej są konsolidowane w jednym miejscu, aby stworzyć pełny obraz pracy zakładu.",
    image: "/assets/home/work-data.png",
    imageAlt: "Analityczka przeglądająca dane produkcyjne na panelu wizualnym",
  },
  {
    eyebrow: "Wykorzystaj potencjał",
    title: ["Platformy", "LyneoData"],
    body: "LyneoData Platform porządkuje rozproszone informacje, łączy je z kontekstem operacyjnym i udostępnia zespołom przemysłowym w formie gotowej do analizy oraz podejmowania decyzji.",
    image: "/assets/home/work-platform.png",
    imageAlt: "Wizualizacja danych w chmurze na urządzeniu mobilnym",
    reverse: true,
  },
  {
    eyebrow: "Osiągnij",
    title: ["rezultat"],
    body: "Lepszy dostęp do danych wspiera szybszą diagnostykę, ograniczanie przestojów, optymalizację procesów i rozwój predykcyjnego podejścia do zarządzania produkcją.",
    image: "/assets/home/work-result.png",
    imageAlt: "Specjaliści produkcji omawiają wyniki na hali przemysłowej",
  },
];

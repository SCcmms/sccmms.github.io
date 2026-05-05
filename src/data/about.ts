export interface TextPart {
  text: string;
  accent?: boolean;
  bold?: boolean;
}

export const challenges: TextPart[][] = [
  [
    { text: "Nieplanowane przestoje", accent: true },
    { text: " i awarie generujące znaczące koszty" },
  ],
  [
    { text: "Długi czas przezbrojeń", accent: true },
    { text: " przy zmiennej i krótkoseryjnej produkcji" },
  ],
  [
    { text: "Rozproszone, niepołączone " },
    { text: "źródła danych", accent: true },
    { text: " i brak spójnego obrazu procesów" },
  ],
  [
    { text: "Ograniczony dostęp " },
    { text: "do danych historycznych", accent: true },
    { text: " w formie wspierającej podejmowanie decyzji" },
  ],
  [
    { text: "Trudności w " },
    { text: "utrzymaniu stabilnej jakości", accent: true },
    { text: " przy częstych korektach procesów" },
  ],
  [
    { text: "Procesy, które są " },
    { text: "wydajne operacyjnie", accent: true },
    { text: ", ale nie są " },
    { text: "faktycznie zoptymalizowane", accent: true },
  ],
  [
    { text: "Problemy z wykorzystaniem " },
    { text: "wiedzy eksperckiej w codziennej pracy operacyjnej", accent: true },
    { text: " oraz wyzwania kadrowe" },
  ],
  [
    { text: "Wysokie koszty i złożoność", accent: true },
    { text: " wdrożeń rozwiązań opartych o AI i Machine Learning" },
  ],
];

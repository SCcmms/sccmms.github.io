import type { TextPart } from "./about";

export interface MemberData {
  name: string;
  text: TextPart[];
  image: string;
}

export const members: MemberData[] = [
  { 
    name: 'Dariusz Broda', 
    text: [
      { text: "Dr inż. Specjalista z kilkunastoletnim doświadczeniem w konserwacji predykcyjnej i diagnostyce technicznej.", bold: true },
      { text: "Prowadzi projekty z zakresu analityki danych i uczenia maszynowego w przemyśle, pomagając przedsiębiorstwom w optymalizacji procesów oraz podejmowaniu decyzji opartych na danych. Pracował m.in. w ABB, Aptiv, Reliability Solutions." }
    ], 
    image: '/assets/team/osoba1.png'},
  { name: 'Bartłomiej Greń', text: [
    { text: "Inżynier z 15-letnim doświadczeniem w przemyśle (automotive, przemysł ciężki, automatyka) z czego 7 lat we wdrożeniach analityki i AI dla przemysłu. ", bold: true },
    { text: "Specjalizuje się w analityce danych i diagnostyce maszyn oraz prowadzeniu projektów. Pracował m.in. w Grupie FAMUR i Reliability Solutions." }
  ], image: '/assets/team/osoba2.png'},
  { name: 'Piotr Matląg', text: [
    { text: "Absolwent Informatyki i Systemów Inteligentnych AGH, programista z 6-letnim doświadczeniem, specjalizujący się w tworzeniu aplikacji internetowych oraz zarządzaniu infrastrukturą IT.", bold: true },
    { text: "Posiada doświadczenie w programowaniu systemów predykcyjnego utrzymania ruchu oraz utrzymaniu przemysłowej infrastruktury komputerowej." }
  ], image: '/assets/team/osoba3.png'},
  { name: 'Grzegorz Mika', text: [
    { text: "Absolwent Matematyki Stosowanej AGH, analityk i inżynier danych z 8-letnim doświadczeniem.", bold: true },
    { text: "Od 2022 kierował zespołem IT, tworząc platformę predykcyjnego utrzymania ruchu w Reliability Solutions (Python, Go, JavaScript)." }
  ], image: '/assets/team/osoba4.png'},
  ];

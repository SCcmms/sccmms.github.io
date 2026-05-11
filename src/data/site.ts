export interface NavItem {
  label: string;
  href: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export const siteMetadata = {
  name: "LyneoData",
  url: "https://lyneodata.com",
  locale: "pl_PL",
  themeColor: "#020707",
  defaultImage: "/assets/home/hero-bg-figma.png",
};

export const pageMetadata = {
  home: {
    title: "LyneoData",
    description:
      "LyneoData pomaga firmom przemysłowym integrować, analizować i wykorzystywać dane produkcyjne do optymalizacji procesów.",
    path: "/",
    image: "/assets/home/hero-bg-figma.png",
  },
  about: {
    title: "Nasza misja",
    description:
      "Poznaj misję LyneoData: wspieramy przemysł w przechodzeniu od reaktywnego zarządzania do pracy opartej na rzetelnych danych.",
    path: "/o-nas/",
    image: "/assets/about/hero.png",
  },
  technology: {
    title: "Technologia",
    description:
      "LyneoData Platform integruje dane z systemów przemysłowych, dokumentacji i narzędzi analitycznych w jedno źródło wiedzy operacyjnej.",
    path: "/technologia/",
    image: "/assets/technology/hero.png",
  },
  team: {
    title: "Nasz Zespół",
    description:
      "LyneoData Platform integruje dane z systemów przemysłowych, dokumentacji i narzędzi analitycznych w jedno źródło wiedzy operacyjnej.",
    path: "/zespol/",
    image: "/assets/team/hero.png",
  },
  caseStudy: {
    title: "Nasze Projekty",
    description:
      "LyneoData Platform integruje dane z systemów przemysłowych, dokumentacji i narzędzi analitycznych w jedno źródło wiedzy operacyjnej.",
    path: "/nasz-projekty/",
    image: "/assets/technology/hero.png",
  },
} satisfies Record<string, PageMetadata>;

export const navItems: NavItem[] = [
  { label: "Nasza misja", href: "/o-nas/" },
  { label: "Technologia", href: "/technologia/" },
  { label: "Nasz Zespół", href: "/zespol/" },
];

export const contact = {
  email: "biuro@lyneodata.com",
  address: "ul. Szlak 77 / 222, 31-153 Kraków",
};

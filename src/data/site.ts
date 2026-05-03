export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Nasza misja", href: "/o-nas/" },
  { label: "Technologia", href: "/technologia/" },
];

export const contact = {
  email: "biuro@lyneodata.com",
  address: "ul. Szlak 77 / 222, 31-153 Kraków",
};

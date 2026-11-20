export interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Műtétek",
    href: "/",
    children: [
      {
        label: "Daganatsebészeti műtétek",
        href: "/",
      },
      {
        label: "Érsebészeti műtét",
        href: "/",
      },
      {
        label: "Fül-orr-gégészeti műtétek",
        href: "/",
      },
      {
        label: "Gerincsebészeti műtétek",
        href: "/",
      },
      {
        label: "Gyermeksebészet",
        href: "/",
      },
      {
        label: "Kéz- és lábsebészeti műtétek",
        href: "/",
      },
      {
        label: "Nőgyógyászati műtétek",
        href: "/",
      },
      {
        label: "Ortopédiai műtétek",
        href: "/",
      },
      {
        label: "Sebészeti műtétek",
        href: "/",
      },
      {
        label: "Szemészeti műtétek",
        href: "/",
      },
      {
        label: "Urológiai műtétek",
        href: "/",
      },
      {
        label: "Tartózkodás a kórházban",
        href: "/",
      },
      {
        label: "Medicare Optika",
        href: "/",
      },
    ],
  },
  {
    label: "Vizsgálatok",
    href: "/",
    children: [
      {
        label: "PCR és IgG ellenanyag koronavírus tesztek",
        href: "/",
      },
      {
        label: "Betegszállítás",
        href: "/",
      },
      {
        label: "Diagnosztika",
        href: "/",
      },
      {
        label: "Laborvizsgálatok",
        href: "/",
      },
      {
        label: "Szakrendelések",
        href: "/",
      },
      {
        label: "Szakvizsgálatok",
        href: "/",
      },
      {
        label: "Vizsgálati csomagok",
        href: "/",
      },
    ],
  },
  {
    label: "Szolgáltatóhelyek",
    href: "/",
    children: [
      {
        label: "Budapesti Klinikák",
        href: "/",
      },
      {
        label: "Esztétikai Klinika",
        href: "/",
      },
      {
        label: "Fogászatok",
        href: "/",
      },
      {
        label: "Gyógyszertárak",
        href: "/",
      },
      {
        label: "Laborpontok",
        href: "/",
      },
      {
        label: "Medicare Fitness",
        href: "/",
      },
      {
        label: "Medicare Optika",
        href: "/",
      },
      {
        label: "Medicare Szülészet",
        href: "/",
      },
      {
        label: "Medicare Ügyeleti Centrum",
        href: "/",
      },
      {
        label: "Vidéki Klinikák",
        href: "/",
      },
    ],
  },
  {
    label: "Árak",
    href: "/",
    children: [
      {
        label: "Szülészeti árlista",
        href: "/",
      },
      {
        label: "Esztétikai kezelések árlista",
        href: "/",
      },
      {
        label: "Szakrendelések árlista",
        href: "/",
      },
      {
        label: "Műtéti árlista",
        href: "/",
      },
      {
        label: "Laborvizsgálati árlista",
        href: "/",
      },
      {
        label: "Diagnosztika árlista",
        href: "/",
      },
    ],
  },
  {
    label: "Orvosok",
    href: "/",
  },
  {
    label: "Rólunk",
    href: "/",
    children: [
      {
        label: "Vállalati megoldások",
        href: "/",
      },
      {
        label: "Időpontlemondási és -módosítási szabályzat",
        href: "/",
      },
      {
        label: "Páciensvélemények",
        href: "/",
      },
      {
        label: "Karrier",
        href: "/",
      },
      {
        label: "Galéria",
        href: "/",
      },
      {
        label: "Virtuális túra",
        href: "/",
      },
      {
        label: "Blog",
        href: "/",
      },
    ],
  },
  {
    label: "Kapcsolat",
    href: "/",
    children: [
      {
        label: "Hasznos tudnivalók",
        href: "/",
      },
    ],
  },
  {
    label: "Fitness-wellness",
    href: "/",
    children: [
      {
        label: "LIFE1 FITNESS powered by Medicare",
        href: "/",
      },
    ],
  },
  {
    label: "Webshop",
    href: "/",
    children: [
      {
        label: "Medicare webshop",
        href: "/",
      },
      {
        label: "Optika webshop",
        href: "/",
      },
    ],
  },
];

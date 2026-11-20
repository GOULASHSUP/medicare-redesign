export interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Műtétek",
    href: "/mutetek",
    children: [
      {
        label: "Daganatsebészeti műtétek",
        href: "/mutetek/daganatsebeszeti-mutetek",
      },
      {
        label: "Érsebészeti műtét",
        href: "/mutetek/ersebeszeti-mutet",
      },
      {
        label: "Fül-orr-gégészeti műtétek",
        href: "/mutetek/ful-orr-gegeszeti-mutetek",
      },
      {
        label: "Gerincsebészeti műtétek",
        href: "/mutetek/gerincsebeszeti-mutetek",
      },
      {
        label: "Gyermeksebészet",
        href: "/mutetek/gyermeksebeszet",
      },
      {
        label: "Kéz- és lábsebészeti műtétek",
        href: "/mutetek/kez-es-labsebeszeti-mutetek",
      },
      {
        label: "Nőgyógyászati műtétek",
        href: "/mutetek/nogyogyaszati-mutetek",
      },
      {
        label: "Ortopédiai műtétek",
        href: "/mutetek/ortopediai-mutetek",
      },
      {
        label: "Sebészeti műtétek",
        href: "/mutetek/sebeszeti-mutetek",
      },
      {
        label: "Szemészeti műtétek",
        href: "/mutetek/szemeszeti-mutetek",
      },
      {
        label: "Urológiai műtétek",
        href: "/mutetek/urologiai-mutetek",
      },
      {
        label: "Tartózkodás a kórházban",
        href: "/mutetek/tartozkodas-a-korhazban",
      },
      {
        label: "Medicare Optika",
        href: "/medicare-optika",
      },
    ],
  },
  {
    label: "Vizsgálatok",
    href: "/vizsgalatok",
    children: [
      {
        label: "PCR és IgG ellenanyag koronavírus tesztek",
        href: "/vizsgalatok/pcr-es-igg-koronavirus-tesztek",
      },
      {
        label: "Betegszállítás",
        href: "/vizsgalatok/betegszallitas",
      },
      {
        label: "Diagnosztika",
        href: "/vizsgalatok/diagnosztika",
      },
      {
        label: "Laborvizsgálatok",
        href: "/vizsgalatok/laborvizsgalatok",
      },
      {
        label: "Szakrendelések",
        href: "/vizsgalatok/szakrendelesek",
      },
      {
        label: "Szakvizsgálatok",
        href: "/vizsgalatok/szakvizsgalatok",
      },
      {
        label: "Vizsgálati csomagok",
        href: "/vizsgalatok/vizsgalati-csomagok",
      },
    ],
  },
  {
    label: "Szolgáltatóhelyek",
    href: "/szolgaltatohelyek",
    children: [
      {
        label: "Budapesti Klinikák",
        href: "/szolgaltatohelyek/budapesti-klinikak",
      },
      {
        label: "Esztétikai Klinika",
        href: "/szolgaltatohelyek/esztetikai-klinika",
      },
      {
        label: "Fogászatok",
        href: "/szolgaltatohelyek/fogaszatok",
      },
      {
        label: "Gyógyszertárak",
        href: "/szolgaltatohelyek/gyogyszertarak",
      },
      {
        label: "Laborpontok",
        href: "/szolgaltatohelyek/laborpontok",
      },
      {
        label: "Medicare Fitness",
        href: "/szolgaltatohelyek/medicare-fitness",
      },
      {
        label: "Medicare Optika",
        href: "/medicare-optika",
      },
      {
        label: "Medicare Szülészet",
        href: "/szolgaltatohelyek/medicare-szuleszet",
      },
      {
        label: "Medicare Ügyeleti Centrum",
        href: "/szolgaltatohelyek/medicare-ugyeleti-centrum",
      },
      {
        label: "Vidéki Klinikák",
        href: "/szolgaltatohelyek/videki-klinikak",
      },
    ],
  },
  {
    label: "Árak",
    href: "/arak",
    children: [
      {
        label: "Szülészeti árlista",
        href: "/arak/szuleszeti-arlista",
      },
      {
        label: "Esztétikai kezelések árlista",
        href: "/arak/esztetikai-kezelesek-arlista",
      },
      {
        label: "Szakrendelések árlista",
        href: "/arak/szakrendelesek-arlista",
      },
      {
        label: "Műtéti árlista",
        href: "/arak/muteti-arlista",
      },
      {
        label: "Laborvizsgálati árlista",
        href: "/arak/laborvizsgalati-arlista",
      },
      {
        label: "Diagnosztika árlista",
        href: "/arak/diagnosztika-arlista",
      },
    ],
  },
  {
    label: "Orvosok",
    href: "/orvosok",
  },
  {
    label: "Rólunk",
    href: "/rolunk",
    children: [
      {
        label: "Vállalati megoldások",
        href: "/rolunk/vallalati-megoldasok",
      },
      {
        label: "Időpontlemondási és -módosítási szabályzat",
        href: "/rolunk/idopontlemondasi-es-modositasi-szabalyzat",
      },
      {
        label: "Páciensvélemények",
        href: "/rolunk/paciensvelemenyek",
      },
      {
        label: "Karrier",
        href: "/rolunk/karrier",
      },
      {
        label: "Galéria",
        href: "/rolunk/galeria",
      },
      {
        label: "Virtuális túra",
        href: "/rolunk/virtualis-tura",
      },
      {
        label: "Blog",
        href: "/rolunk/blog",
      },
    ],
  },
  {
    label: "Kapcsolat",
    href: "/kapcsolat",
    children: [
      {
        label: "Hasznos tudnivalók",
        href: "/kapcsolat/hasznos-tudnivalok",
      },
    ],
  },
  {
    label: "Fitness-wellness",
    href: "/fitness-wellness",
    children: [
      {
        label: "LIFE1 FITNESS powered by Medicare",
        href: "/fitness-wellness/life1-fitness",
      },
    ],
  },
  {
    label: "Webshop",
    href: "/webshop",
    children: [
      {
        label: "Medicare webshop",
        href: "/webshop/medicare-webshop",
      },
      {
        label: "Optika webshop",
        href: "/webshop/optika-webshop",
      },
    ],
  },
];

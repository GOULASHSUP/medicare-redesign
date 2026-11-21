import { navigationItems, type NavigationItem } from "./navigation";

export interface SearchableService {
  id: string;
  title: string;
  description: string;
  href: string;
  keywords: string[];
}
const featuredServices: SearchableService[] = [
  {
    id: "alex-multiplex",
    title: "ALEX multiplex allergiateszt",
    description: "Átfogó allergiavizsgálat egyetlen vérvételből.",
    href: "/alex-multiplex-allergiateszt",
    keywords: [
      "allergia",
      "allergiavizsgálat",
      "allergiateszt",
      "alex",
      "pollen",
    ],
  },
  {
    id: "mutetek",
    title: "Műtétek és fekvőbeteg-ellátás",
    description: "Sebészeti beavatkozások és kórházi ellátás.",
    href: "/mutetek",
    keywords: ["műtét", "sebészet", "sebész", "kórház", "fekvőbeteg"],
  },
  {
    id: "fox-286",
    title: "FOX 286 ételintolerancia panel",
    description: "Ételintolerancia-vizsgálat számos élelmiszerre.",
    href: "/fox-286-etelintolerancia-panel",
    keywords: [
      "ételintolerancia",
      "ételérzékenység",
      "élelmiszer",
      "fox",
      "emésztés",
    ],
  },
  {
    id: "telemedicina",
    title: "Telemedicina",
    description: "Orvosi konzultáció kényelmesen, online.",
    href: "/telemedicina",
    keywords: [
      "online",
      "telemedicina",
      "videókonzultáció",
      "orvosi konzultáció",
      "távkonzultáció",
    ],
  },
  {
    id: "start",
    title: "Start állapotfelmérő csomag",
    description: "Átfogó egészségügyi állapotfelmérés.",
    href: "/start-allapotfelmero-csomag",
    keywords: [
      "szűrés",
      "szűrővizsgálat",
      "állapotfelmérés",
      "egészség",
      "start",
    ],
  },
  {
    id: "obezitologia",
    title: "Obezitológiai tanácsadás",
    description: "Szakértői segítség a testsúlykezelésben.",
    href: "/obezitologiai-tanacsadas",
    keywords: ["obezitológia", "elhízás", "testsúly", "fogyás", "túlsúly"],
  },
  {
    id: "meddoseg",
    title: "Meddőségi tanácsadás",
    description: "Szakértői támogatás a családtervezéshez.",
    href: "/meddosegi-tanacsadas",
    keywords: ["meddőség", "termékenység", "gyermekvállalás", "családtervezés"],
  },
];

function getNavigationServices(
  items: NavigationItem[],
  parentLabel?: string,
): SearchableService[] {
  return items.flatMap((item) => {
    const currentPath = parentLabel
      ? `${parentLabel} / ${item.label}`
      : item.label;

    const service: SearchableService = {
      id: `nav-${currentPath.toLocaleLowerCase("hu-HU").replace(/\s+/g, "-")}`,
      title: item.label,
      description: parentLabel
        ? `${parentLabel} – Medicare szolgáltatások és információk.`
        : "Medicare szolgáltatások és információk.",
      href: item.href ?? "/",
      keywords: [item.label],
    };

    const children = item.children
      ? getNavigationServices(item.children, item.label)
      : [];

    return [service, ...children];
  });
}

const navigationServices = getNavigationServices(navigationItems);

const uniqueServices = new Map<string, SearchableService>();

for (const service of [...featuredServices, ...navigationServices]) {
  const key = service.title.toLocaleLowerCase("hu-HU").trim();

  if (!uniqueServices.has(key)) {
    uniqueServices.set(key, service);
  }
}

export const searchableServices = Array.from(uniqueServices.values());

// Animated example searches
export const exampleSearches = [
  "Allergiavizsgálat",
  "Daganatsebészeti műtétek",
  "Ételintolerancia",
  "Telemedicina",
  "Állapotfelmérés",
  "Obezitológia",
  "Meddőség",
];

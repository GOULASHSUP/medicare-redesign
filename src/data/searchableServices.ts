import { navigationItems, type NavigationItem } from "./navigation";

export interface SearchableService {
  id: string;
  title: string;
  description: string;
  href: string;
  keywords: string[];
}

// Featured services with custom descriptions and search keywords
const featuredServices: SearchableService[] = [
  {
    id: "alex-multiplex",
    title: "ALEX multiplex allergiateszt",
    description: "Átfogó allergiavizsgálat egyetlen vérvételből.",
    href: "/",
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
    href: "/",
    keywords: ["műtét", "sebészet", "sebész", "kórház", "fekvőbeteg"],
  },
  {
    id: "fox-286",
    title: "FOX 286 ételintolerancia panel",
    description: "Ételintolerancia-vizsgálat számos élelmiszerre.",
    href: "/",
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
    href: "/",
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
    href: "/",
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
    href: "/",
    keywords: ["obezitológia", "elhízás", "testsúly", "fogyás", "túlsúly"],
  },
  {
    id: "meddoseg",
    title: "Meddőségi tanácsadás",
    description: "Szakértői támogatás a családtervezéshez.",
    href: "/",
    keywords: ["meddőség", "termékenység", "gyermekvállalás", "családtervezés"],
  },
];

// Convert navigation items and nested dropdown entries into search results
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

// Combine featured services and navigation entries, removing duplicate titles
const uniqueServices = new Map<string, SearchableService>();

for (const service of [...featuredServices, ...navigationServices]) {
  const key = service.title.toLocaleLowerCase("hu-HU").trim();

  if (!uniqueServices.has(key)) {
    uniqueServices.set(key, service);
  }
}

export const searchableServices = Array.from(uniqueServices.values());

// Animated example searches remain unchanged
export const exampleSearches = [
  "Allergiavizsgálat",
  "Műtétek",
  "Ételintolerancia",
  "Telemedicina",
  "Állapotfelmérés",
  "Obezitológia",
  "Meddőség",
];

export interface OncologyFaqItem {
  id: string;
  question: string;
  answer: string[];
}

export const oncologyFaq: OncologyFaqItem[] = [
  {
    id: "what-is-oncology-surgery",
    question: "Mivel foglalkozik a daganatsebészet?",
    answer: [
      "A daganatsebészet a daganatos betegségek műtéti kezelésével foglalkozó szakterület. Célja a daganatos elváltozások eltávolítása, valamint a beteg állapotának és életminőségének javítása.",
      "A megfelelő műtéti eljárás kiválasztása minden esetben a betegség típusától, kiterjedésétől és a páciens egyéni állapotától függ.",
    ],
  },
  {
    id: "symptoms",
    question:
      "Milyen tünetekkel érdemes felkeresni a daganatsebészeti szakrendelést?",
    answer: [
      "Tartós hasi panaszok, megváltozott székelési szokások, visszatérő vérzés vagy korábban diagnosztizált daganatos elváltozás esetén indokolt lehet szakorvosi konzultáció.",
      "A felsorolt tüneteknek számos oka lehet, ezért a megfelelő vizsgálatok és a további teendők meghatározásához szakorvosi értékelés szükséges.",
    ],
  },
  {
    id: "conditions",
    question: "Milyen betegségek kezelésével foglalkozik a daganatsebészet?",
    answer: [
      "A daganatsebészet többek között a vastag- és végbél daganatos elváltozásainak műtéti kezelésével foglalkozik.",
      "A kezelési lehetőségek a pontos diagnózistól és a betegség stádiumától függnek.",
    ],
  },
  {
    id: "diagnosis",
    question: "Hogyan történik a vastagbéldaganatok diagnosztikája?",
    answer: [
      "A kivizsgálás során a szakorvos áttekinti a páciens panaszait, kórtörténetét és korábbi leleteit. A diagnózis felállításához szükség lehet endoszkópos, képalkotó és szövettani vizsgálatokra.",
      "A vizsgálatok eredményei alapján határozható meg a további kezelés és az esetleges műtéti beavatkozás szükségessége.",
    ],
  },
  {
    id: "consultation",
    question: "Mi történik a konzultáció során?",
    answer: [
      "A szakorvosi konzultáció során az orvos megismeri a páciens panaszait, áttekinti a rendelkezésre álló vizsgálati eredményeket, és megbeszéli a lehetséges kezelési módokat.",
      "Amennyiben műtét válik szükségessé, tájékoztatást adhat a beavatkozás menetéről, a várható felépülésről és a szükséges előkészületekről.",
    ],
  },
  {
    id: "surgeries",
    question: "Milyen daganatsebészeti műtéteket végeznek?",
    answer: [
      "A Medicare Magánkórház daganatsebészeti szolgáltatásai között különböző vastag- és végbélsebészeti beavatkozások szerepelnek.",
      "Az elérhető műtétek részletes felsorolása az oldal műtéti beavatkozásokat bemutató részében található.",
    ],
  },
  {
    id: "laparoscopy",
    question: "Mik a laparoszkópos technika előnyei?",
    answer: [
      "A laparoszkópos sebészet során a beavatkozás általában kisebb metszéseken keresztül történik. Bizonyos esetekben ez kisebb műtéti megterheléssel, rövidebb kórházi tartózkodással és gyorsabb felépüléssel járhat.",
      "Nem minden beavatkozás végezhető laparoszkópos módszerrel. Az alkalmazható technikáról a kezelőorvos dönt a páciens állapota és a műtét jellege alapján.",
    ],
  },
  {
    id: "comfort",
    question: "Milyen kényelmi szolgáltatások érhetők el?",
    answer: [
      "A Medicare Magánkórház modern, légkondicionált betegszobákkal és személyre szabott ápolási szolgáltatásokkal támogatja a páciensek kényelmét a kórházi tartózkodás során.",
      "A kórházi elhelyezésről és az elérhető szolgáltatásokról a tartózkodással kapcsolatos tájékoztatásban olvashat részletesebben.",
    ],
  },
];

import maternityImage from "../assets/images/news/szuleszeti-nyilt-nap.webp";
import offersImage from "../assets/images/news/aktualis-ajanlatok.webp";
import healthAdviceImage from "../assets/images/news/egeszsegugyi-tanacsok.jpg";

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "maternity-open-day",
    category: "ESEMÉNYEK",
    title: "Szülészeti nyílt napok a Medicare-nél",
    description:
      "Ismerje meg szülészeti szolgáltatásainkat, szakembereinket és a Medicare által kínált lehetőségeket.",
    image: maternityImage,
    imageAlt: "Szülészeti ellátás a Medicare-nél",
    href: "/aktualitasok/szuleszeti-nyilt-napok",
  },
  {
    id: "special-offers",
    category: "AJÁNLATOK",
    title: "Aktuális egészségügyi ajánlataink",
    description:
      "Fedezze fel aktuális szolgáltatásainkat és egészségügyi ajánlatainkat.",
    image: offersImage,
    imageAlt: "Egészségügyi szolgáltatások és ajánlatok",
    href: "/aktualitasok/aktualis-ajanlatok",
  },
  {
    id: "health-advice",
    category: "EGÉSZSÉGMEGŐRZÉS",
    title: "Hasznos tanácsok az egészsége megőrzéséhez",
    description:
      "Olvassa el szakértőink egészségmegőrzéssel és megelőzéssel kapcsolatos tanácsait.",
    image: healthAdviceImage,
    imageAlt: "Orvosi konzultáció a Medicare-nél",
    href: "/aktualitasok/egeszsegmegorzesi-tanacsok",
  },
];

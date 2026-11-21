import hospitalInterior from "../assets/images/hospital/varo.webp";
import surgicalCare from "../assets/images/hospital/mutet-medicarekorhaz.webp";
import diagnostics from "../assets/images/hospital/diagnosztika.jpg";

export interface HospitalShowcaseSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
  buttons: {
    label: string;
    href: string;
    variant: "primary" | "secondary";
  }[];
}

export const hospitalShowcaseSlides: HospitalShowcaseSlide[] = [
  {
    id: "hospital",
    eyebrow: "MEDICARE MAGÁNKÓRHÁZ",
    title: "Magas színvonalú ellátás, ahol Ön az első",
    description: [
      "Magánkórházunkban tapasztalt orvosok, korszerű diagnosztikai eszközök és személyre szabott ellátás segítik a gyógyulást.",
      "Kényelmes, modern környezetben gondoskodunk arról, hogy a vizsgálatoktól a műtéti beavatkozásokig minden lépésnél biztonságban érezze magát.",
    ],
    image: hospitalInterior,
    imageAlt: "A Medicare Magánkórház modern, világos belső tere",
    buttons: [
      {
        label: "Bővebben a kórházról",
        href: "/rolunk/medicare-magankorhaz",
        variant: "primary",
      },
      {
        label: "Megnézem a kórházat",
        href: "/rolunk/virtualis-tura",
        variant: "secondary",
      },
    ],
  },
  {
    id: "surgery",
    eyebrow: "MŰTÉTEK ÉS FEKVŐBETEG-ELLÁTÁS",
    title: "Korszerű műtéti megoldások, gondoskodó környezetben",
    description: [
      "Sebészeti ellátásunk során modern orvosi technológiákat és korszerű műtéti eljárásokat alkalmazunk, kiemelt figyelmet fordítva pácienseink biztonságára.",
      "A beavatkozást követően kényelmes, légkondicionált szobák és figyelmes szakápolói támogatás segítik a felépülést.",
    ],
    image: surgicalCare,
    imageAlt: "Orvosi csapat műtéti beavatkozás közben",
    buttons: [
      {
        label: "Műtéti megoldások",
        href: "/mutetek",
        variant: "primary",
      },
    ],
  },
  {
    id: "diagnostics",
    eyebrow: "DIAGNOSZTIKA ÉS SZAKRENDELÉSEK",
    title: "Pontos diagnózis, személyre szabott ellátás",
    description: [
      "A Medicare széles körű diagnosztikai vizsgálatokkal és szakorvosi konzultációkkal segíti az egészségügyi problémák mielőbbi felismerését.",
      "Korszerű vizsgálati lehetőségeink és tapasztalt szakembereink támogatják Önt a kivizsgálástól a megfelelő kezelési terv kialakításáig.",
    ],
    image: diagnostics,
    imageAlt: "Szakorvosi konzultáció a Medicare egészségügyi intézményében",
    buttons: [
      {
        label: "Vizsgálatok megtekintése",
        href: "/vizsgalatok",
        variant: "primary",
      },
    ],
  },
];

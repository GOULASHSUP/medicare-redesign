import sztipitsImage from "../assets/images/doctors/sztipits-tamas.jpg";
import meszarosImage from "../assets/images/doctors/meszaros-peter.jpg";

export interface OncologyDoctor {
  id: string;
  name: string;
  position: string;
  description: string[];
  image: string;
  imageAlt: string;
}

export const oncologyDoctors: OncologyDoctor[] = [
  {
    id: "sztipits-tamas",
    name: "Dr. Sztipits Tamás F.E.B.S.",
    position: "Daganatsebész szakorvos",
    description: [
      "Dr. Sztipits Tamás a vastagbél- és végbélsebészet, valamint a korszerű laparoszkópos eljárások tapasztalt szakembere. Pályafutása során a Semmelweis Egyetemen és az Országos Onkológiai Intézetben dolgozott, szakmai tudását pedig többek között Angliában, Olaszországban és az Egyesült Államokban gyarapította.",
      "Európai onkosebészeti szakvizsgával rendelkezik, aktívan részt vesz a tudományos életben, az orvosképzésben és a sebészeti irányelvek kidolgozásában. 2025 áprilisában csatlakozott a Medicare Kórházhoz, ahol a daganatsebészeti profil szakmai koordinációját végzi.",
    ],
    image: sztipitsImage,
    imageAlt: "Dr. Sztipits Tamás",
  },
  {
    id: "meszaros-peter",
    name: "Dr. Mészáros Péter",
    position: "Daganatsebész szakorvos",
    description: [
      "Dr. Mészáros Péter a vastagbéldaganatok sebészeti kezelésére és a laparoszkópos eljárásokra specializálódott. Pályafutása során az Országos Onkológiai Intézetben meghatározó szerepet vállalt a laparoszkópos vastagbélsebészet fejlesztésében, valamint a máj-, hasnyálmirigy- és gyomorsebészeti eljárások bevezetésében.",
      "Szakmai tapasztalatát több európai tanulmányúton bővítette, rendszeresen részt vesz tudományos konferenciákon, oktatásban és klinikai kutatásokban. 2025 áprilisában csatlakozott a Medicare Kórház onkosebészeti csapatához.",
    ],
    image: meszarosImage,
    imageAlt: "Dr. Mészáros Péter",
  },
];

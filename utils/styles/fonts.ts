import { Inter, Poppins, Source_Sans_3, Inter_Tight, IBM_Plex_Sans_Condensed, Playfair_Display, Bebas_Neue } from "next/font/google";

type Props = {
  subset:  string | string[];
  weight: string | string[];
  style: string | string[];
  display: string | string[];

}
// define your variable fonts
const bebas = Bebas_Neue({ weight: ["400"], subsets:["latin"], style:["normal"] });
const inter = Inter({ subsets: ["latin"] });
const playfair_display = Playfair_Display({subsets:["latin"], weight:["500"], style:["italic"]});
const ibm_plex_sans_condense = IBM_Plex_Sans_Condensed({weight: ['400', '700'], subsets: ["latin"], style:"normal" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "900"], style: ["normal"]   });
const inter_tight = Inter_Tight({
    subsets: ["latin"],
    display: "swap", // Ensure proper loading behavior
  });
// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_3({  subsets: ["latin"], weight: "400" });
const sourceCodePro700 = Source_Sans_3({ subsets: ["latin"],  weight: "700" });
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
export { inter, inter_tight, poppins, sourceCodePro400, sourceCodePro700, ibm_plex_sans_condense, playfair_display, bebas };
import { Inter, Lora, Source_Sans_3, Inter_Tight, IBM_Plex_Sans_Condensed } from "next/font/google";

// define your variable fonts
const inter = Inter({ subsets: ["latin"] });
const ibm_plex_sans_condense = IBM_Plex_Sans_Condensed({weight: ['400', '700'], subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const inter_tight = Inter_Tight({
    subsets: ["latin"],
    display: "swap", // Ensure proper loading behavior
  });
// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_3({  subsets: ["latin"], weight: "400" });
const sourceCodePro700 = Source_Sans_3({ subsets: ["latin"],  weight: "700" });
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
export { inter, inter_tight, lora, sourceCodePro400, sourceCodePro700, ibm_plex_sans_condense };

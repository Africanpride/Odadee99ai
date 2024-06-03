import ArticilesExcerpts from "@/components/ArticilesExcerpts";
import FAQS from "@/components/FAQS";
import MiddleStats from "@/components/MiddleStats";
import { Movement } from "@/components/movement";
import Newsletter from "@/components/Newsletter";
import ProjectBreakdown from "@/components/ProjectBreakdown";
import QuoteAI from "@/components/QuoteAI";
import SectionIntro from "@/components/SectionIntro";
import SectionDisplay from "@/components/SectionIntro";
import SectionHead from "@/components/SectionHead";
import Image from "next/image";
import SectionIntro2 from "@/components/SectionIntro2";
import NextEvent from "@/components/NextEvent";
import Infinity from "@/components/Infinity";
import EmblaCarousel from "@/components/EmblaCarousel";

export default function Home() {
  const introText2 = ` In alignment with the global push towards net-zero, the lab facility will be equipped with solar panels, ensuring environmentally responsible operation. This commitment to sustainability underscores our shared dedication to a greener future.`;
  const introBlock2 = `Founded in 1938, Presec - Legon has grown into Ghana's premier high school, known for its excellence in STEM, business, and arts. With notable achievements, including eight wins in the National Science & Maths Quiz, the school exemplifies academic and moral excellence.`;
  return (
    <div>
      <SectionHead />
      <div className="space-y-3">
        <SectionIntro />
        <div className="hidden">
          <EmblaCarousel />
        </div>

        <QuoteAI />
        <SectionIntro2
          title="Innovate, Inspire, Lead"
          introText={introText2}
          introBlock={introBlock2}
          animationDisplay={true}
          animation={<Infinity />}
        />
        <NextEvent />
      </div>
      <ProjectBreakdown />

      <Movement />

      {/* <MiddleStats /> */}
      {/* <FAQS /> */}
      {/* <InfinityImage /> */}
      {/* <main className="flex min-h-screen flex-col items-center justify-center p-24">
        full screen rendering ....
      </main> */}
      <Newsletter />
    </div>
  );
}

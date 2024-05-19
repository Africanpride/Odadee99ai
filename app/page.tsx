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

export default function Home() {
  return (
    <div>
      <SectionHead />
      <SectionIntro />
      <QuoteAI />
       <SectionIntro2 />

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

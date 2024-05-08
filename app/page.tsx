
import FAQS from "@/components/FAQS";
import MiddleStats from "@/components/MiddleStats";
import { Movement } from "@/components/movement";
import Newsletter from "@/components/Newsletter";
import ProjectBreakdown from "@/components/ProjectBreakdown";
import QuoteAI from "@/components/QuoteAI";
import SectionDisplay from "@/components/SectionDisplay";
import SectionHead from "@/components/SectionHead";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SectionHead />
      <SectionDisplay />
      <ProjectBreakdown />
      
      {/* <MiddleStats /> */}
      <FAQS />
      <Movement />
      {/* <InfinityImage /> */}
      {/* <main className="flex min-h-screen flex-col items-center justify-center p-24">
        full screen rendering ....
      </main> */}
      <QuoteAI />
      <Newsletter />

    </div>
  );
}

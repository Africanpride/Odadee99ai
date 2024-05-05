import InfiniteLogos from "@/components/backup/sections/infinitelogos";
import InfinityImage from "@/components/InfinityImage";
import { Movement } from "@/components/movement";
import QuoteAI from "@/components/QuoteAI";
import SectionDisplay from "@/components/SectionDisplay";
import SectionHead from "@/components/SectionHead";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SectionHead />
      <SectionDisplay />
      <Movement />
      {/* <InfinityImage /> */}
      {/* <main className="flex min-h-screen flex-col items-center justify-center p-24">
        full screen rendering ....
      </main> */}
      <QuoteAI />
    </div>
  );
}

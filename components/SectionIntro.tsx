"use client";
import React from "react";
import { CircleChevronRight } from "lucide-react";
import Link from "next/link";
import {
  inter,
  ibm_plex_sans_condense,
  sourceCodePro400,
  sourceCodePro700,
  inter_tight,
} from "@/utils/styles/fonts";
import ImageGrid from "./ImageGrid";
import ButtonUI from "./ButtonUI";
import DonateButton from "./DonateButton";
import DonateOptions from "@/utils/DonateOptions";
import ImageGridProject1 from "./ImageGridProject1";

const titletext = `Empowering Tomorrow's Innovators`;

type Props = {
  title?: string; // Optional string prop with default value
  introText?: string | null;
  introBlock?: string | null;
  imageGrid?: React.ReactNode;
  className?: string | null;
  topSpace?: boolean | null; // Are we adding space to the top
};

const SectionIntro: React.FC<Props> = (props: Props) => {
  return (
    <section className={`${props.className} p-2 md:p-8 ${props.topSpace ?? 'md:pt-0 '}  md:py-24 bg-base-100 overflow-hidden`}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 h-auto ">
        <div className="flex h-auto md:min-h-dvh flex-col items-start justify-between md:p-12 p-4 rounded-3xl bg-blue-400/30  border-opacity-15  space-y-2 ">
          <div className="w-full flex justify-between items-center py-5 ">
            <div
              className={`${ibm_plex_sans_condense.className} font-bold text-lg md:text-xl lg:text-2xl  tracking-tighter uppercase col-span-4  `}
            >
              {props.title || titletext} {/* Use default or passed title */}
            </div>

            <div className="pulse hidden md:inline-block"></div>
          </div>
          <div className=" space-y-4 text-lg">
            <p
              className={` text-lg md:text-xl lg:text-2xl tracking-snug leading-snug break-keep	 ${inter_tight.className}`}
            >
              {props.introBlock
                ? props.introBlock
                : `Let's come together to build something extraordinary at Presec -
               Legon. Our AI lab isn't just about technology; it's about
               nurturing young minds, sparking their curiosity, and helping them
               become the leaders of tomorrow.`}
            </p>

            <p>
              {props.introText
                ? props.introText
                : `By providing them with the tools and guidance they need, we're not
              just developing the next generation of tech gurus – we're
              empowering them to become leaders who can solve real-world
              problems and make a positive impact on the world. The AI lab at
              Presec - Legon is more than just a place to learn; it's a
              springboard for innovation, a breeding ground for future leaders,
              and a testament to our commitment to building a brighter tomorrow.`}
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-start items-center gap-x-4 ">
            <ButtonUI
              actiontext="About Project"
              actionlink={"/about"}
              className=" w-full"
            />
            <DonateButton
              actiontext="Donate Now"
              className="btn-outline btn-info text-lg font-normal md:text-lg"
            >
              <DonateOptions />
            </DonateButton>
          </div>
        </div>
        <div className="hidden md:flex  gap-4 bg-none    overflow-hidden  rounded-3xl ">
        {props.imageGrid ?? <ImageGridProject1 />} 
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;

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

const titletext = `Empowering Tomorrow&apos;s Innovators`;

type Props = {
  title?: string; // Optional string prop with default value
};

const ArticilesExcerpts: React.FC<Props> = (props: Props) => {
  return (
    <section className="p-2 md:p-8 md:pt-0.5 md:py-24 bg-base-100 overflow-hidden  ">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-4 h-auto ">
        <div className="flex  gap-4 bg-none   overflow-hidden  rounded-3xl ">
          <ImageGrid />
        </div>
        <div className="flex h-auto md:min-h-dvh flex-col items-start justify-between md:p-12 p-4 rounded-3xl bg-blue-400/30  border-opacity-15  space-y-2 ">
          <div className="w-full flex justify-between items-center py-5 ">
            <div
              className={`${ibm_plex_sans_condense.className} font-bold text-lg md:text-xl  tracking-tighter uppercase col-span-4  `}
            >
              {props.title || titletext} {/* Use default or passed title */}
            </div>

            <div className="pulse hidden md:inline-block"></div>
          </div>
          <div className="prose">
            <p
              className={` md:prose-2xl tracking-snug leading-snug break-keep	 ${inter_tight.className}`}
            >
              Let&apos;s come together to build something extraordinary at Presec -
              Legon. Our AI lab isn&apos;t just about technology; it&apos;s about
              nurturing young minds, sparking their curiosity, and helping them
              become the leaders of tomorrow.
            </p>

            <p>
              By providing them with the tools and guidance they need, we&apos;re not
              just developing the next generation of tech gurus – we&apos;re
              empowering them to become leaders who can solve real-world
              problems and make a positive impact on the world. The AI lab at
              Presec - Legon is more than just a place to learn; it&apos;s a
              springboard for innovation, a breeding ground for future leaders,
              and a testament to our commitment to building a brighter tomorrow.
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
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ArticilesExcerpts;

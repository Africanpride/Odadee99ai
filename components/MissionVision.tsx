"use client";
import React from "react";
import { ibm_plex_sans_condense } from "@/utils/styles/fonts";
import CadioAnimation from "@/components/CadioAnimation";
import HelixAnimation from "@/components/HelixAnimation";
import { cardio } from "ldrs";

cardio.register();

type Props = {
  title?: string; // Optional string prop with default value
  introText?: string | null;
  introBlock?: React.ReactNode;
  animationDisplay?: boolean;
  icon?: JSX.Element;
};

const MissionVision = (props: Props) => {
  const defaultAnimate = `<div className="pulse hidden md:inline-block"></div>`;
  const myIcon = `<svg classname="cadio" x="0px" y="0px" viewBox="0 0 50 31.25" height="31.25" width="50" preserveAspectRatio="xMidYMid meet">
  <path classname="track" strokewidth="{4}" fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
  <path classname="car" strokewidth="{4}" fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
</svg>`;

  return (
    <div className=" w-full p-2 md:p-8 md:pt-0.5 md:py-24 ">
      <article className="relative min-h-auto md:min-h-dvh  p-4 rounded-3xl  bg-blue-800 md:p-32 w-full flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <h2
            className={`${ibm_plex_sans_condense.className} font-medium text-white text-3xl`}
          >
            Presec&apos;s Journey to Excellence
          </h2>
          <div>{props.animationDisplay ? props.icon : <CadioAnimation /> }</div>
        </div>
        <div className="flex items-center gap-4 text-white text-xl py-8 ">
          Presec was officially opened on 1 February 1938 with 10 students and 4
          teachers in Odumase Krobo in the eastern region of Ghana and moved to
          its current location in Accra in 1968. From a humble beginning, the
          school has now grown to become the most preferred high school in
          Ghana, particularly for STEM programs. The school also offers business
          and art programs. As of the 2023 academic year, the school had 5,473
          students and 238 teaching staff. Discipline, moral uprightness and
          academic excellence continue to be the school’s hallmark.
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 mt-4  gap-5">
          <li className=" h-auto  ">
            <div className="block h-full md:h-full  p-4  rounded-lg border border-white/50 md:p-12 hover:border-gray-500/40 space-y-4">
              <strong
                className={`${ibm_plex_sans_condense.className} font-medium text-white text-3xl pb-5`}
              >
                Vision of the AI Lab
              </strong>

              <p className="mt-1 text-xl font-medium text-gray-300">
                A lively learning space where students of diverse backgrounds
                come together to explore the possibilities of AI and realize
                their full capabilities. Through practical experiences,
                collaborative efforts across disciplines, and a strong
                foundation in ethics, we are laying the groundwork for a future
                where students can harness AI to create positive change in their
                own lives and communities.
              </p>
            </div>
          </li>
          <li className="h-auto  ">
            <div className="block h-auto  p-4  md:h-full rounded-lg border border-white/50 md:p-12 hover:border-gray-500/40 space-y-4">
              <strong
                className={`${ibm_plex_sans_condense.className} font-medium text-white text-3xl pb-5`}
              >
                Mision of the AI Lab
              </strong>

              <p className="mt-1 text-xl font-medium text-gray-300">
                Our mission is to inspire curiosity, nurture creativity, and
                empower students with essential skills for success in an
                AI-centric world. Through collaborative learning and
                exploration, we are cultivating a community of visionary
                thinkers and solution-oriented individuals poised to shape
                tomorrow&apos;s world.
              </p>
            </div>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default MissionVision;

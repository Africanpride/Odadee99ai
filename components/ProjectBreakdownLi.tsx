import React from "react";
import {
  bebas,
  ibm_plex_sans_condense,
  inter,
  sourceCodePro400,
} from "@/utils/styles/fonts";
import { ChevronRightIcon } from "lucide-react";
import Griddy from "@/components/Griddy";
import Link from "next/link";

type Props = {
  maintitle?: string | null;
  title?: string | null;
  description?: string | null;
  icon?: React.ReactNode | null;
  iconbottom?: React.ReactNode | null;
};

const ProjectBreakdownLi = (props: Props) => {
  return (
    <li className="rounded-3xl  bg-base-100 hover:bg-base-100/30  p-8 aspect-square flex flex-col justify-between items-start border border-base-300 ">
      <div className="w-full flex justify-between items-center">
        <div
          className={`${bebas.className} opacity-80 text-2xl italic text-blue-600 `}
        >
          {props.maintitle || "why AI Lab?"}
        </div>
        <div>{props.icon ? props.icon : <Griddy />}</div>
      </div>
      <div>
        <h3 className={`${ibm_plex_sans_condense.className} mt-6 font-semibold text-lg`}>
          {props.title || "Empowering students for AI future."}
        </h3>
        <p
          className={`${inter.className} mt-2 text-base-content text-lg leading-tight line-clamp-6 `}
        >
          {props.description ||
            `We are building an AI lab to equip students with essential skills for
          success in an AI-centric world, fostering curiosity, creativity, and
          collaboration to shape tomorrow's leaders and innovators.`}
        </p>
      </div>
      <Link href={'/about'} className="w-full mt-2 text-right  flex justify-end items-center text-xs ">
       <div className="px-2"> Read More</div>
        <div className="bg-blue-500 rounded-full relative flex items-center justify-end"> 
          {props.iconbottom ? (
            props.iconbottom
          ) : (
            <ChevronRightIcon className="text-white" />
          )}
        </div>
      </Link>
    </li>
  );
};

export default ProjectBreakdownLi;

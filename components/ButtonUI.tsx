import React, { ReactChild } from "react";
import { CircleChevronRight } from "lucide-react";
import Link from "next/link";
import {
  inter,
  ibm_plex_sans_condense,
  sourceCodePro700,
  sourceCodePro400,
} from "@/utils/styles/fonts";

type Props = {
  actiontext?: string;
  actionlink?: string;
  // icon that can be a React component
  icon?: React.ReactNode;
  // class name for the button
  className?: string;
};

const ButtonUI = (props: Props) => {
  return (
    <div className="py-4">
      <Link
        href={props.actionlink || "/"}
        className={`btn btn-md hover:btn-info  btn-primary 
        md:flex rounded-tr-2xl rounded-bl-2xl justify-center items-center ${props.className}`}
      >
        <span className={`${sourceCodePro400.className} text-lg font-normal`}>
          {props.actiontext || "Come Join Us"}
        </span>
        <span className="">{props.icon || <CircleChevronRight />}</span>
      </Link>
    </div>
  );
};

export default ButtonUI;

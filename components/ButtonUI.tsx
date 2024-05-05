import React from "react";
import { CircleChevronRight } from 'lucide-react';
import Link from "next/link";
import { inter, ibm_plex_sans_condense } from "@/styles/fonts";

type Props = {
    actiontext?: string;
    actionlink?: string;

};

const ButtonUI = (props: Props) => {
  return (
    <div className="py-4">
      <Link
        href={props.actionlink || '/'}
        className={`btn  btn-sm md:btn-md  w-auto hover:btn-info rounded-3xl pl-2 btn-secondary 
        inline-flex justify-center items-center`}>
        <span
          className={`${ibm_plex_sans_condense.className} text-xl font-normal`}
        >
          {props.actiontext || 'Come Join Us'}
        </span>
        <span className="">
          <CircleChevronRight />
        </span>
      </Link>
    </div>
  );
};

export default ButtonUI;

"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { poppins, playfair_display, bebas } from "@/utils/styles/fonts";
import DonateButton from "./DonateButton";
import Image from "next/image";
import DonationOptions from "./DonationOptions";

type Props = {
  text?: string;
  onClick?: () => void;
  link?: string | null;
  description?: JSX.Element | null;
  actionText?: string | null;
  hideText?: boolean | null;
};

const SectionHead = (props: Props) => {
  const pathName = usePathname();
  const isHomeRoute = pathName === "/";

  return (
    <section className="relative h-auto md:h-[70dvh] overflow-x-hidden p-4 md:pb-4 md:pt-8 md:px-8 flex flex-col items-start justify-end overflow-hidden">
      {/* <Image
              src={"/images/banner.svg"}
              alt="Presec Legon AI Laboratory 2"
              fill={true}
              objectFit="cover"
              objectPosition="center"
              className=""
            /> */}
      <div
        style={{ lineHeight: 0.8 }}
        className={`${poppins.className} text-blue-600 pt-44 font-extrabold leading-[3rem] text-[30px] md:text-[5.5rem]`}
      >
        {props.description ? (
          props.description
        ) : (
          <React.Fragment>
            <div className="py-3">
              {!isHomeRoute && (
                <div className="inline-flex bg-info text-sm uppercase px-3 py-1 text-white">
                  {pathName.startsWith("/") ? pathName.slice(1) : pathName}
                </div>
              )}
            </div>
            <div className={`${props.hideText ? 'hidden' : ''} `}>
              Fostering A Legacy of{" "}
              <span className={`${playfair_display.className} text-gray-400`}>
                Learning
              </span>{" "}
              and{" "}
              <span className={`${playfair_display.className} text-gray-400`}>
                Leadership
              </span>
            </div>
          </React.Fragment>
        )}
      </div>
      <div className="py-4">
        <DonateButton>
          <DonationOptions />
        </DonateButton>
      </div>
      {/* <ButtonUI
        actionlink={props.link || "/"}
        actiontext={props.actionText || "Donate Now"}
      /> */}

      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[26.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        data-theme="dark"
        className={`hidden absolute right-8 bottom-8 ${
          isHomeRoute ? "hidden" : "md:block"
        }`}
      >
        <div
          className={`${bebas.className} vertical-text py-2 bg-info uppercase text-sm font-bold`}
        >
          {pathName.startsWith("/") ? pathName.slice(1) : pathName}
        </div>
      </div>
    </section>
  );
};

export default SectionHead;

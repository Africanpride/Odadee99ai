import React from "react";
import ButtonUI from "./ButtonUI";
import { poppins, playfair_display } from "@/utils/styles/fonts";

const SectionHead = () => {
  return (
    <section className="relative h-auto md:h-[80dvh] overflow-x-hidden p-4 md:pb-4 md:pt-8 md:px-8 flex flex-col items-start justify-end ">
      <div
        style={{ lineHeight: 0.8 }}
        className={`${poppins.className}  pt-44 font-extrabold leading-[3rem]  text-[30px] md:text-[5.5rem]  `}
      >
        Fostering A Legacy of{" "}
        <span className={`${playfair_display.className}`}>Learning</span> and{" "}
        <span className={`${playfair_display.className}`}>Leadership</span>
      </div>
      <ButtonUI actionlink="/about" actiontext="" />

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
    </section>
  );
};

export default SectionHead;

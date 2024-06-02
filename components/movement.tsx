import React from "react";
import Marquee from "react-fast-marquee";

export const Movement = () => {
  return (
    <section className="bg-black min-h-auto flex flex-col justify-center z-0 text[5rem] py-24 ">

      <Marquee direction="right" className="overflow-hidden  ">
        <h3 className="heading-move font-extrabold leading-tight italic ">
          Odadee99 - <em>AI</em> - Laboratory - Project -
        </h3>
      </Marquee>
      <Marquee direction="left" className="overflow-hidden ">
        <h3 className="heading-move font-extrabold leading-tight ">
          Odadee99 - <em>AI</em> - Laboratory - Project -
        </h3>
      </Marquee>
      <Marquee direction="right" className="overflow-hidden  ">
        <h3 className="heading-move font-extrabold leading-tight italic ">
          Odadee99 - <em>AI</em> - Laboratory - Project -
        </h3>
      </Marquee>


    </section>
  );
};

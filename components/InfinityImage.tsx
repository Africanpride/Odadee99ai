"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const InfinityImage = () => {
  return (
    <section className="bg-secondary text-primary-content">
      <Marquee autoFill={true}>
        <div>
          {" "}
          I can be a React component, multiple React components, or just some
          text.
        </div>
      </Marquee>
    </section>
  );
};

export default InfinityImage;

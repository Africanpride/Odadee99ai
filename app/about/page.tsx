"use client";
import React from "react";
import dynamic from "next/dynamic";
import SectionIntro2 from "@/components/SectionIntro2";
import SectionIntro from "@/components/SectionIntro";
import SectionHead from "@/components/SectionHead";
import FAQS from "../../components/FAQS";
import ImageGridProject2 from "@/components/ImageGridProject2";

const CadioAnimation = dynamic(() => import("@/utils/CadioAnimation"), { ssr: false });
const MissionVision = dynamic(() => import("@/components/MissionVision"), { ssr: false });

const title = `Reunited with a shared vision`;
const introBlock = (
  <div>
    After 25 years of pursuing our individual paths, we have reunited with a
    shared vision: to leave a lasting legacy at our Alma mater. Our objective is
    to construct and equip an Artificial Intelligence lab &mdash;
    <span data-theme="retro" className="font-bold text-secondary px-4">
      Presec 1999 eXperience Centre
    </span>{" "}
    &mdash; that will empower both current and future students, providing them
    with the tools and resources to thrive in an ever-evolving world.
  </div>
);
const introText1 = `Driven by our commitment to giving back, we are embarking on this ambitious project as a way to honour our alma mater and the pivotal role it played in shaping our lives. Our dedication knows no bounds as we work tirelessly to ensure the project becomes a beacon of innovation and excellence within the school and its surrounding communities.`;
const introText2 = `Driven by our commitment to giving back, we are embarking on this ambitious project as a way to honour our alma mater and the pivotal role it played in shaping our lives. Our dedication knows no bounds as we work tirelessly to ensure the project becomes a beacon of innovation and excellence within the school and its surrounding communities.`;
const introBlock1 = ``;
const introBlock2 = `Join us in making a positive impact on Ghana's educational landscape. Your support, whether in kind or cash, will significantly contribute to establishing a world-class Artificial Intelligence Lab at our cherished alma mater, Presec - Legon.`;
const About = () => {
  return (
    <React.Fragment>
      <SectionHead />
      <SectionIntro2
        title={title}
        introBlock={introBlock}
        introText={introText1}
        imageGrid={<ImageGridProject2 />}
      />
      <FAQS />
      <MissionVision />
      <SectionIntro title="Vision of the AI Lab" introText={introText2} introBlock={introBlock2} />
    </React.Fragment>
  );
};

export default About;

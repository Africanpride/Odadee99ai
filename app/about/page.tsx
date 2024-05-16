"use client"
import ArticilesExcerpts from "@/components/ArticilesExcerpts";
import SectionIntro2 from "@/components/SectionIntro2";
import SectionIntro from "@/components/SectionIntro";
import SectionHead from "@/components/SectionHead";
import React, {useEffect, useState} from "react";
import FAQS from "../../components/FAQS";
import MissionVision from "@/components/MissionVision";
import dynamic from "next/dynamic";
import CadioAnimation from "@/utils/CadioAnimation";

// const CadioAnimation = dynamic(() => import("@/utils/CadioAnimation"), { ssr: false });

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

const About = () => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  return (
    <React.Fragment>
      <SectionHead />
      <SectionIntro2
        title={title}
        introBlock={introBlock}
        introText={introText1}
      />
      <FAQS />
      <MissionVision animationDisplay={true} icon={<CadioAnimation />} />

      <SectionIntro title="Vision of the AI Lab" introText={introText2} />
    </React.Fragment>
  );
};

export default About;

import {
  bebas,
  ibm_plex_sans_condense,
  inter,
  poppins,
  sourceCodePro400,
  sourceCodePro700,
} from "@/utils/styles/fonts";
import React from "react";
import ProjectBreakdownLi from "./ProjectBreakdownLi";
import Hourglass from "@/utils/Hourglass";
import { HourglassIcon } from "lucide-react";

const why = {
  maintitle: `why AI Lab?`,
  title: `Empowering students for AI future.`,
  description: `We are building an AI lab to equip students with essential skills for
  success in an AI-centric world, fostering curiosity, creativity, and
  collaboration to shape tomorrow's leaders and innovators.`,
};

const vision = {
  maintitle: `Our Vision`,
  title: `Setting Sights on the Future`,
  description: `The vision for the AI lab's impact is to create a lively learning space where students explore the possibilities of AI, realize their full capabilities, and harness AI to create positive change in their lives and communities.`,
};
const how = {
  maintitle: `Strategy & Process`,
  title: `The 'How' of the Vision `,
  description: `The AI Lab will be built through corporate sponsorships, both monetary and in-kind donations. Events, such as fundraisers and mentorship sessions, will engage alumni and the community to support the project.`,
};
const mission = {
  maintitle: `Our Vision`,
  title: `Setting Sights on the Future`,
  description: `The vision for the AI lab's impact is to create a lively learning space where students explore the possibilities of AI, realize their full capabilities, and harness AI to create positive change in their lives and communities.`,
};
const what = "";
const who = "";
const ProjectBreakdown = () => {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className=" p-4 py-16 md:p-32  bg-base-200/50 text-primary backdrop-brightness-200  dark:text-base-content
      "
    >
      <div className="lg:px-8 mx-auto w-full">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2
            className={` ${ibm_plex_sans_condense.className} text-4xl font-medium tracking-tight`}
          >
            AI Lab: Empowered Future
          </h2>
          <p className={` ${inter.className} mt-2 text-xl`}>
            The new AI lab is a launchpad for future leaders! Students will
            explore AI's potential, collaborate, and make a positive impact on
            the world.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid w-full sm:max-w-2xl grid-cols-1 gap-4 text-sm sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          <ProjectBreakdownLi
            maintitle={why.maintitle}
            title={why.title}
            description={why.description}
          />
          <ProjectBreakdownLi
            maintitle={vision.maintitle}
            title={vision.title}
            description={vision.description}
            icon={<Hourglass />}
            />
          <ProjectBreakdownLi 
            maintitle={how.maintitle}
            title={how.title}
            description={how.description}

          />
          <ProjectBreakdownLi
            maintitle={why.maintitle}
            title={why.title}
            description={why.description}
          />
          <ProjectBreakdownLi
            maintitle={vision.maintitle}
            title={vision.title}
            description={vision.description}
            icon={<Hourglass />}
            />
          <ProjectBreakdownLi 
            maintitle={how.maintitle}
            title={how.title}
            description={how.description}

          />
        </ul>
      </div>
    </section>
    // <div className="flex min-h-screen flex-col items-center justify-center p-24">

    // </div>
  );
};

export default ProjectBreakdown;

"use client";
import { bebas } from "@/utils/styles/fonts";
import React, { useEffect } from "react";
const faqList = [
  {
    question: "How do I know if a product is available in boutiques?",
    answer:
      "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.",
  },
  {
    question:
      "How can I find the prices or get other information about Chanel products?",
    answer:
      "You can find prices and other information about Chanel products on their official website or by visiting Chanel boutiques.",
  },
];
const FAQS: React.FC = () => {
  return (
    <section className="flex min-h-dvh flex-col items-center justify-center p-4 relative isolate overflow-hidden  md:px-6 py-14   ">
      <div className=" bg-lightblue">
        <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
          <div className="w-full md:mr-8  md:w-1/3 space-y-3">
            <div className={`${bebas.className} text-5xl font-extrabold md:tracking-normal leading-9 `}>
              <h2>Frequently-asked questions</h2>
            </div>
            <p className="text-md text-left">
            Got questions about the Odadee 99 AI Lab project? We&apos;ve got answers! Explore our FAQs to learn more about the project, its goals, and how you can get involved.
            </p>
          </div>
          <dl className="w-full md:w-2/3">
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                What is the Odadee 99 Year Group Legacy Project?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                The Odadee 99 Year Group Legacy Project aims to construct and
                equip an Artificial Intelligence (AI) lab at Presbyterian Boys&apos;
                High School (Presec - Legon) in Ghana, their alma mater. This
                lab, named the Presec 1999 eXperience Centre, will empower
                students with the tools and resources to succeed in an AI-driven
                world.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                When will the AI Lab be completed?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                The project is scheduled for completion and handover to the
                school during the Speech and Prize Giving Day in November 2024.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                Who is behind the project?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                The project is driven by a passionate group of alumni who
                graduated from Presec - Legon in 1999. They are committed to
                giving back to their school and fostering a culture of
                innovation and excellence among future generations of students.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                How can I support the project?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                There are two main ways to support the project: - **Monetary
                Support:** Donations can be made through the provided bank
                accounts (Cedi and US Dollar) or by reaching out for details on
                other forms of cash support. - **Non-monetary Support:**
                Donations of AI and robotics kits, devices, and related
                equipment are welcome. You can contact the Odadee 99 Year Group
                via email (odadee99.legacyproject@gmail.com) to inquire about
                this option.
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQS;

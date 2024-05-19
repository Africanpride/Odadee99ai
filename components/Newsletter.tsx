"use client";
import {
  bebas,
  ibm_plex_sans_condense,
  inter,
  poppins,
} from "@/utils/styles/fonts";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MagnetIcon, Mail, Mails, User } from "lucide-react";
import ButtonUI from "./ButtonUI";
import Link from "next/link";
import Image from "next/image";
import Hourglass from "@/utils/Hourglass";

type Props = {};

const Newsletter: React.FC<Props> = () => {
  const siteurl = "";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formData; // Destructuring email from formData here

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Show loading indicator and handle the form submission
      await toast.promise(
        fetch(`${siteurl}/api`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }),
        {
          loading: "Submitting Your Request...",
          success: () => {
            // Reload the page after a successful form submission
            setTimeout(() => window.location.reload(), 3000);
            return "Form Submitted Successfully!";
          },
          error: "Error submitting Request.",
        }
      );
    } catch (error) {
      toast.error("Error occurred while submitting the form");
      // console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="p-4 md:p-8 bg-black">
      <div className="p-4 md:p-6 rounded-3xl bg-blue-600  h-auto min-h-dvh  grid grid-cols-1 md:grid-cols-3 gap-x-4">
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2  flex flex-col justify-between items-start py-5 md:px-8 md:py-12"
        >
          <div
            className={`${poppins.className} uppercase text-2xl sm:text-3xl md:leading-normal text-white`}
          >
            From Vision to Reality; Connect with us today to explore ways of
            bringing this AI laboratory project into reality.
          </div>

          <div className="w-full">
            <div className="md:flex  space-y-4 sm:space-y-0 flex-col sm:flex-row  flex-wrap items-center md:gap-x-8">
              <div className="relative md:flex-1">
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="bg-transparent block border-b-2 border-b-gray-200/30 border-t-transparent border-x-transparent dark:border-b-gray-200 dark:focus:border-b-gray-600/20 dark:focus:ring-gray-300 dark:placeholder-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:border-b-blue-500/50 focus:border-t-transparent focus:border-x-transparent focus:ring-0 pe-0 peer ps-8 py-3 text-sm w-full"
                  placeholder="Enter name"
                  value={name}
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-1 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <User className="text-white" />
                </div>
              </div>

              <div className="relative flex-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-transparent block border-b-2 border-b-gray-200/30 border-t-transparent border-x-transparent dark:border-b-gray-200 dark:focus:border-b-gray-600/20 dark:focus:ring-gray-300 dark:placeholder-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:border-b-blue-500/50 focus:border-t-transparent focus:border-x-transparent focus:ring-0 pe-0 peer ps-8 py-3 text-sm w-full"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-1 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <Mail className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <ButtonUI
              actiontext="Subscribe to Project Newsletter"
              actionlink={"/about"}
              className=" w-full dark:bg-secondary"
              icon={<Mails />}
            />
          </div>
        </form>

        <div className="md:col-span-1  rounded-3xl hidden md:grid grid-rows-2 grid-flow-col gap-3  ">
          <div
            className={`${bebas.className} text-7xl leading-tighter p-2 rounded-3xl relative  `}
          >
            <Image
              src={"/images/launch.jpg"}
              alt="Presec Legon AI Laboratory"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-3xl"
            />
            <Hourglass />
            {/* <p
              className={`${bebas.className} absolute bottom-4 left-4 text-2xl text-white `}
            >
              Nurturing a Heritage of Education and Guidance
            </p> */}
          </div>
          <div
            className={`${bebas.className} text-7xl leading-tighter p-2 rounded-3xl relative  `}
          >
            <Image
              src={"/images/next2.jpg"}
              alt="Presec Legon AI Laboratory"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-3xl"
            />
            <Hourglass />
          </div>
          {/* <div
            className={`${bebas.className} bg-yellow-500 text-7xl  p-2 rounded-3xl text-white `}
          >
            <div className="leading-snug ">
              <div>Flower</div>
              <div>BEBAS</div>
            </div>

          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

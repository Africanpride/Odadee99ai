import SectionHead from "@/components/SectionHead";
import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      {/* component */}
      <SectionHead />
      <div className=" flex-col justify-center h-screen hidden ">
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-blue-100">
          <div className="w-full md:w-1/3 bg-blue-100 grid place-items-center">
            <Image
              src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="tailwind logo"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3 bg-blue-100 flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              <p className="text-gray-500 font-medium hidden md:block">
                Vacations
              </p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-600 font-bold text-sm ml-1">
                  4.96
                  <span className="text-gray-500 font-normal">
                    (76 reviews)
                  </span>
                </p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                Superhost
              </div>
            </div>
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            Official Launch and Sod-cutting of the legacy project
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              The best kept secret of The Bahamas is the country’s sheer size
              and diversity. With 16 major islands, The Bahamas is an unmatched
              destination
            </p>
            <p className="text-xl font-black text-gray-800">
              $110
              <span className="font-normal text-gray-600 text-base">
                /night
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

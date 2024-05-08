import { bebas, inter, poppins } from "@/utils/styles/fonts";
import React from "react";

const ProjectBreakdown = () => {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32 px-4 sm:px-32  bg-base-200/50 text-primary backdrop-brightness-200  dark:text-base-content
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight  ">
            Now is the time to build your portfolio.
          </h2>
          <p className="mt-2 text-lg  ">
            With typical market returns, you have to start young to secure your
            future. With Pocket, it’s never too late to build your nest egg.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 text-sm sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          <li className="rounded-3xl  bg-base-100 hover:bg-base-100/30  p-8 aspect-square flex flex-col justify-between items-start">
            <div className="w-full flex justify-between items-center">
              <div>
                <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                    fill="#737373"
                  />
                  <path
                    d="M12 25l8-8m0 0h-6m6 0v6"
                    stroke="#171717"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="16"
                    fill="#A3A3A3"
                    fillOpacity="0.2"
                  />
                </svg>
              </div>
              <div className={`${bebas.className} opacity-80 text-3xl italic `}>
                why AI Lab?
              </div>
            </div>
            <div>
              <h3 className="mt-6 font-semibold  ">Invest any amount</h3>
              <p className="mt-2 text-base-content">
                Whether it’s $1 or $1,000,000, we can put your money to work for
                you.
              </p>
            </div>
          </li>
          <li className="rounded-3xl border border-zinc-200 dark:border-zinc-700/50 p-8">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                fill="#737373"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
                fill="url(#:S2:-gradient)"
              />
              <rect x="9" y="6" width="14" height="4" rx="1" fill="#171717" />
              <circle cx="16" cy="16" r="16" fill="#A3A3A3" fillOpacity="0.2" />
              <defs>
                <linearGradient
                  id=":S2:-gradient"
                  x1="16"
                  y1="12"
                  x2="16"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#737373" />
                  <stop offset="1" stopColor="#737373" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <h3 className="mt-6 font-semibold text-zinc-900 ">
              Build a balanced portfolio
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Invest in different industries to find the most opportunities to
              win huge.
            </p>
          </li>
          <li className="rounded-3xl border border-zinc-200 dark:border-zinc-700/50 p-8">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
              <circle cx="16" cy="16" r="16" fill="#A3A3A3" fillOpacity="0.2" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
                fill="#737373"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
                fill="#171717"
              />
            </svg>
            <h3 className="mt-6 font-semibold text-zinc-900 ">
              Trade in real-time
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Get insider tips on big stock moves and act on them within
              seconds.
            </p>
          </li>
        </ul>
      </div>
    </section>
    // <div className="flex min-h-screen flex-col items-center justify-center p-24">

    // </div>
  );
};

export default ProjectBreakdown;

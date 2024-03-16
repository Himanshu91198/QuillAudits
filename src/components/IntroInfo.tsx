"use client";

import { Inter, Poppins } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
});

const pop = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const IntroInfo = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full lg:w-3/4 flex flex-col items-center justify-center pt-20">
        <div className="grid grid-rows-4 lg:grid-rows-none lg:grid-cols-4 px-6 lg:px-20">
          <div className=" row-span-2 lg:col-span-2 flex flex-col p-6">
            <h3
              className={`bg-[#FFABC9] ${inter.className} text-xl font-bold leading-8 pl-1`}
            >
              Before QuillAudits
            </h3>
            <div className="grid grid-rows-4">
              <p className={`${pop.className} pt-6 row-span-2`}>
                Exploits like reentrancy and front-running can let attackers
                withdraw extra funds and manipulate transaction timing for
                unfair gains
              </p>
              <p className={`${pop.className} pt-6 row-span-2`}>
                Vulnerabilities could allow users to mint CDP tokens or pension
                shares indefinitely, disrupting the system&apos;s economic
                balance.
              </p>
            </div>
          </div>

          <div className="row-span-2 lg:col-span-2 flex flex-col p-6 border-none lg:border-l-[1px] border-[#E0E0E4]">
            <h3
              className={`bg-[#ABCDFF] ${inter.className} text-xl font-bold leading-8 pl-1`}
            >
              After QuillAudits
            </h3>
            <div className="grid grid-rows-4">
              <p className={`${pop.className} pt-6 row-span-2`}>
                Implementation of reentrancy protection mechanisms.
              </p>
              <p className={`${pop.className} pt-[-2rem] lg:pt-6 row-span-2`}>
                Ensure precision in decimal handling with standard libraries,
                recalculate accurately, fix logic errors, and secure referral
                systems against exploitation.
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden w-full pt-10 px-14">
          <div className="flex w-full flex-col gap-4 pt-3 pl-6 pb-8 dialog rounded-md">
            <div className="flex flex-col">
              <h5
                className={`${inter.className} font-normal text-sm leading-5 text-[#808080]`}
              >
                Headquarters
              </h5>
              <h4
                className={`${inter.className} font-medium text-base leading-6 text-[#00000A]`}
              >
                Switzerland
              </h4>
            </div>
            <div className="flex flex-col">
              <h5
                className={`${inter.className} font-normal text-sm leading-5 text-[#808080]`}
              >
                Chain
              </h5>
              <h4
                className={`${inter.className} font-medium text-base leading-6 text-[#00000A]`}
              >
                Pulse Blockchain
              </h4>
            </div>
          </div>
        </div>
        <h1 className=" text-4xl font-semibold leading-9 text-[#0E3088] px-6 lg:px-44 flex text-center pt-16">
          See how QuillAudits is a trusted partner in 1000+ Audit stories
        </h1>
        <button className="button rounded-lg text-[#ffff] w-52 h-14 p-2 text-xl font-medium mt-10">
          Request An Audit
        </button>
      </div>
    </div>
  );
};

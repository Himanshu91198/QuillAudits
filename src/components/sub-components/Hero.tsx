"use client";

import React from "react";
import HeroImg2 from "@/public/Images/Hero-Image-2.png";
import HeroImg from "@/public/Images/Hero-image.png";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
} from "@/src/utils/motion";

export const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full pt-10 flex flex-col items-center"
    >
      <div className="w-full flex lg:hidden">
        <p className="relative px-6 text-base font-medium text-[#fff] leading-5 hero-text">
          Case Stduies
        </p>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative grid items-center grid-rows-4 lg:grid-cols-4 lg:grid-rows-none w-full lg:w-3/4 gap-0 lg:gap-6 mt-6"
      >
        <motion.div
          variants={slideInFromLeft(0.3)}
          className="relative flex row-span-2 lg:col-span-2 items-center justify-center heroImg"
        >
          <Image
            className="absolute hero-inset"
            src={HeroImg}
            alt="Hero-Image"
          ></Image>
          <div className="absolute hero-border flex items-center justify-center rounded-md">
            <Image
              src={HeroImg2}
              alt="Hero-Image-2"
              className="heroImage2"
            ></Image>
          </div>
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          className="header-text flex flex-col px-10 lg:pt-20 row-span-2 lg:col-span-2 text-[#ffff]"
        >
          <h1 className=" text-4xl font-medium leading-[57px]">
            Securing Trust : Boosting Security and Strengthening Trust at Carpe
            Diem Pension
          </h1>
          <p className=" text-xl font-normal leading-7 text-[#ffff]">
            QuillAudits enhances Carpe Diem Pension by addressing 33
            vulnerabilities on the Pulse blockchain, boosting security and user
            trust in digital pensions.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={slideInFromBottom}
        className=" leading-6 px-10 pt-14 w-full lg:w-3/4 bottom-4 pb-4 text-base font-medium text-[#ffffff59]"
      >
        QuillAudits {"-->"} Resources {"-->"}{" "}
        <span className="text-[#ffff] ml-1"> Case Studies</span>
      </motion.div>
    </motion.div>
  );
};

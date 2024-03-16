"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo1 from "@/public/Images/logo.png";
import logo2 from "@/public/Images/QuillAudits.png";
import arrow from "@/public/Images/Arrow.png";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../utils/motion";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const [display, setDisplay] = useState(false);

  function handleNav() {
    setDisplay(!display);
  }

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className="sticky lg:flex hidden flex-col w-full px-20 py-8"
      >
        <motion.div
          variants={slideInFromBottom}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center">
            <Image
              className="w-[45px] h-[43px]"
              src={logo1}
              alt="logo-1"
            ></Image>
            <Image
              className="ml-2 w-[158px] h-[21px]"
              src={logo2}
              alt="logo-2"
            ></Image>
          </div>
          <ul className="flex text-[#ffff] items-center mb-0 text-xl font-normal gap-14">
            <li className="flex items-center ">
              Services
              <Image className=" h-2 w-4 ml-2" src={arrow} alt="arrow"></Image>
            </li>
            <li>Pricing</li>
            <li>Our Audits</li>
            <li className="flex items-center">
              Tools
              <Image className=" h-2 w-4 ml-2" src={arrow} alt="arrow"></Image>
            </li>
            <li className="flex items-center ">
              Resources
              <Image className=" h-2 w-4 ml-2" src={arrow} alt="arrow"></Image>
            </li>
            <li>Refer-Earn-Secure</li>
          </ul>
          <button className="button rounded-lg text-[#ffff] w-52 h-14 p-2 text-xl font-medium">
            Request An Audit
          </button>
        </motion.div>
        <div className="h-[2.5px] mt-6 w-full bg-[#ffffff1b]"></div>
      </motion.div>
      {/* Mobile view */}
      <motion.div
        variants={slideInFromBottom}
        className="flex sticky lg:hidden flex-col items-center"
      >
        <div className="w-full h-14 bg-[#2A2D33]"></div>
        <div className="flex w-full  py-4 items-center px-6 justify-between">
          <Image className="w-[45px] h-[43px]" src={logo1} alt="logo-1"></Image>
          <button className="button rounded-lg text-[#ffff] w-28 h-8 p-2 text-xs font-normal">
            Request An Audit
          </button>
          <div
            onClick={handleNav}
            className="flex flex-col text-2xl gap-1 text-[#fff]"
          >
            {display ? <RxCross2 /> : <FaBars />}
          </div>
        </div>
        {display ? (
          <div className={`bg-white z-50 w-full h-[20rem] navdiv `}></div>
        ) : (
          ""
        )}
      </motion.div>
    </>
  );
};

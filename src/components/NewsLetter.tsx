import { Inter } from "next/font/google";
import React from "react";
import Image from "next/image";
import newImg from "@/public/Images/News-Image.png";

const inter = Inter({
  subsets: ["latin"],
});

export const NewsLetter = () => {
  return (
    <>
      {/* Pc view */}
      <div className="w-full lg:flex hidden items-center justify-center news-bg mt-10">
        <div className="w-3/4 grid grid-cols-4">
          <div className=" col-span-2 py-20 flex flex-col gap-10">
            <h4
              className={`text-[#407AFF] text-xl leading-8 font-bold ${inter.className}`}
            >
              NEWSLETTER
            </h4>
            <div className="flex flex-col gap-4 font-semibold text-5xl leading-[69px] text-[#14316C]">
              <h2>Security First News</h2>
              <h2>Letter by QuillAudits</h2>
            </div>
            <p
              className={`${inter.className} text-base font-normal leading-6 pr-48`}
            >
              Subscribe for the most Exclusive Weekly security based newsletter
              and covering all the recent hacks up to date.
            </p>
          </div>
          <div className="col-span-2 pt-16">
            <Image src={newImg} objectFit="cover" alt="news-image"></Image>
            <div className="relative w-full px-8">
              <form action="" className="border border-[#000]">
                <input
                  type="text"
                  className="w-full text-base rounded-lg font-normal leading-6 px-[14px] py-[14px] text-[#888888]"
                  placeholder="vitalik@ethereum.org"
                  aria-label="vitalik@ethereum.org"
                  aria-describedby="basic-addon2"
                />
                <button
                  id="basic-addon2"
                  className="button right-10 absolute rounded-lg text-[#ffff] flex items-center justify-center w-28 h-9 top-2 p-2 text-base font-medium leading-6"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="w-full flex lg:hidden items-center justify-center">
        <div className="w-3/4 grid grid-rows-4">
          <div className=" row-span-1 pt-20 flex flex-col gap-10">
            <div className="flex flex-col items-center">
              <h4 className="font-medium text-base leading-6">
                Security First Newsletter by QuillAudits
              </h4>
              <div className=" w-[66px] h-[1.65px] bg-[#2D83EE] rounded-xl"></div>
            </div>
          </div>
          <div className="row-span-3 mt-10">
            <Image src={newImg} objectFit="cover" alt="news-image"></Image>
            <p className="px-10 text-center font-normal text-xs leading-5 ">
              DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight
              to your Inbox. Explore our weekly newsletter:{" "}
              <span className=" font-semibold text-[#2D83EE]">
                {" "}
                HashingBits{" "}
              </span>
              . Stay updated on everything we’re publishing. Stand a step ahead.
            </p>
            <form action="" className=" mt-2">
              <input
                type="text"
                className="w-full text-base rounded-lg font-normal leading-6 px-[14px] py-[14px] text-[#888888]"
                placeholder="vitalik@ethereum.org"
                aria-label="vitalik@ethereum.org"
                aria-describedby="basic-addon2"
              />
            </form>
            <div className="flex items-center justify-center mt-8">
              <button
                id="basic-addon2"
                className="button right-10 rounded-md text-[#ffff] flex items-center justify-center w-32 h-9 top-2 p-2 text-base font-medium leading-6"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

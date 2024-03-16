import React from "react";
import Image from "next/image";
import bgImage from "@/public/Images/footer-bg.jpg";
import ImageFooter from "@/public/Images/Logo-footer-1.png";
import email from "@/public/Images/Email.png";
import tele from "@/public/Images/Telegram.png";
import loc from "@/public/Images/Loc.png";
import logo1 from "@/public/Images/footer-logo-1.png";
import logo2 from "@/public/Images/footer-logo-2.jpg";
import tweet from "@/public/Images/twitter.png";
import link from "@/public/Images/linkedIn.png";
import telegram from "@/public/Images/tele.png";
import red from "@/public/Images/reddit.png";
import med from "@/public/Images/Medium.png";
import dis from "@/public/Images/discord.png";
import you from "@/public/Images/youtube.png";

export const Footer = () => {
  return (
    <div className="relative mt-20 lg:mt-0">
      <Image
        className="absolute -z-10"
        src={bgImage}
        alt="footer-bg"
        style={{
          objectFit: "cover",
        }}
        layout="fill"
      ></Image>
      {/* Pc view */}
      <div className="lg:flex hidden flex-col px-20 py-10">
        <Image src={ImageFooter} alt="logo"></Image>
        <div className="grid grid-cols-5 pt-16">
          <div className="col-span-1">
            <h2 className="relative footer-text font-medium text-xl leading-7 text-[#fff] w-fit">
              More About Quill
            </h2>
            <ul className="flex flex-col gap-2 pt-3 font-medium text-base leading-6 text-[#fff] pl-0">
              <li>About Us</li>
              <li>FAQs</li>
              <li>Blockchains We Audit</li>
            </ul>
            <ul className="pl-0 flex flex-col gap-2 pt-3 font-medium text-lg leading-7 text-[#fff]">
              Contact Us:
              <div className="flex items-center">
                <Image src={email} alt="email" className="mr-2"></Image>
                <li className=" italic font-normal text-lg leading-7 underline">
                  audits@quillhash.com
                </li>
              </div>
              <div className="flex items-center">
                <Image src={tele} alt="telegram" className="mr-2"></Image>
                <li className=" italic font-normal underline text-lg leading-7">
                  t.me/quillaudits
                </li>
              </div>
            </ul>
            <div className="flex items-center pt-3">
              <Image src={loc} alt="location" className="mr-2"></Image>
              <span className=" text-lg font-medium leading-6 text-[#fff]">
                Our Location:
              </span>
            </div>
            <p className="pt-2 pr-10 font-normal text-lg leading-7 text-[#fff]">
              Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed
              Bin Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box:
              416654
            </p>
          </div>
          <div className="col-span-1">
            <h2 className="relative footer-text font-medium text-xl leading-7 text-[#fff] w-fit">
              Audit Services
            </h2>
            <ul className=" font-medium text-base leading-6 text-[#fff] pl-0 flex flex-col gap-2 pt-3">
              <li>Ethereum Audit</li>
              <li>Polygon Audit</li>
              <li>BSC Audit</li>
              <li>Solana Audit</li>
              <li>NEAR Audit</li>
              <li>Algorand Audit</li>
              <li>Tezos Audit</li>
              <li>Hyperledger Fabric Audit</li>
              <li>L1 Audit</li>
              <li>Polkadot Audit</li>
              <li>Wallet Audit</li>
              <li>ZkSync Audit</li>
              <li>Starknet Audit</li>
            </ul>
          </div>
          <div className="col-span-3">
            <div className="grid grid-rows-4 gap-10">
              <div className="row-span-3">
                <div className="grid grid-cols-3">
                  <div className="col-span-1">
                    <h2 className="relative footer-text font-medium text-xl leading-7 text-[#fff] w-fit">
                      Quill Ecosystem
                    </h2>
                    <ul className=" font-medium text-base leading-6 text-[#fff] pl-0 flex flex-col gap-2 pt-3">
                      <li>QuillAI</li>
                      <li>QuillCheck</li>
                      <li>QuillShield</li>
                      <li>QuillAcademy</li>
                      <li>QuillMonitor</li>
                      <li>Web3Suggest</li>
                      <li>Explore All Tools</li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <h2 className="relative footer-text font-medium text-xl leading-7 text-[#fff] w-fit">
                      Other Services
                    </h2>
                    <ul className=" font-medium text-base leading-6 text-[#fff] pl-0 flex flex-col gap-2 pt-3">
                      <li>Red Teaming</li>
                      <li>dApp Pentesting</li>
                      <li>DeFi Diligence</li>
                      <li>NFT Due Diligence</li>
                      <li>Rug Pull Due Diligence</li>
                      <li>Security Consultation</li>
                      <li>Blockchain Forensics</li>
                      <li>KYC (Know Your Customer)</li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <h2 className="relative footer-text font-medium text-xl leading-7 text-[#fff] w-fit">
                      Quick Links
                    </h2>
                    <ul className=" font-medium text-base leading-6 text-[#fff] pl-0 flex flex-col gap-2 pt-3">
                      <li>Pricing</li>
                      <li>Audit Process</li>
                      <li>Our Audits</li>
                      <li>Testimonials</li>
                      <li>Security Synopsis</li>
                      <li>Blog</li>
                      <li>Clients</li>
                      <li>Careers</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row-span-1 ">
                <h2 className="relative footer-text font-medium text-xl leading-7 text-[#fff] pb-2 w-fit">
                  Our Programmes
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <button className="button rounded-md w-full text-[#ffff] h-10 p-2 text-base font-medium">
                      ReferEarn-Source
                    </button>
                  </div>
                  <div className="col-span-1">
                    <button className="button rounded-md w-full text-[#ffff]  h-10 p-2 text-base font-medium">
                      WAGSI Grants
                    </button>
                  </div>
                  <div className="col-span-1">
                    <button className="button rounded-md w-full text-[#ffff]  h-10 p-2 text-base font-medium">
                      Ambassador Program
                    </button>
                  </div>
                  <div className="col-span-1">
                    <button className="button rounded-md w-full text-[#ffff]  h-10 p-2 text-base font-medium">
                      Partnership Program
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            <Image src={logo2} alt="DefiSecurity Alliance logo"></Image>
            <Image src={logo1} alt="Telangana Web3 logo"></Image>
          </div>
          <div className="flex items-center gap-10">
            <Image src={tweet} alt="twitter logo"></Image>
            <Image src={link} alt="linkedin logo"></Image>
            <Image src={telegram} alt="telegram logo"></Image>
            <Image src={red} alt="reddit logo"></Image>
            <Image src={med} alt="medium logo"></Image>
            <Image src={dis} alt="discord logo"></Image>
            <Image src={you} alt="youtube logo"></Image>
          </div>
        </div>
        <div className=" mt-10 bg-[#ffffff59] w-full h-[2.3px]"></div>
        <div className="flex font-normal text-sm leading-5 items-center justify-between text-[#fff] pt-6">
          <p>All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      {/* Mobile view */}
      <div className="flex lg:hidden flex-col px-8 py-10">
        <div className="flex items-center justify-center">
          <Image src={ImageFooter} alt="logo"></Image>
        </div>
        <div className="mt-10 grid grid-rows-2 gap-4">
          <div className=" row-span-1">
            <div className="gap-4 grid grid-cols-2">
              <div className="col-span-1">
                {" "}
                <button className="button rounded-md w-full text-[#ffff]  h-10 p-2 text-base font-medium">
                  WAGSI Grants
                </button>
              </div>
              <div className="col-span-1">
                <button className="button rounded-md w-full text-[#ffff]  h-10 p-2 text-base font-medium">
                  Ambassador Program
                </button>
              </div>
            </div>
          </div>
          <div className=" row-span-1">
            <div className="gap-4 grid grid-cols-2">
              <div className="col-span-1">
                {" "}
                <button className="button rounded-md w-full text-[#ffff] h-10 p-2 text-base font-medium">
                  ReferEarn-Source
                </button>
              </div>
              <div className="col-span-1">
                <button className="button rounded-md w-full text-[#ffff]  h-10 p-2 text-base font-medium">
                  Partnership Program
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 px-2 mt-16 gap-20">
          <div className="col-span-1">
            <h2 className="relative footer-text font-medium text-xl leading-7 text-[#fff] w-fit">
              Audit Services
            </h2>
            <ul className=" font-medium text-base leading-6 text-[#fff] pl-0 flex flex-col gap-2 pt-3">
              <li>Ethereum Audit</li>
              <li>Polygon Audit</li>
              <li>BSC Audit</li>
              <li>Solana Audit</li>
              <li>NEAR Audit</li>
              <li>Algorand Audit</li>
              <li>Tezos Audit</li>
              <li>Hyperledger Fabric Audit</li>
              <li>L1 Audit</li>
              <li>Polkadot Audit</li>
              <li>Wallet Audit</li>
              <li>ZkSync Audit</li>
              <li>Starknet Audit</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="relative footer-text font-medium text-xl leading-7 text-[#fff] w-fit">
              Quill Ecosystem
            </h2>
            <ul className=" font-medium text-base leading-6 text-[#fff] pl-0 flex flex-col gap-2 pt-3">
              <li>QuillAI</li>
              <li>QuillCheck</li>
              <li>QuillShield</li>
              <li>QuillAcademy</li>
              <li>QuillMonitor</li>
              <li>Web3Suggest</li>
              <li>Explore All Tools</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 px-2 mt-16 gap-20">
          <div className="col-span-1">
            <h2 className="relative footer-text font-medium text-xl leading-7 text-[#fff] w-fit">
              Other Services
            </h2>
            <ul className=" font-medium text-base leading-6 text-[#fff] pl-0 flex flex-col gap-2 pt-3">
              <li>Red Teaming</li>
              <li>dApp Pentesting</li>
              <li>DeFi Diligence</li>
              <li>NFT Due Diligence</li>
              <li>Rug Pull Due Diligence</li>
              <li>Security Consultation</li>
              <li>Blockchain Forensics</li>
              <li>KYC (Know Your Customer)</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="relative footer-text font-medium text-xl leading-7 text-[#fff] w-fit">
              Quick Links
            </h2>
            <ul className=" font-medium text-base leading-6 text-[#fff] pl-0 flex flex-col gap-2 pt-3">
              <li>Pricing</li>
              <li>Audit Process</li>
              <li>Our Audits</li>
              <li>Testimonials</li>
              <li>Security Synopsis</li>
              <li>Blog</li>
              <li>Clients</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="px-2 mt-10">
          <h2 className="relative  footer-text font-medium text-xl leading-7 text-[#fff] w-fit">
            More About Quill
          </h2>
          <ul className="flex flex-col gap-2 pt-3 font-medium text-base leading-6 text-[#fff] pl-0">
            <li>About Us</li>
            <li>FAQs</li>
            <li>Blockchains We Audit</li>
          </ul>
          <ul className="pl-0 flex flex-col gap-2 pt-3 font-medium text-lg leading-7 text-[#fff]">
            Contact Us:
            <div className="flex items-center">
              <Image src={email} alt="email" className="mr-2"></Image>
              <li className=" italic font-normal text-lg leading-7 underline">
                audits@quillhash.com
              </li>
            </div>
            <div className="flex items-center">
              <Image src={tele} alt="telegram" className="mr-2"></Image>
              <li className=" italic font-normal underline text-lg leading-7">
                t.me/quillaudits
              </li>
            </div>
          </ul>
          <div className="flex items-center pt-3">
            <Image src={loc} alt="location" className="mr-2"></Image>
            <span className=" text-lg font-medium leading-6 text-[#fff]">
              Our Location:
            </span>
          </div>
          <p className="pt-6 pr-10 font-normal text-lg leading-7 text-[#fff]">
            Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed Bin
            Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box:
            416654
          </p>
        </div>
        <div className="flex px-2 mt-10 flex-col gap-10">
          <div className="flex items-center gap-8">
            <Image src={logo2} alt="DefiSecurity Alliance logo"></Image>
            <Image src={logo1} alt="Telangana Web3 logo"></Image>
          </div>
          <div className="flex items-center gap-10">
            <Image src={tweet} alt="twitter logo"></Image>
            <Image src={link} alt="linkedin logo"></Image>
            <Image src={telegram} alt="telegram logo"></Image>
            <Image src={red} alt="reddit logo"></Image>
            <Image src={med} alt="medium logo"></Image>
            <Image src={dis} alt="discord logo"></Image>
            <Image src={you} alt="youtube logo"></Image>
          </div>
        </div>
        <div className="px-2 mt-10 bg-[#ffffff59] w-full h-[2.3px]"></div>
        <div className="flex px-2 flex-col font-normal text-sm leading-5 items-center text-[#fff] pt-6">
          <p>Privacy Policy</p>
          <p>All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
        </div>
      </div>
    </div>
  );
};

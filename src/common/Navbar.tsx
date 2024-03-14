import React from "react";
import Image from "next/image";
import logo from "@/public/Images/logo.png";

export const Navbar = () => {
  return (
    <div className="flex flex-row items-center px-20">
      <Image className="w-[45px] h-[43px]" src={logo} alt="logo"></Image>
      <span>Quill Audits</span>
    </div>
  );
};

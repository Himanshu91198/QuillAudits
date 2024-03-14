"use client";
import React from "react";
import Image from "next/image";
import bgImage from "@/public/Images/bgImage.jpg";
import { Navbar } from "@/src/common/Navbar";

export const Header = () => {
  return (
    <main className="relative w-full min-h-screen">
      <Image
        src={bgImage}
        style={{
          zIndex: -1,
          position: "absolute",
        }}
        alt="background-image"
      ></Image>
      <Navbar />
    </main>
  );
};

"use client";
import React from "react";
import Image from "next/image";
import bgImage from "@/public/Images/bgImage.jpg";
import { Navbar } from "@/src/common/Navbar";
import { Hero } from "./sub-components/Hero";

export const Header = () => {
  return (
    <main className="relative w-full min-h-screen">
      <Image
        src={bgImage}
        style={{
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
        }}
        layout="fill"
        alt="background-image"
      ></Image>
      <Navbar />
      <Hero />
    </main>
  );
};

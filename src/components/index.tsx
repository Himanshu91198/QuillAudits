"use client";
import React from "react";
import { Header } from "./Header";
import { IntroInfo } from "./IntroInfo";
import { Information } from "./Information";
import { NewsLetter } from "./NewsLetter";
import { Footer } from "./Footer";

export const Index = () => {
  return (
    <div>
      <Header />
      <IntroInfo />
      <Information />
      <NewsLetter />
      <Footer />
    </div>
  );
};

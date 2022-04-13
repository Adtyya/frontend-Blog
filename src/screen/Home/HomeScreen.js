import React from "react";
import Hero from "../../components/hero/Hero";
import Ngoceh from "../../components/content/index";
import { Parallax } from "react-scroll-parallax";

const HomeScreen = () => {
  return (
    <>
      <Parallax speed={-20}>
        <Hero />
      </Parallax>
      <div className="bg-white relative z-10">
        <div className="w-full max-w-7xl mx-auto">
          <Ngoceh />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

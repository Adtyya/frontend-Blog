import React from "react";
import { useParallax } from "react-scroll-parallax";
import Earth from "../../assets/moonearth1.png";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col relative align-center justify-center items-center">
      <img src={Earth} alt="earth" className="absolute h-6/12" />
      <div className="z-10 bg-gradient-to-r from-blue-500 p-2 rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-4xl text-white">Welcome to</h1>
        <h1 className="text-3xl md:text-6xl font-bold">
          SHINYOKU <span className="text-blue-500">BLOG 🚀</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;

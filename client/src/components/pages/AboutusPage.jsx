import React from "react";
import { CardDemo } from "../demo/cardDemo";
import { EvervaultCardDemo } from "../demo/evaluteCardDemo";
import { GridSmallBackgroundDemo } from "../demo/gridSmallBgDemo";

const AboutusPage = () => {
  return (
    <div className="relative  z-[-50] ">
      <div className="z-[999] ">
        <div className="mt-6 mb-3 text-lg md:text-6xl headingFont bg-clip-text text-transparent bg-gradient-to-b from-purple-300/90 to-white/90 text-center">
          Who we are ?
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="mb-8 bgLuv shrink-0 bg-border h-[1px] w-[60%] mx-auto"
        ></div>

        <EvervaultCardDemo />
      </div>

      <div className="absolute z-0 w-fit ">
      <GridSmallBackgroundDemo />
      </div>

      
    </div>
  );
};

export default AboutusPage;

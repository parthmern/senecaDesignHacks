import React from "react";
import { CardDemo } from "../demo/cardDemo";
import { EvervaultCardDemo } from "../demo/evaluteCardDemo";
import { GridSmallBackgroundDemo } from "../demo/gridSmallBgDemo";
import GradOne from "../common/GradOne";
import { GradMid } from "../common/GradMid";
import { GradTwo } from "../common/GradTwo";

const AboutusPage = () => {
  return (
    <div className="relative  z-[-50] ">
        <div className='glow z-[1000] text-white text-3xl absolute left-20 top-10 japanFont'>
          SDC
        </div>
        <div className="opacity-30 ">
        <GridSmallBackgroundDemo className=" bg-opacity-25 " />
        </div>
      <div className="  ">
        <div className="pt-16 font-bold mb-3 text-lg md:text-6xl headingFont bg-clip-text text-transparent bg-gradient-to-b from-purple-300/90 to-white/90 text-center">
          Who we are ?
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="mb-8 bgLuv shrink-0 bg-border h-[1px] w-[60%] mx-auto"
        ></div>
<div className="" >
<EvervaultCardDemo />
</div>
        

        <GradOne />
        <GradMid />
        <GradTwo />
        
          
        
      </div>
    </div>
  );
};

export default AboutusPage;

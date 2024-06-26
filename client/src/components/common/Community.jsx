import React from "react";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import { DockDemo } from "../demo/DockDemo";
import { NeonGradientCard } from "../magicui/neon-gradient-card";

const Community = () => {
  return (
    <div className="overflow-hidden">
      <VelocityScroll
        text="Be part of our community "
        default_velocity={5}
        className="font-display text-center font-bold tracking-[-0.02em] headingFont drop-shadow-sm text-white text-5xl md:leading-[5rem]"
      />

    <div className="relative pb-20">
    <DockDemo />
    <div className="absolute left-56   blob"></div>
    </div>
      

      


    

    </div>
  );
};

export default Community;

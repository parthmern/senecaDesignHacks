import React from "react";

export function GridSmallBackgroundDemo() {
  return (
    <div className="h-[50rem]  relative w-full  bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]  flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
    </div>
  );
}

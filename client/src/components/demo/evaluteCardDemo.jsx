import React from "react";
import clubImg from "../../assets/img/clubImg.jpg"
import { EvervaultCard, Icon } from "../ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div>
            <div className="border border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

     
      <h2 className="text-white subheadingFont mt-4 text-sm font-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit eius totam dolor incidunt nulla sint labore quis corrupti facilis porro magni modi nobis doloribus sit perspiciatis quidem debitis ex animi dolorem, libero obcaecati. Nesciunt assumenda sint distinctio, excepturi voluptate animi natus ipsam deleniti tempore dolore officia minima illo alias quia perspiciatis ea nam necessitatibus labore fugit nobis nihil? Deserunt natus ad ea, quis, laudantium enim corporis aut nihil accusamus numquam nostrum qui reprehenderit repellat consectetur expedita. Possimus, vitae illum! Quo?
      </h2>
      
    </div>
    <div className="border mt-10 border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

     
      <img src={clubImg} ></img>
      
    </div>
    </div>
  );
}

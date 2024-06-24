import React from 'react'
import { FloatingNavDemo } from "../../components/demo/FloatingNavDemo";
import GradOne from "../../components/common/GradOne";
import { GradMid } from "../../components/common/GradMid";
import { GradTwo } from "../../components/common/GradTwo";
import { GlobeDemo } from "../../components/demo/GlobeDemo";
import WordRotate from '../magicui/word-rotate';

const HomePage = () => {
  return (
    <div className=" " >
    <div className="relative">
      <FloatingNavDemo />

      <GradOne />

      <GradMid />

      <GradTwo />

      

    </div>

    <div className="flex flex-col w-full mx-auto mt-52  items-center justify-center " >
      <div className=" text-7xl gap-y-4 flex flex-col font-bold items-center justify-center headingBg headingFont text-white">Seneca <p>Software Developers Club</p></div>
      <div className=" mt-8 h-[1px] bg-white w-[400px] "></div>
      <div className=" flex items-center justify-center gap-x-2 pt-4 subheadingFont text-white" >Where creativity meets 

      <WordRotate
      className=" font-bold text-white "
      words={["Coding     ", "Programming", "Development"]}
        />
      </div>
    </div>

    <div>
      <GlobeDemo />
    </div>
    
  </div>
  )
}

export default HomePage ;
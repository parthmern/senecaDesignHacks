import React from 'react'
import { FloatingNavDemo } from "../../components/demo/FloatingNavDemo";
import GradOne from "../../components/common/GradOne";
import { GradMid } from "../../components/common/GradMid";
import { GradTwo } from "../../components/common/GradTwo";
import { GlobeDemo } from "../../components/demo/GlobeDemo";
import WordRotate from '../magicui/word-rotate';
import ShinyButton from '../magicui/shiny-button';
import Community from '../common/Community';
import Aboutus from '../common/Aboutus';
import { Footer } from '../common/Footer';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
      <div className="relative w-full flex flex-col items-center">
        <FloatingNavDemo />
        <GradOne />
        <GradMid />
        <GradTwo />

        <div className='glow text-white text-3xl absolute left-20 top-10 japanFont'>
          SDC
        </div>

      </div>

      <div className="flex flex-col items-center justify-center w-[100vh]  mx-auto mt-40">
        <div className="text-7xl gap-y-4  flex flex-col font-bold items-center justify-center headingBg headingFont text-white">
          <p>Seneca</p>
          <p className='flex items-center justify-center text-center'>Software Developers Club</p>
        </div>
        <div className="mt-8 h-[1px] opacity-50 bg-white w-[400px]"></div>
        <div className="h-[20px] flex items-center justify-center gap-x-2 pt-4 subheadingFont text-white">
          Where creativity meets
          <WordRotate
            className="font-bold text-white"
            words={["Coding     ", "Programming", "Development"]}
          />
        </div>
      </div>

      <div className="flex mt-5 items-center justify-center relative w-full h-64">
        <GlobeDemo />
        <div onClick={()=>{
        window.location.href = "https://linktr.ee/Seneca_SDC";
    }} className="z-[200] pt-[200px] flex items-center justify-center absolute">
          <ShinyButton   className="border border-black" text="✨ Join Now" />
        </div>
      </div>

      <div>
        <Aboutus />
      </div>

      <div className='h-full'>
        <Community />
      </div>

      
    </div>
  )
}

export default HomePage;

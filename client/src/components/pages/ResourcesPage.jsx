import React from 'react'
import { CategoryDemo } from '../demo/categoryDemo';
import GradOne from '../common/GradOne';
import { GradMid } from '../common/GradMid';
import { GradTwo } from '../common/GradTwo';
import { Icon } from '../ui/evervault-card';

const ResourcesPage = () => {
  return (
    <div className='relative'>
        <div className='glow z-[1000] text-white text-3xl absolute left-20 top-10 japanFont'>
          SDC
        </div>

        <div className="pt-16 font-bold mb-8 text-lg md:text-6xl headingFont bg-clip-text text-transparent bg-gradient-to-b from-purple-300/90 to-white/90 text-center">
          Resources
        </div>

        <GradOne />
        <GradMid />
        <GradTwo />


        <div className="border mt-16 border-white/[0.2] flex flex-col items-start min-w-[300px] w-[25%] mx-auto p-1 relative ">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

            
            <CategoryDemo className={'w-[40%] '} />
        
        </div>

        
    </div>
  )
}


export default ResourcesPage;
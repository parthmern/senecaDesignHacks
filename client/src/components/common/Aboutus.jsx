import React from 'react'
import DotPatternDemo from '../demo/DotPatternDemo ';
import ShineBorder from '../magicui/shine-border';

const Aboutus = () => {
  return (
    <div>
        <div className='mt-6  mb-3 text-lg md:text-6xl headingFont bg-clip-text text-transparent bg-gradient-to-b from-purple-300/90 to-white/90 text-center'> 
            Who we are ?
        </div>
        <div data-orientation="horizontal" role="none" className="mb-8 bgLuv shrink-0 bg-border h-[1px] w-[60%] mx-auto "></div>

        <div className='p-5'>
            <DotPatternDemo />
        </div>



    </div>
  )
}


export default Aboutus;
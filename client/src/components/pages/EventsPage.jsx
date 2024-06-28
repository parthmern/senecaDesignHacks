import React, { useEffect, useState } from 'react'

import { event, getAllEvents, url } from '../../services/apis';
import { apiConnector } from '../../services/apiConnector';
import { EventCardDemo } from '../demo/eventCardDemo';
import { EvervaultCardDemo } from '../demo/EvervaultEventCardDemo';
import { useNavigate } from 'react-router-dom';
import { GradMid } from '../common/GradMid';
import GradOne from '../common/GradOne';
import { GradTwo } from '../common/GradTwo';

const EventsPage = () => {

    const [events, setEvents] = useState(null);
    const navigate = useNavigate();

    async function fetchAllEvents(){
        try{
            const res = await apiConnector("GET", url + event + getAllEvents);
            console.log("res=>", res);
            setEvents(res?.data?.allEvents);
            
        }
        catch(error){
            console.log("error=>", error);
        }
        
    }

    useEffect(()=>{
        fetchAllEvents();
    }, [])

  return (
    <div className='relative '>
        <div onClick={()=>{navigate("/")}} className=' cursor-pointer glow z-[1000] text-white text-3xl absolute left-20 top-10 japanFont'>
          SDC
        </div>

        <div className="pt-16 font-bold mb-3 text-lg md:text-6xl headingFont bg-clip-text text-transparent bg-gradient-to-b from-purple-300/90 to-white/90 text-center">
          Events
        </div>

        <GradMid />
        <GradOne />
        <GradTwo />

        <div className='flex relative mx-auto mb-20 mt-10 items-center gap-20 gap-x-14 justify-center px-40 flex-wrap'>
            {events && events.map((event, index) => {
                return (
                  <>{
                    index == 0 && (<div className="absolute -top-4 -z-10 flex w-full justify-center"><div className="h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#8678F9] opacity-20 blur-[100px]"></div></div>)
                  }
                  <EvervaultCardDemo  key={event.id} event={event} />
                  </>
                
                  
                
                );
            })}
        </div>


    </div>
  )
}

export default EventsPage ;

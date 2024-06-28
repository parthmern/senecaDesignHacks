import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { apiConnector } from '../../services/apiConnector';
import { url, event as e } from '../../services/apis';
import GradOne from '../common/GradOne';
import { GradMid } from '../common/GradMid';
import { GradTwo } from '../common/GradTwo';
import { Icon } from '../ui/evervault-card';
import moment from "moment";

const SingleEventPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [event, setEvent] = useState();

    async function fetchEventDetails(){
        const res = await apiConnector("POST", url + e + "/getOneEventDetail", {id}); 

        console.log(res);
        setEvent(res?.data?.eventDetail[0]);

    }   

    useEffect(()=>{
        fetchEventDetails();
    }, [])


  return (
    <div className='relative '>


        <GradOne />
        <GradMid />
        <GradTwo />

        <div onClick={()=>{
            navigate("/")
        }} className='glow z-[1000] text-white text-3xl absolute left-20 top-10 japanFont'>
          SDC
        </div>

        <div className="pt-16 font-bold mb-3 text-lg md:text-4xl headingFont bg-clip-text text-transparent bg-gradient-to-b from-purple-300/90 to-white/90 text-center">
          {event?.name}
        </div>

        <div
          data-orientation="horizontal"
          role="none"
          className="mb-8 bgLuv shrink-0 bg-border h-[1px] w-[60%] mx-auto"
        ></div>

        <div className="border mt-16 border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

            
            <img src={event?.img} ></img>
        
        </div>



        <div className="border mt-14 blurEffect border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

            
            <h2 className="text-white subheadingFont  text-sm font-light">
                <p className='font-bold pb-3'>Description : </p>
                <p>{event?.desc}</p>
            </h2>
            
        </div>

        <div className="border mt-14 blurEffect border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

            
            <h2 className="text-white subheadingFont  text-sm font-light">
                <p className='font-bold pb-3'>Information : </p>
                {event?.info}
            </h2>
            
        </div>


        <div className="border mt-14 blurEffect border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

            
            <h2 className="text-white subheadingFont  text-sm font-light">
                <p className='font-bold pb-3'>Time and Place : </p>
                <p>{moment(event?.createdAt).format('h:mm A - MMMM D, YYYY ')}  </p>
                <p>{event?.location}</p>
                
            </h2>
            
        </div>

        <div className="border my-14 blurEffect border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

            
            <h2 className="text-white subheadingFont  text-sm font-light">
                <p className='font-bold pb-3'>Links : </p>
                {
                    event?.links.map((link)=>{
                        return(
                            <p className='hover:text-blue-400'>- <a href={link?.link} > {link?.title}</a></p>
                        )
                    })
                }
            </h2>
            
        </div>
        





    </div>
  )
}

export default SingleEventPage; 
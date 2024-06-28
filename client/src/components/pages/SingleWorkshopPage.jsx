import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { apiConnector } from '../../services/apiConnector';
import { url } from '../../services/apis';
import GradOne from "../common/GradOne";
import { GradMid } from "../common/GradMid";
import { GradTwo } from "../common/GradTwo";
import { Icon } from '../ui/evervault-card';
import moment from "moment";

const SingleWorkshopPage = () => {

  const { id, catName } = useParams();

  const navigate = useNavigate();

  const [wp, setWp] = useState(null);

  async function getDetailsOfSingleWorkshop() {
    const res = await apiConnector("POST", url + "workshop/getDetailsOfSingleWorkshop", { id });
    console.log(res);
    setWp(res?.data?.wpDetails[0]);
  }

  useEffect(() => {
    getDetailsOfSingleWorkshop();
  }, []);

  return (
    <div className='relative text-white'>

      <div onClick={() => { navigate("/") }} className="cursor-pointer glow z-[1000] text-white text-3xl absolute left-20 top-10 japanFont">
        SDC
      </div>

      <div className="pt-16 font-bold mb-4 text-lg md:text-6xl headingFont bg-clip-text text-transparent bg-gradient-to-b from-purple-300/90 to-white/90 text-center">
        {wp?.name}
      </div>

      <div
        data-orientation="horizontal"
        role="none"
        className=" bgLuv shrink-0 bg-border h-[1px] w-[60%] mx-auto"
      ></div>

      <GradOne />
      <GradMid />
      <GradTwo />

      <div className="w-full mt-3 mb-8 flex items-center justify-center mx-auto">
        <p className="text-white productFont capitalize mx-auto">
          <span className="cursor-pointer" onClick={() => { navigate("/"); }}>Home</span> &gt;
          <span className="cursor-pointer" onClick={() => { navigate("/resources"); }}>resources</span> &gt;
          <span> category ( {catName.replace(/-/g, " ")} ) </span> &gt;
          <span className="text-pink-300"> Workshop ( {wp?.name} ) </span>
        </p>
      </div>

      <div>
        <div className="border blurEffect border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

          <h2 className="text-white subheadingFont  text-sm font-light">
            <p className='font-bold'>Info : </p>
            <p>{wp?.info}</p>
          </h2>
        </div>
      </div>

      <div className="border mt-10 border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />


        <img src={wp?.img} ></img>

      </div>

      <div>
        <div className="border mt-10 blurEffect border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

            <h2 className="text-white subheadingFont  text-sm font-light">
              <p className='font-bold'>Taken by : </p>
              <p className=' capitalize'>{wp?.takenBy}</p>
              <p>On {moment(wp?.time).format('h:mm A : DD-MM-YYYY')}</p>
              <p>At {wp?.location}</p>
            </h2>
          </div>
      </div>

      <div className="border my-14 blurEffect border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

            
            <h2 className="text-white subheadingFont  text-sm font-light">
                <p className='font-bold pb-3'>Links : </p>
                {
                    wp?.links.map((link)=>{
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

export default SingleWorkshopPage;

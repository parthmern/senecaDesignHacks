import React from "react";
import moment from "moment";
import { EvervaultCard, Icon } from "../ui/evervault-card";
import { useNavigate } from "react-router-dom";

export function EvervaultCardDemo({event}) {
    const navigate = useNavigate();
    console.log(event?.id);
  return (
    <div onClick={()=>{
        (event?.desc) ? navigate(`/event/${event?._id}`) : navigate(`/workshop/${event?._id}`)
    }} className={`border cursor-pointer bg-gradient-to-tr from-purple-400/10 to-transparent/5 border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative ${event?.desc ? "h-[25rem]" : "h-[20rem]"} w-[25rem] `}>
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

      <EvervaultCard className=" capitalize rounded-xl bg-gradient-to-tr from-purple-400/10 to-transparent/5  " text={event?.name} />

      <h2 className="text-white capitalize productFont mt-4 text-sm font-light">
        {event?.desc || event?.info }
      </h2>
      <p className="text-sm border font-light productFont bg-white bg-opacity-10 border-white/[0.2] rounded-full mt-4 text-white px-2 py-0.5">
      {moment(event?.createdAt || event?.time).format('MMMM D, YYYY')} 
      </p>
    </div>
  );
}

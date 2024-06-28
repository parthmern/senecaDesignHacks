import React, { useEffect, useState } from "react";
import { CategoryDemo } from "../demo/categoryDemo";
import GradOne from "../common/GradOne";
import { GradMid } from "../common/GradMid";
import { GradTwo } from "../common/GradTwo";
import { Icon } from "../ui/evervault-card";
import { apiConnector } from "../../services/apiConnector";
import { url } from "../../services/apis";
import { useNavigate } from "react-router-dom";

const ResourcesPage = () => {
  const [cats, setCats] = useState();

  const navigate = useNavigate();

  async function fetchAllCats() {
    const res = await apiConnector("GET", url + "category/getAllCategories");
    console.log(res);
    setCats(res?.data?.allCats);
  }

  useEffect(() => {
    fetchAllCats();
  }, []);

  return (
    <div className="relative">
      <div className="glow z-[1000] text-white text-3xl absolute left-20 top-10 japanFont">
        SDC
      </div>

      <div className="pt-16 font-bold mb-8 text-lg md:text-6xl headingFont bg-clip-text text-transparent bg-gradient-to-b from-purple-300/90 to-white/90 text-center">
        Resources
      </div>

      <GradOne />
      <GradMid />
      <GradTwo />

      {/* <div className="border mt-16 border-white/[0.2] flex flex-col items-start min-w-[300px] w-[25%] mx-auto p-1 relative ">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

        <CategoryDemo className={"w-[40%] "} />
      </div> */}

      <div className="flex items-center justify-center flex-wrap w-[70%]  mx-auto">
        {cats &&
          cats.map((cat) => {
            return(
            <div onClick={()=>{navigate(`/category/${cat?._id}`)}} className="border mt-16 border-white/[0.2] flex flex-col items-start min-w-[300px] w-[25%] mx-auto p-1 relative ">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

              <CategoryDemo cat={cat}  className={"w-[40%] "} />
            </div>
            )
          })}
      </div>
    </div>
  );
};

export default ResourcesPage;

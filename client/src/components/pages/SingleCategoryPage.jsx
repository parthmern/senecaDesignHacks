import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiConnector } from "../../services/apiConnector";
import { url } from "../../services/apis";
import GradOne from "../common/GradOne";
import { GradMid } from "../common/GradMid";
import { GradTwo } from "../common/GradTwo";
import { Icon } from "../ui/evervault-card";

const SingleCategoryPage = () => {
  const { id } = useParams();

  const [category, setCategory] = useState(null);

  async function fetchDetailsOfCategroy() {
    const res = await apiConnector(
      "POST",
      url + "category/getCategoryDetails",
      { id }
    );
    console.log(res);
    setCategory(res?.data?.catDetails[0]);
  }

  useEffect(() => {
    fetchDetailsOfCategroy();
  }, []);

  return (
    <div className="relative ">
      <div className="glow z-[1000] text-white text-3xl absolute left-20 top-10 japanFont">
        SDC
      </div>

      <div className="pt-16 font-bold mb-4 text-lg md:text-6xl headingFont bg-clip-text text-transparent bg-gradient-to-b from-purple-300/90 to-white/90 text-center">
        {category?.name}
      </div>

      <div
        data-orientation="horizontal"
        role="none"
        className="mb-8 bgLuv shrink-0 bg-border h-[1px] w-[60%] mx-auto"
      ></div>

      <GradOne />
      <GradMid />
      <GradTwo />

      <div>
        <div className="border blurEffect border-white/[0.2] flex flex-col items-start w-[50%] mx-auto p-4 relative ">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

          <h2 className="text-white subheadingFont  text-sm font-light">
            {category?.info}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryPage;

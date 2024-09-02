import Lottie from "lottie-react";
import React from "react";
import bestsell from "../../../assets/bestsell.json";
import delivary from "../../../assets/delivary.json";
import retur from "../../../assets/return.json";
import sopping from "../../../assets/sopping.json";
import { FcServices } from "react-icons/fc";
const Service = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-semibold my-10 flex ">
          Service
          <FcServices className="text-5xl" />
        </h1>
      </div>
      <div className="flex justify-center lg:gap-20 md:gap-3 gap-2 my-8 ">
        <div className="border-2 border-[#001fac] rounded-2xl w-fit p-6">
          <div className="my-auto mx-auto">
            <h1 className="font-semibold text-2xl text-[#0c0074] text-center ">
              Best Sell
            </h1>
          </div>
          <div className="">
            <Lottie animationData={bestsell} className="h-fit w-40 mx-5 " />
          </div>
        </div>
        <div className="border-2 border-[#001fac] rounded-2xl w-fit p-6">
          <div className="my-auto mx-auto">
            <h1 className="font-semibold text-2xl text-[#0c0074] text-center ">
              Fast Delivary
            </h1>
          </div>
          <div className="">
            <Lottie animationData={delivary} className="h-fit w-40 mx-5 " />
          </div>
        </div>
        <div className="border-2 border-[#001fac] rounded-2xl w-fit p-6">
          <div className="my-auto mx-auto">
            <h1 className="font-semibold text-2xl text-[#0c0074] text-center ">
              Return
            </h1>
          </div>
          <div className="">
            <Lottie animationData={retur} className="h-fit w-40 mx-5 " />
          </div>
        </div>
        <div className="border-2 border-[#001fac] rounded-2xl w-fit p-6">
          <div className="my-auto mx-auto">
            <h1 className="font-semibold text-2xl text-[#0c0074] text-center ">
              Sopping
            </h1>
          </div>
          <div className="">
            <Lottie animationData={sopping} className="h-fit w-40 mx-5 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

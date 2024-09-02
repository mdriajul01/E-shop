import React from "react";
// import { Lottie } from "lottie-react";
// import help from "./help.json"; // Ensure this path is correct
import Lottie from "lottie-react";
import help from "./help.json";
import { RiCustomerService2Line } from "react-icons/ri";
const Support = () => {
  return (
    <section className="flex flex-col items-center mt-8">
      <div className="">
        <h1 className="font-bold text-4xl text-pretty text-center my-10 flex gap-3">
          Help
          <RiCustomerService2Line className="text-[99px] -mr-20 -mt-5 text-[#e7a821]" />
          <span className="text-[#060861f5] -ml-2.5  text-[21px]">
            24<span className="text-[#e7a821] text-[23px]">/</span>7
          </span>
          <span className="ml-6">Hour</span>
        </h1>
      </div>
      <div className=" p-10 -mt-5 flex items-center justify-around shadow-md bg-[#ececee3d] gap-20 rounded-2xl">
        <div>
          <Lottie
            className=" h-fit lg:w-[700px] rounded-lg "
            animationData={help}
            loop={true}
          />
        </div>
        <div className=" p-5">
          <form
            className="border-2 rounded-xl border-[#06071f] p-7 w-96 h-auto"
            action=""
            method=""
          >
            <div className="ml-8">
              <h1 className="font-bold text-4xl text-pretty text-center my-10 ml-20 flex gap-3 ">
                <RiCustomerService2Line className="text-[99px] -mr-20 -mt-5 text-[#e7a821]" />
                <span className="text-[#060861f5] -ml-2.5  text-[21px]">
                  24<span className="text-[#e7a821] text-[23px]">/</span>7
                </span>
              </h1>
            </div>
            <div>
              <h1 className="text-lg font-semibold ml-2">Email</h1>
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="Email"
                className="p-3 m-2 border-2 rounded-lg border-[#040557] w-72 bg-white "
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold ml-2">Subject</h1>
              <input
                type="text"
                name="Subject"
                id="Subject"
                placeholder="Subject"
                className="p-3 m-2 border-2 rounded-lg border-[#040557] w-72 bg-white "
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold ml-2">Comments</h1>
              <textarea
                id="comments"
                name="Comments"
                placeholder="Comments"
                className="bg-white m-2 w-72 p-4 bg-transparent border-2 border-[#040557] rounded-lg outline-none resize-none min-h-[150px] "
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="btn w-72 ml-2 bg-[#040557] text-white hover:bg-[#1e2d83] hover:text-[#fdde52] text-xl "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Support;

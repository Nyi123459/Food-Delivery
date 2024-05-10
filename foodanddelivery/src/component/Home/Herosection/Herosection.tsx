import React from "react";
import { RxTriangleRight } from "react-icons/rx";
import Images from "../../../assets";
import { Link } from "react-router-dom";
import { iconsLinks } from "../../../constants";

const Herosection = () => {
  return (
    <>
      <div className="flex flex-col bg-primary relative">
        <div className="max-md:flex-col flex mt-[5%] ml-[10%] mr-[10%] mb-[5%]">
          <div className="flex flex-col w-full md:w-1/2 ">
            <div className="max-w-[650px] lg:text-5xl md:text-3xl sm:text-2xl xs:text-xl text-white">
              Ride & Savor <br />
              Delivery Service Management
            </div>
            <p className="lg:text-base md:text-sm sm:text-xs xs:text-xs">
              Track and optimize routes in real-time
            </p>
            <div className="flex mt-[10%] mb-[10%] items-center max-lg:mb-0">
              <p className=" shadow shadow-black bg-[#F17228] font-semibold text-base max-lg:text-sm max-md:text-xs text-white text-center flex justify-center items-center rounded-lg px-2 py-1 ">
                Get Started
              </p>
              <RxTriangleRight className="ml-[20px] h-[25px] w-[25px] rounded-full bg-[#F17228] border-[1.2px] border-none shadow shadow-black" />{" "}
              <p className="text-white text-sm ml-[10px] justify-center ">
                Watch how it works{" "}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src={Images.Display} alt="Display-Photo" className="w-full" />
          </div>
        </div>
        <div className="flex absolute bottom-0 translate-y-1/2 gap-x-20 max-lg:gap-x-5 left-0 right-0 sm:ml-4 sm:mr-4 md:ml-8 md:mr-8 lg:ml-12 lg:mr-12 xl:ml-16 xl:mr-16 max-lg:flex-wrap max-lg:justify-between max-lg:h-[110px] ">
          {iconsLinks.map((data, index) => (
            <Link
              to={data.route}
              key={index}
              className="border-2 bg-secondary flex items-center sm:w-[250px] md:w-[250px] lg:w-[250px] xl:w-[250px] rounded-xl p-2.5 max-md:p-0 max-sml:p-0 justify-start  max-lg:ml-12 max-lg:mr-12 max-lg:mt-0 max-mdl:absolute max-mdl:">
              <img src={data.icon} alt={data.title} className="size-[50px]" />
              <p className="text-xl sm:text-sm xs:text-xs max-md:text-base lg:text-lg lg:truncate md:truncate pl-4 ">
                {data.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Herosection;



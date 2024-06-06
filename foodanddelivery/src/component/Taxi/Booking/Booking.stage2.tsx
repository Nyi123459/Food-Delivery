import React from "react";
import BookingCommon from "../../Common/Booking.common";
import { BookingStageProps } from "./Booking.stage1";
import Tyler from "../../../assets/Taxi/Driver.jpg";
import Map from "../../../assets/Taxi/Map.png";
import { FaStarHalfAlt } from "react-icons/fa";
import { RiTaxiLine } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import { AiFillMessage } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const BookingStageTwo: React.FC<BookingStageProps> = ({
  currentStage,
  handleNext,
  handleBack,
}) => {
  return (
    <BookingCommon
      children={
        <div className="flex mt-[5%] ml-[10%] mr-[10%] justify-between">
          <div className="w-1/2 pr-[5%]">
            <div className="w-full rounded-md shadow-md shadow-blue-gray-500 h-[450px] bg-white ">
              <p className="font-bold pl-8 pt-5 text-xl">Driver Detail</p>
              <div className="pt-[2%]">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={Tyler}
                    alt="Tyler"
                    className="rounded-full w-[50px] h-[50px]"
                  />
                  <p className="text-xs font-bold py-2">Tyler Joseph</p>
                  <p className="text-xs font-bold">+1-202-555-161</p>
                </div>
              </div>
              <div className="ml-[10%] mr-[10%] mt-[5%]">
                <div className="flex justify-around">
                  <div className="flex flex-col justify-center items-center">
                    <div className="size-8 bg-[#FFC740] rounded-full flex justify-center items-center">
                      <FaStarHalfAlt />
                    </div>
                    <p className="text-sm font-bold p-1">4.8</p>
                    <p className="text-xs">Ratings</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="size-8 bg-[#FFC740] rounded-full flex justify-center items-center">
                      <RiTaxiLine />
                    </div>
                    <p className="text-sm font-bold p-1">279</p>
                    <p className="text-xs">Trips</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="size-8 bg-[#FFC740] rounded-full flex justify-center items-center">
                      <GoClock />
                    </div>
                    <p className="text-sm font-bold p-1">5</p>
                    <p className="text-xs">Years</p>
                  </div>
                </div>
                <div className="ml-[10%] mr-[10%] mt-[5%] flex flex-col">
                  <div className="flex justify-between text-sm py-3">
                    <p className="opacity-70">Member Since</p>
                    <p className="font-semibold">July 15, 2019</p>
                  </div>
                  <div className="flex justify-between text-sm py-3">
                    <p className="opacity-70">Car Model</p>
                    <p className="font-semibold">Mercedes-Benz E-class</p>
                  </div>
                  <div className="flex justify-between text-sm py-3">
                    <p className="opacity-70">Plate Number</p>
                    <p className="font-semibold">HSW 4736 XK</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <button className="size-8 bg-[#FFC740] rounded-full flex justify-center items-center">
                    <AiFillMessage />
                  </button>
                  <button className="size-8 bg-[#FFC740] rounded-full flex justify-center items-center">
                    <BsFillTelephoneFill />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly mt-5">
              <button
                className="w-[20%] h-8 bg-navcolor rounded-md"
                onClick={handleBack}>
                Back
              </button>
              <button
                className="w-[20%] h-8 bg-navcolor rounded-md"
                onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
          <div className="w-1/2 ">
            <img src={Map} alt="Map" className="w-full h-[500px]" />
          </div>
        </div>
      }
      currentStage={currentStage}
      handleNext={handleNext}
      handleBack={handleBack}
    />
  );
};

export default BookingStageTwo;

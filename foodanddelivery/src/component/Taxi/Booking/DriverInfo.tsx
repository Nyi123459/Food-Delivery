import React, { useState } from "react";
import TaxiPic from "../../../assets/Taxi/TaxiPic.png";
import { RxStarFilled } from "react-icons/rx";

interface DriverInfoProps {
  driverName: string;
  rating: number;
  price: number;
}

const DriverInfo: React.FC<DriverInfoProps> = ({
  driverName,
  rating,
  price,
}) => {
  return (
    <div className="absolute right-[-90%] top-0 z-10 w-[80%] h-[400px] bg-gradient-to-r from-[#FFC740] to-yellow-200 pt-4 pl-3 pr-3 rounded-md">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-bold text-xl">Choose a ride</h1>
        <p className="font-bold">Recommended</p>
      </div>
      <div className="flex justify-between pt-3 hover:outline hover:outline-2 hover:outline-white hover:bg-gradient-to-r from-[#f7c03e] to-yellow-300 transform hover:-translate-y-1 transition-transform duration-500 cursor-pointer">
        <div className="flex">
          <img
            src={TaxiPic}
            alt="Taxi_Picture"
            className="size-20 object-cover"
          />
          <div className="flex flex-col pl-2 justify-center">
            <p className="font-bold ">Savor's Taxi</p>
            <p className="font-semibold text-sm">{driverName}</p>
            <p className="text-sm">4 min away</p>
          </div>
        </div>
        <div className="flex flex-col m-3 justify-center items-center">
          <div className="flex gap-x-1">
            <RxStarFilled className="object-fill size-4" />
            <p className="font-semibold text-sm">{rating}</p>
          </div>
          <p className="font-semibold text-sm">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default DriverInfo;

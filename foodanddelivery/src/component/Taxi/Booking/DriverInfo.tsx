// DriverInfo.tsx
import React from "react";
import { useBidStore } from "../../../zustand/useConversation";
import Taximodel from "../../../assets/Taxi/TaxiPic.png";

interface DriverInfoProps {
  driverName: string;
  rating: number;
  price: number;
}

const DriverInfo: React.FC<DriverInfoProps> = ({}) => {
  const bids = useBidStore((state) => state.bids);

  return (
    <div className="absolute left-[90%] top-0 z-10 w-[90%] h-[400px] bg-gradient-to-r from-[#FFC740] to-yellow-200 pt-4 pl-3 pr-3 rounded-md ">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-bold text-xl">Choose a ride</h1>
        <p className="font-bold">Recommended</p>
      </div>

      <div
        className="overflow-y-auto"
        style={{ maxHeight: "calc(100% - 80px)" }}>
        {bids.map((bid, index) => (
          <div className="p-1 " key={index}>
            <li className="flex items-center justify-between space-x-4 py-2 ">
              <img
                src={Taximodel}
                alt="Taxi Model"
                className="w-16 h-16 object-contain"
              />
              <div className="flex flex-col flex-grow text-center">
                <p className="text-base font-bold">Savor's Taxi</p>
                <p className="text-sm">{bid.driverName}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-right">Rating: {bid.rating}</p>
                <p>{bid.amount} MMK</p>
              </div>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverInfo;

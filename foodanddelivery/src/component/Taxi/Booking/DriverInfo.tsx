// DriverInfo.tsx
import React from "react";
import { useBidStore } from "../../../zustand/useConversation";

interface DriverInfoProps {
  driverName: string;
  rating: number;
  price: number;
}

const DriverInfo: React.FC<DriverInfoProps> = ({}) => {
  const bids = useBidStore((state) => state.bids);

  return (
    <div className="absolute right-[10%] top-0 z-10 w-[80%] h-[400px] bg-gradient-to-r from-[#FFC740] to-yellow-200 pt-4 pl-3 pr-3 rounded-md">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-bold text-xl">Choose a ride</h1>
        <p className="font-bold">Recommended</p>
      </div>
      <ul>
        {bids.map((bid, index) => (
          <li key={index}>
            <p>Driver Name: {bid.driverName}</p>
            <p>Rating: {bid.rating}</p>
            <p>Amount: {bid.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverInfo;

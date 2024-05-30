import React from "react";
import FloatingItems from "../../Common/FloatingItems";
import { CanOrderImages } from "../../../assets";

const CanOrder = () => {
  return (
    <div className="flex flex-col py-12 ml-[10%] mr-[10%]">
      <div className="flex flex-start mb-6">
        <h2 className="text-2xl font-bold">Can Order Now</h2>
      </div>
      <FloatingItems data={CanOrderImages} showOptionalContent={true} />;
    </div>
  );
};

export default CanOrder;

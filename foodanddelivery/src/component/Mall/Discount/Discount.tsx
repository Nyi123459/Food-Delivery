import React from "react";

const Discount = () => {
  return (
    <section className="flex ml-[10%] mr-[10%] mt-[10%] mb-[10%] bg-gradient-to-r from-mallcolor1 to-mallcolor2 h-[200px]">
      <div className="relative w-full h-full border border-none">
        <div className="absolute top-0 left-0 w-[20%] h-8 font-bold text-white flex justify-center items-center shadow-md shadow-gray-700 mt-2 rounded-e-md bg-[#EF4358]">
          Big Sales! Up to 30% off
        </div>
        <div className="absolute bottom-0 right-0 bg-[#F17228] mb-3 mr-4 rounded-md w-[10%] h-8  flex justify-center items-center font-bold text-white shadow-md shadow-gray-700">
          Order Now
        </div>
      </div>
    </section>
  );
};

export default Discount;

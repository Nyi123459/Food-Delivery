import React from "react";
import Orange from "../../../assets/Mall/Orange.png";
import Carrot from "../../../assets/Mall/Carrrot.png";
import Asparagus from "../../../assets/Mall/Asparagus.png";
import Person from "../../../assets/Mall/Person.png";
import Pepper from "../../../assets/Mall/Pepper.png";
import Fruits from "../../../assets/Mall/Fruits.png";

const Discount = () => {
  return (
    <section className="flex ml-[10%] mr-[10%] mt-[5%] mb-[10%] bg-gradient-to-r from-mallcolor1 to-mallcolor2 h-[225px] rounded-xl shadow-md shadow-gray-700">
      <div className="flex w-full h-full border border-none max-sml:hidden">
        <div className="relative flex items-center lg:w-1/2 w-3/5 max-sml:hidden">
          <p className="ml-[10%] text-4xl font-bold">
            Stock Up in your Kitchen
          </p>
          <div className="absolute top-0 left-0 sm:w-[60%] lgx:w-[40%] h-10 font-bold text-white flex justify-center items-center shadow-md shadow-gray-700 mt-4 rounded-e-md bg-[#EF4358]">
            Big Sales! Up to 30% off
          </div>
        </div>
        <div className="relative flex items-center w-full sml:hidden">
          <p className="ml-[10%] text-4xl font-bold">
            Stock Up in your Kitchen
          </p>
          <div className="absolute top-0 left-0 sm:w-[60%] lgx:w-[40%] h-10 font-bold text-white flex justify-center items-center shadow-md shadow-gray-700 mt-4 rounded-e-md bg-[#EF4358]">
            Big Sales! Up to 30% off
          </div>
        </div>
        <div className="lg:w-1/2 w-2/5 relative">
          <div className="absolute top-1 left-3 max-lg:hidden">
            <img
              src={Orange}
              alt="Orange"
              className="w-[80px] h-[90px] opacity-50"
            />
          </div>
          <div className="absolute top-[40%] left-2 max-lg:hidden">
            <img
              src={Carrot}
              alt="Carrot"
              className="w-[50px] h-[50px] opacity-70"
            />
          </div>
          <div className="absolute bottom-0 max-lg:hidden">
            <img
              src={Asparagus}
              alt="Asparagus"
              className="w-[80px] h-[90px] opacity-50"
            />
          </div>
          <div className="absolute bottom-0 left-[15%] max-lg:hidden">
            <img src={Person} alt="Person" className="w-[170px] h-[250px]" />
          </div>
          <div className="absolute top-[35%] left-[40%] max-lgx:hidden">
            <img
              src={Pepper}
              alt="Pepper"
              className="w-[30px] h-[40px] opacity-50"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-[#F17228] mb-4 mr-10 rounded-md lg:w-[30%] w-[40%]  h-10  flex justify-center items-center text-center font-bold text-white shadow-md shadow-gray-700">
            Order Now
          </div>
          <div className="absolute top-0 right-0 max-md:hidden">
            <img
              src={Fruits}
              alt="Fruits"
              className="w-[200px] h-[200px] opacity-70 rotate-90"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full h-full border border-none sml:hidden">
        <div className="relative flex items-center lg:w-1/2 w-3/5 max-sml:hidden">
          <p className="ml-[10%] text-4xl font-bold">
            Stock Up in your Kitchen
          </p>
          <div className="absolute top-0 left-0 sm:w-[60%] lgx:w-[40%] h-10 font-bold text-white flex justify-center items-center shadow-md shadow-gray-700 mt-4 rounded-e-md bg-[#EF4358]">
            Big Sales! Up to 30% off
          </div>
        </div>
        <div className="relative flex justify-center items-center w-full h-50 bg-cover bg-center bg-no-repeat sml:hidden">
          <p className="text-2xl font-extrabold z-10">
            Stock Up in your Kitchen
          </p>
          <div className="absolute top-0 left-0 sm:w-[60%] lgx:w-[40%] h-10 font-bold text-white flex justify-center items-center shadow-md shadow-gray-700 mt-4 rounded-e-md bg-[#EF4358] z-10">
            Big Sales! Up to 30% off
          </div>
          <div className="absolute bottom-0 right-0 bg-[#F17228] mb-4 mr-10 rounded-md w-[30%] h-10 flex justify-center items-center text-center font-bold text-white shadow-md shadow-gray-700 z-10">
            Order Now
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;

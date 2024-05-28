import React from "react";
import Orange from "../../../assets/Mall/DiscountItemOne/Orange.png";
import Carrot from "../../../assets/Mall/DiscountItemOne/Carrrot.png";
import Asparagus from "../../../assets/Mall/DiscountItemOne/Asparagus.png";
import Chicken from "../../../assets/Mall/DiscountItemOne/Chicken.png";
import Pepper from "../../../assets/Mall/DiscountItemOne/Pepper.png";
import Fruits from "../../../assets/Mall/DiscountItemOne/Fruits.png";
import { FirstHalfComponent } from "../../Common/SampleDiscountDesign";
import { ImageComponent } from "../../Common/SampleDiscountDesign";

const DiscountItemOne = () => {
  return (
    <section className="flex ml-[10%] mr-[10%] mb-[10%] bg-gradient-to-r from-mallcolor1 to-mallcolor2 h-[225px] rounded-xl shadow-md shadow-gray-700">
      <div className="flex w-full h-full border-none max-sml:hidden">
        <FirstHalfComponent
          header={"Stock Up in your Kitchen"}
          text={"Big Sales! Up to 30% off"}
          optionalImg={false}
          spanText={false}
          optionalDiv={true}
          className="relative flex items-center lg:w-1/2 w-3/5 max-sml:hidden"
          headerClassName="ml-[10%] text-4xl font-bold"
          optionalDivClassName="max-md:text-xs"
        />
        {/* Responsive Design */}
        <FirstHalfComponent
          header={"Stock Up in your Kitchen"}
          text={"Big Sales! Up to 30% off"}
          optionalImg={false}
          spanText={false}
          optionalDiv={true}
          className="relative flex items-center w-full sml:hidden"
          headerClassName="ml-[10%] text-4xl font-bold"
        />
        {/* *******  */}
        <div className="lg:w-1/2 w-2/5 relative">
          <ImageComponent
            img={Orange}
            imgText={"Orange"}
            className="absolute top-1 left-3 max-lg:hidden"
            imgClassName="w-[80px] h-[90px] opacity-50"
          />
          <ImageComponent
            img={Carrot}
            imgText={"Carrot"}
            className="absolute top-[40%] left-2 max-lg:hidden"
            imgClassName="w-[50px] h-[50px] opacity-70"
          />
          <ImageComponent
            img={Asparagus}
            imgText={"Asparagus"}
            className="absolute bottom-0 max-lg:hidden"
            imgClassName="w-[80px] h-[90px] opacity-50"
          />
          <ImageComponent
            img={Chicken}
            imgText={"Chicken"}
            className="absolute bottom-0 left-[15%] max-lg:hidden"
            imgClassName="w-[170px] h-[230px]"
          />
          <ImageComponent
            img={Pepper}
            imgText={"Pepper"}
            className="absolute top-[35%] left-[40%] max-lgx:hidden"
            imgClassName="w-[30px] h-[40px] opacity-50"
          />
          <div className="absolute bottom-0 right-0 bg-[#F17228] mb-4 mr-10 rounded-md lg:w-[30%] w-[40%]  h-10  flex justify-center items-center text-center font-bold text-white shadow-sm shadow-gray-700">
            Order Now
          </div>
          <ImageComponent
            img={Fruits}
            imgText={"Fruits"}
            className="absolute top-0 right-0 max-md:hidden"
            imgClassName="w-[200px] h-[200px] opacity-70 rotate-90"
          />
        </div>
      </div>
      {/*Below is Responsive design for different breakpoint justify-center w-full h-50 bg-cover bg-center bg-no-repeat sml:hidden*/}
      <div className="flex w-full h-full border border-none sml:hidden">
        <FirstHalfComponent
          header={"Stock Up in your Kitchen"}
          text={"Big Sales! Up to 30% off"}
          optionalImg={false}
          spanText={false}
          optionalDiv={true}
          className="relative flex items-center lg:w-1/2 w-3/5 max-sml:hidden"
          headerClassName="ml-[10%] text-4xl font-bold"
        />
        <FirstHalfComponent
          header={"Stock Up in your Kitchen"}
          text={"Big Sales! Up to 30% off"}
          optionalImg={false}
          spanText={false}
          optionalDiv={true}
          className="relative flex items-center justify-center w-full h-50 bg-cover bg-center bg-no-repeat sml:hidden"
          headerClassName="text-2xl font-extrabold z-10">
          <div className="absolute bottom-0 right-0 bg-[#F17228] mb-4 mr-10 rounded-md w-[30%] h-10 flex justify-center items-center text-center font-bold text-white shadow-sm shadow-gray-700 z-10">
            Order Now
          </div>
        </FirstHalfComponent>
      </div>
    </section>
  );
};

export default DiscountItemOne;

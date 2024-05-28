import React from "react";
import ChickenwithBag from "../../../assets/Mall/DiscountItemTwo/ChickenwithBag.png";
import DiscountPercentage from "../../../assets/Mall/DiscountItemTwo/DiscountPercentage.png";
import TiltedVegetables from "../../../assets/Mall/DiscountItemTwo/Vegetable-Tilted-View.png";
import CityMart from "../../../assets/Mall Brand/CityMart.png";
import {
  FirstHalfComponent,
  ImageComponent,
} from "../../Common/SampleDiscountDesign";

const DiscountItemTwo = () => {
  return (
    <section className="flex ml-[10%] mr-[10%] mb-[10%] h-[225px] rounded-xl shadow-md shadow-gray-700">
      <div className="flex w-full h-full border-none max-sml:hidden bg-gradient-to-br from-mallcolor1 to-amber-300 ">
        <FirstHalfComponent
          className="flex ml-10 mt-12 w-1/2 justify-center"
          header={"HUGE SAVINGS from"}
          headerClassName="w-3/4 text-3xl font-bold text-white ml-2 flex flex-col justify-start    mdl:text-xl max-md:text-sm md:text-base mdx:text-2xl"
          optionalDiv={false}
          spanText={true}
          spanLetter="City Mart"
          spanTextClassName="text-yellow-400 font-extrabold"
          optionalImg={true}
          photo={CityMart}
          photoText="CityMart"
          optionalImgDivClassName="w-1/4 flex justify-end"
          optionalImgClassName="w-fit h-[40%]"
        />
        <div className="relative w-1/2">
          <ImageComponent
            img={ChickenwithBag}
            imgText={"Chicken_with_Bag"}
            className="absolute bottom-0 max-mdx:hidden"
            imgClassName="w-full h-[200px]"
          />
          <ImageComponent
            img={DiscountPercentage}
            imgText={"Discount_Percentage"}
            className="absolute top-2 left-[35%]"
            imgClassName="w-[20%]"
          />
          <ImageComponent
            img={TiltedVegetables}
            imgText={"Vegetables_Bag"}
            className="absolute right-0"
            imgClassName="w-[350px]"
          />
          <div className="absolute bottom-0 right-0 bg-[#F17228] mb-4 mr-10 rounded-md w-[30%] h-10  flex justify-center items-center text-center text-base max-mdx:text-xs font-bold text-white shadow-sm shadow-gray-700">
            Order Now
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountItemTwo;

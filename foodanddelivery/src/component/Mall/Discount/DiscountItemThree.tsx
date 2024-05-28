import React from "react";
import Mascot from "../../../assets/Mall/DiscountItemThree/mascot.png";
import makeup from "../../../assets/Mall/DiscountItemThree/makeup.png";
import cushion from "../../../assets/Mall/DiscountItemThree/cushion.png";
import freeDelivery from "../../../assets/Mall/DiscountItemThree/freeDelivery.png";
import DiscountPercentage from "../../../assets/Mall/DiscountItemTwo/DiscountPercentage.png";
import SeinGayHar from "../../../assets/Mall Brand/SeinGayHar.png";
import {
  FirstHalfComponent,
  ImageComponent,
} from "../../Common/SampleDiscountDesign";

const DiscountItemThree = () => {
  return (
    <section className="flex ml-[10%] mr-[10%] mb-[10%] h-[225px] rounded-xl shadow-md shadow-gray-700">
      <div className="flex w-full h-full border-none max-sml:hidden bg-gradient-to-br from-mallcolor1 to-amber-300 mt-0">
        <div className="relative flex flex-col w-1/2 ml-[5%] mb-0 mt-0 items-center">
          <FirstHalfComponent
            className="max-w-[390px]"
            header={"Rainy season wellness deals!"}
            headerClassName="text-3xl text-white flex items-center justify-center font-bold "
            optionalImg={true}
            optionalImgClassName="w-[30%] h-[80px]"
            photo={SeinGayHar}
            photoText={"Sein_Gay_Har"}
            optionalDiv={false}
            spanText={false}>
            <div className="absolute bottom-0 left-0 bg-[#F17228] mb-4 ml-[9%] rounded-md w-[30%] h-10  flex justify-center items-center text-center text-base max-mdx:text-xs font-bold text-white shadow-sm shadow-gray-700">
              Order Now
            </div>
          </FirstHalfComponent>
        </div>
        <div className="relative w-1/2">
          <ImageComponent
            img={DiscountPercentage}
            imgText={"Discount_Percentage"}
            className="absolute left-0 bottom-8"
            imgClassName="w-13 h-[50px]"
          />
          <ImageComponent
            img={Mascot}
            imgText={"Mascot"}
            className="absolute bottom-0 left-[5%]"
            imgClassName="w-[70%] h-[230px]"
          />
          <ImageComponent
            img={freeDelivery}
            imgText={"free_Delivery"}
            className="absolute top-2 left-[50%]"
            imgClassName="w-13 h-[55px]"
          />
          <ImageComponent
            img={makeup}
            imgText={"makeup"}
            className="absolute right-0"
            imgClassName="w-18 h-[150px]"
          />
          <ImageComponent
            img={cushion}
            imgText={"cushion"}
            className="absolute bottom-0 right-0"
            imgClassName="w-15 h-[80px]"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountItemThree;

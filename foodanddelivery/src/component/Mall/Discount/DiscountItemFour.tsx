import React from "react";
import BeautyDiary from "../../../assets/Mall/DiscountItemFour/BEAUTY DIARY.png";
import Cosmetic from "../../../assets/Mall/DiscountItemFour/Cosmetic.png";
import BeautyDiaryLogo from "../../../assets/Mall/DiscountItemFour/Beauty-diary logo.png";
import Date from "../../../assets/Mall/DiscountItemFour/Date.png";
import thirtyPercentOff from "../../../assets/Mall/DiscountItemFour/30% OFF.png";
import { FirstHalfComponent } from "../../Common/SampleDiscountDesign";

const DiscountItemFour = () => {
  return (
    <section className="flex ml-[10%] mr-[10%] mb-[10%] h-[225px] rounded-xl shadow-md shadow-gray-700">
      <div className="flex w-full h-full border-none max-sml:hidden bg-gradient-to-br from-[#fffacd] to-[#ffa500] mt-0">
        <FirstHalfComponent
          header={"June Sale"}
          className="relative"
          optionalDiv={false}
          optionalImg={true}
          spanText={false}
        />
      </div>
    </section>
  );
};

export default DiscountItemFour;

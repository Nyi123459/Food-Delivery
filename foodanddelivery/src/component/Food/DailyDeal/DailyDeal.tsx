import React from "react";
import Heading from "../../ItemCard/Items/Heading";
import { Coupons } from "../../../assets";
import ReusableSlider from "../../ItemCard/Items/ReusableSlider";

const DailyDeal: React.FC = () => {
  const customSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col pb-20 ml-[10%] mr-[10%]">
      <Heading heading="Your Daily Deal" />
      <ReusableSlider settings={customSettings}>
        {Coupons.map((item) => (
          <div className="px-2 border-slate-200" key={item.id}>
            <img src={item.image} alt={`Coupon ${item.id}`} />
          </div>
        ))}
      </ReusableSlider>
    </div>
  );
};

export default DailyDeal;

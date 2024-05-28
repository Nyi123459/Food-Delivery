import React from "react";
import Slider from "react-slick";
import DiscountItemOne from "./DiscountItemOne";
import DiscountItemTwo from "./DiscountItemTwo";
import DiscountItemThree from "./DiscountItemThree";

const Cupons: React.FC = () => {
  const customSetting = {
    dots: false,
    infinite: true,
    autoSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
  };
  return (
    <Slider {...customSetting}>
      <DiscountItemOne />
      <DiscountItemTwo />
      <DiscountItemThree />
    </Slider>
  );
};

export default Cupons;

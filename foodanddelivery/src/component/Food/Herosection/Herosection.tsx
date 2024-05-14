import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Food } from "../../../assets";

const Herosection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-primary">
      <div className="flex ml-[10%] mr-[10%]">
        <div className="flex flex-col w-3/5">
          <div className="text-5xl text-white font-bold mt-[10%]">
            Would you like to be with me?
            <p className="text-base mt-[10%]">
              Accessible meals and taxis, just a few clicks away.
            </p>
          </div>
          <div>Delivery</div>
        </div>
        <div className="w-2/5 mt-[10%] mb-[10%]">
          <Slider {...settings}>
            {Food.map((data, index) => (
              <div key={index} className="size-[250px] ">
                <img src={data.image} alt={data.title} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

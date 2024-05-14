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
        <div className="w-2/5">
          <div className="carousel carousel-center max-w-md p-2 rounded-box mt-[20%] mb-[20%] ml-[10%] mr-[10%]">
            {Food.map((data) => (
              <div className="carousel-item h-[100%] w-[60%] left-0 ">
                <img
                  src={data.image}
                  alt={data.title}
                  className="max-h-[250px] w-auto rounded-box"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

//   const settings = {
//     infinite: true,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//   };

{
  /* <div className="w-2/5 ">
  <div className="carousel carousel-center max-w-md p-6 rounded-box mt-[20%] mb-[20%] ml-[10%] mr-[10%]">
    <div className="flex flex-col bottom-0 size-[300px]">
      <Slider {...settings}>
        {Food.map((data) => (
          <div>
            <img
              src={data.image}
              alt={data.title}
              className="max-h-[250px] w-auto rounded-box"
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>; */
}

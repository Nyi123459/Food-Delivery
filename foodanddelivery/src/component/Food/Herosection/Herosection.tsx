import React from "react";
import { Food } from "../../../assets";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Carousel from "./Carousel";

const Herosection = () => {
  return (
    <section className="bg-primary h-[550px] max-mdx:h-[870px]">
      <div className="flex max-mdx:flex-col ml-[10%] mr-[10%] max-sml:h-[550px]">
        <div className="flex flex-col w-3/5 mt-[10%] max-mdx:w-full">
          <div className="text-5xl text-white font-bold max-mdl:text-4xl max-md:text-3xl ">
            Would you like to be with me?
            <p className="text-base mt-[10%] text-black font-normal max-mdl:text-sm max-md:text-xs">
              Accessible meals and taxis, just a few clicks away.
            </p>
          </div>
          <div className="flex flex-col mb-[10%] mt-[10%] border-2 bg-white rounded-xl h-[60%] max-mdl:h-[30%]">
            <div className="flex ml-[5%] h-[50px] gap-3 items-center">
              <div className="flex rounded border-none h-[80%] w-[20%] justify-center items-center cursor-pointer hover:shadow-md hover:shadow-secondary hover:scale-110 transition duration-600 ease-in-out max-mdl:text-sm max-md:text-xs">
                <RiMotorbikeFill />
                Delivery
              </div>
              <div className="flex rounded border-none h-[80%] w-[20%] justify-center items-center cursor-pointer hover:shadow-md hover:shadow-secondary hover:scale-110 transition duration-600 ease-in-out max-mdl:text-sm max-md:text-xs">
                <FaShoppingBag />
                Pickup
              </div>
            </div>
            <div className="flex w-full justify-between items-center h-[65px]">
              <div className="flex h-[80%] w-[40%] ml-[5%] rounded-sm border-none items-center hover:shadow-md hover:shadow-secondary">
                <IoMdSearch
                  style={{
                    color: "#EF4358",
                    fontSize: "1.2rem",
                  }}
                  className="ml-[5%]"
                />{" "}
                <input
                  className="w-full h-full outline-none "
                  type="text"
                  placeholder="Search Food"
                />
              </div>
              <div className="max-mdl:text-sm max-md:text-xs mr-[5%] border-none h-[60%] w-[20%] rounded-md bg-navcolor flex items-center justify-center cursor-pointer shadow-md shadow-shadownav ">
                Find Food
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full mt-[10%] max-mdx:hidden">
          <div className="carousel carousel-center max-w-md p-2 rounded-box mt-[10%] mb-[20%] ml-[10%] mr-[10%]">
            {Food.map((data) => (
              <div className="carousel-item h-[100%] w-[70%] max-lgx:h-[50%] max-lgx:w-[90%]">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-[280px] w-auto rounded-box"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mdx:hidden">
          <Carousel>
            <div className="flex gap-3">
              {Food.map((data, index) => (
                <img
                  key={index}
                  src={data.image}
                  alt={data.title}
                  className="h-[250px] w-auto rounded-box"
                />
              ))}
            </div>
          </Carousel>
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

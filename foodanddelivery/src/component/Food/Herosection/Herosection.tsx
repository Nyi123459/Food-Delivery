import React from "react";
import { Food } from "../../../assets";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Carousel from "./Carousel";

const Herosection = () => {
  return (
    <section className="bg-primary h-[760px] md:h-[870px] mdx:h-[550px]">
      <div className="flex max-mdx:flex-col ml-[10%] mr-[10%]">
        <div className="flex flex-col w-3/5 mt-[10%] max-mdx:w-full">
          <div className="text-5xl text-white font-bold max-mdl:text-4xl max-md:text-3xl">
            Would you like to be with me?
            <p className="text-base mt-[10%] text-black font-normal max-mdl:text-sm max-md:text-xs">
              Accessible meals and taxis, just a few clicks away.
            </p>
          </div>
          <div className="flex flex-col mb-[10%] mt-[10%] border-2 bg-white rounded-xl h-[60%] max-mdl:h-[30%]">
            <div className="flex ml-[5%] h-[50px] gap-3 items-center">
              <div className="flex rounded border-none h-[80%] w-[20%] justify-center items-center cursor-pointer hover:shadow-md hover:shadow-secondary hover:scale-110 transition duration-600 ease-in-out max-mdl:text-sm max-md:text-xs">
                <RiMotorbikeFill className="max-sml:hidden" />
                Delivery
              </div>
              <div className="flex rounded border-none h-[80%] w-[20%] justify-center items-center cursor-pointer hover:shadow-md hover:shadow-secondary hover:scale-110 transition duration-600 ease-in-out max-mdl:text-sm max-md:text-xs">
                <FaShoppingBag className="max-sml:hidden" />
                Pickup
              </div>
            </div>
            <div className="flex w-full justify-between items-center h-[65px]">
              <div className="flex h-[80%] w-[40%] ml-[5%] rounded-sm border-none items-center hover:shadow-md hover:shadow-secondary">
                <IoMdSearch
                  style={{ color: "#EF4358", fontSize: "1.2rem" }}
                  className="ml-[5%]"
                />
                <input
                  className="w-full h-full outline-none"
                  type="text"
                  placeholder="Search Food"
                />
              </div>
              <div className="max-mdl:text-sm max-md:text-xs mr-[5%] border-none h-[60%] w-[20%] rounded-md bg-navcolor flex items-center justify-center text-center cursor-pointer shadow-md shadow-shadownav">
                Find Food
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full mt-[10%] max-mdx:hidden">
          <div className="rounded-box mt-[10%] mb-[20%] ml-[10%] mr-[10%]">
            <Carousel autoSlide={true} hideButtons={false}>
              {Food.map((data, index) => (
                <div key={index} className="h-[300px] w-full">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="h-full w-full object-cover rounded-box"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="w-full mt-[10%] mdx:hidden">
          <Carousel autoSlide={true} hideButtons={true}>
            {Food.map((data, index) => (
              <div key={index} className="h-[250px] w-full">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-full w-full object-cover rounded-box"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

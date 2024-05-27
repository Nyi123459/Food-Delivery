import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RiMotorbikeFill } from "react-icons/ri";

interface Text {
  placeholderText: string;
  buttonText: string;
  titleText: string;
  subtitleText: string;
}

const SearchBar = ({
  placeholderText,
  buttonText,
  titleText,
  subtitleText,
}: Text) => {
  return (
    <>
      <div className="text-5xl text-white font-bold max-mdl:text-4xl max-md:text-3xl">
        {titleText}
        <p className="text-base mt-[10%] text-black font-normal max-mdl:text-sm max-md:text-xs">
          {subtitleText}
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
              placeholder={placeholderText}
            />
          </div>
          <div className="max-mdl:text-sm max-md:text-xs mr-[5%] border-none h-[60%] w-[20%] rounded-md bg-navcolor flex items-center justify-center text-center cursor-pointer shadow-md shadow-shadownav">
            {buttonText}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

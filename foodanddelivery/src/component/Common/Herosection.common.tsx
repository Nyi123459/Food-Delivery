import React, { ReactNode } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RiMotorbikeFill } from "react-icons/ri";

interface HerosectionProps {
  sectionClassName: string;
  wrapperClassName: string;
  className: string;
  textClassName: string;
  text: string;
  paragraphClassName: string;
  paragraph: string;
  findText?: string;
  placeholderText?: string;
  imageClassName: string;
  foodAndMall?: boolean;
  children?: ReactNode;
  imageChildren?: ReactNode;
}

const HerosectionCommon: React.FC<HerosectionProps> = ({
  sectionClassName = "",
  wrapperClassName = "",
  className = "",
  textClassName = "",
  text,
  paragraphClassName = "",
  paragraph,
  placeholderText,
  findText,
  imageClassName,
  foodAndMall = false,
  children,
  imageChildren,
}) => {
  return (
    <section className={`${sectionClassName}`}>
      <div className={`${wrapperClassName}`}>
        <div className={`${className}`}>
          <div className={`${textClassName}`}>
            {text}
            <p className={`${paragraphClassName}`}>{paragraph}</p>
          </div>
          {foodAndMall && (
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
                  {findText}
                </div>
              </div>
            </div>
          )}
          {children}
        </div>
        <div className={`${imageClassName}`}>{imageChildren}</div>
      </div>
    </section>
  );
};

export default HerosectionCommon;

import React from "react";
import Sandwiches from "../../../assets/Food/Image/Sandwiches.png";

import { FaAngleRight } from "react-icons/fa";

interface Text {
  headerText: string;
  colorText: string;
  pText: string;
}

export const CardComponent: React.FC<Text> = ({
  headerText,
  colorText,
  pText,
}) => {
  return (
    <div className="w-2/5 max-mdl:w-auto ml-[2%] mt-[5%] max-lgl:mt-[4%] mr-[2%] flex flex-col gap-y-3 max-mdl:ml-[5%] max-mdl:mr-[5%]">
      <h1 className="font-extrabold max-w-15 text-2xl md:text-xl mdx:text-2xl lgx:text-3xl">
        {" "}
        {headerText} <span className="text-shadownav">{colorText}</span>
      </h1>
      <p className="text-gray-600 mdx:text-sm max-mdl:text-sm xs:text-xs max-h-10">
        {pText}
      </p>
      <button
        className="border border-none flex items-center mt-[17%] mdl:h-[15%] w-auto justify-center bg-gradient-to-r from-btcolor1 to-btcolor2 rounded-md hover:-translate-y-1 hover:scale-110 transition duration-700 ease-in-out max-mdl:mt-[5%] max-mdl:mb-[5%] max-mdl:w-fill max-mdl:h-10 max-mdl:ml-[20%] max-mdl:mr-[20%]"
        style={{
          boxShadow:
            "0 4px 6px 0 rgba(255, 184, 0, 0.5), 0 6px 12px 0 rgba(255, 138, 0, 0.5)",
        }}>
        <p className="lg:text-base mdx:text-sm xs:text-xs">
          {" "}
          PROCEED TO ORDER{" "}
        </p>
        <FaAngleRight />
      </button>
    </div>
  );
};

interface ImageProps {
  src: string;
  alt: string;
}

export const ImageHolder: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <div className="w-4/5 max-mdl:w-full max-mdl:h-[200px]">
      <img
        src={src}
        alt={alt}
        className="w-full object-cover rounded-e-lg max-mdl:rounded-b-lg max-mdl:h-[200px]"
      />
    </div>
  );
};

export default Image;

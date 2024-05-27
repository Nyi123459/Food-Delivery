import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

interface NextArrowProps {
  onClick: () => void;
}

const SampleNextArrow: React.FC<NextArrowProps> = ({ onClick }) => {
  return (
    <div
      className="w-14 h-14 rounded-full text-white hover:bg-white hover:text-amber-500 bg-amber-500 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[35%] right-2"
      onClick={onClick}
    >
      <span className="text-xl">
        <FaArrowCircleRight />
      </span>
    </div>
  );
};

export default SampleNextArrow;

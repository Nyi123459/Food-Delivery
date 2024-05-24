import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";

interface PrevArrowProps {
  onClick: () => void;
}

const SamplePrevArrow: React.FC<PrevArrowProps> = ({ onClick }) => {
  return (
    <div
      className="w-14 h-14 rounded-full text-white bg-amber-500  hover:bg-white hover:text-amber-500 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[35%] left-2"
      onClick={onClick}
    >
      <span>
        <FaArrowCircleLeft />
      </span>
    </div>
  );
};

export default SamplePrevArrow;

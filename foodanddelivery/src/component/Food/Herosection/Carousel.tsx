import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children: Food }: any) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? Food.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === Food.length - 1 ? 0 : curr + 1));
  return (
    <div className="overflow-hidden relative w-1/2 flex justify-center">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {Food}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-badge shadow bg-white/80 text-gray-800 hover:bg-white ">
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-badge shadow bg-white/80 text-gray-800 hover:bg-white ">
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

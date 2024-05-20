import { clear } from "console";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({
  children: Food,
  autoSlide = false,
  autoSlideInterval = 3000,
}: any) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? Food.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === Food.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full flex justify-center">
      <div
        className="flex transition-transform ease-out duration-500 gap-2"
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
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {Food.map((_: any, i: number) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
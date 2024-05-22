import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import BestDeal from "../../../assets/Food/Image/Best-Deal.png";
import { ArrowUpRight } from "react-feather";

const ResponsiveComponent: React.FC = () => {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMdUp(window.innerWidth >= 768); // Tailwind's md breakpoint starts at 768px
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full mt-[10%]">
      <div className="relative">
        <img src={BestDeal} alt="BestDeal" className="w-full h-auto" />
        <div
          className="max-md:hover:-translate-y-1 max-md:hover:scale-110 max-md:transition max-md:duration-700 max-md:ease-in-out max-md:flex max-md:justify-center max-md:items-center max-md:disabled:hover absolute top-[25%] left-1/2 transform -translate-x-1/2 text-xl xs:text-xs sm:text-sm sml:text-base mdl:text-xl mdx:text-2xl lgx:text-4xl text-center font-extrabold px-4"
          style={{
            boxShadow: isMdUp
              ? "none"
              : "0 4px 6px 0 rgba(241, 114, 40, 0.5), 0 6px 12px 0 rgba(241, 94, 40, 0.5)",
          }}>
          Are you ready to order with <br /> the best deals?
          <ArrowUpRight className="md:hidden" />
        </div>
        <button
          id="last"
          className="max-md:hidden flex absolute top-[65%] left-1/2 transform -translate-x-1/2 p-2 bg-gradient-to-r from-[#F17228] to-[#F15E28] w-[160px] h-8 lg:w-[180px] lg:h-11 lgx:w-[190px] lgx:h-12 text-xs lg:text-sm text-white font-semibold items-center justify-center rounded-md hover:-translate-y-1 hover:scale-110 transition duration-700 ease-in-out"
          style={{
            boxShadow:
              "0 4px 6px 0 rgba(241, 114, 40, 0.5), 0 6px 12px 0 rgba(241, 94, 40, 0.5)",
          }}>
          PROCEED TO ORDER
          <FaAngleRight />
        </button>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .text-2xl {
            font-size: 1.5rem; /* Adjust font size for smaller screens */
          }

          .absolute {
            
            transform: translate(-50%, -20%);
          }

          button .last{
            top: 60%;
            left: 50%;
            transform: translate(-50%, -20%);
          }
        }

        @media (max-width: 480px) {
          .text-4xl {
            font-size: 1.2rem; /* Further adjust font size for very small screens */
          }

          .absolute {

            transform: translate(-50%, -18%);
          }

          button .last{
            top: 55%;
            left: 50%;
            transform: translate(-50%, -18%);
          }
        }
      `}</style>
    </div>
  );
};

export default ResponsiveComponent;

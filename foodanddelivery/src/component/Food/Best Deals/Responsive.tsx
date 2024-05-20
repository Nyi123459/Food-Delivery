import React from "react";
import { FaAngleRight } from "react-icons/fa";
import BestDeal from "../../../assets/Food/Image/Best-Deal.png";

const ResponsiveComponent: React.FC = () => {
  return (
    <div className="w-full mt-[10%]">
      <div className="relative">
        <img src={BestDeal} alt="BestDeal" className="w-full h-auto" />
        <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 text-4xl text-center font-extrabold px-4">
          Are you ready to order with <br /> the best deals?
        </div>
        <button
          className="absolute top-[65%] left-1/2 transform -translate-x-1/2 p-2 bg-gradient-to-r from-[#F17228] to-[#F15E28] w-[190px] h-12 text-sm text-white font-semibold flex items-center justify-center rounded-md hover:-translate-y-1 hover:scale-110 transition duration-700 ease-in-out"
          style={{
            boxShadow:
              "0 4px 6px 0 rgba(241, 114, 40, 0.5), 0 6px 12px 0 rgba(241, 94, 40, 0.5)",
          }}>
          PROCEED TO ORDER <FaAngleRight />
        </button>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .text-2xl {
            font-size: 1.5rem; /* Adjust font size for smaller screens */
          }

          .absolute {
            top: 20%;
            left: 50%;
            transform: translate(-50%, -20%);
          }

          button {
            top: 60%;
            left: 50%;
            transform: translate(-50%, -20%);
            width: 160px; /* Adjust button width */
            height: 10; /* Adjust button height */
          }
        }

        @media (max-width: 480px) {
          .text-4xl {
            font-size: 1.2rem; /* Further adjust font size for very small screens */
          }

          .absolute {
            top: 18%;
            left: 50%;
            transform: translate(-50%, -18%);
          }

          button {
            top: 55%;
            left: 50%;
            transform: translate(-50%, -18%);
            width: 140px; /* Adjust button width */
            height: 8; /* Adjust button height */
          }
        }
      `}</style>
    </div>
  );
};

export default ResponsiveComponent;
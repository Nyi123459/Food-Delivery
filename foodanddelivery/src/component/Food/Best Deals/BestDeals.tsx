import React from "react";
import Sandwiches from "../../../assets/Food/Image/Sandwiches.png";
import FriedChicken from "../../../assets/Food/Image/FriedChicken.png";
import PizzaDeal from "../../../assets/Food/Image/Pizza-deal.png";
import { FaAngleRight } from "react-icons/fa6";
import ResponsiveComponent from "./Responsive";

const BestDeals = () => {
  return (
    <section className="mt-[5%] mb-[10%]">
      <div className="flex flex-col ml-[10%] mr-[10%] gap-y-20">
        <div className="flex border rounded-lg shadow-lg shadow-gray-400">
          <div className="w-2/5 ml-[2%] mt-[5%] max-lgl:mt-[4%] mr-[2%] flex flex-col gap-y-3">
            <h1 className="text-3xl font-extrabold max-lgx:text-2xl max-w-15">
              {" "}
              Best deals{" "}
              <span className="text-shadownav">Crispy Sandwiches</span>
            </h1>
            <p className="text-gray-600 max-lgx:text-sm max-h-10">
              Enjoy the large size of sandwiches. Complete perfect slice of
              sandwiches.
            </p>
            <button
              className="border border-none flex items-center mt-[17%] max-lgl:mt-[10%] h-10 text-sm justify-center bg-gradient-to-r from-btcolor1 to-btcolor2 rounded-md hover:-translate-y-1 hover:scale-110 transition duration-700 ease-in-out max-lgx:text-sm"
              style={{
                boxShadow:
                  "0 4px 6px 0 rgba(255, 184, 0, 0.5), 0 6px 12px 0 rgba(255, 138, 0, 0.5)",
              }}
            >
              PROCEED TO ORDER <FaAngleRight />
            </button>
          </div>
          <div className="w-4/5">
            <img
              src={Sandwiches}
              alt="Sandwiches"
              className="w-full object-cover rounded-e-lg"
            />
          </div>
        </div>
        <div className="flex border rounded-lg shadow-lg shadow-gray-400">
          <div className="w-4/5">
            <img
              src={FriedChicken}
              alt="FriedChicken"
              className="w-full object-cover rounded-s-lg"
            />
          </div>
          <div className="w-2/5 ml-[2%] mt-[5%] mr-[2%] flex flex-col gap-y-3">
            <h1 className="text-3xl font-extrabold max-lgx:text-2xl max-h-15">
              Celebrate parties with{" "}
              <span className="text-shadownav">Fried Chicken</span>
            </h1>
            <p className="text-gray-600 max-lgx:text-sm max-h-10">
              Get the best fried chicken smeared witha a lip smacking lemon
              chilli flavor.Check out best deals for fried chicken
            </p>
            <button
              className="border border-none flex items-center mt-[17%] h-10 text-sm justify-center bg-gradient-to-r from-btcolor1 to-btcolor2 rounded-md hover:-translate-y-1 hover:scale-110 transition duration-700 ease-in-out max-lgx:text-sm"
              style={{
                boxShadow:
                  "0 4px 6px 0 rgba(255, 184, 0, 0.5), 0 6px 12px 0 rgba(255, 138, 0, 0.5)",
              }}
            >
              PROCEED TO ORDER <FaAngleRight />
            </button>
          </div>
        </div>
        <div className="flex border rounded-lg shadow-lg shadow-gray-400">
          <div className="w-2/5 ml-[2%] mt-[5%] mr-[2%] flex flex-col gap-y-3">
            <h1 className="text-3xl max-lgx:text-2xl font-extrabold max-h-15">
              Wanna eat hot & spicy{" "}
              <span className="text-shadownav">Pizza?</span>
            </h1>
            <p className="text-gray-600 max-lgx:text-sm max-h-10">
              Pair up with a friend and enjoy the hot and crispy pizza pops. Try
              it with the best deals.
            </p>
            <button
              className="border border-none flex items-center mt-[17%] h-10 text-sm justify-center bg-gradient-to-r from-btcolor1 to-btcolor2 rounded-md hover:-translate-y-1 hover:scale-110 transition duration-700 ease-in-out max-lgx:text-sm"
              style={{
                boxShadow:
                  "0 4px 6px 0 rgba(255, 184, 0, 0.5), 0 6px 12px 0 rgba(255, 138, 0, 0.5)",
              }}
            >
              PROCEED TO ORDER <FaAngleRight />
            </button>
          </div>
          <div className="w-4/5 ">
            <img
              src={PizzaDeal}
              alt="PizzaDeal"
              className="w-full object-cover rounded-e-lg"
            />
          </div>
        </div>
      </div>
      <ResponsiveComponent />
    </section>
  );
};

export default BestDeals;

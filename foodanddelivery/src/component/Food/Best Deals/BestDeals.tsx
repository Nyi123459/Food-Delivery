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
        <div className="flex max-mdl:flex-col border rounded-lg shadow-lg shadow-gray-400">
          <div className="w-2/5 max-mdl:w-auto ml-[2%] mt-[5%] max-lgl:mt-[4%] mr-[2%] flex flex-col gap-y-3 max-mdl:ml-[5%] max-mdl:mr-[5%]">
            <h1 className="font-extrabold max-w-15 text-2xl md:text-xl mdx:text-2xl lgx:text-3xl">
              {" "}
              Best deals{" "}
              <span className="text-shadownav">Crispy Sandwiches</span>
            </h1>
            <p className="text-gray-600 mdx:text-sm max-mdl:text-sm xs:text-xs max-h-10">
              Enjoy the large size of sandwiches. Complete perfect slice of
              sandwiches.
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
          <div className="w-4/5 max-mdl:w-full max-mdl:h-[200px]">
            <img
              src={Sandwiches}
              alt="Sandwiches"
              className="w-full object-cover rounded-e-lg max-mdl:rounded-b-lg  max-mdl:h-[200px]"
            />
          </div>
        </div>
        <div className="flex max-mdl:flex-col border rounded-lg shadow-lg shadow-gray-400">
          <div className="w-4/5 max-mdl:w-full max-mdl:h-[200px]">
            <img
              src={FriedChicken}
              alt="FriedChicken"
              className="w-full object-cover rounded-l-lg max-mdl:rounded-t-lg max-mdl:h-[200px]"
            />
          </div>
          <div className="w-2/5 max-mdl:w-auto ml-[2%] mt-[5%] max-lgl:mt-[4%] mr-[2%] flex flex-col gap-y-3 max-mdl:ml-[5%] max-mdl:mr-[5%]">
            <h1 className="font-extrabold max-w-15 text-2xl md:text-xl mdx:text-2xl lgx:text-3xl">
              Celebrate parties with{" "}
              <span className="text-shadownav">Fried Chicken</span>
            </h1>
            <p className="text-gray-600 mdx:text-sm max-mdl:text-sm xs:text-xs max-h-10">
              Get the best fried chicken smeared witha a lip smacking lemon
              chilli flavor.Check out best deals for fried chicken
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
        </div>
        <div className="flex max-mdl:flex-col border rounded-lg shadow-lg shadow-gray-400">
          <div className="w-2/5 max-mdl:w-auto ml-[2%] mt-[5%] max-lgl:mt-[4%] mr-[2%] flex flex-col gap-y-3 max-mdl:ml-[5%] max-mdl:mr-[5%]">
            <h1 className="font-extrabold max-w-15 text-2xl md:text-xl mdx:text-2xl lgx:text-3xl">
              Wanna eat hot & spicy{" "}
              <span className="text-shadownav">Pizza?</span>
            </h1>
            <p className="text-gray-600 mdx:text-sm max-mdl:text-sm xs:text-xs max-h-10">
              Pair up with a friend and enjoy the hot and crispy pizza pops. Try
              it with the best deals.
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
          <div className="w-4/5 max-mdl:w-full max-mdl:h-[200px]">
            <img
              src={PizzaDeal}
              alt="PizzaDeal"
              className="w-full object-cover rounded-e-lg max-mdl:rounded-b-lg max-mdl:h-[200px]"
            />
          </div>
        </div>
      </div>
      <ResponsiveComponent />
    </section>
  );
};

export default BestDeals;

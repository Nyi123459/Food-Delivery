import React from "react";
import Sandwiches from "../../../assets/Food/Image/Sandwiches.png";
import FriedChicken from "../../../assets/Food/Image/FriedChicken.png";
import PizzaDeal from "../../../assets/Food/Image/Pizza-deal.png";
import ResponsiveComponent from "./Responsive";
import { CardComponent } from "./CardComponent";
import { ImageHolder } from "./CardComponent";

const BestDeals = () => {
  return (
    <section className="mt-[5%] mb-[10%]">
      <div className="flex flex-col ml-[10%] mr-[10%] gap-y-20">
        <div className="flex max-mdl:flex-col border rounded-lg shadow-lg shadow-gray-400">
          <CardComponent
            headerText={"Best deals"}
            colorText={"Crispy Sandwiches"}
            pText={
              "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches."
            }
          />
          <ImageHolder src={Sandwiches} alt={"Sandwiches"} />
        </div>
        <div className="flex max-mdl:flex-col border rounded-lg shadow-lg shadow-gray-400">
          <ImageHolder src={FriedChicken} alt={"Fried-Chicken"} />
          <CardComponent
            headerText={"Celebrate parties with"}
            colorText={"Fried Chicken"}
            pText={
              "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken."
            }
          />
        </div>
        <div className="flex max-mdl:flex-col border rounded-lg shadow-lg shadow-gray-400">
          <CardComponent
            headerText={"Wanna eat hot & spicy"}
            colorText={"Pizza?"}
            pText={
              "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals."
            }
          />
          <ImageHolder src={PizzaDeal} alt={"Pizza"} />
        </div>
      </div>
      <ResponsiveComponent />
    </section>
  );
};

export default BestDeals;

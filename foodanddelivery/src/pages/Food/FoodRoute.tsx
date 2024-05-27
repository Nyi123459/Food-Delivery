import Navbar from "../../component/Food/Navbar/Navbar";
import Herosection from "../../component/Food/Herosection/Herosection";
import Instruction from "../../component/Food/Instruction/Instruction";

import DailyDeal from "../../component/Food/DailyDeal/DailyDeal";
import BestDeals from "../../component/Food/Best Deals/BestDeals";
import FavoriteCuisines from "../../component/Food/FavoriteCuisines/FavoriteCuisines";

import OrderItAgain from "../../component/Food/Order It Again/OrderItAgain";

const FoodRoute = () => {
  return (
    <div>
      <Navbar />
  
      <Instruction />
      <FavoriteCuisines/>
      <DailyDeal/>
      <BestDeals />
    </div>
  );
};

export default FoodRoute;

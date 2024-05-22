import Navbar from "../../component/Food/Navbar/Navbar";
import Herosection from "../../component/Food/Herosection/Herosection";
import Instruction from "../../component/Food/Instruction/Instruction";
import DailyDeal from "../../component/Food/DailyDeal/DailyDeal";
import BestDeals from "../../component/Food/Best Deals/BestDeals";
import FavoriteCuisines from "../../component/Food/FavoriteCuisines/FavoriteCuisines";


const FoodRoute = () => {
  return (
    <div>
    {/*   <Navbar />
      <Herosection />
      <Instruction /> */}
      <DailyDeal/>
      <Instruction />
      <FavoriteCuisines/>
      <BestDeals />
      
    </div>
  );
};

export default FoodRoute;

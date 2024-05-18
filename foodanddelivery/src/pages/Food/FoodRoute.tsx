import Navbar from "../../component/Food/Navbar/Navbar";
import Herosection from "../../component/Food/Herosection/Herosection";
import Instruction from "../../component/Food/Instruction/Instruction";
import BestDeals from "../../component/Food/Best Deals/BestDeals";

const FoodRoute = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Instruction />
      <BestDeals />
    </div>
  );
};

export default FoodRoute;

import React from "react";
import Herosection from "../../component/Mall/Herosection/Herosection";
import Navbar from "../../component/Common/Navbar/Navbar.common";
import FoodHighlights from "../../component/Mall/Food Highlights/FoodHighlights";
import Discount from "../../component/Mall/Discount/Cupons";
import CanOrder from "../../component/Mall/Can Order Now/CanOrder";
import MallBrand from "../../component/Mall/MallBrand/MallBrand";

const MallRoute = () => {
  return (
    <div>
      <Navbar notHome={true} />
      <Herosection />
      <FoodHighlights />
      <CanOrder />
      <Discount />
      <MallBrand />
    </div>
  );
};

export default MallRoute;

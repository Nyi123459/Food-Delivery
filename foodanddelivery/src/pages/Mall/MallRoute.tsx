import React from "react";
import Herosection from "../../component/Mall/Herosection/Herosection";
import Navbar from "../../component/Food/Navbar/Navbar";
import FoodHighlights from "../../component/Mall/Food Highlights/FoodHighlights";
import Discount from "../../component/Mall/Discount/Cupons";
import CanOrder from "../../component/Mall/Can Order Now/CanOrder";
import MallBrand from "../../component/Mall/MallBrand/MallBrand";
import TopPicks from "../../component/Mall/TopPicks/TopPicks";
import FreeDelivery from "../../component/Mall/FreeDelivery/FreeDelivery";
import Footer from "../../component/Common/Footer/Footer";

const MallRoute = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <FoodHighlights />
      <CanOrder />
      <Discount />
      <MallBrand />
      <TopPicks />
      <FreeDelivery />
      <Footer />
    </div>
  );
};

export default MallRoute;

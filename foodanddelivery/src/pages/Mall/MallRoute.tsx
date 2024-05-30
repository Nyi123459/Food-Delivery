import React from "react";
import Herosection from "../../component/Mall/Herosection/Herosection";
import Navbar from "../../component/Food/Navbar/Navbar";
import Discount from "../../component/Mall/Discount/Discount";
import FoodHighlights from "../../component/Mall/Food Highlights/FoodHighlights";

const MallRoute = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <FoodHighlights/>
      <Discount />
    </div>
  );
};

export default MallRoute;

import React from "react";
import Herosection from "../../component/Mall/Herosection/Herosection";
import Navbar from "../../component/Food/Navbar/Navbar";
import Discount from "../../component/Mall/Discount/Cupons";
import CanOrder from "../../component/Mall/Can Order Now/CanOrder";
import MallBrand from "../../component/Mall/MallBrand/MallBrand";

const MallRoute = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <CanOrder />
      <Discount />
      <MallBrand />
    </div>
  );
};

export default MallRoute;

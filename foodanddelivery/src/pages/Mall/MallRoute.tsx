import React from "react";
import Herosection from "../../component/Mall/Herosection/Herosection";
import Navbar from "../../component/Food/Navbar/Navbar";
import Discount from "../../component/Mall/Discount/Discount";

const MallRoute = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Discount />
    </div>
  );
};

export default MallRoute;
